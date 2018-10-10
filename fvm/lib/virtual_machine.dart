library fvm.virtual_machine;

import 'dart:typed_data';

part 'src/virtual_machine/heap.dart';
part 'src/virtual_machine/instructions.dart';

const int defaultStackSize = 2 << 8;

/// This class stores the hardware state of a simulated F machine. This includes
/// the values of the registers and the contents of the stack, heap, and program
/// memory.
///
/// A VM object is mutable and supports modifications from outside. To run
/// [program], you can use [executeProgram] or [executeCurrentInstruction].
class VM {
  VM(List<Instruction> program, Map<String, int> labelAddresses,
      {int stackSize = defaultStackSize})
      : program = List.unmodifiable(program),
        labelAddresses = Map.unmodifiable(labelAddresses),
        stack = Uint32List(stackSize);

  final List<Instruction> program;
  final Map<String, int> labelAddresses;
  final Uint32List stack;
  final List<TaggedObject> heap = [];

  int programCounter = 0;
  int stackPointer = -1;
  int stackPointer0 = -1;
  int framePointer = -1;
  int globalPointer = -1;
  int nextHeapAddress = 0;

  /// Fetches the instruction pointed to by [programCounter]; increases
  /// [programCounter] by 1; and then executes the fetched instruction.
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

  /// Pushes [object] onto the heap and returns its address.
  int allocate(TaggedObject object) {
    heap.add(object);
    return nextHeapAddress += object.sizeInCells;
  }
}
