define(['dart_sdk', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, properties, base_material_input, reference, change_detection, modules, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const material_input__material_input_multiline = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _domService = Symbol('_domService');
  const _changeDetector = Symbol('_changeDetector');
  const _rows = Symbol('_rows');
  const _maxRows = Symbol('_maxRows');
  const _inputLineHeight = Symbol('_inputLineHeight');
  material_input__material_input_multiline.MaterialMultilineInputComponent = class MaterialMultilineInputComponent extends material_input__base_material_input.BaseMaterialInput {
    get textareaEl() {
      return this[textareaEl];
    }
    set textareaEl(value) {
      this[textareaEl] = value;
    }
    get inputRef() {
      return this.textareaEl;
    }
    set focusable(value) {
      super.focusable = value;
    }
    focus() {
      return super.focus();
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
    get mirrorText() {
      return (() => {
        let l = this.inputText;
        return l != null ? l : "";
      })() + "\n";
    }
    set lineHeightMeasure(value) {
      this[_domService].scheduleRead(dart.fn(() => {
        let isDestroyed = this.textareaEl == null;
        if (isDestroyed) return;
        let height = html.Element.as(value.nativeElement).clientHeight;
        if (height !== 0) {
          this[_inputLineHeight] = height;
          this[_changeDetector].markForCheck();
          this[_changeDetector].detectChanges();
        }
      }, VoidToNull()));
    }
    get minInputHeight() {
      return dart.notNull(this.rows) * dart.notNull(this[_inputLineHeight]);
    }
    get maxInputHeight() {
      return dart.notNull(this[_maxRows]) > 0 ? dart.notNull(this[_maxRows]) * dart.notNull(this[_inputLineHeight]) : null;
    }
    get textAreaHeight() {
      return this.rows == this.maxRows ? this.maxInputHeight : null;
    }
    get rows() {
      return this[_rows];
    }
    set rows(value) {
      this[_rows] = utils__angular__properties__properties.getInt(value);
      this[_changeDetector].markForCheck();
    }
    get maxRows() {
      return this[_maxRows];
    }
    set maxRows(value) {
      this[_maxRows] = utils__angular__properties__properties.getInt(value);
      this[_changeDetector].markForCheck();
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this.textareaEl = null;
      this.popupSourceEl = null;
    }
  };
  (material_input__material_input_multiline.MaterialMultilineInputComponent.new = function(cd, changeDetector, validator, domService) {
    this[textareaEl] = null;
    this[_rows] = 1;
    this[_maxRows] = 0;
    this[_inputLineHeight] = 16;
    this[popupSourceEl] = null;
    this[_domService] = domService;
    this[_changeDetector] = changeDetector;
    material_input__material_input_multiline.MaterialMultilineInputComponent.__proto__.new.call(this, cd, changeDetector, validator);
  }).prototype = material_input__material_input_multiline.MaterialMultilineInputComponent.prototype;
  dart.addTypeTests(material_input__material_input_multiline.MaterialMultilineInputComponent);
  const textareaEl = Symbol("MaterialMultilineInputComponent.textareaEl");
  const popupSourceEl = Symbol("MaterialMultilineInputComponent.popupSourceEl");
  material_input__material_input_multiline.MaterialMultilineInputComponent[dart.implements] = () => [utils__angular__reference__reference.ReferenceDirective, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setGetterSignature(material_input__material_input_multiline.MaterialMultilineInputComponent, () => ({
    __proto__: dart.getGetters(material_input__material_input_multiline.MaterialMultilineInputComponent.__proto__),
    elementRef: src__core__linker__element_ref.ElementRef,
    mirrorText: core.String,
    minInputHeight: core.int,
    maxInputHeight: core.int,
    textAreaHeight: core.int,
    rows: core.int,
    maxRows: core.int
  }));
  dart.setSetterSignature(material_input__material_input_multiline.MaterialMultilineInputComponent, () => ({
    __proto__: dart.getSetters(material_input__material_input_multiline.MaterialMultilineInputComponent.__proto__),
    lineHeightMeasure: src__core__linker__element_ref.ElementRef,
    rows: dart.dynamic,
    maxRows: dart.dynamic
  }));
  dart.setFieldSignature(material_input__material_input_multiline.MaterialMultilineInputComponent, () => ({
    __proto__: dart.getFields(material_input__material_input_multiline.MaterialMultilineInputComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    textareaEl: dart.fieldType(src__core__linker__element_ref.ElementRef),
    [_rows]: dart.fieldType(core.int),
    [_maxRows]: dart.fieldType(core.int),
    [_inputLineHeight]: dart.fieldType(core.int),
    popupSourceEl: dart.fieldType(src__core__linker__element_ref.ElementRef)
  }));
  dart.defineLazy(material_input__material_input_multiline.MaterialMultilineInputComponent, {
    /*material_input__material_input_multiline.MaterialMultilineInputComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*material_input__material_input_multiline.MaterialMultilineInputComponent.hostTabIndex*/get hostTabIndex() {
      return -1;
    }
  });
  dart.trackLibraries("packages/angular_components/material_input/material_input_multiline.ddc", {
    "package:angular_components/material_input/material_input_multiline.dart": material_input__material_input_multiline
  }, '{"version":3,"sourceRoot":"","sources":["material_input_multiline.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IA0Da;;;;;;;YASgB,gBAAU;;kBA0BvB,KAAe;AAC3B,qBAAe,GAAG,KAAK;IACzB;;YAKgB,YAAW;IAAE;IAGlB;;;;;;;YAIkB,mBAAa;;;YAGC;gBAAjB,cAAS;+BAAI;aAAM;IAAI;0BAG3B,KAAgB;AAGpC,uBAAW,aAAa,CAAC;AACvB,YAAI,cAAc,eAAU,IAAI;AAChC,YAAI,WAAW,EAAE;AAEjB,YAAI,yBAAU,KAAK,cAAc,cAAyB;AAC1D,YAAI,MAAM,KAAI,GAAG;AACf,gCAAgB,GAAG,MAAM;AACzB,UACE,AAAE,kCAAY;UAEd,AAAE,mCAAa;;;IAGvB;;YAE+B,cAAL,SAAI,iBAAG,sBAAgB;;;YACvB,AAAS,cAAT,cAAQ,IAAG,IAAa,aAAT,cAAQ,iBAAG,sBAAgB,IAAG;IAAI;;YAIjD,UAAI,IAAI,YAAO,GAAG,mBAAc,GAAG;IAAI;;YAEjD,YAAK;;aAMZ,KAAa;AACpB,iBAAK,GAAG,6CAAM,CAAC,KAAK;AACpB,2BAAe,aAAa;IAC9B;;YAEmB,eAAQ;;gBAMf,KAAa;AACvB,oBAAQ,GAAG,6CAAM,CAAC,KAAK;AACvB,2BAAe,aAAa;IAC9B;;AAIE,uBAAiB;AACjB,qBAAU,GAAG;AACb,wBAAa,GAAG;IAClB;;2FApFI,EAAgC,EAChC,cAAgC,EAChC,SAA2B;IAzBpB,gBAAU;IAajB,WAAK,GAAG;IAIR,cAAQ,GAAG;IAGX,sBAAgB,GAAG;IAyBZ,mBAAa;IAnBf,iBAAW;IACd,qBAAe,GAAG,cAAc;AAChC,sGAAM,EAAE,EAAE,cAAc,EAAE,SAAS;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MArC7B,kFAAS;YAAG;;MAGZ,qFAAY;YAAG,EAAC","file":"material_input_multiline.ddc.js"}');
  // Exports:
  return {
    material_input__material_input_multiline: material_input__material_input_multiline
  };
});

//# sourceMappingURL=material_input_multiline.ddc.js.map
