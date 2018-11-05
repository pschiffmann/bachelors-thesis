define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const virtual_machine = Object.create(_root);
  const $_get = dartx._get;
  const $isEmpty = dartx.isEmpty;
  const $last = dartx.last;
  const $keys = dartx.keys;
  const $values = dartx.values;
  const $sublist = dartx.sublist;
  const $_set = dartx._set;
  const $length = dartx.length;
  const $setRange = dartx.setRange;
  const $runtimeType = dartx.runtimeType;
  const $truncate = dartx.truncate;
  const $modulo = dartx['%'];
  const $toString = dartx.toString;
  let ListOfInstruction = () => (ListOfInstruction = dart.constFn(core.List$(virtual_machine.Instruction)))();
  let MapOfString$int = () => (MapOfString$int = dart.constFn(core.Map$(core.String, core.int)))();
  let IdentityMapOfint$TaggedObject = () => (IdentityMapOfint$TaggedObject = dart.constFn(_js_helper.IdentityMap$(core.int, virtual_machine.TaggedObject)))();
  let MapOfint$TaggedObject = () => (MapOfint$TaggedObject = dart.constFn(core.Map$(core.int, virtual_machine.TaggedObject)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  dart.defineLazy(virtual_machine, {
    /*virtual_machine.defaultInitialStackSize*/get defaultInitialStackSize() {
      return 10;
    },
    /*virtual_machine.defaultMaxAddress*/get defaultMaxAddress() {
      return (2 << 16) - 1;
    }
  });
  const _labelAddresses = Symbol('_labelAddresses');
  const _heap = Symbol('_heap');
  let const$;
  virtual_machine.VM = class VM extends core.Object {
    get program() {
      return this[program$];
    }
    set program(value) {
      super.program = value;
    }
    get maxAddress() {
      return this[maxAddress$];
    }
    set maxAddress(value) {
      super.maxAddress = value;
    }
    get stack() {
      return this[stack];
    }
    set stack(value) {
      super.stack = value;
    }
    get programCounter() {
      return this[programCounter];
    }
    set programCounter(value) {
      this[programCounter] = value;
    }
    get stackPointer() {
      return this[stackPointer];
    }
    set stackPointer(value) {
      this[stackPointer] = value;
    }
    get stackPointer0() {
      return this[stackPointer0];
    }
    set stackPointer0(value) {
      this[stackPointer0] = value;
    }
    get framePointer() {
      return this[framePointer];
    }
    set framePointer(value) {
      this[framePointer] = value;
    }
    get globalPointer() {
      return this[globalPointer];
    }
    set globalPointer(value) {
      this[globalPointer] = value;
    }
    get globalVector() {
      let obj = this[_heap][$_get](this.globalPointer);
      if (virtual_machine.TaggedList.is(obj)) {
        return obj;
      } else {
        dart.throw(const$ || (const$ = dart.const(new virtual_machine.VmRuntimeException.new("global pointer doesn't point to a V-object"))));
      }
    }
    get nextHeapAddress() {
      return dart.test(this[_heap][$isEmpty]) ? this.maxAddress : dart.notNull(this[_heap][$keys][$last]) - dart.notNull(this[_heap][$values][$last].sizeInCells);
    }
    get terminated() {
      return dart.equals(this.program[$_get](this.programCounter), virtual_machine.halt);
    }
    executeCurrentInstruction() {
      if (!dart.test(this.terminated)) {
        this.program[$_get]((() => {
          let x = this.programCounter;
          this.programCounter = dart.notNull(x) + 1;
          return x;
        })()).execute(this);
      }
    }
    executeProgram() {
      while (true) {
        let instruction = this.program[$_get]((() => {
          let x = this.programCounter;
          this.programCounter = dart.notNull(x) + 1;
          return x;
        })());
        if (virtual_machine.HaltInstruction.is(instruction)) {
          return this.stack[$_get](this.stackPointer);
        } else {
          instruction.execute(this);
        }
      }
    }
    pop() {
      return this.stack[$_get]((() => {
        let x = this.stackPointer;
        this.stackPointer = dart.notNull(x) - 1;
        return x;
      })());
    }
    popAll(count) {
      this.stackPointer = dart.notNull(this.stackPointer) - dart.notNull(count);
      return this.stack[$sublist](dart.notNull(this.stackPointer) + 1, dart.notNull(this.stackPointer) + dart.notNull(count) + 1);
    }
    peek() {
      return this.stack[$_get](this.stackPointer);
    }
    push(value) {
      return this.stack[$_set](this.stackPointer = dart.notNull(this.stackPointer) + 1, value);
    }
    pushAll(values) {
      this.stack[$setRange](dart.notNull(this.stackPointer) + 1, dart.notNull(this.stackPointer) + dart.notNull(values[$length]) + 1, values);
      this.stackPointer = dart.notNull(this.stackPointer) + dart.notNull(values[$length]);
    }
    replaceTop(value) {
      return this.stack[$_set](this.stackPointer, value);
    }
    allocate(object) {
      let address = this.nextHeapAddress;
      this[_heap][$_set](address, object);
      return address;
    }
    dereferenceAs(T, address) {
      let obj = this[_heap][$_get](address);
      if (T.is(obj)) {
        return obj;
      }
      dart.throw(new virtual_machine.VmRuntimeException.new("No " + dart.str(virtual_machine.abbreviations[$_get](dart.wrapType(T))) + "-object at " + dart.str(address)));
    }
    copyTaggedObject(sourceAddress, targetAddress) {
      let l = this[_heap][$_get](sourceAddress);
      let objectToCopy = l != null ? l : dart.throw(new virtual_machine.VmRuntimeException.new("No tagged object at " + dart.str(sourceAddress)));
      let l$ = this[_heap][$_get](targetAddress);
      let overriddenObject = l$ != null ? l$ : dart.throw(new virtual_machine.VmRuntimeException.new("No tagged object to override at " + dart.str(targetAddress)));
      let wastedMemory = dart.notNull(overriddenObject.sizeInCells) - dart.notNull(objectToCopy.sizeInCells);
      if (wastedMemory < 0) {
        dart.throw(new virtual_machine.VmRuntimeException.new("Object at " + dart.str(sourceAddress) + " " + ("is larger than the object at " + dart.str(targetAddress))));
      }
      this[_heap][$_set](targetAddress, objectToCopy.copy(wastedMemory));
    }
    lookupLabel(label) {
      let l = this[_labelAddresses][$_get](label);
      let l$ = l != null ? l : core.int.tryParse(label);
      return l$ != null ? l$ : dart.throw(new virtual_machine.VmRuntimeException.new("Undefined label `" + dart.str(label) + "`"));
    }
  };
  (virtual_machine.VM.new = function(program, labelAddresses, opts) {
    let maxAddress = opts && 'maxAddress' in opts ? opts.maxAddress : 131071;
    let initialStackSize = opts && 'initialStackSize' in opts ? opts.initialStackSize : 10;
    this[_heap] = new (IdentityMapOfint$TaggedObject()).new();
    this[programCounter] = 0;
    this[stackPointer] = -1;
    this[stackPointer0] = -1;
    this[framePointer] = -1;
    this[globalPointer] = -1;
    this[maxAddress$] = maxAddress;
    this[program$] = ListOfInstruction().unmodifiable(program);
    this[_labelAddresses] = MapOfString$int().unmodifiable(labelAddresses);
    this[stack] = typed_data.Int32List.new(initialStackSize);
  }).prototype = virtual_machine.VM.prototype;
  dart.addTypeTests(virtual_machine.VM);
  const program$ = Symbol("VM.program");
  const maxAddress$ = Symbol("VM.maxAddress");
  const stack = Symbol("VM.stack");
  const programCounter = Symbol("VM.programCounter");
  const stackPointer = Symbol("VM.stackPointer");
  const stackPointer0 = Symbol("VM.stackPointer0");
  const framePointer = Symbol("VM.framePointer");
  const globalPointer = Symbol("VM.globalPointer");
  dart.setMethodSignature(virtual_machine.VM, () => ({
    __proto__: dart.getMethods(virtual_machine.VM.__proto__),
    executeCurrentInstruction: dart.fnType(dart.void, []),
    executeProgram: dart.fnType(core.int, []),
    pop: dart.fnType(core.int, []),
    popAll: dart.fnType(core.List$(core.int), [core.int]),
    peek: dart.fnType(core.int, []),
    push: dart.fnType(dart.void, [core.int]),
    pushAll: dart.fnType(dart.void, [core.List$(core.int)]),
    replaceTop: dart.fnType(core.int, [core.int]),
    allocate: dart.fnType(core.int, [virtual_machine.TaggedObject]),
    dereferenceAs: dart.gFnType(T => [T, [core.int]], T => [virtual_machine.TaggedObject]),
    copyTaggedObject: dart.fnType(dart.void, [core.int, core.int]),
    lookupLabel: dart.fnType(core.int, [core.String])
  }));
  dart.setGetterSignature(virtual_machine.VM, () => ({
    __proto__: dart.getGetters(virtual_machine.VM.__proto__),
    globalVector: virtual_machine.TaggedList,
    nextHeapAddress: core.int,
    terminated: core.bool
  }));
  dart.setFieldSignature(virtual_machine.VM, () => ({
    __proto__: dart.getFields(virtual_machine.VM.__proto__),
    program: dart.finalFieldType(ListOfInstruction()),
    [_labelAddresses]: dart.finalFieldType(MapOfString$int()),
    maxAddress: dart.finalFieldType(core.int),
    stack: dart.finalFieldType(typed_data.Int32List),
    [_heap]: dart.finalFieldType(MapOfint$TaggedObject()),
    programCounter: dart.fieldType(core.int),
    stackPointer: dart.fieldType(core.int),
    stackPointer0: dart.fieldType(core.int),
    framePointer: dart.fieldType(core.int),
    globalPointer: dart.fieldType(core.int)
  }));
  virtual_machine.InspectableVM = class InspectableVM extends virtual_machine.VM {
    get heap() {
      return this[_heap];
    }
  };
  (virtual_machine.InspectableVM.new = function(program, labelAddresses, opts) {
    let maxAddress = opts && 'maxAddress' in opts ? opts.maxAddress : 131071;
    let initialStackSize = opts && 'initialStackSize' in opts ? opts.initialStackSize : 10;
    virtual_machine.InspectableVM.__proto__.new.call(this, program, labelAddresses, {maxAddress: maxAddress, initialStackSize: initialStackSize});
  }).prototype = virtual_machine.InspectableVM.prototype;
  dart.addTypeTests(virtual_machine.InspectableVM);
  dart.setGetterSignature(virtual_machine.InspectableVM, () => ({
    __proto__: dart.getGetters(virtual_machine.InspectableVM.__proto__),
    heap: core.Map$(core.int, virtual_machine.TaggedObject)
  }));
  virtual_machine.VmRuntimeException = class VmRuntimeException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return this.message;
    }
  };
  (virtual_machine.VmRuntimeException.new = function(message) {
    this[message$] = message;
  }).prototype = virtual_machine.VmRuntimeException.prototype;
  dart.addTypeTests(virtual_machine.VmRuntimeException);
  const message$ = Symbol("VmRuntimeException.message");
  virtual_machine.VmRuntimeException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(virtual_machine.VmRuntimeException, () => ({
    __proto__: dart.getFields(virtual_machine.VmRuntimeException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(virtual_machine.VmRuntimeException, ['toString']);
  dart.defineLazy(virtual_machine, {
    /*virtual_machine.abbreviations*/get abbreviations() {
      return dart.constMap(core.Type, core.String, [dart.wrapType(virtual_machine.TaggedInt), "B", dart.wrapType(virtual_machine.TaggedList), "V", dart.wrapType(virtual_machine.TaggedFunction), "F", dart.wrapType(virtual_machine.TaggedClosure), "C"]);
    }
  });
  virtual_machine.TaggedObject = class TaggedObject extends core.Object {
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get tag() {
      return virtual_machine.abbreviations[$_get](this[$runtimeType]);
    }
  };
  (virtual_machine.TaggedObject.new = function(padding) {
    this[padding$] = padding;
  }).prototype = virtual_machine.TaggedObject.prototype;
  dart.addTypeTests(virtual_machine.TaggedObject);
  const padding$ = Symbol("TaggedObject.padding");
  dart.setGetterSignature(virtual_machine.TaggedObject, () => ({
    __proto__: dart.getGetters(virtual_machine.TaggedObject.__proto__),
    tag: core.String
  }));
  dart.setFieldSignature(virtual_machine.TaggedObject, () => ({
    __proto__: dart.getFields(virtual_machine.TaggedObject.__proto__),
    padding: dart.finalFieldType(core.int)
  }));
  virtual_machine.TaggedInt = class TaggedInt extends virtual_machine.TaggedObject {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get sizeInCells() {
      return 2 + dart.notNull(this.padding);
    }
    copy(padding) {
      return new virtual_machine.TaggedInt.new(this.value, padding);
    }
  };
  (virtual_machine.TaggedInt.new = function(value, padding) {
    if (padding === void 0) padding = 0;
    this[value$] = value;
    virtual_machine.TaggedInt.__proto__.new.call(this, padding);
  }).prototype = virtual_machine.TaggedInt.prototype;
  dart.addTypeTests(virtual_machine.TaggedInt);
  const value$ = Symbol("TaggedInt.value");
  dart.setMethodSignature(virtual_machine.TaggedInt, () => ({
    __proto__: dart.getMethods(virtual_machine.TaggedInt.__proto__),
    copy: dart.fnType(virtual_machine.TaggedInt, [core.int])
  }));
  dart.setGetterSignature(virtual_machine.TaggedInt, () => ({
    __proto__: dart.getGetters(virtual_machine.TaggedInt.__proto__),
    sizeInCells: core.int
  }));
  dart.setFieldSignature(virtual_machine.TaggedInt, () => ({
    __proto__: dart.getFields(virtual_machine.TaggedInt.__proto__),
    value: dart.finalFieldType(core.int)
  }));
  let const$0;
  virtual_machine.TaggedList = class TaggedList extends virtual_machine.TaggedObject {
    get values() {
      return this[values$];
    }
    set values(value) {
      super.values = value;
    }
    get length() {
      return this.values[$length];
    }
    get sizeInCells() {
      return 2 + dart.notNull(this.values[$length]) + dart.notNull(this.padding);
    }
    copy(padding) {
      return new virtual_machine.TaggedList.new(this.values, padding);
    }
  };
  (virtual_machine.TaggedList.new = function(values, padding) {
    if (padding === void 0) padding = 0;
    this[values$] = values;
    virtual_machine.TaggedList.__proto__.new.call(this, padding);
  }).prototype = virtual_machine.TaggedList.prototype;
  (virtual_machine.TaggedList.empty = function() {
    this[values$] = const$0 || (const$0 = dart.constList([], core.int));
    virtual_machine.TaggedList.__proto__.new.call(this, 0);
  }).prototype = virtual_machine.TaggedList.prototype;
  dart.addTypeTests(virtual_machine.TaggedList);
  const values$ = Symbol("TaggedList.values");
  dart.setMethodSignature(virtual_machine.TaggedList, () => ({
    __proto__: dart.getMethods(virtual_machine.TaggedList.__proto__),
    copy: dart.fnType(virtual_machine.TaggedList, [core.int])
  }));
  dart.setGetterSignature(virtual_machine.TaggedList, () => ({
    __proto__: dart.getGetters(virtual_machine.TaggedList.__proto__),
    length: core.int,
    sizeInCells: core.int
  }));
  dart.setFieldSignature(virtual_machine.TaggedList, () => ({
    __proto__: dart.getFields(virtual_machine.TaggedList.__proto__),
    values: dart.finalFieldType(ListOfint())
  }));
  virtual_machine.TaggedFunction = class TaggedFunction extends virtual_machine.TaggedObject {
    get functionLabel() {
      return this[functionLabel$];
    }
    set functionLabel(value) {
      super.functionLabel = value;
    }
    get globalVectorAddress() {
      return this[globalVectorAddress$];
    }
    set globalVectorAddress(value) {
      super.globalVectorAddress = value;
    }
    get argumentVectorAddress() {
      return this[argumentVectorAddress$];
    }
    set argumentVectorAddress(value) {
      super.argumentVectorAddress = value;
    }
    get sizeInCells() {
      return 4 + dart.notNull(this.padding);
    }
    copy(padding) {
      return new virtual_machine.TaggedFunction.new(this.functionLabel, this.globalVectorAddress, this.argumentVectorAddress, padding);
    }
  };
  (virtual_machine.TaggedFunction.new = function(functionLabel, globalVectorAddress, argumentVectorAddress, padding) {
    if (padding === void 0) padding = 0;
    this[functionLabel$] = functionLabel;
    this[globalVectorAddress$] = globalVectorAddress;
    this[argumentVectorAddress$] = argumentVectorAddress;
    virtual_machine.TaggedFunction.__proto__.new.call(this, padding);
  }).prototype = virtual_machine.TaggedFunction.prototype;
  dart.addTypeTests(virtual_machine.TaggedFunction);
  const functionLabel$ = Symbol("TaggedFunction.functionLabel");
  const globalVectorAddress$ = Symbol("TaggedFunction.globalVectorAddress");
  const argumentVectorAddress$ = Symbol("TaggedFunction.argumentVectorAddress");
  dart.setMethodSignature(virtual_machine.TaggedFunction, () => ({
    __proto__: dart.getMethods(virtual_machine.TaggedFunction.__proto__),
    copy: dart.fnType(virtual_machine.TaggedFunction, [core.int])
  }));
  dart.setGetterSignature(virtual_machine.TaggedFunction, () => ({
    __proto__: dart.getGetters(virtual_machine.TaggedFunction.__proto__),
    sizeInCells: core.int
  }));
  dart.setFieldSignature(virtual_machine.TaggedFunction, () => ({
    __proto__: dart.getFields(virtual_machine.TaggedFunction.__proto__),
    functionLabel: dart.finalFieldType(core.String),
    globalVectorAddress: dart.finalFieldType(core.int),
    argumentVectorAddress: dart.finalFieldType(core.int)
  }));
  virtual_machine.TaggedClosure = class TaggedClosure extends virtual_machine.TaggedObject {
    get expressionLabel() {
      return this[expressionLabel$];
    }
    set expressionLabel(value) {
      super.expressionLabel = value;
    }
    get globalVectorAddress() {
      return this[globalVectorAddress$0];
    }
    set globalVectorAddress(value) {
      super.globalVectorAddress = value;
    }
    get sizeInCells() {
      return 3 + dart.notNull(this.padding);
    }
    copy(padding) {
      return new virtual_machine.TaggedClosure.new(this.expressionLabel, this.globalVectorAddress, padding);
    }
  };
  (virtual_machine.TaggedClosure.new = function(expressionLabel, globalVectorAddress, padding) {
    if (padding === void 0) padding = 0;
    this[expressionLabel$] = expressionLabel;
    this[globalVectorAddress$0] = globalVectorAddress;
    virtual_machine.TaggedClosure.__proto__.new.call(this, padding);
  }).prototype = virtual_machine.TaggedClosure.prototype;
  dart.addTypeTests(virtual_machine.TaggedClosure);
  const expressionLabel$ = Symbol("TaggedClosure.expressionLabel");
  const globalVectorAddress$0 = Symbol("TaggedClosure.globalVectorAddress");
  dart.setMethodSignature(virtual_machine.TaggedClosure, () => ({
    __proto__: dart.getMethods(virtual_machine.TaggedClosure.__proto__),
    copy: dart.fnType(virtual_machine.TaggedClosure, [core.int])
  }));
  dart.setGetterSignature(virtual_machine.TaggedClosure, () => ({
    __proto__: dart.getGetters(virtual_machine.TaggedClosure.__proto__),
    sizeInCells: core.int
  }));
  dart.setFieldSignature(virtual_machine.TaggedClosure, () => ({
    __proto__: dart.getFields(virtual_machine.TaggedClosure.__proto__),
    expressionLabel: dart.finalFieldType(core.String),
    globalVectorAddress: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(virtual_machine, {
    /*virtual_machine.halt*/get halt() {
      return dart.const(new virtual_machine.HaltInstruction.new());
    }
  });
  virtual_machine.Instruction = class Instruction extends core.Object {};
  (virtual_machine.Instruction.new = function() {
  }).prototype = virtual_machine.Instruction.prototype;
  dart.addTypeTests(virtual_machine.Instruction);
  virtual_machine.LoadConstantInstruction = class LoadConstantInstruction extends core.Object {
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    execute(vm) {
      return vm.push(this.value);
    }
    toString() {
      return "loadc " + dart.str(this.value);
    }
  };
  (virtual_machine.LoadConstantInstruction.new = function(value) {
    this[value$0] = value;
  }).prototype = virtual_machine.LoadConstantInstruction.prototype;
  dart.addTypeTests(virtual_machine.LoadConstantInstruction);
  const value$0 = Symbol("LoadConstantInstruction.value");
  virtual_machine.LoadConstantInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.LoadConstantInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.LoadConstantInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.LoadConstantInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.LoadConstantInstruction.__proto__),
    value: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(virtual_machine.LoadConstantInstruction, ['toString']);
  virtual_machine.JumpInstruction = class JumpInstruction extends core.Object {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    execute(vm) {
      return vm.programCounter = vm.lookupLabel(this.target);
    }
    toString() {
      return "jump " + dart.str(this.target);
    }
  };
  (virtual_machine.JumpInstruction.new = function(target) {
    this[target$] = target;
  }).prototype = virtual_machine.JumpInstruction.prototype;
  dart.addTypeTests(virtual_machine.JumpInstruction);
  const target$ = Symbol("JumpInstruction.target");
  virtual_machine.JumpInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.JumpInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.JumpInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.JumpInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.JumpInstruction.__proto__),
    target: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(virtual_machine.JumpInstruction, ['toString']);
  virtual_machine.JumpIfZeroInstruction = class JumpIfZeroInstruction extends core.Object {
    get target() {
      return this[target$0];
    }
    set target(value) {
      super.target = value;
    }
    execute(vm) {
      if (vm.pop() === 0) {
        vm.programCounter = vm.lookupLabel(this.target);
      }
    }
    toString() {
      return "jumpz " + dart.str(this.target);
    }
  };
  (virtual_machine.JumpIfZeroInstruction.new = function(target) {
    this[target$0] = target;
  }).prototype = virtual_machine.JumpIfZeroInstruction.prototype;
  dart.addTypeTests(virtual_machine.JumpIfZeroInstruction);
  const target$0 = Symbol("JumpIfZeroInstruction.target");
  virtual_machine.JumpIfZeroInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.JumpIfZeroInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.JumpIfZeroInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.JumpIfZeroInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.JumpIfZeroInstruction.__proto__),
    target: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(virtual_machine.JumpIfZeroInstruction, ['toString']);
  virtual_machine.BinaryOperatorInstruction = class BinaryOperatorInstruction extends core.Object {
    execute(vm) {
      vm.stackPointer = dart.notNull(vm.stackPointer) - 1;
      vm.stack[$_set](vm.stackPointer, this.calculate(vm.stack[$_get](vm.stackPointer), vm.stack[$_get](dart.notNull(vm.stackPointer) + 1)));
    }
  };
  (virtual_machine.BinaryOperatorInstruction.new = function() {
  }).prototype = virtual_machine.BinaryOperatorInstruction.prototype;
  dart.addTypeTests(virtual_machine.BinaryOperatorInstruction);
  virtual_machine.BinaryOperatorInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.BinaryOperatorInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.BinaryOperatorInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  virtual_machine.AddInstruction = class AddInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return dart.notNull(op1) + dart.notNull(op2);
    }
    toString() {
      return "add";
    }
  };
  (virtual_machine.AddInstruction.new = function() {
    virtual_machine.AddInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.AddInstruction.prototype;
  dart.addTypeTests(virtual_machine.AddInstruction);
  dart.setMethodSignature(virtual_machine.AddInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.AddInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.AddInstruction, ['toString']);
  virtual_machine.SubtractInstruction = class SubtractInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return dart.notNull(op1) - dart.notNull(op2);
    }
    toString() {
      return "sub";
    }
  };
  (virtual_machine.SubtractInstruction.new = function() {
    virtual_machine.SubtractInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.SubtractInstruction.prototype;
  dart.addTypeTests(virtual_machine.SubtractInstruction);
  dart.setMethodSignature(virtual_machine.SubtractInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.SubtractInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.SubtractInstruction, ['toString']);
  virtual_machine.MultiplyInstruction = class MultiplyInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return dart.notNull(op1) * dart.notNull(op2);
    }
    toString() {
      return "mul";
    }
  };
  (virtual_machine.MultiplyInstruction.new = function() {
    virtual_machine.MultiplyInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.MultiplyInstruction.prototype;
  dart.addTypeTests(virtual_machine.MultiplyInstruction);
  dart.setMethodSignature(virtual_machine.MultiplyInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.MultiplyInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.MultiplyInstruction, ['toString']);
  virtual_machine.DivideInstruction = class DivideInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return (dart.notNull(op1) / dart.notNull(op2))[$truncate]();
    }
    toString() {
      return "div";
    }
  };
  (virtual_machine.DivideInstruction.new = function() {
    virtual_machine.DivideInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.DivideInstruction.prototype;
  dart.addTypeTests(virtual_machine.DivideInstruction);
  dart.setMethodSignature(virtual_machine.DivideInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.DivideInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.DivideInstruction, ['toString']);
  virtual_machine.ModuloInstruction = class ModuloInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return op1[$modulo](op2);
    }
    toString() {
      return "mod";
    }
  };
  (virtual_machine.ModuloInstruction.new = function() {
    virtual_machine.ModuloInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.ModuloInstruction.prototype;
  dart.addTypeTests(virtual_machine.ModuloInstruction);
  dart.setMethodSignature(virtual_machine.ModuloInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.ModuloInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.ModuloInstruction, ['toString']);
  virtual_machine.NegateInstruction = class NegateInstruction extends core.Object {
    execute(vm) {
      return vm.push(-dart.notNull(vm.pop()));
    }
    toString() {
      return "neg";
    }
  };
  (virtual_machine.NegateInstruction.new = function() {
  }).prototype = virtual_machine.NegateInstruction.prototype;
  dart.addTypeTests(virtual_machine.NegateInstruction);
  virtual_machine.NegateInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.NegateInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.NegateInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.NegateInstruction, ['toString']);
  virtual_machine.EqualsInstruction = class EqualsInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return op1 == op2 ? 1 : 0;
    }
    toString() {
      return "eq";
    }
  };
  (virtual_machine.EqualsInstruction.new = function() {
    virtual_machine.EqualsInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.EqualsInstruction.prototype;
  dart.addTypeTests(virtual_machine.EqualsInstruction);
  dart.setMethodSignature(virtual_machine.EqualsInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.EqualsInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.EqualsInstruction, ['toString']);
  virtual_machine.NotEqualsInstruction = class NotEqualsInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return op1 != op2 ? 1 : 0;
    }
    toString() {
      return "neq";
    }
  };
  (virtual_machine.NotEqualsInstruction.new = function() {
    virtual_machine.NotEqualsInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.NotEqualsInstruction.prototype;
  dart.addTypeTests(virtual_machine.NotEqualsInstruction);
  dart.setMethodSignature(virtual_machine.NotEqualsInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.NotEqualsInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.NotEqualsInstruction, ['toString']);
  virtual_machine.LessThanInstruction = class LessThanInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return dart.notNull(op1) < dart.notNull(op2) ? 1 : 0;
    }
    toString() {
      return "le";
    }
  };
  (virtual_machine.LessThanInstruction.new = function() {
    virtual_machine.LessThanInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.LessThanInstruction.prototype;
  dart.addTypeTests(virtual_machine.LessThanInstruction);
  dart.setMethodSignature(virtual_machine.LessThanInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.LessThanInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.LessThanInstruction, ['toString']);
  virtual_machine.LessEqualsInstruction = class LessEqualsInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return dart.notNull(op1) <= dart.notNull(op2) ? 1 : 0;
    }
    toString() {
      return "leq";
    }
  };
  (virtual_machine.LessEqualsInstruction.new = function() {
    virtual_machine.LessEqualsInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.LessEqualsInstruction.prototype;
  dart.addTypeTests(virtual_machine.LessEqualsInstruction);
  dart.setMethodSignature(virtual_machine.LessEqualsInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.LessEqualsInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.LessEqualsInstruction, ['toString']);
  virtual_machine.GreaterThanInstruction = class GreaterThanInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return dart.notNull(op1) > dart.notNull(op2) ? 1 : 0;
    }
    toString() {
      return "gr";
    }
  };
  (virtual_machine.GreaterThanInstruction.new = function() {
    virtual_machine.GreaterThanInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.GreaterThanInstruction.prototype;
  dart.addTypeTests(virtual_machine.GreaterThanInstruction);
  dart.setMethodSignature(virtual_machine.GreaterThanInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.GreaterThanInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.GreaterThanInstruction, ['toString']);
  virtual_machine.GreaterEqualsInstruction = class GreaterEqualsInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return dart.notNull(op1) >= dart.notNull(op2) ? 1 : 0;
    }
    toString() {
      return "geq";
    }
  };
  (virtual_machine.GreaterEqualsInstruction.new = function() {
    virtual_machine.GreaterEqualsInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.GreaterEqualsInstruction.prototype;
  dart.addTypeTests(virtual_machine.GreaterEqualsInstruction);
  dart.setMethodSignature(virtual_machine.GreaterEqualsInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.GreaterEqualsInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.GreaterEqualsInstruction, ['toString']);
  virtual_machine.AndInstruction = class AndInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return op1 !== 0 && op2 !== 0 ? 1 : 0;
    }
    toString() {
      return "and";
    }
  };
  (virtual_machine.AndInstruction.new = function() {
    virtual_machine.AndInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.AndInstruction.prototype;
  dart.addTypeTests(virtual_machine.AndInstruction);
  dart.setMethodSignature(virtual_machine.AndInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.AndInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.AndInstruction, ['toString']);
  virtual_machine.OrInstruction = class OrInstruction extends virtual_machine.BinaryOperatorInstruction {
    calculate(op1, op2) {
      return op1 !== 0 || op2 !== 0 ? 1 : 0;
    }
    toString() {
      return "or";
    }
  };
  (virtual_machine.OrInstruction.new = function() {
    virtual_machine.OrInstruction.__proto__.new.call(this);
  }).prototype = virtual_machine.OrInstruction.prototype;
  dart.addTypeTests(virtual_machine.OrInstruction);
  dart.setMethodSignature(virtual_machine.OrInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.OrInstruction.__proto__),
    calculate: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.defineExtensionMethods(virtual_machine.OrInstruction, ['toString']);
  virtual_machine.NotInstruction = class NotInstruction extends core.Object {
    execute(vm) {
      return vm.push(vm.pop() === 0 ? 1 : 0);
    }
    toString() {
      return "not";
    }
  };
  (virtual_machine.NotInstruction.new = function() {
  }).prototype = virtual_machine.NotInstruction.prototype;
  dart.addTypeTests(virtual_machine.NotInstruction);
  virtual_machine.NotInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.NotInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.NotInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.NotInstruction, ['toString']);
  virtual_machine.SlideInstruction = class SlideInstruction extends core.Object {
    get shiftAmount() {
      return this[shiftAmount$];
    }
    set shiftAmount(value) {
      super.shiftAmount = value;
    }
    get elementCount() {
      return this[elementCount$];
    }
    set elementCount(value) {
      super.elementCount = value;
    }
    execute(vm) {
      if (this.shiftAmount === 0) {
        return;
      }
      let currentStart = dart.notNull(vm.stackPointer) - (dart.notNull(this.elementCount) - 1);
      let newStart = dart.notNull(vm.stackPointer) - (dart.notNull(this.shiftAmount) + dart.notNull(this.elementCount) - 1);
      for (let i = 0; i < dart.notNull(this.elementCount); i++) {
        vm.stack[$_set](newStart + i, vm.stack[$_get](currentStart + i));
      }
      vm.stackPointer = newStart + dart.notNull(this.elementCount) - 1;
    }
    toString() {
      return "slide " + dart.str(this.shiftAmount) + " " + dart.str(this.elementCount);
    }
  };
  (virtual_machine.SlideInstruction.new = function(shiftAmount, elementCount) {
    this[shiftAmount$] = shiftAmount;
    this[elementCount$] = elementCount;
    if (dart.notNull(this.shiftAmount) < 0 || dart.notNull(this.elementCount) < 0) {
      dart.throw(new core.ArgumentError.new("Both arguments must be non-negative"));
    }
  }).prototype = virtual_machine.SlideInstruction.prototype;
  dart.addTypeTests(virtual_machine.SlideInstruction);
  const shiftAmount$ = Symbol("SlideInstruction.shiftAmount");
  const elementCount$ = Symbol("SlideInstruction.elementCount");
  virtual_machine.SlideInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.SlideInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.SlideInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.SlideInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.SlideInstruction.__proto__),
    shiftAmount: dart.finalFieldType(core.int),
    elementCount: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(virtual_machine.SlideInstruction, ['toString']);
  virtual_machine.HaltInstruction = class HaltInstruction extends core.Object {
    execute(vm) {
      return dart.throw(new core.UnsupportedError.new("`halt` instruction cannot be executed"));
    }
    toString() {
      return "halt";
    }
  };
  (virtual_machine.HaltInstruction.new = function() {
  }).prototype = virtual_machine.HaltInstruction.prototype;
  dart.addTypeTests(virtual_machine.HaltInstruction);
  virtual_machine.HaltInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.HaltInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.HaltInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.HaltInstruction, ['toString']);
  virtual_machine.PushLocalInstruction = class PushLocalInstruction extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    execute(vm) {
      return vm.push(vm.stack[$_get](dart.notNull(vm.stackPointer0) + dart.notNull(this.offset)));
    }
    toString() {
      return "pushL " + dart.str(this.offset);
    }
  };
  (virtual_machine.PushLocalInstruction.new = function(offset) {
    this[offset$] = offset;
  }).prototype = virtual_machine.PushLocalInstruction.prototype;
  dart.addTypeTests(virtual_machine.PushLocalInstruction);
  const offset$ = Symbol("PushLocalInstruction.offset");
  virtual_machine.PushLocalInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.PushLocalInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.PushLocalInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.PushLocalInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.PushLocalInstruction.__proto__),
    offset: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(virtual_machine.PushLocalInstruction, ['toString']);
  virtual_machine.PushGlobalInstruction = class PushGlobalInstruction extends core.Object {
    get offset() {
      return this[offset$0];
    }
    set offset(value) {
      super.offset = value;
    }
    execute(vm) {
      return vm.push(vm.globalVector.values[$_get](this.offset));
    }
    toString() {
      return "pushG " + dart.str(this.offset);
    }
  };
  (virtual_machine.PushGlobalInstruction.new = function(offset) {
    this[offset$0] = offset;
  }).prototype = virtual_machine.PushGlobalInstruction.prototype;
  dart.addTypeTests(virtual_machine.PushGlobalInstruction);
  const offset$0 = Symbol("PushGlobalInstruction.offset");
  virtual_machine.PushGlobalInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.PushGlobalInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.PushGlobalInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.PushGlobalInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.PushGlobalInstruction.__proto__),
    offset: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(virtual_machine.PushGlobalInstruction, ['toString']);
  virtual_machine.UnwrapTaggedIntInstruction = class UnwrapTaggedIntInstruction extends core.Object {
    execute(vm) {
      return vm.replaceTop(vm.dereferenceAs(virtual_machine.TaggedInt, vm.peek()).value);
    }
    toString() {
      return "getB";
    }
  };
  (virtual_machine.UnwrapTaggedIntInstruction.new = function() {
  }).prototype = virtual_machine.UnwrapTaggedIntInstruction.prototype;
  dart.addTypeTests(virtual_machine.UnwrapTaggedIntInstruction);
  virtual_machine.UnwrapTaggedIntInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.UnwrapTaggedIntInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.UnwrapTaggedIntInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.UnwrapTaggedIntInstruction, ['toString']);
  virtual_machine.UnwrapTaggedListInstruction = class UnwrapTaggedListInstruction extends core.Object {
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    execute(vm) {
      let address = vm.peek();
      let list = vm.dereferenceAs(virtual_machine.TaggedList, address);
      if (dart.notNull(list.length) < dart.notNull(this.length)) {
        dart.throw(new virtual_machine.VmRuntimeException.new("Too few elements in L-object at " + dart.str(address)));
      }
      vm.stack[$setRange](vm.stackPointer, dart.notNull(vm.stackPointer) + dart.notNull(this.length), list.values);
      vm.stackPointer = dart.notNull(vm.stackPointer) + (dart.notNull(this.length) - 1);
    }
    toString() {
      return "getV " + dart.str(this.length);
    }
  };
  (virtual_machine.UnwrapTaggedListInstruction.new = function(length) {
    this[length$] = length;
  }).prototype = virtual_machine.UnwrapTaggedListInstruction.prototype;
  dart.addTypeTests(virtual_machine.UnwrapTaggedListInstruction);
  const length$ = Symbol("UnwrapTaggedListInstruction.length");
  virtual_machine.UnwrapTaggedListInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.UnwrapTaggedListInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.UnwrapTaggedListInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.UnwrapTaggedListInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.UnwrapTaggedListInstruction.__proto__),
    length: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(virtual_machine.UnwrapTaggedListInstruction, ['toString']);
  virtual_machine.AllocateTaggedIntInstruction = class AllocateTaggedIntInstruction extends core.Object {
    execute(vm) {
      return vm.push(vm.allocate(new virtual_machine.TaggedInt.new(vm.pop())));
    }
    toString() {
      return "mkB";
    }
  };
  (virtual_machine.AllocateTaggedIntInstruction.new = function() {
  }).prototype = virtual_machine.AllocateTaggedIntInstruction.prototype;
  dart.addTypeTests(virtual_machine.AllocateTaggedIntInstruction);
  virtual_machine.AllocateTaggedIntInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.AllocateTaggedIntInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.AllocateTaggedIntInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.AllocateTaggedIntInstruction, ['toString']);
  virtual_machine.AllocateTaggedListInstruction = class AllocateTaggedListInstruction extends core.Object {
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    execute(vm) {
      let references = vm.stack[$sublist](dart.notNull(vm.stackPointer) - dart.notNull(this.length) + 1, dart.notNull(vm.stackPointer) + 1);
      vm.stackPointer = dart.notNull(vm.stackPointer) - dart.notNull(this.length);
      vm.push(vm.allocate(new virtual_machine.TaggedList.new(references)));
    }
    toString() {
      return "mkV " + dart.str(this.length);
    }
  };
  (virtual_machine.AllocateTaggedListInstruction.new = function(length) {
    this[length$0] = length;
  }).prototype = virtual_machine.AllocateTaggedListInstruction.prototype;
  dart.addTypeTests(virtual_machine.AllocateTaggedListInstruction);
  const length$0 = Symbol("AllocateTaggedListInstruction.length");
  virtual_machine.AllocateTaggedListInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.AllocateTaggedListInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.AllocateTaggedListInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.AllocateTaggedListInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.AllocateTaggedListInstruction.__proto__),
    length: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(virtual_machine.AllocateTaggedListInstruction, ['toString']);
  let const$1;
  virtual_machine.AllocateTaggedFunctionInstruction = class AllocateTaggedFunctionInstruction extends core.Object {
    get functionLabel() {
      return this[functionLabel$0];
    }
    set functionLabel(value) {
      super.functionLabel = value;
    }
    execute(vm) {
      let globalVector = vm.pop();
      let argumentVector = vm.allocate(const$1 || (const$1 = dart.const(new virtual_machine.TaggedList.empty())));
      vm.push(vm.allocate(new virtual_machine.TaggedFunction.new(this.functionLabel, globalVector, argumentVector)));
    }
    toString() {
      return "mkF " + dart.str(this.functionLabel);
    }
  };
  (virtual_machine.AllocateTaggedFunctionInstruction.new = function(functionLabel) {
    this[functionLabel$0] = functionLabel;
  }).prototype = virtual_machine.AllocateTaggedFunctionInstruction.prototype;
  dart.addTypeTests(virtual_machine.AllocateTaggedFunctionInstruction);
  const functionLabel$0 = Symbol("AllocateTaggedFunctionInstruction.functionLabel");
  virtual_machine.AllocateTaggedFunctionInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.AllocateTaggedFunctionInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.AllocateTaggedFunctionInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.AllocateTaggedFunctionInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.AllocateTaggedFunctionInstruction.__proto__),
    functionLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(virtual_machine.AllocateTaggedFunctionInstruction, ['toString']);
  virtual_machine.AllocateTaggedClosureInstruction = class AllocateTaggedClosureInstruction extends core.Object {
    get expressionLabel() {
      return this[expressionLabel$0];
    }
    set expressionLabel(value) {
      super.expressionLabel = value;
    }
    execute(vm) {
      return vm.push(vm.allocate(new virtual_machine.TaggedClosure.new(this.expressionLabel, vm.pop())));
    }
    toString() {
      return "mkC " + dart.str(this.expressionLabel);
    }
  };
  (virtual_machine.AllocateTaggedClosureInstruction.new = function(expressionLabel) {
    this[expressionLabel$0] = expressionLabel;
  }).prototype = virtual_machine.AllocateTaggedClosureInstruction.prototype;
  dart.addTypeTests(virtual_machine.AllocateTaggedClosureInstruction);
  const expressionLabel$0 = Symbol("AllocateTaggedClosureInstruction.expressionLabel");
  virtual_machine.AllocateTaggedClosureInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.AllocateTaggedClosureInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.AllocateTaggedClosureInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.AllocateTaggedClosureInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.AllocateTaggedClosureInstruction.__proto__),
    expressionLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(virtual_machine.AllocateTaggedClosureInstruction, ['toString']);
  virtual_machine.SetStackPointer0Instruction = class SetStackPointer0Instruction extends core.Object {
    execute(vm) {
      return vm.stackPointer0 = dart.notNull(vm.stackPointer) - 1;
    }
    toString() {
      return "setSP0";
    }
  };
  (virtual_machine.SetStackPointer0Instruction.new = function() {
  }).prototype = virtual_machine.SetStackPointer0Instruction.prototype;
  dart.addTypeTests(virtual_machine.SetStackPointer0Instruction);
  virtual_machine.SetStackPointer0Instruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.SetStackPointer0Instruction, () => ({
    __proto__: dart.getMethods(virtual_machine.SetStackPointer0Instruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.SetStackPointer0Instruction, ['toString']);
  virtual_machine.MarkInstruction = class MarkInstruction extends core.Object {
    get returnLabel() {
      return this[returnLabel$];
    }
    set returnLabel(value) {
      super.returnLabel = value;
    }
    execute(vm) {
      let returnAddress = vm.lookupLabel(this.returnLabel);
      vm.push(vm.stackPointer0);
      vm.push(vm.globalPointer);
      vm.push(vm.framePointer);
      vm.push(returnAddress);
      vm.framePointer = vm.stackPointer;
    }
    toString() {
      return "mark " + dart.str(this.returnLabel);
    }
  };
  (virtual_machine.MarkInstruction.new = function(returnLabel) {
    this[returnLabel$] = returnLabel;
  }).prototype = virtual_machine.MarkInstruction.prototype;
  dart.addTypeTests(virtual_machine.MarkInstruction);
  const returnLabel$ = Symbol("MarkInstruction.returnLabel");
  virtual_machine.MarkInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.MarkInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.MarkInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.MarkInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.MarkInstruction.__proto__),
    returnLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(virtual_machine.MarkInstruction, ['toString']);
  virtual_machine.MarkProgramCounterInstruction = class MarkProgramCounterInstruction extends core.Object {
    execute(vm) {
      vm.push(vm.stackPointer0);
      vm.push(vm.globalPointer);
      vm.push(vm.framePointer);
      vm.push(vm.programCounter);
      vm.framePointer = vm.stackPointer;
    }
    toString() {
      return "markpc";
    }
  };
  (virtual_machine.MarkProgramCounterInstruction.new = function() {
  }).prototype = virtual_machine.MarkProgramCounterInstruction.prototype;
  dart.addTypeTests(virtual_machine.MarkProgramCounterInstruction);
  virtual_machine.MarkProgramCounterInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.MarkProgramCounterInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.MarkProgramCounterInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.MarkProgramCounterInstruction, ['toString']);
  virtual_machine.Apply1Instruction = class Apply1Instruction extends core.Object {
    execute(vm) {
      let fAddress = vm.pop();
      let fObj = vm.dereferenceAs(virtual_machine.TaggedFunction, fAddress);
      let args = vm.dereferenceAs(virtual_machine.TaggedList, fObj.argumentVectorAddress);
      vm.pushAll(args.values);
      vm.push(fAddress);
    }
    toString() {
      return "apply1";
    }
  };
  (virtual_machine.Apply1Instruction.new = function() {
  }).prototype = virtual_machine.Apply1Instruction.prototype;
  dart.addTypeTests(virtual_machine.Apply1Instruction);
  virtual_machine.Apply1Instruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.Apply1Instruction, () => ({
    __proto__: dart.getMethods(virtual_machine.Apply1Instruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.Apply1Instruction, ['toString']);
  virtual_machine.Apply0Instruction = class Apply0Instruction extends core.Object {
    execute(vm) {
      let address = vm.pop();
      let obj = vm.dereferenceAs(virtual_machine.TaggedObject, address);
      if (virtual_machine.TaggedFunction.is(obj)) {
        vm.globalPointer = obj.globalVectorAddress;
        vm.programCounter = vm.lookupLabel(obj.functionLabel);
      } else if (virtual_machine.TaggedClosure.is(obj)) {
        vm.globalPointer = obj.globalVectorAddress;
        vm.programCounter = vm.lookupLabel(obj.expressionLabel);
      } else {
        dart.throw(new virtual_machine.VmRuntimeException.new("No C-oject or F-object at " + dart.str(address)));
      }
    }
    toString() {
      return "apply0";
    }
  };
  (virtual_machine.Apply0Instruction.new = function() {
  }).prototype = virtual_machine.Apply0Instruction.prototype;
  dart.addTypeTests(virtual_machine.Apply0Instruction);
  virtual_machine.Apply0Instruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.Apply0Instruction, () => ({
    __proto__: dart.getMethods(virtual_machine.Apply0Instruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.Apply0Instruction, ['toString']);
  let const$2;
  let const$3;
  virtual_machine.ApplyInstruction = class ApplyInstruction extends core.Object {
    execute(vm) {
      (const$2 || (const$2 = dart.const(new virtual_machine.Apply1Instruction.new()))).execute(vm);
      (const$3 || (const$3 = dart.const(new virtual_machine.Apply0Instruction.new()))).execute(vm);
    }
    toString() {
      return "apply";
    }
  };
  (virtual_machine.ApplyInstruction.new = function() {
  }).prototype = virtual_machine.ApplyInstruction.prototype;
  dart.addTypeTests(virtual_machine.ApplyInstruction);
  virtual_machine.ApplyInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.ApplyInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.ApplyInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.ApplyInstruction, ['toString']);
  let const$4;
  let const$5;
  virtual_machine.TestArgumentCountInstruction = class TestArgumentCountInstruction extends core.Object {
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    execute(vm) {
      let actual = dart.notNull(vm.stackPointer) - dart.notNull(vm.framePointer);
      if (actual < dart.notNull(this.count)) {
        new virtual_machine.AllocateTaggedListInstruction.new(actual).execute(vm);
        (const$4 || (const$4 = dart.const(new virtual_machine.WrapInstruction.new()))).execute(vm);
        (const$5 || (const$5 = dart.const(new virtual_machine.PopEnvironmentInstruction.new()))).execute(vm);
      }
    }
    toString() {
      return "testArg " + dart.str(this.count);
    }
  };
  (virtual_machine.TestArgumentCountInstruction.new = function(count) {
    this[count$] = count;
  }).prototype = virtual_machine.TestArgumentCountInstruction.prototype;
  dart.addTypeTests(virtual_machine.TestArgumentCountInstruction);
  const count$ = Symbol("TestArgumentCountInstruction.count");
  virtual_machine.TestArgumentCountInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.TestArgumentCountInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.TestArgumentCountInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.TestArgumentCountInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.TestArgumentCountInstruction.__proto__),
    count: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(virtual_machine.TestArgumentCountInstruction, ['toString']);
  virtual_machine.WrapInstruction = class WrapInstruction extends core.Object {
    execute(vm) {
      vm.push(vm.allocate(new virtual_machine.TaggedFunction.new((dart.notNull(vm.programCounter) - 1)[$toString](), vm.globalPointer, vm.pop())));
    }
    toString() {
      return "wrap";
    }
  };
  (virtual_machine.WrapInstruction.new = function() {
  }).prototype = virtual_machine.WrapInstruction.prototype;
  dart.addTypeTests(virtual_machine.WrapInstruction);
  virtual_machine.WrapInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.WrapInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.WrapInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.WrapInstruction, ['toString']);
  virtual_machine.PopEnvironmentInstruction = class PopEnvironmentInstruction extends core.Object {
    execute(vm) {
      let result = vm.peek();
      vm.stackPointer = vm.framePointer;
      vm.programCounter = vm.pop();
      vm.framePointer = vm.pop();
      vm.globalPointer = vm.pop();
      vm.stackPointer0 = vm.pop();
      vm.push(result);
    }
    toString() {
      return "popEnv";
    }
  };
  (virtual_machine.PopEnvironmentInstruction.new = function() {
  }).prototype = virtual_machine.PopEnvironmentInstruction.prototype;
  dart.addTypeTests(virtual_machine.PopEnvironmentInstruction);
  virtual_machine.PopEnvironmentInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.PopEnvironmentInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.PopEnvironmentInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.PopEnvironmentInstruction, ['toString']);
  let const$6;
  let const$7;
  virtual_machine.ReturnInstruction = class ReturnInstruction extends core.Object {
    get length() {
      return this[length$1];
    }
    set length(value) {
      super.length = value;
    }
    execute(vm) {
      if (dart.notNull(vm.stackPointer) - dart.notNull(vm.framePointer) - 1 <= dart.notNull(this.length)) {
        (const$6 || (const$6 = dart.const(new virtual_machine.PopEnvironmentInstruction.new()))).execute(vm);
      } else {
        new virtual_machine.SlideInstruction.new(this.length, 1).execute(vm);
        (const$7 || (const$7 = dart.const(new virtual_machine.ApplyInstruction.new()))).execute(vm);
      }
    }
    toString() {
      return "return " + dart.str(this.length);
    }
  };
  (virtual_machine.ReturnInstruction.new = function(length) {
    this[length$1] = length;
  }).prototype = virtual_machine.ReturnInstruction.prototype;
  dart.addTypeTests(virtual_machine.ReturnInstruction);
  const length$1 = Symbol("ReturnInstruction.length");
  virtual_machine.ReturnInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.ReturnInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.ReturnInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.ReturnInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.ReturnInstruction.__proto__),
    length: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(virtual_machine.ReturnInstruction, ['toString']);
  virtual_machine.DummyInstruction = class DummyInstruction extends core.Object {
    get length() {
      return this[length$2];
    }
    set length(value) {
      super.length = value;
    }
    execute(vm) {
      for (let i = 0; i < dart.notNull(this.length); i++) {
        vm.push(vm.allocate(new virtual_machine.TaggedClosure.new("-1", -1, 1)));
      }
    }
    toString() {
      return "dummy " + dart.str(this.length);
    }
  };
  (virtual_machine.DummyInstruction.new = function(length) {
    this[length$2] = length;
  }).prototype = virtual_machine.DummyInstruction.prototype;
  dart.addTypeTests(virtual_machine.DummyInstruction);
  const length$2 = Symbol("DummyInstruction.length");
  virtual_machine.DummyInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.DummyInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.DummyInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.DummyInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.DummyInstruction.__proto__),
    length: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(virtual_machine.DummyInstruction, ['toString']);
  virtual_machine.RewriteInstruction = class RewriteInstruction extends core.Object {
    get difference() {
      return this[difference$];
    }
    set difference(value) {
      super.difference = value;
    }
    execute(vm) {
      let oldValueAddress = vm.stack[$_get](dart.notNull(vm.stackPointer) - dart.notNull(this.difference));
      let newValueAddress = vm.pop();
      vm.copyTaggedObject(newValueAddress, oldValueAddress);
    }
    toString() {
      return "rewrite " + dart.str(this.difference);
    }
  };
  (virtual_machine.RewriteInstruction.new = function(difference) {
    this[difference$] = difference;
  }).prototype = virtual_machine.RewriteInstruction.prototype;
  dart.addTypeTests(virtual_machine.RewriteInstruction);
  const difference$ = Symbol("RewriteInstruction.difference");
  virtual_machine.RewriteInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.RewriteInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.RewriteInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.setFieldSignature(virtual_machine.RewriteInstruction, () => ({
    __proto__: dart.getFields(virtual_machine.RewriteInstruction.__proto__),
    difference: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(virtual_machine.RewriteInstruction, ['toString']);
  let const$8;
  let const$9;
  virtual_machine.EvaluateInstruction = class EvaluateInstruction extends core.Object {
    execute(vm) {
      let obj = vm.dereferenceAs(virtual_machine.TaggedObject, vm.peek());
      if (virtual_machine.TaggedClosure.is(obj)) {
        (const$8 || (const$8 = dart.const(new virtual_machine.MarkProgramCounterInstruction.new()))).execute(vm);
        new virtual_machine.PushLocalInstruction.new(3).execute(vm);
        (const$9 || (const$9 = dart.const(new virtual_machine.Apply0Instruction.new()))).execute(vm);
      }
    }
    toString() {
      return "eval";
    }
  };
  (virtual_machine.EvaluateInstruction.new = function() {
  }).prototype = virtual_machine.EvaluateInstruction.prototype;
  dart.addTypeTests(virtual_machine.EvaluateInstruction);
  virtual_machine.EvaluateInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.EvaluateInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.EvaluateInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.EvaluateInstruction, ['toString']);
  let const$10;
  virtual_machine.UpdateInstruction = class UpdateInstruction extends core.Object {
    execute(vm) {
      (const$10 || (const$10 = dart.const(new virtual_machine.PopEnvironmentInstruction.new()))).execute(vm);
      new virtual_machine.RewriteInstruction.new(1).execute(vm);
    }
    toString() {
      return "update";
    }
  };
  (virtual_machine.UpdateInstruction.new = function() {
  }).prototype = virtual_machine.UpdateInstruction.prototype;
  dart.addTypeTests(virtual_machine.UpdateInstruction);
  virtual_machine.UpdateInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.UpdateInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.UpdateInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.UpdateInstruction, ['toString']);
  virtual_machine.CopyGlobalInstruction = class CopyGlobalInstruction extends core.Object {
    execute(vm) {
      return vm.push(vm.globalPointer);
    }
    toString() {
      return "copyglob";
    }
  };
  (virtual_machine.CopyGlobalInstruction.new = function() {
  }).prototype = virtual_machine.CopyGlobalInstruction.prototype;
  dart.addTypeTests(virtual_machine.CopyGlobalInstruction);
  virtual_machine.CopyGlobalInstruction[dart.implements] = () => [virtual_machine.Instruction];
  dart.setMethodSignature(virtual_machine.CopyGlobalInstruction, () => ({
    __proto__: dart.getMethods(virtual_machine.CopyGlobalInstruction.__proto__),
    execute: dart.fnType(dart.void, [virtual_machine.VM])
  }));
  dart.defineExtensionMethods(virtual_machine.CopyGlobalInstruction, ['toString']);
  dart.trackLibraries("packages/fvm/virtual_machine.ddc", {
    "package:fvm/virtual_machine.dart": virtual_machine
  }, '{"version":3,"sourceRoot":"","sources":["virtual_machine.dart","src/virtual_machine/heap.dart","src/virtual_machine/instructions.dart"],"names":[],"mappings":"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","file":"virtual_machine.ddc.js"}');
  // Exports:
  return {
    virtual_machine: virtual_machine
  };
});

//# sourceMappingURL=virtual_machine.ddc.js.map
