define(['dart_sdk', 'packages/angular_components/material_datepicker/range.template'], function(dart_sdk, range) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const _root = Object.create(null);
  const material_datepicker__comparison_option$46template = Object.create(_root);
  dart.defineLazy(material_datepicker__comparison_option$46template, {
    /*material_datepicker__comparison_option$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__comparison_option$46template.initReflector = function() {
    if (dart.test(material_datepicker__comparison_option$46template._visited)) {
      return;
    }
    material_datepicker__comparison_option$46template._visited = true;
    material_datepicker__range$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/comparison_option.template.ddc", {
    "package:angular_components/material_datepicker/comparison_option.template.dart": material_datepicker__comparison_option$46template
  }, '{"version":3,"sourceRoot":"","sources":["comparison_option.template.dart"],"names":[],"mappings":";;;;;;;;;MAWI,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAM,mDAAa;EACrB","file":"comparison_option.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__comparison_option$46template: material_datepicker__comparison_option$46template
  };
});

//# sourceMappingURL=comparison_option.template.ddc.js.map
