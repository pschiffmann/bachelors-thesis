define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_forms/src/directives'], function(dart_sdk, events, change_detection, has_disabled, directives) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const _root = Object.create(null);
  const material_toggle__material_toggle = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $_set = dartx._set;
  const $attributes = dartx.attributes;
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let boolTodynamic = () => (boolTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.bool])))();
  let ControlValueAccessorOfbool = () => (ControlValueAccessorOfbool = dart.constFn(src__directives__control_value_accessor.ControlValueAccessor$(core.bool)))();
  const _changeDetector = Symbol('_changeDetector');
  const _onTouched = Symbol('_onTouched');
  const _checked = Symbol('_checked');
  const _controller = Symbol('_controller');
  const _ariaLabel = Symbol('_ariaLabel');
  const _hasFocus = Symbol('_hasFocus');
  const _isHovered = Symbol('_isHovered');
  const _syncAriaPressed = Symbol('_syncAriaPressed');
  const _updateShadowZ = Symbol('_updateShadowZ');
  material_toggle__material_toggle.MaterialToggleComponent = class MaterialToggleComponent extends core.Object {
    get toggleElement() {
      return this[toggleElement];
    }
    set toggleElement(value) {
      this[toggleElement] = value;
    }
    ngAfterViewInit() {
      this[_syncAriaPressed]();
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    set checked(value) {
      this[_checked] = value;
      this[_syncAriaPressed]();
    }
    get checked() {
      return this[_checked];
    }
    get onChecked() {
      return this[_controller].stream;
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    set ariaLabel(value) {
      this[_ariaLabel] = value;
    }
    get ariaLabel() {
      let l = this[_ariaLabel];
      return l != null ? l : this.label;
    }
    get shadow_z() {
      return this[shadow_z];
    }
    set shadow_z(value) {
      this[shadow_z] = value;
    }
    get hasFocus() {
      return this[_hasFocus];
    }
    set hasFocus(value) {
      this[_hasFocus] = value;
      this[_updateShadowZ]();
    }
    get isHovered() {
      return this[_isHovered];
    }
    set isHovered(value) {
      this[_isHovered] = value;
      this[_updateShadowZ]();
    }
    get hasLabel() {
      return this.label != null && this.label[$isNotEmpty];
    }
    [_updateShadowZ]() {
      this.shadow_z = dart.test(this.isHovered) ? 3 : dart.test(this.hasFocus) ? 2 : 1;
    }
    toggleChecked() {
      if (!dart.test(this.disabled)) {
        this.checked = !dart.test(this.checked);
        this[_controller].add(this.checked);
        let t = this[_onTouched];
        t == null ? null : dart.dsend(t, 'call', []);
      }
    }
    handleClick(mouseEvent) {
      this.toggleChecked();
      mouseEvent.preventDefault();
      mouseEvent.stopPropagation();
    }
    handleKeyPress(keyEvent) {
      let keyCode = keyEvent.keyCode;
      if (keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(keyEvent))) {
        this.toggleChecked();
        keyEvent.preventDefault();
        keyEvent.stopPropagation();
      }
    }
    [_syncAriaPressed]() {
      if (this.toggleElement == null) return;
      this.toggleElement[$attributes][$_set]("aria-pressed", dart.str(this.checked));
    }
    writeValue(isChecked) {
      core.bool._check(isChecked);
      this.checked = isChecked;
      this[_changeDetector] == null ? null : this[_changeDetector].markForCheck();
    }
    registerOnChange(callback) {
      this.onChecked.listen(dart.fn(checked => callback(checked), boolTodynamic()));
    }
    registerOnTouched(callback) {
      this[_onTouched] = callback;
    }
    onDisabledChanged(isDisabled) {
      this.disabled = isDisabled;
      this[_changeDetector] == null ? null : this[_changeDetector].markForCheck();
    }
    createRipple() {}
  };
  (material_toggle__material_toggle.MaterialToggleComponent.new = function(changeDetector, cd) {
    this[_onTouched] = null;
    this[toggleElement] = null;
    this[disabled] = false;
    this[_checked] = false;
    this[_controller] = StreamControllerOfbool().broadcast();
    this[label] = null;
    this[_ariaLabel] = null;
    this[shadow_z] = 1;
    this[_hasFocus] = false;
    this[_isHovered] = false;
    this[_changeDetector] = changeDetector;
    cd == null ? null : cd.valueAccessor = this;
  }).prototype = material_toggle__material_toggle.MaterialToggleComponent.prototype;
  dart.addTypeTests(material_toggle__material_toggle.MaterialToggleComponent);
  const toggleElement = Symbol("MaterialToggleComponent.toggleElement");
  const disabled = Symbol("MaterialToggleComponent.disabled");
  const label = Symbol("MaterialToggleComponent.label");
  const shadow_z = Symbol("MaterialToggleComponent.shadow_z");
  material_toggle__material_toggle.MaterialToggleComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, interfaces__has_disabled.HasDisabled, ControlValueAccessorOfbool()];
  dart.setMethodSignature(material_toggle__material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle.MaterialToggleComponent.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_updateShadowZ]: dart.fnType(dart.void, []),
    toggleChecked: dart.fnType(dart.void, []),
    handleClick: dart.fnType(dart.void, [html.MouseEvent]),
    handleKeyPress: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_syncAriaPressed]: dart.fnType(dart.void, []),
    writeValue: dart.fnType(dart.void, [core.Object]),
    registerOnChange: dart.fnType(dart.void, [src__directives__control_value_accessor.ChangeFunction$(core.bool)]),
    registerOnTouched: dart.fnType(dart.void, [src__directives__control_value_accessor.TouchFunction]),
    onDisabledChanged: dart.fnType(dart.void, [core.bool]),
    createRipple: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_toggle__material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getGetters(material_toggle__material_toggle.MaterialToggleComponent.__proto__),
    checked: core.bool,
    onChecked: async.Stream$(core.bool),
    ariaLabel: core.String,
    hasFocus: core.bool,
    isHovered: core.bool,
    hasLabel: core.bool
  }));
  dart.setSetterSignature(material_toggle__material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getSetters(material_toggle__material_toggle.MaterialToggleComponent.__proto__),
    checked: core.bool,
    ariaLabel: core.String,
    hasFocus: core.bool,
    isHovered: core.bool
  }));
  dart.setFieldSignature(material_toggle__material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle.MaterialToggleComponent.__proto__),
    [_onTouched]: dart.fieldType(core.Function),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    toggleElement: dart.fieldType(html.HtmlElement),
    disabled: dart.fieldType(core.bool),
    [_checked]: dart.fieldType(core.bool),
    [_controller]: dart.finalFieldType(StreamControllerOfbool()),
    label: dart.fieldType(core.String),
    [_ariaLabel]: dart.fieldType(core.String),
    shadow_z: dart.fieldType(core.int),
    [_hasFocus]: dart.fieldType(core.bool),
    [_isHovered]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_toggle__material_toggle.MaterialToggleComponent, {
    /*material_toggle__material_toggle.MaterialToggleComponent.hostClass*/get hostClass() {
      return "themeable";
    }
  });
  dart.trackLibraries("packages/angular_components/material_toggle/material_toggle.ddc", {
    "package:angular_components/material_toggle/material_toggle.dart": material_toggle__material_toggle
  }, '{"version":3,"sourceRoot":"","sources":["material_toggle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsCc;;;;;;;AAIV,4BAAgB;IAClB;IAMK;;;;;;gBAMO,KAAU;AACpB,oBAAQ,GAAG,KAAK;AAChB,4BAAgB;IAClB;;YAEoB,eAAQ;;;YAOE,kBAAW,OAAO;;IAIzC;;;;;;kBAIO,KAAY;AACxB,sBAAU,GAAG,KAAK;IACpB;;cAEwB,gBAAU;6BAAI,UAAK;;IAIvC;;;;;;;YAGiB,gBAAS;;iBACjB,KAAU;AACrB,qBAAS,GAAG,KAAK;AACjB,0BAAc;IAChB;;YAGsB,iBAAU;;kBAClB,KAAU;AACtB,sBAAU,GAAG,KAAK;AAClB,0BAAc;IAChB;;YAOqB,AAAc,WAAT,IAAI,QAAQ,UAAK,aAAW;;;AAGpD,mBAAQ,aAAG,cAAS,IAAG,cAAI,aAAQ,IAAG,IAAI;IAC5C;;AAIE,qBAAK,aAAQ,GAAE;AACb,oBAAO,GAAG,WAAC,YAAO;AAClB,yBAAW,IAAI,CAAC,YAAO;AACvB,gCAAU;;;IAEd;gBAGiB,UAAqB;AACpC,wBAAa;AACb,gBAAU,eAAe;AACzB,gBAAU,gBAAgB;IAC5B;mBAGoB,QAAsB;AACxC,UAAI,UAAU,QAAQ,QAAQ;AAC9B,UAAI,OAAO,KAAI,YAAO,MAAM,cAAI,yCAAU,CAAC,QAAQ,IAAG;AACpD,0BAAa;AACb,gBAAQ,eAAe;AACvB,gBAAQ,gBAAgB;;IAE5B;;AAGE,UAAI,kBAAa,IAAI,MAAM;AAC3B,wBAAa,aAAW,QAAC,gBAAkB,SAAE,YAAO;IACtD;eAGgB,SAAc;uBAAT;AACnB,kBAAO,GAAG,SAAS;AACnB,2BAAe,kBAAf,qBAAe,aAAc;IAC/B;qBAGsB,QAA6B;AACjD,oBAAS,OAAO,CAAC,QAAC,OAAO,IAAK,QAAQ,CAAC,OAAO;IAChD;sBAGuB,QAAsB;AAC3C,sBAAU,GAAG,QAAQ;IACvB;sBAGuB,UAAe;AACpC,mBAAQ,GAAG,UAAU;AACrB,2BAAe,kBAAf,qBAAe,aAAc;IAC/B;oBAGqB;;2FAhEK,EAAgC;IArEjD,gBAAU;IAOP,mBAAa;IAWpB,cAAQ,GAAG;IAYX,cAAQ,GAAG;IAEV,iBAAW,GAAG,kCAAgC;IAQ7C,WAAK;IASL,gBAAU;IAGb,cAAQ,GAAG;IAEV,eAAS,GAAG;IAOZ,gBAAU,GAAG;IAQT,qBAAe;AACtB,MAAE,kBAAF,EAAE,cAAe,GAAG;EACtB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAnEa,kEAAS;YAAG","file":"material_toggle.ddc.js"}');
  // Exports:
  return {
    material_toggle__material_toggle: material_toggle__material_toggle
  };
});

//# sourceMappingURL=material_toggle.ddc.js.map
