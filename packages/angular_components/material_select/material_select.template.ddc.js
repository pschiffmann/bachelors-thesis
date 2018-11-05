define(['dart_sdk', 'packages/angular_components/material_select/material_select.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/material_select', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, material_select$46scss$46css, view_type, change_detection, material_select, modules, material_list, material_list$, selection_options, material_select_item, material_dropdown_base, activation_handler, material_select_item$, selection_container, has_disabled, has_renderer, material_select_base, angular, has_disabled$, select, selection_container$, selection_model, selection_options$, has_factory, has_renderer$, template_support, properties) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_select$46scss$46css$46shim = material_select$46scss$46css.material_select__material_select$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_select__material_select = material_select.material_select__material_select;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_select__material_select_base$46template = material_select_base.material_select__material_select_base$46template;
  const angular$46template = angular.angular$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container$.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options$.model__selection__selection_options$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const model__ui__template_support$46template = template_support.model__ui__template_support$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const _root = Object.create(null);
  const material_select__material_select$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialSelectComponent = () => (AppViewOfMaterialSelectComponent = dart.constFn(src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent)))();
  let AppViewAndintToAppViewOfMaterialSelectComponent = () => (AppViewAndintToAppViewOfMaterialSelectComponent = dart.constFn(dart.fnType(AppViewOfMaterialSelectComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  let JSArrayOfSelectionItem = () => (JSArrayOfSelectionItem = dart.constFn(_interceptors.JSArray$(model__selection__selection_container.SelectionItem)))();
  let ComponentRefOfMaterialSelectComponent = () => (ComponentRefOfMaterialSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent)))();
  let ComponentFactoryOfMaterialSelectComponent = () => (ComponentFactoryOfMaterialSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_select.MaterialSelectComponent)))();
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template.styles$MaterialSelectComponent*/get styles$MaterialSelectComponent() {
      return [material_select__material_select$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialListComponent_0_5 = Symbol('_MaterialListComponent_0_5');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  material_select__material_select$46template.ViewMaterialSelectComponent0 = class ViewMaterialSelectComponent0 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialListComponent_0_5] = new material_list__material_list.MaterialListComponent.new();
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent1, AppViewAndintToAppViewOfMaterialSelectComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_compView_0].create(this[_MaterialListComponent_0_5], [(() => {
          let _ = [this.projectableNodes[$_get](0)];
          _[$addAll]([this[_appEl_1]]);
          return _;
        })()]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.width;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialListComponent_0_5].width = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_NgIf_1_9].ngIf = _ctx.options != null;
      this[_appEl_1].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
    }
    detectHostChanges(firstCheck) {
      let currVal_2 = this.ctx.isMultiSelect;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.setAttr(this.rootEl, "aria-multiselectable", currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.ctx.disabledStr;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.setAttr(this.rootEl, "aria-disabled", currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
    }
  };
  (material_select__material_select$46template.ViewMaterialSelectComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialListComponent_0_5] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_select__material_select$46template.ViewMaterialSelectComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-select"));
    this.createAttr(this.rootEl, "role", material_select__material_select.MaterialSelectComponent.hostRole);
    let t = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
    t == null ? material_select__material_select$46template.ViewMaterialSelectComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_select__material_select$46template.styles$MaterialSelectComponent) : t;
    this.setupComponentType(material_select__material_select$46template.ViewMaterialSelectComponent0._renderType);
  }).prototype = material_select__material_select$46template.ViewMaterialSelectComponent0.prototype;
  dart.addTypeTests(material_select__material_select$46template.ViewMaterialSelectComponent0);
  dart.setMethodSignature(material_select__material_select$46template.ViewMaterialSelectComponent0, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template.ViewMaterialSelectComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_select__material_select$46template.ViewMaterialSelectComponent0, () => ({
    __proto__: dart.getFields(material_select__material_select$46template.ViewMaterialSelectComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_select__material_select$46template.ViewMaterialSelectComponent0, {
    /*material_select__material_select$46template.ViewMaterialSelectComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_select__material_select$46template.viewFactory_MaterialSelectComponent0 = function(parentView, parentIndex) {
    return new material_select__material_select$46template.ViewMaterialSelectComponent0.new(parentView, parentIndex);
  };
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  material_select__material_select$46template._ViewMaterialSelectComponent1 = class _ViewMaterialSelectComponent1 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "options-wrapper";
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent2, AppViewAndintToAppViewOfMaterialSelectComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(_ctx.trackByIndexFn == null)) {
          this[_NgFor_1_9].ngForTrackBy = intAnddynamicToObject()._check(_ctx.trackByIndexFn);
        }
      }
      let currVal_0 = _ctx.options.optionGroups;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    material_select__material_select$46template._ViewMaterialSelectComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponent1.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent1);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponent1, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponent1, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponent1 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponent1.new(parentView, parentIndex);
  };
  material_select__material_select$46template._ViewMaterialSelectComponent2 = class _ViewMaterialSelectComponent2 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_0], "group", "");
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent3, AppViewAndintToAppViewOfMaterialSelectComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      this[_NgIf_1_9].ngIf = local_group.isNotEmpty;
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = local_group.isEmpty;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(this[_el_0], "empty", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    material_select__material_select$46template._ViewMaterialSelectComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponent2.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent2);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponent2, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponent2, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponent2 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponent2.new(parentView, parentIndex);
  };
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _expr_1 = Symbol('_expr_1');
  material_select__material_select$46template._ViewMaterialSelectComponent3 = class _ViewMaterialSelectComponent3 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent4, AppViewAndintToAppViewOfMaterialSelectComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent5, AppViewAndintToAppViewOfMaterialSelectComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init([this[_appEl_0], this[_appEl_1]], null);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.locals[$_get]("$implicit"));
      this[_NgIf_0_9].ngIf = local_group.hasLabel;
      let currVal_1 = local_group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_NgFor_1_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponent3.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_1] = null;
    material_select__material_select$46template._ViewMaterialSelectComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponent3.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent3);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponent3, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponent3, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponent3.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponent3 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponent3.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  material_select__material_select$46template._ViewMaterialSelectComponent4 = class _ViewMaterialSelectComponent4 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.createAttr(this[_el_0], "label", "");
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_group.uiDisplayName);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_select__material_select$46template._ViewMaterialSelectComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponent4.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent4);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponent4, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponent4, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponent4 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponent4.new(parentView, parentIndex);
  };
  const _MaterialSelectItemComponent_0_5 = Symbol('_MaterialSelectItemComponent_0_5');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  let const$0;
  material_select__material_select$46template._ViewMaterialSelectComponent5 = class _ViewMaterialSelectComponent5 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialSelectItemComponent_0_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref, null);
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_5], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
        return this[_MaterialSelectItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_item = this.locals[$_get]("$implicit");
      let currVal_0 = dart.test(_ctx.disabled) || dart.test(_ctx.isOptionDisabled(local_item));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_5].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.componentRenderer;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialSelectItemComponent_0_5].componentRenderer = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.factoryRenderer;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialSelectItemComponent_0_5].factoryRenderer = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_item;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialSelectItemComponent_0_5].value = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.itemRenderer;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialSelectItemComponent_0_5].itemRenderer = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.selection;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialSelectItemComponent_0_5].selection = currVal_5;
        this[_expr_5] = currVal_5;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_select__material_select$46template._ViewMaterialSelectComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponent5.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent5);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponent5, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponent5, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponent5 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponent5.new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template.styles$MaterialSelectComponentHost*/get styles$MaterialSelectComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialSelectComponent_0_5 = Symbol('_MaterialSelectComponent_0_5');
  material_select__material_select$46template._ViewMaterialSelectComponentHost0 = class _ViewMaterialSelectComponentHost0 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      this[_compView_0] = new material_select__material_select$46template.ViewMaterialSelectComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSelectComponent_0_5] = new material_select__material_select.MaterialSelectComponent.new();
      this[_MaterialSelectComponent_0_5].selectItems = JSArrayOfSelectionItem().of([]);
      this[_compView_0].create(this[_MaterialSelectComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialSelectComponent()).new(0, this, this.rootEl, this[_MaterialSelectComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(model__selection__selection_container.SelectionContainer)) && 0 === nodeIndex) {
        return this[_MaterialSelectComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSelectComponent_0_5] = null;
    material_select__material_select$46template._ViewMaterialSelectComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponentHost0.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponentHost0);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponentHost0, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponentHost0, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_select__material_select$46template.ViewMaterialSelectComponent0),
    [_MaterialSelectComponent_0_5]: dart.fieldType(material_select__material_select.MaterialSelectComponent)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponentHost0 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template._MaterialSelectComponentNgFactory*/get _MaterialSelectComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSelectComponent()).new("material-select", dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponentHost0, AppViewAndintToAppViewOfMaterialSelectComponent())));
    }
  });
  dart.copyProperties(material_select__material_select$46template, {
    get MaterialSelectComponentNgFactory() {
      return material_select__material_select$46template._MaterialSelectComponentNgFactory;
    }
  });
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_select$46template.initReflector = function() {
    if (dart.test(material_select__material_select$46template._visited)) {
      return;
    }
    material_select__material_select$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_select.MaterialSelectComponent), material_select__material_select$46template.MaterialSelectComponentNgFactory);
    material_select__material_select_base$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    angular$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_list__material_list$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    model__ui__template_support$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_select/material_select.template.ddc", {
    "package:angular_components/material_select/material_select.template.dart": material_select__material_select$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_select.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA4DoB,0EAA8B;YAAG,EAAS,2DAAM;;;;;;;;;;;;;;AAoBhE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,uBAAW,OAAG,sEAAkC,CAAC,MAAM;AACvD,iBAAK,GAAG,iBAAW,OAAO;AAC1B,sBAAgB,SAAO,CAAC,WAAK;AAC7B,mBAAQ,yBAAC,WAAK;AACd,sCAA0B,OAAG,sDAA6B;AAC1D,UAAM,YAAY,qDAAyB;AAC3C,oBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,4IAAoC;AACzF,qBAAS,OAAG,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC3C,uBAAW,OAAO,CAAC,gCAA0B,EAAE;kBAC7C,CAAU,qBAAgB,QAAC;qBAAY,CAAC,cAAQ;;;AAElD,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAsC,OAAO,QAAG;AAChD,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,aAAO,GAAG;AACV,UAAM,YAAY,IAAI,MAAM;AAC5B,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,wCAA0B,MAAM,GAAG,SAAS;AAC5C,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,qBAAS,KAAK,GAAI,IAAI,QAAQ,IAAI;AAClC,oBAAQ,2BAA2B;AACnC,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,4BAAQ;;AACR,gCAAW;;IACb;sBAEuB,UAAe;AACpC,UAAM,YAAY,QAAG,cAAc;AACnC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,oBAAO,CAAC,WAAM,EAAE,wBAAwB,SAAS,gCAAT,SAAS;AACjD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,QAAG,YAAY;AACjC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,oBAAO,CAAC,WAAM,EAAE,iBAAiB,SAAS,gCAAT,SAAS;AAC1C,qBAAO,GAAG,SAAS;;IAEvB;;2FAhE6B,UAA2B,EAAE,WAAe;IATzD,WAAK;IACc,iBAAW;IAChB,gCAA0B;IAC1C,cAAQ;IACjB,eAAS;IACV,aAAO;IACP,aAAO;IACP,aAAO;AAEkE,sGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC7K,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,mBAAU,CAAC,WAAM,EAAE,QAAQ,wDAA+B,SAAS;AACnE,gGAAW;gBAAX,oFAAW,GAAK,AAAS,8CAAY,iBAAiB,CAAE,UAAS,qCAAS,IAAG,sEAAsE,MAAO,2CAAiB,SAAS,EAAE,0EAA8B;AACpN,2BAAkB,CAAC,oFAAW;EAChC;;;;;;;;;;;;;;;;;;;;;MAN2B,oFAAW;;;;;8FAoEsC,UAA2B,EAAE,WAAe;AACxH,eAAO,4EAA4B,CAAC,UAAU,EAAE,WAAW;EAC7D;;;;AAYI,UAAI,MAAc,aAAQ;AAC1B,iBAAK,0BAAG,GAAG,gBAAc,CAAC;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,UAAM,YAAY,qDAAyB;AAC3C,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,4IAAoC;AACzF,sBAAU,OAAG,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AACtD,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAsC,OAAO,QAAG;AAChD,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,IAAI,eAAe,IAAE,OAAO;AACzC,UAAC,gBAAU,aAAa,kCAAG,IAAI,eAAe;;;AAGlD,UAAM,YAAY,IAAI,QAAQ,aAAa;AAC3C,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,qBAAK,8CAAqB,eAAe,GAAE;AACzC,wBAAU,UAAU;;AAEtB,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;IACV;;4FAzC8B,UAA2B,EAAE,WAAe;IAJvD,WAAK;IACV,cAAQ;IACP,gBAAU;IACrB,aAAO;AACmE,uGAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC7K,sBAAa,GAAG,wEAA4B,YAAY;EAC1D;;;;;;;;;;;;;;;8FA0C4E,UAA2B,EAAE,WAAe;AACxH,eAAO,6EAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;;AAYI,UAAI,MAAc,aAAQ;AAC1B,iBAAK,0BAAG,GAAG,gBAAc,CAAC;AAC1B,qBAAU,CAAC,WAAK,EAAE,SAAS;AAC3B,mBAAQ,CAAC,WAAK;AACd,UAAM,YAAY,qDAAyB;AAC3C,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,4IAAoC;AACzF,qBAAS,OAAG,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC3C,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAoC,qEAAc,WAAM,QAAC;AACzD,qBAAS,KAAK,GAAG,WAAW,WAAW;AACvC,oBAAQ,2BAA2B;AACnC,UAAM,YAAY,WAAW,QAAQ;AACrC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,wBAAW,CAAC,WAAK,EAAE,SAAS,SAAS;AACrC,qBAAO,GAAG,SAAS;;IAEvB;;AAIE,4BAAQ;;IACV;;4FAjC8B,UAA2B,EAAE,WAAe;IAJvD,WAAK;IACV,cAAQ;IACjB,eAAS;IACT,aAAO;AACkE,uGAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC/L,sBAAa,GAAG,wEAA4B,YAAY;EAC1D;;;;;;;;;;;;;;;8FAkC4E,UAA2B,EAAE,WAAe;AACxH,eAAO,6EAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;;;;;AAaI,UAAM,YAAY,qDAAyB;AAC3C,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,4IAAoC;AACzF,qBAAS,OAAG,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC3C,UAAM,YAAY,qDAAyB;AAC3C,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,4IAAoC;AACzF,sBAAU,OAAG,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AACtD,eAAI,CAAC,CAAC,cAAQ,EAAE,cAAQ,GAAG;AAC3B,YAAO;IACT;;AAIE,UAAoC,qEAAc,eAAU,OAAO,QAAC;AACpE,qBAAS,KAAK,GAAG,WAAW,SAAS;AACrC,UAAM,YAAY,WAAW;AAC7B,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,qBAAK,8CAAqB,eAAe,GAAE;AACzC,wBAAU,UAAU;;AAEtB,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;AACR,6BAAQ;;IACV;;4FArC8B,UAA2B,EAAE,WAAe;IAL5D,cAAQ;IACjB,eAAS;IACA,cAAQ;IACP,gBAAU;IACrB,aAAO;AACmE,uGAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC7K,sBAAa,GAAG,wEAA4B,YAAY;EAC1D;;;;;;;;;;;;;;;;8FAsC4E,UAA2B,EAAE,WAAe;AACxH,eAAO,6EAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;;;AAWI,UAAI,MAAc,aAAQ;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,qBAAU,CAAC,WAAK,EAAE,SAAS;AAC3B,mBAAQ,CAAC,WAAK;AACd,mBAAO,GAAG,aAAY,CAAC;AACvB,iBAAK,SAAO,CAAC,aAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAoC,qEAAc,eAAU,WAAW,OAAO,QAAC;AAC/E,UAAM,YAAY,AAAS,8CAAY,CAAC,WAAW,cAAc;AACjE,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;4FAvB8B,UAA2B,EAAE,WAAe;IAH1D,WAAK;IACR,aAAO;IAChB,aAAO;AACmE,uGAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC7K,sBAAa,GAAG,wEAA4B,YAAY;EAC1D;;;;;;;;;;;;;8FAwB4E,UAA2B,EAAE,WAAe;AACxH,eAAO,6EAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;;;;;;AAiBI,uBAAW,OAAG,qFAAyC,CAAC,MAAM;AAC9D,iBAAK,GAAG,iBAAW,OAAO;AAC1B,mBAAQ,yBAAC,WAAK;AACd,4CAAgC,OAAG,qEAAoC,yBAAC,WAAK,wDAAE,eAAU,WAAW,WAAW,WAAW,WAAW,YAAY,CAAU,4DAAc,EAAE,eAAU,WAAW,WAAW,WAAW,SAAS,YAAY,EAAE,qEAAO,eAAU,WAAW,WAAW,WAAW,WAAW,YAAY,CAAU,oEAAiB,EAAE,eAAU,WAAW,WAAW,WAAW,SAAS,YAAY,EAAE,QAAO,iBAAW,IAAI,EAAE;AAC7a,uBAAW,OAAO,CAAC,sCAAgC,EAAE,CAAC;AACtD,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,WAAO,AAAU,KAAK,KAAW,kEAAa,IAAK,AAAU,KAAK,KAAW,mDAAW,IAAM,AAAU,KAAK,KAAW,kDAAW,KAAO,MAAK,SAAS,EAAI;AAC1J,cAAO,uCAAgC;;AAEzC,YAAO,eAAc;IACvB;;AAIE,UAAsC,OAAO,QAAG;AAChD,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,aAAa,WAAM,QAAC;AAC1B,UAAM,YAA2B,UAAd,IAAI,SAAS,eAAI,IAAI,iBAAiB,CAAC,UAAU;AACpE,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,8CAAgC,SAAS,GAAG,SAAS;AACrD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,kBAAkB;AACxC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,8CAAgC,kBAAkB,GAAG,SAAS;AAC9D,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,gBAAgB;AACtC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,8CAAgC,gBAAgB,GAAG,SAAS;AAC5D,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,UAAU;AAC5B,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,8CAAgC,MAAM,GAAG,SAAS;AAClD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,aAAa;AACnC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,8CAAgC,aAAa,GAAG,SAAS;AACzD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU;AAChC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,8CAAgC,UAAU,GAAG,SAAS;AACtD,qBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,KAAI,UAAU,EAAG;AACzD,8CAAgC,SAAS;;AAE3C,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;AACX,4CAAgC,YAAY;IAC9C;;4FApE8B,UAA2B,EAAE,WAAe;IAT1D,WAAK;IACqB,iBAAW;IAChB,sCAAgC;IAChE,aAAO;IACR,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;AACmE,uGAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC/L,sBAAa,GAAG,wEAA4B,YAAY;EAC1D;;;;;;;;;;;;;;;;;;;;;8FAqE4E,UAA2B,EAAE,WAAe;AACxH,eAAO,6EAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;MAEoB,8EAAkC;YAAG;;;;;;AAQrD,uBAAW,OAAG,4EAA4B,CAAC,MAAM;AACjD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,wCAA4B,OAAG,4DAA+B;AAC9D,wCAA4B,YAAY,GAAG;AAC3C,uBAAW,OAAO,CAAC,kCAA4B,EAAE,qBAAgB;AACjE,gBAAK,CAAC,WAAM;AACZ,iBAAO,6CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,kCAA4B;IACnE;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,WAAO,AAAU,KAAK,KAAW,mDAAW,IAAK,AAAU,KAAK,KAAW,kDAAW,IAAM,AAAU,KAAK,KAAW,uEAAkB,KAAO,MAAK,SAAS,EAAI;AAC/J,cAAO,mCAA4B;;AAErC,YAAO,eAAc;IACvB;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;gGA9BkC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,kCAA4B;AACsB,2GAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;kGAiChG,UAA2B,EAAE,WAAe;AAC5H,eAAO,iFAAiC,CAAC,UAAU,EAAE,WAAW;EAClE;;MAEwD,6EAAiC;YAAG,gBAAM,iDAAgB,CAAC,mBAAmB,gJAAwC;;;;;AAE5K,YAAO,8EAAiC;IAC1C;;;MAEI,oDAAQ;YAAG;;;;;AAEb,kBAAI,oDAAQ,GAAE;AACZ;;AAEF,2DAAW;AAEX,IAAO,oCAAiB,CAAC,uEAAuB,EAAE,4EAAgC;AAClF,IAAM,8DAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,+CAAa;AACnB,IAAO,gDAAa;AACpB,IAAO,oDAAa;AACpB,IAAO,+DAAa;EACtB","file":"material_select.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select$46template: material_select__material_select$46template
  };
});

//# sourceMappingURL=material_select.template.ddc.js.map
