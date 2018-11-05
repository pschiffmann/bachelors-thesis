define(['dart_sdk', 'packages/angular_components/utils/angular/scroll_host/angular_2', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular_components/utils/angular/scroll_host/interface.template', 'packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl.template', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template'], function(dart_sdk, angular_2, dom_service, ng_zone, $interface, change_detection, angular, $interface$, pan_controller_impl, scroll_host_interface, properties, angular_2$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__angular__scroll_host__angular_2 = angular_2.utils__angular__scroll_host__angular_2;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__utils__angular__scroll_host__gestures = $interface.src__utils__angular__scroll_host__gestures;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__utils__angular__scroll_host__gestures$46template = $interface$.src__utils__angular__scroll_host__gestures$46template;
  const utils__angular__scroll_host__interface$46template = $interface$.utils__angular__scroll_host__interface$46template;
  const src__utils__angular__scroll_host__scroll_host_base$46template = pan_controller_impl.src__utils__angular__scroll_host__scroll_host_base$46template;
  const src__utils__angular__scroll_host__scroll_host_interface$46template = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__browser__dom_service__angular_2$46template = angular_2$.utils__browser__dom_service__angular_2$46template;
  const _root = Object.create(null);
  const utils__angular__scroll_host__angular_2$46template = Object.create(_root);
  let DomServiceAndNgZoneAndGestureListenerFactory__ToWindowScrollHost = () => (DomServiceAndNgZoneAndGestureListenerFactory__ToWindowScrollHost = dart.constFn(dart.fnType(utils__angular__scroll_host__angular_2.WindowScrollHost, [utils__browser__dom_service__dom_service.DomService, src__core__zone__ng_zone.NgZone, src__utils__angular__scroll_host__gestures.GestureListenerFactory, html.Window])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(utils__angular__scroll_host__angular_2$46template, {
    /*utils__angular__scroll_host__angular_2$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  utils__angular__scroll_host__angular_2$46template.initReflector = function() {
    if (dart.test(utils__angular__scroll_host__angular_2$46template._visited)) {
      return;
    }
    utils__angular__scroll_host__angular_2$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(utils__angular__scroll_host__angular_2.WindowScrollHost), dart.fn((p0, p1, p2, p3) => new utils__angular__scroll_host__angular_2.WindowScrollHost.new(p0, p1, p2, p3), DomServiceAndNgZoneAndGestureListenerFactory__ToWindowScrollHost()));
    src__di__reflector.registerDependencies(dart.wrapType(utils__angular__scroll_host__angular_2.WindowScrollHost), const$3 || (const$3 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(utils__browser__dom_service__dom_service.DomService)], core.Object)), const$0 || (const$0 = dart.constList([dart.wrapType(src__core__zone__ng_zone.NgZone)], core.Object)), const$1 || (const$1 = dart.constList([dart.wrapType(src__utils__angular__scroll_host__gestures.GestureListenerFactory)], core.Object)), const$2 || (const$2 = dart.constList([dart.wrapType(html.Window)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    src__utils__angular__scroll_host__gestures$46template.initReflector();
    src__utils__angular__scroll_host__scroll_host_base$46template.initReflector();
    src__utils__angular__scroll_host__scroll_host_interface$46template.initReflector();
    src__utils__angular__scroll_host__scroll_host_interface$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__angular__scroll_host__interface$46template.initReflector();
    utils__browser__dom_service__angular_2$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/utils/angular/scroll_host/angular_2.template.ddc", {
    "package:angular_components/utils/angular/scroll_host/angular_2.template.dart": utils__angular__scroll_host__angular_2$46template
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;MA+BI,0DAAQ;YAAG;;;;;;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAO,kCAAe,CAAC,sEAAgB,EAAE,SAAC,EAAiB,EAAE,EAAa,EAAE,EAA6B,EAAE,EAAa,KAAK,IAAI,2DAAgB,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;AAChK,IAAO,uCAAoB,CAAC,sEAAgB,EAAE,sCAC5C,oCAAW,kEAAU,kBACrB,sCAAW,8CAAM,kBACjB,sCAAW,gFAAsB,kBACjC,sCAAW,0BAAM;AAEnB,IAAM,gCAAa;AACnB,IAAM,mEAAa;AACnB,IAAM,2EAAa;AACnB,IAAM,gFAAa;AACnB,IAAM,gFAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,+DAAa;EACrB","file":"angular_2.template.ddc.js"}');
  // Exports:
  return {
    utils__angular__scroll_host__angular_2$46template: utils__angular__scroll_host__angular_2$46template
  };
});

//# sourceMappingURL=angular_2.template.ddc.js.map
