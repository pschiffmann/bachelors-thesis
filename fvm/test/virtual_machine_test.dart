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
    test('`add` sums up the top stack cells and decreases the stack pointer',
        () {
      final vm = VM(const [], const {})..push(2)..push(3);
      const AddInstruction().execute(vm);
      expect(vm.stackPointer, equals(0));
      expect(vm.pop(), equals(5));
    });
  });
}
