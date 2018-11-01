import 'package:fvm/virtual_machine.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

const maxAddress = 31;

final taggedIntSize = TaggedInt(null).sizeInCells;
final taggedClosureSize = TaggedClosure(null, null).sizeInCells;
final taggedFunctionSize = TaggedFunction(null, null, null).sizeInCells;

final throwsVmRuntimeException =
    throwsA(const TypeMatcher<VmRuntimeException>());

class MockInstruction extends Mock implements Instruction {}

void main() {
  group('VM', () {
    InspectableVM vm;
    setUp(() => vm = InspectableVM(const [], const {}, maxAddress: maxAddress));

    test(
        '`push()` increases the stack pointer, '
        'and stores the assigned value at that address', () {
      expect(vm.stackPointer, equals(-1));
      vm.push(4);
      expect(vm.stackPointer, equals(0));
      expect(vm.stack[0], equals(4));
    });

    test('`pushAll` places all elements on the stack', () {
      vm.pushAll([3, 5, 7]);
      expect(vm.stackPointer, equals(2));
      expect(vm.stack.sublist(0, 3), [3, 5, 7]);
    });

    test('`pop()` decreases the stack pointer without modifying the stack', () {
      vm
        ..stack[0] = 3
        ..stack[1] = 12
        ..stack[2] = -44
        ..stackPointer = 2;
      final before = vm.stack.toList();
      expect(vm.pop(), equals(-44));
      expect(vm.stackPointer, equals(1));
      expect(vm.stack, orderedEquals(before));
    });

    test('`popAll` reduces the stack pointer and returns all elements', () {
      vm.pushAll([2, 3, 4, 5]);
      expect(vm.popAll(3), equals([3, 4, 5]));
      expect(vm.stackPointer, equals(0));
    });

    test(
        '`allocate()` places an object at `vm.maxAddress` if the heap is empty',
        () {
      final obj = TaggedInt(4);
      final address = vm.allocate(obj);
      expect(address, equals(maxAddress));
      expect(vm.heap[maxAddress], equals(obj));
    });

    test(
        '`allocate()` places an object at the next free address '
        'if the heap is not empty', () {
      vm.allocate(TaggedInt(1));
      expect(vm.allocate(TaggedInt(4)), equals(maxAddress - taggedIntSize));
      expect(vm.allocate(TaggedInt(2)), equals(maxAddress - 2 * taggedIntSize));
    });

    test(
        '`executeCurrentInstruction()` increases `programCounter`, '
        'then executes the instruction at the old `programCounter` index', () {
      final i1 = MockInstruction();
      final vm = InspectableVM([i1], const {});
      var pcDuringInstructionCall = vm.programCounter;

      when(i1.execute(vm))
          .thenAnswer((_) => pcDuringInstructionCall = vm.programCounter);
      vm.executeCurrentInstruction();
      expect(pcDuringInstructionCall, equals(1));
      expect(vm.programCounter, equals(1));
      verify(i1.execute(vm)).called(1);
    });

    group('`dereferenceAs`', () {
      final obj = TaggedInt(8);
      setUp(() => vm.allocate(obj));

      test('returns the object at that address if it is of the correct type',
          () {
        expect(vm.dereferenceAs<TaggedInt>(maxAddress), equals(obj));
      });

      test("throws if the address doesn't point to a `T`", () {
        expect(() => vm.dereferenceAs<TaggedList>(maxAddress),
            throwsVmRuntimeException);
        expect(() => vm.dereferenceAs<TaggedInt>(0), throwsVmRuntimeException);
      });
    });
  });

  group('instructions', () {
    InspectableVM vm;
    setUp(() => vm = InspectableVM(const [], const {}, maxAddress: maxAddress));

    test('`loadc` pushes a value on the stack', () {
      LoadConstantInstruction(4).execute(vm);
      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(4));
    });

    test('`jump` sets the `programCounter`', () {
      final vm = InspectableVM(const [], const {'A': 60});
      JumpInstruction('A').execute(vm);
      expect(vm.programCounter, equals(60));
    });

    group('`jumpz`', () {
      test('sets the `programCounter` if the top stack value is 0', () {
        final vm = InspectableVM(const [], const {'B': 30})..push(0);
        JumpIfZeroInstruction('B').execute(vm);
        expect(vm.programCounter, equals(30));
        expect(vm.stackPointer, equals(-1));
      });

      test('does nothing if the top stack value is not 0', () {
        final vm = InspectableVM(const [], const {'B': 30})..push(5);
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

    group('`slide', () {
      test('0 5` does nothing', () {
        final stackBefore = vm.stack.toList();
        SlideInstruction(0, 5).execute(vm);
        expect(vm.stackPointer, equals(-1));
        expect(vm.stack, equals(stackBefore));
      });

      test('3 0` reduces the stack pointer by 3', () {
        vm.pushAll([1, 2, 3, 4]);
        final stackBefore = vm.stack.toList();
        SlideInstruction(3, 0).execute(vm);
        expect(vm.stackPointer, equals(0));
        expect(vm.stack, equals(stackBefore));
      });

      test('5 2` moves the 2 top stack values down by 5 cells', () {
        vm.pushAll([10, 11, 12, 13, 14, 15, 16, 17]);
        SlideInstruction(5, 2).execute(vm);
        expect(
            vm.stack.sublist(0, 8), equals([10, 16, 17, 13, 14, 15, 16, 17]));
        expect(vm.stackPointer, equals(2));
      });

      test('1 3` moves the 3 top stack values down by 1 cell', () {
        vm.pushAll([7, 8, 9, 10, 11, 12]);
        SlideInstruction(1, 3).execute(vm);
        expect(vm.stackPointer, equals(4));
        expect(vm.stack.sublist(0, 6), equals([7, 8, 10, 11, 12, 12]));
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

    test('`mkV` wraps the top n stack values in a `TaggedList`', () {
      vm.pushAll([2, 4, 6, 8]);
      AllocateTaggedListInstruction(3).execute(vm);
      expect(vm.stackPointer, equals(1));
      expect(vm.peek(), equals(maxAddress));
      final refList = vm.heap[maxAddress] as TaggedList;
      expect(refList.values, equals([4, 6, 8]));
    });

    test('`mkF` replaces the top stack value with a `TaggedFunction` pointer',
        () {
      vm.push(12);
      AllocateTaggedFunctionInstruction('E').execute(vm);

      final argVector = vm.heap[maxAddress] as TaggedList;
      expect(argVector.length, 0);

      final fObjAddress = maxAddress - argVector.sizeInCells;
      final taggedFunction = vm.heap[fObjAddress] as TaggedFunction;
      expect(taggedFunction.functionLabel, equals('E'));
      expect(taggedFunction.globalVectorAddress, equals(12));
      expect(taggedFunction.argumentVectorAddress, equals(maxAddress));

      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(fObjAddress));
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

    test('`pushL` pushes a value relative to SP0 onto the stack', () {
      vm
        ..push(2)
        ..push(3)
        ..push(4)
        ..stackPointer0 = 1
        ..stackPointer = 5;
      PushLocalInstruction(0).execute(vm);
      expect(vm.stackPointer, equals(6));
      expect(vm.peek(), equals(3));

      PushLocalInstruction(1).execute(vm);
      expect(vm.stackPointer, equals(7));
      expect(vm.peek(), equals(4));

      PushLocalInstruction(-1).execute(vm);
      expect(vm.stackPointer, equals(8));
      expect(vm.peek(), equals(2));
    });

    test('`pushG` pushes a value from the global vector onto the stack', () {
      vm
        ..allocate(TaggedList([20, 30]))
        ..globalPointer = maxAddress;
      PushGlobalInstruction(1).execute(vm);
      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(30));
    });

    group('`getB`', () {
      test('dereferences a pointer to a `TaggedInt`', () {
        vm
          ..allocate(TaggedInt(3))
          ..push(maxAddress);
        const UnwrapTaggedIntInstruction().execute(vm);
        expect(vm.peek(), equals(3));
      });

      test("throws if the top stack cell doesn't point to a `TaggedInt`", () {
        vm..push(maxAddress);
        expect(() => const UnwrapTaggedIntInstruction().execute(vm),
            throwsVmRuntimeException);
      });
    });

    group('`getV`', () {
      setUp(() => vm..allocate(TaggedList([4, 6, 8, 10])));

      test('loads `length` elements from the `TaggedList` onto the stack', () {
        vm.push(maxAddress);
        UnwrapTaggedListInstruction(3).execute(vm);
        expect(vm.stackPointer, equals(2));
        expect(vm.stack.sublist(0, 3), equals([4, 6, 8]));
      });

      test("throws if the top stack cell doesn't point to a `TaggedList`", () {
        vm.push(1);
        expect(() => UnwrapTaggedListInstruction(3).execute(vm),
            throwsVmRuntimeException);
      });

      test('throws if the `TaggedList` contains less than `length` elements',
          () {
        vm.push(maxAddress);
        expect(() => UnwrapTaggedListInstruction(5).execute(vm),
            throwsVmRuntimeException);
      });
    });

    test('`setSP0` sets SP0 to SP - 1', () {
      vm.stackPointer = 4;
      const SetStackPointer0Instruction().execute(vm);
      expect(vm.stackPointer0, equals(3));
    });

    test('`mark` stores the register contents and return address on the stack',
        () {
      final vm = InspectableVM(const [], const {'T': 40})
        ..stackPointer = 5
        ..stackPointer0 = 12
        ..globalPointer = 13
        ..framePointer = 14;
      MarkInstruction('T').execute(vm);
      expect(vm.stackPointer, equals(9));
      expect(vm.framePointer, equals(9));
      expect(vm.stack.sublist(6, 10), equals([12, 13, 14, 40]));
    });

    test('`markpc` stores the register contents on the stack', () {
      vm
        ..stackPointer0 = 20
        ..globalPointer = 30
        ..framePointer = 40
        ..programCounter = 50;
      const MarkProgramCounterInstruction().execute(vm);
      expect(vm.stackPointer, equals(3));
      expect(vm.framePointer, equals(3));
      expect(vm.stack.sublist(0, 4), equals([20, 30, 40, 50]));
    });

    test('`apply1` pushes the function arguments under the function address',
        () {
      final args = vm.allocate(TaggedList([5, 6, 7]));
      final fAddress = vm.allocate(TaggedFunction('L', -1, args));
      vm.push(fAddress);
      const Apply1Instruction().execute(vm);
      expect(vm.stackPointer, equals(3));
      expect(vm.stack.sublist(0, 4), equals([5, 6, 7, fAddress]));
    });

    group('`apply0` sets the GP and PC from a', () {
      setUp(() => vm = InspectableVM(const [], const {'T': 100}, maxAddress: 31)
        ..push(maxAddress));

      test('`TaggedFunction`', () {
        vm.allocate(TaggedFunction('T', 10, 20));
        const Apply0Instruction().execute(vm);
        expect(vm.globalPointer, equals(10));
        expect(vm.programCounter, equals(100));
        expect(vm.stackPointer, equals(-1));
      });

      test('`TaggedClosure`', () {
        vm.allocate(TaggedClosure('T', 10));
        const Apply0Instruction().execute(vm);
        expect(vm.globalPointer, equals(10));
        expect(vm.programCounter, equals(100));
        expect(vm.stackPointer, equals(-1));
      });
    });

    group('`testArg k`', () {
      test(
          'wraps the arguments in a new `TaggedFunction` '
          'if too few arguments were provided', () {
        vm
          ..stackPointer = 4
          ..framePointer = 4
          ..pushAll([20, 19]);
        TestArgumentCountInstruction(3).execute(vm);
        final fObj = vm.dereferenceAs<TaggedFunction>(vm.peek());
        final args = vm.dereferenceAs<TaggedList>(fObj.argumentVectorAddress);
        expect(args.values, equals([20, 19]));
      });

      test('does nothing of at least k arguments were provided', () {
        final numArgs = 2;
        final stackBefore = vm.stack.toList();
        vm
          ..framePointer = 10
          ..stackPointer = 10 + numArgs;
        TestArgumentCountInstruction(numArgs).execute(vm);
        expect(vm.stackPointer, equals(12));
        expect(vm.framePointer, equals(10));
        expect(vm.stack, equals(stackBefore));
      });
    });

    test('`wrap` replaces the top stack cell with a `TaggedFunction`', () {
      vm
        ..programCounter = 4
        ..globalPointer = 8
        ..push(10);
      const WrapInstruction().execute(vm);
      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(maxAddress));
      final fObj = vm.dereferenceAs<TaggedFunction>(maxAddress);
      expect(fObj.functionLabel, equals('3'));
      expect(fObj.globalVectorAddress, 8);
      expect(fObj.argumentVectorAddress, equals(10));
    });

    test(
        '`popEnv` restores all registers from stack values '
        'and shifts the top stack value', () {
      vm
        ..pushAll([5, 7, 9, 11, 30])
        ..framePointer = 3;
      const PopEnvironmentInstruction().execute(vm);
      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(30));
      expect(vm.programCounter, equals(11));
      expect(vm.framePointer, equals(9));
      expect(vm.globalPointer, equals(7));
      expect(vm.stackPointer0, equals(5));
    });

    test('`dummy n` places n `TaggedClosure`s on the stack', () {
      DummyInstruction(3).execute(vm);
      expect(vm.stackPointer, equals(2));
      expect(
          vm.stack.sublist(0, 3),
          equals([
            maxAddress,
            maxAddress - taggedClosureSize,
            maxAddress - 2 * taggedClosureSize
          ]));
      for (var i = 0; i < 3; i++) {
        final cObj =
            vm.heap[maxAddress - i * taggedClosureSize] as TaggedClosure;
        expect(cObj.expressionLabel, equals('-1'));
        expect(cObj.globalVectorAddress, equals(-1));
      }
    });

    test('`rewrite j` copies a heap value to another heap address', () {
      final c1 = TaggedClosure('-1', -1);
      final c2 = TaggedClosure('real', 5);
      final c1Addr = vm.allocate(c1); // Also the address of the c1 copy
      final c2Addr = vm.allocate(c2);
      vm.pushAll([c1Addr, c2Addr]);
      RewriteInstruction(1).execute(vm);
      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(c1Addr));
      expect(vm.dereferenceAs(c2Addr), equals(c2));
      final c2Copy = vm.dereferenceAs<TaggedClosure>(c1Addr);
      expect(c2Copy, isNot(same(c2)));
      expect(c2Copy.expressionLabel, equals(c2.expressionLabel));
      expect(c2Copy.globalVectorAddress, equals(c2.globalVectorAddress));
    });

    test('`copyglob` pushes the current GP onto the stack', () {
      vm.globalPointer = 4;
      const CopyGlobalInstruction().execute(vm);
      expect(vm.stackPointer, equals(0));
      expect(vm.peek(), equals(4));
    });
  });
}
