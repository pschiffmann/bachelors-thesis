define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/mixins/button_wrapper', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/button_decorator/button_decorator'], function(dart_sdk, id_generator, focusable_mixin, button_wrapper, change_detection, button_decorator) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const mixins__focusable_mixin = focusable_mixin.mixins__focusable_mixin;
  const mixins__button_wrapper = button_wrapper.mixins__button_wrapper;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const _root = Object.create(null);
  const material_select__dropdown_button = Object.create(_root);
  let StreamControllerOfFocusEvent = () => (StreamControllerOfFocusEvent = dart.constFn(async.StreamController$(html.FocusEvent)))();
  const _role = Symbol('_role');
  const _ariaRole = Symbol('_ariaRole');
  const _button = Symbol('_button');
  const _ariaLabelledBy = Symbol('_ariaLabelledBy');
  const _showButtonBorder = Symbol('_showButtonBorder');
  const _blur = Symbol('_blur');
  const Object_FocusableMixin$ = class Object_FocusableMixin extends core.Object {};
  (Object_FocusableMixin$.new = function() {
    mixins__focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$.prototype;
  dart.mixinMembers(Object_FocusableMixin$, mixins__focusable_mixin.FocusableMixin);
  const Object_MaterialButtonWrapper$ = class Object_MaterialButtonWrapper extends Object_FocusableMixin$ {};
  (Object_MaterialButtonWrapper$.new = function() {
    mixins__button_wrapper.MaterialButtonWrapper.new.call(this);
    Object_MaterialButtonWrapper$.__proto__.new.call(this);
  }).prototype = Object_MaterialButtonWrapper$.prototype;
  dart.mixinMembers(Object_MaterialButtonWrapper$, mixins__button_wrapper.MaterialButtonWrapper);
  material_select__dropdown_button.DropdownButtonComponent = class DropdownButtonComponent extends Object_MaterialButtonWrapper$ {
    set button(b) {
      this[_button] = b;
      this.focusable = b;
    }
    get role() {
      return this[_role];
    }
    set role(value) {
      if (!(this.ariaRole == null)) dart.assertFailed("Aria role can only be set before initialization.");
      this[_role] = value;
    }
    get ariaRole() {
      return this[_ariaRole];
    }
    ngOnInit() {
      let l = this.role;
      this[_ariaRole] = l != null ? l : "button";
    }
    get popupType() {
      return this[popupType];
    }
    set popupType(value) {
      this[popupType] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get ariaOwns() {
      return this[ariaOwns];
    }
    set ariaOwns(value) {
      this[ariaOwns] = value;
    }
    get ariaExpanded() {
      return this[ariaExpanded];
    }
    set ariaExpanded(value) {
      this[ariaExpanded] = value;
    }
    get ariaActiveDescendant() {
      return this[ariaActiveDescendant];
    }
    set ariaActiveDescendant(value) {
      this[ariaActiveDescendant] = value;
    }
    get uuid() {
      return this[uuid];
    }
    set uuid(value) {
      super.uuid = value;
    }
    set ariaLabelledBy(labelledBy) {
      return this[_ariaLabelledBy] = labelledBy;
    }
    get ariaLabelledBy() {
      return this[_ariaLabelledBy] == null ? null : dart.str(this[_ariaLabelledBy]) + " " + dart.str(this.uuid);
    }
    get invalid() {
      return this.error != null;
    }
    set showButtonBorder(value) {
      this[_showButtonBorder] = value;
    }
    get showButtonBorder() {
      if (this[_showButtonBorder] != null) return this[_showButtonBorder];
      return this.buttonText != null;
    }
    get onBlur() {
      return this[_blur].stream;
    }
    handleBlur(event) {
      this[_blur].add(event);
    }
    get trigger() {
      return this[_button].trigger;
    }
  };
  (material_select__dropdown_button.DropdownButtonComponent.new = function() {
    this[_role] = null;
    this[_ariaRole] = null;
    this[_button] = null;
    this[popupType] = "dialog";
    this[error] = null;
    this[ariaOwns] = null;
    this[ariaExpanded] = null;
    this[ariaActiveDescendant] = null;
    this[uuid] = new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID().nextId();
    this[_ariaLabelledBy] = null;
    this[_showButtonBorder] = null;
    this[_blur] = StreamControllerOfFocusEvent().new({sync: true});
    material_select__dropdown_button.DropdownButtonComponent.__proto__.new.call(this);
    this.iconName = "arrow_drop_down";
  }).prototype = material_select__dropdown_button.DropdownButtonComponent.prototype;
  dart.addTypeTests(material_select__dropdown_button.DropdownButtonComponent);
  const popupType = Symbol("DropdownButtonComponent.popupType");
  const error = Symbol("DropdownButtonComponent.error");
  const ariaOwns = Symbol("DropdownButtonComponent.ariaOwns");
  const ariaExpanded = Symbol("DropdownButtonComponent.ariaExpanded");
  const ariaActiveDescendant = Symbol("DropdownButtonComponent.ariaActiveDescendant");
  const uuid = Symbol("DropdownButtonComponent.uuid");
  material_select__dropdown_button.DropdownButtonComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(material_select__dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button.DropdownButtonComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    handleBlur: dart.fnType(dart.void, [html.FocusEvent])
  }));
  dart.setGetterSignature(material_select__dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getGetters(material_select__dropdown_button.DropdownButtonComponent.__proto__),
    role: core.String,
    ariaRole: core.String,
    ariaLabelledBy: core.String,
    invalid: core.bool,
    showButtonBorder: core.bool,
    onBlur: async.Stream$(html.FocusEvent),
    trigger: async.Stream$(html.UIEvent)
  }));
  dart.setSetterSignature(material_select__dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getSetters(material_select__dropdown_button.DropdownButtonComponent.__proto__),
    button: button_decorator__button_decorator.ButtonDirective,
    role: core.String,
    ariaLabelledBy: core.String,
    showButtonBorder: core.bool
  }));
  dart.setFieldSignature(material_select__dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getFields(material_select__dropdown_button.DropdownButtonComponent.__proto__),
    [_role]: dart.fieldType(core.String),
    [_ariaRole]: dart.fieldType(core.String),
    [_button]: dart.fieldType(button_decorator__button_decorator.ButtonDirective),
    popupType: dart.fieldType(core.String),
    error: dart.fieldType(core.String),
    ariaOwns: dart.fieldType(core.String),
    ariaExpanded: dart.fieldType(core.bool),
    ariaActiveDescendant: dart.fieldType(core.String),
    uuid: dart.finalFieldType(core.String),
    [_ariaLabelledBy]: dart.fieldType(core.String),
    [_showButtonBorder]: dart.fieldType(core.bool),
    [_blur]: dart.finalFieldType(StreamControllerOfFocusEvent())
  }));
  dart.trackLibraries("packages/angular_components/material_select/dropdown_button.ddc", {
    "package:angular_components/material_select/dropdown_button.dart": material_select__dropdown_button
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;eAwDa,CAAiB;AAC1B,mBAAO,GAAG,CAAC;AACX,oBAAS,GAAG,CAAC;IACf;;YAEmB,YAAK;;aAIf,KAAY;AACnB,YACI,aAAQ,IAAI,yBAAM;AACtB,iBAAK,GAAG,KAAK;IACf;;YAEuB,gBAAS;;;AAI9B,cAAY,SAAI;qBAAP,mBAAW;IACtB;IAMO;;;;;;IAMA;;;;;;IAIA;;;;;;IAIF;;;;;;IAIE;;;;;;IAGM;;;;;;uBASM,UAAiB;YAAK,sBAAe,GAAG,UAAU;;;YAMjE,sBAAe,IAAI,OAAO,OAAO,SAAE,qBAAe,mBAAE,SAAI;IAAC;;YAEzC,WAAK,IAAI;IAAI;yBAIZ,KAAU;AAC7B,6BAAiB,GAAG,KAAK;IAC3B;;AAGE,UAAI,uBAAiB,IAAI,MAAM,MAAO,wBAAiB;AAGvD,YAAO,gBAAU,IAAI;IACvB;;YAMiC,YAAK,OAAO;;eAG7B,KAAgB;AAC9B,iBAAK,IAAI,CAAC,KAAK;IACjB;;YAI+B,cAAO,QAAQ;;;;IAtGvC,WAAK;IACL,eAAS;IAMA,aAAO;IA6BhB,eAAS,GAAG;IAMZ,WAAK;IAIL,cAAQ;IAIV,kBAAY;IAIV,0BAAoB;IAGd,UAAI,OAAG,gEAA8B,SAAS;IAEpD,qBAAe;IA8BjB,uBAAiB;IAKhB,WAAK,GAAG,kCAA4B,QAAO;;AA1F/C,iBAAQ,GAAG;EACb","file":"dropdown_button.ddc.js"}');
  // Exports:
  return {
    material_select__dropdown_button: material_select__dropdown_button
  };
});

//# sourceMappingURL=dropdown_button.ddc.js.map
