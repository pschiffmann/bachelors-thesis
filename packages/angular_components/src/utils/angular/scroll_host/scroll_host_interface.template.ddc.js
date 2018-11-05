define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const src__utils__angular__scroll_host__scroll_host_interface$46template = Object.create(_root);
  dart.defineLazy(src__utils__angular__scroll_host__scroll_host_interface$46template, {
    /*src__utils__angular__scroll_host__scroll_host_interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__angular__scroll_host__scroll_host_interface$46template.initReflector = function() {
    if (dart.test(src__utils__angular__scroll_host__scroll_host_interface$46template._visited)) {
      return;
    }
    src__utils__angular__scroll_host__scroll_host_interface$46template._visited = true;
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.template.ddc", {
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.template.dart": src__utils__angular__scroll_host__scroll_host_interface$46template
  }, '{"version":3,"sourceRoot":"","sources":["scroll_host_interface.template.dart"],"names":[],"mappings":";;;;;;;;;MAYI,2EAAQ;YAAG;;;;;AAEb,kBAAI,2EAAQ,GAAE;AACZ;;AAEF,kFAAW;AAEX,IAAM,kDAAa;EACrB","file":"scroll_host_interface.template.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__scroll_host_interface$46template: src__utils__angular__scroll_host__scroll_host_interface$46template
  };
});

//# sourceMappingURL=scroll_host_interface.template.ddc.js.map
