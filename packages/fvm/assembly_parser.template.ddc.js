define(['dart_sdk', 'packages/fvm/virtual_machine.template'], function(dart_sdk, virtual_machine) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const virtual_machine$46template = virtual_machine.virtual_machine$46template;
  const _root = Object.create(null);
  const assembly_parser$46template = Object.create(_root);
  dart.defineLazy(assembly_parser$46template, {
    /*assembly_parser$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  assembly_parser$46template.initReflector = function() {
    if (dart.test(assembly_parser$46template._visited)) {
      return;
    }
    assembly_parser$46template._visited = true;
    virtual_machine$46template.initReflector();
  };
  dart.trackLibraries("packages/fvm/assembly_parser.template.ddc", {
    "package:fvm/assembly_parser.template.dart": assembly_parser$46template
  }, '{"version":3,"sourceRoot":"","sources":["assembly_parser.template.dart"],"names":[],"mappings":";;;;;;;;;MAWI,mCAAQ;YAAG;;;;;AAEb,kBAAI,mCAAQ,GAAE;AACZ;;AAEF,0CAAW;AAEX,IAAM,wCAAa;EACrB","file":"assembly_parser.template.ddc.js"}');
  // Exports:
  return {
    assembly_parser$46template: assembly_parser$46template
  };
});

//# sourceMappingURL=assembly_parser.template.ddc.js.map
