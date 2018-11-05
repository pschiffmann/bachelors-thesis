define(['dart_sdk', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/selection/selection_options', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/selection/selection_container'], function(dart_sdk, template_support, selectable, properties, material_select_base, has_disabled, selection_options, modules, selection_model, selection_container) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__template_support = template_support.model__ui__template_support;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const material_select__material_select_base = material_select_base.material_select__material_select_base;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const _root = Object.create(null);
  const material_select__material_select = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfSelectionItem = () => (ListOfSelectionItem = dart.constFn(core.List$(model__selection__selection_container.SelectionItem)))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  const _selectItems = Symbol('_selectItems');
  const _disabled = Symbol('_disabled');
  const _itemRenderer = Symbol('_itemRenderer');
  const _refreshItems = Symbol('_refreshItems');
  material_select__material_select.MaterialSelectComponent = class MaterialSelectComponent extends material_select__material_select_base.MaterialSelectBase {
    get trackByIndexFn() {
      return this[trackByIndexFn];
    }
    set trackByIndexFn(value) {
      super.trackByIndexFn = value;
    }
    get isMultiSelect() {
      return super.isMultiSelect;
    }
    set options(value) {
      super.options = value;
    }
    get options() {
      return super.options;
    }
    set width(value) {
      super.width = value;
    }
    get width() {
      return super.width;
    }
    set componentRenderer(value) {
      super.componentRenderer = value;
    }
    get componentRenderer() {
      return super.componentRenderer;
    }
    set factoryRenderer(value) {
      super.factoryRenderer = value;
    }
    get factoryRenderer() {
      return super.factoryRenderer;
    }
    set selection(value) {
      super.selection = value;
      this[_refreshItems]();
    }
    get selection() {
      return super.selection;
    }
    isOptionDisabled(item) {
      return !dart.test(src__model__selection__interfaces__selectable.Selectable.isSelectableIn(core.Object, this.options, item, true));
    }
    set disabled(value) {
      this[_disabled] = utils__angular__properties__properties.getBool(value);
    }
    get disabled() {
      return this[_disabled];
    }
    get disabledStr() {
      return dart.str(this[_disabled]);
    }
    get itemRenderer() {
      return this[_itemRenderer];
    }
    set itemRenderer(renderer) {
      this[_itemRenderer] = renderer;
      this[_refreshItems]();
    }
    set selectItems(value) {
      if (value != null) {
        async.scheduleMicrotask(dart.fn(() => {
          this[_selectItems] = value;
          this[_refreshItems]();
        }, VoidToNull()));
      }
    }
    [_refreshItems]() {
      if (this[_selectItems] == null) return;
      if (this.selection != null) {
        for (let item of this[_selectItems]) {
          item.selection = this.selection;
        }
      }
      if (this.itemRenderer != null) {
        for (let item of this[_selectItems]) {
          item.itemRenderer = this.itemRenderer;
        }
      }
    }
  };
  (material_select__material_select.MaterialSelectComponent.new = function() {
    this[_selectItems] = null;
    this[trackByIndexFn] = model__ui__template_support.indexIdentityFn;
    this[_disabled] = false;
    this[_itemRenderer] = null;
    material_select__material_select.MaterialSelectComponent.__proto__.new.call(this);
  }).prototype = material_select__material_select.MaterialSelectComponent.prototype;
  dart.addTypeTests(material_select__material_select.MaterialSelectComponent);
  const trackByIndexFn = Symbol("MaterialSelectComponent.trackByIndexFn");
  material_select__material_select.MaterialSelectComponent[dart.implements] = () => [interfaces__has_disabled.HasDisabled];
  dart.setMethodSignature(material_select__material_select.MaterialSelectComponent, () => ({
    __proto__: dart.getMethods(material_select__material_select.MaterialSelectComponent.__proto__),
    isOptionDisabled: dart.fnType(core.bool, [core.Object]),
    [_refreshItems]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_select__material_select.MaterialSelectComponent, () => ({
    __proto__: dart.getGetters(material_select__material_select.MaterialSelectComponent.__proto__),
    selection: model__selection__selection_model.SelectionModel,
    disabled: core.bool,
    disabledStr: core.String
  }));
  dart.setSetterSignature(material_select__material_select.MaterialSelectComponent, () => ({
    __proto__: dart.getSetters(material_select__material_select.MaterialSelectComponent.__proto__),
    options: model__selection__selection_options.SelectionOptions,
    componentRenderer: dart.fnType(core.Type, [dart.dynamic]),
    factoryRenderer: dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic]),
    selection: model__selection__selection_model.SelectionModel,
    disabled: core.bool,
    itemRenderer: dart.fnType(core.String, [dart.dynamic]),
    selectItems: core.List$(model__selection__selection_container.SelectionItem)
  }));
  dart.setFieldSignature(material_select__material_select.MaterialSelectComponent, () => ({
    __proto__: dart.getFields(material_select__material_select.MaterialSelectComponent.__proto__),
    [_selectItems]: dart.fieldType(ListOfSelectionItem()),
    trackByIndexFn: dart.finalFieldType(core.Function),
    [_disabled]: dart.fieldType(core.bool),
    [_itemRenderer]: dart.fieldType(dynamicToString())
  }));
  dart.defineLazy(material_select__material_select.MaterialSelectComponent, {
    /*material_select__material_select.MaterialSelectComponent.hostRole*/get hostRole() {
      return "listbox";
    }
  });
  dart.trackLibraries("packages/angular_components/material_select/material_select.ddc", {
    "package:angular_components/material_select/material_select.dart": material_select__material_select
  }, '{"version":3,"sourceRoot":"","sources":["material_select.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IA+CiB;;;;;;;YAMW,oBAAmB;;gBAKjC,KAAsB;AAChC,mBAAa,GAAG,KAAK;IACvB;;;;cAKU,KAAK;AACb,iBAAW,GAAG,KAAK;IACrB;;;;0BAKsB,KAAuB;AAC3C,6BAAuB,GAAG,KAAK;IACjC;;;;wBAMoB,KAAqB;AACvC,2BAAqB,GAAG,KAAK;IAC/B;;;;kBAKc,KAAK;AACjB,qBAAe,GAAG,KAAK;AACvB,yBAAa;IACf;;YAGgC,gBAAe;;qBAIzB,IAAW;AAM/B,YAAO,YAAC,wDAAU,eAAe,cAAC,YAAO,EAAE,IAAI,EAAE;IACnD;iBAMa,KAAK;AAChB,qBAAS,GAAG,8CAAO,CAAC,KAAK;IAC3B;;YAEqB,gBAAS;;;YAGJ,UAAE,eAAS;IAAC;;YAGL,oBAAa;;qBAM7B,QAAqB;AACpC,yBAAa,GAAG,QAAQ;AACxB,yBAAa;IACf;oBAGgB,KAAyB;AACvC,UAAI,KAAK,IAAI,MAAM;AAGjB,+BAAiB,CAAC;AAChB,4BAAY,GAAG,KAAK;AACpB,6BAAa;;;IAGnB;;AAGE,UAAI,kBAAY,IAAI,MAAM;AAC1B,UAAI,cAAS,IAAI,MAAM;AACrB,iBAAmB,OAAQ,mBAAY,EAAE;AACvC,cAAI,UAAU,GAAG,cAAS;;;AAG9B,UAAI,iBAAY,IAAI,MAAM;AACxB,iBAAmB,OAAQ,mBAAY,EAAE;AACvC,cAAI,aAAa,GAAG,iBAAY;;;IAGtC;;;IAhHoB,kBAAY;IAIjB,oBAAc,GAAG,2CAAe;IAE1C,eAAS,GAAG;IAwEJ,mBAAa;;EAmC5B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAnHe,iEAAQ;YAAG","file":"material_select.ddc.js"}');
  // Exports:
  return {
    material_select__material_select: material_select__material_select
  };
});

//# sourceMappingURL=material_select.ddc.js.map
