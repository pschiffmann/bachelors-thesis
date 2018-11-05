define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/laminate/portal/portal.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, angular, portal, async_action, properties) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const laminate__portal__portal$46template = portal.laminate__portal__portal$46template;
  const model__action__async_action$46template = async_action.model__action__async_action$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const _root = Object.create(null);
  const material_stepper__material_step$46template = Object.create(_root);
  dart.defineLazy(material_stepper__material_step$46template, {
    /*material_stepper__material_step$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_stepper__material_step$46template.initReflector = function() {
    if (dart.test(material_stepper__material_step$46template._visited)) {
      return;
    }
    material_stepper__material_step$46template._visited = true;
    angular$46template.initReflector();
    laminate__portal__portal$46template.initReflector();
    model__action__async_action$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_stepper/material_step.template.ddc", {
    "package:angular_components/material_stepper/material_step.template.dart": material_stepper__material_step$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_step.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAiBI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,+DAAa;EACrB","file":"material_step.template.ddc.js"}');
  // Exports:
  return {
    material_stepper__material_step$46template: material_stepper__material_step$46template
  };
});

//# sourceMappingURL=material_step.template.ddc.js.map
