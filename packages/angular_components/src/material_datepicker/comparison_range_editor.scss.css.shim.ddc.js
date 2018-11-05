define(['dart_sdk', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_toggle/material_toggle.template', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_datepicker/comparison_option', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/material_select/material_dropdown_select.template'], function(dart_sdk, calendar, comparison, comparison_option, range, date, observable, sequential, disposer, view_type, change_detection, modules, material_toggle, material_toggle$, comparison_range_editor, has_disabled, material_select_item, material_dropdown_base, activation_handler, material_select_item$, selection_container, has_renderer, comparison_option$, angular, date_range_input, material_list, material_list_item, material_dropdown_select) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__comparison$46template = comparison.material_datepicker__comparison$46template;
  const material_datepicker__comparison_option$46template = comparison_option.material_datepicker__comparison_option$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const src__material_datepicker__sequential$46template = sequential.src__material_datepicker__sequential$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const material_toggle__material_toggle$46template = material_toggle.material_toggle__material_toggle$46template;
  const material_toggle__material_toggle = material_toggle$.material_toggle__material_toggle;
  const src__material_datepicker__comparison_range_editor = comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_datepicker__comparison_option = comparison_option$.material_datepicker__comparison_option;
  const angular$46template = angular.angular$46template;
  const material_datepicker__date_range_input$46template = date_range_input.material_datepicker__date_range_input$46template;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const material_select__material_dropdown_select$46template = material_dropdown_select.material_select__material_dropdown_select$46template;
  const _root = Object.create(null);
  const src__material_datepicker__date_range_editor_model$46template = Object.create(_root);
  const src__material_datepicker__comparison_range_editor$46scss$46css$46shim = Object.create(_root);
  const src__material_datepicker__comparison_range_editor$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfComparisonRangeEditorComponent = () => (AppViewOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  let AppViewAndintToAppViewOfComparisonRangeEditorComponent = () => (AppViewAndintToAppViewOfComparisonRangeEditorComponent = dart.constFn(dart.fnType(AppViewOfComparisonRangeEditorComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let ComponentRefOfComparisonRangeEditorComponent = () => (ComponentRefOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  let ComponentFactoryOfComparisonRangeEditorComponent = () => (ComponentFactoryOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  dart.defineLazy(src__material_datepicker__date_range_editor_model$46template, {
    /*src__material_datepicker__date_range_editor_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_datepicker__date_range_editor_model$46template.initReflector = function() {
    if (dart.test(src__material_datepicker__date_range_editor_model$46template._visited)) {
      return;
    }
    src__material_datepicker__date_range_editor_model$46template._visited = true;
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__comparison$46template.initReflector();
    material_datepicker__comparison_option$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
    src__material_datepicker__sequential$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46scss$46css$46shim, {
    /*src__material_datepicker__comparison_range_editor$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:flex;flex-direction:column}.comparison-toggle-section._ngcontent-%ID%{display:flex;justify-content:space-between;align-items:center;flex-grow:1;height:32px;padding:0 16px}.comparison-toggle._ngcontent-%ID%{display:inline-flex}.comparison-option-dropdown._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:0 8px;position:relative}material-select-item._ngcontent-%ID%{font-size:inherit}.fake-popup._ngcontent-%ID%{background-color:#fff;left:0;position:absolute;top:0;z-index:1}"];
    }
  });
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponent*/get styles$ComparisonRangeEditorComponent() {
      return [src__material_datepicker__comparison_range_editor$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _MaterialToggleComponent_3_5 = Symbol('_MaterialToggleComponent_3_5');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  const _handle_checkedChange_3_0 = Symbol('_handle_checkedChange_3_0');
  let const$0;
  src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0 = class ViewComparisonRangeEditorComponent0 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = "comparison-toggle-section";
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this[_el_1].className = "compare-header";
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this[_compView_3] = new material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      this[_el_0][$append](this[_el_3]);
      this[_el_3].className = src__core__linker__app_view_utils.interpolate2("", "comparison-toggle", " ", material_toggle__material_toggle.MaterialToggleComponent.hostClass, "");
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_MaterialToggleComponent_3_5] = new material_toggle__material_toggle.MaterialToggleComponent.new(this[_compView_3].ref, null);
      this[_compView_3].create(this[_MaterialToggleComponent_3_5], [const$ || (const$ = dart.constList([], dart.dynamic))]);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1, AppViewAndintToAppViewOfComparisonRangeEditorComponent()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let subscription_0 = this[_MaterialToggleComponent_3_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_3_0)));
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 3 === nodeIndex) {
        return this[_MaterialToggleComponent_3_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_1 = !dart.test(_ctx.model.comparisonSupported);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialToggleComponent_3_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.model.comparisonEnabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialToggleComponent_3_5].checked = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.comparisonHeaderMsg;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialToggleComponent_3_5].ariaLabel = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_NgIf_4_9].ngIf = _ctx.model.comparisonEnabled;
      this[_appEl_4].detectChangesInNestedViews();
      let l = _ctx.comparisonHeaderMsg;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_3].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialToggleComponent_3_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_4];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_3];
      t$ == null ? null : t$.destroy();
    }
    [_handle_checkedChange_3_0]($event) {
      this.ctx.model.comparisonEnabled = core.bool._check($event);
    }
  };
  (src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_MaterialToggleComponent_3_5] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("comparison-range-editor"));
    let t = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType;
    t == null ? src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_datepicker/comparison_range_editor.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponent) : t;
    this.setupComponentType(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType);
  }).prototype = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_3_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0),
    [_MaterialToggleComponent_3_5]: dart.fieldType(material_toggle__material_toggle.MaterialToggleComponent),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, {
    /*src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent0 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(parentView, parentIndex);
  };
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1 = class _ViewComparisonRangeEditorComponent1 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2, AppViewAndintToAppViewOfComparisonRangeEditorComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model.validComparisonOptions;
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
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType;
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new(parentView, parentIndex);
  };
  const _compView_0 = Symbol('_compView_0');
  const _MaterialSelectItemComponent_0_5 = Symbol('_MaterialSelectItemComponent_0_5');
  const _text_1 = Symbol('_text_1');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2 = class _ViewComparisonRangeEditorComponent2 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "closeOnActivate", "false");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialSelectItemComponent_0_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_0].ref, null);
      this[_text_1] = html.Text.new("");
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_5], [JSArrayOfText().of([this[_text_1]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialSelectItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_option = material_datepicker__comparison_option.ComparisonOption._check(this.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_5].closeOnActivate = "false";
      }
      let currVal_0 = dart.equals(_ctx.model.comparisonOption, local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.comparisonOptionMsg(local_option));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_1][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_option = material_datepicker__comparison_option.ComparisonOption._check(this.locals[$_get]("$implicit"));
      this.ctx.model.comparisonOption = local_option;
    }
  };
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType;
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponentHost*/get styles$ComparisonRangeEditorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ComparisonRangeEditorComponent_0_5 = Symbol('_ComparisonRangeEditorComponent_0_5');
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0 = class _ViewComparisonRangeEditorComponentHost0 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      this[_compView_0] = new src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ComparisonRangeEditorComponent_0_5] = new src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new();
      this[_compView_0].create(this[_ComparisonRangeEditorComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfComparisonRangeEditorComponent()).new(0, this, this.rootEl, this[_ComparisonRangeEditorComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ComparisonRangeEditorComponent_0_5] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0),
    [_ComparisonRangeEditorComponent_0_5]: dart.fieldType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template._ComparisonRangeEditorComponentNgFactory*/get _ComparisonRangeEditorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfComparisonRangeEditorComponent()).new("comparison-range-editor", dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0, AppViewAndintToAppViewOfComparisonRangeEditorComponent())));
    }
  });
  dart.copyProperties(src__material_datepicker__comparison_range_editor$46template, {
    get ComparisonRangeEditorComponentNgFactory() {
      return src__material_datepicker__comparison_range_editor$46template._ComparisonRangeEditorComponentNgFactory;
    }
  });
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_datepicker__comparison_range_editor$46template.initReflector = function() {
    if (dart.test(src__material_datepicker__comparison_range_editor$46template._visited)) {
      return;
    }
    src__material_datepicker__comparison_range_editor$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), src__material_datepicker__comparison_range_editor$46template.ComparisonRangeEditorComponentNgFactory);
    angular$46template.initReflector();
    material_datepicker__comparison_option$46template.initReflector();
    material_datepicker__date_range_input$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_list__material_list_item$46template.initReflector();
    material_select__material_dropdown_select$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    material_toggle__material_toggle$46template.initReflector();
    model__date__date$46template.initReflector();
    src__material_datepicker__date_range_editor_model$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.ddc", {
    "package:angular_components/src/material_datepicker/date_range_editor_model.template.dart": src__material_datepicker__date_range_editor_model$46template,
    "package:angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.dart": src__material_datepicker__comparison_range_editor$46scss$46css$46shim,
    "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart": src__material_datepicker__comparison_range_editor$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor_model.template.dart","comparison_range_editor.scss.css.shim.dart","comparison_range_editor.template.dart"],"names":[],"mappings":"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","file":"comparison_range_editor.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__date_range_editor_model$46template: src__material_datepicker__date_range_editor_model$46template,
    src__material_datepicker__comparison_range_editor$46scss$46css$46shim: src__material_datepicker__comparison_range_editor$46scss$46css$46shim,
    src__material_datepicker__comparison_range_editor$46template: src__material_datepicker__comparison_range_editor$46template
  };
});

//# sourceMappingURL=comparison_range_editor.scss.css.shim.ddc.js.map
