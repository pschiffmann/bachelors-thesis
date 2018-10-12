part of fvm.virtual_machine;

/// This class serves as the interface for instructions. Instruction objects
/// encode an opcode (through their [runtimeType]) and the constant arguments
/// required by this opcode. Instruction objects are immutable.
abstract class Instruction {
  /// Executes this instruction on [vm], modifying its stack, heap, and/or
  /// registers.
  void execute(VM vm);
}

/// Pushes [value] onto the stack.
class LoadConstantInstruction implements Instruction {
  LoadConstantInstruction(this.value);
  final int value;

  @override
  void execute(VM vm) => vm.push(value);
  @override
  String toString() => 'loadc $value';
}

/// Sets the program counter to [target].
class JumpInstruction implements Instruction {
  JumpInstruction(this.target);
  final String target;

  @override
  void execute(VM vm) => vm.programCounter = vm.labelAddresses[target] ??
      (throw StateError('Label `$target` is not declared in this program'));
  @override
  String toString() => 'jump $target';
}

/// Sets the program counter to [target] if the top stack value is 0.
class JumpIfZeroInstruction implements Instruction {
  JumpIfZeroInstruction(this.target);
  final String target;

  @override
  void execute(VM vm) {
    if (vm.pop() == 0) {
      vm.programCounter = vm.labelAddresses[target] ??
          (throw StateError('Label `$target` is not declared in this program'));
    }
  }

  @override
  String toString() => 'jumpz $target';
}

class AddInstruction implements Instruction {
  const AddInstruction();
  @override
  void execute(VM vm) => vm.push(vm.pop() + vm.pop());
  @override
  String toString() => 'add';
}

class SubtractInstruction implements Instruction {
  const SubtractInstruction();
  @override
  void execute(VM vm) => vm.push(vm.pop() + vm.pop());
  @override
  String toString() => 'sub';
}

class HaltInstruction implements Instruction {
  const HaltInstruction();
  @override
  void execute(VM vm) =>
      throw UnsupportedError('`halt` instruction cannot be executed');
  @override
  String toString() => 'halt';
}

class AllocateTaggedIntInstruction implements Instruction {
  const AllocateTaggedIntInstruction();
  @override
  void execute(VM vm) => vm.push(vm.allocate(TaggedInt(vm.pop())));
  @override
  String toString() => 'mkB';
}

class AllocateTaggedReferenceListInstruction implements Instruction {
  AllocateTaggedReferenceListInstruction(this.length);
  final int length;

  @override
  void execute(VM vm) {
    final references =
        vm.stack.sublist(vm.stackPointer - length + 1, vm.stackPointer + 1);
    vm
      ..stackPointer -= length
      ..push(vm.allocate(TaggedReferenceList(references)));
  }

  @override
  String toString() => 'mkV $length';
}

class AllocateTaggedFunctionInstruction implements Instruction {
  AllocateTaggedFunctionInstruction(this.functionLabel);
  final String functionLabel;

  @override
  void execute(VM vm) {
    final globalVector = vm.pop();
    final argumentVector = vm.allocate(const TaggedReferenceList.empty());
    vm.push(vm
        .allocate(TaggedFunction(functionLabel, globalVector, argumentVector)));
  }

  @override
  String toString() => 'mkF $functionLabel';
}

class AllocateTaggedClosureInstruction implements Instruction {
  AllocateTaggedClosureInstruction(this.expressionLabel);
  final String expressionLabel;
  @override
  void execute(VM vm) =>
      vm.push(vm.allocate(TaggedClosure(expressionLabel, vm.pop())));
  @override
  String toString() => 'mkC $expressionLabel';
}
