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

    test('`loadc` pushes a value on the stack', () {
      LoadConstantInstruction(4).execute(vm);
      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(4));
    });

    test('`jump` sets the `programCounter`', () {
      final vm = VM(const [], const {'A': 60});
      JumpInstruction('A').execute(vm);
      expect(vm.programCounter, equals(60));
    });

    group('`jumpz`', () {
      test('sets the `programCounter` if the top stack value is 0', () {
        final vm = VM(const [], const {'B': 30})..push(0);
        JumpIfZeroInstruction('B').execute(vm);
        expect(vm.programCounter, equals(30));
        expect(vm.stackPointer, equals(-1));
      });

      test('does nothing if the top stack value is not 0', () {
        final vm = VM(const [], const {'B': 30})..push(5);
        JumpIfZeroInstruction('B').execute(vm);
        // Note: the program counter should be the same as before, because we
        // don't call [VM.executeCurrentInstruction].
        expect(vm.programCounter, equals(0));
        expect(vm.stackPointer, equals(-1));
      });
    });

    group('arithmetic/logic instructions:', () {
      setUp(() => vm..push(10)..push(3));

      test('`add` sums up the top stack cells', () {
        const AddInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(13));
      });

      test('`sub` subtracts the top stack cells', () {
        const SubtractInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(7));
      });

      test('`mul` multiplies the top stack cells', () {
        const MultiplyInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(30));
      });

      test('`div` divides the top stack cells', () {
        const DivideInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(3));
      });

      test('`mod` calculates the modulo of the top stack cells', () {
        const ModuloInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(1));
      });

      test('`neg` negates the top stack cell', () {
        const NegateInstruction().execute(vm);
        expect(vm.stackPointer, equals(1));
        expect(vm.peek(), equals(-3));
      });

      test('`eq` compares the top stack cells for equality', () {
        const EqualsInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(0));
      });

      test('`neq` compares the top stack cells for inequality', () {
        const NotEqualsInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(1));
      });

      test('`le` compares the top stack cells with "less than"', () {
        const LessThanInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(0));
      });

      test('`leq` compares the top stack cells with "less equals"', () {
        const LessEqualsInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(0));
      });

      test('`gr` compares the top stack cells with "greater than"', () {
        const GreaterThanInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(1));
      });

      test('`geq` compares the top stack cells with "greater equals"', () {
        const GreaterEqualsInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(1));
      });

      test('`and` checks whether the two top cells are not null', () {
        const AndInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(1));

        vm..push(-5)..push(0);
        const AndInstruction().execute(vm);
        expect(vm.peek(), equals(0));
      });

      test('`or` checks whether one of the two top stack cells are not null',
          () {
        vm
          ..stackPointer = -1
          ..push(10)
          ..push(0);
        const OrInstruction().execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.peek(), equals(1));

        vm..push(0)..push(0);
        const OrInstruction().execute(vm);
        expect(vm.peek(), equals(0));
      });

      test('`not` toggles the top stack cell between 0 and not 0', () {
        const NotInstruction().execute(vm);
        expect(vm.stackPointer, equals(1));
        expect(vm.peek(), equals(0));
        const NotInstruction().execute(vm);
        expect(vm.peek(), equals(1));
      });
    });

    test('`halt` throws an UnsupportedError', () {
      expect(() => const HaltInstruction().execute(vm), throwsUnsupportedError);
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
