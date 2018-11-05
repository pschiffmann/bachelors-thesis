define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_factory', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/mixins/material_dropdown_base'], function(dart_sdk, disposer, has_renderer, properties, selection_model, button_decorator, change_detection, selection_container, has_factory, modules, activation_handler, material_dropdown_base) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_factory = has_factory.model__ui__has_factory;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const _root = Object.create(null);
  const material_select__material_select_item = Object.create(_root);
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let ListOfSelectionChangeRecord = () => (ListOfSelectionChangeRecord = dart.constFn(core.List$(model__selection__selection_model.SelectionChangeRecord)))();
  let ListOfSelectionChangeRecordToNull = () => (ListOfSelectionChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecord()])))();
  let HasComponentRendererOfRendersValue$dynamic = () => (HasComponentRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_renderer.HasComponentRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let HasFactoryRendererOfRendersValue$dynamic = () => (HasFactoryRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_factory.HasFactoryRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let ComponentRendererOfRendersValue$dynamic = () => (ComponentRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_renderer.ComponentRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  const _dropdown = Symbol('_dropdown');
  const _activationHandler = Symbol('_activationHandler');
  const _cdRef = Symbol('_cdRef');
  const _disposer = Symbol('_disposer');
  const _selectionChangeStreamSub = Symbol('_selectionChangeStreamSub');
  const _isHidden = Symbol('_isHidden');
  const _value = Symbol('_value');
  const _supportsMultiSelect = Symbol('_supportsMultiSelect');
  const _hideCheckbox = Symbol('_hideCheckbox');
  const _itemRenderer = Symbol('_itemRenderer');
  const _useCheckMarks = Symbol('_useCheckMarks');
  const _selectOnActivate = Symbol('_selectOnActivate');
  const _deselectOnActivate = Symbol('_deselectOnActivate');
  const _selection = Symbol('_selection');
  const _selected = Symbol('_selected');
  const _closeOnActivate = Symbol('_closeOnActivate');
  const _isMarkedSelected = Symbol('_isMarkedSelected');
  const _isSelectedInSelectionModel = Symbol('_isSelectedInSelectionModel');
  material_select__material_select_item.MaterialSelectItemComponent = class MaterialSelectItemComponent extends button_decorator__button_decorator.ButtonDirective {
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    get disabled() {
      return super.disabled;
    }
    set disabled(value) {
      super.disabled = value;
    }
    set isHidden(value) {
      this[_isHidden] = utils__angular__properties__properties.getBool(value);
    }
    get isHidden() {
      return this[_isHidden];
    }
    get value() {
      return this[_value];
    }
    set value(val) {
      this[_value] = val;
    }
    get supportsMultiSelect() {
      return this[_supportsMultiSelect];
    }
    get hideCheckbox() {
      return this[_hideCheckbox];
    }
    set hideCheckbox(value) {
      this[_hideCheckbox] = utils__angular__properties__properties.getBool(value);
    }
    get itemRenderer() {
      return this[_itemRenderer];
    }
    set itemRenderer(value) {
      this[_itemRenderer] = value;
    }
    get componentRenderer() {
      return this[componentRenderer];
    }
    set componentRenderer(value) {
      this[componentRenderer] = value;
    }
    get factoryRenderer() {
      return this[factoryRenderer];
    }
    set factoryRenderer(value) {
      this[factoryRenderer] = value;
    }
    get useCheckMarks() {
      return this[_useCheckMarks];
    }
    set useCheckMarks(value) {
      this[_useCheckMarks] = utils__angular__properties__properties.getBool(value);
    }
    set selectOnActivate(value) {
      this[_selectOnActivate] = utils__angular__properties__properties.getBool(value);
    }
    set deselectOnActivate(value) {
      this[_deselectOnActivate] = utils__angular__properties__properties.getBool(value);
    }
    get valueHasLabel() {
      return this.valueLabel != null;
    }
    get valueLabel() {
      if (this[_value] == null) {
        return null;
      } else if (this.componentRenderer == null && this.factoryRenderer == null && !(this.itemRenderer === model__ui__has_renderer.nullRenderer)) {
        return this.itemRenderer(this[_value]);
      }
      return null;
    }
    get selection() {
      return this[_selection];
    }
    set selection(sel) {
      this[_selection] = sel;
      this[_supportsMultiSelect] = model__selection__selection_model.MultiSelectionModel.is(sel);
      let t = this[_selectionChangeStreamSub];
      t == null ? null : t.cancel();
      this[_selectionChangeStreamSub] = sel.selectionChanges.listen(dart.fn(_ => {
        this[_cdRef].markForCheck();
      }, ListOfSelectionChangeRecordToNull()));
    }
    get selected() {
      return this[_selected];
    }
    set selected(value) {
      this[_selected] = utils__angular__properties__properties.getBool(value);
    }
    get closeOnActivate() {
      return this[_closeOnActivate];
    }
    set closeOnActivate(value) {
      this[_closeOnActivate] = utils__angular__properties__properties.getBool(value);
    }
    get componentType() {
      return this.componentRenderer != null ? this.componentRenderer(this.value) : null;
    }
    get componentFactory() {
      return this.factoryRenderer != null ? this.factoryRenderer(this.value) : null;
    }
    get isAriaChecked() {
      return !dart.test(this.supportsMultiSelect) || dart.test(this.hideCheckbox) ? null : this.isSelected;
    }
    get isSelected() {
      return dart.test(this[_isMarkedSelected]) || dart.test(this[_isSelectedInSelectionModel]);
    }
    get [_isMarkedSelected]() {
      return this.selected != null && dart.test(this.selected);
    }
    get [_isSelectedInSelectionModel]() {
      return this.value != null && (() => {
        let t = this[_selection];
        let l = t == null ? null : t.isSelected(this.value);
        return l != null ? l : false;
      })();
    }
    handleActivate(e) {
      let hasCheckbox = dart.test(this.supportsMultiSelect) && !dart.test(this.hideCheckbox);
      if (dart.test(this.closeOnActivate) && !hasCheckbox) {
        this[_dropdown] == null ? null : this[_dropdown].close();
      }
      if ((() => {
        let l = this[_activationHandler] == null ? null : this[_activationHandler].handle(e, this.value);
        return l != null ? l : false;
      })()) return;
      if (dart.test(this[_selectOnActivate]) && this[_selection] != null && this.value != null) {
        if (!dart.test(this[_selection].isSelected(this.value))) {
          this[_selection].select(this.value);
        } else if (dart.test(this[_deselectOnActivate])) {
          this[_selection].deselect(this.value);
        }
      }
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_select__material_select_item.MaterialSelectItemComponent.new = function(element, dropdown, activationHandler, cdRef, role) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_selectionChangeStreamSub] = null;
    this[_isHidden] = false;
    this[_value] = null;
    this[_supportsMultiSelect] = false;
    this[_hideCheckbox] = false;
    this[_itemRenderer] = model__ui__has_renderer.nullRenderer;
    this[componentRenderer] = null;
    this[factoryRenderer] = null;
    this[_useCheckMarks] = false;
    this[_selectOnActivate] = true;
    this[_deselectOnActivate] = true;
    this[_selection] = null;
    this[_selected] = false;
    this[_closeOnActivate] = true;
    this[element$] = element;
    this[_dropdown] = dropdown;
    this[_activationHandler] = activationHandler;
    this[_cdRef] = cdRef;
    material_select__material_select_item.MaterialSelectItemComponent.__proto__.new.call(this, element, role != null ? role : "option");
    this[_disposer].addStreamSubscription(html.UIEvent, this.trigger.listen(dart.bind(this, 'handleActivate')));
    this[_disposer].addFunction(dart.fn(() => {
      let t = this[_selectionChangeStreamSub];
      return t == null ? null : t.cancel();
    }, VoidToFuture()));
  }).prototype = material_select__material_select_item.MaterialSelectItemComponent.prototype;
  dart.addTypeTests(material_select__material_select_item.MaterialSelectItemComponent);
  const element$ = Symbol("MaterialSelectItemComponent.element");
  const componentRenderer = Symbol("MaterialSelectItemComponent.componentRenderer");
  const factoryRenderer = Symbol("MaterialSelectItemComponent.factoryRenderer");
  material_select__material_select_item.MaterialSelectItemComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy, model__selection__selection_container.SelectionItem, model__ui__has_renderer.HasRenderer, HasComponentRendererOfRendersValue$dynamic(), HasFactoryRendererOfRendersValue$dynamic()];
  dart.setMethodSignature(material_select__material_select_item.MaterialSelectItemComponent, () => ({
    __proto__: dart.getMethods(material_select__material_select_item.MaterialSelectItemComponent.__proto__),
    handleActivate: dart.fnType(dart.void, [html.UIEvent]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_select__material_select_item.MaterialSelectItemComponent, () => ({
    __proto__: dart.getGetters(material_select__material_select_item.MaterialSelectItemComponent.__proto__),
    isHidden: core.bool,
    value: dart.dynamic,
    supportsMultiSelect: core.bool,
    hideCheckbox: core.bool,
    itemRenderer: model__ui__has_renderer.ItemRenderer,
    useCheckMarks: core.bool,
    valueHasLabel: core.bool,
    valueLabel: core.String,
    selection: model__selection__selection_model.SelectionModel,
    selected: core.bool,
    closeOnActivate: core.bool,
    componentType: core.Type,
    componentFactory: src__core__linker__component_factory.ComponentFactory,
    isAriaChecked: core.bool,
    isSelected: core.bool,
    [_isMarkedSelected]: core.bool,
    [_isSelectedInSelectionModel]: core.bool
  }));
  dart.setSetterSignature(material_select__material_select_item.MaterialSelectItemComponent, () => ({
    __proto__: dart.getSetters(material_select__material_select_item.MaterialSelectItemComponent.__proto__),
    isHidden: dart.dynamic,
    value: dart.dynamic,
    hideCheckbox: dart.dynamic,
    itemRenderer: model__ui__has_renderer.ItemRenderer,
    useCheckMarks: dart.dynamic,
    selectOnActivate: core.bool,
    deselectOnActivate: core.bool,
    selection: model__selection__selection_model.SelectionModel,
    selected: dart.dynamic,
    closeOnActivate: dart.dynamic
  }));
  dart.setFieldSignature(material_select__material_select_item.MaterialSelectItemComponent, () => ({
    __proto__: dart.getFields(material_select__material_select_item.MaterialSelectItemComponent.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_activationHandler]: dart.finalFieldType(material_select__activation_handler.ActivationHandler),
    [_cdRef]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_dropdown]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle),
    element: dart.finalFieldType(html.HtmlElement),
    [_selectionChangeStreamSub]: dart.fieldType(async.StreamSubscription),
    [_isHidden]: dart.fieldType(core.bool),
    [_value]: dart.fieldType(dart.dynamic),
    [_supportsMultiSelect]: dart.fieldType(core.bool),
    [_hideCheckbox]: dart.fieldType(core.bool),
    [_itemRenderer]: dart.fieldType(model__ui__has_renderer.ItemRenderer),
    componentRenderer: dart.fieldType(ComponentRendererOfRendersValue$dynamic()),
    factoryRenderer: dart.fieldType(dynamicToComponentFactory()),
    [_useCheckMarks]: dart.fieldType(core.bool),
    [_selectOnActivate]: dart.fieldType(core.bool),
    [_deselectOnActivate]: dart.fieldType(core.bool),
    [_selection]: dart.fieldType(model__selection__selection_model.SelectionModel),
    [_selected]: dart.fieldType(core.bool),
    [_closeOnActivate]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_select__material_select_item.MaterialSelectItemComponent, {
    /*material_select__material_select_item.MaterialSelectItemComponent.hostClass*/get hostClass() {
      return "item";
    },
    /*material_select__material_select_item.MaterialSelectItemComponent.hostTabIndexForSelectItem*/get hostTabIndexForSelectItem() {
      return 0;
    }
  });
  dart.trackLibraries("packages/angular_components/material_select/material_select_item.ddc", {
    "package:angular_components/material_select/material_select_item.dart": material_select__material_select_item
  }, '{"version":3,"sourceRoot":"","sources":["material_select_item.dart"],"names":[],"mappings":"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","file":"material_select_item.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_item: material_select__material_select_item
  };
});

//# sourceMappingURL=material_select_item.ddc.js.map
