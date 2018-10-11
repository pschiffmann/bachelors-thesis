import 'package:fvm/assembly_parser.dart';
import 'package:fvm/virtual_machine.dart';
import 'package:test/test.dart';

void main() {
  test('Parsed names correspond to `Instruction.toString()`', () {
    instructionFactories.forEach((name, factory) {
      Instruction instruction;
      String expectedToString;
      if (factory is Function()) {
        instruction = factory();
        expectedToString = name;
      } else if (factory is Function(String)) {
        instruction = factory('A');
        expectedToString = '$name A';
      } else if (factory is Function(int)) {
        instruction = factory(1);
        expectedToString = '$name 1';
      } else if (factory is Function(int, int)) {
        instruction = factory(2, 3);
        expectedToString = '$name 2 3';
      } else {
        throw UnimplementedError(
            'Unexpected factory type for instruction $name');
      }
      expect(instruction.toString(), equals(expectedToString));
    });
  });
}
