define(['dart_sdk', 'packages/angular_components/material_datepicker/material_datepicker.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/material_datepicker/material_datepicker', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/content/deferred_content', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/focus/focus', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/quiver/time', 'packages/angular_components/material_datepicker/date_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_datepicker/material_calendar_picker.template', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_datepicker/range', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_input.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/utils/angular/css/css.template'], function(dart_sdk, material_datepicker$46scss$46css, view_type, change_detection, modules, material_popup, dom_popup_source, reference, focus_interface, popup_hierarchy, material_datepicker, dropdown_button, dropdown_button$, material_popup$, ng_zone, overlay_ref, zindexer, alignment, focus_trap, focus_trap$, deferred_content, has_disabled, deferred_content_aware, material_dropdown_base, focus, material_input, material_input$, deferred_validator, dom_service, modal, time, date_input, material_input_default_value_accessor, material_calendar_picker, material_calendar_picker$, date, calendar, base_material_input, material_select_item, activation_handler, material_select_item$, selection_container, has_renderer, range, angular, button_decorator, deferred_content$, focus$, keyboard_only_focus_indicator, glyph, has_disabled$, alignment$, popup, calendar$, date_input$, module, range$, material_list_item, focusable_mixin, keyboard_handler_mixin, date$, css) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_datepicker$46scss$46css$46shim = material_datepicker$46scss$46css.material_datepicker__material_datepicker$46scss$46css$46shim;
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
  const src__common__directives__ng_class = modules.src__common__directives__ng_class;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const material_datepicker__material_datepicker = material_datepicker.material_datepicker__material_datepicker;
  const material_select__dropdown_button$46template = dropdown_button.material_select__dropdown_button$46template;
  const material_select__dropdown_button = dropdown_button$.material_select__dropdown_button;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const focus__focus_trap$46template = focus_trap.focus__focus_trap$46template;
  const focus__focus_trap = focus_trap$.focus__focus_trap;
  const content__deferred_content = deferred_content.content__deferred_content;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const focus__focus = focus.focus__focus;
  const material_input__material_input = material_input.material_input__material_input;
  const material_input__material_input$46template = material_input$.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const time$ = time.time;
  const material_datepicker__date_input = date_input.material_datepicker__date_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_datepicker__material_calendar_picker$46template = material_calendar_picker.material_datepicker__material_calendar_picker$46template;
  const material_datepicker__material_calendar_picker = material_calendar_picker$.material_datepicker__material_calendar_picker;
  const model__date__date = date.model__date__date;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_datepicker__range = range.material_datepicker__range;
  const angular$46template = angular.angular$46template;
  const button_decorator__button_decorator$46template = button_decorator.button_decorator__button_decorator$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator$46template;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_datepicker__calendar$46template = calendar$.material_datepicker__calendar$46template;
  const material_datepicker__date_input$46template = date_input$.material_datepicker__date_input$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const material_datepicker__range$46template = range$.material_datepicker__range$46template;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const model__date__date$46template = date$.model__date__date$46template;
  const utils__angular__css__css$46template = css.utils__angular__css__css$46template;
  const _root = Object.create(null);
  const material_datepicker__material_datepicker$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $isNotEmpty = dartx.isNotEmpty;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialDatepickerComponent = () => (AppViewOfMaterialDatepickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent)))();
  let AppViewAndintToAppViewOfMaterialDatepickerComponent = () => (AppViewAndintToAppViewOfMaterialDatepickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialDatepickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfAutoFocusDirective = () => (JSArrayOfAutoFocusDirective = dart.constFn(_interceptors.JSArray$(focus__focus.AutoFocusDirective)))();
  let ListOfAutoFocusDirective = () => (ListOfAutoFocusDirective = dart.constFn(core.List$(focus__focus.AutoFocusDirective)))();
  let _ViewMaterialDatepickerComponent2ToListOfAutoFocusDirective = () => (_ViewMaterialDatepickerComponent2ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2])))();
  let JSArrayOfMaterialInputComponent = () => (JSArrayOfMaterialInputComponent = dart.constFn(_interceptors.JSArray$(material_input__material_input.MaterialInputComponent)))();
  let ListOfMaterialInputComponent = () => (ListOfMaterialInputComponent = dart.constFn(core.List$(material_input__material_input.MaterialInputComponent)))();
  let _ViewMaterialDatepickerComponent2ToListOfMaterialInputComponent = () => (_ViewMaterialDatepickerComponent2ToListOfMaterialInputComponent = dart.constFn(dart.fnType(ListOfMaterialInputComponent(), [material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let ComponentRefOfMaterialDatepickerComponent = () => (ComponentRefOfMaterialDatepickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent)))();
  let ComponentFactoryOfMaterialDatepickerComponent = () => (ComponentFactoryOfMaterialDatepickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_datepicker.MaterialDatepickerComponent)))();
  dart.defineLazy(material_datepicker__material_datepicker$46template, {
    /*material_datepicker__material_datepicker$46template.styles$MaterialDatepickerComponent*/get styles$MaterialDatepickerComponent() {
      return [material_datepicker__material_datepicker$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _PopupSourceDirective_0_5 = Symbol('_PopupSourceDirective_0_5');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _DropdownButtonComponent_2_5 = Symbol('_DropdownButtonComponent_2_5');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _appEl_3 = Symbol('_appEl_3');
  const _MaterialPopupComponent_3_8 = Symbol('_MaterialPopupComponent_3_8');
  const __PopupRef_3_10 = Symbol('__PopupRef_3_10');
  const __PopupHierarchy_3_12 = Symbol('__PopupHierarchy_3_12');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _FocusTrapComponent_4_5 = Symbol('_FocusTrapComponent_4_5');
  const _appEl_5 = Symbol('_appEl_5');
  const _query_MaterialInputComponent_1_1_isDirty = Symbol('_query_MaterialInputComponent_1_1_isDirty');
  const _query_AutoFocusDirective_4_0_isDirty = Symbol('_query_AutoFocusDirective_4_0_isDirty');
  const _DeferredContentDirective_5_9 = Symbol('_DeferredContentDirective_5_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_10 = Symbol('_expr_10');
  const _PopupRef_3_10 = Symbol('_PopupRef_3_10');
  const _PopupHierarchy_3_12 = Symbol('_PopupHierarchy_3_12');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  const _handle_visibleChange_3_0 = Symbol('_handle_visibleChange_3_0');
  let const$4;
  const _AutoFocusDirective_4_8 = Symbol('_AutoFocusDirective_4_8');
  const _MaterialInputComponent_4_6 = Symbol('_MaterialInputComponent_4_6');
  material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0 = class ViewMaterialDatepickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    get [_PopupRef_3_10]() {
      if (this[__PopupRef_3_10] == null) {
        this[__PopupRef_3_10] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_3_8]);
      }
      return this[__PopupRef_3_10];
    }
    get [_PopupHierarchy_3_12]() {
      if (this[__PopupHierarchy_3_12] == null) {
        this[__PopupHierarchy_3_12] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_3_8]);
      }
      return this[__PopupHierarchy_3_12];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = "main-content";
      this.createAttr(this[_el_0], "popupSource", "");
      this.addShimC(this[_el_0]);
      this[_PopupSourceDirective_0_5] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex, null)), null);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent1, AppViewAndintToAppViewOfMaterialDatepickerComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_compView_2] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this[_el_0][$append](this[_el_2]);
      this[_el_2].className = "menu-lookalike primary-range";
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_DropdownButtonComponent_2_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_compView_2].create(this[_DropdownButtonComponent_2_5], [const$ || (const$ = dart.constList([], dart.dynamic))]);
      this[_compView_3] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      parentRenderNode[$append](this[_el_3]);
      this.createAttr(this[_el_3], "enforceSpaceConstraints", "");
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, this[_el_3]);
      this[_MaterialPopupComponent_3_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_3].ref, this[_appEl_3], new src__core__linker__element_ref.ElementRef.new(this[_el_3]));
      this[_compView_4] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_FocusTrapComponent_4_5] = new focus__focus_trap.FocusTrapComponent.new();
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent2, AppViewAndintToAppViewOfMaterialDatepickerComponent()));
      this[_DeferredContentDirective_5_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_5], _TemplateRef_5_8, this[_MaterialPopupComponent_3_8]);
      this[_compView_4].create(this[_FocusTrapComponent_4_5], [JSArrayOfViewContainer().of([this[_appEl_5]])]);
      this[_compView_3].create(this[_MaterialPopupComponent_3_8], [const$2 || (const$2 = dart.constList([], dart.dynamic)), JSArrayOfElement().of([this[_el_4]]), const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_DropdownButtonComponent_2_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'onTrigger')));
      let subscription_1 = this[_MaterialPopupComponent_3_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_3_0)));
      this[_el_4][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_4][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_4][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      this.ctx.dropdownButton = this[_DropdownButtonComponent_2_5];
      this.init(const$4 || (const$4 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(focus__focus_interface.Focusable)) && 2 === nodeIndex) {
        return this[_DropdownButtonComponent_2_5];
      }
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialPopupComponent_3_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_PopupRef_3_10];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_PopupHierarchy_3_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_container = this[_PopupSourceDirective_0_5];
      this[_NgIf_1_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_1 = _ctx.formattedDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DropdownButtonComponent_2_5].buttonText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DropdownButtonComponent_2_5].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.error;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DropdownButtonComponent_2_5].error = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_2_5].ngOnInit();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_3_8].enforceSpaceConstraints = true;
      }
      let currVal_6 = _ctx.preferredPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialPopupComponent_3_8].preferredPositions = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = local_container;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MaterialPopupComponent_3_8].source = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.popupVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialPopupComponent_3_8].visible = currVal_8;
        this[_expr_8] = currVal_8;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_5_9].preserveDimensions = true;
      }
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_AutoFocusDirective_4_0_isDirty])) {
          this[_FocusTrapComponent_4_5].autoFocus = src__core__linker__app_view_utils.firstOrNull(focus__focus.AutoFocusDirective, this[_appEl_5].mapNestedViews(focus__focus.AutoFocusDirective, material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2, dart.fn(nestedView => JSArrayOfAutoFocusDirective().of([nestedView[_AutoFocusDirective_4_8]]), _ViewMaterialDatepickerComponent2ToListOfAutoFocusDirective())));
          this[_query_AutoFocusDirective_4_0_isDirty] = false;
        }
        if (dart.test(this[_query_MaterialInputComponent_1_1_isDirty])) {
          this.ctx.textInput = src__core__linker__app_view_utils.firstOrNull(material_input__material_input.MaterialInputComponent, this[_appEl_5].mapNestedViews(material_input__material_input.MaterialInputComponent, material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_4_6]]), _ViewMaterialDatepickerComponent2ToListOfMaterialInputComponent())));
          this[_query_MaterialInputComponent_1_1_isDirty] = false;
        }
      }
      if (firstCheck) {
        if (!(_ctx.popupClassName == null)) {
          this[_compView_3].updateChildClass(this[_el_3], _ctx.popupClassName);
        }
      }
      this[_compView_3].detectHostChanges(firstCheck);
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
      this[_compView_4].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_5].ngAfterViewInit();
          this[_MaterialPopupComponent_3_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_5];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_compView_2];
      t$1 == null ? null : t$1.destroy();
      let t$2 = this[_compView_3];
      t$2 == null ? null : t$2.destroy();
      let t$3 = this[_compView_4];
      t$3 == null ? null : t$3.destroy();
      this[_PopupSourceDirective_0_5].ngOnDestroy();
      this[_DeferredContentDirective_5_9].ngOnDestroy();
      this[_FocusTrapComponent_4_5].ngOnDestroy();
      this[_MaterialPopupComponent_3_8].ngOnDestroy();
    }
    [_handle_visibleChange_3_0]($event) {
      this.ctx.popupVisible = core.bool._check($event);
    }
    detectHostChanges(firstCheck) {
      let currVal_10 = this.ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this.updateElemClass(this.rootEl, "compact", currVal_10);
        this[_expr_10] = currVal_10;
      }
    }
  };
  (material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_PopupSourceDirective_0_5] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_DropdownButtonComponent_2_5] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_appEl_3] = null;
    this[_MaterialPopupComponent_3_8] = null;
    this[__PopupRef_3_10] = null;
    this[__PopupHierarchy_3_12] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_FocusTrapComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_query_MaterialInputComponent_1_1_isDirty] = true;
    this[_query_AutoFocusDirective_4_0_isDirty] = true;
    this[_DeferredContentDirective_5_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-datepicker"));
    let t = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
    t == null ? material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_datepicker.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__material_datepicker$46template.styles$MaterialDatepickerComponent) : t;
    this.setupComponentType(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType);
  }).prototype = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_visibleChange_3_0]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setGetterSignature(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    [_PopupRef_3_10]: dart.dynamic,
    [_PopupHierarchy_3_12]: dart.dynamic
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_PopupSourceDirective_0_5]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_2_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_3_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupRef_3_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_3_12]: dart.fieldType(dart.dynamic),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_4_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_MaterialInputComponent_1_1_isDirty]: dart.fieldType(core.bool),
    [_query_AutoFocusDirective_4_0_isDirty]: dart.fieldType(core.bool),
    [_DeferredContentDirective_5_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, {
    /*material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1 = class _ViewMaterialDatepickerComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "primary-label";
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.labelMsg;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.new(parentView, parentIndex);
  };
  const _el_1 = Symbol('_el_1');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _DeferredValidator_4_5 = Symbol('_DeferredValidator_4_5');
  const _Focusable_4_7 = Symbol('_Focusable_4_7');
  const _DateInputDirective_4_9 = Symbol('_DateInputDirective_4_9');
  const _BaseMaterialInput_4_10 = Symbol('_BaseMaterialInput_4_10');
  const _MaterialInputDefaultValueAccessor_4_11 = Symbol('_MaterialInputDefaultValueAccessor_4_11');
  const __NgValidators_4_12 = Symbol('__NgValidators_4_12');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _el_6 = Symbol('_el_6');
  const _compView_6 = Symbol('_compView_6');
  const _MaterialCalendarPickerComponent_6_5 = Symbol('_MaterialCalendarPickerComponent_6_5');
  const _NgClass_6_6 = Symbol('_NgClass_6_6');
  const _expr_5 = Symbol('_expr_5');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_15 = Symbol('_expr_15');
  const _NgValidators_4_12 = Symbol('_NgValidators_4_12');
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  const _handle_stateChange_6_0 = Symbol('_handle_stateChange_6_0');
  let const$9;
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2 = class _ViewMaterialDatepickerComponent2 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    get [_NgValidators_4_12]() {
      if (this[__NgValidators_4_12] == null) {
        this[__NgValidators_4_12] = [this[_DeferredValidator_4_5]];
      }
      return this[__NgValidators_4_12];
    }
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "popup-content";
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = "inner-label-wrapper";
      this.addShimC(this[_el_1]);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_1][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent3, AppViewAndintToAppViewOfMaterialDatepickerComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_3].className = "date-input";
      this.addShimC(this[_el_3]);
      this[_compView_4] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_3][$append](this[_el_4]);
      this.createAttr(this[_el_4], "autoFocus", "");
      this.createAttr(this[_el_4], "dateParsing", "");
      this.createAttr(this[_el_4], "type", "text");
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_DeferredValidator_4_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_4_6] = new material_input__material_input.MaterialInputComponent.new("text", null, null, null, this[_compView_4].ref, this[_DeferredValidator_4_5]);
      this[_Focusable_4_7] = this[_MaterialInputComponent_4_6];
      this[_AutoFocusDirective_4_8] = new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_4]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), this[_Focusable_4_7], laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, this.parentView)[_PopupRef_3_10]));
      this[_DateInputDirective_4_9] = new material_datepicker__date_input.DateInputDirective.new(time$.Clock._check(this.parentView.parentView.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex, null)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)), this[_MaterialInputComponent_4_6]);
      this[_BaseMaterialInput_4_10] = this[_MaterialInputComponent_4_6];
      this[_MaterialInputDefaultValueAccessor_4_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_4_10], null);
      this[_compView_4].create(this[_MaterialInputComponent_4_6], [const$6 || (const$6 = dart.constList([], dart.dynamic)), const$7 || (const$7 = dart.constList([], dart.dynamic))]);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent4, AppViewAndintToAppViewOfMaterialDatepickerComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_6] = new material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 6);
      this[_el_6] = this[_compView_6].rootEl;
      this[_el_0][$append](this[_el_6]);
      this[_el_6].className = "calendar-picker";
      this.createAttr(this[_el_6], "mode", "single-date");
      this.addShimC(html.HtmlElement._check(this[_el_6]));
      this[_MaterialCalendarPickerComponent_6_5] = new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.parentView.parentView.injectorGet(const$8 || (const$8 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex, null)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)), "single-date");
      this[_NgClass_6_6] = new src__common__directives__ng_class.NgClass.new(this[_el_6]);
      this[_compView_6].create(this[_MaterialCalendarPickerComponent_6_5], []);
      let subscription_0 = this[_DateInputDirective_4_9].dateChange.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this.ctx, 'setDateFromInput')));
      let subscription_1 = this[_MaterialCalendarPickerComponent_6_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_6_0)));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 4 === nodeIndex) {
        return this[_DeferredValidator_4_5];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 4 === nodeIndex) {
        return this[_MaterialInputComponent_4_6];
      }
      if (token === dart.wrapType(focus__focus_interface.Focusable) && 4 === nodeIndex) {
        return this[_Focusable_4_7];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 4 === nodeIndex) {
        return this[_BaseMaterialInput_4_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 4 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_4_11];
      }
      if (token === (const$9 || (const$9 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 4 === nodeIndex) {
        return this[_NgValidators_4_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_2_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_2 = _ctx.placeholderMsg;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialInputComponent_4_6].label = core.String._check(currVal_2);
        changed = true;
        this[_expr_2] = core.String._check(currVal_2);
      }
      let currVal_3 = _ctx.required;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialInputComponent_4_6].required = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_4_8].autoFocus = true;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_4_8].ngOnInit();
      }
      let currVal_5 = _ctx.outputFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateInputDirective_4_9].dateFormat = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateInputDirective_4_9].maxDate = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateInputDirective_4_9].minDate = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.date;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_DateInputDirective_4_9].date = currVal_8;
        this[_expr_8] = currVal_8;
      }
      this[_NgIf_5_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_10 = _ctx.calendar;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_MaterialCalendarPickerComponent_6_5].state = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialCalendarPickerComponent_6_5].minDate = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_MaterialCalendarPickerComponent_6_5].maxDate = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_MaterialCalendarPickerComponent_6_5].compact = currVal_13;
        changed = true;
        this[_expr_13] = currVal_13;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialCalendarPickerComponent_6_5].ngAfterChanges();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialCalendarPickerComponent_6_5].ngOnInit();
      }
      if (firstCheck) {
        this[_NgClass_6_6].initialClasses = "calendar-picker";
      }
      let currVal_15 = _ctx.calendarWeekRowsStyle;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_NgClass_6_6].rawClass = currVal_15;
        this[_expr_15] = currVal_15;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgClass_6_6].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      let currVal_0 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(this[_el_0], "compact", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_6].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_4_6].ngAfterViewInit();
          this[_MaterialCalendarPickerComponent_6_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, this.parentView)[_query_MaterialInputComponent_1_1_isDirty] = true;
      src__runtime__optimizations.unsafeCast(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, this.parentView)[_query_AutoFocusDirective_4_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_5];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_4];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_6];
      t$1 == null ? null : t$1.destroy();
      this[_MaterialInputComponent_4_6].ngOnDestroy();
      this[_AutoFocusDirective_4_8].ngOnDestroy();
      this[_DateInputDirective_4_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_4_11].ngOnDestroy();
      this[_MaterialCalendarPickerComponent_6_5].ngOnDestroy();
      this[_NgClass_6_6].ngOnDestroy();
    }
    [_handle_stateChange_6_0]($event) {
      this.ctx.calendar = material_datepicker__calendar.CalendarState._check($event);
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_DeferredValidator_4_5] = null;
    this[_MaterialInputComponent_4_6] = null;
    this[_Focusable_4_7] = null;
    this[_AutoFocusDirective_4_8] = null;
    this[_DateInputDirective_4_9] = null;
    this[_BaseMaterialInput_4_10] = null;
    this[_MaterialInputDefaultValueAccessor_4_11] = null;
    this[__NgValidators_4_12] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_el_6] = null;
    this[_compView_6] = null;
    this[_MaterialCalendarPickerComponent_6_5] = null;
    this[_NgClass_6_6] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_15] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_6_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getGetters(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    [_NgValidators_4_12]: core.List
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_4_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_MaterialInputComponent_4_6]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_Focusable_4_7]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_AutoFocusDirective_4_8]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_DateInputDirective_4_9]: dart.fieldType(material_datepicker__date_input.DateInputDirective),
    [_BaseMaterialInput_4_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_4_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [__NgValidators_4_12]: dart.fieldType(core.List),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_6]: dart.fieldType(html.Element),
    [_compView_6]: dart.fieldType(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0),
    [_MaterialCalendarPickerComponent_6_5]: dart.fieldType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent),
    [_NgClass_6_6]: dart.fieldType(src__common__directives__ng_class.NgClass),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(core.bool),
    [_expr_15]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent2 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.new(parentView, parentIndex);
  };
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3 = class _ViewMaterialDatepickerComponent3 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "inner-label";
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.labelMsg;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent3 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.new(parentView, parentIndex);
  };
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4 = class _ViewMaterialDatepickerComponent4 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "preset-dates-wrapper";
      this.createAttr(this[_el_0], "role", "listbox");
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent5, AppViewAndintToAppViewOfMaterialDatepickerComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.presetDates;
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
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent4 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.new(parentView, parentIndex);
  };
  const _compView_0 = Symbol('_compView_0');
  const _MaterialSelectItemComponent_0_5 = Symbol('_MaterialSelectItemComponent_0_5');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5 = class _ViewMaterialDatepickerComponent5 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "closeOnActivate", "false");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialSelectItemComponent_0_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), src__runtime__optimizations.unsafeCast(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, this.parentView.parentView.parentView)[_MaterialPopupComponent_3_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref, null);
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
      let local_presetDate = material_datepicker__range.SingleDayRange._check(this.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_5].closeOnActivate = "false";
      }
      let currVal_0 = _ctx.isPresetDateSelected(local_presetDate);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_presetDate.title);
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
      let local_presetDate = material_datepicker__range.SingleDayRange._check(this.locals[$_get]("$implicit"));
      this.ctx.onPresetClicked(local_presetDate);
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent5 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_datepicker$46template, {
    /*material_datepicker__material_datepicker$46template.styles$MaterialDatepickerComponentHost*/get styles$MaterialDatepickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDatepickerComponent_0_5 = Symbol('_MaterialDatepickerComponent_0_5');
  let const$10;
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0 = class _ViewMaterialDatepickerComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDatepickerComponent_0_5] = new material_datepicker__material_datepicker.MaterialDatepickerComponent.new(this.rootEl, null, time$.Clock._check(this.injectorGet(const$10 || (const$10 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialDatepickerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialDatepickerComponent()).new(0, this, this.rootEl, this[_MaterialDatepickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialDatepickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialDatepickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDatepickerComponent_0_5] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0),
    [_MaterialDatepickerComponent_0_5]: dart.fieldType(material_datepicker__material_datepicker.MaterialDatepickerComponent)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_datepicker$46template, {
    /*material_datepicker__material_datepicker$46template._MaterialDatepickerComponentNgFactory*/get _MaterialDatepickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDatepickerComponent()).new("material-datepicker", dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponentHost0, AppViewAndintToAppViewOfMaterialDatepickerComponent())));
    }
  });
  dart.copyProperties(material_datepicker__material_datepicker$46template, {
    get MaterialDatepickerComponentNgFactory() {
      return material_datepicker__material_datepicker$46template._MaterialDatepickerComponentNgFactory;
    }
  });
  dart.defineLazy(material_datepicker__material_datepicker$46template, {
    /*material_datepicker__material_datepicker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_datepicker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_datepicker$46template._visited)) {
      return;
    }
    material_datepicker__material_datepicker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_datepicker.MaterialDatepickerComponent), material_datepicker__material_datepicker$46template.MaterialDatepickerComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__focus_trap$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    glyph__glyph$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__date_input$46template.initReflector();
    material_datepicker__material_calendar_picker$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_list__material_list_item$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__dropdown_button$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    model__date__date$46template.initReflector();
    utils__angular__css__css$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/material_datepicker.template.ddc", {
    "package:angular_components/material_datepicker/material_datepicker.template.dart": material_datepicker__material_datepicker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_datepicker.template.dart"],"names":[],"mappings":"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","file":"material_datepicker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_datepicker$46template: material_datepicker__material_datepicker$46template
  };
});

//# sourceMappingURL=material_datepicker.template.ddc.js.map
