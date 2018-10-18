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
  void execute(VM vm) => vm.programCounter = vm.lookupLabel(target);
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
      vm.programCounter = vm.lookupLabel(target);
    }
  }

  @override
  String toString() => 'jumpz $target';
}

abstract class BinaryOperatorInstruction implements Instruction {
  const BinaryOperatorInstruction();
  int calculate(int op1, int op2);
  @override
  void execute(VM vm) {
    vm.stackPointer--;
    vm.stack[vm.stackPointer] =
        calculate(vm.stack[vm.stackPointer], vm.stack[vm.stackPointer + 1]);
  }
}

class AddInstruction extends BinaryOperatorInstruction {
  const AddInstruction();
  @override
  int calculate(int op1, int op2) => op1 + op2;
  @override
  String toString() => 'add';
}

class SubtractInstruction extends BinaryOperatorInstruction {
  const SubtractInstruction();
  @override
  int calculate(int op1, int op2) => op1 - op2;
  @override
  String toString() => 'sub';
}

class MultiplyInstruction extends BinaryOperatorInstruction {
  const MultiplyInstruction();
  @override
  int calculate(int op1, int op2) => op1 * op2;
  @override
  String toString() => 'mul';
}

class DivideInstruction extends BinaryOperatorInstruction {
  const DivideInstruction();
  @override
  int calculate(int op1, int op2) => op1 ~/ op2;
  @override
  String toString() => 'div';
}

class ModuloInstruction extends BinaryOperatorInstruction {
  const ModuloInstruction();
  @override
  int calculate(int op1, int op2) => op1 % op2;
  @override
  String toString() => 'mod';
}

class NegateInstruction implements Instruction {
  const NegateInstruction();
  @override
  void execute(VM vm) => vm.push(-vm.pop());
  @override
  String toString() => 'neg';
}

class EqualsInstruction extends BinaryOperatorInstruction {
  const EqualsInstruction();
  @override
  int calculate(int op1, int op2) => op1 == op2 ? 1 : 0;
  @override
  String toString() => 'eq';
}

class NotEqualsInstruction extends BinaryOperatorInstruction {
  const NotEqualsInstruction();
  @override
  int calculate(int op1, int op2) => op1 != op2 ? 1 : 0;
  @override
  String toString() => 'neq';
}

class LessThanInstruction extends BinaryOperatorInstruction {
  const LessThanInstruction();
  @override
  int calculate(int op1, int op2) => op1 < op2 ? 1 : 0;
  @override
  String toString() => 'le';
}

class LessEqualsInstruction extends BinaryOperatorInstruction {
  const LessEqualsInstruction();
  @override
  int calculate(int op1, int op2) => op1 <= op2 ? 1 : 0;
  @override
  String toString() => 'leq';
}

class GreaterThanInstruction extends BinaryOperatorInstruction {
  const GreaterThanInstruction();
  @override
  int calculate(int op1, int op2) => op1 > op2 ? 1 : 0;
  @override
  String toString() => 'gr';
}

class GreaterEqualsInstruction extends BinaryOperatorInstruction {
  const GreaterEqualsInstruction();
  @override
  int calculate(int op1, int op2) => op1 >= op2 ? 1 : 0;
  @override
  String toString() => 'geq';
}

class AndInstruction extends BinaryOperatorInstruction {
  const AndInstruction();
  @override
  int calculate(int op1, int op2) => op1 != 0 && op2 != 0 ? 1 : 0;
  @override
  String toString() => 'and';
}

class OrInstruction extends BinaryOperatorInstruction {
  const OrInstruction();
  @override
  int calculate(int op1, int op2) => op1 != 0 || op2 != 0 ? 1 : 0;
  @override
  String toString() => 'or';
}

class NotInstruction implements Instruction {
  const NotInstruction();
  @override
  void execute(VM vm) => vm.push(vm.pop() == 0 ? 1 : 0);
  @override
  String toString() => 'not';
}

class SlideInstruction implements Instruction {
  SlideInstruction(this.shiftAmount, this.elementCount) {
    if (shiftAmount < 0 || elementCount < 0) {
      throw ArgumentError('Both arguments must be non-negative');
    }
  }

  final int shiftAmount;
  final int elementCount;

  @override
  void execute(VM vm) {
    if (shiftAmount == 0) {
      return;
    }
    final currentStart = vm.stackPointer - (elementCount - 1);
    final newStart = vm.stackPointer - (shiftAmount + elementCount - 1);
    for (var i = 0; i < elementCount; i++) {
      vm.stack[newStart + i] = vm.stack[currentStart + i];
    }
    vm.stackPointer = newStart + elementCount - 1;
  }

  @override
  String toString() => 'slide ';
}

