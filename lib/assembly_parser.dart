import 'package:verbose_regexp/verbose_regexp.dart';

import 'virtual_machine.dart';

/// Matches all character sequences that we expect in an F machine assembly:
/// instructions, label declarations, comments, and whitespace. Each of these
/// is captured in a different group, so checking which kind of sequence was
/// encountered is done by simply checking which [Match.group] isn't `null`.
final RegExp _scanPattern = RegExp(verbose(r'''
(
  # 1: whitespace or comments
  \s+ | --[^\n]*\n
)|(?:
  # 2: label declarations -- the group contains only the label name
  ([A-Za-z]\w*)
  \s* :
)|(?:
  # 3: instruction -- the group contains the instruction and arguments,
  #                   separated by whitespace
  (
    [A-Za-z]\w*
    ( # instruction immediate arguments, which can be number literals or labels
      \s+
      (\d+ | [A-Za-z]\w*)
    )*
  )
  \s* (,|$)
)
'''));

/// Matches a non-empty sequence of whitespace characters. This pattern is used
/// to split an instruction match into the instruction name and arguments.
final RegExp whitespace = RegExp(r'\s+');

/// Matches all characters in the current line. This pattern is used to skip
/// over syntax errors.
final RegExp singleLine = RegExp(r'[^\n]*(\n|$)');

/// Maps [Instruction] names to factory methods that instantiate these
/// instructions. The arity of the functions varies for each instruction.
final Map<String, Function> instructionFactories = {
  'loadc': (int n) => LoadConstantInstruction(n),
  'jump': (String s) => JumpInstruction(s),
  'jumpz': (String s) => JumpIfZeroInstruction(s),
  'add': () => const AddInstruction(),
  'sub': () => const SubtractInstruction(),
  'mul': () => const MultiplyInstruction(),
  'div': () => const DivideInstruction(),
  'mod': () => const ModuloInstruction(),
  'neg': () => const NegateInstruction(),
  'eq': () => const EqualsInstruction(),
  'neq': () => const NotEqualsInstruction(),
  'le': () => const LessThanInstruction(),
  'leq': () => const LessEqualsInstruction(),
  'gr': () => const GreaterThanInstruction(),
  'geq': () => const GreaterEqualsInstruction(),
  'and': () => const AndInstruction(),
  'or': () => const OrInstruction(),
  'not': () => const NotInstruction(),
  'slide': (int d, int z) => SlideInstruction(d, z),
  'halt': () => halt,
  'pushL': (int n) => PushLocalInstruction(n),
  'pushG': (int n) => PushGlobalInstruction(n),
  'getB': () => const UnwrapTaggedIntInstruction(),
  'getV': (int n) => UnwrapTaggedListInstruction(n),
  'mkB': () => const AllocateTaggedIntInstruction(),
  'mkV': (int n) => AllocateTaggedListInstruction(n),
  'mkF': (String s) => AllocateTaggedFunctionInstruction(s),
  'mkC': (String s) => AllocateTaggedClosureInstruction(s),
  'setSP0': () => const SetStackPointer0Instruction(),
  'mark': (String s) => MarkInstruction(s),
  'markpc': () => const MarkProgramCounterInstruction(),
  'apply1': () => const Apply1Instruction(),
  'apply0': () => const Apply0Instruction(),
  'apply': () => const ApplyInstruction(),
  'testArg': (int n) => TestArgumentCountInstruction(n),
  'wrap': () => const WrapInstruction(),
  'popEnv': () => const PopEnvironmentInstruction(),
  'return': (int n) => ReturnInstruction(n),
  'dummy': (int n) => DummyInstruction(n),
  'rewrite': (int n) => RewriteInstruction(n),
  'eval': () => const EvaluateInstruction(),
  'update': () => const UpdateInstruction(),
  'copyglob': () => const CopyGlobalInstruction(),
  /*
  'nil': () => null,
  'cons': () => null,
  'testL': () => null
  */
};

/// Parses [input] into a list of instructions, and a map that contains the
/// addresses of all declared labels.
MapEntry<List<Instruction>, Map<String, int>> parse(final String input,
    [void Function(String message, int offset) onError]) {
  onError ??=
      (message, offset) => throw FormatException(message, input, offset);
  var offset = 0;
  final instructions = <Instruction>[];
  final labelAddresses = <String, int>{};
  while (offset < input.length) {
    final match = _scanPattern.matchAsPrefix(input, offset);
    if (match == null) {
      onError('Unrecognized input', offset);
      continue;
    }

    offset = match.end;
    if (match.group(2) != null) {
      final label = match.group(2);
      if (labelAddresses.containsKey(label)) {
        onError('Duplicate label name', match.start);
        continue;
      }
      labelAddresses[label] = instructions.length;
    } else if (match.group(3) != null) {
      final parts = match.group(3).split(whitespace);
      final instruction = parts.first;
      final arguments = parts
          .skip(1)
          .map((str) => int.tryParse(str) ?? str)
          .toList(growable: false);
      final factory = instructionFactories[instruction];
      if (factory == null) {
        onError('Unknown instruction name', match.start);
        continue;
      }
      try {
        instructions.add(Function.apply(factory, arguments));
      } on NoSuchMethodError {
        onError(
            'Invalid arguments for instruction `$instruction`', match.start);
      }
    } else {
      assert(match.group(1) != null);
    }
  }
  return MapEntry(instructions, labelAddresses);
}
