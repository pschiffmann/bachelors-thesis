define(['dart_sdk', 'packages/angular_components/material_select/material_dropdown_select.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular_components/content/deferred_content', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/focus/focus', 'packages/angular_components/material_list/material_list', 'packages/angular_components/material_select/material_select_dropdown_item.template', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular_components/model/a11y/active_item_directive.template', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular_components/material_select/shift_click_selection.template', 'packages/angular_components/mixins/button_wrapper.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/mixins/track_layout_changes.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_dropdown_select$46scss$46css, view_type, change_detection, modules, material_popup, dropdown_button, dropdown_button$, dom_popup_source, reference, popup_hierarchy, material_popup$, ng_zone, overlay_ref, zindexer, alignment, material_dropdown_select, deferred_content, has_disabled, focus_interface, deferred_content_aware, material_dropdown_base, material_list, dom_service, modal, focus, material_list$, material_select_dropdown_item, active_item_directive, active_item_directive$, keyboard_only_focus_indicator, activation_handler, id_generator, material_select_dropdown_item$, selection_container, has_renderer, selection_options, dynamic_component, dynamic_component$, angular, rtl_annotation, deferred_content$, deferred_content_aware$, focus$, keyboard_only_focus_indicator$, has_disabled$, alignment$, popup, activation_handler$, material_select_base, shift_click_selection, button_wrapper, material_dropdown_base$, track_layout_changes, active_item, keyboard_handler_mixin, select, selection_container$, selection_model, selection_options$, has_factory, template_support, css, id_generator$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_dropdown_select$46scss$46css$46shim = material_dropdown_select$46scss$46css.material_select__material_dropdown_select$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const material_select__dropdown_button$46template = dropdown_button.material_select__dropdown_button$46template;
  const material_select__dropdown_button = dropdown_button$.material_select__dropdown_button;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const material_select__material_dropdown_select = material_dropdown_select.material_select__material_dropdown_select;
  const content__deferred_content = deferred_content.content__deferred_content;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const focus__focus = focus.focus__focus;
  const material_list__material_list = material_list$.material_list__material_list;
  const material_select__material_select_dropdown_item$46template = material_select_dropdown_item.material_select__material_select_dropdown_item$46template;
  const model__a11y__active_item_directive = active_item_directive.model__a11y__active_item_directive;
  const model__a11y__active_item_directive$46template = active_item_directive$.model__a11y__active_item_directive$46template;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const material_select__material_select_dropdown_item = material_select_dropdown_item$.material_select__material_select_dropdown_item;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const angular$46template = angular.angular$46template;
  const annotations__rtl_annotation$46template = rtl_annotation.annotations__rtl_annotation$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_select__activation_handler$46template = activation_handler$.material_select__activation_handler$46template;
  const material_select__material_select_base$46template = material_select_base.material_select__material_select_base$46template;
  const material_select__shift_click_selection$46template = shift_click_selection.material_select__shift_click_selection$46template;
  const mixins__button_wrapper$46template = button_wrapper.mixins__button_wrapper$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const mixins__track_layout_changes$46template = track_layout_changes.mixins__track_layout_changes$46template;
  const model__a11y__active_item$46template = active_item.model__a11y__active_item$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container$.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options$.model__selection__selection_options$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const model__ui__template_support$46template = template_support.model__ui__template_support$46template;
  const utils__angular__css__css$46template = css.utils__angular__css__css$46template;
  const utils__id_generator__id_generator$46template = id_generator$.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_select__material_dropdown_select$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $length = dartx.length;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let AppViewOfMaterialDropdownSelectComponent = () => (AppViewOfMaterialDropdownSelectComponent = dart.constFn(src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent)))();
  let AppViewAndintToAppViewOfMaterialDropdownSelectComponent = () => (AppViewAndintToAppViewOfMaterialDropdownSelectComponent = dart.constFn(dart.fnType(AppViewOfMaterialDropdownSelectComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  let ComponentRefOfMaterialDropdownSelectComponent = () => (ComponentRefOfMaterialDropdownSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent)))();
  let ComponentFactoryOfMaterialDropdownSelectComponent = () => (ComponentFactoryOfMaterialDropdownSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_dropdown_select.MaterialDropdownSelectComponent)))();
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template.styles$MaterialDropdownSelectComponent*/get styles$MaterialDropdownSelectComponent() {
      return [material_select__material_dropdown_select$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _DropdownButtonComponent_0_5 = Symbol('_DropdownButtonComponent_0_5');
  const _Focusable_0_6 = Symbol('_Focusable_0_6');
  const _PopupSourceDirective_0_7 = Symbol('_PopupSourceDirective_0_7');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _appEl_2 = Symbol('_appEl_2');
  const _MaterialPopupComponent_2_8 = Symbol('_MaterialPopupComponent_2_8');
  const __PopupRef_2_10 = Symbol('__PopupRef_2_10');
  const __PopupHierarchy_2_12 = Symbol('__PopupHierarchy_2_12');
  const _el_3 = Symbol('_el_3');
  const _appEl_4 = Symbol('_appEl_4');
  const _DeferredContentDirective_4_9 = Symbol('_DeferredContentDirective_4_9');
  const _el_5 = Symbol('_el_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_14 = Symbol('_expr_14');
  const _expr_16 = Symbol('_expr_16');
  const _expr_17 = Symbol('_expr_17');
  const _expr_18 = Symbol('_expr_18');
  const _expr_19 = Symbol('_expr_19');
  const _expr_20 = Symbol('_expr_20');
  const _expr_21 = Symbol('_expr_21');
  const _PopupRef_2_10 = Symbol('_PopupRef_2_10');
  const _PopupHierarchy_2_12 = Symbol('_PopupHierarchy_2_12');
  let const$;
  let const$0;
  let const$1;
  material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0 = class ViewMaterialDropdownSelectComponent0 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    get [_PopupRef_2_10]() {
      if (this[__PopupRef_2_10] == null) {
        this[__PopupRef_2_10] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupRef_2_10];
    }
    get [_PopupHierarchy_2_12]() {
      if (this[__PopupHierarchy_2_12] == null) {
        this[__PopupHierarchy_2_12] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupHierarchy_2_12];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.createAttr(this[_el_0], "initPopupAriaAttributes", "false");
      this.createAttr(this[_el_0], "popupSource", "");
      this.createAttr(this[_el_0], "popupType", "listbox");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_DropdownButtonComponent_0_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_Focusable_0_6] = this[_DropdownButtonComponent_0_5];
      this[_PopupSourceDirective_0_7] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_0]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), this[_Focusable_0_6], "false");
      let _text_1 = html.Text.new(" ");
      this[_compView_0].create(this[_DropdownButtonComponent_0_5], [(() => {
          let _ = [_text_1];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
          return _;
        })()]);
      this[_compView_2] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this.createAttr(this[_el_2], "enforceSpaceConstraints", "");
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, this[_el_2]);
      this[_MaterialPopupComponent_2_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_2].ref, this[_appEl_2], new src__core__linker__element_ref.ElementRef.new(this[_el_2]));
      let doc = html.document;
      this[_el_3] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_3], "header", "");
      this.addShimC(this[_el_3]);
      this.project(this[_el_3], 1);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1, AppViewAndintToAppViewOfMaterialDropdownSelectComponent()));
      this[_DeferredContentDirective_4_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_4], _TemplateRef_4_8, this[_MaterialPopupComponent_2_8]);
      this[_el_5] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_5], "footer", "");
      this.addShimC(this[_el_5]);
      this.project(this[_el_5], 5);
      this[_compView_2].create(this[_MaterialPopupComponent_2_8], [JSArrayOfDivElement().of([this[_el_3]]), JSArrayOfViewContainer().of([this[_appEl_4]]), JSArrayOfDivElement().of([this[_el_5]])]);
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_0][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      let subscription_0 = this[_DropdownButtonComponent_0_5].onFocus.listen(this.eventHandler1(html.FocusEvent, html.FocusEvent, dart.bind(this.ctx, 'onFocus')));
      let subscription_1 = this[_DropdownButtonComponent_0_5].onBlur.listen(this.eventHandler1(html.FocusEvent, html.FocusEvent, dart.bind(this.ctx, 'onBlur')));
      let subscription_2 = this[_DropdownButtonComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'handleClick')));
      let subscription_3 = this[_MaterialPopupComponent_2_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this.ctx, 'onVisible')));
      this[_el_3][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_3][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_3][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      this[_el_5][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_5][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_5][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      this.ctx.dropdownButton = this[_DropdownButtonComponent_0_5];
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2, subscription_3]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_DropdownButtonComponent_0_5];
      }
      if (token === dart.wrapType(focus__focus_interface.Focusable) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_Focusable_0_6];
      }
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialPopupComponent_2_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_PopupRef_2_10];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_PopupHierarchy_2_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_source = this[_PopupSourceDirective_0_7];
      changed = false;
      if (firstCheck) {
        this[_DropdownButtonComponent_0_5].popupType = "listbox";
        changed = true;
        if (!(_ctx.buttonAriaRole == null)) {
          this[_DropdownButtonComponent_0_5].role = _ctx.buttonAriaRole;
          changed = true;
        }
      }
      let currVal_0 = _ctx.buttonText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_DropdownButtonComponent_0_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.buttonAriaLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DropdownButtonComponent_0_5].buttonAriaLabel = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DropdownButtonComponent_0_5].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.icon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DropdownButtonComponent_0_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.iconName;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DropdownButtonComponent_0_5].iconName = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.raised;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DropdownButtonComponent_0_5].raised = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_7 = _ctx.error;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DropdownButtonComponent_0_5].error = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = dart.test(_ctx.visible) ? _ctx.listId : null;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_DropdownButtonComponent_0_5].ariaOwns = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.visible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_DropdownButtonComponent_0_5].ariaExpanded = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      let currVal_11 = _ctx.buttonAriaLabelledBy;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_DropdownButtonComponent_0_5].ariaLabelledBy = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.showButtonBorder;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_DropdownButtonComponent_0_5].showButtonBorder = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_0_5].ngOnInit();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_2_8].enforceSpaceConstraints = true;
      }
      let currVal_14 = _ctx.autoDismiss;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this[_MaterialPopupComponent_2_8].autoDismiss = currVal_14;
        this[_expr_14] = currVal_14;
      }
      let currVal_16 = _ctx.popupMatchInputWidth;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        this[_MaterialPopupComponent_2_8].matchMinSourceWidth = currVal_16;
        this[_expr_16] = currVal_16;
      }
      let currVal_17 = _ctx.preferredPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
        this[_MaterialPopupComponent_2_8].preferredPositions = currVal_17;
        this[_expr_17] = currVal_17;
      }
      let currVal_18 = local_source;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_18], currVal_18))) {
        this[_MaterialPopupComponent_2_8].source = currVal_18;
        this[_expr_18] = currVal_18;
      }
      let currVal_19 = _ctx.trackLayoutChanges;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_19], currVal_19))) {
        this[_MaterialPopupComponent_2_8].trackLayoutChanges = currVal_19;
        this[_expr_19] = currVal_19;
      }
      let currVal_20 = _ctx.visible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_20], currVal_20))) {
        this[_MaterialPopupComponent_2_8].visible = currVal_20;
        this[_expr_20] = currVal_20;
      }
      let currVal_21 = _ctx.slide;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_21], currVal_21))) {
        this[_MaterialPopupComponent_2_8].slide = currVal_21;
        this[_expr_21] = currVal_21;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_4_9].preserveDimensions = true;
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      if (firstCheck) {
        if (!(_ctx.popupClassName == null)) {
          this[_compView_2].updateChildClass(this[_el_2], _ctx.popupClassName);
        }
      }
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
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
      let t$ = this[_appEl_4];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_2];
      t$1 == null ? null : t$1.destroy();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_DeferredContentDirective_4_9].ngOnDestroy();
      this[_MaterialPopupComponent_2_8].ngOnDestroy();
    }
  };
  (material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_DropdownButtonComponent_0_5] = null;
    this[_Focusable_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_appEl_2] = null;
    this[_MaterialPopupComponent_2_8] = null;
    this[__PopupRef_2_10] = null;
    this[__PopupHierarchy_2_12] = null;
    this[_el_3] = null;
    this[_appEl_4] = null;
    this[_DeferredContentDirective_4_9] = null;
    this[_el_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_14] = null;
    this[_expr_16] = null;
    this[_expr_17] = null;
    this[_expr_18] = null;
    this[_expr_19] = null;
    this[_expr_20] = null;
    this[_expr_21] = null;
    material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-dropdown-select"));
    let t = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    t == null ? material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_dropdown_select.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_select__material_dropdown_select$46template.styles$MaterialDropdownSelectComponent) : t;
    this.setupComponentType(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType);
  }).prototype = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0);
  dart.setMethodSignature(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, () => ({
    __proto__: dart.getGetters(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.__proto__),
    [_PopupRef_2_10]: dart.dynamic,
    [_PopupHierarchy_2_12]: dart.dynamic
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_0_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    [_Focusable_0_6]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    [_PopupSourceDirective_0_7]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_2_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupRef_2_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_2_12]: dart.fieldType(dart.dynamic),
    [_el_3]: dart.fieldType(html.DivElement),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_4_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_el_5]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.String),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.String),
    [_expr_8]: dart.fieldType(core.String),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.String),
    [_expr_12]: dart.fieldType(core.bool),
    [_expr_14]: dart.fieldType(core.bool),
    [_expr_16]: dart.fieldType(core.bool),
    [_expr_17]: dart.fieldType(dart.dynamic),
    [_expr_18]: dart.fieldType(dart.dynamic),
    [_expr_19]: dart.fieldType(core.bool),
    [_expr_20]: dart.fieldType(core.bool),
    [_expr_21]: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, {
    /*material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent0 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.new(parentView, parentIndex);
  };
  const _AutoFocusDirective_0_5 = Symbol('_AutoFocusDirective_0_5');
  const _MaterialListComponent_0_6 = Symbol('_MaterialListComponent_0_6');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _handle_mouseout_0_3 = Symbol('_handle_mouseout_0_3');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1 = class _ViewMaterialDropdownSelectComponent1 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "options-list";
      this.createAttr(this[_el_0], "role", "listbox");
      this[_el_0].tabIndex = 0;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AutoFocusDirective_0_5] = new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView)[_PopupRef_2_10]));
      this[_MaterialListComponent_0_6] = new material_list__material_list.MaterialListComponent.new();
      let _text_1 = html.Text.new(" ");
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2, AppViewAndintToAppViewOfMaterialDropdownSelectComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_compView_0].create(this[_MaterialListComponent_0_6], [(() => {
          let _ = [this.projectableNodes[$_get](2)];
          _[$addAll]([_text_1]);
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](3)));
          _[$addAll]([this[_appEl_2]]);
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](4)));
          return _;
        })()]);
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_0][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      this[_el_0][$addEventListener]("mouseout", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseout_0_3)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let currVal_2 = _ctx.listAutoFocus;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_AutoFocusDirective_0_5].autoFocus = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_0_5].ngOnInit();
      }
      changed = false;
      let currVal_3 = _ctx.width;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialListComponent_0_6].width = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = _ctx.options != null;
      this[_appEl_2].detectChangesInNestedViews();
      if (firstCheck) {
        if (!(_ctx.listId == null)) {
          this.setAttr(this[_el_0], "id", _ctx.listId == null ? null : dart.toString(_ctx.listId));
        }
      }
      let currVal_1 = _ctx.ariaActiveDescendant;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_0], "aria-activedescendant", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_AutoFocusDirective_0_5].ngOnDestroy();
    }
    [_handle_mouseout_0_3]($event) {
      this.ctx.activeModel.activate(null);
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AutoFocusDirective_0_5] = null;
    this[_MaterialListComponent_0_6] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_mouseout_0_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_AutoFocusDirective_0_5]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_MaterialListComponent_0_6]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.new(parentView, parentIndex);
  };
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2 = class _ViewMaterialDropdownSelectComponent2 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "options-wrapper";
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3, AppViewAndintToAppViewOfMaterialDropdownSelectComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4, AppViewAndintToAppViewOfMaterialDropdownSelectComponent()));
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = _ctx.showDeselectItem;
      if (firstCheck) {
        if (!(_ctx.trackByIndexFn == null)) {
          this[_NgFor_2_9].ngForTrackBy = intAnddynamicToObject()._check(_ctx.trackByIndexFn);
        }
      }
      let currVal_1 = _ctx.options.optionGroups;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_NgFor_2_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_1] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.new(parentView, parentIndex);
  };
  const _ActiveItemDirective_0_5 = Symbol('_ActiveItemDirective_0_5');
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_6');
  const _MaterialSelectDropdownItemComponent_0_7 = Symbol('_MaterialSelectDropdownItemComponent_0_7');
  let const$2;
  const _handle_mouseenter_0_1 = Symbol('_handle_mouseenter_0_1');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3 = class _ViewMaterialDropdownSelectComponent3 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ActiveItemDirective_0_5] = new model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd.new(new model__a11y__active_item_directive.ActiveItemDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView)[_PopupRef_2_10])));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.viewData.parentIndex)));
      this[_MaterialSelectDropdownItemComponent_0_7] = new material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.new(html.HtmlElement._check(this[_el_0]), null, src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_7], [const$2 || (const$2 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseenter_0_1)));
      this[_el_0][$addEventListener]("mouseleave", this.eventHandler0(html.Event, dart.bind(this[_ActiveItemDirective_0_5].instance, 'onMouseLeave')));
      this[_el_0][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      let subscription_0 = this[_MaterialSelectDropdownItemComponent_0_7].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'deselectCurrentSelection')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
        return this[_MaterialSelectDropdownItemComponent_0_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_popup = src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8];
      let currVal_1 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(_ctx.deselectLabel));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_ActiveItemDirective_0_5].instance.itemActive = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (firstCheck) {
        this[_MaterialSelectDropdownItemComponent_0_7].tabbable = false;
      }
      let currVal_3 = _ctx.deselectLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialSelectDropdownItemComponent_0_7].value = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.isDeselectItemSelected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialSelectDropdownItemComponent_0_7].selected = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.activeModel.id(_ctx.deselectLabel);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialSelectDropdownItemComponent_0_7].id = currVal_5;
        this[_expr_5] = currVal_5;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectDropdownItemComponent_0_7].ngOnInit();
      }
      let currVal_0 = _ctx.options.optionGroups[$length] === 1;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0], "empty", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_ActiveItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ActiveItemDirective_0_5].instance.ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_ActiveItemDirective_0_5].instance.ngOnDestroy();
      this[_MaterialSelectDropdownItemComponent_0_7].ngOnDestroy();
    }
    [_handle_mouseenter_0_1]($event) {
      this.ctx.activeModel.activate(this.ctx.deselectLabel);
      this[_ActiveItemDirective_0_5].instance.onMouseEnter();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ActiveItemDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_MaterialSelectDropdownItemComponent_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_mouseenter_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0),
    [_ActiveItemDirective_0_5]: dart.fieldType(model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_MaterialSelectDropdownItemComponent_0_7]: dart.fieldType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.String)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.new(parentView, parentIndex);
  };
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4 = class _ViewMaterialDropdownSelectComponent4 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_0], "group", "");
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5, AppViewAndintToAppViewOfMaterialDropdownSelectComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      this[_NgIf_1_9].ngIf = dart.test(local_group.isNotEmpty) || dart.test(local_group.hasEmptyLabel);
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = dart.test(local_group.isEmpty) && !dart.test(local_group.hasEmptyLabel);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(this[_el_0], "empty", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.new(parentView, parentIndex);
  };
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5 = class _ViewMaterialDropdownSelectComponent5 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6, AppViewAndintToAppViewOfMaterialDropdownSelectComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7, AppViewAndintToAppViewOfMaterialDropdownSelectComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8, AppViewAndintToAppViewOfMaterialDropdownSelectComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10, AppViewAndintToAppViewOfMaterialDropdownSelectComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this.init([this[_appEl_0], this[_appEl_1], this[_appEl_2], this[_appEl_3]], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.locals[$_get]("$implicit"));
      this[_NgIf_0_9].ngIf = dart.test(local_group.hasLabel) && !dart.test(_ctx.hasCustomLabelRenderer);
      this[_NgIf_1_9].ngIf = _ctx.hasCustomLabelRenderer;
      this[_NgIf_2_9].ngIf = local_group.isNotEmpty;
      this[_NgIf_3_9].ngIf = dart.test(local_group.isEmpty) && dart.test(local_group.hasEmptyLabel);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_2];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_3];
      t$1 == null ? null : t$1.destroyNestedViews();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6 = class _ViewMaterialDropdownSelectComponent6 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.createAttr(this[_el_0], "label", "");
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_group.uiDisplayName);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.new(parentView, parentIndex);
  };
  const _DynamicComponent_0_8 = Symbol('_DynamicComponent_0_8');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7 = class _ViewMaterialDropdownSelectComponent7 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_DynamicComponent_0_8] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], []);
      this.init0(this[_appEl_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.parentView.locals[$_get]("$implicit"));
      changed = false;
      let currVal_0 = _ctx.labelRenderer != null ? _ctx.labelRenderer(local_group) : null;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_DynamicComponent_0_8].componentType = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.labelFactory != null ? _ctx.labelFactory(local_group) : null;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DynamicComponent_0_8].componentFactory = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = local_group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DynamicComponent_0_8].value = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8].ngAfterChanges();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8].ngOnDestroy();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.new(parentView, parentIndex);
  };
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8 = class _ViewMaterialDropdownSelectComponent8 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9, AppViewAndintToAppViewOfMaterialDropdownSelectComponent()));
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0(this[_appEl_0]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_0 = local_group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_0_9].ngDoCheck();
      }
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.new(parentView, parentIndex);
  };
  const _expr_6 = Symbol('_expr_6');
  const _expr_10 = Symbol('_expr_10');
  let const$3;
  const _handle_mouseenter_0_0 = Symbol('_handle_mouseenter_0_0');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9 = class _ViewMaterialDropdownSelectComponent9 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ActiveItemDirective_0_5] = new model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd.new(new model__a11y__active_item_directive.ActiveItemDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView.parentView)[_PopupRef_2_10])));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
      this[_MaterialSelectDropdownItemComponent_0_7] = new material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.new(html.HtmlElement._check(this[_el_0]), null, src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_7], [const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseenter_0_0)));
      this[_el_0][$addEventListener]("mouseleave", this.eventHandler0(html.Event, dart.bind(this[_ActiveItemDirective_0_5].instance, 'onMouseLeave')));
      this[_el_0][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
        return this[_MaterialSelectDropdownItemComponent_0_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_popup = src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8];
      let local_item = this.locals[$_get]("$implicit");
      let currVal_0 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(local_item));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_ActiveItemDirective_0_5].instance.itemActive = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        this[_MaterialSelectDropdownItemComponent_0_7].tabbable = false;
      }
      let currVal_1 = _ctx.isOptionDisabled(local_item);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialSelectDropdownItemComponent_0_7].disabled = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_3 = _ctx.componentRenderer;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialSelectDropdownItemComponent_0_7].componentRenderer = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.factoryRenderer;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialSelectDropdownItemComponent_0_7].factoryRenderer = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.isOptionHidden(local_item);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialSelectDropdownItemComponent_0_7].isHidden = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = local_item;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialSelectDropdownItemComponent_0_7].value = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.itemRenderer;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MaterialSelectDropdownItemComponent_0_7].itemRenderer = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.deselectOnActivate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialSelectDropdownItemComponent_0_7].deselectOnActivate = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.selection;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_MaterialSelectDropdownItemComponent_0_7].selection = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.activeModel.id(local_item);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_MaterialSelectDropdownItemComponent_0_7].id = currVal_10;
        this[_expr_10] = currVal_10;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectDropdownItemComponent_0_7].ngOnInit();
      }
      this[_ActiveItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ActiveItemDirective_0_5].instance.ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_ActiveItemDirective_0_5].instance.ngOnDestroy();
      this[_MaterialSelectDropdownItemComponent_0_7].ngOnDestroy();
    }
    [_handle_mouseenter_0_0]($event) {
      let local_item = this.locals[$_get]("$implicit");
      this.ctx.activeModel.activate(local_item);
      this[_ActiveItemDirective_0_5].instance.onMouseEnter();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ActiveItemDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_MaterialSelectDropdownItemComponent_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_mouseenter_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0),
    [_ActiveItemDirective_0_5]: dart.fieldType(model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_MaterialSelectDropdownItemComponent_0_7]: dart.fieldType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(core.String)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.new(parentView, parentIndex);
  };
  const _KeyboardOnlyFocusIndicatorDirective_0_5 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_5');
  const _MaterialSelectDropdownItemComponent_0_6 = Symbol('_MaterialSelectDropdownItemComponent_0_6');
  let const$4;
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10 = class _ViewMaterialDropdownSelectComponent10 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
      this[_MaterialSelectDropdownItemComponent_0_6] = new material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.new(html.HtmlElement._check(this[_el_0]), null, src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_6], [const$4 || (const$4 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
        return this[_MaterialSelectDropdownItemComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.parentView.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectDropdownItemComponent_0_6].disabled = true;
        this[_MaterialSelectDropdownItemComponent_0_6].tabbable = false;
      }
      let currVal_2 = local_group.emptyLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialSelectDropdownItemComponent_0_6].value = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectDropdownItemComponent_0_6].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialSelectDropdownItemComponent_0_6].ngOnDestroy();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
    this[_MaterialSelectDropdownItemComponent_0_6] = null;
    this[_expr_2] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0),
    [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_MaterialSelectDropdownItemComponent_0_6]: dart.fieldType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template.styles$MaterialDropdownSelectComponentHost*/get styles$MaterialDropdownSelectComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDropdownSelectComponent_0_5 = Symbol('_MaterialDropdownSelectComponent_0_5');
  let const$5;
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0 = class _ViewMaterialDropdownSelectComponentHost0 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDropdownSelectComponent_0_5] = new material_select__material_dropdown_select.MaterialDropdownSelectComponent.new(utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), core.bool._check(this.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex, null)), null, null, this.rootEl);
      this[_compView_0].create(this[_MaterialDropdownSelectComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialDropdownSelectComponent()).new(0, this, this.rootEl, this[_MaterialDropdownSelectComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_dropdown_select.MaterialDropdownSelectComponent) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(model__selection__selection_container.SelectionContainer) || token === dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider) || token === dart.wrapType(material_select__activation_handler.ActivationHandler)) && 0 === nodeIndex) {
        return this[_MaterialDropdownSelectComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changes = null;
      changes = null;
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialDropdownSelectComponent_0_5].ngOnDestroy();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDropdownSelectComponent_0_5] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0),
    [_MaterialDropdownSelectComponent_0_5]: dart.fieldType(material_select__material_dropdown_select.MaterialDropdownSelectComponent)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template._MaterialDropdownSelectComponentNgFactory*/get _MaterialDropdownSelectComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDropdownSelectComponent()).new("material-dropdown-select", dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0, AppViewAndintToAppViewOfMaterialDropdownSelectComponent())));
    }
  });
  dart.copyProperties(material_select__material_dropdown_select$46template, {
    get MaterialDropdownSelectComponentNgFactory() {
      return material_select__material_dropdown_select$46template._MaterialDropdownSelectComponentNgFactory;
    }
  });
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_dropdown_select$46template.initReflector = function() {
    if (dart.test(material_select__material_dropdown_select$46template._visited)) {
      return;
    }
    material_select__material_dropdown_select$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_dropdown_select.MaterialDropdownSelectComponent), material_select__material_dropdown_select$46template.MaterialDropdownSelectComponentNgFactory);
    angular$46template.initReflector();
    annotations__rtl_annotation$46template.initReflector();
    content__deferred_content$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__activation_handler$46template.initReflector();
    material_select__dropdown_button$46template.initReflector();
    material_select__material_select_base$46template.initReflector();
    material_select__material_select_dropdown_item$46template.initReflector();
    material_select__shift_click_selection$46template.initReflector();
    mixins__button_wrapper$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    mixins__track_layout_changes$46template.initReflector();
    model__a11y__active_item$46template.initReflector();
    model__a11y__active_item_directive$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    model__ui__template_support$46template.initReflector();
    utils__angular__css__css$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select.template.ddc", {
    "package:angular_components/material_select/material_dropdown_select.template.dart": material_select__material_dropdown_select$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select.template.dart"],"names":[],"mappings":"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","file":"material_dropdown_select.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select$46template: material_select__material_dropdown_select$46template
  };
});

//# sourceMappingURL=material_dropdown_select.template.ddc.js.map
