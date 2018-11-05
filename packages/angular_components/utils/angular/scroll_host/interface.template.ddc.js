define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.template', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/quiver/time', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template'], function(dart_sdk, disposer, scroll_host_interface, $interface, time, change_detection, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const src__utils__angular__scroll_host__scroll_host_interface$46template = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface$46template;
  const src__utils__angular__scroll_host__gestures = $interface.src__utils__angular__scroll_host__gestures;
  const time$ = time.time;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__utils__angular__scroll_host__scroll_observer$46template = Object.create(_root);
  const utils__angular__scroll_host__interface$46template = Object.create(_root);
  const src__utils__angular__scroll_host__scroll_host_event_impl$46template = Object.create(_root);
  const src__utils__angular__scroll_host__gestures$46template = Object.create(_root);
  let ClockToGestureListenerFactory = () => (ClockToGestureListenerFactory = dart.constFn(dart.fnType(src__utils__angular__scroll_host__gestures.GestureListenerFactory, [time$.Clock])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(src__utils__angular__scroll_host__scroll_observer$46template, {
    /*src__utils__angular__scroll_host__scroll_observer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__angular__scroll_host__scroll_observer$46template.initReflector = function() {
    if (dart.test(src__utils__angular__scroll_host__scroll_observer$46template._visited)) {
      return;
    }
    src__utils__angular__scroll_host__scroll_observer$46template._visited = true;
    utils__angular__scroll_host__interface$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.defineLazy(utils__angular__scroll_host__interface$46template, {
    /*utils__angular__scroll_host__interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__angular__scroll_host__interface$46template.initReflector = function() {
    if (dart.test(utils__angular__scroll_host__interface$46template._visited)) {
      return;
    }
    utils__angular__scroll_host__interface$46template._visited = true;
    src__utils__angular__scroll_host__gestures$46template.initReflector();
    src__utils__angular__scroll_host__scroll_host_interface$46template.initReflector();
    src__utils__angular__scroll_host__scroll_observer$46template.initReflector();
  };
  dart.defineLazy(src__utils__angular__scroll_host__scroll_host_event_impl$46template, {
    /*src__utils__angular__scroll_host__scroll_host_event_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__angular__scroll_host__scroll_host_event_impl$46template.initReflector = function() {
    if (dart.test(src__utils__angular__scroll_host__scroll_host_event_impl$46template._visited)) {
      return;
    }
    src__utils__angular__scroll_host__scroll_host_event_impl$46template._visited = true;
    utils__angular__scroll_host__interface$46template.initReflector();
  };
  dart.defineLazy(src__utils__angular__scroll_host__gestures$46template, {
    /*src__utils__angular__scroll_host__gestures$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__utils__angular__scroll_host__gestures$46template.initReflector = function() {
    if (dart.test(src__utils__angular__scroll_host__gestures$46template._visited)) {
      return;
    }
    src__utils__angular__scroll_host__gestures$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__utils__angular__scroll_host__gestures.GestureListenerFactory), dart.fn(p0 => new src__utils__angular__scroll_host__gestures.GestureListenerFactory.new(p0), ClockToGestureListenerFactory()));
    src__di__reflector.registerDependencies(dart.wrapType(src__utils__angular__scroll_host__gestures.GestureListenerFactory), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    src__utils__angular__scroll_host__scroll_host_event_impl$46template.initReflector();
    src__utils__angular__scroll_host__scroll_host_interface$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/utils/angular/scroll_host/interface.template.ddc", {
    "package:angular_components/src/utils/angular/scroll_host/scroll_observer.template.dart": src__utils__angular__scroll_host__scroll_observer$46template,
    "package:angular_components/utils/angular/scroll_host/interface.template.dart": utils__angular__scroll_host__interface$46template,
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_event_impl.template.dart": src__utils__angular__scroll_host__scroll_host_event_impl$46template,
    "package:angular_components/src/utils/angular/scroll_host/gestures.template.dart": src__utils__angular__scroll_host__gestures$46template
  }, '{"version":3,"sourceRoot":"","sources":["../../../src/utils/angular/scroll_host/scroll_observer.template.dart","interface.template.dart","../../../src/utils/angular/scroll_host/scroll_host_event_impl.template.dart","../../../src/utils/angular/scroll_host/gestures.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAcI,qEAAQ;YAAG;;;;;AAEb,kBAAI,qEAAQ,GAAE;AACZ;;AAEF,4EAAW;AAEX,IAAM,+DAAa;AACnB,IAAM,kDAAa;EACrB;;MCZI,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAM,mEAAa;AACnB,IAAM,gFAAa;AACnB,IAAM,0EAAa;EACrB;;MCXI,4EAAQ;YAAG;;;;;AAEb,kBAAI,4EAAQ,GAAE;AACZ;;AAEF,mFAAW;AAEX,IAAM,+DAAa;EACrB;;MCII,8DAAQ;YAAG;;;;;;;AAEb,kBAAI,8DAAQ,GAAE;AACZ;;AAEF,qEAAW;AAEX,IAAO,kCAAe,CAAC,gFAAsB,EAAE,QAAC,EAAY,IAAK,IAAI,qEAAsB,CAAC,EAAE;AAC9F,IAAO,uCAAoB,CAAC,gFAAsB,EAAE,sCAClD,oCAAW,0BAAK;AAElB,IAAM,gCAAa;AACnB,IAAM,iFAAa;AACnB,IAAM,gFAAa;AACnB,IAAM,kDAAa;EACrB","file":"interface.template.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__scroll_observer$46template: src__utils__angular__scroll_host__scroll_observer$46template,
    utils__angular__scroll_host__interface$46template: utils__angular__scroll_host__interface$46template,
    src__utils__angular__scroll_host__scroll_host_event_impl$46template: src__utils__angular__scroll_host__scroll_host_event_impl$46template,
    src__utils__angular__scroll_host__gestures$46template: src__utils__angular__scroll_host__gestures$46template
  };
});

//# sourceMappingURL=interface.template.ddc.js.map
