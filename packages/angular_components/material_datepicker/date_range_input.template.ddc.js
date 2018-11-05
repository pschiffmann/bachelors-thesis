define(['dart_sdk', 'packages/angular_components/material_datepicker/date_range_input.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/deferred_validator', 'packages/quiver/time', 'packages/angular_components/material_datepicker/date_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/model/date/date', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_input.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template'], function(dart_sdk, date_range_input$46scss$46css, view_type, change_detection, modules, material_input, material_input$, deferred_validator, time, date_input, material_input_default_value_accessor, date, reference, focus_interface, has_disabled, base_material_input, date_range_input, angular, calendar, date_input$, date$, observable) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__date_range_input$46scss$46css$46shim = date_range_input$46scss$46css.material_datepicker__date_range_input$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const time$ = time.time;
  const material_datepicker__date_input = date_input.material_datepicker__date_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const model__date__date = date.model__date__date;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const material_datepicker__date_range_input = date_range_input.material_datepicker__date_range_input;
  const angular$46template = angular.angular$46template;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__date_input$46template = date_input$.material_datepicker__date_input$46template;
  const model__date__date$46template = date$.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const _root = Object.create(null);
  const material_datepicker__date_range_input$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfDateRangeInputComponent = () => (ComponentRefOfDateRangeInputComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_input.DateRangeInputComponent)))();
  let AppViewOfDateRangeInputComponent = () => (AppViewOfDateRangeInputComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__date_range_input.DateRangeInputComponent)))();
  let AppViewAndintToAppViewOfDateRangeInputComponent = () => (AppViewAndintToAppViewOfDateRangeInputComponent = dart.constFn(dart.fnType(AppViewOfDateRangeInputComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDateRangeInputComponent = () => (ComponentFactoryOfDateRangeInputComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__date_range_input.DateRangeInputComponent)))();
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template.styles$DateRangeInputComponent*/get styles$DateRangeInputComponent() {
      return [material_datepicker__date_range_input$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _DeferredValidator_0_5 = Symbol('_DeferredValidator_0_5');
  const _MaterialInputComponent_0_6 = Symbol('_MaterialInputComponent_0_6');
  const _DateInputDirective_0_7 = Symbol('_DateInputDirective_0_7');
  const _BaseMaterialInput_0_8 = Symbol('_BaseMaterialInput_0_8');
  const _MaterialInputDefaultValueAccessor_0_9 = Symbol('_MaterialInputDefaultValueAccessor_0_9');
  const __NgValidators_0_10 = Symbol('__NgValidators_0_10');
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _DeferredValidator_3_5 = Symbol('_DeferredValidator_3_5');
  const _MaterialInputComponent_3_6 = Symbol('_MaterialInputComponent_3_6');
  const _DateInputDirective_3_7 = Symbol('_DateInputDirective_3_7');
  const _BaseMaterialInput_3_8 = Symbol('_BaseMaterialInput_3_8');
  const _MaterialInputDefaultValueAccessor_3_9 = Symbol('_MaterialInputDefaultValueAccessor_3_9');
  const __NgValidators_3_10 = Symbol('__NgValidators_3_10');
  const _expr_0 = Symbol('_expr_0');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_14 = Symbol('_expr_14');
  const _expr_15 = Symbol('_expr_15');
  const _NgValidators_0_10 = Symbol('_NgValidators_0_10');
  const _NgValidators_3_10 = Symbol('_NgValidators_3_10');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  const _handle_dateChange_0_1 = Symbol('_handle_dateChange_0_1');
  const _handle_dateChange_3_1 = Symbol('_handle_dateChange_3_1');
  let const$5;
  let const$6;
  let const$7;
  material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0 = class ViewDateRangeInputComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_input.DateRangeInputComponent) {
    get [_NgValidators_0_10]() {
      if (this[__NgValidators_0_10] == null) {
        this[__NgValidators_0_10] = [this[_DeferredValidator_0_5]];
      }
      return this[__NgValidators_0_10];
    }
    get [_NgValidators_3_10]() {
      if (this[__NgValidators_3_10] == null) {
        this[__NgValidators_3_10] = [this[_DeferredValidator_3_5]];
      }
      return this[__NgValidators_3_10];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this[_el_0].className = src__core__linker__app_view_utils.interpolate2("", "start date-input", " ", material_input__material_input.MaterialInputComponent.hostClass, "");
      this.createAttr(this[_el_0], "dateParsing", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_DeferredValidator_0_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_0_6] = new material_input__material_input.MaterialInputComponent.new(null, null, null, null, this[_compView_0].ref, this[_DeferredValidator_0_5]);
      this[_DateInputDirective_0_7] = new material_datepicker__date_input.DateInputDirective.new(time$.Clock._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex, null)), time$.Clock._check(this.parentView.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), this[_MaterialInputComponent_0_6]);
      this[_BaseMaterialInput_0_8] = this[_MaterialInputComponent_0_6];
      this[_MaterialInputDefaultValueAccessor_0_9] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_0_8], null);
      this[_compView_0].create(this[_MaterialInputComponent_0_6], [const$0 || (const$0 = dart.constList([], dart.dynamic)), const$1 || (const$1 = dart.constList([], dart.dynamic))]);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_1].className = "separator";
      this.addShimE(this[_el_1]);
      let _text_2 = html.Text.new("—");
      this[_el_1][$append](_text_2);
      this[_compView_3] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      parentRenderNode[$append](this[_el_3]);
      this[_el_3].className = src__core__linker__app_view_utils.interpolate2("", "end date-input", " ", material_input__material_input.MaterialInputComponent.hostClass, "");
      this.createAttr(this[_el_3], "dateParsing", "");
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_DeferredValidator_3_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_3_6] = new material_input__material_input.MaterialInputComponent.new(null, null, null, null, this[_compView_3].ref, this[_DeferredValidator_3_5]);
      this[_DateInputDirective_3_7] = new material_datepicker__date_input.DateInputDirective.new(time$.Clock._check(this.parentView.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex, null)), time$.Clock._check(this.parentView.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), this[_MaterialInputComponent_3_6]);
      this[_BaseMaterialInput_3_8] = this[_MaterialInputComponent_3_6];
      this[_MaterialInputDefaultValueAccessor_3_9] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_3_8], null);
      this[_compView_3].create(this[_MaterialInputComponent_3_6], [const$3 || (const$3 = dart.constList([], dart.dynamic)), const$4 || (const$4 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialInputComponent_0_6].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(this.ctx, 'onStartFocused')));
      let subscription_1 = this[_DateInputDirective_0_7].dateChange.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this, _handle_dateChange_0_1)));
      let subscription_2 = this[_MaterialInputComponent_3_6].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(this.ctx, 'onEndFocused')));
      let subscription_3 = this[_DateInputDirective_3_7].dateChange.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this, _handle_dateChange_3_1)));
      this.init(const$5 || (const$5 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2, subscription_3]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 0 === nodeIndex) {
        return this[_DeferredValidator_0_5];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 === nodeIndex) {
        return this[_MaterialInputComponent_0_6];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 0 === nodeIndex) {
        return this[_BaseMaterialInput_0_8];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 0 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_0_9];
      }
      if (token === (const$6 || (const$6 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 0 === nodeIndex) {
        return this[_NgValidators_0_10];
      }
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 3 === nodeIndex) {
        return this[_DeferredValidator_3_5];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 3 === nodeIndex) {
        return this[_MaterialInputComponent_3_6];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 3 === nodeIndex) {
        return this[_BaseMaterialInput_3_8];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 3 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_3_9];
      }
      if (token === (const$7 || (const$7 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 3 === nodeIndex) {
        return this[_NgValidators_3_10];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(_ctx.startDateMsg == null)) {
          this[_MaterialInputComponent_0_6].label = _ctx.startDateMsg;
          changed = true;
        }
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialInputComponent_0_6].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.isDateInputRequired;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialInputComponent_0_6].required = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_4 = _ctx.startDateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateInputDirective_0_7].dateFormat = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.startMaxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateInputDirective_0_7].maxDate = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateInputDirective_0_7].minDate = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.start;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateInputDirective_0_7].date = currVal_7;
        this[_expr_7] = currVal_7;
      }
      changed = false;
      if (firstCheck) {
        if (!(_ctx.endDateMsg == null)) {
          this[_MaterialInputComponent_3_6].label = _ctx.endDateMsg;
          changed = true;
        }
      }
      let currVal_10 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_MaterialInputComponent_3_6].disabled = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.isDateInputRequired;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialInputComponent_3_6].required = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_DateInputDirective_3_7].rangeEnd = true;
      }
      let currVal_12 = _ctx.endDateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_DateInputDirective_3_7].dateFormat = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_DateInputDirective_3_7].maxDate = currVal_13;
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.endMinDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this[_DateInputDirective_3_7].minDate = currVal_14;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.end;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_DateInputDirective_3_7].date = currVal_15;
        this[_expr_15] = currVal_15;
      }
      let currVal_0 = _ctx.isStartActive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0], "active", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_8 = _ctx.isEndActive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this.updateElemClass(this[_el_3], "active", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_compView_0].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_0_6].ngAfterViewInit();
          this[_MaterialInputComponent_3_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_3];
      t$ == null ? null : t$.destroy();
      this[_MaterialInputComponent_0_6].ngOnDestroy();
      this[_DateInputDirective_0_7].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_9].ngOnDestroy();
      this[_MaterialInputComponent_3_6].ngOnDestroy();
      this[_DateInputDirective_3_7].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_3_9].ngOnDestroy();
    }
    [_handle_dateChange_0_1]($event) {
      this.ctx.start = model__date__date.Date._check($event);
    }
    [_handle_dateChange_3_1]($event) {
      this.ctx.end = model__date__date.Date._check($event);
    }
  };
  (material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_DeferredValidator_0_5] = null;
    this[_MaterialInputComponent_0_6] = null;
    this[_DateInputDirective_0_7] = null;
    this[_BaseMaterialInput_0_8] = null;
    this[_MaterialInputDefaultValueAccessor_0_9] = null;
    this[__NgValidators_0_10] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_DeferredValidator_3_5] = null;
    this[_MaterialInputComponent_3_6] = null;
    this[_DateInputDirective_3_7] = null;
    this[_BaseMaterialInput_3_8] = null;
    this[_MaterialInputDefaultValueAccessor_3_9] = null;
    this[__NgValidators_3_10] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("date-range-input"));
    let t = material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._renderType;
    t == null ? material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/date_range_input.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__date_range_input$46template.styles$DateRangeInputComponent) : t;
    this.setupComponentType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._renderType);
  }).prototype = material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.prototype;
  dart.addTypeTests(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0);
  dart.setMethodSignature(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_input.DateRangeInputComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_dateChange_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_dateChange_3_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    [_NgValidators_0_10]: core.List,
    [_NgValidators_3_10]: core.List
  }));
  dart.setFieldSignature(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_0_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_MaterialInputComponent_0_6]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_DateInputDirective_0_7]: dart.fieldType(material_datepicker__date_input.DateInputDirective),
    [_BaseMaterialInput_0_8]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_0_9]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [__NgValidators_0_10]: dart.fieldType(core.List),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_3_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_MaterialInputComponent_3_6]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_DateInputDirective_3_7]: dart.fieldType(material_datepicker__date_input.DateInputDirective),
    [_BaseMaterialInput_3_8]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_3_9]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [__NgValidators_3_10]: dart.fieldType(core.List),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, {
    /*material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__date_range_input$46template.viewFactory_DateRangeInputComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template.styles$DateRangeInputComponentHost*/get styles$DateRangeInputComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DateRangeInputComponent_0_5 = Symbol('_DateRangeInputComponent_0_5');
  material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0 = class _ViewDateRangeInputComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_input.DateRangeInputComponent) {
    build() {
      this[_compView_0] = new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DateRangeInputComponent_0_5] = new material_datepicker__date_range_input.DateRangeInputComponent.new(this[_compView_0].ref);
      this[_compView_0].create(this[_DateRangeInputComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDateRangeInputComponent()).new(0, this, this.rootEl, this[_DateRangeInputComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeInputComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_DateRangeInputComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DateRangeInputComponent_0_5] = null;
    material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0);
  dart.setMethodSignature(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_input.DateRangeInputComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_0_5]: dart.fieldType(material_datepicker__date_range_input.DateRangeInputComponent)
  }));
  material_datepicker__date_range_input$46template.viewFactory_DateRangeInputComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template._DateRangeInputComponentNgFactory*/get _DateRangeInputComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDateRangeInputComponent()).new("date-range-input", dart.fn(material_datepicker__date_range_input$46template.viewFactory_DateRangeInputComponentHost0, AppViewAndintToAppViewOfDateRangeInputComponent())));
    }
  });
  dart.copyProperties(material_datepicker__date_range_input$46template, {
    get DateRangeInputComponentNgFactory() {
      return material_datepicker__date_range_input$46template._DateRangeInputComponentNgFactory;
    }
  });
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__date_range_input$46template.initReflector = function() {
    if (dart.test(material_datepicker__date_range_input$46template._visited)) {
      return;
    }
    material_datepicker__date_range_input$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__date_range_input.DateRangeInputComponent), material_datepicker__date_range_input$46template.DateRangeInputComponentNgFactory);
    angular$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__date_input$46template.initReflector();
    material_input__material_input$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_input.template.ddc", {
    "package:angular_components/material_datepicker/date_range_input.template.dart": material_datepicker__date_range_input$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_range_input.template.dart"],"names":[],"mappings":"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","file":"date_range_input.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_input$46template: material_datepicker__date_range_input$46template
  };
});

//# sourceMappingURL=date_range_input.template.ddc.js.map
