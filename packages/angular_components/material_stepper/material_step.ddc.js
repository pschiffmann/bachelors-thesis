define(['dart_sdk', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/laminate/portal/portal'], function(dart_sdk, async_action, properties, portal) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const laminate__portal__portal = portal.laminate__portal__portal;
  const _root = Object.create(null);
  const material_stepper__material_step = Object.create(_root);
  let AsyncActionOfbool = () => (AsyncActionOfbool = dart.constFn(src__model__action__async_action.AsyncAction$(core.bool)))();
  let StreamControllerOfAsyncActionOfbool = () => (StreamControllerOfAsyncActionOfbool = dart.constFn(async.StreamController$(AsyncActionOfbool())))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  const _continueController = Symbol('_continueController');
  const _cancelController = Symbol('_cancelController');
  const _jumpController = Symbol('_jumpController');
  const _optional = Symbol('_optional');
  const _hideButtons = Symbol('_hideButtons');
  const _cancelHidden = Symbol('_cancelHidden');
  const _complete = Symbol('_complete');
  const _canContinue = Symbol('_canContinue');
  const _active = Symbol('_active');
  const _requestStepAction = Symbol('_requestStepAction');
  material_stepper__material_step.StepDirective = class StepDirective extends laminate__portal__portal.TemplatePortal {
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get optional() {
      return this[_optional];
    }
    set optional(value) {
      this[_optional] = utils__angular__properties__properties.getBool(value);
    }
    get completeSummary() {
      return this[completeSummary];
    }
    set completeSummary(value) {
      this[completeSummary] = value;
    }
    get hideButtons() {
      return this[_hideButtons];
    }
    set hideButtons(value) {
      this[_hideButtons] = utils__angular__properties__properties.getBool(value);
    }
    get cancelHidden() {
      return this[_cancelHidden];
    }
    set cancelHidden(value) {
      this[_cancelHidden] = utils__angular__properties__properties.getBool(value);
    }
    get complete() {
      return this[_complete];
    }
    set complete(value) {
      this[_complete] = utils__angular__properties__properties.getBool(value);
    }
    get canContinue() {
      return this[_canContinue];
    }
    set canContinue(value) {
      this[_canContinue] = utils__angular__properties__properties.getBool(value);
    }
    get busy() {
      return this[busy];
    }
    set busy(value) {
      this[busy] = value;
    }
    get isLast() {
      return this[isLast];
    }
    set isLast(value) {
      this[isLast] = value;
    }
    get isSelectable() {
      return this[isSelectable];
    }
    set isSelectable(value) {
      this[isSelectable] = value;
    }
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    get summaryDirective() {
      return this[summaryDirective];
    }
    set summaryDirective(value) {
      this[summaryDirective] = value;
    }
    set active(value) {
      this[_active] = value;
    }
    get isOptional() {
      return this.optional;
    }
    get active() {
      return this[_active];
    }
    get isFirst() {
      return this.index === 0;
    }
    get isNotSelectable() {
      return !dart.test(this.isSelectable);
    }
    get continueStream() {
      return this[_continueController].stream;
    }
    get cancelStream() {
      return this[_cancelController].stream;
    }
    get jumpStream() {
      return this[_jumpController].stream;
    }
    requestStepContinue(action) {
      this[_requestStepAction](action, this[_continueController]);
    }
    requestStepCancel(action) {
      this[_requestStepAction](action, this[_cancelController]);
    }
    requestStepJump(action) {
      this[_requestStepAction](action, this[_jumpController]);
    }
    get shouldShowSummary() {
      return !dart.test(this.active) && this.completeSummary != null && dart.test(this.complete);
    }
    [_requestStepAction](action, controller) {
      this.busy = true;
      controller.add(action);
      action.onDone.then(core.Null, dart.fn(_ => {
        this.busy = false;
      }, boolToNull()));
    }
  };
  (material_stepper__material_step.StepDirective.new = function(ref, viewContainerRef) {
    this[_continueController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[_cancelController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[_jumpController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[name] = null;
    this[_optional] = false;
    this[completeSummary] = null;
    this[_hideButtons] = false;
    this[_cancelHidden] = false;
    this[_complete] = false;
    this[_canContinue] = true;
    this[_active] = false;
    this[busy] = false;
    this[isLast] = false;
    this[isSelectable] = false;
    this[index] = null;
    this[summaryDirective] = null;
    material_stepper__material_step.StepDirective.__proto__.new.call(this, ref, viewContainerRef);
  }).prototype = material_stepper__material_step.StepDirective.prototype;
  dart.addTypeTests(material_stepper__material_step.StepDirective);
  const name = Symbol("StepDirective.name");
  const completeSummary = Symbol("StepDirective.completeSummary");
  const busy = Symbol("StepDirective.busy");
  const isLast = Symbol("StepDirective.isLast");
  const isSelectable = Symbol("StepDirective.isSelectable");
  const index = Symbol("StepDirective.index");
  const summaryDirective = Symbol("StepDirective.summaryDirective");
  dart.setMethodSignature(material_stepper__material_step.StepDirective, () => ({
    __proto__: dart.getMethods(material_stepper__material_step.StepDirective.__proto__),
    requestStepContinue: dart.fnType(dart.void, [src__model__action__async_action.AsyncAction$(core.bool)]),
    requestStepCancel: dart.fnType(dart.void, [src__model__action__async_action.AsyncAction$(core.bool)]),
    requestStepJump: dart.fnType(dart.void, [src__model__action__async_action.AsyncAction$(core.bool)]),
    [_requestStepAction]: dart.fnType(dart.void, [src__model__action__async_action.AsyncAction$(core.bool), async.StreamController$(src__model__action__async_action.AsyncAction$(core.bool))])
  }));
  dart.setGetterSignature(material_stepper__material_step.StepDirective, () => ({
    __proto__: dart.getGetters(material_stepper__material_step.StepDirective.__proto__),
    optional: core.bool,
    hideButtons: core.bool,
    cancelHidden: core.bool,
    complete: core.bool,
    canContinue: core.bool,
    isOptional: core.bool,
    active: core.bool,
    isFirst: core.bool,
    isNotSelectable: core.bool,
    continueStream: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool)),
    cancelStream: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool)),
    jumpStream: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool)),
    shouldShowSummary: core.bool
  }));
  dart.setSetterSignature(material_stepper__material_step.StepDirective, () => ({
    __proto__: dart.getSetters(material_stepper__material_step.StepDirective.__proto__),
    optional: dart.dynamic,
    hideButtons: dart.dynamic,
    cancelHidden: dart.dynamic,
    complete: dart.dynamic,
    canContinue: dart.dynamic,
    active: core.bool
  }));
  dart.setFieldSignature(material_stepper__material_step.StepDirective, () => ({
    __proto__: dart.getFields(material_stepper__material_step.StepDirective.__proto__),
    [_continueController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    [_cancelController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    [_jumpController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    name: dart.fieldType(core.String),
    [_optional]: dart.fieldType(core.bool),
    completeSummary: dart.fieldType(core.String),
    [_hideButtons]: dart.fieldType(core.bool),
    [_cancelHidden]: dart.fieldType(core.bool),
    [_complete]: dart.fieldType(core.bool),
    [_canContinue]: dart.fieldType(core.bool),
    [_active]: dart.fieldType(core.bool),
    busy: dart.fieldType(core.bool),
    isLast: dart.fieldType(core.bool),
    isSelectable: dart.fieldType(core.bool),
    index: dart.fieldType(core.int),
    summaryDirective: dart.fieldType(material_stepper__material_step.SummaryDirective)
  }));
  material_stepper__material_step.SummaryDirective = class SummaryDirective extends laminate__portal__portal.TemplatePortal {
    set summary(step) {
      if (!(step != null)) dart.assertFailed("Should pass in a valid step for a summary.");
      step.summaryDirective = this;
    }
  };
  (material_stepper__material_step.SummaryDirective.new = function(ref, viewContainerRef) {
    material_stepper__material_step.SummaryDirective.__proto__.new.call(this, ref, viewContainerRef);
  }).prototype = material_stepper__material_step.SummaryDirective.prototype;
  dart.addTypeTests(material_stepper__material_step.SummaryDirective);
  dart.setSetterSignature(material_stepper__material_step.SummaryDirective, () => ({
    __proto__: dart.getSetters(material_stepper__material_step.SummaryDirective.__proto__),
    summary: material_stepper__material_step.StepDirective
  }));
  dart.trackLibraries("packages/angular_components/material_stepper/material_step.ddc", {
    "package:angular_components/material_stepper/material_step.dart": material_stepper__material_step
  }, '{"version":3,"sourceRoot":"","sources":["material_step.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IA4BS;;;;;;;YAIc,gBAAS;;iBAKjB,KAAK;AAChB,qBAAS,GAAG,8CAAO,CAAC,KAAK;IAC3B;IAKO;;;;;;;YAIiB,mBAAY;;oBAIpB,KAAK;AACnB,wBAAY,GAAG,8CAAO,CAAC,KAAK;IAC9B;;YAIyB,oBAAa;;qBAIrB,KAAK;AACpB,yBAAa,GAAG,8CAAO,CAAC,KAAK;IAC/B;;YAIqB,gBAAS;;iBAMjB,KAAK;AAChB,qBAAS,GAAG,8CAAO,CAAC,KAAK;IAC3B;;YAIwB,mBAAY;;oBAOpB,KAAK;AACnB,wBAAY,GAAG,8CAAO,CAAC,KAAK;IAC9B;IAIK;;;;;;IACA;;;;;;IACA;;;;;;IACD;;;;;;IAGa;;;;;;eAKN,KAAU;AACnB,mBAAO,GAAG,KAAK;IACjB;;YAEuB,cAAQ;;;YAEZ,cAAO;;;YAEN,WAAK,KAAI;IAAC;;YAEF,YAAC,iBAAY;;;YAMO,0BAAmB,OAAO;;;YAM5B,wBAAiB,OAAO;;;YAM1B,sBAAe,OAAO;;wBAEzC,MAAwB;AAC/C,8BAAkB,CAAC,MAAM,EAAE,yBAAmB;IAChD;sBAEuB,MAAwB;AAC7C,8BAAkB,CAAC,MAAM,EAAE,uBAAiB;IAC9C;oBAEqB,MAAwB;AAC3C,8BAAkB,CAAC,MAAM,EAAE,qBAAe;IAC5C;;YAEiE,YAAlC,WAAM,KAAI,oBAAe,IAAI,kBAAQ,aAAQ;;yBAEpD,MAAwB,EAC5C,UAA8C;AAChD,eAAI,GAAG;AACP,gBAAU,IAAI,CAAC,MAAM;AACrB,YAAM,OAAO,KAAK,YAAC,QAAC,CAAC;AACnB,iBAAI,GAAG;;IAEX;;gEAtDc,GAAe,EAAE,gBAAiC;IApF1D,yBAAmB,GACrB,+CAA6C,QAAO;IAElD,uBAAiB,GACnB,+CAA6C,QAAO;IAElD,qBAAe,GACjB,+CAA6C,QAAO;IAIjD,UAAI;IAEN,eAAS,GAAG;IAcV,qBAAe;IAEjB,kBAAY,GAAG;IAUf,mBAAa,GAAG;IAUhB,eAAS,GAAG;IAYZ,kBAAY,GAAG;IAcf,aAAO,GAAG;IACV,UAAI,GAAG;IACP,YAAM,GAAG;IACT,kBAAY,GAAG;IAChB,WAAK;IAGQ,sBAAgB;AAG3B,2EAAM,GAAG,EAAE,gBAAgB;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gBA0EtB,IAAkB;AAC5B,YAAO,IAAI,IAAI,yBAAM;AACrB,UAAI,iBAAiB,GAAG;IAC1B;;mEAEiB,GAAe,EAAE,gBAAiC;AAC7D,8EAAM,GAAG,EAAE,gBAAgB;EAAC","file":"material_step.ddc.js"}');
  // Exports:
  return {
    material_stepper__material_step: material_stepper__material_step
  };
});

//# sourceMappingURL=material_step.ddc.js.map
