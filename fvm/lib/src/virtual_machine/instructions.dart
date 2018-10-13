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
