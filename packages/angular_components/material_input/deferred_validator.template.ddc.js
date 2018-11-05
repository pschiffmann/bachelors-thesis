define(['dart_sdk', 'packages/angular_components/material_input/deferred_validator', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, deferred_validator, change_detection, angular, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const material_input__deferred_validator$46template = Object.create(_root);
  let VoidToDeferredValidator = () => (VoidToDeferredValidator = dart.constFn(dart.fnType(material_input__deferred_validator.DeferredValidator, [])))();
  dart.defineLazy(material_input__deferred_validator$46template, {
    /*material_input__deferred_validator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_input__deferred_validator$46template.initReflector = function() {
    if (dart.test(material_input__deferred_validator$46template._visited)) {
      return;
    }
    material_input__deferred_validator$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(material_input__deferred_validator.DeferredValidator), dart.fn(() => new material_input__deferred_validator.DeferredValidator.new(), VoidToDeferredValidator()));
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_input/deferred_validator.template.ddc", {
    "package:angular_components/material_input/deferred_validator.template.dart": material_input__deferred_validator$46template
  }, '{"version":3,"sourceRoot":"","sources":["deferred_validator.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAaI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAO,kCAAe,CAAC,mEAAiB,EAAE,cAAM,IAAI,wDAAiB;AACrE,IAAM,gCAAa;AACnB,IAAM,sCAAa;EACrB","file":"deferred_validator.template.ddc.js"}');
  // Exports:
  return {
    material_input__deferred_validator$46template: material_input__deferred_validator$46template
  };
});

//# sourceMappingURL=deferred_validator.template.ddc.js.map
