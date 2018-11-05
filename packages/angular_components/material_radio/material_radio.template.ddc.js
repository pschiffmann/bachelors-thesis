define(['dart_sdk', 'packages/angular_components/material_radio/material_radio_group.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_radio/material_radio', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_radio/material_radio.scss.css.shim', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, material_radio_group$46scss$46css, view_type, change_detection, material_radio, modules, ng_zone, angular, focus, selection_model, disposer, angular_forms, material_radio$46scss$46css, material_icon, material_icon$, material_ripple, material_ripple$, has_disabled, has_disabled$, icon, events) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_radio__material_radio_group$46scss$46css$46shim = material_radio_group$46scss$46css.material_radio__material_radio_group$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_radio__material_radio_group = material_radio.material_radio__material_radio_group;
  const material_radio__material_radio = material_radio.material_radio__material_radio;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const material_radio__material_radio$46scss$46css$46shim = material_radio$46scss$46css.material_radio__material_radio$46scss$46css$46shim;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const _root = Object.create(null);
  const material_radio__material_radio_group$46template = Object.create(_root);
  const material_radio__material_radio$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio__material_radio.MaterialRadioComponent)))();
  let ComponentRefOfMaterialRadioGroupComponent = () => (ComponentRefOfMaterialRadioGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio_group.MaterialRadioGroupComponent)))();
  let AppViewOfMaterialRadioGroupComponent = () => (AppViewOfMaterialRadioGroupComponent = dart.constFn(src__core__linker__app_view.AppView$(material_radio__material_radio_group.MaterialRadioGroupComponent)))();
  let AppViewAndintToAppViewOfMaterialRadioGroupComponent = () => (AppViewAndintToAppViewOfMaterialRadioGroupComponent = dart.constFn(dart.fnType(AppViewOfMaterialRadioGroupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialRadioGroupComponent = () => (ComponentFactoryOfMaterialRadioGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_radio__material_radio_group.MaterialRadioGroupComponent)))();
  let AppViewOfMaterialRadioComponent = () => (AppViewOfMaterialRadioComponent = dart.constFn(src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent)))();
  let AppViewAndintToAppViewOfMaterialRadioComponent = () => (AppViewAndintToAppViewOfMaterialRadioComponent = dart.constFn(dart.fnType(AppViewOfMaterialRadioComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialRadioComponent = () => (ComponentRefOfMaterialRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent)))();
  let ComponentFactoryOfMaterialRadioComponent = () => (ComponentFactoryOfMaterialRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_radio__material_radio.MaterialRadioComponent)))();
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template.styles$MaterialRadioGroupComponent*/get styles$MaterialRadioGroupComponent() {
      return [material_radio__material_radio_group$46scss$46css$46shim.styles];
    }
  });
  let const$;
  material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0 = class ViewMaterialRadioGroupComponent0 extends src__core__linker__app_view.AppView$(material_radio__material_radio_group.MaterialRadioGroupComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new = function(parentView, parentIndex) {
    material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-radio-group"));
    this.createAttr(this.rootEl, "role", material_radio__material_radio_group.MaterialRadioGroupComponent.role);
    this.rootEl.tabIndex = material_radio__material_radio_group.MaterialRadioGroupComponent.tabIndex;
    let t = material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._renderType;
    t == null ? material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_radio/material_radio_group.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_radio__material_radio_group$46template.styles$MaterialRadioGroupComponent) : t;
    this.setupComponentType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._renderType);
  }).prototype = material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.prototype;
  dart.addTypeTests(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0);
  dart.setMethodSignature(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio_group.MaterialRadioGroupComponent), [])
  }));
  dart.defineLazy(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0, {
    /*material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_radio__material_radio_group$46template.viewFactory_MaterialRadioGroupComponent0 = function(parentView, parentIndex) {
    return new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template.styles$MaterialRadioGroupComponentHost*/get styles$MaterialRadioGroupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialRadioGroupComponent_0_5 = Symbol('_MaterialRadioGroupComponent_0_5');
  material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0 = class _ViewMaterialRadioGroupComponentHost0 extends src__core__linker__app_view.AppView$(material_radio__material_radio_group.MaterialRadioGroupComponent) {
    build() {
      this[_compView_0] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialRadioGroupComponent_0_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      this[_MaterialRadioGroupComponent_0_5].radioComponents = JSArrayOfMaterialRadioComponent().of([]);
      this[_compView_0].create(this[_MaterialRadioGroupComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialRadioGroupComponent()).new(0, this, this.rootEl, this[_MaterialRadioGroupComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 0 === nodeIndex) {
        return this[_MaterialRadioGroupComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialRadioGroupComponent_0_5].ngAfterContentInit();
        }
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRadioGroupComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRadioGroupComponent_0_5] = null;
    material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.prototype;
  dart.addTypeTests(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0);
  dart.setMethodSignature(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio_group.MaterialRadioGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, () => ({
    __proto__: dart.getFields(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_0_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent)
  }));
  material_radio__material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0 = function(parentView, parentIndex) {
    return new material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template._MaterialRadioGroupComponentNgFactory*/get _MaterialRadioGroupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialRadioGroupComponent()).new("material-radio-group", dart.fn(material_radio__material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0, AppViewAndintToAppViewOfMaterialRadioGroupComponent())));
    }
  });
  dart.copyProperties(material_radio__material_radio_group$46template, {
    get MaterialRadioGroupComponentNgFactory() {
      return material_radio__material_radio_group$46template._MaterialRadioGroupComponentNgFactory;
    }
  });
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_radio__material_radio_group$46template.initReflector = function() {
    if (dart.test(material_radio__material_radio_group$46template._visited)) {
      return;
    }
    material_radio__material_radio_group$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent), material_radio__material_radio_group$46template.MaterialRadioGroupComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    material_radio__material_radio$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template.styles$MaterialRadioComponent*/get styles$MaterialRadioComponent() {
      return [material_radio__material_radio$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialIconComponent_1_5 = Symbol('_MaterialIconComponent_1_5');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _el_3 = Symbol('_el_3');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  let const$0;
  material_radio__material_radio$46template.ViewMaterialRadioComponent0 = class ViewMaterialRadioComponent0 extends src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = "icon-container";
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.createAttr(this[_el_1], "aria-hidden", "true");
      this[_el_1].className = "icon";
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_radio__material_radio$46template.viewFactory_MaterialRadioComponent1, AppViewAndintToAppViewOfMaterialRadioComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_3].className = "content";
      this.addShimC(this[_el_3]);
      this.project(this[_el_3], 0);
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyDown')));
      _rootEl[$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyUp')));
      _rootEl[$addEventListener]("focus", this.eventHandler0(html.Event, dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(_ctx, 'onBlur')));
      _rootEl[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_3 = _ctx.icon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialIconComponent_1_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.disabled);
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.showFocus;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(this[_el_0], "focus", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateClass(this[_el_0], "checked", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateClass(this[_el_0], "disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.role == null)) {
          this.setAttr(this.rootEl, "role", this.ctx.role == null ? null : dart.toString(this.ctx.role));
        }
      }
      let currVal_5 = this.ctx.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this.setAttr(this.rootEl, "aria-checked", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = this.ctx.tabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this.setAttr(this.rootEl, "tabindex", currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = this.ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this.updateElemClass(this.rootEl, "disabled", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = this.ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this.setAttr(this.rootEl, "aria-disabled", currVal_9 == null ? null : dart.toString(currVal_9));
        this[_expr_9] = currVal_9;
      }
    }
  };
  (material_radio__material_radio$46template.ViewMaterialRadioComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_el_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    material_radio__material_radio$46template.ViewMaterialRadioComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-radio"));
    this.rootEl.className = material_radio__material_radio.MaterialRadioComponent.hostClass;
    let t = material_radio__material_radio$46template.ViewMaterialRadioComponent0._renderType;
    t == null ? material_radio__material_radio$46template.ViewMaterialRadioComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_radio/material_radio.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_radio__material_radio$46template.styles$MaterialRadioComponent) : t;
    this.setupComponentType(material_radio__material_radio$46template.ViewMaterialRadioComponent0._renderType);
  }).prototype = material_radio__material_radio$46template.ViewMaterialRadioComponent0.prototype;
  dart.addTypeTests(material_radio__material_radio$46template.ViewMaterialRadioComponent0);
  dart.setMethodSignature(material_radio__material_radio$46template.ViewMaterialRadioComponent0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio$46template.ViewMaterialRadioComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_radio__material_radio$46template.ViewMaterialRadioComponent0, () => ({
    __proto__: dart.getFields(material_radio__material_radio$46template.ViewMaterialRadioComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_3]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_radio__material_radio$46template.ViewMaterialRadioComponent0, {
    /*material_radio__material_radio$46template.ViewMaterialRadioComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_radio__material_radio$46template.viewFactory_MaterialRadioComponent0 = function(parentView, parentIndex) {
    return new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(parentView, parentIndex);
  };
  const _compView_0$ = Symbol('_compView_0');
  const _MaterialRippleComponent_0_5 = Symbol('_MaterialRippleComponent_0_5');
  material_radio__material_radio$46template._ViewMaterialRadioComponent1 = class _ViewMaterialRadioComponent1 extends src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent) {
    build() {
      this[_compView_0$] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      this[_el_0] = this[_compView_0$].rootEl;
      this[_el_0].className = "ripple";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRippleComponent_0_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0$].create(this[_MaterialRippleComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio__material_radio$46template._ViewMaterialRadioComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0$] = null;
    this[_MaterialRippleComponent_0_5] = null;
    material_radio__material_radio$46template._ViewMaterialRadioComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_radio__material_radio$46template.ViewMaterialRadioComponent0._renderType;
  }).prototype = material_radio__material_radio$46template._ViewMaterialRadioComponent1.prototype;
  dart.addTypeTests(material_radio__material_radio$46template._ViewMaterialRadioComponent1);
  dart.setMethodSignature(material_radio__material_radio$46template._ViewMaterialRadioComponent1, () => ({
    __proto__: dart.getMethods(material_radio__material_radio$46template._ViewMaterialRadioComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_radio__material_radio$46template._ViewMaterialRadioComponent1, () => ({
    __proto__: dart.getFields(material_radio__material_radio$46template._ViewMaterialRadioComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_0_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent)
  }));
  material_radio__material_radio$46template.viewFactory_MaterialRadioComponent1 = function(parentView, parentIndex) {
    return new material_radio__material_radio$46template._ViewMaterialRadioComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template.styles$MaterialRadioComponentHost*/get styles$MaterialRadioComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialRadioComponent_0_5 = Symbol('_MaterialRadioComponent_0_5');
  material_radio__material_radio$46template._ViewMaterialRadioComponentHost0 = class _ViewMaterialRadioComponentHost0 extends src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent) {
    build() {
      this[_compView_0$] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(this.rootEl, this[_compView_0$].ref, material_radio__material_radio_group.MaterialRadioGroupComponent._check(this.injectorGet(dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent), this.viewData.parentIndex, null)), null, null);
      this[_compView_0$].create(this[_MaterialRadioComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialRadioComponent()).new(0, this, this.rootEl, this[_MaterialRadioComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialRadioComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialRadioComponent_0_5] = null;
    material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.prototype;
  dart.addTypeTests(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0);
  dart.setMethodSignature(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0, () => ({
    __proto__: dart.getFields(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent)
  }));
  material_radio__material_radio$46template.viewFactory_MaterialRadioComponentHost0 = function(parentView, parentIndex) {
    return new material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template._MaterialRadioComponentNgFactory*/get _MaterialRadioComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialRadioComponent()).new("material-radio", dart.fn(material_radio__material_radio$46template.viewFactory_MaterialRadioComponentHost0, AppViewAndintToAppViewOfMaterialRadioComponent())));
    }
  });
  dart.copyProperties(material_radio__material_radio$46template, {
    get MaterialRadioComponentNgFactory() {
      return material_radio__material_radio$46template._MaterialRadioComponentNgFactory;
    }
  });
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_radio__material_radio$46template.initReflector = function() {
    if (dart.test(material_radio__material_radio$46template._visited)) {
      return;
    }
    material_radio__material_radio$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_radio__material_radio.MaterialRadioComponent), material_radio__material_radio$46template.MaterialRadioComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_radio__material_radio_group$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    model__ui__icon$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_radio/material_radio.template.ddc", {
    "package:angular_components/material_radio/material_radio_group.template.dart": material_radio__material_radio_group$46template,
    "package:angular_components/material_radio/material_radio.template.dart": material_radio__material_radio$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_radio_group.template.dart","material_radio.template.dart"],"names":[],"mappings":"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","file":"material_radio.template.ddc.js"}');
  // Exports:
  return {
    material_radio__material_radio_group$46template: material_radio__material_radio_group$46template,
    material_radio__material_radio$46template: material_radio__material_radio$46template
  };
});

//# sourceMappingURL=material_radio.template.ddc.js.map
