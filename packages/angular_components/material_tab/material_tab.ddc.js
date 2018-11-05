define(['dart_sdk', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/focus/focus', 'packages/angular_components/content/deferred_content_aware'], function(dart_sdk, focus_interface, id_generator, focus, deferred_content_aware) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const focus__focus = focus.focus__focus;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const _root = Object.create(null);
  const material_tab__material_tab = Object.create(_root);
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  material_tab__material_tab.Tab = class Tab extends focus__focus_interface.Focusable {};
  (material_tab__material_tab.Tab.new = function() {
  }).prototype = material_tab__material_tab.Tab.prototype;
  dart.addTypeTests(material_tab__material_tab.Tab);
  const _uuid = Symbol('_uuid');
  const _visible = Symbol('_visible');
  const _active = Symbol('_active');
  material_tab__material_tab.MaterialTabComponent = class MaterialTabComponent extends focus__focus.RootFocusable {
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    deactivate() {
      this[_active] = false;
      this[_visible].add(false);
    }
    activate() {
      this[_active] = true;
      this[_visible].add(true);
    }
    get contentVisible() {
      return this[_visible].stream;
    }
    get active() {
      return this[_active];
    }
    get panelId() {
      return "panel-" + dart.str(this[_uuid]);
    }
    get tabId() {
      return "tab-" + dart.str(this[_uuid]);
    }
  };
  (material_tab__material_tab.MaterialTabComponent.new = function(element, idGenerator) {
    this[_visible] = StreamControllerOfbool().broadcast({sync: true});
    this[label] = null;
    this[_active] = false;
    this[_uuid] = (idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID()).nextId();
    material_tab__material_tab.MaterialTabComponent.__proto__.new.call(this, element);
  }).prototype = material_tab__material_tab.MaterialTabComponent.prototype;
  dart.addTypeTests(material_tab__material_tab.MaterialTabComponent);
  const label = Symbol("MaterialTabComponent.label");
  material_tab__material_tab.MaterialTabComponent[dart.implements] = () => [material_tab__material_tab.Tab, content__deferred_content_aware.DeferredContentAware];
  dart.setMethodSignature(material_tab__material_tab.MaterialTabComponent, () => ({
    __proto__: dart.getMethods(material_tab__material_tab.MaterialTabComponent.__proto__),
    deactivate: dart.fnType(dart.void, []),
    activate: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_tab__material_tab.MaterialTabComponent, () => ({
    __proto__: dart.getGetters(material_tab__material_tab.MaterialTabComponent.__proto__),
    contentVisible: async.Stream$(core.bool),
    active: core.bool,
    panelId: core.String,
    tabId: core.String
  }));
  dart.setFieldSignature(material_tab__material_tab.MaterialTabComponent, () => ({
    __proto__: dart.getFields(material_tab__material_tab.MaterialTabComponent.__proto__),
    [_uuid]: dart.finalFieldType(core.String),
    [_visible]: dart.finalFieldType(StreamControllerOfbool()),
    label: dart.fieldType(core.String),
    [_active]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_tab__material_tab.MaterialTabComponent, {
    /*material_tab__material_tab.MaterialTabComponent.hostRole*/get hostRole() {
      return "tabpanel";
    }
  });
  dart.trackLibraries("packages/angular_components/material_tab/material_tab.ddc", {
    "package:angular_components/material_tab/material_tab.dart": material_tab__material_tab
  }, '{"version":3,"sourceRoot":"","sources":["material_tab.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;EAyBA;;;;;;IAoCS;;;;;;;AAIL,mBAAO,GAAG;AACV,oBAAQ,IAAI,CAAC;IACf;;AAIE,mBAAO,GAAG;AACV,oBAAQ,IAAI,CAAC;IACf;;YAGmC,eAAQ,OAAO;;;YAI/B,cAAO;;;YAKJ,qBAAQ,WAAK;IAAC;;YAKhB,mBAAM,WAAK;IAAC;;kEApCX,OAAmB,EAAE,WAAmC;IAFvE,cAAQ,GAAG,kCAAgC,QAAO;IASjD,WAAK;IAoBP,aAAO,GAAG;IA1BT,WAAK,GAAG,CAAC,WAAW,WAAX,WAAW,OAAI,gEAA8B,UAAU;AAChE,6EAAM,OAAO;EAAC;;;;;;;;;;;;;;;;;;;;;;;;MAPP,wDAAQ;YAAG","file":"material_tab.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab: material_tab__material_tab
  };
});

//# sourceMappingURL=material_tab.ddc.js.map
