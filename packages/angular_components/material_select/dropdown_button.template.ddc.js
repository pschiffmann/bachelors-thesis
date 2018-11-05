define(['dart_sdk', 'packages/angular_components/button_decorator/button_decorator.scss.css.shim', 'packages/angular_components/material_select/dropdown_button.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular/angular.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/mixins/button_wrapper.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, button_decorator$46scss$46css, dropdown_button$46scss$46css, view_type, change_detection, modules, button_decorator, button_decorator$, dom_service, keyboard_only_focus_indicator, dropdown_button, glyph, glyph$, has_disabled, focus_interface, angular, focus_interface$, keyboard_only_focus_indicator$, has_disabled$, button_wrapper, focusable_mixin, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const button_decorator__button_decorator$46scss$46css$46shim = button_decorator$46scss$46css.button_decorator__button_decorator$46scss$46css$46shim;
  const material_select__dropdown_button$46scss$46css$46shim = dropdown_button$46scss$46css.material_select__dropdown_button$46scss$46css$46shim;
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
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_select__dropdown_button = dropdown_button.material_select__dropdown_button;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const angular$46template = angular.angular$46template;
  const focus__focus_interface$46template = focus_interface$.focus__focus_interface$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const mixins__button_wrapper$46template = button_wrapper.mixins__button_wrapper$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_select__dropdown_button$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfDropdownButtonComponent = () => (AppViewOfDropdownButtonComponent = dart.constFn(src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent)))();
  let AppViewAndintToAppViewOfDropdownButtonComponent = () => (AppViewAndintToAppViewOfDropdownButtonComponent = dart.constFn(dart.fnType(AppViewOfDropdownButtonComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfDropdownButtonComponent = () => (ComponentRefOfDropdownButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent)))();
  let ComponentFactoryOfDropdownButtonComponent = () => (ComponentFactoryOfDropdownButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__dropdown_button.DropdownButtonComponent)))();
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template.styles$DropdownButtonComponent*/get styles$DropdownButtonComponent() {
      return [button_decorator__button_decorator$46scss$46css$46shim.styles, material_select__dropdown_button$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_6');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
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
  const _handle_blur_0_1 = Symbol('_handle_blur_0_1');
  const _handle_click_0_2 = Symbol('_handle_click_0_2');
  let const$;
  material_select__dropdown_button$46template.ViewDropdownButtonComponent0 = class ViewDropdownButtonComponent0 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "button";
      this.createAttr(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent1, AppViewAndintToAppViewOfDropdownButtonComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new(" ");
      this[_el_0][$append](_text_2);
      this.project(this[_el_0], 0);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent2, AppViewAndintToAppViewOfDropdownButtonComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent3, AppViewAndintToAppViewOfDropdownButtonComponent()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.FocusEvent, dart.bind(this.ctx, 'handleFocus')));
      this[_el_0][$addEventListener]("blur", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_0_1)));
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_2)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      this.ctx.button = this[_ButtonDirective_0_5].instance;
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_9 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_ButtonDirective_0_5].instance.disabled = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.ariaRole;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_ButtonDirective_0_5].instance.role = currVal_10;
        this[_expr_10] = currVal_10;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      this[_NgIf_1_9].ngIf = _ctx.buttonText != null;
      this[_NgIf_3_9].ngIf = _ctx.buttonIcon != null;
      this[_NgIf_4_9].ngIf = _ctx.invalid;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      if (firstCheck) {
        if (!(_ctx.uuid == null)) {
          this.setAttr(this[_el_0], "id", _ctx.uuid == null ? null : dart.toString(_ctx.uuid));
        }
      }
      let currVal_1 = _ctx.buttonAriaLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_0], "aria-label", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.ariaLabelledBy;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.setAttr(this[_el_0], "aria-labelledby", currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.showButtonBorder;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.updateClass(this[_el_0], "border", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.invalid;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.updateClass(this[_el_0], "invalid", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.popupType;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this.setAttr(this[_el_0], "aria-haspopup", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.ariaOwns;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this.setAttr(this[_el_0], "aria-owns", currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.ariaExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this.setAttr(this[_el_0], "aria-expanded", currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.ariaActiveDescendant;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this.setAttr(this[_el_0], "aria-activedescendant", currVal_8 == null ? null : dart.toString(currVal_8));
        this[_expr_8] = currVal_8;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_4];
      t$0 == null ? null : t$0.destroyNestedViews();
    }
    [_handle_blur_0_1]($event) {
      this.ctx.handleBlur(html.FocusEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].resetOutline();
    }
    [_handle_click_0_2]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].hideOutline();
    }
  };
  (material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
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
    material_select__dropdown_button$46template.ViewDropdownButtonComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("dropdown-button"));
    let t = material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType;
    t == null ? material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_select/dropdown_button.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_select__dropdown_button$46template.styles$DropdownButtonComponent) : t;
    this.setupComponentType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType);
  }).prototype = material_select__dropdown_button$46template.ViewDropdownButtonComponent0.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template.ViewDropdownButtonComponent0);
  dart.setMethodSignature(material_select__dropdown_button$46template.ViewDropdownButtonComponent0, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template.ViewDropdownButtonComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_blur_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template.ViewDropdownButtonComponent0, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template.ViewDropdownButtonComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_select__dropdown_button$46template.ViewDropdownButtonComponent0, {
    /*material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent0 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  material_select__dropdown_button$46template._ViewDropdownButtonComponent1 = class _ViewDropdownButtonComponent1 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "button-text";
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.buttonText);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_select__dropdown_button$46template._ViewDropdownButtonComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType;
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponent1.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponent1);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent1, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent1, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent1 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponent1.new(parentView, parentIndex);
  };
  const _compView_0 = Symbol('_compView_0');
  const _GlyphComponent_0_5 = Symbol('_GlyphComponent_0_5');
  material_select__dropdown_button$46template._ViewDropdownButtonComponent2 = class _ViewDropdownButtonComponent2 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "icon";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_GlyphComponent_0_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_GlyphComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.buttonIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_GlyphComponent_0_5].icon = currVal_0;
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
  (material_select__dropdown_button$46template._ViewDropdownButtonComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_GlyphComponent_0_5] = null;
    this[_expr_0] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType;
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponent2.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponent2);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent2, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent2, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_0_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent2 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponent2.new(parentView, parentIndex);
  };
  material_select__dropdown_button$46template._ViewDropdownButtonComponent3 = class _ViewDropdownButtonComponent3 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "error-text";
      this.createAttr(this[_el_0], "role", "alert");
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.invalid;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(this[_el_0], "invalid", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(!dart.test(_ctx.invalid));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_0], "aria-hidden", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let l = _ctx.error;
      let currVal_2 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_1][$text] = currVal_2;
        this[_expr_2] = currVal_2;
      }
    }
  };
  (material_select__dropdown_button$46template._ViewDropdownButtonComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType;
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponent3.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponent3);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent3, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent3, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponent3.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent3 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template.styles$DropdownButtonComponentHost*/get styles$DropdownButtonComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DropdownButtonComponent_0_5 = Symbol('_DropdownButtonComponent_0_5');
  material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0 = class _ViewDropdownButtonComponentHost0 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      this[_compView_0] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DropdownButtonComponent_0_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_compView_0].create(this[_DropdownButtonComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDropdownButtonComponent()).new(0, this, this.rootEl, this[_DropdownButtonComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(focus__focus_interface.Focusable)) && 0 === nodeIndex) {
        return this[_DropdownButtonComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DropdownButtonComponent_0_5] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_0_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponentHost0 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template._DropdownButtonComponentNgFactory*/get _DropdownButtonComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDropdownButtonComponent()).new("dropdown-button", dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponentHost0, AppViewAndintToAppViewOfDropdownButtonComponent())));
    }
  });
  dart.copyProperties(material_select__dropdown_button$46template, {
    get DropdownButtonComponentNgFactory() {
      return material_select__dropdown_button$46template._DropdownButtonComponentNgFactory;
    }
  });
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__dropdown_button$46template.initReflector = function() {
    if (dart.test(material_select__dropdown_button$46template._visited)) {
      return;
    }
    material_select__dropdown_button$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__dropdown_button.DropdownButtonComponent), material_select__dropdown_button$46template.DropdownButtonComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    focus__focus_interface$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    glyph__glyph$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    mixins__button_wrapper$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_select/dropdown_button.template.ddc", {
    "package:angular_components/material_select/dropdown_button.template.dart": material_select__dropdown_button$46template
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_button.template.dart"],"names":[],"mappings":"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","file":"dropdown_button.template.ddc.js"}');
  // Exports:
  return {
    material_select__dropdown_button$46template: material_select__dropdown_button$46template
  };
});

//# sourceMappingURL=dropdown_button.template.ddc.js.map
