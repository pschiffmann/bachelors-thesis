define(['dart_sdk', 'packages/quiver/check', 'packages/intl/intl', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, check, intl, change_detection, has_disabled, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const check$ = check.check;
  const intl$ = intl.intl;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const material_slider__material_slider = Object.create(_root);
  const $modulo = dartx['%'];
  const $left = dartx.left;
  const $scrollX = dartx.scrollX;
  const $truncate = dartx.truncate;
  const $remainder = dartx.remainder;
  const $page = dartx.page;
  const $onMouseMove = dartx.onMouseMove;
  const $onMouseUp = dartx.onMouseUp;
  const $first = dartx.first;
  const $onTouchMove = dartx.onTouchMove;
  const $onTouchEnd = dartx.onTouchEnd;
  const $ceil = dartx.ceil;
  let StreamControllerOfnum = () => (StreamControllerOfnum = dart.constFn(async.StreamController$(core.num)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let TouchEventToNull = () => (TouchEventToNull = dart.constFn(dart.fnType(core.Null, [html.TouchEvent])))();
  const _changeDetector = Symbol('_changeDetector');
  const _domService = Symbol('_domService');
  const _changeController = Symbol('_changeController');
  const _divisible = Symbol('_divisible');
  const _setValueToMousePosition = Symbol('_setValueToMousePosition');
  material_slider__material_slider.MaterialSliderComponent = class MaterialSliderComponent extends core.Object {
    get disabledStr() {
      return dart.str(this.disabled);
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get valueChange() {
      return this[_changeController].stream;
    }
    get min() {
      return this[min];
    }
    set min(value) {
      this[min] = value;
    }
    get max() {
      return this[max];
    }
    set max(value) {
      this[max] = value;
    }
    get step() {
      return this[step];
    }
    set step(value) {
      this[step] = value;
    }
    get progressPercent() {
      return 100.0 * (dart.notNull(this.value) - dart.notNull(this.min)) / (dart.notNull(this.max) - dart.notNull(this.min));
    }
    ngAfterChanges() {
      if (!dart.test(dart.fn(() => {
        check$.checkArgument(dart.notNull(this.min) < dart.notNull(this.max), {message: "Failed assertion: " + dart.str(this.min) + " < " + dart.str(this.max)});
        check$.checkArgument(dart.notNull(this.step) > 0, {message: "Failed assertion: " + dart.str(this.step) + " > 0"});
        check$.checkArgument(this[_divisible](dart.notNull(this.max) - dart.notNull(this.min), this.step), {message: "Failed assertion: (" + dart.str(this.max) + " - " + dart.str(this.min) + ") % " + dart.str(this.step) + " ~ 0."});
        check$.checkArgument(dart.notNull(this.value) >= dart.notNull(this.min), {message: "Failed assertion: " + dart.str(this.value) + " >= " + dart.str(this.min)});
        check$.checkArgument(dart.notNull(this.value) <= dart.notNull(this.max), {message: "Failed assertion: " + dart.str(this.value) + " <= " + dart.str(this.max)});
        check$.checkArgument(this[_divisible](dart.notNull(this.value) - dart.notNull(this.min), this.step), {message: "Failed assertion: (" + dart.str(this.value) + " - " + dart.str(this.min) + ") % " + dart.str(this.step) + " ~ 0."});
        return true;
      }, VoidTobool())())) dart.assertFailed();
    }
    [_divisible](value, step) {
      if (core.int.is(step)) {
        return value[$modulo](step) === 0;
      } else {
        let epsilon = 1e-10;
        let remainder = value[$modulo](step);
        if (dart.notNull(remainder) < epsilon) return true;
        if (dart.notNull(step) - dart.notNull(remainder) < epsilon) return true;
        return false;
      }
    }
    get container() {
      return this[container];
    }
    set container(value) {
      this[container] = value;
    }
    get isRtl() {
      return intl$.Bidi.isRtlLanguage((() => {
        let l = intl$.Intl.defaultLocale;
        return l != null ? l : "";
      })());
    }
    [_setValueToMousePosition](position) {
      this[_domService].scheduleRead(dart.fn(() => {
        let containerWidth = this.container.clientWidth;
        if (containerWidth === 0) return;
        let containerLeft = dart.notNull(this.container.getBoundingClientRect()[$left]) + dart.notNull(html.window[$scrollX]);
        let fractionOfTrackLtr = (dart.notNull(position) - containerLeft) / dart.notNull(containerWidth);
        let fractionOfTrack = dart.test(this.isRtl) ? 1.0 - fractionOfTrackLtr : fractionOfTrackLtr;
        let scaledValue = fractionOfTrack * (dart.notNull(this.max) - dart.notNull(this.min));
        let halfStep = dart.notNull(this.step) / 2;
        let unboundedValue = dart.notNull(this.min) + (scaledValue / dart.notNull(this.step))[$truncate]() * dart.notNull(this.step) + dart.notNull(scaledValue[$remainder](this.step) > halfStep ? this.step : 0);
        let newValue = math.max(core.num, this.min, math.min(core.num, this.max, unboundedValue));
        if (newValue !== this.value) {
          this.value = newValue;
          this[_changeController].add(this.value);
        }
      }, VoidToNull()));
    }
    get isDragging() {
      return this[isDragging];
    }
    set isDragging(value) {
      this[isDragging] = value;
    }
    mouseDown(event) {
      if (dart.test(this.disabled)) return;
      if (event.button !== 0) return;
      event.preventDefault();
      this[_setValueToMousePosition](dart.asInt(event[$page].x));
      this.isDragging = true;
      this[_changeDetector].markForCheck();
      let mouseMoveSubscription = html.document[$onMouseMove].listen(dart.fn(event => {
        event.preventDefault();
        this[_setValueToMousePosition](dart.asInt(event[$page].x));
      }, MouseEventToNull()));
      html.document[$onMouseUp].take(1).listen(dart.fn(event => {
        event.preventDefault();
        mouseMoveSubscription.cancel();
        this.isDragging = false;
        this[_changeDetector].markForCheck();
      }, MouseEventToNull()));
    }
    touchStart(event) {
      if (dart.test(this.disabled)) return;
      event.preventDefault();
      let touch = event.targetTouches[$first];
      this[_setValueToMousePosition](dart.asInt(touch[$page].x));
      this.isDragging = true;
      this[_changeDetector].markForCheck();
      let touchMoveSubscription = html.document[$onTouchMove].listen(dart.fn(event => {
        event.preventDefault();
        let touch = event.targetTouches[$first];
        this[_setValueToMousePosition](dart.asInt(touch[$page].x));
      }, TouchEventToNull()));
      html.document[$onTouchEnd].take(1).listen(dart.fn(event => {
        event.preventDefault();
        touchMoveSubscription.cancel();
        this.isDragging = false;
        this[_changeDetector].markForCheck();
      }, TouchEventToNull()));
    }
    knobKeyDown(event) {
      if (dart.test(this.disabled)) return;
      let newValue = this.value;
      let bigStepSize = ((dart.notNull(this.max) - dart.notNull(this.min)) / 10.0)[$ceil]();
      let sign = dart.test(this.isRtl) ? -1 : 1;
      switch (event.keyCode) {
        case html.KeyCode.DOWN:
        case html.KeyCode.LEFT:
        {
          newValue = math.max(core.num, this.min, math.min(core.num, this.max, dart.notNull(this.value) - dart.notNull(this.step) * sign));
          break;
        }
        case html.KeyCode.UP:
        case html.KeyCode.RIGHT:
        {
          newValue = math.max(core.num, this.min, math.min(core.num, this.max, dart.notNull(this.value) + dart.notNull(this.step) * sign));
          break;
        }
        case html.KeyCode.PAGE_UP:
        {
          newValue = math.max(core.num, this.min, math.min(core.num, this.max, dart.notNull(this.value) + dart.notNull(this.step) * bigStepSize));
          break;
        }
        case html.KeyCode.PAGE_DOWN:
        {
          newValue = math.max(core.num, this.min, math.min(core.num, this.max, dart.notNull(this.value) - dart.notNull(this.step) * bigStepSize));
          break;
        }
      }
      if (newValue != this.value) {
        this.value = newValue;
        this[_changeController].add(this.value);
      }
    }
  };
  (material_slider__material_slider.MaterialSliderComponent.new = function(changeDetector, domService) {
    this[disabled] = false;
    this[value$] = 0;
    this[_changeController] = StreamControllerOfnum().broadcast({sync: true});
    this[min] = 0;
    this[max] = 100;
    this[step] = 1;
    this[container] = null;
    this[isDragging] = false;
    this[_changeDetector] = changeDetector;
    this[_domService] = domService;
  }).prototype = material_slider__material_slider.MaterialSliderComponent.prototype;
  dart.addTypeTests(material_slider__material_slider.MaterialSliderComponent);
  const disabled = Symbol("MaterialSliderComponent.disabled");
  const value$ = Symbol("MaterialSliderComponent.value");
  const min = Symbol("MaterialSliderComponent.min");
  const max = Symbol("MaterialSliderComponent.max");
  const step = Symbol("MaterialSliderComponent.step");
  const container = Symbol("MaterialSliderComponent.container");
  const isDragging = Symbol("MaterialSliderComponent.isDragging");
  material_slider__material_slider.MaterialSliderComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterChanges, interfaces__has_disabled.HasDisabled];
  dart.setMethodSignature(material_slider__material_slider.MaterialSliderComponent, () => ({
    __proto__: dart.getMethods(material_slider__material_slider.MaterialSliderComponent.__proto__),
    ngAfterChanges: dart.fnType(dart.void, []),
    [_divisible]: dart.fnType(core.bool, [core.num, core.num]),
    [_setValueToMousePosition]: dart.fnType(dart.void, [core.int]),
    mouseDown: dart.fnType(dart.void, [html.MouseEvent]),
    touchStart: dart.fnType(dart.void, [html.TouchEvent]),
    knobKeyDown: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setGetterSignature(material_slider__material_slider.MaterialSliderComponent, () => ({
    __proto__: dart.getGetters(material_slider__material_slider.MaterialSliderComponent.__proto__),
    disabledStr: core.String,
    valueChange: async.Stream$(core.num),
    progressPercent: core.double,
    isRtl: core.bool
  }));
  dart.setFieldSignature(material_slider__material_slider.MaterialSliderComponent, () => ({
    __proto__: dart.getFields(material_slider__material_slider.MaterialSliderComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    disabled: dart.fieldType(core.bool),
    value: dart.fieldType(core.num),
    [_changeController]: dart.finalFieldType(StreamControllerOfnum()),
    min: dart.fieldType(core.num),
    max: dart.fieldType(core.num),
    step: dart.fieldType(core.num),
    container: dart.fieldType(html.Element),
    isDragging: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_slider/material_slider.ddc", {
    "package:angular_components/material_slider/material_slider.dart": material_slider__material_slider
  }, '{"version":3,"sourceRoot":"","sources":["material_slider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YA4C4B,UAAE,aAAQ;IAAC;IAMhC;;;;;;IAMD;;;;;;;YAM2B,wBAAiB,OAAO;;IAMnD;;;;;;IAMA;;;;;;IAMA;;;;;;;YAG2B,AAAM,AAAgB,UAAP,aAAN,UAAK,iBAAG,QAAG,MAAS,aAAJ,QAAG,iBAAG,QAAG;IAAE;;AAKjE,qBAAO;AACL,4BAAa,CAAK,aAAJ,QAAG,iBAAG,QAAG,aAAW,gCAAqB,QAAG,qBAAM,QAAG;AACnE,4BAAa,CAAM,aAAL,SAAI,IAAG,aAAY,gCAAqB,SAAI;AAC1D,4BAAa,CAAC,gBAAU,CAAK,aAAJ,QAAG,iBAAG,QAAG,GAAE,SAAI,aAC3B,iCAAsB,QAAG,qBAAM,QAAG,sBAAO,SAAI;AAC1D,4BAAa,CAAO,aAAN,UAAK,kBAAI,QAAG,aACb,gCAAqB,UAAK,sBAAO,QAAG;AACjD,4BAAa,CAAO,aAAN,UAAK,kBAAI,QAAG,aACb,gCAAqB,UAAK,sBAAO,QAAG;AACjD,4BAAa,CAAC,gBAAU,CAAO,aAAN,UAAK,iBAAG,QAAG,GAAE,SAAI,aAC7B,iCAAsB,UAAK,qBAAM,QAAG,sBAAO,SAAI;AAC5D,cAAO;;IAEX;iBAEgB,KAAS,EAAE,IAAQ;AACjC,sBAAI,IAAI,GAAS;AACf,cAAO,AAAA,AAAM,MAAD,UAAG,IAAI,MAAI;aAClB;AACL,YAAM,UAAU;AAChB,YAAO,YAAY,AAAM,KAAD,UAAG,IAAI;AAC/B,YAAc,aAAV,SAAS,IAAG,OAAO,EAAE,MAAO;AAChC,YAAS,AAAY,aAAjB,IAAI,iBAAG,SAAS,IAAG,OAAO,EAAE,MAAO;AACvC,cAAO;;IAEX;IAGQ;;;;;;;YAGU,WAAI,cAAc;gBAAC,UAAI,cAAc;+BAAI;;IAAG;+BAGhC,QAAY;AACxC,uBAAW,aAAa,CAAC;AACvB,YAAM,iBAAiB,cAAS,YAAY;AAC5C,YAAI,cAAc,KAAI,GAAG;AACzB,YAAM,gBACqC,aAAvC,cAAS,sBAAsB,SAAO,iBAAG,WAAM,UAAQ;AAC3D,YAAM,qBAAgD,CAAjB,aAAT,QAAQ,IAAG,aAAa,iBAAI,cAAc;AACtE,YAAM,4BACF,UAAK,IAAG,AAAI,MAAE,kBAAkB,GAAG,kBAAkB;AAEzD,YAAM,cAAe,AAAgB,eAAD,IAAQ,aAAJ,QAAG,iBAAG,QAAG;AACjD,YAAM,WAAgB,aAAL,SAAI,IAAG;AAExB,YAAM,iBAAqB,AACM,aADV,QAAG,IACT,AAAS,CAxIhC,AAwIW,WAAW,gBAAI,SAAI,+BAAI,SAAI,iBAC3B,AAAA,AAA4B,WAAjB,YAAU,CAAC,SAAI,IAAI,QAAQ,GAAG,SAAI,GAAG;AACrD,YAAM,WAAW,AAAK,QAAG,WAAC,QAAG,EAAE,AAAK,QAAG,WAAC,QAAG,EAAE,cAAc;AAC3D,YAAI,QAAQ,KAAI,UAAK,EAAE;AACrB,oBAAK,GAAG,QAAQ;AAChB,iCAAiB,IAAI,CAAC,UAAK;;;IAGjC;IAGK;;;;;;cAGU,KAAgB;AAC7B,oBAAI,aAAQ,GAAE;AACd,UAAI,KAAK,OAAO,KAAI,GAAG;AACvB,WAAK,eAAe;AACpB,oCAAwB,YAAC,KAAK,OAAK,EAAE;AACrC,qBAAU,GAAG;AACb,2BAAe,aAAa;AAC5B,UAAM,wBAAwB,aAAQ,cAAY,OAAO,CAAC,QAAC,KAAK;AAC9D,aAAK,eAAe;AACpB,sCAAwB,YAAC,KAAK,OAAK,EAAE;;AAEvC,mBAAQ,YAAU,KAAK,CAAC,SAAS,CAAC,QAAC,KAAK;AACtC,aAAK,eAAe;AACpB,6BAAqB,OAAO;AAC5B,uBAAU,GAAG;AACb,6BAAe,aAAa;;IAEhC;eAGgB,KAAgB;AAC9B,oBAAI,aAAQ,GAAE;AACd,WAAK,eAAe;AACpB,UAAM,QAAQ,KAAK,cAAc,QAAM;AACvC,oCAAwB,YAAC,KAAK,OAAK,EAAE;AACrC,qBAAU,GAAG;AACb,2BAAe,aAAa;AAC5B,UAAM,wBAAwB,aAAQ,cAAY,OAAO,CAAC,QAAC,KAAK;AAC9D,aAAK,eAAe;AACpB,YAAM,QAAQ,KAAK,cAAc,QAAM;AACvC,sCAAwB,YAAC,KAAK,OAAK,EAAE;;AAEvC,mBAAQ,aAAW,KAAK,CAAC,SAAS,CAAC,QAAC,KAAK;AACvC,aAAK,eAAe;AACpB,6BAAqB,OAAO;AAC5B,uBAAU,GAAG;AACb,6BAAe,aAAa;;IAEhC;gBAGiB,KAAmB;AAClC,oBAAI,aAAQ,GAAE;AACd,UAAI,WAAW,UAAK;AACpB,UAAM,cAAc,CAAa,CAAP,aAAJ,QAAG,iBAAG,QAAG,KAAI,YAAU;AAC7C,UAAM,iBAAO,UAAK,IAAG,CAAC,IAAI;AAC1B,cAAQ,KAAK,QAAQ;YACd,aAAO,KAAK;YACZ,aAAO,KAAK;;AACf,kBAAQ,GAAG,AAAK,QAAG,WAAC,QAAG,EAAE,AAAK,QAAG,WAAC,QAAG,EAAQ,aAAN,UAAK,IAAQ,aAAL,SAAI,IAAG,IAAI;AAC1D;;YACG,aAAO,GAAG;YACV,aAAO,MAAM;;AAChB,kBAAQ,GAAG,AAAK,QAAG,WAAC,QAAG,EAAE,AAAK,QAAG,WAAC,QAAG,EAAQ,aAAN,UAAK,IAAQ,aAAL,SAAI,IAAG,IAAI;AAC1D;;YACG,aAAO,QAAQ;;AAClB,kBAAQ,GAAG,AAAK,QAAG,WAAC,QAAG,EAAE,AAAK,QAAG,WAAC,QAAG,EAAQ,aAAN,UAAK,IAAQ,aAAL,SAAI,IAAG,WAAW;AACjE;;YACG,aAAO,UAAU;;AACpB,kBAAQ,GAAG,AAAK,QAAG,WAAC,QAAG,EAAE,AAAK,QAAG,WAAC,QAAG,EAAQ,aAAN,UAAK,IAAQ,aAAL,SAAI,IAAG,WAAW;AACjE;;;AAEJ,UAAI,QAAQ,IAAI,UAAK,EAAE;AACrB,kBAAK,GAAG,QAAQ;AAChB,+BAAiB,IAAI,CAAC,UAAK;;IAE/B;;;IAtKK,cAAQ,GAAG;IAMZ,YAAK,GAAG;IAEN,uBAAiB,GAAG,iCAA+B,QAAO;IAU5D,SAAG,GAAG;IAMN,SAAG,GAAG;IAMN,UAAI,GAAG;IAoCH,eAAS;IA+BZ,gBAAU,GAAG;IA3GW,qBAAe;IAAO,iBAAW;EAAC","file":"material_slider.ddc.js"}');
  // Exports:
  return {
    material_slider__material_slider: material_slider__material_slider
  };
});

//# sourceMappingURL=material_slider.ddc.js.map
