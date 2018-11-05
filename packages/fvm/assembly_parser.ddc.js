define(['dart_sdk', 'packages/verbose_regexp/verbose_regexp', 'packages/fvm/virtual_machine'], function(dart_sdk, verbose_regexp, virtual_machine) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const verbose_regexp$ = verbose_regexp.verbose_regexp;
  const virtual_machine$ = virtual_machine.virtual_machine;
  const _root = Object.create(null);
  const assembly_parser = Object.create(_root);
  const $containsKey = dartx.containsKey;
  const $_set = dartx._set;
  const $length = dartx.length;
  const $split = dartx.split;
  const $first = dartx.first;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $skip = dartx.skip;
  const $_get = dartx._get;
  const $add = dartx.add;
  let IdentityMapOfString$Function = () => (IdentityMapOfString$Function = dart.constFn(_js_helper.IdentityMap$(core.String, core.Function)))();
  let intToLoadConstantInstruction = () => (intToLoadConstantInstruction = dart.constFn(dart.fnType(virtual_machine$.LoadConstantInstruction, [core.int])))();
  let StringToJumpInstruction = () => (StringToJumpInstruction = dart.constFn(dart.fnType(virtual_machine$.JumpInstruction, [core.String])))();
  let StringToJumpIfZeroInstruction = () => (StringToJumpIfZeroInstruction = dart.constFn(dart.fnType(virtual_machine$.JumpIfZeroInstruction, [core.String])))();
  let VoidToAddInstruction = () => (VoidToAddInstruction = dart.constFn(dart.fnType(virtual_machine$.AddInstruction, [])))();
  let VoidToSubtractInstruction = () => (VoidToSubtractInstruction = dart.constFn(dart.fnType(virtual_machine$.SubtractInstruction, [])))();
  let VoidToMultiplyInstruction = () => (VoidToMultiplyInstruction = dart.constFn(dart.fnType(virtual_machine$.MultiplyInstruction, [])))();
  let VoidToDivideInstruction = () => (VoidToDivideInstruction = dart.constFn(dart.fnType(virtual_machine$.DivideInstruction, [])))();
  let VoidToModuloInstruction = () => (VoidToModuloInstruction = dart.constFn(dart.fnType(virtual_machine$.ModuloInstruction, [])))();
  let VoidToNegateInstruction = () => (VoidToNegateInstruction = dart.constFn(dart.fnType(virtual_machine$.NegateInstruction, [])))();
  let VoidToEqualsInstruction = () => (VoidToEqualsInstruction = dart.constFn(dart.fnType(virtual_machine$.EqualsInstruction, [])))();
  let VoidToNotEqualsInstruction = () => (VoidToNotEqualsInstruction = dart.constFn(dart.fnType(virtual_machine$.NotEqualsInstruction, [])))();
  let VoidToLessThanInstruction = () => (VoidToLessThanInstruction = dart.constFn(dart.fnType(virtual_machine$.LessThanInstruction, [])))();
  let VoidToLessEqualsInstruction = () => (VoidToLessEqualsInstruction = dart.constFn(dart.fnType(virtual_machine$.LessEqualsInstruction, [])))();
  let VoidToGreaterThanInstruction = () => (VoidToGreaterThanInstruction = dart.constFn(dart.fnType(virtual_machine$.GreaterThanInstruction, [])))();
  let VoidToGreaterEqualsInstruction = () => (VoidToGreaterEqualsInstruction = dart.constFn(dart.fnType(virtual_machine$.GreaterEqualsInstruction, [])))();
  let VoidToAndInstruction = () => (VoidToAndInstruction = dart.constFn(dart.fnType(virtual_machine$.AndInstruction, [])))();
  let VoidToOrInstruction = () => (VoidToOrInstruction = dart.constFn(dart.fnType(virtual_machine$.OrInstruction, [])))();
  let VoidToNotInstruction = () => (VoidToNotInstruction = dart.constFn(dart.fnType(virtual_machine$.NotInstruction, [])))();
  let intAndintToSlideInstruction = () => (intAndintToSlideInstruction = dart.constFn(dart.fnType(virtual_machine$.SlideInstruction, [core.int, core.int])))();
  let VoidToHaltInstruction = () => (VoidToHaltInstruction = dart.constFn(dart.fnType(virtual_machine$.HaltInstruction, [])))();
  let intToPushLocalInstruction = () => (intToPushLocalInstruction = dart.constFn(dart.fnType(virtual_machine$.PushLocalInstruction, [core.int])))();
  let intToPushGlobalInstruction = () => (intToPushGlobalInstruction = dart.constFn(dart.fnType(virtual_machine$.PushGlobalInstruction, [core.int])))();
  let VoidToUnwrapTaggedIntInstruction = () => (VoidToUnwrapTaggedIntInstruction = dart.constFn(dart.fnType(virtual_machine$.UnwrapTaggedIntInstruction, [])))();
  let intToUnwrapTaggedListInstruction = () => (intToUnwrapTaggedListInstruction = dart.constFn(dart.fnType(virtual_machine$.UnwrapTaggedListInstruction, [core.int])))();
  let VoidToAllocateTaggedIntInstruction = () => (VoidToAllocateTaggedIntInstruction = dart.constFn(dart.fnType(virtual_machine$.AllocateTaggedIntInstruction, [])))();
  let intToAllocateTaggedListInstruction = () => (intToAllocateTaggedListInstruction = dart.constFn(dart.fnType(virtual_machine$.AllocateTaggedListInstruction, [core.int])))();
  let StringToAllocateTaggedFunctionInstruction = () => (StringToAllocateTaggedFunctionInstruction = dart.constFn(dart.fnType(virtual_machine$.AllocateTaggedFunctionInstruction, [core.String])))();
  let StringToAllocateTaggedClosureInstruction = () => (StringToAllocateTaggedClosureInstruction = dart.constFn(dart.fnType(virtual_machine$.AllocateTaggedClosureInstruction, [core.String])))();
  let VoidToSetStackPointer0Instruction = () => (VoidToSetStackPointer0Instruction = dart.constFn(dart.fnType(virtual_machine$.SetStackPointer0Instruction, [])))();
  let StringToMarkInstruction = () => (StringToMarkInstruction = dart.constFn(dart.fnType(virtual_machine$.MarkInstruction, [core.String])))();
  let VoidToMarkProgramCounterInstruction = () => (VoidToMarkProgramCounterInstruction = dart.constFn(dart.fnType(virtual_machine$.MarkProgramCounterInstruction, [])))();
  let VoidToApply1Instruction = () => (VoidToApply1Instruction = dart.constFn(dart.fnType(virtual_machine$.Apply1Instruction, [])))();
  let VoidToApply0Instruction = () => (VoidToApply0Instruction = dart.constFn(dart.fnType(virtual_machine$.Apply0Instruction, [])))();
  let VoidToApplyInstruction = () => (VoidToApplyInstruction = dart.constFn(dart.fnType(virtual_machine$.ApplyInstruction, [])))();
  let intToTestArgumentCountInstruction = () => (intToTestArgumentCountInstruction = dart.constFn(dart.fnType(virtual_machine$.TestArgumentCountInstruction, [core.int])))();
  let VoidToWrapInstruction = () => (VoidToWrapInstruction = dart.constFn(dart.fnType(virtual_machine$.WrapInstruction, [])))();
  let VoidToPopEnvironmentInstruction = () => (VoidToPopEnvironmentInstruction = dart.constFn(dart.fnType(virtual_machine$.PopEnvironmentInstruction, [])))();
  let intToReturnInstruction = () => (intToReturnInstruction = dart.constFn(dart.fnType(virtual_machine$.ReturnInstruction, [core.int])))();
  let intToDummyInstruction = () => (intToDummyInstruction = dart.constFn(dart.fnType(virtual_machine$.DummyInstruction, [core.int])))();
  let intToRewriteInstruction = () => (intToRewriteInstruction = dart.constFn(dart.fnType(virtual_machine$.RewriteInstruction, [core.int])))();
  let VoidToEvaluateInstruction = () => (VoidToEvaluateInstruction = dart.constFn(dart.fnType(virtual_machine$.EvaluateInstruction, [])))();
  let VoidToUpdateInstruction = () => (VoidToUpdateInstruction = dart.constFn(dart.fnType(virtual_machine$.UpdateInstruction, [])))();
  let VoidToCopyGlobalInstruction = () => (VoidToCopyGlobalInstruction = dart.constFn(dart.fnType(virtual_machine$.CopyGlobalInstruction, [])))();
  let StringAndintTobottom = () => (StringAndintTobottom = dart.constFn(dart.fnType(dart.bottom, [core.String, core.int])))();
  let JSArrayOfInstruction = () => (JSArrayOfInstruction = dart.constFn(_interceptors.JSArray$(virtual_machine$.Instruction)))();
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  let StringToObject = () => (StringToObject = dart.constFn(dart.fnType(core.Object, [core.String])))();
  let ListOfInstruction = () => (ListOfInstruction = dart.constFn(core.List$(virtual_machine$.Instruction)))();
  let MapOfString$int = () => (MapOfString$int = dart.constFn(core.Map$(core.String, core.int)))();
  let MapEntryOfListOfInstruction$MapOfString$int = () => (MapEntryOfListOfInstruction$MapOfString$int = dart.constFn(core.MapEntry$(ListOfInstruction(), MapOfString$int())))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  dart.defineLazy(assembly_parser, {
    /*assembly_parser._scanPattern*/get _scanPattern() {
      return core.RegExp.new(verbose_regexp$.verbose("(\n  # 1: whitespace or comments\n  \\s+ | --[^\\n]*\\n\n)|(?:\n  # 2: label declarations -- the group contains only the label name\n  ([A-Za-z]\\w*)\n  \\s* :\n)|(?:\n  # 3: instruction -- the group contains the instruction and arguments,\n  #                   separated by whitespace\n  (\n    [A-Za-z]\\w*\n    ( # instruction immediate arguments, which can be number literals or labels\n      \\s+\n      (-? \\s* \\d+ | [A-Za-z]\\w*)\n    )*\n  )\n  \\s* (,|$)\n)\n"));
    },
    /*assembly_parser.whitespace*/get whitespace() {
      return core.RegExp.new("\\s+");
    },
    /*assembly_parser.singleLine*/get singleLine() {
      return core.RegExp.new("[^\\n]*(\\n|$)");
    },
    /*assembly_parser.instructionFactories*/get instructionFactories() {
      return new (IdentityMapOfString$Function()).from(["loadc", dart.fn(n => new virtual_machine$.LoadConstantInstruction.new(n), intToLoadConstantInstruction()), "jump", dart.fn(s => new virtual_machine$.JumpInstruction.new(s), StringToJumpInstruction()), "jumpz", dart.fn(s => new virtual_machine$.JumpIfZeroInstruction.new(s), StringToJumpIfZeroInstruction()), "add", dart.fn(() => const$ || (const$ = dart.const(new virtual_machine$.AddInstruction.new())), VoidToAddInstruction()), "sub", dart.fn(() => const$0 || (const$0 = dart.const(new virtual_machine$.SubtractInstruction.new())), VoidToSubtractInstruction()), "mul", dart.fn(() => const$1 || (const$1 = dart.const(new virtual_machine$.MultiplyInstruction.new())), VoidToMultiplyInstruction()), "div", dart.fn(() => const$2 || (const$2 = dart.const(new virtual_machine$.DivideInstruction.new())), VoidToDivideInstruction()), "mod", dart.fn(() => const$3 || (const$3 = dart.const(new virtual_machine$.ModuloInstruction.new())), VoidToModuloInstruction()), "neg", dart.fn(() => const$4 || (const$4 = dart.const(new virtual_machine$.NegateInstruction.new())), VoidToNegateInstruction()), "eq", dart.fn(() => const$5 || (const$5 = dart.const(new virtual_machine$.EqualsInstruction.new())), VoidToEqualsInstruction()), "neq", dart.fn(() => const$6 || (const$6 = dart.const(new virtual_machine$.NotEqualsInstruction.new())), VoidToNotEqualsInstruction()), "le", dart.fn(() => const$7 || (const$7 = dart.const(new virtual_machine$.LessThanInstruction.new())), VoidToLessThanInstruction()), "leq", dart.fn(() => const$8 || (const$8 = dart.const(new virtual_machine$.LessEqualsInstruction.new())), VoidToLessEqualsInstruction()), "gr", dart.fn(() => const$9 || (const$9 = dart.const(new virtual_machine$.GreaterThanInstruction.new())), VoidToGreaterThanInstruction()), "geq", dart.fn(() => const$10 || (const$10 = dart.const(new virtual_machine$.GreaterEqualsInstruction.new())), VoidToGreaterEqualsInstruction()), "and", dart.fn(() => const$11 || (const$11 = dart.const(new virtual_machine$.AndInstruction.new())), VoidToAndInstruction()), "or", dart.fn(() => const$12 || (const$12 = dart.const(new virtual_machine$.OrInstruction.new())), VoidToOrInstruction()), "not", dart.fn(() => const$13 || (const$13 = dart.const(new virtual_machine$.NotInstruction.new())), VoidToNotInstruction()), "slide", dart.fn((d, z) => new virtual_machine$.SlideInstruction.new(d, z), intAndintToSlideInstruction()), "halt", dart.fn(() => virtual_machine$.halt, VoidToHaltInstruction()), "pushL", dart.fn(n => new virtual_machine$.PushLocalInstruction.new(n), intToPushLocalInstruction()), "pushG", dart.fn(n => new virtual_machine$.PushGlobalInstruction.new(n), intToPushGlobalInstruction()), "getB", dart.fn(() => const$14 || (const$14 = dart.const(new virtual_machine$.UnwrapTaggedIntInstruction.new())), VoidToUnwrapTaggedIntInstruction()), "getV", dart.fn(n => new virtual_machine$.UnwrapTaggedListInstruction.new(n), intToUnwrapTaggedListInstruction()), "mkB", dart.fn(() => const$15 || (const$15 = dart.const(new virtual_machine$.AllocateTaggedIntInstruction.new())), VoidToAllocateTaggedIntInstruction()), "mkV", dart.fn(n => new virtual_machine$.AllocateTaggedListInstruction.new(n), intToAllocateTaggedListInstruction()), "mkF", dart.fn(s => new virtual_machine$.AllocateTaggedFunctionInstruction.new(s), StringToAllocateTaggedFunctionInstruction()), "mkC", dart.fn(s => new virtual_machine$.AllocateTaggedClosureInstruction.new(s), StringToAllocateTaggedClosureInstruction()), "setSP0", dart.fn(() => const$16 || (const$16 = dart.const(new virtual_machine$.SetStackPointer0Instruction.new())), VoidToSetStackPointer0Instruction()), "mark", dart.fn(s => new virtual_machine$.MarkInstruction.new(s), StringToMarkInstruction()), "markpc", dart.fn(() => const$17 || (const$17 = dart.const(new virtual_machine$.MarkProgramCounterInstruction.new())), VoidToMarkProgramCounterInstruction()), "apply1", dart.fn(() => const$18 || (const$18 = dart.const(new virtual_machine$.Apply1Instruction.new())), VoidToApply1Instruction()), "apply0", dart.fn(() => const$19 || (const$19 = dart.const(new virtual_machine$.Apply0Instruction.new())), VoidToApply0Instruction()), "apply", dart.fn(() => const$20 || (const$20 = dart.const(new virtual_machine$.ApplyInstruction.new())), VoidToApplyInstruction()), "testArg", dart.fn(n => new virtual_machine$.TestArgumentCountInstruction.new(n), intToTestArgumentCountInstruction()), "wrap", dart.fn(() => const$21 || (const$21 = dart.const(new virtual_machine$.WrapInstruction.new())), VoidToWrapInstruction()), "popEnv", dart.fn(() => const$22 || (const$22 = dart.const(new virtual_machine$.PopEnvironmentInstruction.new())), VoidToPopEnvironmentInstruction()), "return", dart.fn(n => new virtual_machine$.ReturnInstruction.new(n), intToReturnInstruction()), "dummy", dart.fn(n => new virtual_machine$.DummyInstruction.new(n), intToDummyInstruction()), "rewrite", dart.fn(n => new virtual_machine$.RewriteInstruction.new(n), intToRewriteInstruction()), "eval", dart.fn(() => const$23 || (const$23 = dart.const(new virtual_machine$.EvaluateInstruction.new())), VoidToEvaluateInstruction()), "update", dart.fn(() => const$24 || (const$24 = dart.const(new virtual_machine$.UpdateInstruction.new())), VoidToUpdateInstruction()), "copyglob", dart.fn(() => const$25 || (const$25 = dart.const(new virtual_machine$.CopyGlobalInstruction.new())), VoidToCopyGlobalInstruction())]);
    }
  });
  assembly_parser.parse = function(input, onError) {
    if (onError === void 0) onError = null;
    let t = onError;
    t == null ? onError = dart.fn((message, offset) => dart.throw(new core.FormatException.new(message, input, offset)), StringAndintTobottom()) : t;
    let offset = 0;
    let instructions = JSArrayOfInstruction().of([]);
    let labelAddresses = new (IdentityMapOfString$int()).new();
    while (dart.notNull(offset) < input.length) {
      let match = assembly_parser._scanPattern.matchAsPrefix(input, offset);
      if (match == null) {
        onError("Unrecognized input", offset);
        let remainingLine = assembly_parser.singleLine.matchAsPrefix(input, offset);
        if (remainingLine == null) {
          return null;
        }
        offset = dart.notNull(offset) + remainingLine.group(0).length;
        continue;
      }
      offset = match.end;
      if (match.group(2) != null) {
        let label = match.group(2);
        if (dart.test(labelAddresses[$containsKey](label))) {
          onError("Duplicate label name", match.start);
          continue;
        }
        labelAddresses[$_set](label, instructions[$length]);
      } else if (match.group(3) != null) {
        let parts = match.group(3)[$split](assembly_parser.whitespace);
        let instruction = parts[$first];
        let arguments$ = parts[$skip](1)[$map](core.Object, dart.fn(str => {
          let l = core.int.tryParse(str);
          return l != null ? l : str;
        }, StringToObject()))[$toList]({growable: false});
        let factory = assembly_parser.instructionFactories[$_get](instruction);
        if (factory == null) {
          onError("Unknown instruction name", match.start);
          continue;
        }
        try {
          instructions[$add](virtual_machine$.Instruction._check(core.Function.apply(factory, arguments$)));
        } catch (e) {
          if (core.NoSuchMethodError.is(e)) {
            onError("Invalid arguments for instruction `" + dart.str(instruction) + "`", match.start);
          } else
            throw e;
        }
      } else {
        if (!(match.group(1) != null)) dart.assertFailed();
      }
    }
    return MapEntryOfListOfInstruction$MapOfString$int().new(instructions, labelAddresses);
  };
  dart.trackLibraries("packages/fvm/assembly_parser.ddc", {
    "package:fvm/assembly_parser.dart": assembly_parser
  }, '{"version":3,"sourceRoot":"","sources":["assembly_parser.dart"],"names":[],"mappings":"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","file":"assembly_parser.ddc.js"}');
  // Exports:
  return {
    assembly_parser: assembly_parser
  };
});

//# sourceMappingURL=assembly_parser.ddc.js.map
