define(['dart_sdk', 'packages/angular_components/material_datepicker/material_date_time_picker.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_datepicker/material_datepicker.template', 'packages/quiver/time', 'packages/angular_components/material_datepicker/material_datepicker', 'packages/angular_components/material_datepicker/material_time_picker.template', 'packages/angular_components/material_datepicker/material_time_picker', 'packages/angular_components/model/date/date', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_datepicker/material_date_time_picker', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/model/date/date.template'], function(dart_sdk, material_date_time_picker$46scss$46css, view_type, change_detection, modules, material_datepicker, time, material_datepicker$, material_time_picker, material_time_picker$, date, has_disabled, material_date_time_picker, angular, has_disabled$, module, material_input, date$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_date_time_picker$46scss$46css$46shim = material_date_time_picker$46scss$46css.material_datepicker__material_date_time_picker$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_datepicker__material_datepicker$46template = material_datepicker.material_datepicker__material_datepicker$46template;
  const time$ = time.time;
  const material_datepicker__material_datepicker = material_datepicker$.material_datepicker__material_datepicker;
  const material_datepicker__material_time_picker$46template = material_time_picker.material_datepicker__material_time_picker$46template;
  const material_datepicker__material_time_picker = material_time_picker$.material_datepicker__material_time_picker;
  const model__date__date = date.model__date__date;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_datepicker__material_date_time_picker = material_date_time_picker.material_datepicker__material_date_time_picker;
  const angular$46template = angular.angular$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const model__date__date$46template = date$.model__date__date$46template;
  const _root = Object.create(null);
  const material_datepicker__material_date_time_picker$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfMaterialDateTimePickerComponent = () => (ComponentRefOfMaterialDateTimePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent)))();
  let AppViewOfMaterialDateTimePickerComponent = () => (AppViewOfMaterialDateTimePickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent)))();
  let AppViewAndintToAppViewOfMaterialDateTimePickerComponent = () => (AppViewAndintToAppViewOfMaterialDateTimePickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialDateTimePickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialDateTimePickerComponent = () => (ComponentFactoryOfMaterialDateTimePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent)))();
  dart.defineLazy(material_datepicker__material_date_time_picker$46template, {
    /*material_datepicker__material_date_time_picker$46template.styles$MaterialDateTimePickerComponent*/get styles$MaterialDateTimePickerComponent() {
      return [material_datepicker__material_date_time_picker$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialDatepickerComponent_0_5 = Symbol('_MaterialDatepickerComponent_0_5');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialTimePickerComponent_1_5 = Symbol('_MaterialTimePickerComponent_1_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  let const$;
  let const$0;
  const _handle_dateChange_0_0 = Symbol('_handle_dateChange_0_0');
  const _handle_timeChange_1_0 = Symbol('_handle_timeChange_1_0');
  let const$1;
  material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0 = class ViewMaterialDateTimePickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialDatepickerComponent_0_5] = new material_datepicker__material_datepicker.MaterialDatepickerComponent.new(html.HtmlElement._check(this[_el_0]), null, time$.Clock._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialDatepickerComponent_0_5], []);
      this[_compView_1] = new material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialTimePickerComponent_1_5] = new material_datepicker__material_time_picker.MaterialTimePickerComponent.new(time$.Clock._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)));
      this[_compView_1].create(this[_MaterialTimePickerComponent_1_5], []);
      let subscription_0 = this[_MaterialDatepickerComponent_0_5].dateChange.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this, _handle_dateChange_0_0)));
      let subscription_1 = this[_MaterialTimePickerComponent_1_5].timeChange.listen(this.eventHandler1(core.DateTime, core.DateTime, dart.bind(this, _handle_timeChange_1_0)));
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialDatepickerComponent_0_5];
      }
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 1 === nodeIndex) {
        return this[_MaterialTimePickerComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.outputDateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialDatepickerComponent_0_5].outputFormat = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialDatepickerComponent_0_5].maxDate = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialDatepickerComponent_0_5].minDate = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.required;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialDatepickerComponent_0_5].required = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.date;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialDatepickerComponent_0_5].date = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialDatepickerComponent_0_5].disabled = currVal_5;
        this[_expr_5] = currVal_5;
      }
      changed = false;
      let currVal_6 = _ctx.outputTimeFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialTimePickerComponent_1_5].outputFormat = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.time;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MaterialTimePickerComponent_1_5].time = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialTimePickerComponent_1_5].disabled = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.required;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_MaterialTimePickerComponent_1_5].required = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.utc;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_MaterialTimePickerComponent_1_5].utc = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.maxTime;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialTimePickerComponent_1_5].maxTime = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.minTime;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_MaterialTimePickerComponent_1_5].minTime = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTimePickerComponent_1_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialDatepickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
      this[_MaterialTimePickerComponent_1_5].ngOnDestroy();
    }
    [_handle_dateChange_0_0]($event) {
      this.ctx.date = model__date__date.Date._check($event);
    }
    [_handle_timeChange_1_0]($event) {
      this.ctx.time = core.DateTime._check($event);
    }
  };
  (material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialDatepickerComponent_0_5] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialTimePickerComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-date-time-picker"));
    let t = material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._renderType;
    t == null ? material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_date_time_picker.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__material_date_time_picker$46template.styles$MaterialDateTimePickerComponent) : t;
    this.setupComponentType(material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._renderType);
  }).prototype = material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0);
  dart.setMethodSignature(material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_dateChange_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_timeChange_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0),
    [_MaterialDatepickerComponent_0_5]: dart.fieldType(material_datepicker__material_datepicker.MaterialDatepickerComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0),
    [_MaterialTimePickerComponent_1_5]: dart.fieldType(material_datepicker__material_time_picker.MaterialTimePickerComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, {
    /*material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__material_date_time_picker$46template.viewFactory_MaterialDateTimePickerComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_date_time_picker$46template, {
    /*material_datepicker__material_date_time_picker$46template.styles$MaterialDateTimePickerComponentHost*/get styles$MaterialDateTimePickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDateTimePickerComponent_0_5 = Symbol('_MaterialDateTimePickerComponent_0_5');
  let const$2;
  material_datepicker__material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0 = class _ViewMaterialDateTimePickerComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDateTimePickerComponent_0_5] = new material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.new(time$.Clock._check(this.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialDateTimePickerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialDateTimePickerComponent()).new(0, this, this.rootEl, this[_MaterialDateTimePickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialDateTimePickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDateTimePickerComponent_0_5] = null;
    material_datepicker__material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0),
    [_MaterialDateTimePickerComponent_0_5]: dart.fieldType(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent)
  }));
  material_datepicker__material_date_time_picker$46template.viewFactory_MaterialDateTimePickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_date_time_picker$46template, {
    /*material_datepicker__material_date_time_picker$46template._MaterialDateTimePickerComponentNgFactory*/get _MaterialDateTimePickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDateTimePickerComponent()).new("material-date-time-picker", dart.fn(material_datepicker__material_date_time_picker$46template.viewFactory_MaterialDateTimePickerComponentHost0, AppViewAndintToAppViewOfMaterialDateTimePickerComponent())));
    }
  });
  dart.copyProperties(material_datepicker__material_date_time_picker$46template, {
    get MaterialDateTimePickerComponentNgFactory() {
      return material_datepicker__material_date_time_picker$46template._MaterialDateTimePickerComponentNgFactory;
    }
  });
  dart.defineLazy(material_datepicker__material_date_time_picker$46template, {
    /*material_datepicker__material_date_time_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_date_time_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_date_time_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_date_time_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent), material_datepicker__material_date_time_picker$46template.MaterialDateTimePickerComponentNgFactory);
    angular$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_datepicker__material_datepicker$46template.initReflector();
    material_datepicker__material_time_picker$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_input__material_input$46template.initReflector();
    model__date__date$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_time_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_date_time_picker.template.dart": material_datepicker__material_date_time_picker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_date_time_picker.template.dart"],"names":[],"mappings":"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","file":"material_date_time_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_time_picker$46template: material_datepicker__material_date_time_picker$46template
  };
});

//# sourceMappingURL=material_date_time_picker.template.ddc.js.map
