define(['dart_sdk', 'packages/angular_components/model/action/delayed_action', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/model/ui/toggle', 'packages/angular/src/core/change_detection/change_detection', 'packages/intl/intl', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular/angular.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/model/ui/toggle.template', 'packages/angular_components/laminate/overlay/constants.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular/src/core/linker/view_type', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/content/deferred_content', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/material_tooltip/module.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector'], function(dart_sdk, delayed_action, popup_hierarchy, toggle, change_detection, intl, tooltip_controller, modules, events, css, deferred_content_aware, dom_popup_source, material_popup, alignment, directive_change_detector, angular, popup, delayed_action$, toggle$, constants, tooltip_controller$, events$, view_type, material_popup$, ng_zone, overlay_ref, zindexer, deferred_content, material_dropdown_base, disposer, module, deferred_content$, alignment$, module$, feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__action__delayed_action = delayed_action.model__action__delayed_action;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const model__ui__toggle = toggle.model__ui__toggle;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const intl$ = intl.intl;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const src__core__linker__view_container_ref = modules.src__core__linker__view_container_ref;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const utils__browser__events__events = events.utils__browser__events__events;
  const utils__angular__css__css = css.utils__angular__css__css;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__laminate__popup__popup_source = dom_popup_source.src__laminate__popup__popup_source;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const angular$46template = angular.angular$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const model__action__delayed_action$46template = delayed_action$.model__action__delayed_action$46template;
  const model__ui__toggle$46template = toggle$.model__ui__toggle$46template;
  const laminate__overlay__constants$46template = constants.laminate__overlay__constants$46template;
  const src__material_tooltip__tooltip_controller$46template = tooltip_controller$.src__material_tooltip__tooltip_controller$46template;
  const utils__browser__events__events$46template = events$.utils__browser__events__events$46template;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const content__deferred_content = deferred_content.content__deferred_content;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_tooltip__module = module.material_tooltip__module;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const material_tooltip__module$46template = module$.material_tooltip__module$46template;
  const utils__browser__feature_detector__feature_detector = feature_detector.utils__browser__feature_detector__feature_detector;
  const _root = Object.create(null);
  const src__material_tooltip__tooltip_source = Object.create(_root);
  const src__material_tooltip__tooltip_target = Object.create(_root);
  const src__material_tooltip__paper_tooltip = Object.create(_root);
  const src__material_tooltip__icon_tooltip = Object.create(_root);
  const src__material_tooltip__ink_tooltip = Object.create(_root);
  const src__material_tooltip__tooltip_source$46template = Object.create(_root);
  const src__material_tooltip__tooltip_target$46template = Object.create(_root);
  const src__material_tooltip__ink_tooltip$46scss$46css$46shim = Object.create(_root);
  const src__material_tooltip__ink_tooltip$46template = Object.create(_root);
  const src__material_tooltip__tooltip = Object.create(_root);
  const $relatedTarget = dartx.relatedTarget;
  const $parent = dartx.parent;
  const $classes = dartx.classes;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $onClick = dartx.onClick;
  const $onBlur = dartx.onBlur;
  const $onFocus = dartx.onFocus;
  const $onMouseOver = dartx.onMouseOver;
  const $onMouseLeave = dartx.onMouseLeave;
  const $on = dartx.on;
  const $onTouchEnd = dartx.onTouchEnd;
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialInkTooltipComponent = () => (AppViewOfMaterialInkTooltipComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent)))();
  let AppViewAndintToAppViewOfMaterialInkTooltipComponent = () => (AppViewAndintToAppViewOfMaterialInkTooltipComponent = dart.constFn(dart.fnType(AppViewOfMaterialInkTooltipComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ComponentRefOfMaterialInkTooltipComponent = () => (ComponentRefOfMaterialInkTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent)))();
  let ComponentFactoryOfMaterialInkTooltipComponent = () => (ComponentFactoryOfMaterialInkTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent)))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tooltip__tooltip_source, {
    /*src__material_tooltip__tooltip_source.tooltipShowDelay*/get tooltipShowDelay() {
      return dart.const(new core.Duration.new({milliseconds: 600}));
    }
  });
  const _show = Symbol('_show');
  const _isMouseInside = Symbol('_isMouseInside');
  const _focusLatch = Symbol('_focusLatch');
  const _popupRef = Symbol('_popupRef');
  src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective = class MaterialTooltipSourceDirective extends src__laminate__popup__popup_source_directive.PopupSourceDirective {
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    activate() {
      this[_popupRef].isOn = true;
    }
    deactivate() {
      this[_show].cancel();
      if (dart.test(this[_popupRef].isOn)) this[_popupRef].isOn = false;
    }
    onFocus() {
      this[_focusLatch] = true;
    }
    onBlur() {
      this[_focusLatch] = false;
      this.deactivate();
    }
    onKeyUp() {
      if (dart.test(this[_focusLatch])) {
        this.activate();
        this[_focusLatch] = false;
      }
    }
    onMouseOver() {
      if (dart.test(this[_isMouseInside])) return;
      this[_isMouseInside] = true;
      this[_show].start();
    }
    onMouseLeave() {
      this[_isMouseInside] = false;
      this.deactivate();
    }
    set toggleable(popupRef) {
      this[_popupRef] = popupRef;
    }
  };
  (src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.new = function(domPopupSourceFactory, element) {
    this[_show] = null;
    this[_isMouseInside] = false;
    this[_focusLatch] = false;
    this[_popupRef] = null;
    this[element$] = element;
    src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.__proto__.new.call(this, domPopupSourceFactory, element, null, null, null);
    this[_show] = new model__action__delayed_action.DelayedAction.new(src__material_tooltip__tooltip_source.tooltipShowDelay, dart.bind(this, 'activate'));
  }).prototype = src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective);
  const element$ = Symbol("MaterialTooltipSourceDirective.element");
  src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective[dart.implements] = () => [model__ui__toggle.Toggler, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.__proto__),
    activate: dart.fnType(dart.void, []),
    deactivate: dart.fnType(dart.void, []),
    onFocus: dart.fnType(dart.void, []),
    onBlur: dart.fnType(dart.void, []),
    onKeyUp: dart.fnType(dart.void, []),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective, () => ({
    __proto__: dart.getSetters(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.__proto__),
    toggleable: model__ui__toggle.Toggleable
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.__proto__),
    element: dart.finalFieldType(html.HtmlElement),
    [_show]: dart.fieldType(model__action__delayed_action.DelayedAction),
    [_isMouseInside]: dart.fieldType(core.bool),
    [_focusLatch]: dart.fieldType(core.bool),
    [_popupRef]: dart.fieldType(model__ui__toggle.Toggleable)
  }));
  dart.defineLazy(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective, {
    /*src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.hostStyleCursor*/get hostStyleCursor() {
      return "pointer";
    },
    /*src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.hostTabIndex*/get hostTabIndex() {
      return 0;
    },
    /*src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.tooltipLabel*/get tooltipLabel() {
      return intl$.Intl.message("Mouseover or press enter on this icon for more information.", {name: "MaterialTooltipSourceDirective_tooltipLabel", desc: "Label for help icon which opens a help center tooltip."});
    }
  });
  const _changeDetector = Symbol('_changeDetector');
  const _tooltipActivate = Symbol('_tooltipActivate');
  const _show$ = Symbol('_show');
  const _isMouseInside$ = Symbol('_isMouseInside');
  const _tooltip = Symbol('_tooltip');
  const _element = Symbol('_element');
  src__material_tooltip__tooltip_target.TooltipTarget = class TooltipTarget extends src__laminate__popup__popup_source_directive.PopupSourceDirective {
    get viewContainerRef() {
      return this[viewContainerRef$];
    }
    set viewContainerRef(value) {
      super.viewContainerRef = value;
    }
    setTooltip(component) {
      this[_tooltip] = component;
    }
    set popupId(id) {
      super.popupId = id;
      if (id == null) return;
      this[_element].setAttribute("aria-describedby", id);
    }
  };
  (src__material_tooltip__tooltip_target.TooltipTarget.new = function(domPopupSourceFactory, viewContainerRef, element) {
    this[_tooltip] = null;
    this[viewContainerRef$] = viewContainerRef;
    this[_element] = element;
    src__material_tooltip__tooltip_target.TooltipTarget.__proto__.new.call(this, domPopupSourceFactory, element, null, null, null);
  }).prototype = src__material_tooltip__tooltip_target.TooltipTarget.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_target.TooltipTarget);
  const viewContainerRef$ = Symbol("TooltipTarget.viewContainerRef");
  dart.setMethodSignature(src__material_tooltip__tooltip_target.TooltipTarget, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_target.TooltipTarget.__proto__),
    setTooltip: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip])
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_target.TooltipTarget, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_target.TooltipTarget.__proto__),
    [_tooltip]: dart.fieldType(src__material_tooltip__tooltip_controller.Tooltip),
    viewContainerRef: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_element]: dart.finalFieldType(html.HtmlElement)
  }));
  src__material_tooltip__tooltip_target.TooltipBehavior = class TooltipBehavior extends src__material_tooltip__tooltip_target.TooltipTarget {
    get tooltipActivate() {
      return this[_tooltipActivate].stream.distinct();
    }
    showTooltipWithDelay() {
      this[_show$].start();
    }
    showTooltip() {
      this[_show$].cancel();
      this[_changeDetector].markForCheck();
      this[_tooltipActivate].add(true);
      let t = this[_tooltip];
      t == null ? null : t.activate();
    }
    onBlurOrClick() {
      return this.hideTooltip();
    }
    hideTooltip(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      this[_show$].cancel();
      this[_tooltipActivate].add(false);
      let t = this[_tooltip];
      t == null ? null : t.deactivate({immediate: immediate});
    }
    onMouseOver() {
      if (dart.test(this[_isMouseInside$])) return;
      this[_isMouseInside$] = true;
      this.showTooltipWithDelay();
    }
    onMouseLeave() {
      this[_isMouseInside$] = false;
      this.hideTooltip();
    }
  };
  (src__material_tooltip__tooltip_target.TooltipBehavior.new = function(domPopupSourceFactory, viewContainerRef, element, changeDetector) {
    this[_tooltipActivate] = StreamControllerOfbool().broadcast({sync: true});
    this[_show$] = null;
    this[_isMouseInside$] = false;
    this[_changeDetector] = changeDetector;
    src__material_tooltip__tooltip_target.TooltipBehavior.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element);
    this[_show$] = new model__action__delayed_action.DelayedAction.new(src__material_tooltip__tooltip_source.tooltipShowDelay, dart.bind(this, 'showTooltip'));
  }).prototype = src__material_tooltip__tooltip_target.TooltipBehavior.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_target.TooltipBehavior);
  dart.setMethodSignature(src__material_tooltip__tooltip_target.TooltipBehavior, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_target.TooltipBehavior.__proto__),
    showTooltipWithDelay: dart.fnType(dart.void, []),
    showTooltip: dart.fnType(dart.void, []),
    onBlurOrClick: dart.fnType(dart.void, []),
    hideTooltip: dart.fnType(dart.void, [], {immediate: core.bool}),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__tooltip_target.TooltipBehavior, () => ({
    __proto__: dart.getGetters(src__material_tooltip__tooltip_target.TooltipBehavior.__proto__),
    tooltipActivate: async.Stream$(core.bool)
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_target.TooltipBehavior, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_target.TooltipBehavior.__proto__),
    [_tooltipActivate]: dart.finalFieldType(StreamControllerOfbool()),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_show$]: dart.fieldType(model__action__delayed_action.DelayedAction),
    [_isMouseInside$]: dart.fieldType(core.bool)
  }));
  src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective = class MaterialTooltipTargetDirective extends src__material_tooltip__tooltip_target.TooltipBehavior {
    get element() {
      return this[element$0];
    }
    set element(value) {
      this[element$0] = value;
    }
    ngOnDestroy() {
      this.element = null;
    }
  };
  (src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective.new = function(domPopupSourceFactory, viewContainerRef, element, changeDetector) {
    this[element$0] = null;
    src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element, changeDetector);
    this.element = element;
  }).prototype = src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective);
  const element$0 = Symbol("MaterialTooltipTargetDirective.element");
  src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setFieldSignature(src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective.__proto__),
    element: dart.fieldType(html.HtmlElement)
  }));
  const _tooltipSubscription = Symbol('_tooltipSubscription');
  const _tooltipVisible = Symbol('_tooltipVisible');
  const _toggleVisibility = Symbol('_toggleVisibility');
  src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective = class ClickableTooltipTargetDirective extends src__material_tooltip__tooltip_target.TooltipBehavior {
    get element() {
      return this[element$1];
    }
    set element(value) {
      this[element$1] = value;
    }
    onBlur(event) {
      if (event[$relatedTarget] == null) return;
      let el = null;
      for (el = html.HtmlElement._check(event[$relatedTarget]); el[$parent] != null; el = html.HtmlElement._check(el[$parent])) {
        if (el.className === "acx-overlay-container") return;
      }
      this.hideTooltip({immediate: true});
    }
    onClick() {
      this[_toggleVisibility]();
    }
    [_toggleVisibility]() {
      if (dart.test(this[_tooltipVisible])) {
        this.hideTooltip({immediate: true});
      } else {
        this.showTooltip();
      }
    }
    kbTrigger(event) {
      if (event.keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(event))) {
        this[_toggleVisibility]();
        event.preventDefault();
      }
    }
    ngOnDestroy() {
      this.element = null;
      this[_tooltipSubscription].cancel();
    }
  };
  (src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.new = function(domPopupSourceFactory, viewContainerRef, element, changeDetector) {
    this[_tooltipSubscription] = null;
    this[element$1] = null;
    this[_tooltipVisible] = false;
    src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element, changeDetector);
    this.element = element;
    this[_tooltipSubscription] = this.tooltipActivate.listen(dart.fn(visible => {
      this[_tooltipVisible] = visible;
    }, boolToNull()));
  }).prototype = src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective);
  const element$1 = Symbol("ClickableTooltipTargetDirective.element");
  src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.__proto__),
    onBlur: dart.fnType(dart.void, [html.FocusEvent]),
    onClick: dart.fnType(dart.void, []),
    [_toggleVisibility]: dart.fnType(dart.void, []),
    kbTrigger: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.__proto__),
    [_tooltipSubscription]: dart.fieldType(async.StreamSubscription),
    element: dart.fieldType(html.HtmlElement),
    [_tooltipVisible]: dart.fieldType(core.bool)
  }));
  src__material_tooltip__paper_tooltip.getTooltipHandle = function(tooltip) {
    return tooltip.tooltipHandle;
  };
  const _tooltipController = Symbol('_tooltipController');
  const _changeDetector$ = Symbol('_changeDetector');
  const _tooltipSource = Symbol('_tooltipSource');
  const _visibleCtrl = Symbol('_visibleCtrl');
  const _showPopup = Symbol('_showPopup');
  const _controllerProxy = Symbol('_controllerProxy');
  src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent = class MaterialPaperTooltipComponent extends core.Object {
    get popupClassName() {
      return this[popupClassName];
    }
    set popupClassName(value) {
      super.popupClassName = value;
    }
    get popupSource() {
      return this[_tooltipSource];
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    get offsetX() {
      return this[offsetX];
    }
    set offsetX(value) {
      this[offsetX] = value;
    }
    get offsetY() {
      return this[offsetY];
    }
    set offsetY(value) {
      this[offsetY] = value;
    }
    get showPopup() {
      return this[_showPopup];
    }
    get contentVisible() {
      return this[_visibleCtrl].stream;
    }
    set popupChild(popup) {
      if (popup == null) return;
      this[_visibleCtrl].addStream(popup.contentVisible);
    }
    deactivate(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      this[_showPopup] = false;
      this[_changeDetector$].markForCheck();
    }
    activate() {
      this[_showPopup] = true;
      this[_changeDetector$].markForCheck();
    }
    onMouseOver() {
      this[_tooltipController].keepOpen(this);
    }
    onMouseLeave() {
      this[_tooltipController].deactivate(this);
    }
    get tooltipHandle() {
      let t = this[_controllerProxy];
      return t == null ? this[_controllerProxy] = this[_tooltipController].proxyFor(this) : t;
    }
    set tooltipRef(target) {
      if (target == null) return;
      this[_tooltipSource] = target;
      target.setTooltip(this.tooltipHandle);
    }
  };
  (src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.new = function(tooltipController, changeDetector, hostElement, tooltipClass) {
    this[_tooltipSource] = null;
    this[preferredPositions] = src__material_tooltip__paper_tooltip._defaultPositions;
    this[offsetX] = 0;
    this[offsetY] = 0;
    this[_visibleCtrl] = StreamControllerOfbool().broadcast();
    this[_showPopup] = false;
    this[_controllerProxy] = null;
    this[_tooltipController] = tooltipController;
    this[_changeDetector$] = changeDetector;
    this[popupClassName] = utils__angular__css__css.constructEncapsulatedCss(tooltipClass, hostElement[$classes]);
  }).prototype = src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.prototype;
  dart.addTypeTests(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent);
  const popupClassName = Symbol("MaterialPaperTooltipComponent.popupClassName");
  const preferredPositions = Symbol("MaterialPaperTooltipComponent.preferredPositions");
  const offsetX = Symbol("MaterialPaperTooltipComponent.offsetX");
  const offsetY = Symbol("MaterialPaperTooltipComponent.offsetY");
  src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent[dart.implements] = () => [content__deferred_content_aware.DeferredContentAware, src__material_tooltip__tooltip_controller.Tooltip];
  dart.setMethodSignature(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getMethods(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    deactivate: dart.fnType(dart.void, [], {immediate: core.bool}),
    activate: dart.fnType(dart.void, []),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getGetters(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    popupSource: src__laminate__popup__popup_source.PopupSource,
    showPopup: core.bool,
    contentVisible: async.Stream$(core.bool),
    tooltipHandle: src__material_tooltip__tooltip_controller.Tooltip
  }));
  dart.setSetterSignature(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getSetters(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    popupChild: material_popup__material_popup.MaterialPopupComponent,
    tooltipRef: src__material_tooltip__tooltip_target.TooltipTarget
  }));
  dart.setFieldSignature(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getFields(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    popupClassName: dart.finalFieldType(core.String),
    [_tooltipSource]: dart.fieldType(src__laminate__popup__popup_source.PopupSource),
    preferredPositions: dart.fieldType(ListOfRelativePosition()),
    offsetX: dart.fieldType(core.int),
    offsetY: dart.fieldType(core.int),
    [_visibleCtrl]: dart.finalFieldType(StreamControllerOfbool()),
    [_showPopup]: dart.fieldType(core.bool),
    [_tooltipController]: dart.finalFieldType(src__material_tooltip__tooltip_controller.TooltipController),
    [_changeDetector$]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_controllerProxy]: dart.fieldType(src__material_tooltip__tooltip_controller.Tooltip)
  }));
  dart.defineLazy(src__material_tooltip__paper_tooltip, {
    /*src__material_tooltip__paper_tooltip._defaultPositions*/get _defaultPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.OffsetBottomRight, laminate__enums__alignment.RelativePosition.OffsetTopLeft, laminate__enums__alignment.RelativePosition.OffsetBottomLeft, laminate__enums__alignment.RelativePosition.OffsetTopRight], laminate__enums__alignment.RelativePosition);
    }
  });
  src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent = class MaterialIconTooltipComponent extends core.Object {
    get element() {
      return this[element$2];
    }
    set element(value) {
      this[element$2] = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get iconSize() {
      return this[iconSize];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    get preferredPositions() {
      return this[preferredPositions$];
    }
    set preferredPositions(value) {
      this[preferredPositions$] = value;
    }
    get offsetX() {
      return this[offsetX$];
    }
    set offsetX(value) {
      this[offsetX$] = value;
    }
    get offsetY() {
      return this[offsetY$];
    }
    set offsetY(value) {
      this[offsetY$] = value;
    }
    get tooltipBehavior() {
      return this[tooltipBehavior];
    }
    set tooltipBehavior(value) {
      this[tooltipBehavior] = value;
    }
    get contentVisible() {
      return this.tooltipBehavior.tooltipActivate;
    }
  };
  (src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.new = function(darkTheme, element, icon, type, size) {
    this[element$2] = null;
    this[preferredPositions$] = src__material_tooltip__icon_tooltip._defaultPositions;
    this[offsetX$] = 0;
    this[offsetY$] = 0;
    this[tooltipBehavior] = null;
    this[icon$] = icon != null ? icon : (type != null ? type : "help") + "_outline";
    this[iconSize] = size != null ? size : "medium";
    if (!(type === "help" || type === "info" || type === "error" || type == null)) dart.assertFailed();
    if (!(this.iconSize === "x-small" || this.iconSize === "small" || this.iconSize === "medium" || this.iconSize === "large" || this.iconSize === "x-large" || this.iconSize === "")) dart.assertFailed();
    this.element = element;
    darkTheme.themeElement(element);
  }).prototype = src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.prototype;
  dart.addTypeTests(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent);
  const element$2 = Symbol("MaterialIconTooltipComponent.element");
  const icon$ = Symbol("MaterialIconTooltipComponent.icon");
  const iconSize = Symbol("MaterialIconTooltipComponent.iconSize");
  const preferredPositions$ = Symbol("MaterialIconTooltipComponent.preferredPositions");
  const offsetX$ = Symbol("MaterialIconTooltipComponent.offsetX");
  const offsetY$ = Symbol("MaterialIconTooltipComponent.offsetY");
  const tooltipBehavior = Symbol("MaterialIconTooltipComponent.tooltipBehavior");
  src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent[dart.implements] = () => [content__deferred_content_aware.DeferredContentAware];
  dart.setGetterSignature(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent, () => ({
    __proto__: dart.getGetters(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.__proto__),
    contentVisible: async.Stream$(core.bool)
  }));
  dart.setFieldSignature(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent, () => ({
    __proto__: dart.getFields(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.__proto__),
    element: dart.fieldType(html.HtmlElement),
    icon: dart.finalFieldType(core.String),
    iconSize: dart.finalFieldType(core.String),
    preferredPositions: dart.fieldType(ListOfRelativePosition()),
    offsetX: dart.fieldType(core.int),
    offsetY: dart.fieldType(core.int),
    tooltipBehavior: dart.fieldType(src__material_tooltip__tooltip_target.TooltipBehavior)
  }));
  dart.defineLazy(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent, {
    /*src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.helpTooltipLabel*/get helpTooltipLabel() {
      return intl$.Intl.message("Mouseover, click, press Enter key or Space key on this icon for more " + "information.", {name: "MaterialIconTooltipComponent_helpTooltipLabel", desc: "Label for help icon which shows help content."});
    }
  });
  dart.defineLazy(src__material_tooltip__icon_tooltip, {
    /*src__material_tooltip__icon_tooltip._defaultPositions*/get _defaultPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.OffsetBottomRight, laminate__enums__alignment.RelativePosition.OffsetTopLeft, laminate__enums__alignment.RelativePosition.OffsetBottomLeft, laminate__enums__alignment.RelativePosition.OffsetTopRight], laminate__enums__alignment.RelativePosition);
    }
  });
  const _tooltipController$ = Symbol('_tooltipController');
  const _changeDetector$0 = Symbol('_changeDetector');
  const _tooltipSource$ = Symbol('_tooltipSource');
  const _controllerProxy$ = Symbol('_controllerProxy');
  const _showPopup$ = Symbol('_showPopup');
  src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent = class MaterialInkTooltipComponent extends core.Object {
    get popupSource() {
      return this[_tooltipSource$];
    }
    get positions() {
      return this[positions];
    }
    set positions(value) {
      this[positions] = value;
    }
    get showPopup() {
      return this[_showPopup$];
    }
    get text() {
      return this[text];
    }
    set text(value) {
      this[text] = value;
    }
    activate() {
      this[_showPopup$] = true;
      this[_changeDetector$0].markForCheck();
    }
    deactivate(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      this[_showPopup$] = false;
      this[_changeDetector$0].markForCheck();
    }
    onMouseOver() {
      this[_tooltipController$].keepOpen(this);
    }
    onMouseLeave() {
      this[_tooltipController$].deactivate(this);
    }
    set tooltipRef(target) {
      if (target == null) return;
      this[_tooltipSource$] = target;
      target.setTooltip(this.tooltipHandle);
    }
    get tooltipHandle() {
      let t = this[_controllerProxy$];
      return t == null ? this[_controllerProxy$] = this[_tooltipController$].proxyFor(this) : t;
    }
  };
  (src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.new = function(tooltipController, changeDetector) {
    this[_tooltipSource$] = null;
    this[positions] = laminate__enums__alignment.RelativePosition.AdjacentBottomEdge;
    this[_controllerProxy$] = null;
    this[_showPopup$] = false;
    this[text] = null;
    this[_tooltipController$] = tooltipController;
    this[_changeDetector$0] = changeDetector;
  }).prototype = src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.prototype;
  dart.addTypeTests(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent);
  const positions = Symbol("MaterialInkTooltipComponent.positions");
  const text = Symbol("MaterialInkTooltipComponent.text");
  src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent[dart.implements] = () => [src__material_tooltip__tooltip_controller.Tooltip];
  dart.setMethodSignature(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getMethods(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.__proto__),
    activate: dart.fnType(dart.void, []),
    deactivate: dart.fnType(dart.void, [], {immediate: core.bool}),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getGetters(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.__proto__),
    popupSource: src__laminate__popup__popup_source.PopupSource,
    showPopup: core.bool,
    tooltipHandle: src__material_tooltip__tooltip_controller.Tooltip
  }));
  dart.setSetterSignature(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getSetters(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.__proto__),
    tooltipRef: src__material_tooltip__tooltip_target.TooltipTarget
  }));
  dart.setFieldSignature(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getFields(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.__proto__),
    [_tooltipController$]: dart.finalFieldType(src__material_tooltip__tooltip_controller.TooltipController),
    [_changeDetector$0]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_tooltipSource$]: dart.fieldType(src__laminate__popup__popup_source.PopupSource),
    positions: dart.fieldType(ListOfRelativePosition()),
    [_controllerProxy$]: dart.fieldType(src__material_tooltip__tooltip_controller.Tooltip),
    [_showPopup$]: dart.fieldType(core.bool),
    text: dart.fieldType(core.String)
  }));
  src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd = class MaterialTooltipSourceDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let firstCheck = view.cdState === 0;
      if (firstCheck) {
        if (!(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.hostStyleCursor === null)) {
          el.style[$setProperty]("cursor", src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.hostStyleCursor[$toString]());
        }
      }
    }
  };
  (src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.new = function(instance) {
    this[instance$] = instance;
    src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.__proto__.new.call(this);
  }).prototype = src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd);
  const instance$ = Symbol("MaterialTooltipSourceDirectiveNgCd.instance");
  dart.setFieldSignature(src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective)
  }));
  dart.defineLazy(src__material_tooltip__tooltip_source$46template, {
    /*src__material_tooltip__tooltip_source$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__tooltip_source$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__tooltip_source$46template._visited)) {
      return;
    }
    src__material_tooltip__tooltip_source$46template._visited = true;
    angular$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    model__action__delayed_action$46template.initReflector();
    model__ui__toggle$46template.initReflector();
  };
  dart.defineLazy(src__material_tooltip__tooltip_target$46template, {
    /*src__material_tooltip__tooltip_target$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__tooltip_target$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__tooltip_target$46template._visited)) {
      return;
    }
    src__material_tooltip__tooltip_target$46template._visited = true;
    angular$46template.initReflector();
    laminate__overlay__constants$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    model__action__delayed_action$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    src__material_tooltip__tooltip_source$46template.initReflector();
  };
  dart.defineLazy(src__material_tooltip__ink_tooltip$46scss$46css$46shim, {
    /*src__material_tooltip__ink_tooltip$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{position:absolute}.ink-container._ngcontent-%ID%{box-sizing:border-box;overflow:hidden;max-width:320px;padding:8px;font-size:12px;font-weight:500;line-height:16px;text-align:left;text-overflow:ellipsis}.aacmtit-ink-tooltip-shadow._ngcontent-%ID%  .popup-wrapper.mixin{margin:8px}"];
    }
  });
  dart.defineLazy(src__material_tooltip__ink_tooltip$46template, {
    /*src__material_tooltip__ink_tooltip$46template.styles$MaterialInkTooltipComponent*/get styles$MaterialInkTooltipComponent() {
      return [src__material_tooltip__ink_tooltip$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  let const$;
  src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0 = class ViewMaterialInkTooltipComponent0 extends src__core__linker__app_view.AppView$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("        ");
      parentRenderNode[$append](_text_0);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent1, AppViewAndintToAppViewOfMaterialInkTooltipComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.popupSource != null;
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tooltip-text"));
    let t = src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType;
    t == null ? src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tooltip/ink_tooltip.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tooltip__ink_tooltip$46template.styles$MaterialInkTooltipComponent) : t;
    this.setupComponentType(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType);
  }).prototype = src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.prototype;
  dart.addTypeTests(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0);
  dart.setMethodSignature(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0, () => ({
    __proto__: dart.getFields(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0, {
    /*src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent0 = function(parentView, parentIndex) {
    return new src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _appEl_0 = Symbol('_appEl_0');
  const _MaterialPopupComponent_0_8 = Symbol('_MaterialPopupComponent_0_8');
  const __PopupHierarchy_0_11 = Symbol('__PopupHierarchy_0_11');
  const __PopupRef_0_12 = Symbol('__PopupRef_0_12');
  const _appEl_2 = Symbol('_appEl_2');
  const _DeferredContentDirective_2_9 = Symbol('_DeferredContentDirective_2_9');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_6 = Symbol('_expr_6');
  const _PopupHierarchy_0_11 = Symbol('_PopupHierarchy_0_11');
  const _PopupRef_0_12 = Symbol('_PopupRef_0_12');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1 = class _ViewMaterialInkTooltipComponent1 extends src__core__linker__app_view.AppView$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent) {
    get [_PopupHierarchy_0_11]() {
      if (this[__PopupHierarchy_0_11] == null) {
        this[__PopupHierarchy_0_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_11];
    }
    get [_PopupRef_0_12]() {
      if (this[__PopupRef_0_12] == null) {
        this[__PopupRef_0_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_12];
    }
    build() {
      this[_compView_0] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "aacmtit-ink-tooltip-shadow";
      this.createAttr(this[_el_0], "enforceSpaceConstraints", "");
      this.createAttr(this[_el_0], "ink", "");
      this.createAttr(this[_el_0], "role", "tooltip");
      this.createAttr(this[_el_0], "trackLayoutChanges", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), "tooltip", src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this[_el_0]));
      let _text_1 = html.Text.new("\n          ");
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent2, AppViewAndintToAppViewOfMaterialInkTooltipComponent()));
      this[_DeferredContentDirective_2_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8]);
      let _text_3 = html.Text.new("\n        ");
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], [const$2 || (const$2 = dart.constList([], dart.dynamic)), JSArrayOfObject().of([_text_1, this[_appEl_2], _text_3]), const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      this.init0(this[_appEl_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialPopupComponent_0_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupHierarchy_0_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupRef_0_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].autoDismiss = false;
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        this[_MaterialPopupComponent_0_8].matchMinSourceWidth = false;
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = true;
        this[_MaterialPopupComponent_0_8].inkBackground = true;
      }
      let currVal_3 = _ctx.positions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.popupSource;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialPopupComponent_0_8].source = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_6 = _ctx.showPopup;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_6] = null;
    src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType;
  }).prototype = src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.prototype;
  dart.addTypeTests(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1);
  dart.setMethodSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1, () => ({
    __proto__: dart.getMethods(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1, () => ({
    __proto__: dart.getGetters(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__),
    [_PopupHierarchy_0_11]: dart.dynamic,
    [_PopupRef_0_12]: dart.dynamic
  }));
  dart.setFieldSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1, () => ({
    __proto__: dart.getFields(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_2_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool)
  }));
  src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent1 = function(parentView, parentIndex) {
    return new src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.new(parentView, parentIndex);
  };
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2 = class _ViewMaterialInkTooltipComponent2 extends src__core__linker__app_view.AppView$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "ink-container";
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new("\n            ");
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new("");
      this[_el_0][$append](this[_text_2]);
      this.project(this[_el_0], 0);
      let _text_3 = html.Text.new("\n          ");
      this[_el_0][$append](_text_3);
      this[_el_0][$addEventListener]("mouseover", this.eventHandler0(html.Event, dart.bind(this.ctx, 'onMouseOver')));
      this[_el_0][$addEventListener]("mouseleave", this.eventHandler0(html.Event, dart.bind(this.ctx, 'onMouseLeave')));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.text;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType;
  }).prototype = src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.prototype;
  dart.addTypeTests(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2);
  dart.setMethodSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2, () => ({
    __proto__: dart.getMethods(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2, () => ({
    __proto__: dart.getFields(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent2 = function(parentView, parentIndex) {
    return new src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tooltip__ink_tooltip$46template, {
    /*src__material_tooltip__ink_tooltip$46template.styles$MaterialInkTooltipComponentHost*/get styles$MaterialInkTooltipComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _TooltipController_0_5 = Symbol('_TooltipController_0_5');
  const _MaterialInkTooltipComponent_0_6 = Symbol('_MaterialInkTooltipComponent_0_6');
  src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0 = class _ViewMaterialInkTooltipComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent) {
    build() {
      this[_compView_0] = new src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TooltipController_0_5] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)));
      this[_MaterialInkTooltipComponent_0_6] = new src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.new(src__material_tooltip__tooltip_controller.TooltipController._check(this[_TooltipController_0_5]), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialInkTooltipComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialInkTooltipComponent()).new(0, this, this.rootEl, this[_MaterialInkTooltipComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 0 === nodeIndex) {
        return this[_TooltipController_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
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
  (src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TooltipController_0_5] = null;
    this[_MaterialInkTooltipComponent_0_6] = null;
    src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.prototype;
  dart.addTypeTests(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0);
  dart.setMethodSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0),
    [_TooltipController_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialInkTooltipComponent_0_6]: dart.fieldType(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent)
  }));
  src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tooltip__ink_tooltip$46template, {
    /*src__material_tooltip__ink_tooltip$46template._MaterialInkTooltipComponentNgFactory*/get _MaterialInkTooltipComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialInkTooltipComponent()).new("material-tooltip-text", dart.fn(src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponentHost0, AppViewAndintToAppViewOfMaterialInkTooltipComponent())));
    }
  });
  dart.copyProperties(src__material_tooltip__ink_tooltip$46template, {
    get MaterialInkTooltipComponentNgFactory() {
      return src__material_tooltip__ink_tooltip$46template._MaterialInkTooltipComponentNgFactory;
    }
  });
  dart.defineLazy(src__material_tooltip__ink_tooltip$46template, {
    /*src__material_tooltip__ink_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__ink_tooltip$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__ink_tooltip$46template._visited)) {
      return;
    }
    src__material_tooltip__ink_tooltip$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent), src__material_tooltip__ink_tooltip$46template.MaterialInkTooltipComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_tooltip__module$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    src__material_tooltip__tooltip_target$46template.initReflector();
  };
  const _viewLoader = Symbol('_viewLoader');
  const _changeDetector$1 = Symbol('_changeDetector');
  const _window = Symbol('_window');
  const _disposer = Symbol('_disposer');
  const _lastText = Symbol('_lastText');
  const _isInitialized = Symbol('_isInitialized');
  const _tooltip$ = Symbol('_tooltip');
  const _canShow = Symbol('_canShow');
  const _isShown = Symbol('_isShown');
  const _inkTooltip = Symbol('_inkTooltip');
  const _delayedActivate = Symbol('_delayedActivate');
  const _hostListenersAttached = Symbol('_hostListenersAttached');
  const _componentRef = Symbol('_componentRef');
  const _activate = Symbol('_activate');
  const _attachHostListeners = Symbol('_attachHostListeners');
  const _maybeLoadTooltip = Symbol('_maybeLoadTooltip');
  src__material_tooltip__tooltip.MaterialTooltipDirective = class MaterialTooltipDirective extends src__material_tooltip__tooltip_target.TooltipTarget {
    get element() {
      return this[element$3];
    }
    set element(value) {
      this[element$3] = value;
    }
    get inLongPress() {
      return this[inLongPress];
    }
    set inLongPress(value) {
      this[inLongPress] = value;
    }
    [_attachHostListeners]() {
      if (dart.test(this[_hostListenersAttached])) return;
      this[_hostListenersAttached] = true;
      this[_disposer].addStreamSubscription(html.MouseEvent, this.element[$onClick].listen(dart.fn(_ => {
        this.hide(true);
      }, MouseEventToNull())));
      this[_disposer].addStreamSubscription(html.Event, this.element[$onBlur].listen(dart.fn(_ => {
        this.hide(true);
      }, EventToNull())));
      this[_disposer].addStreamSubscription(html.Event, this.element[$onFocus].listen(dart.fn(_ => {
        this.show();
      }, EventToNull())));
      if (dart.test(utils__browser__feature_detector__feature_detector.supportsHover(this[_window]))) {
        this[_disposer].addStreamSubscription(html.MouseEvent, this.element[$onMouseOver].listen(dart.fn(_ => {
          this.show();
        }, MouseEventToNull())));
        this[_disposer].addStreamSubscription(html.MouseEvent, this.element[$onMouseLeave].listen(dart.fn(_ => {
          this.hide();
        }, MouseEventToNull())));
      }
      if (dart.test(utils__browser__feature_detector__feature_detector.isHammerLoaded())) {
        this[_disposer].addStreamSubscription(html.Event, this.element[$on]._get("press").listen(dart.bind(this, 'handleLongPress')));
        this[_disposer].addStreamSubscription(html.TouchEvent, this.element[$onTouchEnd].listen(dart.bind(this, 'endLongPress')));
      }
    }
    handleLongPress(_) {
      this.inLongPress = true;
      this.show();
    }
    endLongPress(event) {
      if (dart.test(this.inLongPress)) {
        event.preventDefault();
        this.inLongPress = false;
        this.hide(true);
      }
    }
    show() {
      if (dart.test(this[_isShown]) || !dart.test(this[_canShow])) return;
      this[_isShown] = true;
      this[_maybeLoadTooltip]();
      this[_delayedActivate].start();
    }
    hide(immediate) {
      if (immediate === void 0) immediate = false;
      if (!dart.test(this[_isShown])) return;
      this[_isShown] = false;
      this[_delayedActivate].cancel();
      let t = this[_tooltip$];
      t == null ? null : t.deactivate({immediate: immediate});
    }
    [_maybeLoadTooltip]() {
      if (dart.test(this[_isInitialized])) return;
      this[_isInitialized] = true;
      this[_componentRef] = this[_viewLoader].loadNextToLocation(dart.dynamic, src__material_tooltip__ink_tooltip$46template.MaterialInkTooltipComponentNgFactory, this.viewContainerRef);
      this[_inkTooltip] = src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent._check(this[_componentRef].instance);
      this[_disposer].addDisposable(VoidTovoid(), dart.bind(this[_componentRef], 'destroy'));
      let _ = this[_inkTooltip];
      _.text = this[_lastText];
      _.tooltipRef = this;
      if (this.positions != null) {
        this[_inkTooltip].positions = this.positions;
      }
    }
    setTooltip(tooltip) {
      if (this[_tooltip$] == null) this[_delayedActivate].start();
      this[_tooltip$] = tooltip;
    }
    [_activate]() {
      this[_changeDetector$1].markForCheck();
      this[_tooltip$].activate();
    }
    set text(text) {
      this[_lastText] = text;
      let l = this[_inkTooltip];
      l == null ? null : l.text = text;
    }
    set canShow(value) {
      if (value == this[_canShow]) return;
      if (dart.test(value)) {
        this[_attachHostListeners]();
      } else {
        let t = this[_tooltip$];
        t == null ? null : t.deactivate({immediate: true});
        this[_delayedActivate].cancel();
      }
      this[_canShow] = value;
    }
    get positions() {
      return this[positions$];
    }
    set positions(value) {
      this[positions$] = value;
    }
    ngOnInit() {
      if (dart.test(this[_canShow])) this[_attachHostListeners]();
    }
    ngOnDestroy() {
      let t = this[_tooltip$];
      t == null ? null : t.deactivate({immediate: true});
      this[_delayedActivate].cancel();
      this[_disposer].dispose();
    }
  };
  (src__material_tooltip__tooltip.MaterialTooltipDirective.new = function(domPopupSourceFactory, viewContainerRef, element, viewLoader, changeDetector, window) {
    this[_disposer] = new utils__disposer__disposer.Disposer.multi();
    this[_lastText] = null;
    this[_isInitialized] = false;
    this[_tooltip$] = null;
    this[_canShow] = true;
    this[_isShown] = false;
    this[_inkTooltip] = null;
    this[_delayedActivate] = null;
    this[inLongPress] = null;
    this[_hostListenersAttached] = false;
    this[_componentRef] = null;
    this[positions$] = null;
    this[_viewLoader] = viewLoader;
    this[_changeDetector$1] = changeDetector;
    this[_window] = window;
    this[element$3] = element;
    src__material_tooltip__tooltip.MaterialTooltipDirective.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element);
    this.inLongPress = false;
    this[_delayedActivate] = new model__action__delayed_action.DelayedAction.new(src__material_tooltip__tooltip_source.tooltipShowDelay, dart.bind(this, _activate));
  }).prototype = src__material_tooltip__tooltip.MaterialTooltipDirective.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip.MaterialTooltipDirective);
  const element$3 = Symbol("MaterialTooltipDirective.element");
  const inLongPress = Symbol("MaterialTooltipDirective.inLongPress");
  const positions$ = Symbol("MaterialTooltipDirective.positions");
  src__material_tooltip__tooltip.MaterialTooltipDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy, src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.AfterViewInit];
  dart.setMethodSignature(src__material_tooltip__tooltip.MaterialTooltipDirective, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip.MaterialTooltipDirective.__proto__),
    [_attachHostListeners]: dart.fnType(dart.void, []),
    handleLongPress: dart.fnType(dart.void, [html.Event]),
    endLongPress: dart.fnType(dart.void, [html.TouchEvent]),
    show: dart.fnType(dart.void, []),
    hide: dart.fnType(dart.void, [], [core.bool]),
    [_maybeLoadTooltip]: dart.fnType(dart.void, []),
    [_activate]: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(src__material_tooltip__tooltip.MaterialTooltipDirective, () => ({
    __proto__: dart.getSetters(src__material_tooltip__tooltip.MaterialTooltipDirective.__proto__),
    text: core.String,
    canShow: core.bool
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip.MaterialTooltipDirective, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip.MaterialTooltipDirective.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_viewLoader]: dart.finalFieldType(src__core__linker__component_loader.ComponentLoader),
    [_changeDetector$1]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_window]: dart.finalFieldType(html.Window),
    [_lastText]: dart.fieldType(core.String),
    [_isInitialized]: dart.fieldType(core.bool),
    [_tooltip$]: dart.fieldType(src__material_tooltip__tooltip_controller.Tooltip),
    [_canShow]: dart.fieldType(core.bool),
    [_isShown]: dart.fieldType(core.bool),
    [_inkTooltip]: dart.fieldType(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent),
    [_delayedActivate]: dart.fieldType(model__action__delayed_action.DelayedAction),
    element: dart.fieldType(html.HtmlElement),
    inLongPress: dart.fieldType(core.bool),
    [_hostListenersAttached]: dart.fieldType(core.bool),
    [_componentRef]: dart.fieldType(src__core__linker__component_factory.ComponentRef),
    positions: dart.fieldType(ListOfRelativePosition())
  }));
  dart.trackLibraries("packages/angular_components/src/material_tooltip/icon_tooltip.ddc", {
    "package:angular_components/src/material_tooltip/tooltip_source.dart": src__material_tooltip__tooltip_source,
    "package:angular_components/src/material_tooltip/tooltip_target.dart": src__material_tooltip__tooltip_target,
    "package:angular_components/src/material_tooltip/paper_tooltip.dart": src__material_tooltip__paper_tooltip,
    "package:angular_components/src/material_tooltip/icon_tooltip.dart": src__material_tooltip__icon_tooltip,
    "package:angular_components/src/material_tooltip/ink_tooltip.dart": src__material_tooltip__ink_tooltip,
    "package:angular_components/src/material_tooltip/tooltip_source.template.dart": src__material_tooltip__tooltip_source$46template,
    "package:angular_components/src/material_tooltip/tooltip_target.template.dart": src__material_tooltip__tooltip_target$46template,
    "package:angular_components/src/material_tooltip/ink_tooltip.scss.css.shim.dart": src__material_tooltip__ink_tooltip$46scss$46css$46shim,
    "package:angular_components/src/material_tooltip/ink_tooltip.template.dart": src__material_tooltip__ink_tooltip$46template,
    "package:angular_components/src/material_tooltip/tooltip.dart": src__material_tooltip__tooltip
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_source.dart","tooltip_target.dart","paper_tooltip.dart","icon_tooltip.dart","ink_tooltip.dart","tooltip_source.template.dart","tooltip_target.template.dart","ink_tooltip.scss.css.shim.dart","ink_tooltip.template.dart","tooltip.dart"],"names":[],"mappings":"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","file":"icon_tooltip.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_source: src__material_tooltip__tooltip_source,
    src__material_tooltip__tooltip_target: src__material_tooltip__tooltip_target,
    src__material_tooltip__paper_tooltip: src__material_tooltip__paper_tooltip,
    src__material_tooltip__icon_tooltip: src__material_tooltip__icon_tooltip,
    src__material_tooltip__ink_tooltip: src__material_tooltip__ink_tooltip,
    src__material_tooltip__tooltip_source$46template: src__material_tooltip__tooltip_source$46template,
    src__material_tooltip__tooltip_target$46template: src__material_tooltip__tooltip_target$46template,
    src__material_tooltip__ink_tooltip$46scss$46css$46shim: src__material_tooltip__ink_tooltip$46scss$46css$46shim,
    src__material_tooltip__ink_tooltip$46template: src__material_tooltip__ink_tooltip$46template,
    src__material_tooltip__tooltip: src__material_tooltip__tooltip
  };
});

//# sourceMappingURL=icon_tooltip.ddc.js.map
