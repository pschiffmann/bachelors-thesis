define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer'], function(dart_sdk, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const _root = Object.create(null);
  const src__utils__angular__scroll_host__scroll_host_interface = Object.create(_root);
  src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent = class ScrollHostEvent extends core.Object {};
  (src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent.new = function() {
  }).prototype = src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent);
  src__utils__angular__scroll_host__scroll_host_interface.ScrollHost = class ScrollHost extends core.Object {
    startNativeScrollListener() {}
  };
  (src__utils__angular__scroll_host__scroll_host_interface.ScrollHost.new = function() {
  }).prototype = src__utils__angular__scroll_host__scroll_host_interface.ScrollHost.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost);
  src__utils__angular__scroll_host__scroll_host_interface.ScrollHost[dart.implements] = () => [utils__disposer__disposer.Disposable];
  dart.setMethodSignature(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost.__proto__),
    startNativeScrollListener: dart.fnType(dart.void, [])
  }));
  src__utils__angular__scroll_host__scroll_host_interface.StickyPosition = class StickyPosition extends core.Object {
    toString() {
      return {
        0: "StickyPosition.NONE",
        1: "StickyPosition.TOP",
        2: "StickyPosition.BOTTOM"
      }[this.index];
    }
  };
  (src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.new = function(x) {
    this.index = x;
  }).prototype = src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_interface.StickyPosition);
  dart.setFieldSignature(src__utils__angular__scroll_host__scroll_host_interface.StickyPosition, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__utils__angular__scroll_host__scroll_host_interface.StickyPosition, ['toString']);
  src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.NONE = dart.const(new src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.new(0));
  src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.TOP = dart.const(new src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.new(1));
  src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.BOTTOM = dart.const(new src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.new(2));
  src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.values = dart.constList([src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.NONE, src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.TOP, src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.BOTTOM], src__utils__angular__scroll_host__scroll_host_interface.StickyPosition);
  src__utils__angular__scroll_host__scroll_host_interface.StickyController = class StickyController extends core.Object {
    get enableSmoothPushing() {
      return this[enableSmoothPushing];
    }
    set enableSmoothPushing(value) {
      this[enableSmoothPushing] = value;
    }
  };
  (src__utils__angular__scroll_host__scroll_host_interface.StickyController.new = function() {
    this[enableSmoothPushing] = null;
  }).prototype = src__utils__angular__scroll_host__scroll_host_interface.StickyController.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_interface.StickyController);
  const enableSmoothPushing = Symbol("StickyController.enableSmoothPushing");
  src__utils__angular__scroll_host__scroll_host_interface.StickyController[dart.implements] = () => [utils__disposer__disposer.Disposable];
  dart.setFieldSignature(src__utils__angular__scroll_host__scroll_host_interface.StickyController, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__scroll_host_interface.StickyController.__proto__),
    enableSmoothPushing: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__utils__angular__scroll_host__scroll_host_interface, {
    /*src__utils__angular__scroll_host__scroll_host_interface.stickyControllerZIndex*/get stickyControllerZIndex() {
      return 100;
    },
    set stickyControllerZIndex(_) {}
  });
  src__utils__angular__scroll_host__scroll_host_interface.PanController = class PanController extends core.Object {};
  (src__utils__angular__scroll_host__scroll_host_interface.PanController.new = function() {
  }).prototype = src__utils__angular__scroll_host__scroll_host_interface.PanController.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_interface.PanController);
  src__utils__angular__scroll_host__scroll_host_interface.PanController[dart.implements] = () => [utils__disposer__disposer.Disposable];
  src__utils__angular__scroll_host__scroll_host_interface.PanEvent = class PanEvent extends src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent {};
  (src__utils__angular__scroll_host__scroll_host_interface.PanEvent.new = function() {
  }).prototype = src__utils__angular__scroll_host__scroll_host_interface.PanEvent.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_interface.PanEvent);
  dart.trackLibraries("packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.ddc", {
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.dart": src__utils__angular__scroll_host__scroll_host_interface
  }, '{"version":3,"sourceRoot":"","sources":["scroll_host_interface.dart"],"names":[],"mappings":";;;;;;;;;;EAkBA;;;iCAgCoC;;;EAmCpC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiDO;;;;;;;;6BAAmB;EAC1B;;;;;;;;;MAGI,8EAAsB;YAAG;;;;;;EAU7B;;;;;EAkBA","file":"scroll_host_interface.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__scroll_host_interface: src__utils__angular__scroll_host__scroll_host_interface
  };
});

//# sourceMappingURL=scroll_host_interface.ddc.js.map
