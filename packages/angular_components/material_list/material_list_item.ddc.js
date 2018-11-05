define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/mixins/material_dropdown_base'], function(dart_sdk, disposer, button_decorator, change_detection, material_dropdown_base) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const _root = Object.create(null);
  const material_list__material_list_item = Object.create(_root);
  let StreamSubscriptionOfUIEvent = () => (StreamSubscriptionOfUIEvent = dart.constFn(async.StreamSubscription$(html.UIEvent)))();
  const _dropdown = Symbol('_dropdown');
  const _hostTabIndex = Symbol('_hostTabIndex');
  const _disposer = Symbol('_disposer');
  material_list__material_list_item.MaterialListItemComponent = class MaterialListItemComponent extends button_decorator__button_decorator.ButtonDirective {
    get hostTabIndex() {
      return this[_hostTabIndex];
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    get disabled() {
      return super.disabled;
    }
    set disabled(value) {
      return super.disabled = value;
    }
    get closeOnActivate() {
      return this[closeOnActivate];
    }
    set closeOnActivate(value) {
      this[closeOnActivate] = value;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    handleActivate(_) {
      if (dart.test(this.closeOnActivate)) {
        this[_dropdown] == null ? null : this[_dropdown].close();
      }
    }
  };
  (material_list__material_list_item.MaterialListItemComponent.new = function(element, dropdown, hostTabIndex, role) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[closeOnActivate] = true;
    this[element$] = element;
    this[_dropdown] = dropdown;
    this[_hostTabIndex] = hostTabIndex;
    material_list__material_list_item.MaterialListItemComponent.__proto__.new.call(this, element, role);
    if (this[_dropdown] != null) {
      this[_disposer].addDisposable(StreamSubscriptionOfUIEvent(), this.trigger.listen(dart.bind(this, 'handleActivate')));
    }
  }).prototype = material_list__material_list_item.MaterialListItemComponent.prototype;
  dart.addTypeTests(material_list__material_list_item.MaterialListItemComponent);
  const element$ = Symbol("MaterialListItemComponent.element");
  const closeOnActivate = Symbol("MaterialListItemComponent.closeOnActivate");
  material_list__material_list_item.MaterialListItemComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_list__material_list_item.MaterialListItemComponent, () => ({
    __proto__: dart.getMethods(material_list__material_list_item.MaterialListItemComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    handleActivate: dart.fnType(dart.void, [html.UIEvent])
  }));
  dart.setFieldSignature(material_list__material_list_item.MaterialListItemComponent, () => ({
    __proto__: dart.getFields(material_list__material_list_item.MaterialListItemComponent.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_dropdown]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle),
    [_hostTabIndex]: dart.finalFieldType(core.String),
    element: dart.fieldType(html.HtmlElement),
    closeOnActivate: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_list__material_list_item.MaterialListItemComponent, {
    /*material_list__material_list_item.MaterialListItemComponent.hostClass*/get hostClass() {
      return "item";
    }
  });
  dart.trackLibraries("packages/angular_components/material_list/material_list_item.ddc", {
    "package:angular_components/material_list/material_list_item.dart": material_list__material_list_item
  }, '{"version":3,"sourceRoot":"","sources":["material_list_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;YAyC6B,oBAAa;;IAExB;;;;;;;YAYK,eAAc;;iBAMtB,KAAU;YAAK,eAAc,GAAG,KAAK;;IAK7C;;;;;;;AAIH,qBAAS,QAAQ;IACnB;mBAEoB,CAAa;AAC/B,oBAAI,oBAAe,GAAE;uBAAS,kBAAT,eAAS,MAAO;;IACvC;;8EA9B0B,OAAY,0BACS,IAA8B;IAXvE,eAAS,OAAG,0CAAgB;IA+B7B,qBAAe,GAAG;IArBQ,cAAO,GAAP,OAAO;IAAmB,eAAS;IAClC,mBAAa;AACvC,yFAAM,OAAO,EAAE,IAAI;AACvB,QAAI,eAAS,IAAI,MAAM;AACrB,qBAAS,cAAc,gCAAC,YAAO,OAAO,CAAC,iCAAc;;EAEzD;;;;;;;;;;;;;;;;;;;MAlBa,qEAAS;YAAG","file":"material_list_item.ddc.js"}');
  // Exports:
  return {
    material_list__material_list_item: material_list__material_list_item
  };
});

//# sourceMappingURL=material_list_item.ddc.js.map
