define(['dart_sdk', 'packages/angular_components/model/ui/icon', 'packages/angular_components/interfaces/has_disabled'], function(dart_sdk, icon, has_disabled) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__icon = icon.model__ui__icon;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const _root = Object.create(null);
  const mixins__button_wrapper = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const _buttonIcon = Symbol('_buttonIcon');
  mixins__button_wrapper.MaterialButtonWrapper = class MaterialButtonWrapper extends core.Object {
    get buttonText() {
      return this[buttonText];
    }
    set buttonText(value) {
      this[buttonText] = value;
    }
    get buttonAriaLabel() {
      return this[buttonAriaLabel];
    }
    set buttonAriaLabel(value) {
      this[buttonAriaLabel] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      this[icon$] = value;
    }
    get iconName() {
      return this[iconName];
    }
    set iconName(value) {
      this[iconName] = value;
    }
    get raised() {
      return this[raised];
    }
    set raised(value) {
      this[raised] = value;
    }
    get buttonIcon() {
      if (this.icon != null) return this.icon;
      if (this[_buttonIcon] == null && this.iconName != null && this.iconName[$isNotEmpty]) {
        this[_buttonIcon] = new model__ui__icon.Icon.new(this.iconName);
      }
      return this[_buttonIcon];
    }
  };
  (mixins__button_wrapper.MaterialButtonWrapper.new = function() {
    this[buttonText] = null;
    this[buttonAriaLabel] = null;
    this[disabled] = false;
    this[icon$] = null;
    this[iconName] = null;
    this[raised] = false;
    this[_buttonIcon] = null;
  }).prototype = mixins__button_wrapper.MaterialButtonWrapper.prototype;
  dart.addTypeTests(mixins__button_wrapper.MaterialButtonWrapper);
  const buttonText = Symbol("MaterialButtonWrapper.buttonText");
  const buttonAriaLabel = Symbol("MaterialButtonWrapper.buttonAriaLabel");
  const disabled = Symbol("MaterialButtonWrapper.disabled");
  const icon$ = Symbol("MaterialButtonWrapper.icon");
  const iconName = Symbol("MaterialButtonWrapper.iconName");
  const raised = Symbol("MaterialButtonWrapper.raised");
  mixins__button_wrapper.MaterialButtonWrapper[dart.implements] = () => [interfaces__has_disabled.HasDisabled];
  dart.setGetterSignature(mixins__button_wrapper.MaterialButtonWrapper, () => ({
    __proto__: dart.getGetters(mixins__button_wrapper.MaterialButtonWrapper.__proto__),
    buttonIcon: model__ui__icon.Icon
  }));
  dart.setFieldSignature(mixins__button_wrapper.MaterialButtonWrapper, () => ({
    __proto__: dart.getFields(mixins__button_wrapper.MaterialButtonWrapper.__proto__),
    buttonText: dart.fieldType(core.String),
    buttonAriaLabel: dart.fieldType(core.String),
    disabled: dart.fieldType(core.bool),
    icon: dart.fieldType(model__ui__icon.Icon),
    iconName: dart.fieldType(core.String),
    raised: dart.fieldType(core.bool),
    [_buttonIcon]: dart.fieldType(model__ui__icon.Icon)
  }));
  dart.trackLibraries("packages/angular_components/mixins/button_wrapper.ddc", {
    "package:angular_components/mixins/button_wrapper.dart": mixins__button_wrapper
  }, '{"version":3,"sourceRoot":"","sources":["button_wrapper.dart"],"names":[],"mappings":";;;;;;;;;;;;IAaS;;;;;;IAIA;;;;;;IAIF;;;;;;IAIA;;;;;;IAME;;;;;;IAIF;;;;;;;AAIH,UAAI,SAAI,IAAI,MAAM,MAAO,UAAI;AAC7B,UAAI,iBAAW,IAAI,QAAS,aAAQ,IAAI,QAAQ,aAAQ,aAAW,EAAG;AACpE,yBAAW,OAAG,wBAAI,CAAC,aAAQ;;AAE7B,YAAO,kBAAW;IACpB;;;IA/BO,gBAAU;IAIV,qBAAe;IAIjB,cAAQ,GAAG;IAIX,WAAI;IAMF,cAAQ;IAIV,YAAM,GAAG;IAET,iBAAW;EAQlB","file":"button_wrapper.ddc.js"}');
  // Exports:
  return {
    mixins__button_wrapper: mixins__button_wrapper
  };
});

//# sourceMappingURL=button_wrapper.ddc.js.map