class HaltInstruction implements Instruction {
  const HaltInstruction();
  @override
  void execute(VM vm) =>
      throw UnsupportedError('`halt` instruction cannot be executed');
  @override
  String toString() => 'halt';
}

class PushLocalInstruction implements Instruction {
  PushLocalInstruction(this.offset);
  final int offset;
  @override
  void execute(VM vm) => vm.push(vm.stack[vm.stackPointer0 + offset]);
  @override
  String toString() => 'pushL $offset';
}

class PushGlobalInstruction implements Instruction {
  PushGlobalInstruction(this.offset);
  final int offset;
  @override
  void execute(VM vm) => vm.push(vm.globalVector.values[offset]);
  @override
  String toString() => 'pushG $offset';
}

class UnwrapTaggedIntInstruction implements Instruction {
  const UnwrapTaggedIntInstruction();
  @override
  void execute(VM vm) {
    final obj = vm.heap[vm.peek()];
    if (obj is TaggedInt) {
      vm.replace(obj.value);
    } else {
      throw const VmRuntimeException('no B-object!');
    }
  }

  @override
  String toString() => 'getB';
}

class UnwrapTaggedListInstruction implements Instruction {
  UnwrapTaggedListInstruction(this.length);
  final int length;
  @override
  void execute(VM vm) {
    final obj = vm.heap[vm.peek()];
    if (obj is TaggedList) {
      if (obj.length < length) {
        throw const VmRuntimeException('Too few elements in global vector');
      }
      vm.stack.setRange(vm.stackPointer, vm.stackPointer + length, obj.values);
      vm.stackPointer += length - 1;
    } else {
      throw const VmRuntimeException('no V-object!');
    }
  }

  @override
  String toString() => 'getV';
}

class AllocateTaggedIntInstruction implements Instruction {
  const AllocateTaggedIntInstruction();
  @override
  void execute(VM vm) => vm.push(vm.allocate(TaggedInt(vm.pop())));
  @override
  String toString() => 'mkB';
}

class AllocateTaggedListInstruction implements Instruction {
  AllocateTaggedListInstruction(this.length);
  final int length;

  @override
  void execute(VM vm) {
    final references =
        vm.stack.sublist(vm.stackPointer - length + 1, vm.stackPointer + 1);
    vm
      ..stackPointer -= length
      ..push(vm.allocate(TaggedList(references)));
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
    final argumentVector = vm.allocate(const TaggedList.empty());
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

class SetStackPointer0Instruction implements Instruction {
  const SetStackPointer0Instruction();
  @override
  void execute(VM vm) => vm.stackPointer0 = vm.stackPointer;
  @override
  String toString() => 'setSP0';
}

class MarkInstruction implements Instruction {
  MarkInstruction(this.returnLabel);
  final String returnLabel;
  @override
  void execute(VM vm) {
    final returnAddress = vm.lookupLabel(returnLabel);
    vm
      ..push(vm.stackPointer0)
      ..push(vm.globalPointer)
      ..push(vm.framePointer)
      ..push(returnAddress)
      ..framePointer = vm.stackPointer;
  }

  @override
  String toString() => 'mark $returnLabel';
}

class MarkProgramCounterInstruction implements Instruction {
  const MarkProgramCounterInstruction();
  @override
  void execute(VM vm) {
    vm
      ..push(vm.stackPointer0)
      ..push(vm.globalPointer)
      ..push(vm.framePointer)
      ..push(vm.programCounter)
      ..framePointer = vm.stackPointer;
  }

  @override
  String toString() => 'markpc';
}

class Apply1Instruction implements Instruction {
  const Apply1Instruction();
  @override
  void execute(VM vm) {
    final fAddress = vm.pop();
    final fObj = vm.dereferenceAs<TaggedFunction>(fAddress);
    final args = vm.dereferenceAs<TaggedList>(fObj.argumentVectorAddress);
    vm
      ..pushAll(args.values)
      ..push(fAddress);
  }

  @override
  String toString() => 'apply1';
}

class Apply0Instruction implements Instruction {
  const Apply0Instruction();
  @override
  void execute(VM vm) {
    final address = vm.pop();
    final obj = vm.heap[address];
    if (obj is TaggedFunction) {
      vm
        ..globalPointer = obj.globalVectorAddress
        ..programCounter = vm.lookupLabel(obj.functionLabel);
    } else if (obj is TaggedClosure) {
      vm
        ..globalPointer = obj.globalVectorAddress
        ..programCounter = vm.lookupLabel(obj.expressionLabel);
    } else {
      throw VmRuntimeException('No C-oject or F-object at $address');
    }
  }

  @override
  String toString() => 'apply0';
}
