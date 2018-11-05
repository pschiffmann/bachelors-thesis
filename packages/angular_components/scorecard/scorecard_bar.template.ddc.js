define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, angular, rtl_annotation, angular_2, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const annotations__rtl_annotation$46template = rtl_annotation.annotations__rtl_annotation$46template;
  const utils__browser__dom_service__angular_2$46template = angular_2.utils__browser__dom_service__angular_2$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const scorecard__scorecard_bar$46template = Object.create(_root);
  dart.defineLazy(scorecard__scorecard_bar$46template, {
    /*scorecard__scorecard_bar$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  scorecard__scorecard_bar$46template.initReflector = function() {
    if (dart.test(scorecard__scorecard_bar$46template._visited)) {
      return;
    }
    scorecard__scorecard_bar$46template._visited = true;
    angular$46template.initReflector();
    annotations__rtl_annotation$46template.initReflector();
    utils__browser__dom_service__angular_2$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/scorecard/scorecard_bar.template.ddc", {
    "package:angular_components/scorecard/scorecard_bar.template.dart": scorecard__scorecard_bar$46template
  }, '{"version":3,"sourceRoot":"","sources":["scorecard_bar.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAkBI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,kDAAa;EACrB","file":"scorecard_bar.template.ddc.js"}');
  // Exports:
  return {
    scorecard__scorecard_bar$46template: scorecard__scorecard_bar$46template
  };
});

//# sourceMappingURL=scorecard_bar.template.ddc.js.map
