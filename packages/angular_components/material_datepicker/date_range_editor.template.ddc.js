define(['dart_sdk', 'packages/angular_components/material_datepicker/date_range_editor.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/angular_components/material_select/material_select.template', 'packages/angular_components/material_select/material_select', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/glyph/glyph', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/material_datepicker/material_calendar_picker.template', 'packages/quiver/time', 'packages/angular_components/utils/showhide/showhide', 'packages/angular_components/material_datepicker/material_month_picker.template', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/angular/managed_zone/interface.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/showhide/showhide.template'], function(dart_sdk, date_range_editor$46scss$46css, view_type, change_detection, modules, date_range_editor, material_calendar_picker, material_month_picker, material_select, material_select$, has_disabled, has_renderer, selection_container, material_select_item, material_dropdown_base, activation_handler, material_select_item$, glyph, button_decorator, button_decorator$, glyph$, tooltip_controller, disposer, module, dom_popup_source, icon_tooltip, preset, material_popup, material_button, dark_theme, material_button$, reference, focus_interface, popup_hierarchy, material_popup$, ng_zone, overlay_ref, zindexer, alignment, deferred_content_aware, material_input, deferred_validator, directives, material_input$, material_input_default_value_accessor, base_material_input, comparison_range_editor$46scss$46css, comparison_range_editor, date_range_input, date_range_input$, date, calendar, dom_service, keyboard_only_focus_indicator, next_prev_buttons, next_prev_buttons$, material_calendar_picker$, time, showhide, material_month_picker$, managed_zone, angular, focus, keyboard_only_focus_indicator$, popup, calendar$, module$, preset$, range, material_ripple, material_tooltip, date$, date_formatter, observable, $interface, dom_service$, showhide$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__date_range_editor$46scss$46css$46shim = date_range_editor$46scss$46css.material_datepicker__date_range_editor$46scss$46css$46shim;
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
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const material_datepicker__date_range_editor = date_range_editor.material_datepicker__date_range_editor;
  const material_datepicker__material_calendar_picker = material_calendar_picker.material_datepicker__material_calendar_picker;
  const material_datepicker__material_month_picker = material_month_picker.material_datepicker__material_month_picker;
  const material_select__material_select$46template = material_select.material_select__material_select$46template;
  const material_select__material_select = material_select$.material_select__material_select;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_tooltip__module = module.material_tooltip__module;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const src__material_tooltip__tooltip = icon_tooltip.src__material_tooltip__tooltip;
  const material_datepicker__preset = preset.material_datepicker__preset;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const src__material_datepicker__comparison_range_editor$46template = comparison_range_editor$46scss$46css.src__material_datepicker__comparison_range_editor$46template;
  const src__material_datepicker__date_range_editor_model$46template = comparison_range_editor$46scss$46css.src__material_datepicker__date_range_editor_model$46template;
  const src__material_datepicker__comparison_range_editor = comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const material_datepicker__date_range_input$46template = date_range_input.material_datepicker__date_range_input$46template;
  const material_datepicker__date_range_input = date_range_input$.material_datepicker__date_range_input;
  const model__date__date = date.model__date__date;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_datepicker__next_prev_buttons$46template = next_prev_buttons.material_datepicker__next_prev_buttons$46template;
  const material_datepicker__next_prev_buttons = next_prev_buttons$.material_datepicker__next_prev_buttons;
  const material_datepicker__material_calendar_picker$46template = material_calendar_picker$.material_datepicker__material_calendar_picker$46template;
  const time$ = time.time;
  const utils__showhide__showhide = showhide.utils__showhide__showhide;
  const material_datepicker__material_month_picker$46template = material_month_picker$.material_datepicker__material_month_picker$46template;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_datepicker__calendar$46template = calendar$.material_datepicker__calendar$46template;
  const material_datepicker__module$46template = module$.material_datepicker__module$46template;
  const material_datepicker__preset$46template = preset$.material_datepicker__preset$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_tooltip__material_tooltip$46template = material_tooltip.material_tooltip__material_tooltip$46template;
  const model__date__date$46template = date$.model__date__date$46template;
  const model__date__date_formatter$46template = date_formatter.model__date__date_formatter$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__angular__managed_zone__interface$46template = $interface.utils__angular__managed_zone__interface$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__showhide__showhide$46template = showhide$.utils__showhide__showhide$46template;
  const _root = Object.create(null);
  const material_datepicker__date_range_editor$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $isNotEmpty = dartx.isNotEmpty;
  const $text = dartx.text;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfDateRangeEditorComponent = () => (AppViewOfDateRangeEditorComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent)))();
  let AppViewAndintToAppViewOfDateRangeEditorComponent = () => (AppViewAndintToAppViewOfDateRangeEditorComponent = dart.constFn(dart.fnType(AppViewOfDateRangeEditorComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMaterialCalendarPickerComponent = () => (JSArrayOfMaterialCalendarPickerComponent = dart.constFn(_interceptors.JSArray$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let ListOfMaterialCalendarPickerComponent = () => (ListOfMaterialCalendarPickerComponent = dart.constFn(core.List$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let _ViewDateRangeEditorComponent18ToListOfMaterialCalendarPickerComponent = () => (_ViewDateRangeEditorComponent18ToListOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(ListOfMaterialCalendarPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18])))();
  let _ViewDateRangeEditorComponent11ToListOfMaterialCalendarPickerComponent = () => (_ViewDateRangeEditorComponent11ToListOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(ListOfMaterialCalendarPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11])))();
  let JSArrayOfMaterialMonthPickerComponent = () => (JSArrayOfMaterialMonthPickerComponent = dart.constFn(_interceptors.JSArray$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let ListOfMaterialMonthPickerComponent = () => (ListOfMaterialMonthPickerComponent = dart.constFn(core.List$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let _ViewDateRangeEditorComponent19ToListOfMaterialMonthPickerComponent = () => (_ViewDateRangeEditorComponent19ToListOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(ListOfMaterialMonthPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19])))();
  let _ViewDateRangeEditorComponent11ToListOfMaterialMonthPickerComponent = () => (_ViewDateRangeEditorComponent11ToListOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(ListOfMaterialMonthPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfSelectionItem = () => (JSArrayOfSelectionItem = dart.constFn(_interceptors.JSArray$(model__selection__selection_container.SelectionItem)))();
  let ListOfSelectionItem = () => (ListOfSelectionItem = dart.constFn(core.List$(model__selection__selection_container.SelectionItem)))();
  let _ViewDateRangeEditorComponent2ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent2ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2])))();
  let _ViewDateRangeEditorComponent3ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent3ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3])))();
  let _ViewDateRangeEditorComponent8ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent8ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8])))();
  let _ViewDateRangeEditorComponent7ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent7ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7])))();
  let JSArrayOfListOfSelectionItem = () => (JSArrayOfListOfSelectionItem = dart.constFn(_interceptors.JSArray$(ListOfSelectionItem())))();
  let _ViewDateRangeEditorComponent6ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent6ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6])))();
  let _ViewDateRangeEditorComponent9ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent9ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let ComponentRefOfDateRangeEditorComponent = () => (ComponentRefOfDateRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent)))();
  let ComponentFactoryOfDateRangeEditorComponent = () => (ComponentFactoryOfDateRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__date_range_editor.DateRangeEditorComponent)))();
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template.styles$DateRangeEditorComponent*/get styles$DateRangeEditorComponent() {
      return [material_datepicker__date_range_editor$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _appEl_1 = Symbol('_appEl_1');
  const _query_MaterialCalendarPickerComponent_1_0_isDirty = Symbol('_query_MaterialCalendarPickerComponent_1_0_isDirty');
  const _query_MaterialMonthPickerComponent_1_1_isDirty = Symbol('_query_MaterialMonthPickerComponent_1_1_isDirty');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  const _MaterialCalendarPickerComponent_0_5 = Symbol('_MaterialCalendarPickerComponent_0_5');
  const _appEl_10 = Symbol('_appEl_10');
  const _MaterialMonthPickerComponent_0_5 = Symbol('_MaterialMonthPickerComponent_0_5');
  const _appEl_11 = Symbol('_appEl_11');
  material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0 = class ViewDateRangeEditorComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent1, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent11, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = dart.test(_ctx.presets[$isNotEmpty]) && dart.test(_ctx.shouldShowPredefinedList);
      this[_NgIf_1_9].ngIf = dart.test(_ctx.supportsCustomRange) && dart.test(_ctx.shouldShowCustomDateRangeColumn);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MaterialCalendarPickerComponent_1_0_isDirty])) {
          this.ctx.calendarPicker = src__core__linker__app_view_utils.firstOrNull(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, this[_appEl_1].mapNestedViews(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, dart.fn(nestedView => nestedView[_appEl_10].mapNestedViews(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, dart.fn(nestedView => JSArrayOfMaterialCalendarPickerComponent().of([nestedView[_MaterialCalendarPickerComponent_0_5]]), _ViewDateRangeEditorComponent18ToListOfMaterialCalendarPickerComponent())), _ViewDateRangeEditorComponent11ToListOfMaterialCalendarPickerComponent())));
          this[_query_MaterialCalendarPickerComponent_1_0_isDirty] = false;
        }
        if (dart.test(this[_query_MaterialMonthPickerComponent_1_1_isDirty])) {
          this.ctx.monthSelector = src__core__linker__app_view_utils.firstOrNull(material_datepicker__material_month_picker.MaterialMonthPickerComponent, this[_appEl_1].mapNestedViews(material_datepicker__material_month_picker.MaterialMonthPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, dart.fn(nestedView => nestedView[_appEl_11].mapNestedViews(material_datepicker__material_month_picker.MaterialMonthPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, dart.fn(nestedView => JSArrayOfMaterialMonthPickerComponent().of([nestedView[_MaterialMonthPickerComponent_0_5]]), _ViewDateRangeEditorComponent19ToListOfMaterialMonthPickerComponent())), _ViewDateRangeEditorComponent11ToListOfMaterialMonthPickerComponent())));
          this[_query_MaterialMonthPickerComponent_1_1_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1];
      t$ == null ? null : t$.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_2 = this.ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateElemClass(this.rootEl, "compact", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_query_MaterialCalendarPickerComponent_1_0_isDirty] = true;
    this[_query_MaterialMonthPickerComponent_1_1_isDirty] = true;
    this[_NgIf_1_9] = null;
    this[_expr_2] = null;
    material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("date-range-editor"));
    let t = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
    t == null ? material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/date_range_editor.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__date_range_editor$46template.styles$DateRangeEditorComponent) : t;
    this.setupComponentType(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType);
  }).prototype = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_MaterialCalendarPickerComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_MaterialMonthPickerComponent_1_1_isDirty]: dart.fieldType(core.bool),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, {
    /*material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialSelectComponent_0_5 = Symbol('_MaterialSelectComponent_0_5');
  const _query_SelectionItem_0_0_isDirty = Symbol('_query_SelectionItem_0_0_isDirty');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _el_3 = Symbol('_el_3');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgFor_4_9 = Symbol('_NgFor_4_9');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_4 = Symbol('_expr_4');
  const _SelectionItem_1_6 = Symbol('_SelectionItem_1_6');
  const _SelectionItem_0_10 = Symbol('_SelectionItem_0_10');
  const _appEl_3 = Symbol('_appEl_3');
  const _SelectionItem_5_6 = Symbol('_SelectionItem_5_6');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1 = class _ViewDateRangeEditorComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_select__material_select$46template.ViewMaterialSelectComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "preset-list";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialSelectComponent_0_5] = new material_select__material_select.MaterialSelectComponent.new();
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent2, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent3, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let doc = html.document;
      this[_el_3] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_3].className = "group";
      this.createAttr(this[_el_3], "role", "listbox");
      this.addShimC(this[_el_3]);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_3][$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 3, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent6, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgFor_4_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent9, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent10, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_0].create(this[_MaterialSelectComponent_0_5], [JSArrayOfObject().of([this[_appEl_1], this[_appEl_2], this[_el_3], this[_appEl_5], this[_appEl_6]])]);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(model__selection__selection_container.SelectionContainer)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialSelectComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectComponent_0_5].width = 0;
      }
      this[_NgIf_1_9].ngIf = _ctx.supportsClearRange;
      this[_NgIf_2_9].ngIf = _ctx.supportsCustomRange;
      let currVal_4 = _ctx.presets;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_NgFor_4_9].ngForOf = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_4_9].ngDoCheck();
      }
      this[_NgIf_5_9].ngIf = _ctx.supportsDaysInputs;
      this[_NgIf_6_9].ngIf = _ctx.supportsComparison;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_SelectionItem_0_0_isDirty])) {
          this[_MaterialSelectComponent_0_5].selectItems = src__core__linker__app_view_utils.flattenNodes(model__selection__selection_container.SelectionItem, JSArrayOfListOfSelectionItem().of([this[_appEl_1].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_SelectionItem_1_6]]), _ViewDateRangeEditorComponent2ToListOfSelectionItem())), this[_appEl_2].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_SelectionItem_1_6]]), _ViewDateRangeEditorComponent3ToListOfSelectionItem())), this[_appEl_4].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, dart.fn(nestedView => src__core__linker__app_view_utils.flattenNodes(model__selection__selection_container.SelectionItem, JSArrayOfListOfSelectionItem().of([JSArrayOfSelectionItem().of([nestedView[_SelectionItem_0_10]]), nestedView[_appEl_2].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, dart.fn(nestedView => nestedView[_appEl_3].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_SelectionItem_0_10]]), _ViewDateRangeEditorComponent8ToListOfSelectionItem())), _ViewDateRangeEditorComponent7ToListOfSelectionItem()))])), _ViewDateRangeEditorComponent6ToListOfSelectionItem())), this[_appEl_5].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_SelectionItem_1_6], nestedView[_SelectionItem_5_6]]), _ViewDateRangeEditorComponent9ToListOfSelectionItem()))]));
          this[_query_SelectionItem_0_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.isBasic;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0], "basic-preset-list", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_4];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_5];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_6];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_compView_0];
      t$3 == null ? null : t$3.destroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialSelectComponent_0_5] = null;
    this[_appEl_1] = null;
    this[_query_SelectionItem_0_0_isDirty] = true;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_el_3] = null;
    this[_appEl_4] = null;
    this[_NgFor_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_4] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select$46template.ViewMaterialSelectComponent0),
    [_MaterialSelectComponent_0_5]: dart.fieldType(material_select__material_select.MaterialSelectComponent),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_SelectionItem_0_0_isDirty]: dart.fieldType(core.bool),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_3]: dart.fieldType(html.DivElement),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_4_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.new(parentView, parentIndex);
  };
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialSelectItemComponent_1_5 = Symbol('_MaterialSelectItemComponent_1_5');
  const _text_2 = Symbol('_text_2');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2 = class _ViewDateRangeEditorComponent2 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "group";
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialSelectItemComponent_1_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_1].ref, null);
      this[_SelectionItem_1_6] = this[_MaterialSelectItemComponent_1_5];
      this[_text_2] = html.Text.new((() => {
        let l = material_datepicker__date_range_editor.DateRangeEditorComponent.clearRangeMsg;
        return l != null ? l : "";
      })());
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], [JSArrayOfText().of([this[_text_2]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'onClearRangeClicked')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialSelectItemComponent_1_5];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_SelectionItem_1_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_1_5].ngOnInit();
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_SelectionItem_1_6] = null;
    this[_text_2] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_SelectionItem_1_6]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_text_2]: dart.fieldType(html.Text)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent2 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.new(parentView, parentIndex);
  };
  const _el_2 = Symbol('_el_2');
  const _text_3 = Symbol('_text_3');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _expr_3 = Symbol('_expr_3');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3 = class _ViewDateRangeEditorComponent3 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "group";
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.createAttr(this[_el_1], "closeOnActivate", "false");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialSelectItemComponent_1_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_1].ref, null);
      this[_SelectionItem_1_6] = this[_MaterialSelectItemComponent_1_5];
      this[_el_2] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_2]);
      this[_text_3] = html.Text.new((() => {
        let l = material_datepicker__date_range_editor.DateRangeEditorComponent.customRangeMsg;
        return l != null ? l : "";
      })());
      this[_el_2][$append](this[_text_3]);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent4, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent5, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], [JSArrayOfObject().of([this[_el_2], this[_appEl_5]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'onCustomClicked')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialSelectItemComponent_1_5];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_SelectionItem_1_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_5].closeOnActivate = "false";
      }
      let currVal_0 = _ctx.isCustomRangeSelected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_1_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_1_5].ngOnInit();
      }
      this[_NgIf_4_9].ngIf = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      this[_NgIf_5_9].ngIf = _ctx.isBasic;
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_1].detectHostChanges(firstCheck);
      let currVal_2 = dart.test(_ctx.isBasic) && !dart.test(_ctx.isCustomRangeSelected);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateClass(this[_el_2], "custom-tab-left", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.updateClass(this[_el_2], "custom_tab-left-selected", currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_4];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_5];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_1];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_SelectionItem_1_6] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_SelectionItem_1_6]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_el_2]: dart.fieldType(html.DivElement),
    [_text_3]: dart.fieldType(html.Text),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent3 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4 = class _ViewDateRangeEditorComponent4 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "custom_range_desc";
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.customRangeDescription;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent4 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.new(parentView, parentIndex);
  };
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _GlyphComponent_0_6 = Symbol('_GlyphComponent_0_6');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5 = class _ViewDateRangeEditorComponent5 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "expend-more";
      this.createAttr(this[_el_0], "icon", "expand_more");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_GlyphComponent_0_6] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_GlyphComponent_0_6], []);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_0_6].icon = "expand_more";
        changed = true;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_GlyphComponent_0_6] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_GlyphComponent_0_6]: dart.fieldType(glyph__glyph.GlyphComponent)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent5 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.new(parentView, parentIndex);
  };
  const _MaterialSelectItemComponent_0_8 = Symbol('_MaterialSelectItemComponent_0_8');
  const _MaterialTooltipDirective_0_9 = Symbol('_MaterialTooltipDirective_0_9');
  const __TooltipController_0_11 = Symbol('__TooltipController_0_11');
  const _expr_1 = Symbol('_expr_1');
  const _expr_5 = Symbol('_expr_5');
  const _TooltipController_0_11 = Symbol('_TooltipController_0_11');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6 = class _ViewDateRangeEditorComponent6 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    get [_TooltipController_0_11]() {
      if (this[__TooltipController_0_11] == null) {
        this[__TooltipController_0_11] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.parentView.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.viewData.parentIndex, null)));
      }
      return this[__TooltipController_0_11];
    }
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "closeOnActivate", "false");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialSelectItemComponent_0_8] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_0].ref, null);
      this[_MaterialTooltipDirective_0_9] = new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.viewData.parentIndex)), this[_appEl_0], html.HtmlElement._check(this[_el_0]), this[_appEl_0], this[_compView_0].ref, html.Window._check(this.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.viewData.parentIndex)));
      this[_SelectionItem_0_10] = this[_MaterialSelectItemComponent_0_8];
      this[_text_1] = html.Text.new("");
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent7, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_8], [JSArrayOfObject().of([this[_text_1], this[_appEl_2]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_0_8].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_appEl_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialSelectItemComponent_0_8];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_SelectionItem_0_10];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_TooltipController_0_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_preset = material_datepicker__preset.DatepickerPreset._check(this.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_8].closeOnActivate = "false";
      }
      let currVal_0 = !dart.test(_ctx.isValid(local_preset));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_8].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelected(local_preset.range);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialSelectItemComponent_0_8].selected = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_0_8].ngOnInit();
      }
      if (firstCheck) {
        if (!(material_datepicker__date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip == null)) {
          this[_MaterialTooltipDirective_0_9].text = material_datepicker__date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip;
        }
      }
      let currVal_4 = !dart.test(_ctx.isValid(local_preset));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialTooltipDirective_0_9].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_0_9].ngOnInit();
      }
      this[_NgIf_2_9].ngIf = local_preset.alternatives != null && dart.test(local_preset.alternatives[$isNotEmpty]);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_5 = src__core__linker__app_view_utils.interpolate0(local_preset.title);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_text_1][$text] = core.String._check(currVal_5);
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTooltipDirective_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialSelectItemComponent_0_8].ngOnDestroy();
      this[_MaterialTooltipDirective_0_9].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_preset = material_datepicker__preset.DatepickerPreset._check(this.locals[$_get]("$implicit"));
      this.ctx.onRangeClicked(html.UIEvent._check($event), local_preset.range);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialSelectItemComponent_0_8] = null;
    this[_MaterialTooltipDirective_0_9] = null;
    this[_SelectionItem_0_10] = null;
    this[__TooltipController_0_11] = null;
    this[_text_1] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    [_TooltipController_0_11]: dart.dynamic
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialSelectItemComponent_0_8]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_MaterialTooltipDirective_0_9]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [_SelectionItem_0_10]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [__TooltipController_0_11]: dart.fieldType(dart.dynamic),
    [_text_1]: dart.fieldType(html.Text),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent6 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.new(parentView, parentIndex);
  };
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  const _PopupSourceDirective_0_7 = Symbol('_PopupSourceDirective_0_7');
  const _GlyphComponent_1_5 = Symbol('_GlyphComponent_1_5');
  const _compView_2 = Symbol('_compView_2');
  const _MaterialPopupComponent_2_8 = Symbol('_MaterialPopupComponent_2_8');
  const __PopupHierarchy_2_11 = Symbol('__PopupHierarchy_2_11');
  const __PopupRef_2_12 = Symbol('__PopupRef_2_12');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _expr_6 = Symbol('_expr_6');
  const _PopupHierarchy_2_11 = Symbol('_PopupHierarchy_2_11');
  const _PopupRef_2_12 = Symbol('_PopupRef_2_12');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  const _handle_keypress_0_1 = Symbol('_handle_keypress_0_1');
  const _handle_trigger_0_2 = Symbol('_handle_trigger_0_2');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7 = class _ViewDateRangeEditorComponent7 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    get [_PopupHierarchy_2_11]() {
      if (this[__PopupHierarchy_2_11] == null) {
        this[__PopupHierarchy_2_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupHierarchy_2_11];
    }
    get [_PopupRef_2_12]() {
      if (this[__PopupRef_2_12] == null) {
        this[__PopupRef_2_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupRef_2_12];
    }
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "alignPositionX", "after");
      this.createAttr(this[_el_0], "alignPositionY", "start");
      this[_el_0].className = "preset-dropdown-button";
      this.createAttr(this[_el_0], "icon", "");
      this.createAttr(this[_el_0], "popupSource", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), this[_AcxDarkTheme_0_5], this[_compView_0].ref, null);
      this[_PopupSourceDirective_0_7] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.viewData.parentIndex)), html.HtmlElement._check(this[_el_0]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.parentView.parentView.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.parentView.parentView.viewData.parentIndex, null)), null);
      this[_compView_1] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.createAttr(this[_el_1], "icon", "arrow_drop_down");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_GlyphComponent_1_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_GlyphComponent_1_5], []);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfElement().of([this[_el_1]])]);
      this[_compView_2] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, this[_el_2]);
      this[_MaterialPopupComponent_2_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.parentView.parentView.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.parentView.parentView.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.parentView.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.parentView.parentView.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.parentView.parentView.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.injectorGet(const$1 || (const$1 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.parentView.parentView.viewData.parentIndex)), core.bool._check(this.parentView.parentView.parentView.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.parentView.parentView.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.parentView.parentView.viewData.parentIndex, null)), this[_compView_2].ref, this[_appEl_2], new src__core__linker__element_ref.ElementRef.new(this[_el_2]));
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent8, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_2].create(this[_MaterialPopupComponent_2_8], [const$3 || (const$3 = dart.constList([], dart.dynamic)), JSArrayOfViewContainer().of([this[_appEl_3]]), const$4 || (const$4 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_keypress_0_1)));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_2)));
      this.init([this[_el_0], this[_appEl_2]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialPopupComponent_2_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupHierarchy_2_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupRef_2_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_menuSource = this[_PopupSourceDirective_0_7];
      let local_preset = material_datepicker__preset.DatepickerPreset._check(this.parentView.locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6].ngOnInit();
      }
      if (firstCheck) {
        this[_PopupSourceDirective_0_7].alignX = "after";
        this[_PopupSourceDirective_0_7].alignY = "start";
      }
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_1_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_2_8].offsetX = 9;
        if (!(0 - 4 === null)) {
          this[_MaterialPopupComponent_2_8].offsetY = 0 - 4;
        }
      }
      let currVal_5 = local_menuSource;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialPopupComponent_2_8].source = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = local_preset.alternatives;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_NgFor_3_9].ngForOf = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_7].ngAfterViewInit();
          this[_MaterialPopupComponent_2_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_1];
      t$1 == null ? null : t$1.destroy();
      let t$2 = this[_compView_2];
      t$2 == null ? null : t$2.destroy();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_2_8].ngOnDestroy();
    }
    [_handle_click_0_0]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    [_handle_keypress_0_1]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    [_handle_trigger_0_2]($event) {
      let local_popup = this[_MaterialPopupComponent_2_8];
      local_popup.toggle();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_GlyphComponent_1_5] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_appEl_2] = null;
    this[_MaterialPopupComponent_2_8] = null;
    this[__PopupHierarchy_2_11] = null;
    this[__PopupRef_2_12] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_keypress_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_0_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_PopupHierarchy_2_11]: dart.dynamic,
    [_PopupRef_2_12]: dart.dynamic
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_PopupSourceDirective_0_7]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_1_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_2_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_2_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_2_12]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent7 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.new(parentView, parentIndex);
  };
  const __TooltipController_0_13 = Symbol('__TooltipController_0_13');
  const _TooltipController_0_13 = Symbol('_TooltipController_0_13');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8 = class _ViewDateRangeEditorComponent8 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    get [_TooltipController_0_13]() {
      if (this[__TooltipController_0_13] == null) {
        this[__TooltipController_0_13] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, this.parentView.parentView)[_TooltipController_0_11]), utils__disposer__disposer.Disposer._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.parentView.parentView.viewData.parentIndex, null)));
      }
      return this[__TooltipController_0_13];
    }
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = src__core__linker__app_view_utils.interpolate2("", "preset-dropdown-item", " ", material_select__material_select_item.MaterialSelectItemComponent.hostClass, "");
      this.createAttr(this[_el_0], "closeOnActivate", "false");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialSelectItemComponent_0_8] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, this.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref, null);
      this[_MaterialTooltipDirective_0_9] = new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_0], html.HtmlElement._check(this[_el_0]), this[_appEl_0], this[_compView_0].ref, html.Window._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.viewData.parentIndex)));
      this[_SelectionItem_0_10] = this[_MaterialSelectItemComponent_0_8];
      this[_text_1] = html.Text.new("");
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_8], [JSArrayOfText().of([this[_text_1]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_0_8].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_appEl_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialSelectItemComponent_0_8];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_SelectionItem_0_10];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_TooltipController_0_13];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_alternative = this.locals[$_get]("$implicit");
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_8].closeOnActivate = "false";
      }
      let currVal_0 = !dart.test(_ctx.isValid(material_datepicker__preset.DatepickerPreset._check(local_alternative)));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_8].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isAlternativePresetSelected(material_datepicker__preset.DatepickerPreset._check(local_alternative));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialSelectItemComponent_0_8].selected = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_0_8].ngOnInit();
      }
      if (firstCheck) {
        if (!(material_datepicker__date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip == null)) {
          this[_MaterialTooltipDirective_0_9].text = material_datepicker__date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip;
        }
      }
      let currVal_4 = !dart.test(_ctx.isValid(material_datepicker__preset.DatepickerPreset._check(local_alternative)));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialTooltipDirective_0_9].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_0_9].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_5 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_alternative, 'shortTitle'));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_text_1][$text] = core.String._check(currVal_5);
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTooltipDirective_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView.parentView.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_MaterialSelectItemComponent_0_8].ngOnDestroy();
      this[_MaterialTooltipDirective_0_9].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_preset = material_datepicker__preset.DatepickerPreset._check(this.parentView.parentView.locals[$_get]("$implicit"));
      let local_alternative = this.locals[$_get]("$implicit");
      this.ctx.onAlternativePresetClicked(html.UIEvent._check($event), local_preset, material_datepicker__preset.DatepickerPreset._check(local_alternative));
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialSelectItemComponent_0_8] = null;
    this[_MaterialTooltipDirective_0_9] = null;
    this[_SelectionItem_0_10] = null;
    this[__TooltipController_0_13] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_TooltipController_0_13]: dart.dynamic
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialSelectItemComponent_0_8]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_MaterialTooltipDirective_0_9]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [_SelectionItem_0_10]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [__TooltipController_0_13]: dart.fieldType(dart.dynamic),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent8 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.new(parentView, parentIndex);
  };
  const _DeferredValidator_2_5 = Symbol('_DeferredValidator_2_5');
  const _NgValidators_2_6 = Symbol('_NgValidators_2_6');
  const _NgModel_2_7 = Symbol('_NgModel_2_7');
  const _NgControl_2_8 = Symbol('_NgControl_2_8');
  const _MaterialInputComponent_2_9 = Symbol('_MaterialInputComponent_2_9');
  const _BaseMaterialInput_2_10 = Symbol('_BaseMaterialInput_2_10');
  const _MaterialInputDefaultValueAccessor_2_11 = Symbol('_MaterialInputDefaultValueAccessor_2_11');
  const _text_4 = Symbol('_text_4');
  const _el_5 = Symbol('_el_5');
  const _compView_5 = Symbol('_compView_5');
  const _MaterialSelectItemComponent_5_5 = Symbol('_MaterialSelectItemComponent_5_5');
  const _el_6 = Symbol('_el_6');
  const _compView_6 = Symbol('_compView_6');
  const _DeferredValidator_6_5 = Symbol('_DeferredValidator_6_5');
  const _NgValidators_6_6 = Symbol('_NgValidators_6_6');
  const _NgModel_6_7 = Symbol('_NgModel_6_7');
  const _NgControl_6_8 = Symbol('_NgControl_6_8');
  const _MaterialInputComponent_6_9 = Symbol('_MaterialInputComponent_6_9');
  const _BaseMaterialInput_6_10 = Symbol('_BaseMaterialInput_6_10');
  const _MaterialInputDefaultValueAccessor_6_11 = Symbol('_MaterialInputDefaultValueAccessor_6_11');
  const _el_7 = Symbol('_el_7');
  const _text_8 = Symbol('_text_8');
  const _expr_8 = Symbol('_expr_8');
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  const _handle_trigger_1_0 = Symbol('_handle_trigger_1_0');
  const _handle_click_2_0 = Symbol('_handle_click_2_0');
  const _handle_ngModelChange_2_1 = Symbol('_handle_ngModelChange_2_1');
  const _handle_trigger_5_0 = Symbol('_handle_trigger_5_0');
  const _handle_click_6_0 = Symbol('_handle_click_6_0');
  const _handle_ngModelChange_6_1 = Symbol('_handle_ngModelChange_6_1');
  let const$9;
  let const$10;
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9 = class _ViewDateRangeEditorComponent9 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "days group";
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this[_el_1].className = src__core__linker__app_view_utils.interpolate2("", "days-input days-to-today", " ", material_select__material_select_item.MaterialSelectItemComponent.hostClass, "");
      this.createAttr(this[_el_1], "closeOnActivate", "false");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialSelectItemComponent_1_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_1].ref, null);
      this[_SelectionItem_1_6] = this[_MaterialSelectItemComponent_1_5];
      this[_compView_2] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_DeferredValidator_2_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_2_6] = [this[_DeferredValidator_2_5]];
      this[_NgModel_2_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_2_6], null);
      this[_NgControl_2_8] = this[_NgModel_2_7];
      this[_MaterialInputComponent_2_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgControl_2_8], this[_compView_2].ref, this[_DeferredValidator_2_5]);
      this[_BaseMaterialInput_2_10] = this[_MaterialInputComponent_2_9];
      this[_MaterialInputDefaultValueAccessor_2_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_2_10], this[_NgControl_2_8]);
      this[_compView_2].create(this[_MaterialInputComponent_2_9], [const$5 || (const$5 = dart.constList([], dart.dynamic)), const$6 || (const$6 = dart.constList([], dart.dynamic))]);
      this[_el_3] = doc[$createElement]("span");
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new((() => {
        let l = material_datepicker__date_range_editor.DateRangeEditorComponent.daysToTodayMsg;
        return l != null ? l : "";
      })());
      this[_el_3][$append](this[_text_4]);
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], [JSArrayOfElement().of([this[_el_2], this[_el_3]])]);
      this[_compView_5] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      this[_el_0][$append](this[_el_5]);
      this[_el_5].className = src__core__linker__app_view_utils.interpolate2("", "days-input days-to-yesterday", " ", material_select__material_select_item.MaterialSelectItemComponent.hostClass, "");
      this.createAttr(this[_el_5], "closeOnActivate", "false");
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_MaterialSelectItemComponent_5_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_5]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_5].ref, null);
      this[_SelectionItem_5_6] = this[_MaterialSelectItemComponent_5_5];
      this[_compView_6] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 6);
      this[_el_6] = this[_compView_6].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_6]));
      this[_DeferredValidator_6_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_6_6] = [this[_DeferredValidator_6_5]];
      this[_NgModel_6_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_6_6], null);
      this[_NgControl_6_8] = this[_NgModel_6_7];
      this[_MaterialInputComponent_6_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgControl_6_8], this[_compView_6].ref, this[_DeferredValidator_6_5]);
      this[_BaseMaterialInput_6_10] = this[_MaterialInputComponent_6_9];
      this[_MaterialInputDefaultValueAccessor_6_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_6_10], this[_NgControl_6_8]);
      this[_compView_6].create(this[_MaterialInputComponent_6_9], [const$7 || (const$7 = dart.constList([], dart.dynamic)), const$8 || (const$8 = dart.constList([], dart.dynamic))]);
      this[_el_7] = doc[$createElement]("span");
      this.addShimE(this[_el_7]);
      this[_text_8] = html.Text.new((() => {
        let l = material_datepicker__date_range_editor.DateRangeEditorComponent.daysToYesterdayMsg;
        return l != null ? l : "";
      })());
      this[_el_7][$append](this[_text_8]);
      this[_compView_5].create(this[_MaterialSelectItemComponent_5_5], [JSArrayOfElement().of([this[_el_6], this[_el_7]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_1_0)));
      this[_el_2][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_2_0)));
      let subscription_1 = this[_NgModel_2_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_2_1)));
      let subscription_2 = this[_MaterialSelectItemComponent_5_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_5_0)));
      this[_el_6][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_6_0)));
      let subscription_3 = this[_NgModel_6_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_6_1)));
      this.init([this[_el_0]], [subscription_0, subscription_1, subscription_2, subscription_3]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 2 === nodeIndex) {
        return this[_DeferredValidator_2_5];
      }
      if (token === (const$9 || (const$9 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 2 === nodeIndex) {
        return this[_NgValidators_2_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 2 === nodeIndex) {
        return this[_NgModel_2_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 2 === nodeIndex) {
        return this[_NgControl_2_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 2 === nodeIndex) {
        return this[_MaterialInputComponent_2_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 2 === nodeIndex) {
        return this[_BaseMaterialInput_2_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 2 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_2_11];
      }
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_MaterialSelectItemComponent_1_5];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_SelectionItem_1_6];
      }
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 6 === nodeIndex) {
        return this[_DeferredValidator_6_5];
      }
      if (token === (const$10 || (const$10 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 6 === nodeIndex) {
        return this[_NgValidators_6_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 6 === nodeIndex) {
        return this[_NgModel_6_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 6 === nodeIndex) {
        return this[_NgControl_6_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 6 === nodeIndex) {
        return this[_MaterialInputComponent_6_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 6 === nodeIndex) {
        return this[_BaseMaterialInput_6_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 6 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_6_11];
      }
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_MaterialSelectItemComponent_5_5];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_SelectionItem_5_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_5].closeOnActivate = "false";
      }
      let currVal_0 = _ctx.isSelected(_ctx.daysToTodayRange);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_1_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_1_5].ngOnInit();
      }
      changed = false;
      this[_NgModel_2_7].model = _ctx.daysToToday;
      this[_NgModel_2_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_2_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_2_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_3 = _ctx.maxDaysInputLength;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialInputComponent_2_9].maxCount = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialSelectItemComponent_5_5].closeOnActivate = "false";
      }
      let currVal_5 = _ctx.isSelected(_ctx.daysToYesterdayRange);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialSelectItemComponent_5_5].selected = currVal_5;
        this[_expr_5] = currVal_5;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_5_5].ngOnInit();
      }
      changed = false;
      this[_NgModel_6_7].model = _ctx.daysToYesterday;
      this[_NgModel_6_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_6_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_6_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_8 = _ctx.maxDaysInputLength;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialInputComponent_6_9].maxCount = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_5].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_6].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_2_9].ngAfterViewInit();
          this[_MaterialInputComponent_6_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      let t$ = this[_compView_2];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_5];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_6];
      t$1 == null ? null : t$1.destroy();
      this[_MaterialInputComponent_2_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_2_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
      this[_MaterialInputComponent_6_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_6_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_5_5].ngOnDestroy();
    }
    [_handle_trigger_1_0]($event) {
      this.ctx.onRangeClicked(html.UIEvent._check($event), this.ctx.daysToTodayRange);
    }
    [_handle_click_2_0]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    [_handle_ngModelChange_2_1]($event) {
      this.ctx.daysToToday = core.String._check($event);
    }
    [_handle_trigger_5_0]($event) {
      this.ctx.onRangeClicked(html.UIEvent._check($event), this.ctx.daysToYesterdayRange);
    }
    [_handle_click_6_0]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    [_handle_ngModelChange_6_1]($event) {
      this.ctx.daysToYesterday = core.String._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_SelectionItem_1_6] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_DeferredValidator_2_5] = null;
    this[_NgValidators_2_6] = null;
    this[_NgModel_2_7] = null;
    this[_NgControl_2_8] = null;
    this[_MaterialInputComponent_2_9] = null;
    this[_BaseMaterialInput_2_10] = null;
    this[_MaterialInputDefaultValueAccessor_2_11] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_MaterialSelectItemComponent_5_5] = null;
    this[_SelectionItem_5_6] = null;
    this[_el_6] = null;
    this[_compView_6] = null;
    this[_DeferredValidator_6_5] = null;
    this[_NgValidators_6_6] = null;
    this[_NgModel_6_7] = null;
    this[_NgControl_6_8] = null;
    this[_MaterialInputComponent_6_9] = null;
    this[_BaseMaterialInput_6_10] = null;
    this[_MaterialInputDefaultValueAccessor_6_11] = null;
    this[_el_7] = null;
    this[_text_8] = null;
    this[_expr_0] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_8] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_2_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_5_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_6_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_6_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_SelectionItem_1_6]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_2_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_2_6]: dart.fieldType(core.List),
    [_NgModel_2_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_2_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_2_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_2_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_2_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_5_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_SelectionItem_5_6]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_el_6]: dart.fieldType(html.Element),
    [_compView_6]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_6_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_6_6]: dart.fieldType(core.List),
    [_NgModel_6_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_6_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_6_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_6_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_6_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_el_7]: dart.fieldType(html.Element),
    [_text_8]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.int),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.int)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent9 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.new(parentView, parentIndex);
  };
  const _ComparisonRangeEditorComponent_1_5 = Symbol('_ComparisonRangeEditorComponent_1_5');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10 = class _ViewDateRangeEditorComponent10 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "comparison group";
      this.addShimC(this[_el_0]);
      this[_compView_1] = new src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_ComparisonRangeEditorComponent_1_5] = new src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new();
      this[_compView_1].create(this[_ComparisonRangeEditorComponent_1_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_ComparisonRangeEditorComponent_1_5].model = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_ComparisonRangeEditorComponent_1_5] = null;
    this[_expr_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0),
    [_ComparisonRangeEditorComponent_1_5]: dart.fieldType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent10 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.new(parentView, parentIndex);
  };
  const _anchor_2 = Symbol('_anchor_2');
  const _el_2_0 = Symbol('_el_2_0');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _DateRangeInputComponent_4_5 = Symbol('_DateRangeInputComponent_4_5');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _anchor_8 = Symbol('_anchor_8');
  const _el_8_0 = Symbol('_el_8_0');
  const _el_9 = Symbol('_el_9');
  const _NgIf_10_9 = Symbol('_NgIf_10_9');
  const _NgIf_11_9 = Symbol('_NgIf_11_9');
  const _expr_7 = Symbol('_expr_7');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _handle_rangeChange_4_1 = Symbol('_handle_rangeChange_4_1');
  const _handle_stateChange_4_0 = Symbol('_handle_stateChange_4_0');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11 = class _ViewDateRangeEditorComponent11 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "right-column";
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent12, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_anchor_2] = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](this[_anchor_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_3].className = "range-input";
      this.addShimC(this[_el_3]);
      this[_compView_4] = new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_3][$append](this[_el_4]);
      this[_el_4].className = "range";
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_DateRangeInputComponent_4_5] = new material_datepicker__date_range_input.DateRangeInputComponent.new(this[_compView_4].ref);
      this[_compView_4].create(this[_DateRangeInputComponent_4_5], []);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent14, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent15, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent16, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this[_anchor_8] = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](this[_anchor_8]);
      this[_el_9] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_9].className = "picker-container";
      this.addShimC(this[_el_9]);
      let _anchor_10 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_9][$append](_anchor_10);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, 9, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent18, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      let _anchor_11 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_9][$append](_anchor_11);
      this[_appEl_11] = new src__core__linker__view_container.ViewContainer.new(11, 9, this, _anchor_11);
      let _TemplateRef_11_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_11], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent19, AppViewAndintToAppViewOfDateRangeEditorComponent()));
      this[_NgIf_11_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let subscription_0 = this[_DateRangeInputComponent_4_5].rangeChange.listen(this.eventHandler1(model__date__date.DateRange, model__date__date.DateRange, dart.bind(this, _handle_rangeChange_4_1)));
      let subscription_1 = this[_DateRangeInputComponent_4_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_4_0)));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = _ctx.isBasic;
      let currVal_1 = _ctx.isBasic === true;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        if (currVal_1) {
          let doc = html.document;
          this[_el_2_0] = html.DivElement._check(doc[$createElement]("div"));
          this[_el_2_0].className = "content-separator";
          this.addShimC(this[_el_2_0]);
          this.addInlinedNodes(this[_anchor_2], JSArrayOfNode().of([this[_el_2_0]]));
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_2_0]]));
        }
        this[_expr_1] = currVal_1;
      }
      changed = false;
      let currVal_2 = _ctx.model.rangeId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DateRangeInputComponent_4_5].rangeId = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DateRangeInputComponent_4_5].maxDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateRangeInputComponent_4_5].minDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.model.range.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateRangeInputComponent_4_5].range = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.isClearRangeSelected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateRangeInputComponent_4_5].isClearRangeSelected = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.model.calendar.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateRangeInputComponent_4_5].state = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeInputComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_6_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_7_9].ngIf = _ctx.supportsMonthSelector;
      let currVal_11 = !dart.test(_ctx.isCalendarCreated) === true;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        if (currVal_11) {
          let doc = html.document;
          this[_el_8_0] = html.DivElement._check(doc[$createElement]("div"));
          this[_el_8_0].className = "calendar-placeholder";
          this.addShimC(this[_el_8_0]);
          this.addInlinedNodes(this[_anchor_8], JSArrayOfNode().of([this[_el_8_0]]));
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_8_0]]));
        }
        this[_expr_11] = currVal_11;
      }
      this[_NgIf_10_9].ngIf = _ctx.isCalendarCreated;
      this[_NgIf_11_9].ngIf = _ctx.supportsMonthSelector;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      let currVal_12 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this.updateClass(this[_el_9], "compact", currVal_12);
        this[_expr_12] = currVal_12;
      }
      this[_compView_4].detectChanges();
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
      let t$2 = this[_appEl_10];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_appEl_11];
      t$3 == null ? null : t$3.destroyNestedViews();
      let t$4 = this[_compView_4];
      t$4 == null ? null : t$4.destroy();
      this[_DateRangeInputComponent_4_5].ngOnDestroy();
    }
    [_handle_stateChange_4_0]($event) {
      this.ctx.model.calendar.value = material_datepicker__calendar.CalendarState._check($event);
    }
    [_handle_rangeChange_4_1]($event) {
      this.ctx.model.range.value = model__date__date.DateRange._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_anchor_2] = null;
    this[_el_2_0] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_DateRangeInputComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_anchor_8] = null;
    this[_el_8_0] = null;
    this[_el_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_expr_1] = false;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_11] = false;
    this[_expr_12] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_4_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_rangeChange_4_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_anchor_2]: dart.fieldType(html.Comment),
    [_el_2_0]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_4_5]: dart.fieldType(material_datepicker__date_range_input.DateRangeInputComponent),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_anchor_8]: dart.fieldType(html.Comment),
    [_el_8_0]: dart.fieldType(html.DivElement),
    [_el_9]: dart.fieldType(html.DivElement),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_11]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_11_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent11 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.new(parentView, parentIndex);
  };
  const _compView_3 = Symbol('_compView_3');
  const _GlyphComponent_3_5 = Symbol('_GlyphComponent_3_5');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12 = class _ViewDateRangeEditorComponent12 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "button-decorator";
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = "custom-tab-right";
      this.addShimC(this[_el_1]);
      this[_text_2] = html.Text.new((() => {
        let l = material_datepicker__date_range_editor.DateRangeEditorComponent.customRangeMsg;
        return l != null ? l : "";
      })());
      this[_el_1][$append](this[_text_2]);
      this[_compView_3] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      this[_el_0][$append](this[_el_3]);
      this[_el_3].className = "expand-less";
      this.createAttr(this[_el_3], "icon", "expand_less");
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_GlyphComponent_3_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_3]));
      this[_compView_3].create(this[_GlyphComponent_3_5], []);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'disableCustomMode')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_3_5].icon = "expand_less";
        changed = true;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_3];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_GlyphComponent_3_5] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_el_1]: dart.fieldType(html.DivElement),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_3_5]: dart.fieldType(glyph__glyph.GlyphComponent)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent12 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.new(parentView, parentIndex);
  };
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14 = class _ViewDateRangeEditorComponent14 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "range-title";
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new((() => {
        let l = material_datepicker__date_range_editor.DateRangeEditorComponent.comparisonHeaderMsg;
        return l != null ? l : "";
      })());
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent14 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.new(parentView, parentIndex);
  };
  const _DateRangeInputComponent_1_5 = Symbol('_DateRangeInputComponent_1_5');
  const _handle_rangeChange_1_1 = Symbol('_handle_rangeChange_1_1');
  const _handle_stateChange_1_0 = Symbol('_handle_stateChange_1_0');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15 = class _ViewDateRangeEditorComponent15 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "range-input";
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this[_el_1].className = "comparison inputs";
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_DateRangeInputComponent_1_5] = new material_datepicker__date_range_input.DateRangeInputComponent.new(this[_compView_1].ref);
      this[_compView_1].create(this[_DateRangeInputComponent_1_5], []);
      let subscription_0 = this[_DateRangeInputComponent_1_5].rangeChange.listen(this.eventHandler1(model__date__date.DateRange, model__date__date.DateRange, dart.bind(this, _handle_rangeChange_1_1)));
      let subscription_1 = this[_DateRangeInputComponent_1_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_1_0)));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.model.comparisonId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_DateRangeInputComponent_1_5].rangeId = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.model.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DateRangeInputComponent_1_5].maxDate = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.model.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DateRangeInputComponent_1_5].minDate = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = !dart.test(_ctx.isCustomComparisonValid);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DateRangeInputComponent_1_5].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.model.comparison.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateRangeInputComponent_1_5].range = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.isClearRangeSelected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateRangeInputComponent_1_5].isClearRangeSelected = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.model.calendar.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateRangeInputComponent_1_5].state = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeInputComponent_1_5].ngOnInit();
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      this[_DateRangeInputComponent_1_5].ngOnDestroy();
    }
    [_handle_stateChange_1_0]($event) {
      this.ctx.model.calendar.value = material_datepicker__calendar.CalendarState._check($event);
    }
    [_handle_rangeChange_1_1]($event) {
      this.ctx.model.comparison.value = model__date__date.DateRange._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_DateRangeInputComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_rangeChange_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_1_5]: dart.fieldType(material_datepicker__date_range_input.DateRangeInputComponent),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent15 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.new(parentView, parentIndex);
  };
  const _ButtonDirective_1_5 = Symbol('_ButtonDirective_1_5');
  const _KeyboardOnlyFocusIndicatorDirective_1_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_1_6');
  const _GlyphComponent_4_5 = Symbol('_GlyphComponent_4_5');
  const _NextPrevComponent_5_5 = Symbol('_NextPrevComponent_5_5');
  const _handle_click_1_1 = Symbol('_handle_click_1_1');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16 = class _ViewDateRangeEditorComponent16 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "month-selector-toolbar";
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.createAttr(this[_el_1], "buttonDecorator", "");
      this[_el_1].className = "month-selector-dropdown";
      this.createAttr(this[_el_1], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_1]);
      this[_ButtonDirective_1_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_1], null));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_1], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_el_2] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_1]);
      this[_el_2].className = "visible-month";
      this.addShimE(this[_el_2]);
      this[_text_3] = html.Text.new("");
      this[_el_2][$append](this[_text_3]);
      this[_compView_4] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_1][$append](this[_el_4]);
      this[_el_4].className = "month-selector-dropdown-icon";
      this.createAttr(this[_el_4], "icon", "arrow_drop_down");
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_GlyphComponent_4_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_4]));
      this[_compView_4].create(this[_GlyphComponent_4_5], []);
      this[_compView_5] = new material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      this[_el_0][$append](this[_el_5]);
      this[_el_5].className = "next-prev-range";
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_NextPrevComponent_5_5] = new material_datepicker__next_prev_buttons.NextPrevComponent.new(this[_compView_5].ref);
      this[_compView_5].create(this[_NextPrevComponent_5_5], []);
      this[_el_1][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_1)));
      this[_el_1][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_1_5].instance, 'handleKeyPress')));
      this[_el_1][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'resetOutline')));
      this[_el_1][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'resetOutline')));
      this[_el_1][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'hideOutline')));
      let subscription_0 = this[_ButtonDirective_1_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'onMonthSelectorDropdownClicked')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_ButtonDirective_1_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_1_5].instance.ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_4_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      changed = false;
      let currVal_3 = _ctx.nextPrevModel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_NextPrevComponent_5_5].model = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_ButtonDirective_1_5].detectHostChanges(this, this[_el_1]);
      let l = _ctx.visibleMonthName;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_3][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.showMonthSelector;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateElemClass(this[_el_4], "flipped", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_4];
      t == null ? null : t.destroy();
      let t$ = this[_compView_5];
      t$ == null ? null : t$.destroy();
      this[_NextPrevComponent_5_5].ngOnDestroy();
    }
    [_handle_click_1_1]($event) {
      this[_ButtonDirective_1_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6].hideOutline();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_ButtonDirective_1_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_1_6] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_GlyphComponent_4_5] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_NextPrevComponent_5_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_ButtonDirective_1_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_1_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_el_2]: dart.fieldType(html.Element),
    [_text_3]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_4_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0),
    [_NextPrevComponent_5_5]: dart.fieldType(material_datepicker__next_prev_buttons.NextPrevComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent16 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.new(parentView, parentIndex);
  };
  const _ShowHideDirective_0_6 = Symbol('_ShowHideDirective_0_6');
  let const$11;
  const _handle_stateChange_0_1 = Symbol('_handle_stateChange_0_1');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18 = class _ViewDateRangeEditorComponent18 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "picker calendar";
      this.createAttr(this[_el_0], "mode", "date-range");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialCalendarPickerComponent_0_5] = new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.parentView.parentView.injectorGet(const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex, null)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)), "date-range");
      this[_ShowHideDirective_0_6] = new utils__showhide__showhide.ShowHideDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialCalendarPickerComponent_0_5], []);
      let subscription_0 = this[_MaterialCalendarPickerComponent_0_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_0_1)));
      let subscription_1 = this[_MaterialCalendarPickerComponent_0_5].visibleMonth.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this.ctx, 'onVisibleMonthChange')));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_1 = _ctx.model.calendar.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialCalendarPickerComponent_0_5].state = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.allowHighlightUpdates;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialCalendarPickerComponent_0_5].allowHighlightUpdates = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialCalendarPickerComponent_0_5].minDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialCalendarPickerComponent_0_5].maxDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialCalendarPickerComponent_0_5].compact = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.movingStartMaintainsLength;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialCalendarPickerComponent_0_5].movingStartMaintainsLength = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialCalendarPickerComponent_0_5].ngAfterChanges();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialCalendarPickerComponent_0_5].ngOnInit();
      }
      let currVal_7 = !dart.test(_ctx.showMonthSelector);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_ShowHideDirective_0_6].visible = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      let currVal_0 = _ctx.popupHandle;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setProp(this[_el_0], "popupHandle", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialCalendarPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, this.parentView.parentView)[_query_MaterialCalendarPickerComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialCalendarPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handle_stateChange_0_1]($event) {
      this.ctx.model.calendar.value = material_datepicker__calendar.CalendarState._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialCalendarPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0),
    [_MaterialCalendarPickerComponent_0_5]: dart.fieldType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent),
    [_ShowHideDirective_0_6]: dart.fieldType(utils__showhide__showhide.ShowHideDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent18 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.new(parentView, parentIndex);
  };
  let const$12;
  const _handle_stateChange_0_0 = Symbol('_handle_stateChange_0_0');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19 = class _ViewDateRangeEditorComponent19 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "picker month-selector";
      this.createAttr(this[_el_0], "mode", "single-date");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialMonthPickerComponent_0_5] = new material_datepicker__material_month_picker.MaterialMonthPickerComponent.new(time$.Clock._check(this.parentView.parentView.injectorGet(const$12 || (const$12 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex, null)), "single-date");
      this[_ShowHideDirective_0_6] = new utils__showhide__showhide.ShowHideDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialMonthPickerComponent_0_5], []);
      let subscription_0 = this[_MaterialMonthPickerComponent_0_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.monthSelectorState;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialMonthPickerComponent_0_5].state = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialMonthPickerComponent_0_5].minDate = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialMonthPickerComponent_0_5].maxDate = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialMonthPickerComponent_0_5].ngAfterChanges();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialMonthPickerComponent_0_5].ngOnInit();
      }
      let currVal_3 = _ctx.showMonthSelector;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_ShowHideDirective_0_6].visible = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialMonthPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, this.parentView.parentView)[_query_MaterialMonthPickerComponent_1_1_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialMonthPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handle_stateChange_0_0]($event) {
      this.ctx.monthSelectorState = material_datepicker__calendar.CalendarState._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialMonthPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0),
    [_MaterialMonthPickerComponent_0_5]: dart.fieldType(material_datepicker__material_month_picker.MaterialMonthPickerComponent),
    [_ShowHideDirective_0_6]: dart.fieldType(utils__showhide__showhide.ShowHideDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent19 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template.styles$DateRangeEditorComponentHost*/get styles$DateRangeEditorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DateRangeEditorComponent_0_5 = Symbol('_DateRangeEditorComponent_0_5');
  let const$13;
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0 = class _ViewDateRangeEditorComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DateRangeEditorComponent_0_5] = new material_datepicker__date_range_editor.DateRangeEditorComponent.new(this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), src__utils__angular__managed_zone__managed_zone.ManagedZone._check(this.injectorGet(dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), this.viewData.parentIndex)), material_datepicker__date_range_editor.DateRangeEditorHost._check(this.injectorGet(dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorHost), this.viewData.parentIndex, null)), time$.Clock._check(this.injectorGet(const$13 || (const$13 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex, null)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)));
      this[_compView_0].create(this[_DateRangeEditorComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDateRangeEditorComponent()).new(0, this, this.rootEl, this[_DateRangeEditorComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeEditorComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_DateRangeEditorComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DateRangeEditorComponent_0_5] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0),
    [_DateRangeEditorComponent_0_5]: dart.fieldType(material_datepicker__date_range_editor.DateRangeEditorComponent)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template._DateRangeEditorComponentNgFactory*/get _DateRangeEditorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDateRangeEditorComponent()).new("date-range-editor", dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0, AppViewAndintToAppViewOfDateRangeEditorComponent())));
    }
  });
  dart.copyProperties(material_datepicker__date_range_editor$46template, {
    get DateRangeEditorComponentNgFactory() {
      return material_datepicker__date_range_editor$46template._DateRangeEditorComponentNgFactory;
    }
  });
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__date_range_editor$46template.initReflector = function() {
    if (dart.test(material_datepicker__date_range_editor$46template._visited)) {
      return;
    }
    material_datepicker__date_range_editor$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorComponent), material_datepicker__date_range_editor$46template.DateRangeEditorComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    glyph__glyph$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__date_range_input$46template.initReflector();
    material_datepicker__material_calendar_picker$46template.initReflector();
    material_datepicker__material_month_picker$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_datepicker__next_prev_buttons$46template.initReflector();
    material_datepicker__preset$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    material_select__material_select$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    material_tooltip__material_tooltip$46template.initReflector();
    model__date__date$46template.initReflector();
    model__date__date_formatter$46template.initReflector();
    model__observable__observable$46template.initReflector();
    src__material_datepicker__comparison_range_editor$46template.initReflector();
    src__material_datepicker__date_range_editor_model$46template.initReflector();
    src__material_datepicker__date_range_editor_model$46template.initReflector();
    utils__angular__managed_zone__interface$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__showhide__showhide$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_editor.template.ddc", {
    "package:angular_components/material_datepicker/date_range_editor.template.dart": material_datepicker__date_range_editor$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor.template.dart"],"names":[],"mappings":"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","file":"date_range_editor.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_editor$46template: material_datepicker__date_range_editor$46template
  };
});

//# sourceMappingURL=date_range_editor.template.ddc.js.map
