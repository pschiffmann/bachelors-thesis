define(['dart_sdk', 'packages/angular_components/scorecard/scorecard.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/scorecard/scorecard', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/angular.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/color/color.template', 'packages/angular_components/utils/color/palette.template'], function(dart_sdk, scorecard$46scss$46css, view_type, change_detection, scorecard, modules, material_ripple, material_ripple$, material_icon, material_icon$, dom_service, angular, keyboard_only_focus_indicator, dom_service$, events, color, palette) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scorecard__scorecard$46scss$46css$46shim = scorecard$46scss$46css.scorecard__scorecard$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const scorecard__scorecard = scorecard.scorecard__scorecard;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const angular$46template = angular.angular$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const utils__color__color$46template = color.utils__color__color$46template;
  const utils__color__palette$46template = palette.utils__color__palette$46template;
  const _root = Object.create(null);
  const scorecard__scorecard$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfScorecardComponent = () => (AppViewOfScorecardComponent = dart.constFn(src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent)))();
  let AppViewAndintToAppViewOfScorecardComponent = () => (AppViewAndintToAppViewOfScorecardComponent = dart.constFn(dart.fnType(AppViewOfScorecardComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfScorecardComponent = () => (ComponentRefOfScorecardComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent)))();
  let ComponentFactoryOfScorecardComponent = () => (ComponentFactoryOfScorecardComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(scorecard__scorecard.ScorecardComponent)))();
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template.styles$ScorecardComponent*/get styles$ScorecardComponent() {
      return [scorecard__scorecard$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _el_3 = Symbol('_el_3');
  const _text_4 = Symbol('_text_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _appEl_9 = Symbol('_appEl_9');
  const _NgIf_9_9 = Symbol('_NgIf_9_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_14 = Symbol('_expr_14');
  let const$;
  scorecard__scorecard$46template.ViewScorecardComponent0 = class ViewScorecardComponent0 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent1, AppViewAndintToAppViewOfScorecardComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "h3", parentRenderNode);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this.project(this[_el_1], 0);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, "h2", parentRenderNode);
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new("");
      this[_el_3][$append](this[_text_4]);
      this.project(this[_el_3], 1);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent2, AppViewAndintToAppViewOfScorecardComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _text_6 = html.Text.new("\n");
      parentRenderNode[$append](_text_6);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, null, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent3, AppViewAndintToAppViewOfScorecardComponent()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = html.Text.new("\n");
      parentRenderNode[$append](_text_8);
      let _anchor_9 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_9);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, null, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent5, AppViewAndintToAppViewOfScorecardComponent()));
      this[_NgIf_9_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _text_10 = html.Text.new("\n");
      parentRenderNode[$append](_text_10);
      this.project(parentRenderNode, 3);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(_ctx, 'resetOutline')));
      _rootEl[$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(_ctx, 'resetOutline')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(_ctx, 'hideOutline')));
      _rootEl[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeypress')));
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.selectable;
      this[_NgIf_5_9].ngIf = _ctx.suggestionBefore != null;
      this[_NgIf_7_9].ngIf = _ctx.description != null;
      this[_NgIf_9_9].ngIf = _ctx.suggestionAfter != null;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      let l = _ctx.label;
      let currVal_1 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_2][$text] = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.tooltip;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.setProp(this[_el_3], "title", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let l$ = _ctx.value;
      let currVal_3 = l$ != null ? l$ : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_text_4][$text] = currVal_3;
        this[_expr_3] = currVal_3;
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_5];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_7];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_9];
      t$1 == null ? null : t$1.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_7 = this.ctx.isChangePositive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this.updateElemClass(this.rootEl, "is-change-positive", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = this.ctx.isChangeNegative;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this.updateElemClass(this.rootEl, "is-change-negative", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = this.ctx.selectable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this.updateElemClass(this.rootEl, "selectable", currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = this.ctx.hostTabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this.setAttr(this.rootEl, "tabindex", currVal_10 == null ? null : dart.toString(currVal_10));
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = this.ctx.hostRole;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this.setAttr(this.rootEl, "role", currVal_11 == null ? null : dart.toString(currVal_11));
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = this.ctx.backgroundStyle;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this.rootEl.style[$setProperty]("background", currVal_12 == null ? null : dart.toString(currVal_12));
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = this.ctx.extraBig;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this.updateElemClass(this.rootEl, "extra-big", currVal_13);
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = this.ctx.selected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this.updateElemClass(this.rootEl, "selected", currVal_14);
        this[_expr_14] = currVal_14;
      }
    }
  };
  (scorecard__scorecard$46template.ViewScorecardComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    scorecard__scorecard$46template.ViewScorecardComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("acx-scorecard"));
    this.rootEl.className = scorecard__scorecard.ScorecardComponent.hostClass;
    let t = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
    t == null ? scorecard__scorecard$46template.ViewScorecardComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/scorecard/scorecard.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, scorecard__scorecard$46template.styles$ScorecardComponent) : t;
    this.setupComponentType(scorecard__scorecard$46template.ViewScorecardComponent0._renderType);
  }).prototype = scorecard__scorecard$46template.ViewScorecardComponent0.prototype;
  dart.addTypeTests(scorecard__scorecard$46template.ViewScorecardComponent0);
  dart.setMethodSignature(scorecard__scorecard$46template.ViewScorecardComponent0, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template.ViewScorecardComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template.ViewScorecardComponent0, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template.ViewScorecardComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_9_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(core.bool),
    [_expr_14]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(scorecard__scorecard$46template.ViewScorecardComponent0, {
    /*scorecard__scorecard$46template.ViewScorecardComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  scorecard__scorecard$46template.viewFactory_ScorecardComponent0 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template.ViewScorecardComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialRippleComponent_0_5 = Symbol('_MaterialRippleComponent_0_5');
  scorecard__scorecard$46template._ViewScorecardComponent1 = class _ViewScorecardComponent1 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      this[_compView_0] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRippleComponent_0_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialRippleComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    scorecard__scorecard$46template._ViewScorecardComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent1.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent1);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent1, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent1, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_0_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent1 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent1.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  scorecard__scorecard$46template._ViewScorecardComponent2 = class _ViewScorecardComponent2 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "suggestion before";
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.suggestionBefore;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    scorecard__scorecard$46template._ViewScorecardComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent2.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent2);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent2, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent2, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent2 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent2.new(parentView, parentIndex);
  };
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _text_3 = Symbol('_text_3');
  scorecard__scorecard$46template._ViewScorecardComponent3 = class _ViewScorecardComponent3 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "description";
      this.addShimE(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent4, AppViewAndintToAppViewOfScorecardComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new(" ");
      this[_el_0][$append](_text_2);
      this[_text_3] = html.Text.new("");
      this[_el_0][$append](this[_text_3]);
      let _text_4 = html.Text.new("  ");
      this[_el_0][$append](_text_4);
      this.project(this[_el_0], 2);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = dart.test(_ctx.changeGlyph) && _ctx.description !== "" && !dart.test(_ctx.isChangeNeutral);
      this[_appEl_1].detectChangesInNestedViews();
      let l = _ctx.description;
      let currVal_1 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_3][$text] = currVal_1;
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_text_3] = null;
    this[_expr_1] = null;
    scorecard__scorecard$46template._ViewScorecardComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent3.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent3);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent3, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent3, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent3 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent3.new(parentView, parentIndex);
  };
  const _MaterialIconComponent_0_5 = Symbol('_MaterialIconComponent_0_5');
  scorecard__scorecard$46template._ViewScorecardComponent4 = class _ViewScorecardComponent4 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "change-glyph";
      this.createAttr(this[_el_0], "size", "small");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.changeGlyphIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialIconComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
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
  (scorecard__scorecard$46template._ViewScorecardComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    scorecard__scorecard$46template._ViewScorecardComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent4.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent4);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent4, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent4, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent4 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent4.new(parentView, parentIndex);
  };
  scorecard__scorecard$46template._ViewScorecardComponent5 = class _ViewScorecardComponent5 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "suggestion after";
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.suggestionAfter;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    scorecard__scorecard$46template._ViewScorecardComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent5.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent5);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent5, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent5, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent5 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent5.new(parentView, parentIndex);
  };
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template.styles$ScorecardComponentHost*/get styles$ScorecardComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ScorecardComponent_0_5 = Symbol('_ScorecardComponent_0_5');
  scorecard__scorecard$46template._ViewScorecardComponentHost0 = class _ViewScorecardComponentHost0 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      this[_compView_0] = new scorecard__scorecard$46template.ViewScorecardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ScorecardComponent_0_5] = new scorecard__scorecard.ScorecardComponent.new(this[_compView_0].ref, this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_ScorecardComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfScorecardComponent()).new(0, this, this.rootEl, this[_ScorecardComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ScorecardComponent_0_5] = null;
    scorecard__scorecard$46template._ViewScorecardComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponentHost0.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponentHost0);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponentHost0, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponentHost0, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(scorecard__scorecard$46template.ViewScorecardComponent0),
    [_ScorecardComponent_0_5]: dart.fieldType(scorecard__scorecard.ScorecardComponent)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponentHost0 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template._ScorecardComponentNgFactory*/get _ScorecardComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfScorecardComponent()).new("acx-scorecard", dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponentHost0, AppViewAndintToAppViewOfScorecardComponent())));
    }
  });
  dart.copyProperties(scorecard__scorecard$46template, {
    get ScorecardComponentNgFactory() {
      return scorecard__scorecard$46template._ScorecardComponentNgFactory;
    }
  });
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  scorecard__scorecard$46template.initReflector = function() {
    if (dart.test(scorecard__scorecard$46template._visited)) {
      return;
    }
    scorecard__scorecard$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(scorecard__scorecard.ScorecardComponent), scorecard__scorecard$46template.ScorecardComponentNgFactory);
    angular$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    utils__color__color$46template.initReflector();
    utils__color__palette$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/scorecard/scorecard.template.ddc", {
    "package:angular_components/scorecard/scorecard.template.dart": scorecard__scorecard$46template
  }, '{"version":3,"sourceRoot":"","sources":["scorecard.template.dart"],"names":[],"mappings":"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","file":"scorecard.template.ddc.js"}');
  // Exports:
  return {
    scorecard__scorecard$46template: scorecard__scorecard$46template
  };
});

//# sourceMappingURL=scorecard.template.ddc.js.map
