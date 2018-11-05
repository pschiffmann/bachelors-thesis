define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_forms/src/directives', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_input/base_material_input'], function(dart_sdk, disposer, directives, change_detection, base_material_input) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const _root = Object.create(null);
  const material_input__material_input_default_value_accessor = Object.create(_root);
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FocusEventToNull = () => (FocusEventToNull = dart.constFn(dart.fnType(core.Null, [html.FocusEvent])))();
  const _cd = Symbol('_cd');
  material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor = class BaseMaterialInputValueAccessor extends core.Object {
    get disposer() {
      return this[disposer$];
    }
    set disposer(value) {
      super.disposer = value;
    }
    get input() {
      return this[input$];
    }
    set input(value) {
      super.input = value;
    }
    writeValue(newValue) {
      this.input.inputText = core.String._check(newValue);
    }
    registerOnTouched(callback) {
      let sub = null;
      sub = this.input.onBlur.listen(dart.fn(_ => {
        dart.dsend(sub, 'cancel', []);
        callback();
      }, FocusEventToNull()));
      this.disposer.addStreamSubscription(dart.dynamic, async.StreamSubscription._check(sub));
    }
    ngOnDestroy() {
      this.disposer.dispose();
    }
    onDisabledChanged(isDisabled) {
      this.input.disabled = isDisabled;
    }
  };
  (material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor.new = function(input, cd) {
    this[disposer$] = new utils__disposer__disposer.Disposer.oneShot();
    this[input$] = input;
    this[_cd] = cd;
    this[_cd] == null ? null : this[_cd].valueAccessor = this;
    this.disposer.addFunction(dart.fn(() => {
      this[_cd] == null ? null : this[_cd].valueAccessor = null;
    }, VoidToNull()));
  }).prototype = material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor.prototype;
  dart.addTypeTests(material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor);
  const disposer$ = Symbol("BaseMaterialInputValueAccessor.disposer");
  const input$ = Symbol("BaseMaterialInputValueAccessor.input");
  material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor, () => ({
    __proto__: dart.getMethods(material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor.__proto__),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnTouched: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])]),
    ngOnDestroy: dart.fnType(dart.void, []),
    onDisabledChanged: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor, () => ({
    __proto__: dart.getFields(material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor.__proto__),
    disposer: dart.finalFieldType(utils__disposer__disposer.Disposer),
    input: dart.finalFieldType(material_input__base_material_input.BaseMaterialInput),
    [_cd]: dart.finalFieldType(src__directives__ng_control.NgControl)
  }));
  material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor = class MaterialInputDefaultValueAccessor extends material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor {
    registerOnChange(callback) {
      this.disposer.addStreamSubscription(core.String, this.input.onKeypress.listen(dart.fn(value => {
        callback(value);
      }, StringToNull())));
    }
  };
  (material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new = function(input, control) {
    material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.__proto__.new.call(this, input, control);
  }).prototype = material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.prototype;
  dart.addTypeTests(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor);
  material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor, () => ({
    __proto__: dart.getMethods(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})])
  }));
  material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor = class MaterialInputBlurValueAccessor extends material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor {
    registerOnChange(callback) {
      this.disposer.addStreamSubscription(html.FocusEvent, this.input.onBlur.listen(dart.fn(_ => {
        if (this.input != null) callback(this.input.inputText);
      }, FocusEventToNull())));
    }
  };
  (material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor.new = function(input, control) {
    material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor.__proto__.new.call(this, input, control);
  }).prototype = material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor.prototype;
  dart.addTypeTests(material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor);
  material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor, () => ({
    __proto__: dart.getMethods(material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})])
  }));
  material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor = class MaterialInputChangeValueAccessor extends material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor {
    registerOnChange(callback) {
      this.disposer.addStreamSubscription(core.String, this.input.onChange.listen(dart.fn(_ => {
        if (this.input != null) callback(this.input.inputText);
      }, StringToNull())));
    }
  };
  (material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor.new = function(input, control) {
    material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor.__proto__.new.call(this, input, control);
  }).prototype = material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor.prototype;
  dart.addTypeTests(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor);
  material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor, () => ({
    __proto__: dart.getMethods(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})])
  }));
  dart.trackLibraries("packages/angular_components/material_input/material_input_default_value_accessor.ddc", {
    "package:angular_components/material_input/material_input_default_value_accessor.dart": material_input__material_input_default_value_accessor
  }, '{"version":3,"sourceRoot":"","sources":["material_input_default_value_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAqFQ;;;;;;IAEkB;;;;;;eAeR,QAAQ;AACtB,gBAAK,UAAU,sBAAG,QAAQ;IAC5B;sBAGuB,QAAQ;AAC7B,UAAI;AACJ,SAAG,GAAG,UAAK,OAAO,OAAO,CAAC,QAAC,CAAC;AAC1B,sBAAG;AACH,gBAAQ;;AAEV,mBAAQ,sBAAsB,+CAAC,GAAG;IACpC;;AAIE,mBAAQ,QAAQ;IAClB;sBAGuB,UAAe;AACpC,gBAAK,SAAS,GAAG,UAAU;IAC7B;;uGAlC+B,KAAU;IALnC,eAAQ,OAAG,0CAAgB;IAKG,YAAK,GAAL,KAAK;IAA2B,SAAG;AAGrE,aAAG,kBAAH,SAAG,cAAe,GAAG;AACrB,iBAAQ,YAAY,CAAC;AAGnB,eAAG,kBAAH,SAAG,cAAe,GAAG;;EAEzB;;;;;;;;;;;;;;;;;;;qBApEsB,QAAQ;AAC5B,mBAAQ,sBAAsB,cAAC,UAAK,WAAW,OAAO,CAAC,QAAC,KAAK;AAC3D,gBAAQ,CAAC,KAAK;;IAElB;;0GARI,KAAuB,EAAE,OAAqC;AAC5D,qHAAM,KAAK,EAAE,OAAO;EAAC;;;;;;;;qBAwBL,QAAQ;AAC5B,mBAAQ,sBAAsB,kBAAC,UAAK,OAAO,OAAO,CAAC,QAAC,CAAC;AACnD,YAAI,UAAK,IAAI,MAAM,QAAQ,CAAC,UAAK,UAAU;;IAE/C;;uGARI,KAAuB,EAAE,OAAqC;AAC5D,kHAAM,KAAK,EAAE,OAAO;EAAC;;;;;;;;qBAwBL,QAAQ;AAC5B,mBAAQ,sBAAsB,cAAC,UAAK,SAAS,OAAO,CAAC,QAAC,CAAC;AACrD,YAAI,UAAK,IAAI,MAAM,QAAQ,CAAC,UAAK,UAAU;;IAE/C;;yGARI,KAAuB,EAAE,OAAqC;AAC5D,oHAAM,KAAK,EAAE,OAAO;EAAC","file":"material_input_default_value_accessor.ddc.js"}');
  // Exports:
  return {
    material_input__material_input_default_value_accessor: material_input__material_input_default_value_accessor
  };
});

//# sourceMappingURL=material_input_default_value_accessor.ddc.js.map
