define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/angular/scroll_host/interface.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.template'], function(dart_sdk, angular, $interface, async, dom_service, disposer, events, feature_detector, scroll_host_interface) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const utils__angular__scroll_host__interface$46template = $interface.utils__angular__scroll_host__interface$46template;
  const src__utils__angular__scroll_host__gestures$46template = $interface.src__utils__angular__scroll_host__gestures$46template;
  const src__utils__angular__scroll_host__scroll_host_event_impl$46template = $interface.src__utils__angular__scroll_host__scroll_host_event_impl$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const src__utils__angular__scroll_host__scroll_host_interface$46template = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface$46template;
  const _root = Object.create(null);
  const src__utils__angular__scroll_host__pan_controller_impl$46template = Object.create(_root);
  const src__utils__angular__scroll_host__position_sticky_controller$46template = Object.create(_root);
  const src__utils__angular__scroll_host__sticky_controller_impl$46template = Object.create(_root);
  const src__utils__angular__scroll_host__scroll_host_base$46template = Object.create(_root);
  dart.defineLazy(src__utils__angular__scroll_host__pan_controller_impl$46template, {
    /*src__utils__angular__scroll_host__pan_controller_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__angular__scroll_host__pan_controller_impl$46template.initReflector = function() {
    if (dart.test(src__utils__angular__scroll_host__pan_controller_impl$46template._visited)) {
      return;
    }
    src__utils__angular__scroll_host__pan_controller_impl$46template._visited = true;
    angular$46template.initReflector();
    utils__angular__scroll_host__interface$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.defineLazy(src__utils__angular__scroll_host__position_sticky_controller$46template, {
    /*src__utils__angular__scroll_host__position_sticky_controller$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__angular__scroll_host__position_sticky_controller$46template.initReflector = function() {
    if (dart.test(src__utils__angular__scroll_host__position_sticky_controller$46template._visited)) {
      return;
    }
    src__utils__angular__scroll_host__position_sticky_controller$46template._visited = true;
    utils__angular__scroll_host__interface$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
  };
  dart.defineLazy(src__utils__angular__scroll_host__sticky_controller_impl$46template, {
    /*src__utils__angular__scroll_host__sticky_controller_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__angular__scroll_host__sticky_controller_impl$46template.initReflector = function() {
    if (dart.test(src__utils__angular__scroll_host__sticky_controller_impl$46template._visited)) {
      return;
    }
    src__utils__angular__scroll_host__sticky_controller_impl$46template._visited = true;
    utils__angular__scroll_host__interface$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.defineLazy(src__utils__angular__scroll_host__scroll_host_base$46template, {
    /*src__utils__angular__scroll_host__scroll_host_base$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__angular__scroll_host__scroll_host_base$46template.initReflector = function() {
    if (dart.test(src__utils__angular__scroll_host__scroll_host_base$46template._visited)) {
      return;
    }
    src__utils__angular__scroll_host__scroll_host_base$46template._visited = true;
    angular$46template.initReflector();
    src__utils__angular__scroll_host__gestures$46template.initReflector();
    src__utils__angular__scroll_host__pan_controller_impl$46template.initReflector();
    src__utils__angular__scroll_host__position_sticky_controller$46template.initReflector();
    src__utils__angular__scroll_host__scroll_host_event_impl$46template.initReflector();
    src__utils__angular__scroll_host__scroll_host_interface$46template.initReflector();
    src__utils__angular__scroll_host__sticky_controller_impl$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl.template.ddc", {
    "package:angular_components/src/utils/angular/scroll_host/pan_controller_impl.template.dart": src__utils__angular__scroll_host__pan_controller_impl$46template,
    "package:angular_components/src/utils/angular/scroll_host/position_sticky_controller.template.dart": src__utils__angular__scroll_host__position_sticky_controller$46template,
    "package:angular_components/src/utils/angular/scroll_host/sticky_controller_impl.template.dart": src__utils__angular__scroll_host__sticky_controller_impl$46template,
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_base.template.dart": src__utils__angular__scroll_host__scroll_host_base$46template
  }, '{"version":3,"sourceRoot":"","sources":["pan_controller_impl.template.dart","position_sticky_controller.template.dart","sticky_controller_impl.template.dart","scroll_host_base.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAoBI,yEAAQ;YAAG;;;;;AAEb,kBAAI,yEAAQ,GAAE;AACZ;;AAEF,gFAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,kDAAa;EACrB;;MCfI,gFAAQ;YAAG;;;;;AAEb,kBAAI,gFAAQ,GAAE;AACZ;;AAEF,uFAAW;AAEX,IAAM,+DAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,2EAAa;EACrB;;MCZI,4EAAQ;YAAG;;;;;AAEb,kBAAI,4EAAQ,GAAE;AACZ;;AAEF,mFAAW;AAEX,IAAM,+DAAa;AACnB,IAAM,iEAAa;EACrB;;MCUI,sEAAQ;YAAG;;;;;AAEb,kBAAI,sEAAQ,GAAE;AACZ;;AAEF,6EAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,mEAAa;AACnB,IAAM,8EAAa;AACnB,IAAM,qFAAa;AACnB,IAAM,iFAAa;AACnB,IAAM,gFAAa;AACnB,IAAM,iFAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,2EAAa;AACnB,IAAO,kDAAa;EACtB","file":"pan_controller_impl.template.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__pan_controller_impl$46template: src__utils__angular__scroll_host__pan_controller_impl$46template,
    src__utils__angular__scroll_host__position_sticky_controller$46template: src__utils__angular__scroll_host__position_sticky_controller$46template,
    src__utils__angular__scroll_host__sticky_controller_impl$46template: src__utils__angular__scroll_host__sticky_controller_impl$46template,
    src__utils__angular__scroll_host__scroll_host_base$46template: src__utils__angular__scroll_host__scroll_host_base$46template
  };
});

//# sourceMappingURL=pan_controller_impl.template.ddc.js.map
