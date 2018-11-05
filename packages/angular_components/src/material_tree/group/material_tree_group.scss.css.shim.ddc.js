define(['dart_sdk', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/src/material_tree/group/material_tree_group', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/material_radio/material_radio.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/material_radio/material_radio', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, select, selection_container, has_factory, angular, selection_model, selection_options, async, disposer, view_type, change_detection, material_tree_group, modules, button_decorator, button_decorator$, dom_service, keyboard_only_focus_indicator, material_checkbox, material_checkbox$, has_disabled, material_icon, material_icon$, dynamic_component, dynamic_component$, material_dropdown_base, selection_options$, keyboard_only_focus_indicator$, material_dropdown_base$, material_radio, ng_zone, material_radio$, material_input, material_input$, deferred_validator, directives, material_input_default_value_accessor, reference, focus_interface, base_material_input, material_popup, dom_popup_source, popup_hierarchy, material_popup$, overlay_ref, zindexer, alignment, deferred_content, deferred_content_aware, deferred_content$, focus, alignment$, has_renderer, dom_service$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container.model__selection__selection_container$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const angular$46template = angular.angular$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options.model__selection__selection_options$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__material_tree__group__material_tree_group = material_tree_group.src__material_tree__group__material_tree_group;
  const src__material_tree__material_tree_root = material_tree_group.src__material_tree__material_tree_root;
  const src__material_tree__group__material_tree_group_flat = material_tree_group.src__material_tree__group__material_tree_group_flat;
  const src__material_tree__material_tree_impl = material_tree_group.src__material_tree__material_tree_impl;
  const src__material_tree__material_tree_filter = material_tree_group.src__material_tree__material_tree_filter;
  const src__material_tree__material_tree_dropdown = material_tree_group.src__material_tree__material_tree_dropdown;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const model__selection__selection_options = selection_options$.model__selection__selection_options;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const material_radio__material_radio_group$46template = material_radio.material_radio__material_radio_group$46template;
  const material_radio__material_radio$46template = material_radio.material_radio__material_radio$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const material_radio__material_radio_group = material_radio$.material_radio__material_radio_group;
  const material_radio__material_radio = material_radio$.material_radio__material_radio;
  const material_input__material_input = material_input.material_input__material_input;
  const material_input__material_input$46template = material_input$.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const src__material_tree__material_tree_expand_state$46template = Object.create(_root);
  const src__material_tree__material_tree_root$46template = Object.create(_root);
  const src__material_tree__material_tree_node$46template = Object.create(_root);
  const src__material_tree__group__material_tree_group$46scss$46css$46shim = Object.create(_root);
  const src__material_tree__group__material_tree_group$46template = Object.create(_root);
  const src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim = Object.create(_root);
  const src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim = Object.create(_root);
  const src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim = Object.create(_root);
  const src__material_tree__group__material_tree_group_flat$46template = Object.create(_root);
  const src__material_tree__material_tree_rendering_options$46template = Object.create(_root);
  const src__material_tree__material_tree_impl$46template = Object.create(_root);
  const src__material_tree__material_tree_filter$46template = Object.create(_root);
  const src__material_tree__material_tree_dropdown$46scss$46css$46shim = Object.create(_root);
  const src__material_tree__material_tree_dropdown$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialTreeGroupComponent = () => (AppViewOfMaterialTreeGroupComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeGroupComponent = () => (ComponentRefOfMaterialTreeGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let ComponentFactoryOfMaterialTreeGroupComponent = () => (ComponentFactoryOfMaterialTreeGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let AppViewOfMaterialTreeGroupFlatListComponent = () => (AppViewOfMaterialTreeGroupFlatListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupFlatListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeGroupFlatListComponent = () => (ComponentRefOfMaterialTreeGroupFlatListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let ComponentFactoryOfMaterialTreeGroupFlatListComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let AppViewOfMaterialTreeGroupFlatRadioComponent = () => (AppViewOfMaterialTreeGroupFlatRadioComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupFlatRadioComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio__material_radio.MaterialRadioComponent)))();
  let ListOfMaterialRadioComponent = () => (ListOfMaterialRadioComponent = dart.constFn(core.List$(material_radio__material_radio.MaterialRadioComponent)))();
  let _ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent = () => (_ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1])))();
  let ComponentRefOfMaterialTreeGroupFlatRadioComponent = () => (ComponentRefOfMaterialTreeGroupFlatRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let ComponentFactoryOfMaterialTreeGroupFlatRadioComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let AppViewOfMaterialTreeGroupFlatCheckComponent = () => (AppViewOfMaterialTreeGroupFlatCheckComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupFlatCheckComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeGroupFlatCheckComponent = () => (ComponentRefOfMaterialTreeGroupFlatCheckComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let ComponentFactoryOfMaterialTreeGroupFlatCheckComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatCheckComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let AppViewOfMaterialTreeComponent = () => (AppViewOfMaterialTreeComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeComponent = () => (AppViewAndintToAppViewOfMaterialTreeComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMaterialTreeGroupComponent = () => (JSArrayOfMaterialTreeGroupComponent = dart.constFn(_interceptors.JSArray$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let ListOfMaterialTreeGroupComponent = () => (ListOfMaterialTreeGroupComponent = dart.constFn(core.List$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let _ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent = () => (_ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(ListOfMaterialTreeGroupComponent(), [src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2])))();
  let _ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent = () => (_ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(ListOfMaterialTreeGroupComponent(), [src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1])))();
  let ComponentRefOfMaterialTreeComponent = () => (ComponentRefOfMaterialTreeComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent)))();
  let ComponentFactoryOfMaterialTreeComponent = () => (ComponentFactoryOfMaterialTreeComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_impl.MaterialTreeComponent)))();
  let AppViewOfMaterialTreeFilterComponent = () => (AppViewOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeFilterComponent = () => (AppViewAndintToAppViewOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeFilterComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMaterialInputComponent = () => (JSArrayOfMaterialInputComponent = dart.constFn(_interceptors.JSArray$(material_input__material_input.MaterialInputComponent)))();
  let ListOfMaterialInputComponent = () => (ListOfMaterialInputComponent = dart.constFn(core.List$(material_input__material_input.MaterialInputComponent)))();
  let _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent = () => (_ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent = dart.constFn(dart.fnType(ListOfMaterialInputComponent(), [src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1])))();
  let ComponentRefOfMaterialTreeFilterComponent = () => (ComponentRefOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let ComponentFactoryOfMaterialTreeFilterComponent = () => (ComponentFactoryOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let AppViewOfMaterialTreeDropdownComponent = () => (AppViewOfMaterialTreeDropdownComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeDropdownComponent = () => (AppViewAndintToAppViewOfMaterialTreeDropdownComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeDropdownComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let JSArrayOfMaterialTreeFilterComponent = () => (JSArrayOfMaterialTreeFilterComponent = dart.constFn(_interceptors.JSArray$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let ListOfMaterialTreeFilterComponent = () => (ListOfMaterialTreeFilterComponent = dart.constFn(core.List$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent = () => (_ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(ListOfMaterialTreeFilterComponent(), [src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3])))();
  let _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent = () => (_ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(ListOfMaterialTreeFilterComponent(), [src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4])))();
  let JSArrayOfListOfMaterialTreeFilterComponent = () => (JSArrayOfListOfMaterialTreeFilterComponent = dart.constFn(_interceptors.JSArray$(ListOfMaterialTreeFilterComponent())))();
  let ComponentRefOfMaterialTreeDropdownComponent = () => (ComponentRefOfMaterialTreeDropdownComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)))();
  let ComponentFactoryOfMaterialTreeDropdownComponent = () => (ComponentFactoryOfMaterialTreeDropdownComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)))();
  src__material_tree__material_tree_expand_state$46template.initReflector = function() {
  };
  dart.defineLazy(src__material_tree__material_tree_root$46template, {
    /*src__material_tree__material_tree_root$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_root$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_root$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_root$46template._visited = true;
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_node$46template, {
    /*src__material_tree__material_tree_node$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_node$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_node$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_node$46template._visited = true;
    angular$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    src__material_tree__material_tree_expand_state$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__group__material_tree_group$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%:first-of-type li:first-of-type._ngcontent-%ID% .root-border._ngcontent-%ID%{opacity:0}.material-tree-border._ngcontent-%ID%{background:#e0e0e0;display:none;height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}ul._ngcontent-%ID%{list-style:none;margin:0;padding:0}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer;padding-right:16px}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%{pointer-events:none}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}ul._ngcontent-%ID% .material-tree-item:not([separator=present]):hover._ngcontent-%ID%,ul._ngcontent-%ID% .material-tree-item:not([separator=present]):focus._ngcontent-%ID%,ul._ngcontent-%ID% .material-tree-item:not([separator=present]).active._ngcontent-%ID%{background:#eee}ul._ngcontent-%ID% .material-tree-item:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID%{position:relative;flex-grow:1;display:flex;align-items:center}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID% > *._ngcontent-%ID%{flex-shrink:0}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID% .tree-selection-state._ngcontent-%ID% + .material-tree-border._ngcontent-%ID%{left:40px}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .tree-expansion-state._ngcontent-%ID%{display:inline-flex;margin-left:auto}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .tree-selection-state._ngcontent-%ID%{display:inline-flex;vertical-align:middle;width:40px}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .disabled-item._ngcontent-%ID%{color:#9e9e9e}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% material-icon._ngcontent-%ID%{opacity:0.54}.view-more-link-item._ngcontent-%ID%{padding:8px 0}.view-more-link._ngcontent-%ID%{color:#4285f4;text-decoration:none}"];
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponent*/get styles$MaterialTreeGroupComponent() {
      return [src__material_tree__group__material_tree_group$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0 = class ViewMaterialTreeGroupComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, "ul", parentRenderNode));
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.visibleGroup;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_NgIf_2_9].ngIf = _ctx.viewMoreLinkVisible;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, "material-tree-group", this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group"));
    this.createAttr(this.rootEl, "role", src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.hostRole);
    let t = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.__proto__),
    [_el_0]: dart.fieldType(html.UListElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, {
    /*src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(parentView, parentIndex);
  };
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_6');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _el_4 = Symbol('_el_4');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _appEl_10 = Symbol('_appEl_10');
  const _NgIf_10_9 = Symbol('_NgIf_10_9');
  const _appEl_12 = Symbol('_appEl_12');
  const _NgFor_12_9 = Symbol('_NgFor_12_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_12 = Symbol('_expr_12');
  const _handle_click_0_1 = Symbol('_handle_click_0_1');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1 = class _ViewMaterialTreeGroupComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("li");
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "material-tree-option";
      this.createAttr(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimE(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = "material-tree-item";
      this.createAttr(this[_el_1], "role", "treeitem");
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_2].className = "material-tree-shift";
      this.addShimC(this[_el_2]);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_4].className = "material-tree-border";
      this.addShimC(this[_el_4]);
      let _text_5 = html.Text.new(" ");
      this[_el_2][$append](_text_5);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 2, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 2, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = html.Text.new(" ");
      this[_el_2][$append](_text_8);
      let _text_9 = html.Text.new(" ");
      this[_el_2][$append](_text_9);
      let _anchor_10 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_10);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, 2, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      let _text_11 = html.Text.new(" ");
      this[_el_0][$append](_text_11);
      let _anchor_12 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_12);
      this[_appEl_12] = new src__core__linker__view_container.ViewContainer.new(12, 0, this, _anchor_12);
      let _TemplateRef_12_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_12], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgFor_12_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_12], _TemplateRef_12_8);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_1)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_option = this.locals[$_get]("$implicit");
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      this[_NgIf_3_9].ngIf = _ctx.showCheckbox(local_option);
      this[_NgIf_6_9].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_7_9].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_NgIf_10_9].ngIf = _ctx.hasChildren(local_option);
      let currVal_12 = _ctx.getChildGroups(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_NgFor_12_9].ngForOf = currVal_12;
        this[_expr_12] = currVal_12;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_12_9].ngDoCheck();
      }
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_12].detectChangesInNestedViews();
      let currVal_0 = _ctx.isSelected(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "selected", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelectable(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "selectable", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_2 = _ctx.getIndent(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_el_1].style[$setProperty]("padding-left", currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.isSelected(local_option));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.setAttr(this[_el_1], "aria-selected", currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      if (firstCheck) {
        if (!(_ctx.fixedPadding == null)) {
          this[_el_2].style[$setProperty]("padding-left", _ctx.fixedPadding == null ? null : dart.toString(_ctx.fixedPadding));
        }
      }
      let currVal_6 = _ctx.hasChildren(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this.updateClass(this[_el_4], "is-parent", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.isExpanded(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this.updateClass(this[_el_4], "is-expanded", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.level === 0;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this.updateClass(this[_el_4], "root-border", currVal_8);
        this[_expr_8] = currVal_8;
      }
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_6];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_7];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_10];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_12];
      t$2 == null ? null : t$2.destroyNestedViews();
    }
    [_handle_trigger_0_0]($event) {
      let local_option = this.locals[$_get]("$implicit");
      this.ctx.handleSelectionOrExpansion(html.Event._check($event), local_option);
    }
    [_handle_click_0_1]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].hideOutline();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_el_4] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_appEl_12] = null;
    this[_NgFor_12_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_12] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_4]: dart.fieldType(html.DivElement),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_12]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_12_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.new(parentView, parentIndex);
  };
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2 = class _ViewMaterialTreeGroupComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "tree-selection-state";
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4, AppViewAndintToAppViewOfMaterialTreeGroupComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]("$implicit");
      this[_NgIf_1_9].ngIf = _ctx.isMultiSelect;
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.isMultiSelect) && dart.test(_ctx.isSelected(local_option));
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
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.new(parentView, parentIndex);
  };
  const _compView_0 = Symbol('_compView_0');
  const _MaterialCheckboxComponent_0_5 = Symbol('_MaterialCheckboxComponent_0_5');
  let const$0;
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3 = class _ViewMaterialTreeGroupComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = src__core__linker__app_view_utils.interpolate2("", "tree-selection-state", " ", material_checkbox__material_checkbox.MaterialCheckboxComponent.hostClass, "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialCheckboxComponent_0_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, null, null, null);
      this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialCheckboxComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_option = this.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      if (firstCheck) {
        this[_MaterialCheckboxComponent_0_5].readOnly = true;
        changed = true;
      }
      let currVal_0 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialCheckboxComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_2 = _ctx.isSelected(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialCheckboxComponent_0_5].checked = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialCheckboxComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialCheckboxComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.new(parentView, parentIndex);
  };
  const _MaterialIconComponent_0_5 = Symbol('_MaterialIconComponent_0_5');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4 = class _ViewMaterialTreeGroupComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "tree-selection-state";
      this.createAttr(this[_el_0], "icon", "check");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_0_5].icon = "check";
        changed = true;
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
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.new(parentView, parentIndex);
  };
  const _appEl_0 = Symbol('_appEl_0');
  const _DynamicComponent_0_8 = Symbol('_DynamicComponent_0_8');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5 = class _ViewMaterialTreeGroupComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "item component";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_DynamicComponent_0_8] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], []);
      this.init0(this[_appEl_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_DynamicComponent_0_8].componentType = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DynamicComponent_0_8].componentFactory = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = local_option;
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
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6 = class _ViewMaterialTreeGroupComponent6 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "text";
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = !dart.test(_ctx.showDisabledCheckbox(local_option));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "item", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.showDisabledCheckbox(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "disabled-item", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_1][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.new(parentView, parentIndex);
  };
  const _MaterialIconComponent_0_6 = Symbol('_MaterialIconComponent_0_6');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7 = class _ViewMaterialTreeGroupComponent7 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "tree-expansion-state";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_option = this.parentView.locals[$_get]("$implicit");
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      changed = false;
      let currVal_1 = dart.test(_ctx.isExpanded(local_option)) ? "expand_less" : "expand_more";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialIconComponent_0_6].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isExpanded(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0], "expanded", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_option = this.parentView.locals[$_get]("$implicit");
      this.ctx.handleExpansion(html.Event._check($event), local_option);
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.new(parentView, parentIndex);
  };
  const _MaterialTreeGroupComponent_0_5 = Symbol('_MaterialTreeGroupComponent_0_5');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  let const$1;
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8 = class _ViewMaterialTreeGroupComponent8 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "child-tree";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialTreeGroupComponent_0_5] = new src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.viewData.parentIndex, null)), core.int._check(this.parentView.parentView.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.parentView.parentView.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_subGroup = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      let local_option = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = local_subGroup;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialTreeGroupComponent_0_5].group = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = dart.notNull(_ctx.level) + 1;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialTreeGroupComponent_0_5].level = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.showCheckbox(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialTreeGroupComponent_0_5].parentHasCheckbox = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.allowParentSingleSelection;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialTreeGroupComponent_0_5].allowParentSingleSelection = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.maxInitialOptionsShown;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialTreeGroupComponent_0_5].maxInitialOptionsShown = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.expandAll;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialTreeGroupComponent_0_5].expandAll = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialTreeGroupComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0),
    [_MaterialTreeGroupComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.int),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.int),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.new(parentView, parentIndex);
  };
  const _el_3 = Symbol('_el_3');
  const _ButtonDirective_3_5 = Symbol('_ButtonDirective_3_5');
  const _text_4 = Symbol('_text_4');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9 = class _ViewMaterialTreeGroupComponent9 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("li");
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = "view-more-link-item";
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_2].className = "material-tree-shift";
      this.addShimC(this[_el_2]);
      this[_el_3] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_2]));
      this.createAttr(this[_el_3], "buttonDecorator", "");
      this[_el_3].className = "view-more-link";
      this.createAttr(this[_el_3], "href", "#");
      this.addShimC(this[_el_3]);
      this[_ButtonDirective_3_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_3], null));
      this[_text_4] = html.Text.new((() => {
        let l = src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.viewMoreMsg;
        return l != null ? l : "";
      })());
      this[_el_3][$append](this[_text_4]);
      this[_el_3][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_3_5].instance, 'handleClick')));
      this[_el_3][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_3_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_3_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'viewMoreOptions')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_ButtonDirective_3_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_3_5].instance.ngOnInit();
      }
      let currVal_0 = _ctx.getIndent(_ctx.visibleGroup.last);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_el_1].style[$setProperty]("padding-left", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        if (!(_ctx.fixedPadding == null)) {
          this[_el_2].style[$setProperty]("padding-left", _ctx.fixedPadding == null ? null : dart.toString(_ctx.fixedPadding));
        }
      }
      this[_ButtonDirective_3_5].detectHostChanges(this, this[_el_3]);
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_ButtonDirective_3_5] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.AnchorElement),
    [_ButtonDirective_3_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponentHost*/get styles$MaterialTreeGroupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  let const$2;
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0 = class _ViewMaterialTreeGroupComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTreeGroupComponent_0_5] = new src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), core.int._check(this.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTreeGroupComponent_0_5] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0),
    [_MaterialTreeGroupComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template._MaterialTreeGroupComponentNgFactory*/get _MaterialTreeGroupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupComponent()).new("material-tree-group", dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0, AppViewAndintToAppViewOfMaterialTreeGroupComponent())));
    }
  });
  dart.copyProperties(src__material_tree__group__material_tree_group$46template, {
    get MaterialTreeGroupComponentNgFactory() {
      return src__material_tree__group__material_tree_group$46template._MaterialTreeGroupComponentNgFactory;
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__group__material_tree_group$46template.initReflector = function() {
    if (dart.test(src__material_tree__group__material_tree_group$46template._visited)) {
      return;
    }
    src__material_tree__group__material_tree_group$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), src__material_tree__group__material_tree_group$46template.MaterialTreeGroupComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    src__material_tree__material_tree_node$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim.styles*/get styles() {
      return ["div._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap}div.disabled._ngcontent-%ID%{pointer-events:none}div._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}div.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}div._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}div.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}div._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}"];
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim.styles*/get styles() {
      return ["material-radio._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer;align-items:flex-start}material-radio.disabled._ngcontent-%ID%{pointer-events:none}material-radio._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}material-radio.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}material-radio._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}material-radio.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}material-radio._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}material-radio:not([separator=present]):hover._ngcontent-%ID%,material-radio:not([separator=present]):focus._ngcontent-%ID%,material-radio:not([separator=present]).active._ngcontent-%ID%{background:#eee}material-radio:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}"];
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim.styles*/get styles() {
      return ["material-checkbox._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer}material-checkbox.disabled._ngcontent-%ID%{pointer-events:none}material-checkbox._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}material-checkbox.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}material-checkbox._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}material-checkbox.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}material-checkbox._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}material-checkbox:not([separator=present]):hover._ngcontent-%ID%,material-checkbox:not([separator=present]):focus._ngcontent-%ID%,material-checkbox:not([separator=present]).active._ngcontent-%ID%{background:#eee}material-checkbox:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}"];
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent*/get styles$MaterialTreeGroupFlatListComponent() {
      return [src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0$ = Symbol('_appEl_0');
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  const _expr_0$ = Symbol('_expr_0');
  let const$3;
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0 = class ViewMaterialTreeGroupFlatListComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent()));
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$], _TemplateRef_0_8);
      this.init(const$3 || (const$3 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_0_9].ngDoCheck();
      }
      this[_appEl_0$].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$];
      t == null ? null : t.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, "material-tree-group", this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0$] = null;
    src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-list"));
    let t = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.__proto__),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new(parentView, parentIndex);
  };
  const _el_0$ = Symbol('_el_0');
  const _appEl_1$ = Symbol('_appEl_1');
  const _NgIf_1_9$ = Symbol('_NgIf_1_9');
  const _appEl_2$ = Symbol('_appEl_2');
  const _NgIf_2_9$ = Symbol('_NgIf_2_9');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1 = class _ViewMaterialTreeGroupFlatListComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0$].className = "material-tree-option";
      this.addShimC(this[_el_0$]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$][$append](_anchor_1);
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent()));
      this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$][$append](_anchor_2);
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent()));
      this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9$].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_2_9$].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2$];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_appEl_1$] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.__proto__),
    [_el_0$]: dart.fieldType(html.DivElement),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.new(parentView, parentIndex);
  };
  const _compView_0$ = Symbol('_compView_0');
  const _DynamicComponent_0_8$ = Symbol('_DynamicComponent_0_8');
  const _expr_1$ = Symbol('_expr_1');
  const _expr_2$ = Symbol('_expr_2');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2 = class _ViewMaterialTreeGroupFlatListComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      this[_compView_0$] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = "item component";
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_DynamicComponent_0_8$] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.viewData.parentIndex)), this[_compView_0$].ref, this[_appEl_0$]);
      this[_compView_0$].create(this[_DynamicComponent_0_8$], []);
      this.init0(this[_appEl_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_DynamicComponent_0_8$].componentType = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_DynamicComponent_0_8$].componentFactory = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = local_option;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this[_DynamicComponent_0_8$].value = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8$].ngAfterChanges();
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0$];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8$].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_appEl_0$] = null;
    this[_DynamicComponent_0_8$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8$]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.new(parentView, parentIndex);
  };
  const _text_1$ = Symbol('_text_1');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3 = class _ViewMaterialTreeGroupFlatListComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]("span");
      this[_el_0$].className = "item text";
      this.addShimE(this[_el_0$]);
      this[_text_1$] = html.Text.new("");
      this[_el_0$][$append](this[_text_1$]);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_text_1$][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_text_1$] = null;
    this[_expr_0$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_text_1$]: dart.fieldType(html.Text),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponentHost*/get styles$MaterialTreeGroupFlatListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatListComponent_0_5 = Symbol('_MaterialTreeGroupFlatListComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0 = class _ViewMaterialTreeGroupFlatListComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      this[_compView_0$] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MaterialTreeGroupFlatListComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$].ref);
      this[_compView_0$].create(this[_MaterialTreeGroupFlatListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupFlatListComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatListComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialTreeGroupFlatListComponent_0_5] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0),
    [_MaterialTreeGroupFlatListComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentNgFactory*/get _MaterialTreeGroupFlatListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatListComponent()).new("material-tree-group-flat-list", dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent())));
    }
  });
  dart.copyProperties(src__material_tree__group__material_tree_group_flat$46template, {
    get MaterialTreeGroupFlatListComponentNgFactory() {
      return src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentNgFactory;
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent*/get styles$MaterialTreeGroupFlatRadioComponent() {
      return [src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim.styles];
    }
  });
  const _MaterialRadioGroupComponent_0_5 = Symbol('_MaterialRadioGroupComponent_0_5');
  const _query_MaterialRadioComponent_0_0_isDirty = Symbol('_query_MaterialRadioComponent_0_0_isDirty');
  const _NgFor_1_9$ = Symbol('_NgFor_1_9');
  let const$4;
  const _MaterialRadioComponent_0_5 = Symbol('_MaterialRadioComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0 = class ViewMaterialTreeGroupFlatRadioComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0$] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      parentRenderNode[$append](this[_el_0$]);
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialRadioGroupComponent_0_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent()));
      this[_NgFor_1_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1$], _TemplateRef_1_8);
      this[_compView_0$].create(this[_MaterialRadioGroupComponent_0_5], [JSArrayOfViewContainer().of([this[_appEl_1$]])]);
      this.init(const$4 || (const$4 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialRadioGroupComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(_ctx.selectionModel == null)) {
          this[_MaterialRadioGroupComponent_0_5].valueSelection = _ctx.selectionModel;
          changed = true;
        }
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      let currVal_1 = _ctx.group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_NgFor_1_9$].ngForOf = currVal_1;
        this[_expr_1$] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9$].ngDoCheck();
      }
      this[_appEl_1$].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MaterialRadioComponent_0_0_isDirty])) {
          this[_MaterialRadioGroupComponent_0_5].radioComponents = this[_appEl_1$].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent()));
          this[_query_MaterialRadioComponent_0_0_isDirty] = false;
        }
        if (firstCheck) {
          this[_MaterialRadioGroupComponent_0_5].ngAfterContentInit();
        }
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0$];
      t$ == null ? null : t$.destroy();
      this[_MaterialRadioGroupComponent_0_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, "material-tree-group", this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialRadioGroupComponent_0_5] = null;
    this[_appEl_1$] = null;
    this[_query_MaterialRadioComponent_0_0_isDirty] = true;
    this[_NgFor_1_9$] = null;
    this[_expr_1$] = null;
    src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-radio"));
    let t = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_0_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_MaterialRadioComponent_0_0_isDirty]: dart.fieldType(core.bool),
    [_NgFor_1_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new(parentView, parentIndex);
  };
  const _expr_3$ = Symbol('_expr_3');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1 = class _ViewMaterialTreeGroupFlatRadioComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      this[_compView_0$] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = src__core__linker__app_view_utils.interpolate2("", "material-tree-option tree-selection-state", " ", material_radio__material_radio.MaterialRadioComponent.hostClass, "");
      this.createAttr(this[_el_0$], "role", "option");
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0$]), this[_compView_0$].ref, src__runtime__optimizations.unsafeCast(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, this.parentView)[_MaterialRadioGroupComponent_0_5], null, "option");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent()));
      this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent()));
      this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      this[_compView_0$].create(this[_MaterialRadioComponent_0_5], [JSArrayOfViewContainer().of([this[_appEl_1$], this[_appEl_2$]])]);
      this.init0(this[_el_0$]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialRadioComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_option = this.locals[$_get]("$implicit");
      changed = false;
      let currVal_2 = local_option;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this[_MaterialRadioComponent_0_5].value = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.isReadOnly;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_MaterialRadioComponent_0_5].disabled = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_NgIf_1_9$].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_2_9$].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      let currVal_0 = _ctx.isSelected(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateElemClass(this[_el_0$], "selected", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.isSelectable(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this.updateElemClass(this[_el_0$], "selectable", currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, this.parentView)[_query_MaterialRadioComponent_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2$];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0$];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialRadioComponent_0_5] = null;
    this[_appEl_1$] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(core.bool),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.new(parentView, parentIndex);
  };
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2 = class _ViewMaterialTreeGroupFlatRadioComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      this[_compView_0$] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = "item component";
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_DynamicComponent_0_8$] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.viewData.parentIndex)), this[_compView_0$].ref, this[_appEl_0$]);
      this[_compView_0$].create(this[_DynamicComponent_0_8$], []);
      this.init0(this[_appEl_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_DynamicComponent_0_8$].componentType = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_DynamicComponent_0_8$].componentFactory = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = local_option;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this[_DynamicComponent_0_8$].value = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8$].ngAfterChanges();
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0$];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8$].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_appEl_0$] = null;
    this[_DynamicComponent_0_8$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8$]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.new(parentView, parentIndex);
  };
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3 = class _ViewMaterialTreeGroupFlatRadioComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]("span");
      this[_el_0$].className = "item text";
      this.addShimE(this[_el_0$]);
      this[_text_1$] = html.Text.new("");
      this[_el_0$][$append](this[_text_1$]);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_text_1$][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_text_1$] = null;
    this[_expr_0$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_text_1$]: dart.fieldType(html.Text),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponentHost*/get styles$MaterialTreeGroupFlatRadioComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatRadioComponent_0_5 = Symbol('_MaterialTreeGroupFlatRadioComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0 = class _ViewMaterialTreeGroupFlatRadioComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      this[_compView_0$] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MaterialTreeGroupFlatRadioComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0$].create(this[_MaterialTreeGroupFlatRadioComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupFlatRadioComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatRadioComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialTreeGroupFlatRadioComponent_0_5] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0),
    [_MaterialTreeGroupFlatRadioComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentNgFactory*/get _MaterialTreeGroupFlatRadioComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatRadioComponent()).new("material-tree-group-flat-radio", dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent())));
    }
  });
  dart.copyProperties(src__material_tree__group__material_tree_group_flat$46template, {
    get MaterialTreeGroupFlatRadioComponentNgFactory() {
      return src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentNgFactory;
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent*/get styles$MaterialTreeGroupFlatCheckComponent() {
      return [src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim.styles];
    }
  });
  let const$5;
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0 = class ViewMaterialTreeGroupFlatCheckComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent()));
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$], _TemplateRef_0_8);
      this.init(const$5 || (const$5 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_0_9].ngDoCheck();
      }
      this[_appEl_0$].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$];
      t == null ? null : t.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, "material-tree-group", this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0$] = null;
    src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-check"));
    let t = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new(parentView, parentIndex);
  };
  const _MaterialCheckboxComponent_0_5$ = Symbol('_MaterialCheckboxComponent_0_5');
  const _handle_checkedChange_0_0 = Symbol('_handle_checkedChange_0_0');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1 = class _ViewMaterialTreeGroupFlatCheckComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      this[_compView_0$] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = src__core__linker__app_view_utils.interpolate2("", "material-tree-option tree-selection-state", " ", material_checkbox__material_checkbox.MaterialCheckboxComponent.hostClass, "");
      this.createAttr(this[_el_0$], "role", "option");
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialCheckboxComponent_0_5$] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_0$]), this[_compView_0$].ref, null, null, "option");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent()));
      this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent()));
      this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      this[_compView_0$].create(this[_MaterialCheckboxComponent_0_5$], [JSArrayOfViewContainer().of([this[_appEl_1$], this[_appEl_2$]])]);
      let subscription_0 = this[_MaterialCheckboxComponent_0_5$].onChecked.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_checkedChange_0_0)));
      this.init([this[_el_0$]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialCheckboxComponent_0_5$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_option = this.locals[$_get]("$implicit");
      changed = false;
      let currVal_2 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this[_MaterialCheckboxComponent_0_5$].disabled = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.isSelected(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_MaterialCheckboxComponent_0_5$].checked = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_NgIf_1_9$].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_2_9$].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      let currVal_0 = _ctx.isSelected(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateElemClass(this[_el_0$], "selected", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.isSelectable(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this.updateElemClass(this[_el_0$], "selectable", currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2$];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0$];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialCheckboxComponent_0_5$].ngOnDestroy();
    }
    [_handle_checkedChange_0_0]($event) {
      let local_option = this.locals[$_get]("$implicit");
      this.ctx.setSelectionState(local_option, core.bool._check($event));
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialCheckboxComponent_0_5$] = null;
    this[_appEl_1$] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_0_5$]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(core.bool),
    [_expr_2$]: dart.fieldType(core.bool),
    [_expr_3$]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.new(parentView, parentIndex);
  };
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2 = class _ViewMaterialTreeGroupFlatCheckComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      this[_compView_0$] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = "item component";
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_DynamicComponent_0_8$] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.viewData.parentIndex)), this[_compView_0$].ref, this[_appEl_0$]);
      this[_compView_0$].create(this[_DynamicComponent_0_8$], []);
      this.init0(this[_appEl_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_DynamicComponent_0_8$].componentType = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_DynamicComponent_0_8$].componentFactory = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = local_option;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this[_DynamicComponent_0_8$].value = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8$].ngAfterChanges();
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0$];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8$].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_appEl_0$] = null;
    this[_DynamicComponent_0_8$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8$]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.new(parentView, parentIndex);
  };
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3 = class _ViewMaterialTreeGroupFlatCheckComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]("span");
      this[_el_0$].className = "item text";
      this.addShimE(this[_el_0$]);
      this[_text_1$] = html.Text.new("");
      this[_el_0$][$append](this[_text_1$]);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_text_1$][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_text_1$] = null;
    this[_expr_0$] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_text_1$]: dart.fieldType(html.Text),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponentHost*/get styles$MaterialTreeGroupFlatCheckComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatCheckComponent_0_5 = Symbol('_MaterialTreeGroupFlatCheckComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0 = class _ViewMaterialTreeGroupFlatCheckComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      this[_compView_0$] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MaterialTreeGroupFlatCheckComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0$].create(this[_MaterialTreeGroupFlatCheckComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupFlatCheckComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatCheckComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialTreeGroupFlatCheckComponent_0_5] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0),
    [_MaterialTreeGroupFlatCheckComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentNgFactory*/get _MaterialTreeGroupFlatCheckComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatCheckComponent()).new("material-tree-group-flat-check", dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent())));
    }
  });
  dart.copyProperties(src__material_tree__group__material_tree_group_flat$46template, {
    get MaterialTreeGroupFlatCheckComponentNgFactory() {
      return src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentNgFactory;
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.initReflector = function() {
    if (dart.test(src__material_tree__group__material_tree_group_flat$46template._visited)) {
      return;
    }
    src__material_tree__group__material_tree_group_flat$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatListComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatRadioComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatCheckComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_radio__material_radio$46template.initReflector();
    material_radio__material_radio_group$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    src__material_tree__material_tree_node$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_rendering_options$46template, {
    /*src__material_tree__material_tree_rendering_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_rendering_options$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_rendering_options$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_rendering_options$46template._visited = true;
    model__selection__selection_options$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponent*/get styles$MaterialTreeComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_0$0 = Symbol('_appEl_0');
  const _query_MaterialTreeGroupComponent_1_0_isDirty = Symbol('_query_MaterialTreeGroupComponent_1_0_isDirty');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _appEl_1$0 = Symbol('_appEl_1');
  const _NgIf_1_9$0 = Symbol('_NgIf_1_9');
  const _expr_2$0 = Symbol('_expr_2');
  const _expr_3$0 = Symbol('_expr_3');
  const _expr_4$ = Symbol('_expr_4');
  let const$6;
  const _MaterialTreeGroupComponent_0_5$ = Symbol('_MaterialTreeGroupComponent_0_5');
  src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0 = class ViewMaterialTreeComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent1, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1$0] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent3, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgIf_1_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
      this.init(const$6 || (const$6 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.supportsHierarchy;
      this[_NgIf_1_9$0].ngIf = !dart.test(_ctx.supportsHierarchy);
      this[_appEl_0$0].detectChangesInNestedViews();
      this[_appEl_1$0].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MaterialTreeGroupComponent_1_0_isDirty])) {
          this.ctx.treeGroupNodes = this[_appEl_0$0].mapNestedViews(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, dart.fn(nestedView => nestedView[_appEl_0$0].mapNestedViews(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, dart.fn(nestedView => JSArrayOfMaterialTreeGroupComponent().of([nestedView[_MaterialTreeGroupComponent_0_5$]]), _ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent())), _ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent()));
          this[_query_MaterialTreeGroupComponent_1_0_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1$0];
      t$ == null ? null : t$.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_2 = this.ctx.role;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
        this.setAttr(this.rootEl, "role", currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = this.ctx.hostMultiselectable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
        this.setAttr(this.rootEl, "aria-multiselectable", currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3$0] = currVal_3;
      }
      let currVal_4 = this.ctx.hostReadonly;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        this.setAttr(this.rootEl, "aria-readonly", currVal_4 == null ? null : dart.toString(currVal_4));
        this[_expr_4$] = currVal_4;
      }
    }
  };
  (src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_query_MaterialTreeGroupComponent_1_0_isDirty] = true;
    this[_NgIf_0_9] = null;
    this[_appEl_1$0] = null;
    this[_NgIf_1_9$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    this[_expr_4$] = null;
    src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree"));
    let t = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
    t == null ? src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_impl.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponent) : t;
    this.setupComponentType(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType);
  }).prototype = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_MaterialTreeGroupComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_expr_3$0]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, {
    /*src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new(parentView, parentIndex);
  };
  const _NgFor_0_9$ = Symbol('_NgFor_0_9');
  const _expr_0$0 = Symbol('_expr_0');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1 = class _ViewMaterialTreeComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent2, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
      this.init0(this[_appEl_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_NgFor_0_9$].ngForOf = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_0_9$].ngDoCheck();
      }
      this[_appEl_0$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgFor_0_9$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.new(parentView, parentIndex);
  };
  const _el_0$0 = Symbol('_el_0');
  const _compView_0$0 = Symbol('_compView_0');
  const _expr_1$0 = Symbol('_expr_1');
  let const$7;
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2 = class _ViewMaterialTreeComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0$0] = new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      this[_MaterialTreeGroupComponent_0_5$] = new src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), core.int._check(this.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.viewData.parentIndex, null)));
      this[_compView_0$0].create(this[_MaterialTreeGroupComponent_0_5$], []);
      this.init0(this[_el_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      let local_optionIndex = core.int._check(this.locals[$_get]("index"));
      let currVal_0 = local_group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_MaterialTreeGroupComponent_0_5$].group = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.allowParentSingleSelection;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
        this[_MaterialTreeGroupComponent_0_5$].allowParentSingleSelection = currVal_1;
        this[_expr_1$0] = currVal_1;
      }
      let currVal_2 = _ctx.maxInitialOptionsShown(local_group, local_optionIndex);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
        this[_MaterialTreeGroupComponent_0_5$].maxInitialOptionsShown = currVal_2;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.shouldExpand(local_group, local_optionIndex);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
        this[_MaterialTreeGroupComponent_0_5$].expandAll = currVal_3;
        this[_expr_3$0] = currVal_3;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, this.parentView.parentView)[_query_MaterialTreeGroupComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
      this[_MaterialTreeGroupComponent_0_5$].ngOnDestroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_compView_0$0] = null;
    this[_MaterialTreeGroupComponent_0_5$] = null;
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null, "index", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_compView_0$0]: dart.fieldType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0),
    [_MaterialTreeGroupComponent_0_5$]: dart.fieldType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(core.bool),
    [_expr_2$0]: dart.fieldType(core.int),
    [_expr_3$0]: dart.fieldType(core.bool)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.new(parentView, parentIndex);
  };
  const _appEl_2$0 = Symbol('_appEl_2');
  const _NgIf_2_9$0 = Symbol('_NgIf_2_9');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3 = class _ViewMaterialTreeComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent4, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$0] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent6, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgIf_1_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2$0] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent8, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgIf_2_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
      this.init([this[_appEl_0$0], this[_appEl_1$0], this[_appEl_2$0]], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.showFlatList;
      this[_NgIf_1_9$0].ngIf = _ctx.showFlatRadio;
      this[_NgIf_2_9$0].ngIf = _ctx.showFlatCheck;
      this[_appEl_0$0].detectChangesInNestedViews();
      this[_appEl_1$0].detectChangesInNestedViews();
      this[_appEl_2$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1$0];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_2$0];
      t$0 == null ? null : t$0.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1$0] = null;
    this[_NgIf_1_9$0] = null;
    this[_appEl_2$0] = null;
    this[_NgIf_2_9$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.new(parentView, parentIndex);
  };
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4 = class _ViewMaterialTreeComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent5, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
      this.init0(this[_appEl_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_NgFor_0_9$].ngForOf = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_0_9$].ngDoCheck();
      }
      this[_appEl_0$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgFor_0_9$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent4 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.new(parentView, parentIndex);
  };
  const _MaterialTreeGroupFlatListComponent_0_5$ = Symbol('_MaterialTreeGroupFlatListComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5 = class _ViewMaterialTreeComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0$0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      this[_MaterialTreeGroupFlatListComponent_0_5$] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0].ref);
      this[_compView_0$0].create(this[_MaterialTreeGroupFlatListComponent_0_5$], []);
      this.init0(this[_el_0$0]);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      let currVal_0 = local_group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_MaterialTreeGroupFlatListComponent_0_5$].group = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_compView_0$0] = null;
    this[_MaterialTreeGroupFlatListComponent_0_5$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_compView_0$0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0),
    [_MaterialTreeGroupFlatListComponent_0_5$]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent5 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.new(parentView, parentIndex);
  };
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6 = class _ViewMaterialTreeComponent6 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent7, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
      this.init0(this[_appEl_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_NgFor_0_9$].ngForOf = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_0_9$].ngDoCheck();
      }
      this[_appEl_0$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgFor_0_9$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent6 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.new(parentView, parentIndex);
  };
  const _MaterialTreeGroupFlatRadioComponent_0_5$ = Symbol('_MaterialTreeGroupFlatRadioComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7 = class _ViewMaterialTreeComponent7 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0$0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      this[_MaterialTreeGroupFlatRadioComponent_0_5$] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0$0].create(this[_MaterialTreeGroupFlatRadioComponent_0_5$], []);
      this.init0(this[_el_0$0]);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      let currVal_0 = local_group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_MaterialTreeGroupFlatRadioComponent_0_5$].group = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_compView_0$0] = null;
    this[_MaterialTreeGroupFlatRadioComponent_0_5$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_compView_0$0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0),
    [_MaterialTreeGroupFlatRadioComponent_0_5$]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent7 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.new(parentView, parentIndex);
  };
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8 = class _ViewMaterialTreeComponent8 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent9, AppViewAndintToAppViewOfMaterialTreeComponent()));
      this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
      this.init0(this[_appEl_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_NgFor_0_9$].ngForOf = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_0_9$].ngDoCheck();
      }
      this[_appEl_0$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0$0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgFor_0_9$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent8 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.new(parentView, parentIndex);
  };
  const _MaterialTreeGroupFlatCheckComponent_0_5$ = Symbol('_MaterialTreeGroupFlatCheckComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9 = class _ViewMaterialTreeComponent9 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0$0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      this[_MaterialTreeGroupFlatCheckComponent_0_5$] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0$0].create(this[_MaterialTreeGroupFlatCheckComponent_0_5$], []);
      this.init0(this[_el_0$0]);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]("$implicit"));
      let currVal_0 = local_group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_MaterialTreeGroupFlatCheckComponent_0_5$].group = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_compView_0$0] = null;
    this[_MaterialTreeGroupFlatCheckComponent_0_5$] = null;
    this[_expr_0$0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_compView_0$0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0),
    [_MaterialTreeGroupFlatCheckComponent_0_5$]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent9 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponentHost*/get styles$MaterialTreeComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeComponent_0_5 = Symbol('_MaterialTreeComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0 = class _ViewMaterialTreeComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0$0] = new src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_MaterialTreeComponent_0_5] = new src__material_tree__material_tree_impl.MaterialTreeComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex, null)), null);
      this[_compView_0$0].create(this[_MaterialTreeComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeComponent()).new(0, this, this.rootEl, this[_MaterialTreeComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot) && 0 === nodeIndex) {
        return this[_MaterialTreeComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MaterialTreeComponent_0_5] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0),
    [_MaterialTreeComponent_0_5]: dart.fieldType(src__material_tree__material_tree_impl.MaterialTreeComponent)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template._MaterialTreeComponentNgFactory*/get _MaterialTreeComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeComponent()).new("material-tree", dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0, AppViewAndintToAppViewOfMaterialTreeComponent())));
    }
  });
  dart.copyProperties(src__material_tree__material_tree_impl$46template, {
    get MaterialTreeComponentNgFactory() {
      return src__material_tree__material_tree_impl$46template._MaterialTreeComponentNgFactory;
    }
  });
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_impl$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_impl$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_impl$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_impl.MaterialTreeComponent), src__material_tree__material_tree_impl$46template.MaterialTreeComponentNgFactory);
    angular$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    src__material_tree__group__material_tree_group$46template.initReflector();
    src__material_tree__group__material_tree_group_flat$46template.initReflector();
    src__material_tree__material_tree_rendering_options$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponent*/get styles$MaterialTreeFilterComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_0$1 = Symbol('_appEl_0');
  const _query_materialInput_1_0_isDirty = Symbol('_query_materialInput_1_0_isDirty');
  const _NgIf_0_9$ = Symbol('_NgIf_0_9');
  let const$8;
  const _MaterialInputComponent_0_9 = Symbol('_MaterialInputComponent_0_9');
  src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0 = class ViewMaterialTreeFilterComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0$1] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$1], dart.fn(src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1, AppViewAndintToAppViewOfMaterialTreeFilterComponent()));
      this[_NgIf_0_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$1], _TemplateRef_0_8);
      this.init(const$8 || (const$8 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9$].ngIf = _ctx.hasFilterable;
      this[_appEl_0$1].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_materialInput_1_0_isDirty])) {
          this.ctx.materialInput = src__core__linker__app_view_utils.firstOrNull(material_input__material_input.MaterialInputComponent, this[_appEl_0$1].mapNestedViews(material_input__material_input.MaterialInputComponent, src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_0_9]]), _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent())));
          this[_query_materialInput_1_0_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_0$1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$1] = null;
    this[_query_materialInput_1_0_isDirty] = true;
    this[_NgIf_0_9$] = null;
    src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-filter"));
    let t = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType;
    t == null ? src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_filter.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponent) : t;
    this.setupComponentType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType);
  }).prototype = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    [_appEl_0$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_materialInput_1_0_isDirty]: dart.fieldType(core.bool),
    [_NgIf_0_9$]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, {
    /*src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(parentView, parentIndex);
  };
  const _el_0$1 = Symbol('_el_0');
  const _compView_0$1 = Symbol('_compView_0');
  const _DeferredValidator_0_5 = Symbol('_DeferredValidator_0_5');
  const _NgValidators_0_6 = Symbol('_NgValidators_0_6');
  const _NgModel_0_7 = Symbol('_NgModel_0_7');
  const _NgControl_0_8 = Symbol('_NgControl_0_8');
  const _BaseMaterialInput_0_10 = Symbol('_BaseMaterialInput_0_10');
  const _MaterialInputDefaultValueAccessor_0_11 = Symbol('_MaterialInputDefaultValueAccessor_0_11');
  const _expr_1$1 = Symbol('_expr_1');
  const _expr_3$1 = Symbol('_expr_3');
  let const$9;
  let const$10;
  const _handle_inputKeyPress_0_1 = Symbol('_handle_inputKeyPress_0_1');
  let const$11;
  src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1 = class _ViewMaterialTreeFilterComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      this[_compView_0$1] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      this[_el_0$1] = this[_compView_0$1].rootEl;
      this.createAttr(this[_el_0$1], "style", "width: 100%;");
      this[_DeferredValidator_0_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_0_6] = [this[_DeferredValidator_0_5]];
      this[_NgModel_0_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_0_6], null);
      this[_NgControl_0_8] = this[_NgModel_0_7];
      this[_MaterialInputComponent_0_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgControl_0_8], this[_compView_0$1].ref, this[_DeferredValidator_0_5]);
      this[_BaseMaterialInput_0_10] = this[_MaterialInputComponent_0_9];
      this[_MaterialInputDefaultValueAccessor_0_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_0_10], this[_NgControl_0_8]);
      this[_compView_0$1].create(this[_MaterialInputComponent_0_9], [const$9 || (const$9 = dart.constList([], dart.dynamic)), const$10 || (const$10 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialInputComponent_0_9].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(this.ctx, 'handleFocus')));
      let subscription_1 = this[_MaterialInputComponent_0_9].onKeypress.listen(this.eventHandler1(core.String, core.String, dart.bind(this, _handle_inputKeyPress_0_1)));
      this.init([this[_el_0$1]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 0 === nodeIndex) {
        return this[_DeferredValidator_0_5];
      }
      if (token === (const$11 || (const$11 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 0 === nodeIndex) {
        return this[_NgValidators_0_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 0 === nodeIndex) {
        return this[_NgModel_0_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 0 === nodeIndex) {
        return this[_NgControl_0_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 === nodeIndex) {
        return this[_MaterialInputComponent_0_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 0 === nodeIndex) {
        return this[_BaseMaterialInput_0_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 0 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_0_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_0_7].model = _ctx.inputText;
      this[_NgModel_0_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_0_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_0_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_1 = _ctx.placeholder;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$1], currVal_1))) {
        this[_MaterialInputComponent_0_9].label = currVal_1;
        changed = true;
        this[_expr_1$1] = currVal_1;
      }
      let currVal_3 = _ctx.leadingGlyph;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$1], currVal_3))) {
        this[_MaterialInputComponent_0_9].leadingGlyph = currVal_3;
        changed = true;
        this[_expr_3$1] = currVal_3;
      }
      if (changed) {
        this[_compView_0$1].markAsCheckOnce();
      }
      this[_compView_0$1].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, this.parentView)[_query_materialInput_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0$1];
      t == null ? null : t.destroy();
      this[_MaterialInputComponent_0_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_11].ngOnDestroy();
    }
    [_handle_inputKeyPress_0_1]($event) {
      this.ctx.inputText = core.String._check($event);
    }
  };
  (src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new = function(parentView, parentIndex) {
    this[_el_0$1] = null;
    this[_compView_0$1] = null;
    this[_DeferredValidator_0_5] = null;
    this[_NgValidators_0_6] = null;
    this[_NgModel_0_7] = null;
    this[_NgControl_0_8] = null;
    this[_MaterialInputComponent_0_9] = null;
    this[_BaseMaterialInput_0_10] = null;
    this[_MaterialInputDefaultValueAccessor_0_11] = null;
    this[_expr_1$1] = null;
    this[_expr_3$1] = null;
    src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType;
  }).prototype = src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_inputKeyPress_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    [_el_0$1]: dart.fieldType(html.Element),
    [_compView_0$1]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_0_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_0_6]: dart.fieldType(core.List),
    [_NgModel_0_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_0_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_0_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_0_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_0_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_1$1]: dart.fieldType(core.String),
    [_expr_3$1]: dart.fieldType(core.String)
  }));
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponentHost*/get styles$MaterialTreeFilterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeFilterComponent_0_5 = Symbol('_MaterialTreeFilterComponent_0_5');
  src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0 = class _ViewMaterialTreeFilterComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      this[_compView_0$1] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_MaterialTreeFilterComponent_0_5] = new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex, null)));
      this[_compView_0$1].create(this[_MaterialTreeFilterComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeFilterComponent()).new(0, this, this.rootEl, this[_MaterialTreeFilterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$1];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_MaterialTreeFilterComponent_0_5] = null;
    src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
    [_MaterialTreeFilterComponent_0_5]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)
  }));
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template._MaterialTreeFilterComponentNgFactory*/get _MaterialTreeFilterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeFilterComponent()).new("material-tree-filter", dart.fn(src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0, AppViewAndintToAppViewOfMaterialTreeFilterComponent())));
    }
  });
  dart.copyProperties(src__material_tree__material_tree_filter$46template, {
    get MaterialTreeFilterComponentNgFactory() {
      return src__material_tree__material_tree_filter$46template._MaterialTreeFilterComponentNgFactory;
    }
  });
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_filter$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_filter$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_filter$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), src__material_tree__material_tree_filter$46template.MaterialTreeFilterComponentNgFactory);
    angular$46template.initReflector();
    material_input__material_input$46template.initReflector();
    model__selection__select$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__async__async$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_dropdown$46scss$46css$46shim, {
    /*src__material_tree__material_tree_dropdown$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:inline-flex}.button._ngcontent-%ID%{display:flex;align-items:center;flex-grow:1;cursor:pointer;padding-right:48px;position:relative}.button.border._ngcontent-%ID%{border-bottom:1px solid rgba(0,0,0,0.12);padding-bottom:1px}.icon._ngcontent-%ID%{opacity:0.54;position:absolute;right:0;top:calc(50% - 13px)}.search-box._ngcontent-%ID%{width:100%}"];
    }
  });
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent*/get styles$MaterialTreeDropdownComponent() {
      return [src__material_tree__material_tree_dropdown$46scss$46css$46shim.styles];
    }
  });
  const _el_0$2 = Symbol('_el_0');
  const _KeyboardOnlyFocusIndicatorDirective_0_5 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_5');
  const _PopupSourceDirective_0_6 = Symbol('_PopupSourceDirective_0_6');
  const _appEl_1$1 = Symbol('_appEl_1');
  const _NgIf_1_9$1 = Symbol('_NgIf_1_9');
  const _appEl_2$1 = Symbol('_appEl_2');
  const _NgIf_2_9$1 = Symbol('_NgIf_2_9');
  const _appEl_3$ = Symbol('_appEl_3');
  const _query_MaterialTreeFilterComponent_1_0_isDirty = Symbol('_query_MaterialTreeFilterComponent_1_0_isDirty');
  const _NgIf_3_9$ = Symbol('_NgIf_3_9');
  const _el_4$ = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _appEl_4 = Symbol('_appEl_4');
  const _MaterialPopupComponent_4_8 = Symbol('_MaterialPopupComponent_4_8');
  const __PopupHierarchy_4_11 = Symbol('__PopupHierarchy_4_11');
  const __PopupRef_4_12 = Symbol('__PopupRef_4_12');
  const _el_5 = Symbol('_el_5');
  const _appEl_6$ = Symbol('_appEl_6');
  const _NgIf_6_9$ = Symbol('_NgIf_6_9');
  const _appEl_7$ = Symbol('_appEl_7');
  const _DeferredContentDirective_7_9 = Symbol('_DeferredContentDirective_7_9');
  const _expr_0$1 = Symbol('_expr_0');
  const _expr_5$ = Symbol('_expr_5');
  const _expr_6$ = Symbol('_expr_6');
  const _expr_8$ = Symbol('_expr_8');
  const _PopupHierarchy_4_11 = Symbol('_PopupHierarchy_4_11');
  const _PopupRef_4_12 = Symbol('_PopupRef_4_12');
  let const$12;
  let const$13;
  let const$14;
  const _handle_focus_0_0 = Symbol('_handle_focus_0_0');
  const _handle_click_0_1$ = Symbol('_handle_click_0_1');
  const _handle_visibleChange_4_1 = Symbol('_handle_visibleChange_4_1');
  let const$15;
  const _MaterialTreeFilterComponent_0_5$ = Symbol('_MaterialTreeFilterComponent_0_5');
  src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0 = class ViewMaterialTreeDropdownComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    get [_PopupHierarchy_4_11]() {
      if (this[__PopupHierarchy_4_11] == null) {
        this[__PopupHierarchy_4_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_4_8]);
      }
      return this[__PopupHierarchy_4_11];
    }
    get [_PopupRef_4_12]() {
      if (this[__PopupRef_4_12] == null) {
        this[__PopupRef_4_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_4_8]);
      }
      return this[__PopupRef_4_12];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0$2].className = "button";
      this.createAttr(this[_el_0$2], "keyboardOnlyFocusIndicator", "");
      this.createAttr(this[_el_0$2], "popupSource", "");
      this.addShimC(this[_el_0$2]);
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0$2], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_PopupSourceDirective_0_6] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0$2], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex, null)), null);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$2][$append](_anchor_1);
      this[_appEl_1$1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$1], dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1, AppViewAndintToAppViewOfMaterialTreeDropdownComponent()));
      this[_NgIf_1_9$1] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$2][$append](_anchor_2);
      this[_appEl_2$1] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$1], dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2, AppViewAndintToAppViewOfMaterialTreeDropdownComponent()));
      this[_NgIf_2_9$1] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$1], _TemplateRef_2_8);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$2][$append](_anchor_3);
      this[_appEl_3$] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3$], dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3, AppViewAndintToAppViewOfMaterialTreeDropdownComponent()));
      this[_NgIf_3_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
      this[_compView_4] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 4);
      this[_el_4$] = this[_compView_4].rootEl;
      parentRenderNode[$append](this[_el_4$]);
      this.createAttr(this[_el_4$], "enforceSpaceConstraints", "");
      this.createAttr(this[_el_4$], "trackLayoutChanges", "");
      this.addShimC(html.HtmlElement._check(this[_el_4$]));
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, this[_el_4$]);
      this[_MaterialPopupComponent_4_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$12 || (const$12 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$13 || (const$13 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_4].ref, this[_appEl_4], new src__core__linker__element_ref.ElementRef.new(this[_el_4$]));
      this[_el_5] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_5], "header", "");
      this.addShimC(this[_el_5]);
      this.project(this[_el_5], 0);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_5][$append](_anchor_6);
      this[_appEl_6$] = new src__core__linker__view_container.ViewContainer.new(6, 5, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6$], dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4, AppViewAndintToAppViewOfMaterialTreeDropdownComponent()));
      this[_NgIf_6_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6$], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_7$] = new src__core__linker__view_container.ViewContainer.new(7, 4, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7$], dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5, AppViewAndintToAppViewOfMaterialTreeDropdownComponent()));
      this[_DeferredContentDirective_7_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_7$], _TemplateRef_7_8, this[_MaterialPopupComponent_4_8]);
      this[_compView_4].create(this[_MaterialPopupComponent_4_8], [JSArrayOfDivElement().of([this[_el_5]]), JSArrayOfViewContainer().of([this[_appEl_7$]]), const$14 || (const$14 = dart.constList([], dart.dynamic))]);
      this[_el_0$2][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_0_0)));
      this[_el_0$2][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_1$)));
      this[_el_0$2][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0$2][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0$2][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      let subscription_0 = this[_MaterialPopupComponent_4_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_4_1)));
      let subscription_1 = this[_MaterialPopupComponent_4_8].onOpened.listen(this.eventHandler0(dart.void, dart.bind(this.ctx, 'focus')));
      this.init(const$15 || (const$15 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_MaterialPopupComponent_4_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_PopupHierarchy_4_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_PopupRef_4_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_button = this[_PopupSourceDirective_0_6];
      this[_NgIf_1_9$1].ngIf = !dart.test(_ctx.showFilterInsideButton);
      this[_NgIf_2_9$1].ngIf = !dart.test(_ctx.showFilterInsideButton);
      this[_NgIf_3_9$].ngIf = _ctx.showFilterInsideButton;
      if (firstCheck) {
        this[_MaterialPopupComponent_4_8].enforceSpaceConstraints = true;
        this[_MaterialPopupComponent_4_8].trackLayoutChanges = true;
      }
      let currVal_5 = _ctx.popupPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5$], currVal_5))) {
        this[_MaterialPopupComponent_4_8].preferredPositions = currVal_5;
        this[_expr_5$] = currVal_5;
      }
      let currVal_6 = local_button;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6$], currVal_6))) {
        this[_MaterialPopupComponent_4_8].source = currVal_6;
        this[_expr_6$] = currVal_6;
      }
      let currVal_8 = _ctx.visible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8$], currVal_8))) {
        this[_MaterialPopupComponent_4_8].visible = currVal_8;
        this[_expr_8$] = currVal_8;
      }
      this[_NgIf_6_9$].ngIf = dart.test(_ctx.supportsFiltering) && dart.test(_ctx.showFilterInsidePopup);
      if (firstCheck) {
        this[_DeferredContentDirective_7_9].preserveDimensions = true;
      }
      this[_appEl_1$1].detectChangesInNestedViews();
      this[_appEl_2$1].detectChangesInNestedViews();
      this[_appEl_3$].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_6$].detectChangesInNestedViews();
      this[_appEl_7$].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MaterialTreeFilterComponent_1_0_isDirty])) {
          this.ctx.materialTreeFilterComponent = src__core__linker__app_view_utils.firstOrNull(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__core__linker__app_view_utils.flattenNodes(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, JSArrayOfListOfMaterialTreeFilterComponent().of([this[_appEl_3$].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5$]]), _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent())), this[_appEl_6$].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5$]]), _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent()))])));
          this[_query_MaterialTreeFilterComponent_1_0_isDirty] = false;
        }
      }
      let currVal_0 = !dart.test(_ctx.showFilterInsideButton);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
        this.updateClass(this[_el_0$2], "border", currVal_0);
        this[_expr_0$1] = currVal_0;
      }
      this[_compView_4].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_6].ngAfterViewInit();
          this[_MaterialPopupComponent_4_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_1$1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2$1];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_3$];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_4];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_6$];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_appEl_7$];
      t$3 == null ? null : t$3.destroyNestedViews();
      let t$4 = this[_compView_4];
      t$4 == null ? null : t$4.destroy();
      this[_PopupSourceDirective_0_6].ngOnDestroy();
      this[_DeferredContentDirective_7_9].ngOnDestroy();
      this[_MaterialPopupComponent_4_8].ngOnDestroy();
    }
    [_handle_focus_0_0]($event) {
      this.ctx.visible = true;
    }
    [_handle_click_0_1$]($event) {
      this.ctx.visible = !dart.test(this.ctx.visible);
      this[_KeyboardOnlyFocusIndicatorDirective_0_5].hideOutline();
    }
    [_handle_visibleChange_4_1]($event) {
      this.ctx.visible = core.bool._check($event);
    }
  };
  (src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
    this[_PopupSourceDirective_0_6] = null;
    this[_appEl_1$1] = null;
    this[_NgIf_1_9$1] = null;
    this[_appEl_2$1] = null;
    this[_NgIf_2_9$1] = null;
    this[_appEl_3$] = null;
    this[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
    this[_NgIf_3_9$] = null;
    this[_el_4$] = null;
    this[_compView_4] = null;
    this[_appEl_4] = null;
    this[_MaterialPopupComponent_4_8] = null;
    this[__PopupHierarchy_4_11] = null;
    this[__PopupRef_4_12] = null;
    this[_el_5] = null;
    this[_appEl_6$] = null;
    this[_NgIf_6_9$] = null;
    this[_appEl_7$] = null;
    this[_DeferredContentDirective_7_9] = null;
    this[_expr_0$1] = null;
    this[_expr_5$] = null;
    this[_expr_6$] = null;
    this[_expr_8$] = null;
    src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-dropdown"));
    let t = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
    t == null ? src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_dropdown.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent) : t;
    this.setupComponentType(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType);
  }).prototype = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_focus_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_1$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_visibleChange_4_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, () => ({
    __proto__: dart.getGetters(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__),
    [_PopupHierarchy_4_11]: dart.dynamic,
    [_PopupRef_4_12]: dart.dynamic
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__),
    [_el_0$2]: dart.fieldType(html.DivElement),
    [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_PopupSourceDirective_0_6]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_appEl_1$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$1]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$1]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_MaterialTreeFilterComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_NgIf_3_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_4$]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_4_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_4_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_4_12]: dart.fieldType(dart.dynamic),
    [_el_5]: dart.fieldType(html.DivElement),
    [_appEl_6$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_7_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_0$1]: dart.fieldType(core.bool),
    [_expr_5$]: dart.fieldType(dart.dynamic),
    [_expr_6$]: dart.fieldType(dart.dynamic),
    [_expr_8$]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, {
    /*src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.new(parentView, parentIndex);
  };
  const _text_1$0 = Symbol('_text_1');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1 = class _ViewMaterialTreeDropdownComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      let doc = html.document;
      this[_el_0$2] = doc[$createElement]("span");
      this[_el_0$2].className = "button-text";
      this.addShimE(this[_el_0$2]);
      this[_text_1$0] = html.Text.new("");
      this[_el_0$2][$append](this[_text_1$0]);
      this.init0(this[_el_0$2]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.placeholder;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
        this[_text_1$0][$text] = currVal_0;
        this[_expr_0$1] = currVal_0;
      }
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_text_1$0] = null;
    this[_expr_0$1] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.__proto__),
    [_el_0$2]: dart.fieldType(html.Element),
    [_text_1$0]: dart.fieldType(html.Text),
    [_expr_0$1]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.new(parentView, parentIndex);
  };
  const _compView_0$2 = Symbol('_compView_0');
  const _MaterialIconComponent_0_5$ = Symbol('_MaterialIconComponent_0_5');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2 = class _ViewMaterialTreeDropdownComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0$2] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0$2] = this[_compView_0$2].rootEl;
      this[_el_0$2].className = "icon";
      this.createAttr(this[_el_0$2], "icon", "arrow_drop_down");
      this.addShimC(html.HtmlElement._check(this[_el_0$2]));
      this[_MaterialIconComponent_0_5$] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0$2]));
      this[_compView_0$2].create(this[_MaterialIconComponent_0_5$], []);
      this.init0(this[_el_0$2]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_0_5$].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_0$2].markAsCheckOnce();
      }
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_compView_0$2] = null;
    this[_MaterialIconComponent_0_5$] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.__proto__),
    [_el_0$2]: dart.fieldType(html.Element),
    [_compView_0$2]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.new(parentView, parentIndex);
  };
  const _expr_1$2 = Symbol('_expr_1');
  const _handle_filter_0_0 = Symbol('_handle_filter_0_0');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3 = class _ViewMaterialTreeDropdownComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0$2] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this[_el_0$2] = this[_compView_0$2].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0$2]));
      this[_MaterialTreeFilterComponent_0_5$] = new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex, null)));
      this[_compView_0$2].create(this[_MaterialTreeFilterComponent_0_5$], []);
      let subscription_0 = this[_MaterialTreeFilterComponent_0_5$].onFiltered.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_filter_0_0)));
      this.init([this[_el_0$2]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.placeholder;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
        this[_MaterialTreeFilterComponent_0_5$].placeholder = currVal_0;
        this[_expr_0$1] = currVal_0;
      }
      let currVal_1 = _ctx.filterableOptions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$2], currVal_1))) {
        this[_MaterialTreeFilterComponent_0_5$].filterable = currVal_1;
        this[_expr_1$2] = currVal_1;
      }
      this[_compView_0$2].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, this.parentView)[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
    [_handle_filter_0_0]($event) {
      this.ctx.visible = true;
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_compView_0$2] = null;
    this[_MaterialTreeFilterComponent_0_5$] = null;
    this[_expr_0$1] = null;
    this[_expr_1$2] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_filter_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.__proto__),
    [_el_0$2]: dart.fieldType(html.Element),
    [_compView_0$2]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
    [_MaterialTreeFilterComponent_0_5$]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent),
    [_expr_0$1]: dart.fieldType(core.String),
    [_expr_1$2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.new(parentView, parentIndex);
  };
  const _expr_2$1 = Symbol('_expr_2');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4 = class _ViewMaterialTreeDropdownComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0$2] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this[_el_0$2] = this[_compView_0$2].rootEl;
      this[_el_0$2].className = "search-box";
      this.createAttr(this[_el_0$2], "leadingGlyph", "search");
      this.addShimC(html.HtmlElement._check(this[_el_0$2]));
      this[_MaterialTreeFilterComponent_0_5$] = new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex, null)));
      this[_compView_0$2].create(this[_MaterialTreeFilterComponent_0_5$], []);
      this.init0(this[_el_0$2]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialTreeFilterComponent_0_5$].leadingGlyph = "search";
      }
      let currVal_1 = _ctx.placeholder;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$2], currVal_1))) {
        this[_MaterialTreeFilterComponent_0_5$].placeholder = currVal_1;
        this[_expr_1$2] = currVal_1;
      }
      let currVal_2 = _ctx.filterableOptions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$1], currVal_2))) {
        this[_MaterialTreeFilterComponent_0_5$].filterable = currVal_2;
        this[_expr_2$1] = currVal_2;
      }
      this[_compView_0$2].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, this.parentView)[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_compView_0$2] = null;
    this[_MaterialTreeFilterComponent_0_5$] = null;
    this[_expr_1$2] = null;
    this[_expr_2$1] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.__proto__),
    [_el_0$2]: dart.fieldType(html.Element),
    [_compView_0$2]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
    [_MaterialTreeFilterComponent_0_5$]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent),
    [_expr_1$2]: dart.fieldType(core.String),
    [_expr_2$1]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.new(parentView, parentIndex);
  };
  const _MaterialTreeComponent_0_5$ = Symbol('_MaterialTreeComponent_0_5');
  const _expr_3$2 = Symbol('_expr_3');
  const _expr_4$0 = Symbol('_expr_4');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5 = class _ViewMaterialTreeDropdownComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0$2] = new src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new(this, 0);
      this[_el_0$2] = this[_compView_0$2].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0$2]));
      this[_MaterialTreeComponent_0_5$] = new src__material_tree__material_tree_impl.MaterialTreeComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex, null)), null);
      this[_compView_0$2].create(this[_MaterialTreeComponent_0_5$], []);
      this.init0(this[_el_0$2]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot) && 0 === nodeIndex) {
        return this[_MaterialTreeComponent_0_5$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.expandAll;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
        this[_MaterialTreeComponent_0_5$].expandAll = currVal_0;
        this[_expr_0$1] = currVal_0;
      }
      let currVal_1 = _ctx.componentRenderer;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$2], currVal_1))) {
        this[_MaterialTreeComponent_0_5$].componentRenderer = currVal_1;
        this[_expr_1$2] = currVal_1;
      }
      let currVal_2 = _ctx.itemRenderer;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$1], currVal_2))) {
        this[_MaterialTreeComponent_0_5$].itemRenderer = currVal_2;
        this[_expr_2$1] = currVal_2;
      }
      let currVal_3 = _ctx.options;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$2], currVal_3))) {
        this[_MaterialTreeComponent_0_5$].options = currVal_3;
        this[_expr_3$2] = currVal_3;
      }
      let currVal_4 = _ctx.selection;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$0], currVal_4))) {
        this[_MaterialTreeComponent_0_5$].selection = currVal_4;
        this[_expr_4$0] = currVal_4;
      }
      this[_compView_0$2].detectHostChanges(firstCheck);
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_compView_0$2] = null;
    this[_MaterialTreeComponent_0_5$] = null;
    this[_expr_0$1] = null;
    this[_expr_1$2] = null;
    this[_expr_2$1] = null;
    this[_expr_3$2] = null;
    this[_expr_4$0] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.__proto__),
    [_el_0$2]: dart.fieldType(html.Element),
    [_compView_0$2]: dart.fieldType(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0),
    [_MaterialTreeComponent_0_5$]: dart.fieldType(src__material_tree__material_tree_impl.MaterialTreeComponent),
    [_expr_0$1]: dart.fieldType(core.bool),
    [_expr_1$2]: dart.fieldType(dart.dynamic),
    [_expr_2$1]: dart.fieldType(dart.dynamic),
    [_expr_3$2]: dart.fieldType(dart.dynamic),
    [_expr_4$0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponentHost*/get styles$MaterialTreeDropdownComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeDropdownComponent_0_5 = Symbol('_MaterialTreeDropdownComponent_0_5');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0 = class _ViewMaterialTreeDropdownComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0$2] = new src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.new(this, 0);
      this.rootEl = this[_compView_0$2].rootEl;
      this[_MaterialTreeDropdownComponent_0_5] = new src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent.new(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_0$2].create(this[_MaterialTreeDropdownComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeDropdownComponent()).new(0, this, this.rootEl, this[_MaterialTreeDropdownComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot)) && 0 === nodeIndex) {
        return this[_MaterialTreeDropdownComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTreeDropdownComponent_0_5].ngOnInit();
      }
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_MaterialTreeDropdownComponent_0_5] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.__proto__),
    [_compView_0$2]: dart.fieldType(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0),
    [_MaterialTreeDropdownComponent_0_5]: dart.fieldType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template._MaterialTreeDropdownComponentNgFactory*/get _MaterialTreeDropdownComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeDropdownComponent()).new("material-tree-dropdown", dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0, AppViewAndintToAppViewOfMaterialTreeDropdownComponent())));
    }
  });
  dart.copyProperties(src__material_tree__material_tree_dropdown$46template, {
    get MaterialTreeDropdownComponentNgFactory() {
      return src__material_tree__material_tree_dropdown$46template._MaterialTreeDropdownComponentNgFactory;
    }
  });
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_dropdown$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_dropdown$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_dropdown$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), src__material_tree__material_tree_dropdown$46template.MaterialTreeDropdownComponentNgFactory);
    src__material_tree__material_tree_impl$46template.initReflector();
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    src__material_tree__material_tree_filter$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group.scss.css.shim.ddc", {
    "package:angular_components/src/material_tree/material_tree_expand_state.template.dart": src__material_tree__material_tree_expand_state$46template,
    "package:angular_components/src/material_tree/material_tree_root.template.dart": src__material_tree__material_tree_root$46template,
    "package:angular_components/src/material_tree/material_tree_node.template.dart": src__material_tree__material_tree_node$46template,
    "package:angular_components/src/material_tree/group/material_tree_group.scss.css.shim.dart": src__material_tree__group__material_tree_group$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group.template.dart": src__material_tree__group__material_tree_group$46template,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_list.scss.css.shim.dart": src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_radio.scss.css.shim.dart": src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_check.scss.css.shim.dart": src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart": src__material_tree__group__material_tree_group_flat$46template,
    "package:angular_components/src/material_tree/material_tree_rendering_options.template.dart": src__material_tree__material_tree_rendering_options$46template,
    "package:angular_components/src/material_tree/material_tree_impl.template.dart": src__material_tree__material_tree_impl$46template,
    "package:angular_components/src/material_tree/material_tree_filter.template.dart": src__material_tree__material_tree_filter$46template,
    "package:angular_components/src/material_tree/material_tree_dropdown.scss.css.shim.dart": src__material_tree__material_tree_dropdown$46scss$46css$46shim,
    "package:angular_components/src/material_tree/material_tree_dropdown.template.dart": src__material_tree__material_tree_dropdown$46template
  }, '{"version":3,"sourceRoot":"","sources":["../material_tree_expand_state.template.dart","../material_tree_root.template.dart","../material_tree_node.template.dart","material_tree_group.scss.css.shim.dart","material_tree_group.template.dart","material_tree_group_flat_list.scss.css.shim.dart","material_tree_group_flat_radio.scss.css.shim.dart","material_tree_group_flat_check.scss.css.shim.dart","material_tree_group_flat.template.dart","../material_tree_rendering_options.template.dart","../material_tree_impl.template.dart","../material_tree_filter.template.dart","../material_tree_dropdown.scss.css.shim.dart","../material_tree_dropdown.template.dart"],"names":[],"mappings":"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","file":"material_tree_group.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_expand_state$46template: src__material_tree__material_tree_expand_state$46template,
    src__material_tree__material_tree_root$46template: src__material_tree__material_tree_root$46template,
    src__material_tree__material_tree_node$46template: src__material_tree__material_tree_node$46template,
    src__material_tree__group__material_tree_group$46scss$46css$46shim: src__material_tree__group__material_tree_group$46scss$46css$46shim,
    src__material_tree__group__material_tree_group$46template: src__material_tree__group__material_tree_group$46template,
    src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim: src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim: src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim: src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat$46template: src__material_tree__group__material_tree_group_flat$46template,
    src__material_tree__material_tree_rendering_options$46template: src__material_tree__material_tree_rendering_options$46template,
    src__material_tree__material_tree_impl$46template: src__material_tree__material_tree_impl$46template,
    src__material_tree__material_tree_filter$46template: src__material_tree__material_tree_filter$46template,
    src__material_tree__material_tree_dropdown$46scss$46css$46shim: src__material_tree__material_tree_dropdown$46scss$46css$46shim,
    src__material_tree__material_tree_dropdown$46template: src__material_tree__material_tree_dropdown$46template
  };
});

//# sourceMappingURL=material_tree_group.scss.css.shim.ddc.js.map
