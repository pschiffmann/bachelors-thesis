import 'dart:typed_data';

const int defaultStackSize = 2 << 8;
const int defaultHeapSize = 2 << 8;

/// This class stores the hardware state of a simulated F machine. This includes
/// the values of the registers and the contents of the stack, heap, and program
/// memory.
///
/// A VM object is mutable and supports modifications from outside. To run
/// [program], you can use [executeProgram] or [executeCurrentInstruction].
class VM {
  VM(List<Instruction> program, Map<String, int> labelAddresses,
      {int stackSize = defaultStackSize, int heapSize = defaultHeapSize})
      : program = List.unmodifiable(program),
        labelAddresses = Map.unmodifiable(labelAddresses),
        stack = Uint32List(stackSize),
        heap = Uint32List(heapSize);

  final List<Instruction> program;
  final Map<String, int> labelAddresses;
  final Uint32List stack;
  final Uint32List heap;

  int stackPointer = -1;
  int programCounter = 0;

  void executeCurrentInstruction() => program[programCounter++].execute(this);

  int executeProgram() {
    // ignore: literal_only_boolean_expressions
    while (true) {
      final instruction = program[programCounter++];
      if (instruction is HaltInstruction) {
        return stack[stackPointer];
      } else {
        instruction.execute(this);
      }
    }
  }

  /// Returns the value from the top of [stack], and decrements [stackPointer]
  /// by 1.
  int pop() => stack[stackPointer--];

  /// Puts [value] on the top of the stack, and increments [stackPointer] by 1.
  int push(int value) => stack[++stackPointer] = value;
}

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
