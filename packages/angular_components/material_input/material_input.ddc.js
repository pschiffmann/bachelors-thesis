define(['dart_sdk', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/material_input_multiline', 'packages/angular_forms/src/directives', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/utils/angular/properties/properties', 'packages/quiver/strings', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, material_input_default_value_accessor, material_input_multiline, directives, id_generator, properties, strings, base_material_input, focus_interface, reference, change_detection, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_input__material_input_multiline = material_input_multiline.material_input__material_input_multiline;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const strings$ = strings.strings;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const _root = Object.create(null);
  const material_input__material_input = Object.create(_root);
  const $contains = dartx.contains;
  dart.defineLazy(material_input__material_input, {
    /*material_input__material_input.materialInputDirectives*/get materialInputDirectives() {
      return dart.constList([dart.wrapType(material_input__material_input.MaterialInputComponent), dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor), dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor), dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor), dart.wrapType(material_input__material_input_multiline.MaterialMultilineInputComponent), dart.wrapType(src__directives__ng_model.NgModel)], core.Type);
    },
    /*material_input__material_input.materialInputErrorKey*/get materialInputErrorKey() {
      return "material-input-error";
    }
  });
  const _changeDetector = Symbol('_changeDetector');
  const _leadingText = Symbol('_leadingText');
  const _trailingText = Symbol('_trailingText');
  const _rightAlign = Symbol('_rightAlign');
  let const$;
  material_input__material_input.MaterialInputComponent = class MaterialInputComponent extends material_input__base_material_input.BaseMaterialInput {
    set focusable(value) {
      super.focusable = value;
    }
    get inputEl() {
      return this[inputEl];
    }
    set inputEl(value) {
      this[inputEl] = value;
    }
    get popupSourceEl() {
      return this[popupSourceEl];
    }
    set popupSourceEl(value) {
      this[popupSourceEl] = value;
    }
    get elementRef() {
      return this.popupSourceEl;
    }
    get inputRef() {
      return this.inputEl;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get multiple() {
      return this[multiple$];
    }
    set multiple(value) {
      this[multiple$] = value;
    }
    get inputRole() {
      return this[inputRole$];
    }
    set inputRole(value) {
      super.inputRole = value;
    }
    get labelId() {
      return this[labelId];
    }
    set labelId(value) {
      super.labelId = value;
    }
    focus() {
      return super.focus();
    }
    get hasLeadingText() {
      return strings$.isNotEmpty(this.leadingText);
    }
    get leadingText() {
      return this[_leadingText];
    }
    set leadingText(value) {
      this[_leadingText] = value;
      this[_changeDetector].markForCheck();
    }
    get leadingGlyph() {
      return this[leadingGlyph];
    }
    set leadingGlyph(value) {
      this[leadingGlyph] = value;
    }
    get hasLeadingGlyph() {
      return strings$.isNotEmpty(this.leadingGlyph);
    }
    get trailingText() {
      return this[_trailingText];
    }
    get hasTrailingText() {
      return strings$.isNotEmpty(this.trailingText);
    }
    set trailingText(value) {
      this[_trailingText] = value;
      this[_changeDetector].markForCheck();
    }
    get trailingGlyph() {
      return this[trailingGlyph];
    }
    set trailingGlyph(value) {
      this[trailingGlyph] = value;
    }
    get hasTrailingGlyph() {
      return strings$.isNotEmpty(this.trailingGlyph);
    }
    get trailingGlyphAriaLabel() {
      return this[trailingGlyphAriaLabel];
    }
    set trailingGlyphAriaLabel(value) {
      this[trailingGlyphAriaLabel] = value;
    }
    get leadingGlyphAriaLabel() {
      return this[leadingGlyphAriaLabel];
    }
    set leadingGlyphAriaLabel(value) {
      this[leadingGlyphAriaLabel] = value;
    }
    get rightAlign() {
      return this[_rightAlign];
    }
    set rightAlign(value) {
      this[_rightAlign] = value;
      this[_changeDetector].markForCheck();
    }
    get inputAriaOwns() {
      return this[inputAriaOwns];
    }
    set inputAriaOwns(value) {
      this[inputAriaOwns] = value;
    }
    get inputAriaActivedescendent() {
      return this[inputAriaActivedescendent];
    }
    set inputAriaActivedescendent(value) {
      this[inputAriaActivedescendent] = value;
    }
    get inputAriaHasPopup() {
      return this[inputAriaHasPopup];
    }
    set inputAriaHasPopup(value) {
      this[inputAriaHasPopup] = value;
    }
    get inputAriaExpanded() {
      return this[inputAriaExpanded];
    }
    set inputAriaExpanded(value) {
      this[inputAriaExpanded] = value;
    }
    get inputAriaAutocomplete() {
      return this[inputAriaAutocomplete];
    }
    set inputAriaAutocomplete(value) {
      this[inputAriaAutocomplete] = value;
    }
    get numeric() {
      return this.type === "number";
    }
    get labelVisible() {
      return !(dart.test(this.numeric) && dart.test(this.invalid)) && dart.test(super.labelVisible);
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this.inputEl = null;
      this.popupSourceEl = null;
    }
  };
  (material_input__material_input.MaterialInputComponent.new = function(type, multiple, inputRole, cd, changeDetector, validator) {
    this[inputEl] = null;
    this[popupSourceEl] = null;
    this[type$] = null;
    this[multiple$] = false;
    this[labelId] = new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID().nextId();
    this[_leadingText] = null;
    this[leadingGlyph] = null;
    this[_trailingText] = null;
    this[trailingGlyph] = null;
    this[trailingGlyphAriaLabel] = null;
    this[leadingGlyphAriaLabel] = null;
    this[_rightAlign] = false;
    this[inputAriaOwns] = null;
    this[inputAriaActivedescendent] = null;
    this[inputAriaHasPopup] = null;
    this[inputAriaExpanded] = null;
    this[inputAriaAutocomplete] = null;
    this[inputRole$] = inputRole;
    this[_changeDetector] = changeDetector;
    material_input__material_input.MaterialInputComponent.__proto__.new.call(this, cd, changeDetector, validator);
    if (type == null) {
      this.type = "text";
    } else if (dart.test((const$ || (const$ = dart.constList(["number", "tel"], core.String)))[$contains](type))) {
      this.type = "text";
    } else {
      this.type = type;
    }
    this.multiple = utils__angular__properties__properties.attributeToBool(multiple);
  }).prototype = material_input__material_input.MaterialInputComponent.prototype;
  dart.addTypeTests(material_input__material_input.MaterialInputComponent);
  const inputEl = Symbol("MaterialInputComponent.inputEl");
  const popupSourceEl = Symbol("MaterialInputComponent.popupSourceEl");
  const type$ = Symbol("MaterialInputComponent.type");
  const multiple$ = Symbol("MaterialInputComponent.multiple");
  const inputRole$ = Symbol("MaterialInputComponent.inputRole");
  const labelId = Symbol("MaterialInputComponent.labelId");
  const leadingGlyph = Symbol("MaterialInputComponent.leadingGlyph");
  const trailingGlyph = Symbol("MaterialInputComponent.trailingGlyph");
  const trailingGlyphAriaLabel = Symbol("MaterialInputComponent.trailingGlyphAriaLabel");
  const leadingGlyphAriaLabel = Symbol("MaterialInputComponent.leadingGlyphAriaLabel");
  const inputAriaOwns = Symbol("MaterialInputComponent.inputAriaOwns");
  const inputAriaActivedescendent = Symbol("MaterialInputComponent.inputAriaActivedescendent");
  const inputAriaHasPopup = Symbol("MaterialInputComponent.inputAriaHasPopup");
  const inputAriaExpanded = Symbol("MaterialInputComponent.inputAriaExpanded");
  const inputAriaAutocomplete = Symbol("MaterialInputComponent.inputAriaAutocomplete");
  material_input__material_input.MaterialInputComponent[dart.implements] = () => [focus__focus_interface.Focusable, utils__angular__reference__reference.ReferenceDirective, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setGetterSignature(material_input__material_input.MaterialInputComponent, () => ({
    __proto__: dart.getGetters(material_input__material_input.MaterialInputComponent.__proto__),
    elementRef: src__core__linker__element_ref.ElementRef,
    hasLeadingText: core.bool,
    leadingText: core.String,
    hasLeadingGlyph: core.bool,
    trailingText: core.String,
    hasTrailingText: core.bool,
    hasTrailingGlyph: core.bool,
    rightAlign: core.bool,
    numeric: core.bool
  }));
  dart.setSetterSignature(material_input__material_input.MaterialInputComponent, () => ({
    __proto__: dart.getSetters(material_input__material_input.MaterialInputComponent.__proto__),
    leadingText: core.String,
    trailingText: core.String,
    rightAlign: core.bool
  }));
  dart.setFieldSignature(material_input__material_input.MaterialInputComponent, () => ({
    __proto__: dart.getFields(material_input__material_input.MaterialInputComponent.__proto__),
    [_changeDetector]: dart.fieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    inputEl: dart.fieldType(src__core__linker__element_ref.ElementRef),
    popupSourceEl: dart.fieldType(src__core__linker__element_ref.ElementRef),
    type: dart.fieldType(core.String),
    multiple: dart.fieldType(core.bool),
    inputRole: dart.finalFieldType(core.String),
    labelId: dart.finalFieldType(core.String),
    [_leadingText]: dart.fieldType(core.String),
    leadingGlyph: dart.fieldType(core.String),
    [_trailingText]: dart.fieldType(core.String),
    trailingGlyph: dart.fieldType(core.String),
    trailingGlyphAriaLabel: dart.fieldType(core.String),
    leadingGlyphAriaLabel: dart.fieldType(core.String),
    [_rightAlign]: dart.fieldType(core.bool),
    inputAriaOwns: dart.fieldType(core.String),
    inputAriaActivedescendent: dart.fieldType(core.String),
    inputAriaHasPopup: dart.fieldType(core.String),
    inputAriaExpanded: dart.fieldType(core.bool),
    inputAriaAutocomplete: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_input__material_input.MaterialInputComponent, {
    /*material_input__material_input.MaterialInputComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*material_input__material_input.MaterialInputComponent.hostTabIndex*/get hostTabIndex() {
      return -1;
    }
  });
  dart.trackLibraries("packages/angular_components/material_input/material_input.ddc", {
    "package:angular_components/material_input/material_input.dart": material_input__material_input
  }, '{"version":3,"sourceRoot":"","sources":["material_input.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MA0BM,sDAAuB;YAAG,iBAC9B,oEAAsB,EACtB,sGAAiC,EACjC,mGAA8B,EAC9B,qGAAgC,EAChC,uFAA+B,EAC/B,gDAAO;;MAII,oDAAqB;YAAG;;;;;;;;;kBAyDrB,KAAe;AAC3B,qBAAe,GAAG,KAAK;IACzB;IAGW;;;;;;IAGA;;;;;;;YAIkB,mBAAa;;;YASf,aAAO;;IAM3B;;;;;;IAKF;;;;;;IAGQ;;;;;;IACP;;;;;;;YAIU,YAAW;IAAE;;YAEF,oBAAU,CAAC,gBAAW;IAAC;;YACxB,mBAAY;;oBAMtB,KAAY;AAC1B,wBAAY,GAAG,KAAK;AAGpB,2BAAe,aAAa;IAC9B;IAKO;;;;;;;YACqB,oBAAU,CAAC,iBAAY;IAAC;;YAEzB,oBAAa;;;YAEZ,oBAAU,CAAC,iBAAY;IAAC;qBAKnC,KAAY;AAC3B,yBAAa,GAAG,KAAK;AAGrB,2BAAe,aAAa;IAC9B;IAKO;;;;;;;YACsB,oBAAU,CAAC,kBAAa;IAAC;IAI/C;;;;;;IAIA;;;;;;;YAEgB,kBAAW;;mBAOnB,KAAU;AACvB,uBAAW,GAAG,KAAK;AAGnB,2BAAe,aAAa;IAC9B;IAKO;;;;;;IAKA;;;;;;IAQA;;;;;;IAKF;;;;;;IAQE;;;;;;;YAwBa,UAAI,KAAI;IAAQ;;YAGW,aAApB,YAAO,eAAI,YAAO,gBAAK,kBAAkB;;;AAIlE,uBAAiB;AACjB,kBAAO,GAAG;AACV,wBAAa,GAAG;IAClB;;wEA/BI,IAA8B,EAC9B,QAAsC,EACtC,SAAiC,EACjC,EAAgC,kBAEhC,SAA2B;IAxIpB,aAAO;IAGP,mBAAa;IAmBjB,WAAI;IAKN,eAAQ,GAAG;IAIV,aAAO,GAAG,IAAI,gEAA8B,SAAS;IAQpD,kBAAY;IAeZ,kBAAY;IAIZ,mBAAa;IAgBb,mBAAa;IAKb,4BAAsB;IAItB,2BAAqB;IAGvB,iBAAW,GAAG;IAgBZ,mBAAa;IAKb,+BAAyB;IAQzB,uBAAiB;IAKnB,uBAAiB;IAQf,2BAAqB;IAKA,gBAAS,GAAT,SAAS;IAE5B,qBAAe;AAElB,mFAAM,EAAE,kBAAmB,SAAS;AACxC,QAAI,IAAI,IAAI,MAAM;AAChB,eAAS,GAAG;UACP,gBAAI,oCAAO,UAAU,iCAAe,CAAC,IAAI,IAAG;AAKjD,eAAS,GAAG;WACP;AACL,eAAS,GAAG,IAAI;;AAElB,iBAAa,GAAG,sDAAe,CAAC,QAAQ;EAC1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAvKa,+DAAS;YAAG;;MAGZ,kEAAY;YAAG,EAAC","file":"material_input.ddc.js"}');
  // Exports:
  return {
    material_input__material_input: material_input__material_input
  };
});

//# sourceMappingURL=material_input.ddc.js.map
