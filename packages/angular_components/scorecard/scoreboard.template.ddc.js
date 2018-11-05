define(['dart_sdk', 'packages/angular_components/scorecard/scoreboard.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/scorecard/scoreboard', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/scorecard/scorecard_bar', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/scorecard/scorecard', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/color/palette.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/scorecard/scorecard.template', 'packages/angular_components/scorecard/scorecard_bar.template'], function(dart_sdk, scoreboard$46scss$46css, view_type, change_detection, modules, scoreboard, dom_service, scorecard_bar, material_button, dark_theme, material_button$, material_icon, material_icon$, button_decorator, has_disabled, scorecard, angular, selection_model, angular_2, palette, disposer, scorecard$, scorecard_bar$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scorecard__scoreboard$46scss$46css$46shim = scoreboard$46scss$46css.scorecard__scoreboard$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const scorecard__scoreboard = scoreboard.scorecard__scoreboard;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const scorecard__scorecard_bar = scorecard_bar.scorecard__scorecard_bar;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const scorecard__scorecard = scorecard.scorecard__scorecard;
  const angular$46template = angular.angular$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const utils__browser__dom_service__angular_2$46template = angular_2.utils__browser__dom_service__angular_2$46template;
  const utils__color__palette$46template = palette.utils__color__palette$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const scorecard__scorecard$46template = scorecard$.scorecard__scorecard$46template;
  const scorecard__scorecard_bar$46template = scorecard_bar$.scorecard__scorecard_bar$46template;
  const _root = Object.create(null);
  const scorecard__scoreboard$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfScoreboardComponent = () => (AppViewOfScoreboardComponent = dart.constFn(src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent)))();
  let AppViewAndintToAppViewOfScoreboardComponent = () => (AppViewAndintToAppViewOfScoreboardComponent = dart.constFn(dart.fnType(AppViewOfScoreboardComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfScorecardComponent = () => (JSArrayOfScorecardComponent = dart.constFn(_interceptors.JSArray$(scorecard__scorecard.ScorecardComponent)))();
  let ComponentRefOfScoreboardComponent = () => (ComponentRefOfScoreboardComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent)))();
  let ComponentFactoryOfScoreboardComponent = () => (ComponentFactoryOfScoreboardComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(scorecard__scoreboard.ScoreboardComponent)))();
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template.styles$ScoreboardComponent*/get styles$ScoreboardComponent() {
      return [scorecard__scoreboard$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _el_2 = Symbol('_el_2');
  const _ScorecardBarDirective_2_5 = Symbol('_ScorecardBarDirective_2_5');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  let const$0;
  scorecard__scoreboard$46template.ViewScoreboardComponent0 = class ViewScoreboardComponent0 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = "acx-scoreboard";
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(scorecard__scoreboard$46template.viewFactory_ScoreboardComponent1, AppViewAndintToAppViewOfScoreboardComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = "scorecard-bar";
      this.createAttr(this[_el_2], "scorecardBar", "");
      this.addShimC(this[_el_2]);
      this[_ScorecardBarDirective_2_5] = new scorecard__scorecard_bar.ScorecardBarDirective.new(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_el_2], core.bool._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex, null)));
      this.project(this[_el_2], 0);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(scorecard__scoreboard$46template.viewFactory_ScoreboardComponent2, AppViewAndintToAppViewOfScoreboardComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this.ctx.scorecardBar = this[_ScorecardBarDirective_2_5];
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = _ctx.isScrollable;
      let currVal_3 = _ctx.isVertical;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_ScorecardBarDirective_2_5].isVertical = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ScorecardBarDirective_2_5].ngOnInit();
      }
      this[_NgIf_3_9].ngIf = _ctx.isScrollable;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      let currVal_0 = !dart.test(_ctx.isVertical);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(this[_el_0], "acx-scoreboard-horizontal", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isVertical;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateClass(this[_el_0], "acx-scoreboard-vertical", currVal_1);
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_ScorecardBarDirective_2_5].ngAfterViewChecked();
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
      this[_ScorecardBarDirective_2_5].ngOnDestroy();
    }
  };
  (scorecard__scoreboard$46template.ViewScoreboardComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_el_2] = null;
    this[_ScorecardBarDirective_2_5] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    scorecard__scoreboard$46template.ViewScoreboardComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("acx-scoreboard"));
    let t = scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType;
    t == null ? scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/scorecard/scoreboard.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, scorecard__scoreboard$46template.styles$ScoreboardComponent) : t;
    this.setupComponentType(scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType);
  }).prototype = scorecard__scoreboard$46template.ViewScoreboardComponent0.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template.ViewScoreboardComponent0);
  dart.setMethodSignature(scorecard__scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template.ViewScoreboardComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template.ViewScoreboardComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_2]: dart.fieldType(html.DivElement),
    [_ScorecardBarDirective_2_5]: dart.fieldType(scorecard__scorecard_bar.ScorecardBarDirective),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(scorecard__scoreboard$46template.ViewScoreboardComponent0, {
    /*scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponent0 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template.ViewScoreboardComponent0.new(parentView, parentIndex);
  };
  const _compView_0 = Symbol('_compView_0');
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialIconComponent_1_5 = Symbol('_MaterialIconComponent_1_5');
  const _expr_2 = Symbol('_expr_2');
  let const$1;
  scorecard__scoreboard$46template._ViewScoreboardComponent1 = class _ViewScoreboardComponent1 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "scroll-button scroll-back-button";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), this[_AcxDarkTheme_0_5], this[_compView_0].ref, null);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfElement().of([this[_el_1]])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'scrollBack')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6].ngOnInit();
      }
      changed = false;
      let currVal_2 = _ctx.backIconType;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarStart;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0], "hide", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      if (firstCheck) {
        if (!(scorecard__scoreboard.ScoreboardComponent.scrollScorecardBarBack == null)) {
          this.setAttr(this[_el_1], "aria-label", (() => {
            let t = scorecard__scoreboard.ScoreboardComponent.scrollScorecardBarBack;
            return t == null ? null : dart.toString(t);
          })());
        }
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
    }
  };
  (scorecard__scoreboard$46template._ViewScoreboardComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    scorecard__scoreboard$46template._ViewScoreboardComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType;
  }).prototype = scorecard__scoreboard$46template._ViewScoreboardComponent1.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template._ViewScoreboardComponent1);
  dart.setMethodSignature(scorecard__scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template._ViewScoreboardComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template._ViewScoreboardComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponent1 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template._ViewScoreboardComponent1.new(parentView, parentIndex);
  };
  let const$2;
  scorecard__scoreboard$46template._ViewScoreboardComponent2 = class _ViewScoreboardComponent2 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "scroll-button scroll-forward-button";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), this[_AcxDarkTheme_0_5], this[_compView_0].ref, null);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfElement().of([this[_el_1]])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'scrollForward')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6].ngOnInit();
      }
      changed = false;
      let currVal_2 = _ctx.forwardIconType;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarEnd;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0], "hide", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      if (firstCheck) {
        if (!(scorecard__scoreboard.ScoreboardComponent.scrollScorecardBarForward == null)) {
          this.setAttr(this[_el_1], "aria-label", (() => {
            let t = scorecard__scoreboard.ScoreboardComponent.scrollScorecardBarForward;
            return t == null ? null : dart.toString(t);
          })());
        }
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
    }
  };
  (scorecard__scoreboard$46template._ViewScoreboardComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    scorecard__scoreboard$46template._ViewScoreboardComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType;
  }).prototype = scorecard__scoreboard$46template._ViewScoreboardComponent2.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template._ViewScoreboardComponent2);
  dart.setMethodSignature(scorecard__scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template._ViewScoreboardComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template._ViewScoreboardComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponent2 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template._ViewScoreboardComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template.styles$ScoreboardComponentHost*/get styles$ScoreboardComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ScoreboardComponent_0_5 = Symbol('_ScoreboardComponent_0_5');
  scorecard__scoreboard$46template._ViewScoreboardComponentHost0 = class _ViewScoreboardComponentHost0 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    build() {
      this[_compView_0] = new scorecard__scoreboard$46template.ViewScoreboardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ScoreboardComponent_0_5] = new scorecard__scoreboard.ScoreboardComponent.new(null, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_0].ref);
      this[_ScoreboardComponent_0_5].scoreCards = JSArrayOfScorecardComponent().of([]);
      this[_compView_0].create(this[_ScoreboardComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfScoreboardComponent()).new(0, this, this.rootEl, this[_ScoreboardComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ScoreboardComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_ScoreboardComponent_0_5].ngOnDestroy();
    }
  };
  (scorecard__scoreboard$46template._ViewScoreboardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ScoreboardComponent_0_5] = null;
    scorecard__scoreboard$46template._ViewScoreboardComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = scorecard__scoreboard$46template._ViewScoreboardComponentHost0.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template._ViewScoreboardComponentHost0);
  dart.setMethodSignature(scorecard__scoreboard$46template._ViewScoreboardComponentHost0, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template._ViewScoreboardComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scoreboard$46template._ViewScoreboardComponentHost0, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template._ViewScoreboardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(scorecard__scoreboard$46template.ViewScoreboardComponent0),
    [_ScoreboardComponent_0_5]: dart.fieldType(scorecard__scoreboard.ScoreboardComponent)
  }));
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponentHost0 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template._ViewScoreboardComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template._ScoreboardComponentNgFactory*/get _ScoreboardComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfScoreboardComponent()).new("acx-scoreboard", dart.fn(scorecard__scoreboard$46template.viewFactory_ScoreboardComponentHost0, AppViewAndintToAppViewOfScoreboardComponent())));
    }
  });
  dart.copyProperties(scorecard__scoreboard$46template, {
    get ScoreboardComponentNgFactory() {
      return scorecard__scoreboard$46template._ScoreboardComponentNgFactory;
    }
  });
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  scorecard__scoreboard$46template.initReflector = function() {
    if (dart.test(scorecard__scoreboard$46template._visited)) {
      return;
    }
    scorecard__scoreboard$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(scorecard__scoreboard.ScoreboardComponent), scorecard__scoreboard$46template.ScoreboardComponentNgFactory);
    angular$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    utils__browser__dom_service__angular_2$46template.initReflector();
    utils__color__palette$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    scorecard__scorecard$46template.initReflector();
    scorecard__scorecard_bar$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/scorecard/scoreboard.template.ddc", {
    "package:angular_components/scorecard/scoreboard.template.dart": scorecard__scoreboard$46template
  }, '{"version":3,"sourceRoot":"","sources":["scoreboard.template.dart"],"names":[],"mappings":"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","file":"scoreboard.template.ddc.js"}');
  // Exports:
  return {
    scorecard__scoreboard$46template: scorecard__scoreboard$46template
  };
});

//# sourceMappingURL=scoreboard.template.ddc.js.map
