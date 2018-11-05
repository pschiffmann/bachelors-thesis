define(['dart_sdk', 'packages/angular_components/app_layout/material_temporary_drawer'], function(dart_sdk, material_temporary_drawer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_layout__material_temporary_drawer = material_temporary_drawer.app_layout__material_temporary_drawer;
  const _root = Object.create(null);
  const app_layout__material_stackable_drawer = Object.create(_root);
  app_layout__material_stackable_drawer.MaterialStackableDrawerComponent = class MaterialStackableDrawerComponent extends app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get isExpanded() {
      return this[isExpanded];
    }
    set isExpanded(value) {
      this[isExpanded] = value;
    }
    set visible(newVisible) {
      super.visible = newVisible;
      this.parent == null ? null : this.parent.isExpanded = newVisible;
    }
    get visible() {
      return super.visible;
    }
    get hostMatDrawerCollapsed() {
      return !dart.test(this.visible);
    }
    get hostMatDrawerExpanded() {
      return this.visible;
    }
    toggle() {
      return super.toggle();
    }
  };
  (app_layout__material_stackable_drawer.MaterialStackableDrawerComponent.new = function(parent) {
    this[isExpanded] = false;
    this[parent$] = parent;
    app_layout__material_stackable_drawer.MaterialStackableDrawerComponent.__proto__.new.call(this);
  }).prototype = app_layout__material_stackable_drawer.MaterialStackableDrawerComponent.prototype;
  dart.addTypeTests(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent);
  const parent$ = Symbol("MaterialStackableDrawerComponent.parent");
  const isExpanded = Symbol("MaterialStackableDrawerComponent.isExpanded");
  dart.setFieldSignature(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent, () => ({
    __proto__: dart.getFields(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent.__proto__),
    parent: dart.finalFieldType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent),
    isExpanded: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/app_layout/material_stackable_drawer.ddc", {
    "package:angular_components/app_layout/material_stackable_drawer.dart": app_layout__material_stackable_drawer
  }, '{"version":3,"sourceRoot":"","sources":["material_stackable_drawer.dart"],"names":[],"mappings":";;;;;;;;;IA0ByC;;;;;;IAOlC;;;;;;gBAGO,UAAe;AACzB,mBAAa,GAAG,UAAU;AAE1B,iBAAM,kBAAN,WAAM,WAAY,GAAG,UAAU;IACjC;;;;;YAGmC,YAAC,YAAO;;;YAGT,aAAO;;;YAMxB,aAAY;IAAE;;yFAxBE,MAAmC;IAK/D,gBAAU,GAAG;IAL4C,aAAM,GAAN,MAAM;AAC9D;EAAO","file":"material_stackable_drawer.ddc.js"}');
  // Exports:
  return {
    app_layout__material_stackable_drawer: app_layout__material_stackable_drawer
  };
});

//# sourceMappingURL=material_stackable_drawer.ddc.js.map
