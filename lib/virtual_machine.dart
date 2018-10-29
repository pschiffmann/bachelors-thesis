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
abstract class VM {
  VM(List<Instruction> program, Map<String, int> labelAddresses,
      {this.maxAddress = defaultMaxAddress,
      int initialStackSize = defaultInitialStackSize})
      : program = List.unmodifiable(program),
        _labelAddresses = Map.unmodifiable(labelAddresses),
        stack = Int32List(initialStackSize);

  final List<Instruction> program;
  final Map<String, int> _labelAddresses;
  final int maxAddress;
  final Int32List stack;

  /// Stores heap-allocated objects. The keys are the addresses.
  final Map<int, TaggedObject> _heap = {};

  /// Stores the address of the instruction in [program] that will be executed
  /// by [executeCurrentInstruction]; abbreviated to `PC`.
  int programCounter = 0;

  /// Points to the top value in [stack]; abbreviated to `SP`.
  int stackPointer = -1;

  /// Points to the top function argument of the current call frame; abbreviated
  /// to `SP0`.
  int stackPointer0 = -1;

  /// Points to the top organizatorial cell of the last stored call frame in
  /// [stack]; abbreviated to `FP`.
  int framePointer = -1;

  /// Points to the address in [_heap] of the current global vector (as an
  /// [TaggedList]); abbreviated to `GP`.
  int globalPointer = -1;

  TaggedList get globalVector {
    final obj = _heap[globalPointer];
    if (obj is TaggedList) {
      return obj;
    } else {
      throw const VmRuntimeException(
          "global pointer doesn't point to a V-object");
    }
  }

  /// Returns highest address in [_heap] at which no object is allocated.
  int get nextHeapAddress => _heap.isEmpty
      ? maxAddress
      : _heap.keys.last - _heap.values.last.sizeInCells;

  /// Returns `true` if the VM reached a [halt].
  bool get terminated => program[programCounter] == halt;

  /// Fetches the instruction pointed to by [programCounter]; increases
  /// [programCounter] by 1; and then executes the fetched instruction.
  void executeCurrentInstruction() {
    if (!terminated) {
      program[programCounter++].execute(this);
    }
  }

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

  /// Returns the `count` top stack values. The current top value will be placed
  /// at the last position in the result list.
  List<int> popAll(int count) {
    stackPointer -= count;
    return stack.sublist(stackPointer + 1, stackPointer + count + 1);
  }

  /// Returns the value from the top of [stack] without changing [stackPointer].
  int peek() => stack[stackPointer];

  /// Increments [stackPointer] by 1, then stores [value] at that address.
  void push(int value) => stack[++stackPointer] = value;

  /// Pushes all `values` onto the stack. Shorthand for `values.forEach(push)`.
  void pushAll(List<int> values) {
    stack.setRange(stackPointer + 1, stackPointer + values.length + 1, values);
    stackPointer += values.length;
  }

  /// Replaces the current top of the stack with [value].
  int replaceTop(int value) => stack[stackPointer] = value;

  /// Pushes [object] onto the heap and returns its address.
  int allocate(TaggedObject object) {
    final address = nextHeapAddress;
    _heap[address] = object;
    return address;
  }

  /// Returns the [TaggedObject] at heap address [address], or throws a
  /// [VmRuntimeException] if the address doesn't reference a [T].
  T dereferenceAs<T extends TaggedObject>(int address) {
    final obj = _heap[address];
    if (obj is T) {
      return obj;
    }
    throw VmRuntimeException('No ${abbreviations[T]}-object at $address');
  }

  void copyTaggedObject(int sourceAddress, int targetAddress) {
    final objectToCopy = _heap[sourceAddress] ??
        (throw VmRuntimeException('No tagged object at $sourceAddress'));
    final overriddenObject = _heap[sourceAddress] ??
        (throw VmRuntimeException(
            'No tagged object to override at $targetAddress'));
    final wastedMemory =
        overriddenObject.sizeInCells - objectToCopy.sizeInCells;
    if (wastedMemory < 0) {
      throw VmRuntimeException('Object at $sourceAddress '
          'is larger than the object at $targetAddress');
    }
    _heap[targetAddress] = objectToCopy.copy(wastedMemory);
  }

  /// Returns the address into [program] of the [Instruction] associated with
  /// [label].
  ///
  /// If [label] is not defined, but can be parsed as an [int], returns that
  /// value. This is necessary because [WrapInstruction] creates
  /// [TaggedFunction]s that contain an integer jump target, rather than a
  /// label.
  ///
  /// Throws a [VmRuntimeException] if [label] is not defined and can't be
  /// parsed as an [int].
  int lookupLabel(String label) =>
      _labelAddresses[label] ??
      int.tryParse(label) ??
      (throw VmRuntimeException('Undefined label `$label`'));
}

class InspectableVM extends VM {
  InspectableVM(List<Instruction> program, Map<String, int> labelAddresses,
      {int maxAddress = defaultMaxAddress,
      int initialStackSize = defaultInitialStackSize})
      : super(program, labelAddresses,
            maxAddress: maxAddress, initialStackSize: initialStackSize);

  Map<int, TaggedObject> get heap => _heap;
}

/// Thrown by [Instruction]s if they encounter an invalid situation, for example
/// if a dereferenced pointer doesn't point to a [TaggedObject] of the correct
/// type.
class VmRuntimeException implements Exception {
  const VmRuntimeException(this.message);

  final String message;

  @override
  String toString() => message;
}
