define(['dart_sdk', 'packages/angular_components/material_stepper/material_stepper.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_stepper/material_stepper', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/utils/angular/scroll_host/angular_2', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/material_stepper/material_step', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/laminate/portal/portal', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/laminate/portal/portal.template', 'packages/angular_components/material_stepper/common.template', 'packages/angular_components/material_stepper/material_step.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, material_stepper$46scss$46css, view_type, change_detection, material_stepper, modules, scroll_host_interface, angular_2, button_decorator, button_decorator$, material_step, material_icon, material_icon$, portal, material_yes_no_buttons, material_yes_no_buttons$, has_disabled, angular, portal$, common, material_step$, async_action, properties, angular_2$, events) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_stepper__material_stepper$46scss$46css$46shim = material_stepper$46scss$46css.material_stepper__material_stepper$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_stepper__material_stepper = material_stepper.material_stepper__material_stepper;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__utils__angular__scroll_host__scroll_host_interface = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const utils__angular__scroll_host__angular_2 = angular_2.utils__angular__scroll_host__angular_2;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const material_stepper__material_step = material_step.material_stepper__material_step;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const laminate__portal__portal = portal.laminate__portal__portal;
  const material_yes_no_buttons__material_yes_no_buttons$46template = material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons$46template;
  const material_yes_no_buttons__material_yes_no_buttons = material_yes_no_buttons$.material_yes_no_buttons__material_yes_no_buttons;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular$46template = angular.angular$46template;
  const laminate__portal__portal$46template = portal$.laminate__portal__portal$46template;
  const material_stepper__common$46template = common.material_stepper__common$46template;
  const material_stepper__material_step$46template = material_step$.material_stepper__material_step$46template;
  const model__action__async_action$46template = async_action.model__action__async_action$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__angular__scroll_host__angular_2$46template = angular_2$.utils__angular__scroll_host__angular_2$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const _root = Object.create(null);
  const material_stepper__material_stepper$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $length = dartx.length;
  const $toString = dartx.toString;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialStepperComponent = () => (AppViewOfMaterialStepperComponent = dart.constFn(src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent)))();
  let AppViewAndintToAppViewOfMaterialStepperComponent = () => (AppViewAndintToAppViewOfMaterialStepperComponent = dart.constFn(dart.fnType(AppViewOfMaterialStepperComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfStepDirective = () => (JSArrayOfStepDirective = dart.constFn(_interceptors.JSArray$(material_stepper__material_step.StepDirective)))();
  let ComponentRefOfMaterialStepperComponent = () => (ComponentRefOfMaterialStepperComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent)))();
  let ComponentFactoryOfMaterialStepperComponent = () => (ComponentFactoryOfMaterialStepperComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_stepper__material_stepper.MaterialStepperComponent)))();
  dart.defineLazy(material_stepper__material_stepper$46template, {
    /*material_stepper__material_stepper$46template.styles$MaterialStepperComponent*/get styles$MaterialStepperComponent() {
      return [material_stepper__material_stepper$46scss$46css$46shim.styles];
    }
  });
  const _el_1 = Symbol('_el_1');
  const _StickyElementDirective_1_5 = Symbol('_StickyElementDirective_1_5');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _el_8 = Symbol('_el_8');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  let const$;
  material_stepper__material_stepper$46template.ViewMaterialStepperComponent0 = class ViewMaterialStepperComponent0 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_1].className = "stepper stepper-body mixin";
      this.addShimC(this[_el_1]);
      this[_StickyElementDirective_1_5] = new utils__angular__scroll_host__angular_2.StickyElementDirective.new(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost._check(this.parentView.injectorGet(dart.wrapType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost), this.viewData.parentIndex)), this[_el_1]);
      let _text_2 = html.Text.new("\n  ");
      this[_el_1][$append](_text_2);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_1][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent1, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = html.Text.new("\n");
      this[_el_1][$append](_text_4);
      let _text_5 = html.Text.new("\n");
      parentRenderNode[$append](_text_5);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent12, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = html.Text.new("\n");
      parentRenderNode[$append](_text_7);
      this[_el_8] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_8]);
      let _text_9 = html.Text.new("\n");
      parentRenderNode[$append](_text_9);
      this.ctx.stepperNativeElement = this[_el_1];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_afterStepperElement = this[_el_8];
      let currVal_2 = local_afterStepperElement;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_StickyElementDirective_1_5].endElement = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.stickyHeader;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_StickyElementDirective_1_5].sticky = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.steps;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_NgFor_3_9].ngForOf = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_NgIf_6_9].ngIf = !dart.test(_ctx.shouldInlineContent) && !dart.test(_ctx.stepperDone) && dart.notNull(_ctx.steps[$length]) > 0;
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_1], "orientation", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_1], "size", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_StickyElementDirective_1_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_6];
      t$ == null ? null : t$.destroyNestedViews();
      this[_StickyElementDirective_1_5].ngOnDestroy();
    }
  };
  (material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.new = function(parentView, parentIndex) {
    this[_el_1] = null;
    this[_StickyElementDirective_1_5] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_el_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-stepper"));
    this.rootEl.className = material_stepper__material_stepper.MaterialStepperComponent.hostClass;
    let t = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
    t == null ? material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_stepper/material_stepper.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_stepper__material_stepper$46template.styles$MaterialStepperComponent) : t;
    this.setupComponentType(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType);
  }).prototype = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0);
  dart.setMethodSignature(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.__proto__),
    [_el_1]: dart.fieldType(html.DivElement),
    [_StickyElementDirective_1_5]: dart.fieldType(utils__angular__scroll_host__angular_2.StickyElementDirective),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_8]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0, {
    /*material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent0 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _el_3 = Symbol('_el_3');
  const _text_5 = Symbol('_text_5');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _el_11 = Symbol('_el_11');
  const _el_13 = Symbol('_el_13');
  const _text_15 = Symbol('_text_15');
  const _el_18 = Symbol('_el_18');
  const _text_20 = Symbol('_text_20');
  const _appEl_22 = Symbol('_appEl_22');
  const _NgIf_22_9 = Symbol('_NgIf_22_9');
  const _appEl_26 = Symbol('_appEl_26');
  const _NgIf_26_9 = Symbol('_NgIf_26_9');
  const _appEl_28 = Symbol('_appEl_28');
  const _NgIf_28_9 = Symbol('_NgIf_28_9');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_14 = Symbol('_expr_14');
  const _expr_15 = Symbol('_expr_15');
  const _expr_16 = Symbol('_expr_16');
  const _expr_17 = Symbol('_expr_17');
  const _expr_18 = Symbol('_expr_18');
  const _expr_19 = Symbol('_expr_19');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent1 = class _ViewMaterialStepperComponent1 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "stepper-step";
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      let _text_1 = html.Text.new("\n    ");
      this[_el_0][$append](_text_1);
      let _text_2 = html.Text.new("\n        ");
      this[_el_0][$append](_text_2);
      this[_el_3] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this[_el_3].className = "stepper-step-index";
      this.addShimE(this[_el_3]);
      let _text_4 = html.Text.new("\n          ");
      this[_el_3][$append](_text_4);
      this[_text_5] = html.Text.new("");
      this[_el_3][$append](this[_text_5]);
      let _text_6 = html.Text.new("\n          ");
      this[_el_3][$append](_text_6);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_3][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 3, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent2, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = html.Text.new("\n        ");
      this[_el_3][$append](_text_8);
      let _text_9 = html.Text.new("\n    ");
      this[_el_0][$append](_text_9);
      let _text_10 = html.Text.new("\n    ");
      this[_el_0][$append](_text_10);
      this[_el_11] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_11].className = "stepper-step-header";
      this.addShimC(this[_el_11]);
      let _text_12 = html.Text.new("\n      ");
      this[_el_11][$append](_text_12);
      this[_el_13] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_11]);
      this[_el_13].className = "stepper-step-name";
      this.addShimE(this[_el_13]);
      let _text_14 = html.Text.new("\n        ");
      this[_el_13][$append](_text_14);
      this[_text_15] = html.Text.new("");
      this[_el_13][$append](this[_text_15]);
      let _text_16 = html.Text.new("\n      ");
      this[_el_13][$append](_text_16);
      let _text_17 = html.Text.new("\n      ");
      this[_el_11][$append](_text_17);
      this[_el_18] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_11]);
      this[_el_18].className = "stepper-step-optional";
      this.addShimC(this[_el_18]);
      let _text_19 = html.Text.new("\n        ");
      this[_el_18][$append](_text_19);
      this[_text_20] = html.Text.new("");
      this[_el_18][$append](this[_text_20]);
      let _text_21 = html.Text.new("\n          ");
      this[_el_18][$append](_text_21);
      let _anchor_22 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_18][$append](_anchor_22);
      this[_appEl_22] = new src__core__linker__view_container.ViewContainer.new(22, 18, this, _anchor_22);
      let _TemplateRef_22_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_22], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent3, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgIf_22_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_22], _TemplateRef_22_8);
      let _text_23 = html.Text.new("\n      ");
      this[_el_18][$append](_text_23);
      let _text_24 = html.Text.new("\n    ");
      this[_el_11][$append](_text_24);
      let _text_25 = html.Text.new("\n    ");
      this[_el_0][$append](_text_25);
      let _anchor_26 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_26);
      this[_appEl_26] = new src__core__linker__view_container.ViewContainer.new(26, 0, this, _anchor_26);
      let _TemplateRef_26_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_26], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent4, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgIf_26_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_26], _TemplateRef_26_8);
      let _text_27 = html.Text.new("\n    ");
      this[_el_0][$append](_text_27);
      let _anchor_28 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_28);
      this[_appEl_28] = new src__core__linker__view_container.ViewContainer.new(28, 0, this, _anchor_28);
      let _TemplateRef_28_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_28], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent5, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgIf_28_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_28], _TemplateRef_28_8);
      let _text_29 = html.Text.new("\n  ");
      this[_el_0][$append](_text_29);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 29) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_step = material_stepper__material_step.StepDirective._check(this.locals[$_get]("$implicit"));
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      this[_NgIf_7_9].ngIf = local_step.complete;
      this[_NgIf_22_9].ngIf = local_step.isSelectable;
      this[_NgIf_26_9].ngIf = !dart.test(local_step.isLast);
      this[_NgIf_28_9].ngIf = dart.test(_ctx.shouldInlineContent) && !dart.test(_ctx.stepperDone);
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_22].detectChangesInNestedViews();
      this[_appEl_26].detectChangesInNestedViews();
      this[_appEl_28].detectChangesInNestedViews();
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_0], "orientation", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_0], "size", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = local_step.isSelectable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateClass(this[_el_0], "can-select", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(local_step.active);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.setAttr(this[_el_0], "active", currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__core__linker__app_view_utils.interpolate0(local_step.isSelectable);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.setAttr(this[_el_0], "selectable", currVal_4 == null ? null : dart.toString(currVal_4));
        this[_expr_4] = currVal_4;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_5 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this.setAttr(this[_el_3], "orientation", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = local_step.active;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this.setAttr(this[_el_3], "active", currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = local_step.complete;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this.setAttr(this[_el_3], "complete", currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_step.isSelectable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this.updateClass(html.HtmlElement._check(this[_el_3]), "can-select", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = src__core__linker__app_view_utils.interpolate0(dart.test(local_step.complete) ? "" : dart.notNull(local_step.index) + 1);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_text_5][$text] = core.String._check(currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_11 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this.setAttr(this[_el_11], "orientation", currVal_11 == null ? null : dart.toString(currVal_11));
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this.setAttr(this[_el_11], "size", currVal_12 == null ? null : dart.toString(currVal_12));
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = local_step.active;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this.setAttr(this[_el_13], "active", currVal_13 == null ? null : dart.toString(currVal_13));
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = local_step.complete;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this.setAttr(this[_el_13], "complete", currVal_14 == null ? null : dart.toString(currVal_14));
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = src__core__linker__app_view_utils.interpolate0(local_step.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_text_15][$text] = core.String._check(currVal_15);
        this[_expr_15] = currVal_15;
      }
      let currVal_16 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        this.setAttr(this[_el_18], "orientation", currVal_16 == null ? null : dart.toString(currVal_16));
        this[_expr_16] = currVal_16;
      }
      let currVal_17 = local_step.isOptional;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
        this.setAttr(this[_el_18], "optional", currVal_17 == null ? null : dart.toString(currVal_17));
        this[_expr_17] = currVal_17;
      }
      let currVal_18 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_18], currVal_18))) {
        this.setAttr(this[_el_18], "size", currVal_18 == null ? null : dart.toString(currVal_18));
        this[_expr_18] = currVal_18;
      }
      let currVal_19 = src__core__linker__app_view_utils.interpolate0(dart.test(local_step.isOptional) ? material_stepper__material_stepper.MaterialStepperComponent.optionalMsg : "");
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_19], currVal_19))) {
        this[_text_20][$text] = core.String._check(currVal_19);
        this[_expr_19] = currVal_19;
      }
    }
    destroyInternal() {
      let t = this[_appEl_7];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_22];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_26];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_28];
      t$1 == null ? null : t$1.destroyNestedViews();
    }
    [_handle_trigger_0_0]($event) {
      let local_step = material_stepper__material_step.StepDirective._check(this.locals[$_get]("$implicit"));
      this.ctx.jumpStep(local_step.index);
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_el_3] = null;
    this[_text_5] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_el_11] = null;
    this[_el_13] = null;
    this[_text_15] = null;
    this[_el_18] = null;
    this[_text_20] = null;
    this[_appEl_22] = null;
    this[_NgIf_22_9] = null;
    this[_appEl_26] = null;
    this[_NgIf_26_9] = null;
    this[_appEl_28] = null;
    this[_NgIf_28_9] = null;
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
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_expr_17] = null;
    this[_expr_18] = null;
    this[_expr_19] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent1);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent1, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent1, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_el_3]: dart.fieldType(html.Element),
    [_text_5]: dart.fieldType(html.Text),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_11]: dart.fieldType(html.DivElement),
    [_el_13]: dart.fieldType(html.Element),
    [_text_15]: dart.fieldType(html.Text),
    [_el_18]: dart.fieldType(html.DivElement),
    [_text_20]: dart.fieldType(html.Text),
    [_appEl_22]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_22_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_26]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_26_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_28]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_28_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_expr_16]: dart.fieldType(dart.dynamic),
    [_expr_17]: dart.fieldType(dart.dynamic),
    [_expr_18]: dart.fieldType(dart.dynamic),
    [_expr_19]: dart.fieldType(dart.dynamic)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent1 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.new(parentView, parentIndex);
  };
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _MaterialIconComponent_2_5 = Symbol('_MaterialIconComponent_2_5');
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent2 = class _ViewMaterialStepperComponent2 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("\n            ");
      this[_el_0][$append](_text_1);
      this[_compView_2] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this[_el_0][$append](this[_el_2]);
      this.createAttr(this[_el_2], "icon", "check");
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_MaterialIconComponent_2_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_2]));
      this[_compView_2].create(this[_MaterialIconComponent_2_5], []);
      let _text_3 = html.Text.new("\n          ");
      this[_el_0][$append](_text_3);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_2_5].icon = "check";
        changed = true;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_MaterialIconComponent_2_5] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent2);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent2, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent2, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_2_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent2 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent3 = class _ViewMaterialStepperComponent3 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("\n            ");
      this[_el_0][$append](_text_1);
      this[_compView_2] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this[_el_0][$append](this[_el_2]);
      this[_el_2].className = "edit-icon";
      this.createAttr(this[_el_2], "icon", "mode_edit");
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_MaterialIconComponent_2_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_2]));
      let _text_3 = html.Text.new("\n            ");
      this[_compView_2].create(this[_MaterialIconComponent_2_5], []);
      let _text_4 = html.Text.new("\n          ");
      this[_el_0][$append](_text_4);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_2_5].icon = "mode_edit";
        changed = true;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_2], "orientation", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_2], "size", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_MaterialIconComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent3);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent3, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent3, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_2_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent3 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent4 = class _ViewMaterialStepperComponent4 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "step-line";
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new("\n    ");
      this[_el_0][$append](_text_1);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_0], "orientation", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_0], "size", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent4);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent4, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent4, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent4 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.new(parentView, parentIndex);
  };
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent5 = class _ViewMaterialStepperComponent5 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "stepper-content";
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new("\n      ");
      this[_el_0][$append](_text_1);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent6, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _text_3 = html.Text.new("\n      ");
      this[_el_0][$append](_text_3);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent9, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = html.Text.new("\n      ");
      this[_el_0][$append](_text_5);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent11, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = html.Text.new("\n    ");
      this[_el_0][$append](_text_7);
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'stopPropagationOfEnterAndSpace')));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_step = material_stepper__material_step.StepDirective._check(this.parentView.locals[$_get]("$implicit"));
      this[_NgIf_2_9].ngIf = local_step.active;
      this[_NgIf_4_9].ngIf = !dart.test(local_step.active) && local_step.summaryDirective != null;
      this[_NgIf_6_9].ngIf = local_step.shouldShowSummary;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_0], "orientation", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_0], "size", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_4];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_6];
      t$0 == null ? null : t$0.destroyNestedViews();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent5);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent5, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent5, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent5 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.new(parentView, parentIndex);
  };
  const _appEl_1 = Symbol('_appEl_1');
  const _PortalHostDirective_1_9 = Symbol('_PortalHostDirective_1_9');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent6 = class _ViewMaterialStepperComponent6 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let _text_0 = html.Text.new("\n        ");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent7, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_PortalHostDirective_1_9] = new laminate__portal__portal.PortalHostDirective.new(this[_appEl_1], this[_appEl_1]);
      let _text_2 = html.Text.new("\n        ");
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent8, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = html.Text.new("\n      ");
      this.init([_text_0, this[_appEl_1], _text_2, this[_appEl_3], _text_4], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_step = material_stepper__material_step.StepDirective._check(this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_0 = _ctx.steps[$_get](local_step.index);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_PortalHostDirective_1_9].portal = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgIf_3_9].ngIf = !dart.test(_ctx.activeStep.hideButtons);
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_PortalHostDirective_1_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_0] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent6);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent6, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent6, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_PortalHostDirective_1_9]: dart.fieldType(laminate__portal__portal.PortalHostDirective),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent6 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.new(parentView, parentIndex);
  };
  let const$0;
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent7 = class _ViewMaterialStepperComponent7 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent7.new = function(parentView, parentIndex) {
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent7.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent7);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent7, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent7 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent7.new(parentView, parentIndex);
  };
  const _MaterialYesNoButtonsComponent_2_5 = Symbol('_MaterialYesNoButtonsComponent_2_5');
  const _handle_yes_2_0 = Symbol('_handle_yes_2_0');
  const _handle_no_2_1 = Symbol('_handle_no_2_1');
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent8 = class _ViewMaterialStepperComponent8 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "button-container";
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("\n          ");
      this[_el_0][$append](_text_1);
      this[_compView_2] = new material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this[_el_0][$append](this[_el_2]);
      this[_el_2].className = "stepper-yes-no-buttons";
      this.createAttr(this[_el_2], "raised", "");
      this.createAttr(this[_el_2], "yesHighlighted", "");
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_MaterialYesNoButtonsComponent_2_5] = new material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      let _text_3 = html.Text.new("\n          ");
      this[_compView_2].create(this[_MaterialYesNoButtonsComponent_2_5], []);
      let _text_4 = html.Text.new("\n        ");
      this[_el_0][$append](_text_4);
      let subscription_0 = this[_MaterialYesNoButtonsComponent_2_5].yes.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_yes_2_0)));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_2_5].no.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_no_2_1)));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialYesNoButtonsComponent_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(material_stepper__material_stepper.MaterialStepperComponent.continueMsg == null)) {
          this[_MaterialYesNoButtonsComponent_2_5].yesText = material_stepper__material_stepper.MaterialStepperComponent.continueMsg;
          changed = true;
        }
        this[_MaterialYesNoButtonsComponent_2_5].yesHighlighted = true;
        changed = true;
        this[_MaterialYesNoButtonsComponent_2_5].raised = true;
        changed = true;
      }
      let currVal_1 = _ctx.noText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialYesNoButtonsComponent_2_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_4 = _ctx.activeStep.busy;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialYesNoButtonsComponent_2_5].disabled = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = !dart.test(_ctx.activeStep.canContinue);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialYesNoButtonsComponent_2_5].yesDisabled = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = !dart.test(_ctx.activeStep.cancelHidden) && _ctx.activeStep.index !== 0;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialYesNoButtonsComponent_2_5].noDisplayed = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
    }
    [_handle_yes_2_0]($event) {
      this.ctx.stepForward(html.Event._check($event), this.ctx.activeStep);
    }
    [_handle_no_2_1]($event) {
      this.ctx.stepBackward(html.Event._check($event), this.ctx.activeStep);
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_MaterialYesNoButtonsComponent_2_5] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent8);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent8, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_yes_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_no_2_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent8, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0),
    [_MaterialYesNoButtonsComponent_2_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent8 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.new(parentView, parentIndex);
  };
  const _PortalHostDirective_2_9 = Symbol('_PortalHostDirective_2_9');
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent9 = class _ViewMaterialStepperComponent9 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "step-summary-directive";
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new("\n        ");
      this[_el_0][$append](_text_1);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent10, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_PortalHostDirective_2_9] = new laminate__portal__portal.PortalHostDirective.new(this[_appEl_2], this[_appEl_2]);
      let _text_3 = html.Text.new("\n      ");
      this[_el_0][$append](_text_3);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_step = material_stepper__material_step.StepDirective._check(this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_0 = local_step.summaryDirective;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_PortalHostDirective_2_9].portal = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_2] = null;
    this[_PortalHostDirective_2_9] = null;
    this[_expr_0] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent9);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent9, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent9, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_PortalHostDirective_2_9]: dart.fieldType(laminate__portal__portal.PortalHostDirective),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent9 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.new(parentView, parentIndex);
  };
  let const$1;
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent10 = class _ViewMaterialStepperComponent10 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent10.new = function(parentView, parentIndex) {
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent10.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent10);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent10, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent10.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent10 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent10.new(parentView, parentIndex);
  };
  const _text_2 = Symbol('_text_2');
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent11 = class _ViewMaterialStepperComponent11 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "stepper-step-summary";
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new("\n        ");
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new("");
      this[_el_0][$append](this[_text_2]);
      let _text_3 = html.Text.new("\n      ");
      this[_el_0][$append](_text_3);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_step = material_stepper__material_step.StepDirective._check(this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_step.completeSummary);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent11);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent11, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent11, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent11 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent12 = class _ViewMaterialStepperComponent12 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "stepper-content mixin";
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new("\n  ");
      this[_el_0][$append](_text_1);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent13, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_PortalHostDirective_2_9] = new laminate__portal__portal.PortalHostDirective.new(this[_appEl_2], this[_appEl_2]);
      let _text_3 = html.Text.new("\n    ");
      this[_el_0][$append](_text_3);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent14, AppViewAndintToAppViewOfMaterialStepperComponent()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = html.Text.new("\n");
      this[_el_0][$append](_text_5);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.activeStep;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_PortalHostDirective_2_9].portal = currVal_2;
        this[_expr_2] = currVal_2;
      }
      this[_NgIf_4_9].ngIf = !dart.test(_ctx.activeStep.hideButtons);
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_0], "orientation", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_0], "size", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_4];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_2] = null;
    this[_PortalHostDirective_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent12);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent12, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent12, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_PortalHostDirective_2_9]: dart.fieldType(laminate__portal__portal.PortalHostDirective),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent12 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.new(parentView, parentIndex);
  };
  let const$2;
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent13 = class _ViewMaterialStepperComponent13 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      this.init(const$2 || (const$2 = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent13.new = function(parentView, parentIndex) {
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent13.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent13.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent13);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent13, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent13.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent13 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent13.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent14 = class _ViewMaterialStepperComponent14 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "button-container";
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("\n      ");
      this[_el_0][$append](_text_1);
      this[_compView_2] = new material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this[_el_0][$append](this[_el_2]);
      this.createAttr(this[_el_2], "raised", "");
      this.createAttr(this[_el_2], "yesHighlighted", "");
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_MaterialYesNoButtonsComponent_2_5] = new material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      let _text_3 = html.Text.new("\n      ");
      this[_compView_2].create(this[_MaterialYesNoButtonsComponent_2_5], []);
      let _text_4 = html.Text.new("\n    ");
      this[_el_0][$append](_text_4);
      let subscription_0 = this[_MaterialYesNoButtonsComponent_2_5].yes.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_yes_2_0)));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_2_5].no.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_no_2_1)));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialYesNoButtonsComponent_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(material_stepper__material_stepper.MaterialStepperComponent.continueMsg == null)) {
          this[_MaterialYesNoButtonsComponent_2_5].yesText = material_stepper__material_stepper.MaterialStepperComponent.continueMsg;
          changed = true;
        }
        this[_MaterialYesNoButtonsComponent_2_5].yesHighlighted = true;
        changed = true;
        this[_MaterialYesNoButtonsComponent_2_5].raised = true;
        changed = true;
      }
      let currVal_1 = _ctx.noText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialYesNoButtonsComponent_2_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_4 = _ctx.activeStep.busy;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialYesNoButtonsComponent_2_5].disabled = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = !dart.test(_ctx.activeStep.canContinue);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialYesNoButtonsComponent_2_5].yesDisabled = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = !dart.test(_ctx.activeStep.cancelHidden) && _ctx.activeStep.index !== 0;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialYesNoButtonsComponent_2_5].noDisplayed = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
    }
    [_handle_yes_2_0]($event) {
      this.ctx.stepForward(html.Event._check($event), this.ctx.activeStep);
    }
    [_handle_no_2_1]($event) {
      this.ctx.stepBackward(html.Event._check($event), this.ctx.activeStep);
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_MaterialYesNoButtonsComponent_2_5] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._renderType;
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent14);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent14, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_yes_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_no_2_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent14, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0),
    [_MaterialYesNoButtonsComponent_2_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent14 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.new(parentView, parentIndex);
  };
  dart.defineLazy(material_stepper__material_stepper$46template, {
    /*material_stepper__material_stepper$46template.styles$MaterialStepperComponentHost*/get styles$MaterialStepperComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialStepperComponent_0_5 = Symbol('_MaterialStepperComponent_0_5');
  material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0 = class _ViewMaterialStepperComponentHost0 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      this[_compView_0] = new material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialStepperComponent_0_5] = new material_stepper__material_stepper.MaterialStepperComponent.new();
      this[_MaterialStepperComponent_0_5].stepsQuery = JSArrayOfStepDirective().of([]);
      this[_compView_0].create(this[_MaterialStepperComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialStepperComponent()).new(0, this, this.rootEl, this[_MaterialStepperComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_stepper__material_stepper.MaterialStepperComponent) && 0 === nodeIndex) {
        return this[_MaterialStepperComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialStepperComponent_0_5] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0),
    [_MaterialStepperComponent_0_5]: dart.fieldType(material_stepper__material_stepper.MaterialStepperComponent)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponentHost0 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_stepper__material_stepper$46template, {
    /*material_stepper__material_stepper$46template._MaterialStepperComponentNgFactory*/get _MaterialStepperComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialStepperComponent()).new("material-stepper", dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponentHost0, AppViewAndintToAppViewOfMaterialStepperComponent())));
    }
  });
  dart.copyProperties(material_stepper__material_stepper$46template, {
    get MaterialStepperComponentNgFactory() {
      return material_stepper__material_stepper$46template._MaterialStepperComponentNgFactory;
    }
  });
  dart.defineLazy(material_stepper__material_stepper$46template, {
    /*material_stepper__material_stepper$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_stepper__material_stepper$46template.initReflector = function() {
    if (dart.test(material_stepper__material_stepper$46template._visited)) {
      return;
    }
    material_stepper__material_stepper$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_stepper__material_stepper.MaterialStepperComponent), material_stepper__material_stepper$46template.MaterialStepperComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    laminate__portal__portal$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_stepper__common$46template.initReflector();
    material_stepper__material_step$46template.initReflector();
    material_yes_no_buttons__material_yes_no_buttons$46template.initReflector();
    model__action__async_action$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__angular__scroll_host__angular_2$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_stepper/material_stepper.template.ddc", {
    "package:angular_components/material_stepper/material_stepper.template.dart": material_stepper__material_stepper$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_stepper.template.dart"],"names":[],"mappings":"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","file":"material_stepper.template.ddc.js"}');
  // Exports:
  return {
    material_stepper__material_stepper$46template: material_stepper__material_stepper$46template
  };
});

//# sourceMappingURL=material_stepper.template.ddc.js.map
