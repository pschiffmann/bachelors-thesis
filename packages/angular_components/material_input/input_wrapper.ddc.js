define(['dart_sdk', 'packages/angular_components/interfaces/has_disabled'], function(dart_sdk, has_disabled) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const _root = Object.create(null);
  const material_input__input_wrapper = Object.create(_root);
  const _label = Symbol('_label');
  const _ariaLabel = Symbol('_ariaLabel');
  const _inputText = Symbol('_inputText');
  material_input__input_wrapper.MaterialInputWrapper = class MaterialInputWrapper extends core.Object {
    get characterCounter() {
      return this[characterCounter];
    }
    set characterCounter(value) {
      this[characterCounter] = value;
    }
    get checkValid() {
      return this[checkValid];
    }
    set checkValid(value) {
      this[checkValid] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get displayBottomPanel() {
      return this[displayBottomPanel];
    }
    set displayBottomPanel(value) {
      this[displayBottomPanel] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get floatingLabel() {
      return this[floatingLabel];
    }
    set floatingLabel(value) {
      this[floatingLabel] = value;
    }
    get hintText() {
      return this[hintText];
    }
    set hintText(value) {
      this[hintText] = value;
    }
    get leadingText() {
      return this[leadingText];
    }
    set leadingText(value) {
      this[leadingText] = value;
    }
    get maxCount() {
      return this[maxCount];
    }
    set maxCount(value) {
      this[maxCount] = value;
    }
    get showHintOnlyOnFocus() {
      return this[showHintOnlyOnFocus];
    }
    set showHintOnlyOnFocus(value) {
      this[showHintOnlyOnFocus] = value;
    }
    get required() {
      return this[required];
    }
    set required(value) {
      this[required] = value;
    }
    get requiredErrorMsg() {
      return this[requiredErrorMsg];
    }
    set requiredErrorMsg(value) {
      this[requiredErrorMsg] = value;
    }
    get rightAlign() {
      return this[rightAlign];
    }
    set rightAlign(value) {
      this[rightAlign] = value;
    }
    get trailingText() {
      return this[trailingText];
    }
    set trailingText(value) {
      this[trailingText] = value;
    }
    get leadingGlyph() {
      return this[leadingGlyph];
    }
    set leadingGlyph(value) {
      this[leadingGlyph] = value;
    }
    get trailingGlyph() {
      return this[trailingGlyph];
    }
    set trailingGlyph(value) {
      this[trailingGlyph] = value;
    }
    get label() {
      return this[_label];
    }
    set label(value) {
      this[_label] = value;
    }
    get ariaLabel() {
      let l = this[_ariaLabel];
      return l != null ? l : this.label;
    }
    set ariaLabel(value) {
      this[_ariaLabel] = value;
    }
    get inputText() {
      return this[_inputText];
    }
    set inputText(value) {
      this[_inputText] = value;
    }
  };
  (material_input__input_wrapper.MaterialInputWrapper.new = function() {
    this[characterCounter] = null;
    this[checkValid] = null;
    this[disabled] = false;
    this[displayBottomPanel] = true;
    this[error] = null;
    this[floatingLabel] = false;
    this[hintText] = null;
    this[leadingText] = null;
    this[maxCount] = null;
    this[showHintOnlyOnFocus] = false;
    this[required] = false;
    this[requiredErrorMsg] = null;
    this[rightAlign] = false;
    this[trailingText] = null;
    this[leadingGlyph] = null;
    this[trailingGlyph] = null;
    this[_label] = null;
    this[_ariaLabel] = null;
    this[_inputText] = null;
  }).prototype = material_input__input_wrapper.MaterialInputWrapper.prototype;
  dart.addTypeTests(material_input__input_wrapper.MaterialInputWrapper);
  const characterCounter = Symbol("MaterialInputWrapper.characterCounter");
  const checkValid = Symbol("MaterialInputWrapper.checkValid");
  const disabled = Symbol("MaterialInputWrapper.disabled");
  const displayBottomPanel = Symbol("MaterialInputWrapper.displayBottomPanel");
  const error = Symbol("MaterialInputWrapper.error");
  const floatingLabel = Symbol("MaterialInputWrapper.floatingLabel");
  const hintText = Symbol("MaterialInputWrapper.hintText");
  const leadingText = Symbol("MaterialInputWrapper.leadingText");
  const maxCount = Symbol("MaterialInputWrapper.maxCount");
  const showHintOnlyOnFocus = Symbol("MaterialInputWrapper.showHintOnlyOnFocus");
  const required = Symbol("MaterialInputWrapper.required");
  const requiredErrorMsg = Symbol("MaterialInputWrapper.requiredErrorMsg");
  const rightAlign = Symbol("MaterialInputWrapper.rightAlign");
  const trailingText = Symbol("MaterialInputWrapper.trailingText");
  const leadingGlyph = Symbol("MaterialInputWrapper.leadingGlyph");
  const trailingGlyph = Symbol("MaterialInputWrapper.trailingGlyph");
  material_input__input_wrapper.MaterialInputWrapper[dart.implements] = () => [interfaces__has_disabled.HasDisabled];
  dart.setGetterSignature(material_input__input_wrapper.MaterialInputWrapper, () => ({
    __proto__: dart.getGetters(material_input__input_wrapper.MaterialInputWrapper.__proto__),
    label: core.String,
    ariaLabel: core.String,
    inputText: core.String
  }));
  dart.setSetterSignature(material_input__input_wrapper.MaterialInputWrapper, () => ({
    __proto__: dart.getSetters(material_input__input_wrapper.MaterialInputWrapper.__proto__),
    label: core.String,
    ariaLabel: core.String,
    inputText: core.String
  }));
  dart.setFieldSignature(material_input__input_wrapper.MaterialInputWrapper, () => ({
    __proto__: dart.getFields(material_input__input_wrapper.MaterialInputWrapper.__proto__),
    characterCounter: dart.fieldType(core.Function),
    checkValid: dart.fieldType(core.Function),
    disabled: dart.fieldType(core.bool),
    displayBottomPanel: dart.fieldType(core.bool),
    error: dart.fieldType(core.String),
    floatingLabel: dart.fieldType(core.bool),
    hintText: dart.fieldType(core.String),
    leadingText: dart.fieldType(core.String),
    maxCount: dart.fieldType(core.int),
    showHintOnlyOnFocus: dart.fieldType(core.bool),
    required: dart.fieldType(core.bool),
    requiredErrorMsg: dart.fieldType(core.String),
    rightAlign: dart.fieldType(core.bool),
    trailingText: dart.fieldType(core.String),
    leadingGlyph: dart.fieldType(core.String),
    trailingGlyph: dart.fieldType(core.String),
    [_label]: dart.fieldType(core.String),
    [_ariaLabel]: dart.fieldType(core.String),
    [_inputText]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/material_input/input_wrapper.ddc", {
    "package:angular_components/material_input/input_wrapper.dart": material_input__input_wrapper
  }, '{"version":3,"sourceRoot":"","sources":["input_wrapper.dart"],"names":[],"mappings":";;;;;;;;;;;;IAmBW;;;;;;IAIA;;;;;;IAIJ;;;;;;IAIA;;;;;;IAME;;;;;;IAOF;;;;;;IAME;;;;;;IAKA;;;;;;IAMH;;;;;;IAOC;;;;;;IAOA;;;;;;IAIE;;;;;;IAMF;;;;;;IAKE;;;;;;IAIA;;;;;;IAIA;;;;;;;YAGa,aAAM;;cAIhB,KAAY;AACpB,kBAAM,GAAG,KAAK;IAChB;;cAGwB,gBAAU;6BAAI,UAAK;;kBAM7B,KAAY;AACxB,sBAAU,GAAG,KAAK;IACpB;;YAGwB,iBAAU;;kBAMpB,KAAY;AACxB,sBAAU,GAAG,KAAK;IACpB;;;IA9GS,sBAAgB;IAIhB,gBAAU;IAId,cAAQ,GAAG;IAIX,wBAAkB,GAAG;IAMnB,WAAK;IAOP,mBAAa,GAAG;IAMd,cAAQ;IAKR,iBAAW;IAMd,cAAQ;IAOP,yBAAmB,GAAG;IAOtB,cAAQ,GAAG;IAIT,sBAAgB;IAMlB,gBAAU,GAAG;IAKX,kBAAY;IAIZ,kBAAY;IAIZ,mBAAa;IAEb,YAAM;IASN,gBAAU;IAWV,gBAAU;EAUnB","file":"input_wrapper.ddc.js"}');
  // Exports:
  return {
    material_input__input_wrapper: material_input__input_wrapper
  };
});

//# sourceMappingURL=input_wrapper.ddc.js.map
