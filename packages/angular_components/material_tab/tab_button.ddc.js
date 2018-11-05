define(['dart_sdk', 'packages/angular_components/material_button/material_button_base', 'packages/angular_components/material_tab/tab_mixin'], function(dart_sdk, material_button_base, tab_mixin) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_button_base = material_button_base.material_button__material_button_base;
  const material_tab__tab_mixin = tab_mixin.material_tab__tab_mixin;
  const _root = Object.create(null);
  const material_tab__tab_button = Object.create(_root);
  const _nativeElement = Symbol('_nativeElement');
  const MaterialButtonBase_TabMixin$ = class MaterialButtonBase_TabMixin extends material_button__material_button_base.MaterialButtonBase {};
  (MaterialButtonBase_TabMixin$.new = function(element, role) {
    material_tab__tab_mixin.TabMixin.new.call(this);
    MaterialButtonBase_TabMixin$.__proto__.new.call(this, element, role);
  }).prototype = MaterialButtonBase_TabMixin$.prototype;
  dart.mixinMembers(MaterialButtonBase_TabMixin$, material_tab__tab_mixin.TabMixin);
  material_tab__tab_button.TabButtonComponent = class TabButtonComponent extends MaterialButtonBase_TabMixin$ {
    get nativeElement() {
      return this[_nativeElement];
    }
    get isActive() {
      return this[isActive];
    }
    set isActive(value) {
      this[isActive] = value;
    }
    get hostClassFocus() {
      return this.visualFocus;
    }
    get hostClassActive() {
      return dart.test(this.isActive) || dart.test(this.isMouseDown);
    }
    get hostDisabled() {
      return dart.test(this.disabled) ? "" : null;
    }
  };
  (material_tab__tab_button.TabButtonComponent.new = function(nativeElement) {
    this[isActive] = false;
    this[_nativeElement] = nativeElement;
    material_tab__tab_button.TabButtonComponent.__proto__.new.call(this, html.HtmlElement._check(nativeElement), "tab");
  }).prototype = material_tab__tab_button.TabButtonComponent.prototype;
  dart.addTypeTests(material_tab__tab_button.TabButtonComponent);
  const isActive = Symbol("TabButtonComponent.isActive");
  dart.setGetterSignature(material_tab__tab_button.TabButtonComponent, () => ({
    __proto__: dart.getGetters(material_tab__tab_button.TabButtonComponent.__proto__),
    nativeElement: html.Element,
    hostClassFocus: core.bool,
    hostClassActive: core.bool,
    hostDisabled: core.String
  }));
  dart.setFieldSignature(material_tab__tab_button.TabButtonComponent, () => ({
    __proto__: dart.getFields(material_tab__tab_button.TabButtonComponent.__proto__),
    [_nativeElement]: dart.finalFieldType(html.Element),
    isActive: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_tab/tab_button.ddc", {
    "package:angular_components/material_tab/tab_button.dart": material_tab__tab_button
  }, '{"version":3,"sourceRoot":"","sources":["tab_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;YA6B+B,qBAAc;;IAItC;;;;;;;YAGsB,iBAAW;;;YAGD,WAAT,aAAQ,eAAI,gBAAW;;;uBAGxB,aAAQ,IAAG,KAAK;IAAI;;;IAT1C,cAAQ,GAAG;IAPQ,oBAAc;AAAI,yEAAM,wCAAgB;EAAM","file":"tab_button.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_button: material_tab__tab_button
  };
});

//# sourceMappingURL=tab_button.ddc.js.map
