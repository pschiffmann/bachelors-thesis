import 'package:fvm/virtual_machine.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

class MockInstruction extends Mock implements Instruction {}

void main() {
  group('VM', () {
    test(
        '`push()` increases the stack pointer, '
        'and stores the assigned value at that address', () {
      final vm = VM(const [], const {});
      expect(vm.stackPointer, equals(-1));
      vm.push(4);
      expect(vm.stackPointer, equals(0));
      expect(vm.stack[0], equals(4));
    });

    test('`pop()` decreases the stack pointer without modifying the stack', () {
      final vm = VM(const [], const {})
        ..stack[0] = 3
        ..stack[1] = 12
        ..stack[2] = -44
        ..stackPointer = 2;
      final before = vm.stack.toList();
      vm.pop();
      expect(vm.stackPointer, equals(1));
      expect(vm.stack, orderedEquals(before));
    });

    test(
        '`allocate()` places an object at `vm.maxAddress` if the heap is empty',
        () {
      final vm = VM(const [], const {}, maxAddress: 31);
      final obj = TaggedInt(4);
      final address = vm.allocate(obj);
      expect(address, equals(31));
      expect(vm.heap[31], equals(obj));
    });

    test(
        '`allocate()` places an object at the next free address '
        'if the heap is not empty', () {
      final vm = VM(const [], const {}, maxAddress: 31)..allocate(TaggedInt(1));
      expect(vm.allocate(TaggedInt(4)), equals(29));
      expect(vm.allocate(TaggedInt(2)), equals(27));
    });

    test(
        '`executeCurrentInstruction()` increases `programCounter`, '
        'then executes the instruction at the old `programCounter` index', () {
      final i1 = MockInstruction();
      final vm = VM([i1], const {});
      var pcDuringInstructionCall = vm.programCounter;

      when(i1.execute(vm))
          .thenAnswer((_) => pcDuringInstructionCall = vm.programCounter);
      vm.executeCurrentInstruction();
      expect(pcDuringInstructionCall, equals(1));
      expect(vm.programCounter, equals(1));
      verify(i1.execute(vm)).called(1);
    });
  });

  group('instructions', () {
    const maxAddress = 31;
    VM vm;
    setUp(() => vm = VM(const [], const {}, maxAddress: maxAddress));

    test('`add` sums up the top stack cells and decreases the stack pointer',
        () {
      vm..push(2)..push(3);
      const AddInstruction().execute(vm);
      expect(vm.stackPointer, equals(0));
      expect(vm.pop(), equals(5));
    });

    test('`mkB` wraps the top stack value in a `TaggedInt`', () {
      vm.push(23);
      const AllocateTaggedIntInstruction().execute(vm);
      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(maxAddress));
      expect((vm.heap[maxAddress] as TaggedInt).value, 23);
    });

    test('`mkV` wraps the top n stack values in a `TaggedReferenceList`', () {
      vm..push(2)..push(4)..push(6)..push(8);
      AllocateTaggedReferenceListInstruction(3).execute(vm);
      expect(vm.stackPointer, equals(1));
      expect(vm.peek(), equals(maxAddress));
      final refList = vm.heap[maxAddress] as TaggedReferenceList;
      expect(refList.values, equals([4, 6, 8]));
    });

    test('`mkF` replaces the top stack value with a `TaggedFunction` pointer',
        () {
      vm.push(12);
      AllocateTaggedFunctionInstruction('E').execute(vm);

      final argVector = vm.heap[maxAddress] as TaggedReferenceList;
      expect(argVector.length, 0);

      final taggedFunction = vm.heap[maxAddress - 2] as TaggedFunction;
      expect(taggedFunction.functionLabel, equals('E'));
      expect(taggedFunction.globalVectorAddress, equals(12));
      expect(taggedFunction.argumentVectorAddress, equals(maxAddress));

      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(maxAddress - 2));
    });

    test('`mkC` replaces the top stack value with a `TaggedClosure` pointer',
        () {
      vm.push(30);
      AllocateTaggedClosureInstruction('F').execute(vm);

      final taggedClosure = vm.heap[maxAddress] as TaggedClosure;
      expect(taggedClosure.expressionLabel, equals('F'));
      expect(taggedClosure.globalVectorAddress, equals(30));

      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(maxAddress));
    });
  });
}
