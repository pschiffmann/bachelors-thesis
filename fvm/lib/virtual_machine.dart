library fvm.virtual_machine;

import 'dart:typed_data';

part 'src/virtual_machine/heap.dart';
part 'src/virtual_machine/instructions.dart';

const int defaultInitialStackSize = 10;

/// Because the heap grows towards 0, heap allocation starts at this address.
const int defaultMaxAddress = (2 << 16) - 1;

/// This class stores the hardware state of a simulated F machine. This includes
/// the values of the registers and the contents of the stack, heap, and program
/// memory.
///
/// A VM object is mutable and supports modifications from outside. To run
/// [program], you can use [executeProgram] or [executeCurrentInstruction].
class VM {
  VM(List<Instruction> program, Map<String, int> labelAddresses,
      {this.maxAddress = defaultMaxAddress,
      int initialStackSize = defaultInitialStackSize})
      : program = List.unmodifiable(program),
        labelAddresses = Map.unmodifiable(labelAddresses),
        stack = Int32List(initialStackSize);

  final List<Instruction> program;
  final Map<String, int> labelAddresses;
  final int maxAddress;
  final Int32List stack;

  /// Stores heap-allocated objects. The keys are the addresses.
  final Map<int, TaggedObject> heap = {};

  int programCounter = 0;
  int stackPointer = -1;
  int stackPointer0 = -1;
  int framePointer = -1;
  int globalPointer = -1;

  /// Returns highest address in [heap] at which no object is allocated.
  int get nextHeapAddress =>
      heap.isEmpty ? maxAddress : heap.keys.last - heap.values.last.sizeInCells;

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

  /// Returns the value from the top of [stack] without changing [stackPointer].
  int peek() => stack[stackPointer];

  /// Puts [value] on the top of the stack, and increments [stackPointer] by 1.
  int push(int value) => stack[++stackPointer] = value;

  /// Replaces the current top of the stack with [value].
  int replace(int value) => stack[stackPointer] = value;

  /// Pushes [object] onto the heap and returns its address.
  int allocate(TaggedObject object) {
    final address = nextHeapAddress;
    heap[address] = object;
    return address;
  }
}

/// Thrown by [Instruction]s if they encounter an invalid situation, for example
/// if a dereferenced pointer doesn't point to a [TaggedObject] of the correct
/// type.
class VmRuntimeException implements Exception {
  const VmRuntimeException(this.message);

  final String message;
}
