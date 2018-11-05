define(['dart_sdk', 'packages/quiver/time', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/angular/properties/properties'], function(dart_sdk, time, scroll_host_interface, change_detection, $interface, pan_controller_impl, dom_service, ng_zone, properties) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const time$ = time.time;
  const src__utils__angular__scroll_host__scroll_host_interface = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const src__di__providers = change_detection.src__di__providers;
  const src__di__module = change_detection.src__di__module;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__utils__angular__scroll_host__gestures = $interface.src__utils__angular__scroll_host__gestures;
  const src__utils__angular__scroll_host__scroll_host_base = pan_controller_impl.src__utils__angular__scroll_host__scroll_host_base;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const _root = Object.create(null);
  const utils__angular__scroll_host__angular_2 = Object.create(_root);
  const $overflowY = dartx.overflowY;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  dart.defineLazy(utils__angular__scroll_host__angular_2, {
    /*utils__angular__scroll_host__angular_2.clockValue*/get clockValue() {
      return dart.const(new time$.Clock.new());
    },
    /*utils__angular__scroll_host__angular_2.scrollHostProviders*/get scrollHostProviders() {
      return dart.constList([dart.const(src__di__providers.ClassProvider.new(dart.wrapType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost), {useClass: dart.wrapType(utils__angular__scroll_host__angular_2.WindowScrollHost)})), dart.const(src__di__providers.ValueProvider.new(dart.wrapType(time$.Clock), utils__angular__scroll_host__angular_2.clockValue)), dart.const(src__di__providers.ClassProvider.new(dart.wrapType(src__utils__angular__scroll_host__gestures.GestureListenerFactory)))], src__di__providers.Provider);
    },
    /*utils__angular__scroll_host__angular_2.scrollHostModule*/get scrollHostModule() {
      return utils__angular__scroll_host__angular_2.scrollHostProviders;
    },
    /*utils__angular__scroll_host__angular_2.scrollHostNewModule*/get scrollHostNewModule() {
      return dart.const(src__di__module.Module.new({provide: utils__angular__scroll_host__angular_2.scrollHostProviders}));
    }
  });
  const _domService = Symbol('_domService');
  const _ngZone = Symbol('_ngZone');
  const _gestureListenerFactory = Symbol('_gestureListenerFactory');
  const _scrollHost = Symbol('_scrollHost');
  const _disableAutoScroll = Symbol('_disableAutoScroll');
  const _usePositionSticky = Symbol('_usePositionSticky');
  const _enableSmoothPushing = Symbol('_enableSmoothPushing');
  const _init = Symbol('_init');
  utils__angular__scroll_host__angular_2.ElementScrollHost = class ElementScrollHost extends core.Object {
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    ngOnInit() {
      this[_init]();
    }
    [_init]() {
      let t = this[_scrollHost];
      t == null ? null : t.dispose();
      this[_scrollHost] = new src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase.new(this[_domService], this[_ngZone], this[_gestureListenerFactory], this.element, {usePositionSticky: this[_usePositionSticky]});
      this.stickyController.enableSmoothPushing = this[_enableSmoothPushing];
    }
    set disableAutoScroll(value) {
      if (value != this[_disableAutoScroll]) {
        this[_disableAutoScroll] = value;
        this[_domService].scheduleWrite(dart.fn(() => {
          this.element.style[$overflowY] = dart.test(value) ? "scroll" : "auto";
        }, VoidToNull()));
      }
    }
    set enableSmoothPushing(value) {
      this[_enableSmoothPushing] = value;
      let l = this.stickyController;
      l == null ? null : l.enableSmoothPushing = value;
    }
    set usePositionSticky(value) {
      this[_usePositionSticky] = value;
      if (this[_scrollHost] != null) {
        this[_init]();
      }
    }
    dispose() {
      let t = this[_scrollHost];
      return t == null ? null : t.dispose();
    }
    calcViewportRect() {
      return this[_scrollHost].calcViewportRect();
    }
    scrollToPosition(position) {
      let t = this[_scrollHost];
      return t == null ? null : t.scrollToPosition(position);
    }
    scrollWithDelta(delta) {
      let t = this[_scrollHost];
      return t == null ? null : t.scrollWithDelta(delta);
    }
    startNativeScrollListener() {
      return this[_scrollHost].startNativeScrollListener();
    }
    get scrollHeight() {
      return this[_scrollHost].scrollHeight;
    }
    get clientHeight() {
      return this[_scrollHost].clientHeight;
    }
    get nativeOnScroll() {
      return this[_scrollHost].nativeOnScroll;
    }
    get usePositionSticky() {
      return this[_scrollHost].usePositionSticky;
    }
    get throttleScrollEvents() {
      return this[_scrollHost].throttleScrollEvents;
    }
    get scrollbarHost() {
      return this[_scrollHost].scrollbarHost;
    }
    get clientWidth() {
      return this[_scrollHost].clientWidth;
    }
    get offsetX() {
      return this[_scrollHost].offsetX;
    }
    get offsetY() {
      return this[_scrollHost].offsetY;
    }
    get anchorElement() {
      return this[_scrollHost].anchorElement;
    }
    get onScroll() {
      return this[_scrollHost].onScroll;
    }
    get panController() {
      return this[_scrollHost].panController;
    }
    get stickyController() {
      let t = this[_scrollHost];
      return t == null ? null : t.stickyController;
    }
    get scrollLength() {
      return this[_scrollHost].scrollLength;
    }
    get scrollPosition() {
      return this[_scrollHost].scrollPosition;
    }
    onIntersection(element) {
      return this[_scrollHost].onIntersection(element);
    }
    ngOnDestroy() {
      this.dispose();
    }
  };
  (utils__angular__scroll_host__angular_2.ElementScrollHost.new = function(domService, ngZone, gestureListenerFactory, element) {
    this[_scrollHost] = null;
    this[_disableAutoScroll] = null;
    this[_usePositionSticky] = false;
    this[_enableSmoothPushing] = false;
    this[_domService] = domService;
    this[_ngZone] = ngZone;
    this[_gestureListenerFactory] = gestureListenerFactory;
    this[element$] = element;
  }).prototype = utils__angular__scroll_host__angular_2.ElementScrollHost.prototype;
  dart.addTypeTests(utils__angular__scroll_host__angular_2.ElementScrollHost);
  const element$ = Symbol("ElementScrollHost.element");
  utils__angular__scroll_host__angular_2.ElementScrollHost[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy, src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase];
  dart.setMethodSignature(utils__angular__scroll_host__angular_2.ElementScrollHost, () => ({
    __proto__: dart.getMethods(utils__angular__scroll_host__angular_2.ElementScrollHost.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    calcViewportRect: dart.fnType(math.Rectangle$(core.num), []),
    scrollToPosition: dart.fnType(dart.void, [core.int]),
    scrollWithDelta: dart.fnType(dart.void, [core.int]),
    startNativeScrollListener: dart.fnType(dart.void, []),
    onIntersection: dart.fnType(async.Stream$(html.IntersectionObserverEntry), [html.Element]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(utils__angular__scroll_host__angular_2.ElementScrollHost, () => ({
    __proto__: dart.getGetters(utils__angular__scroll_host__angular_2.ElementScrollHost.__proto__),
    scrollHeight: core.int,
    clientHeight: core.int,
    nativeOnScroll: async.Stream$(src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent),
    usePositionSticky: core.bool,
    throttleScrollEvents: core.bool,
    scrollbarHost: html.GlobalEventHandlers,
    clientWidth: core.int,
    offsetX: core.num,
    offsetY: core.num,
    anchorElement: html.Element,
    onScroll: async.Stream$(src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent),
    panController: src__utils__angular__scroll_host__scroll_host_interface.PanController,
    stickyController: src__utils__angular__scroll_host__scroll_host_interface.StickyController,
    scrollLength: core.int,
    scrollPosition: core.int
  }));
  dart.setSetterSignature(utils__angular__scroll_host__angular_2.ElementScrollHost, () => ({
    __proto__: dart.getSetters(utils__angular__scroll_host__angular_2.ElementScrollHost.__proto__),
    disableAutoScroll: core.bool,
    enableSmoothPushing: core.bool,
    usePositionSticky: core.bool
  }));
  dart.setFieldSignature(utils__angular__scroll_host__angular_2.ElementScrollHost, () => ({
    __proto__: dart.getFields(utils__angular__scroll_host__angular_2.ElementScrollHost.__proto__),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    element: dart.finalFieldType(html.HtmlElement),
    [_gestureListenerFactory]: dart.finalFieldType(src__utils__angular__scroll_host__gestures.GestureListenerFactory),
    [_scrollHost]: dart.fieldType(src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase),
    [_disableAutoScroll]: dart.fieldType(core.bool),
    [_usePositionSticky]: dart.fieldType(core.bool),
    [_enableSmoothPushing]: dart.fieldType(core.bool)
  }));
  utils__angular__scroll_host__angular_2.WindowScrollHost = class WindowScrollHost extends src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase {
    ngOnDestroy() {
      this.dispose();
    }
  };
  (utils__angular__scroll_host__angular_2.WindowScrollHost.new = function(domService, ngZone, gestureListenerFactory, window) {
    utils__angular__scroll_host__angular_2.WindowScrollHost.__proto__.new.call(this, domService, ngZone, gestureListenerFactory, window);
  }).prototype = utils__angular__scroll_host__angular_2.WindowScrollHost.prototype;
  dart.addTypeTests(utils__angular__scroll_host__angular_2.WindowScrollHost);
  utils__angular__scroll_host__angular_2.WindowScrollHost[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(utils__angular__scroll_host__angular_2.WindowScrollHost, () => ({
    __proto__: dart.getMethods(utils__angular__scroll_host__angular_2.WindowScrollHost.__proto__),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  const _element = Symbol('_element');
  utils__angular__scroll_host__angular_2.StickyFloatingTracker = class StickyFloatingTracker extends core.Object {
    ngOnInit() {
      this[_scrollHost].stickyController.trackFloating(this[_element]);
    }
    ngOnDestroy() {
      this[_scrollHost].stickyController.untrackFloating(this[_element]);
    }
  };
  (utils__angular__scroll_host__angular_2.StickyFloatingTracker.new = function(scrollHost, element) {
    this[_scrollHost] = scrollHost;
    this[_element] = element;
  }).prototype = utils__angular__scroll_host__angular_2.StickyFloatingTracker.prototype;
  dart.addTypeTests(utils__angular__scroll_host__angular_2.StickyFloatingTracker);
  utils__angular__scroll_host__angular_2.StickyFloatingTracker[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(utils__angular__scroll_host__angular_2.StickyFloatingTracker, () => ({
    __proto__: dart.getMethods(utils__angular__scroll_host__angular_2.StickyFloatingTracker.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(utils__angular__scroll_host__angular_2.StickyFloatingTracker, () => ({
    __proto__: dart.getFields(utils__angular__scroll_host__angular_2.StickyFloatingTracker.__proto__),
    [_scrollHost]: dart.finalFieldType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost),
    [_element]: dart.finalFieldType(html.Element)
  }));
  utils__angular__scroll_host__angular_2.AcxPanClassDirective = class AcxPanClassDirective extends src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective {
    ngOnInit() {
      return this.startPanListener();
    }
    ngOnDestroy() {
      return this.stopPanListener();
    }
    set className(value) {
      return super.className = value;
    }
  };
  (utils__angular__scroll_host__angular_2.AcxPanClassDirective.new = function(domService, scrollHost, element) {
    utils__angular__scroll_host__angular_2.AcxPanClassDirective.__proto__.new.call(this, domService, scrollHost, element);
  }).prototype = utils__angular__scroll_host__angular_2.AcxPanClassDirective.prototype;
  dart.addTypeTests(utils__angular__scroll_host__angular_2.AcxPanClassDirective);
  utils__angular__scroll_host__angular_2.AcxPanClassDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(utils__angular__scroll_host__angular_2.AcxPanClassDirective, () => ({
    __proto__: dart.getMethods(utils__angular__scroll_host__angular_2.AcxPanClassDirective.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  const _stickyElement = Symbol('_stickyElement');
  const _endElement = Symbol('_endElement');
  const _stickyClass = Symbol('_stickyClass');
  const _stickyKey = Symbol('_stickyKey');
  const _sticky = Symbol('_sticky');
  const _position = Symbol('_position');
  const _stick = Symbol('_stick');
  const _unstick = Symbol('_unstick');
  const _stickyController = Symbol('_stickyController');
  utils__angular__scroll_host__angular_2.StickyElementDirective = class StickyElementDirective extends core.Object {
    set endElement(element) {
      this[_endElement] = element;
    }
    set stickyClass(stickyClass) {
      this[_stickyClass] = stickyClass;
    }
    set stickyKey(stickyKey) {
      this[_stickyKey] = stickyKey;
    }
    set sticky(sticky) {
      this[_sticky] = utils__angular__properties__properties.getBool(sticky);
      if (dart.test(this[_sticky])) {
        this[_stick]();
      } else {
        this[_unstick]();
      }
    }
    set position(position) {
      this[_position] = position;
    }
    ngAfterViewInit() {
      if (dart.test(this[_sticky])) this[_stick]();
    }
    ngOnDestroy() {
      if (dart.test(this[_sticky])) this[_unstick]();
    }
    [_stick]() {
      let t = this[_stickyController];
      t == null ? null : t.stick(this[_stickyElement], this[_position], this[_endElement], {stickyClass: this[_stickyClass], stickyKey: this[_stickyKey]});
    }
    [_unstick]() {
      let t = this[_stickyController];
      t == null ? null : t.unstick(this[_stickyElement]);
    }
    get [_stickyController]() {
      return this[_scrollHost].stickyController;
    }
  };
  (utils__angular__scroll_host__angular_2.StickyElementDirective.new = function(scrollHost, stickyElement) {
    this[_endElement] = null;
    this[_stickyClass] = null;
    this[_stickyKey] = null;
    this[_sticky] = true;
    this[_position] = src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.TOP;
    this[_scrollHost] = scrollHost;
    this[_stickyElement] = stickyElement;
  }).prototype = utils__angular__scroll_host__angular_2.StickyElementDirective.prototype;
  dart.addTypeTests(utils__angular__scroll_host__angular_2.StickyElementDirective);
  utils__angular__scroll_host__angular_2.StickyElementDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(utils__angular__scroll_host__angular_2.StickyElementDirective, () => ({
    __proto__: dart.getMethods(utils__angular__scroll_host__angular_2.StickyElementDirective.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_stick]: dart.fnType(dart.void, []),
    [_unstick]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(utils__angular__scroll_host__angular_2.StickyElementDirective, () => ({
    __proto__: dart.getGetters(utils__angular__scroll_host__angular_2.StickyElementDirective.__proto__),
    [_stickyController]: src__utils__angular__scroll_host__scroll_host_interface.StickyController
  }));
  dart.setSetterSignature(utils__angular__scroll_host__angular_2.StickyElementDirective, () => ({
    __proto__: dart.getSetters(utils__angular__scroll_host__angular_2.StickyElementDirective.__proto__),
    endElement: html.Element,
    stickyClass: core.String,
    stickyKey: core.String,
    sticky: dart.dynamic,
    position: src__utils__angular__scroll_host__scroll_host_interface.StickyPosition
  }));
  dart.setFieldSignature(utils__angular__scroll_host__angular_2.StickyElementDirective, () => ({
    __proto__: dart.getFields(utils__angular__scroll_host__angular_2.StickyElementDirective.__proto__),
    [_stickyElement]: dart.finalFieldType(html.Element),
    [_scrollHost]: dart.finalFieldType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost),
    [_endElement]: dart.fieldType(html.Element),
    [_stickyClass]: dart.fieldType(core.String),
    [_stickyKey]: dart.fieldType(core.String),
    [_sticky]: dart.fieldType(core.bool),
    [_position]: dart.fieldType(src__utils__angular__scroll_host__scroll_host_interface.StickyPosition)
  }));
  dart.trackLibraries("packages/angular_components/utils/angular/scroll_host/angular_2.ddc", {
    "package:angular_components/utils/angular/scroll_host/angular_2.dart": utils__angular__scroll_host__angular_2
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.dart"],"names":[],"mappings":"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","file":"angular_2.ddc.js"}');
  // Exports:
  return {
    utils__angular__scroll_host__angular_2: utils__angular__scroll_host__angular_2
  };
});

//# sourceMappingURL=angular_2.ddc.js.map
