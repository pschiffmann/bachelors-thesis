define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/bootstrap/run.template'], function(dart_sdk, angular, change_detection, modules, run) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const src__runtime$46template = change_detection.src__runtime$46template;
  const src__core__zone__ng_zone$46template = change_detection.src__core__zone__ng_zone$46template;
  const src__di__injector__injector$46template = change_detection.src__di__injector__injector$46template;
  const src__bootstrap__modules$46template = modules.src__bootstrap__modules$46template;
  const src__core__linker__app_view$46template = modules.src__core__linker__app_view$46template;
  const src__core__linker__component_resolver$46template = modules.src__core__linker__component_resolver$46template;
  const src__bootstrap__run$46template = run.src__bootstrap__run$46template;
  const _root = Object.create(null);
  const experimental$46template = Object.create(_root);
  dart.defineLazy(experimental$46template, {
    /*experimental$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  experimental$46template.initReflector = function() {
    if (dart.test(experimental$46template._visited)) {
      return;
    }
    experimental$46template._visited = true;
    angular$46template.initReflector();
    src__runtime$46template.initReflector();
    src__bootstrap__modules$46template.initReflector();
    src__bootstrap__run$46template.initReflector();
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__component_resolver$46template.initReflector();
    src__core__zone__ng_zone$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/experimental.template.ddc", {
    "package:angular/experimental.template.dart": experimental$46template
  }, '{"version":3,"sourceRoot":"","sources":["experimental.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAwBI,gCAAQ;YAAG;;;;;AAEb,kBAAI,gCAAQ,GAAE;AACZ;;AAEF,uCAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,qCAAa;EACrB","file":"experimental.template.ddc.js"}');
  // Exports:
  return {
    experimental$46template: experimental$46template
  };
});

//# sourceMappingURL=experimental.template.ddc.js.map
