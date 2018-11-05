define(['dart_sdk', 'packages/angular_components/material_datepicker/material_date_range_picker.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/material_datepicker/material_date_range_picker', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/material_datepicker/date_range_editor.template', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/quiver/time', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_datepicker/config', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/config.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_date_range_picker$46scss$46css, view_type, change_detection, modules, material_popup, button_decorator, button_decorator$, dom_service, keyboard_only_focus_indicator, dom_popup_source, reference, focus_interface, popup_hierarchy, material_date_range_picker, dropdown_button, dropdown_button$, material_popup$, ng_zone, overlay_ref, zindexer, alignment, has_disabled, deferred_content_aware, material_dropdown_base, next_prev_buttons, next_prev_buttons$, focus_trap, focus_trap$, date_range_editor, managed_zone, date_range_editor$, time, material_button, dark_theme, material_button$, config, angular, deferred_content, keyboard_only_focus_indicator$, glyph, has_disabled$, alignment$, popup, comparison, comparison_option, config$, module, preset, range, keyboard_handler_mixin, date, date_formatter, observable, css, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_date_range_picker$46scss$46css$46shim = material_date_range_picker$46scss$46css.material_datepicker__material_date_range_picker$46scss$46css$46shim;
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
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const material_datepicker__material_date_range_picker = material_date_range_picker.material_datepicker__material_date_range_picker;
  const material_select__dropdown_button$46template = dropdown_button.material_select__dropdown_button$46template;
  const material_select__dropdown_button = dropdown_button$.material_select__dropdown_button;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_datepicker__next_prev_buttons$46template = next_prev_buttons.material_datepicker__next_prev_buttons$46template;
  const material_datepicker__next_prev_buttons = next_prev_buttons$.material_datepicker__next_prev_buttons;
  const focus__focus_trap$46template = focus_trap.focus__focus_trap$46template;
  const focus__focus_trap = focus_trap$.focus__focus_trap;
  const material_datepicker__date_range_editor$46template = date_range_editor.material_datepicker__date_range_editor$46template;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const material_datepicker__date_range_editor = date_range_editor$.material_datepicker__date_range_editor;
  const time$ = time.time;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const material_datepicker__config = config.material_datepicker__config;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content.content__deferred_content$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_datepicker__comparison$46template = comparison.material_datepicker__comparison$46template;
  const material_datepicker__comparison_option$46template = comparison_option.material_datepicker__comparison_option$46template;
  const material_datepicker__config$46template = config$.material_datepicker__config$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const material_datepicker__preset$46template = preset.material_datepicker__preset$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__date__date_formatter$46template = date_formatter.model__date__date_formatter$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__angular__css__css$46template = css.utils__angular__css__css$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_datepicker__material_date_range_picker$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $isNotEmpty = dartx.isNotEmpty;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialDateRangePickerComponent = () => (AppViewOfMaterialDateRangePickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)))();
  let AppViewAndintToAppViewOfMaterialDateRangePickerComponent = () => (AppViewAndintToAppViewOfMaterialDateRangePickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialDateRangePickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let ComponentRefOfMaterialDateRangePickerComponent = () => (ComponentRefOfMaterialDateRangePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)))();
  let ComponentFactoryOfMaterialDateRangePickerComponent = () => (ComponentFactoryOfMaterialDateRangePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)))();
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template.styles$MaterialDateRangePickerComponent*/get styles$MaterialDateRangePickerComponent() {
      return [material_datepicker__material_date_range_picker$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_6');
  const _PopupSourceDirective_0_7 = Symbol('_PopupSourceDirective_0_7');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _DropdownButtonComponent_4_5 = Symbol('_DropdownButtonComponent_4_5');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _el_7 = Symbol('_el_7');
  const _compView_7 = Symbol('_compView_7');
  const _appEl_7 = Symbol('_appEl_7');
  const _MaterialPopupComponent_7_8 = Symbol('_MaterialPopupComponent_7_8');
  const __PopupHierarchy_7_11 = Symbol('__PopupHierarchy_7_11');
  const __PopupRef_7_12 = Symbol('__PopupRef_7_12');
  const _appEl_8 = Symbol('_appEl_8');
  const _NgIf_8_9 = Symbol('_NgIf_8_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _PopupHierarchy_7_11 = Symbol('_PopupHierarchy_7_11');
  const _PopupRef_7_12 = Symbol('_PopupRef_7_12');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  const _handle_click_0_3 = Symbol('_handle_click_0_3');
  let const$4;
  material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0 = class ViewMaterialDateRangePickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    get [_PopupHierarchy_7_11]() {
      if (this[__PopupHierarchy_7_11] == null) {
        this[__PopupHierarchy_7_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_7_8]);
      }
      return this[__PopupHierarchy_7_11];
    }
    get [_PopupRef_7_12]() {
      if (this[__PopupRef_7_12] == null) {
        this[__PopupRef_7_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_7_8]);
      }
      return this[__PopupRef_7_12];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "main-content";
      this.createAttr(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.createAttr(this[_el_0], "popupSource", "");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_PopupSourceDirective_0_7] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex, null)), null);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1, AppViewAndintToAppViewOfMaterialDateRangePickerComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = "dropdown-and-comparison";
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_2]);
      this[_el_3].className = "main-line";
      this.addShimE(this[_el_3]);
      this[_compView_4] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_3][$append](this[_el_4]);
      this[_el_4].className = "menu-lookalike primary-range";
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_DropdownButtonComponent_4_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_compView_4].create(this[_DropdownButtonComponent_4_5], [const$ || (const$ = dart.constList([], dart.dynamic))]);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_3][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 3, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2, AppViewAndintToAppViewOfMaterialDateRangePickerComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 2, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3, AppViewAndintToAppViewOfMaterialDateRangePickerComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_7] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 7);
      this[_el_7] = this[_compView_7].rootEl;
      parentRenderNode[$append](this[_el_7]);
      this.createAttr(this[_el_7], "enforceSpaceConstraints", "");
      this.addShimC(html.HtmlElement._check(this[_el_7]));
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, null, this, this[_el_7]);
      this[_MaterialPopupComponent_7_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_7].ref, this[_appEl_7], new src__core__linker__element_ref.ElementRef.new(this[_el_7]));
      let _anchor_8 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, 7, this, _anchor_8);
      let _TemplateRef_8_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_8], dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4, AppViewAndintToAppViewOfMaterialDateRangePickerComponent()));
      this[_NgIf_8_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_compView_7].create(this[_MaterialPopupComponent_7_8], [const$2 || (const$2 = dart.constList([], dart.dynamic)), JSArrayOfViewContainer().of([this[_appEl_8]]), const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]("focus", this.eventHandler0(html.Event, dart.bind(this.ctx, 'initEditor')));
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler0(html.Event, dart.bind(this.ctx, 'initEditor')));
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_3)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'open')));
      let subscription_1 = this[_MaterialPopupComponent_7_8].onOpen.listen(this.eventHandler0(dart.void, dart.bind(this.ctx, 'open')));
      let subscription_2 = this[_MaterialPopupComponent_7_8].onClose.listen(this.eventHandler0(dart.void, dart.bind(this.ctx, 'close')));
      this.ctx.focusOnClose = this[_KeyboardOnlyFocusIndicatorDirective_0_6];
      this.ctx.popup = this[_MaterialPopupComponent_7_8];
      this.init(const$4 || (const$4 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(focus__focus_interface.Focusable)) && 4 === nodeIndex) {
        return this[_DropdownButtonComponent_4_5];
      }
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_ButtonDirective_0_5].instance;
      }
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_MaterialPopupComponent_7_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_PopupHierarchy_7_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_PopupRef_7_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_button = this[_PopupSourceDirective_0_7];
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      this[_NgIf_1_9].ngIf = dart.test(_ctx.hasTitle) && dart.test(_ctx.presets[$isNotEmpty]);
      changed = false;
      let currVal_1 = _ctx.formattedRange;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DropdownButtonComponent_4_5].buttonText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DropdownButtonComponent_4_5].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.error;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DropdownButtonComponent_4_5].error = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.showNextPrevButtons;
      this[_NgIf_6_9].ngIf = _ctx.hasComparison;
      if (firstCheck) {
        this[_MaterialPopupComponent_7_8].enforceSpaceConstraints = true;
      }
      let currVal_8 = _ctx.overlapAlignments;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialPopupComponent_7_8].preferredPositions = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = local_button;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_MaterialPopupComponent_7_8].source = currVal_9;
        this[_expr_9] = currVal_9;
      }
      this[_NgIf_8_9].ngIf = _ctx.isEditorCreated;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      if (firstCheck) {
        if (!(_ctx.popupClassName == null)) {
          this[_compView_7].updateChildClass(this[_el_7], _ctx.popupClassName);
        }
      }
      this[_compView_7].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_7].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_7].ngAfterViewInit();
          this[_MaterialPopupComponent_7_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_5];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_6];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_7];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_8];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_compView_4];
      t$3 == null ? null : t$3.destroy();
      let t$4 = this[_compView_7];
      t$4 == null ? null : t$4.destroy();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_7_8].ngOnDestroy();
    }
    [_handle_click_0_3]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].hideOutline();
    }
    detectHostChanges(firstCheck) {
      let currVal_11 = this.ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this.updateElemClass(this.rootEl, "compact", currVal_11);
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = this.ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this.updateElemClass(this.rootEl, "disabled", currVal_12);
        this[_expr_12] = currVal_12;
      }
    }
  };
  (material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_DropdownButtonComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_el_7] = null;
    this[_compView_7] = null;
    this[_appEl_7] = null;
    this[_MaterialPopupComponent_7_8] = null;
    this[__PopupHierarchy_7_11] = null;
    this[__PopupRef_7_12] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-date-range-picker"));
    let t = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType;
    t == null ? material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_date_range_picker.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__material_date_range_picker$46template.styles$MaterialDateRangePickerComponent) : t;
    this.setupComponentType(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType);
  }).prototype = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_0_3]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setGetterSignature(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_PopupHierarchy_7_11]: dart.dynamic,
    [_PopupRef_7_12]: dart.dynamic
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_PopupSourceDirective_0_7]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_4_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_7]: dart.fieldType(html.Element),
    [_compView_7]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_7_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_7_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_7_12]: dart.fieldType(dart.dynamic),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_8_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, {
    /*material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1 = class _ViewMaterialDateRangePickerComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "range-title";
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.rangeTitle;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType;
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new(parentView, parentIndex);
  };
  const _compView_0 = Symbol('_compView_0');
  const _NextPrevComponent_0_5 = Symbol('_NextPrevComponent_0_5');
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2 = class _ViewMaterialDateRangePickerComponent2 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "next-prev-buttons";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_NextPrevComponent_0_5] = new material_datepicker__next_prev_buttons.NextPrevComponent.new(this[_compView_0].ref);
      this[_compView_0].create(this[_NextPrevComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(_ctx.model == null)) {
          this[_NextPrevComponent_0_5].model = _ctx.model;
          changed = true;
        }
      }
      let currVal_0 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NextPrevComponent_0_5].disabled = currVal_0;
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
      this[_NextPrevComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_NextPrevComponent_0_5] = null;
    this[_expr_0] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType;
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0),
    [_NextPrevComponent_0_5]: dart.fieldType(material_datepicker__next_prev_buttons.NextPrevComponent),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new(parentView, parentIndex);
  };
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3 = class _ViewMaterialDateRangePickerComponent3 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "comparison-title";
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.formattedComparison;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType;
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new(parentView, parentIndex);
  };
  const _FocusTrapComponent_0_5 = Symbol('_FocusTrapComponent_0_5');
  const _el_1 = Symbol('_el_1');
  const _compView_2 = Symbol('_compView_2');
  const _DateRangeEditorComponent_2_5 = Symbol('_DateRangeEditorComponent_2_5');
  const _el_6 = Symbol('_el_6');
  const _compView_6 = Symbol('_compView_6');
  const _AcxDarkTheme_6_5 = Symbol('_AcxDarkTheme_6_5');
  const _MaterialButtonComponent_6_6 = Symbol('_MaterialButtonComponent_6_6');
  const _text_7 = Symbol('_text_7');
  const _el_8 = Symbol('_el_8');
  const _compView_8 = Symbol('_compView_8');
  const _AcxDarkTheme_8_5 = Symbol('_AcxDarkTheme_8_5');
  const _MaterialButtonComponent_8_6 = Symbol('_MaterialButtonComponent_8_6');
  const _text_9 = Symbol('_text_9');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_10 = Symbol('_expr_10');
  const _expr_13 = Symbol('_expr_13');
  const _expr_14 = Symbol('_expr_14');
  const _expr_15 = Symbol('_expr_15');
  let const$5;
  let const$6;
  let const$7;
  const _handle_trigger_6_0 = Symbol('_handle_trigger_6_0');
  const _handle_trigger_8_0 = Symbol('_handle_trigger_8_0');
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4 = class _ViewMaterialDateRangePickerComponent4 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      this[_compView_0] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "popup-contents";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FocusTrapComponent_0_5] = new focus__focus_trap.FocusTrapComponent.new();
      let doc = html.document;
      this[_el_1] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_1].className = "wrapper";
      this.addShimC(this[_el_1]);
      this[_compView_2] = new material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this[_el_1][$append](this[_el_2]);
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_DateRangeEditorComponent_2_5] = new material_datepicker__date_range_editor.DateRangeEditorComponent.new(this[_el_2], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), src__utils__angular__managed_zone__managed_zone.ManagedZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), this.parentView.viewData.parentIndex)), material_datepicker__date_range_editor.DateRangeEditorHost._check(this.parentView.parentView.injectorGet(dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorHost), this.parentView.viewData.parentIndex, null)), time$.Clock._check(this.parentView.parentView.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex, null)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)));
      this[_compView_2].create(this[_DateRangeEditorComponent_2_5], []);
      this.project(this[_el_1], 0);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_3].className = "apply-bar";
      this.addShimC(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_3]);
      this[_el_4].className = "separator";
      this.addShimC(this[_el_4]);
      let _text_5 = html.Text.new(" ");
      this[_el_4][$append](_text_5);
      this[_compView_6] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 6);
      this[_el_6] = this[_compView_6].rootEl;
      this[_el_3][$append](this[_el_6]);
      this[_el_6].className = "cancel";
      this.addShimC(html.HtmlElement._check(this[_el_6]));
      this[_AcxDarkTheme_6_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_6_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_6]), this[_AcxDarkTheme_6_5], this[_compView_6].ref, null);
      this[_text_7] = html.Text.new((() => {
        let l = material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.cancelButtonMsg;
        return l != null ? l : "";
      })());
      this[_compView_6].create(this[_MaterialButtonComponent_6_6], [JSArrayOfText().of([this[_text_7]])]);
      this[_compView_8] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 8);
      this[_el_8] = this[_compView_8].rootEl;
      this[_el_3][$append](this[_el_8]);
      this[_el_8].className = "apply";
      this.addShimC(html.HtmlElement._check(this[_el_8]));
      this[_AcxDarkTheme_8_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_8_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_8]), this[_AcxDarkTheme_8_5], this[_compView_8].ref, null);
      this[_text_9] = html.Text.new("");
      this[_compView_8].create(this[_MaterialButtonComponent_8_6], [JSArrayOfText().of([this[_text_9]])]);
      this[_compView_0].create(this[_FocusTrapComponent_0_5], [JSArrayOfDivElement().of([this[_el_1]])]);
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_0][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      let subscription_0 = this[_DateRangeEditorComponent_2_5].presetRangeSelected.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'onRangeClicked')));
      let subscription_1 = this[_MaterialButtonComponent_6_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_6_0)));
      let subscription_2 = this[_MaterialButtonComponent_8_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_8_0)));
      this.init([this[_el_0]], [subscription_0, subscription_1, subscription_2]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_AcxDarkTheme_6_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_MaterialButtonComponent_6_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 8 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_AcxDarkTheme_8_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 8 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_MaterialButtonComponent_8_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(_ctx.model == null)) {
          this[_DateRangeEditorComponent_2_5].model = _ctx.model;
        }
      }
      let currVal_2 = _ctx.movingStartMaintainsLength;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DateRangeEditorComponent_2_5].movingStartMaintainsLength = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.supportsClearRange;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DateRangeEditorComponent_2_5].supportsClearRange = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.supportsCustomRange;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateRangeEditorComponent_2_5].supportsCustomRange = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.relativeDaysToToday;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateRangeEditorComponent_2_5].relativeDaysToToday = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.allowHighlightUpdates;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateRangeEditorComponent_2_5].allowHighlightUpdates = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.supportsComparison;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateRangeEditorComponent_2_5].supportsComparison = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_DateRangeEditorComponent_2_5].compact = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.supportsDaysInputs;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_DateRangeEditorComponent_2_5].supportsDaysInputs = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.presets;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_DateRangeEditorComponent_2_5].presets = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_DateRangeEditorComponent_2_5].minDate = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_DateRangeEditorComponent_2_5].maxDate = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.isCalendarCreated;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_DateRangeEditorComponent_2_5].isCalendarCreated = currVal_13;
        this[_expr_13] = currVal_13;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeEditorComponent_2_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_6_6].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_8].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_8_6].ngOnInit();
      }
      let currVal_0 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0], "compact", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_2].detectHostChanges(firstCheck);
      let currVal_14 = _ctx.applyBarVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this.updateClass(this[_el_3], "visible", currVal_14);
        this[_expr_14] = currVal_14;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_8].detectHostChanges(firstCheck);
      let l = _ctx.applyButtonMsg;
      let currVal_15 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_text_9][$text] = currVal_15;
        this[_expr_15] = currVal_15;
      }
      this[_compView_0].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_8].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_DateRangeEditorComponent_2_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_2];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_6];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_8];
      t$1 == null ? null : t$1.destroy();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_6_0]($event) {
      this.ctx.cancel();
      dart.dsend($event, 'preventDefault', []);
    }
    [_handle_trigger_8_0]($event) {
      this.ctx.apply(html.UIEvent._check($event));
      dart.dsend($event, 'preventDefault', []);
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_DateRangeEditorComponent_2_5] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_el_6] = null;
    this[_compView_6] = null;
    this[_AcxDarkTheme_6_5] = null;
    this[_MaterialButtonComponent_6_6] = null;
    this[_text_7] = null;
    this[_el_8] = null;
    this[_compView_8] = null;
    this[_AcxDarkTheme_8_5] = null;
    this[_MaterialButtonComponent_8_6] = null;
    this[_text_9] = null;
    this[_expr_0] = null;
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
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType;
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_6_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_8_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_0_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0),
    [_DateRangeEditorComponent_2_5]: dart.fieldType(material_datepicker__date_range_editor.DateRangeEditorComponent),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_6]: dart.fieldType(html.Element),
    [_compView_6]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_6_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_6_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_text_7]: dart.fieldType(html.Text),
    [_el_8]: dart.fieldType(html.Element),
    [_compView_8]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_8_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_8_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_text_9]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(core.bool),
    [_expr_14]: dart.fieldType(core.bool),
    [_expr_15]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template.styles$MaterialDateRangePickerComponentHost*/get styles$MaterialDateRangePickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDateRangePickerComponent_0_5 = Symbol('_MaterialDateRangePickerComponent_0_5');
  let const$8;
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0 = class _ViewMaterialDateRangePickerComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDateRangePickerComponent_0_5] = new material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.new(time$.Clock._check(this.injectorGet(const$8 || (const$8 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex, null)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), material_datepicker__config.DatepickerConfig._check(this.injectorGet(dart.wrapType(material_datepicker__config.DatepickerConfig), this.viewData.parentIndex, null)), null, this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialDateRangePickerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialDateRangePickerComponent()).new(0, this, this.rootEl, this[_MaterialDateRangePickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorHost) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 === nodeIndex) {
        return this[_MaterialDateRangePickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialDateRangePickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialDateRangePickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDateRangePickerComponent_0_5] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0),
    [_MaterialDateRangePickerComponent_0_5]: dart.fieldType(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template._MaterialDateRangePickerComponentNgFactory*/get _MaterialDateRangePickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDateRangePickerComponent()).new("material-date-range-picker", dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0, AppViewAndintToAppViewOfMaterialDateRangePickerComponent())));
    }
  });
  dart.copyProperties(material_datepicker__material_date_range_picker$46template, {
    get MaterialDateRangePickerComponentNgFactory() {
      return material_datepicker__material_date_range_picker$46template._MaterialDateRangePickerComponentNgFactory;
    }
  });
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_date_range_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_date_range_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_date_range_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), material_datepicker__material_date_range_picker$46template.MaterialDateRangePickerComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus_trap$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    glyph__glyph$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_datepicker__comparison$46template.initReflector();
    material_datepicker__comparison_option$46template.initReflector();
    material_datepicker__config$46template.initReflector();
    material_datepicker__date_range_editor$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_datepicker__next_prev_buttons$46template.initReflector();
    material_datepicker__preset$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__dropdown_button$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    model__date__date$46template.initReflector();
    model__date__date_formatter$46template.initReflector();
    model__observable__observable$46template.initReflector();
    utils__angular__css__css$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_range_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_date_range_picker.template.dart": material_datepicker__material_date_range_picker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_date_range_picker.template.dart"],"names":[],"mappings":"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","file":"material_date_range_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_range_picker$46template: material_datepicker__material_date_range_picker$46template
  };
});

//# sourceMappingURL=material_date_range_picker.template.ddc.js.map
