define(['dart_sdk', 'packages/angular_components/src/material_tooltip/icon_tooltip.scss.css.shim', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/material_tooltip/tooltip_controller.template'], function(dart_sdk, icon_tooltip$46scss$46css, icon_tooltip, tooltip_controller) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tooltip__icon_tooltip$46template = icon_tooltip$46scss$46css.src__material_tooltip__icon_tooltip$46template;
  const src__material_tooltip__paper_tooltip$46template = icon_tooltip$46scss$46css.src__material_tooltip__paper_tooltip$46template;
  const src__material_tooltip__tooltip$46template = icon_tooltip$46scss$46css.src__material_tooltip__tooltip$46template;
  const src__material_tooltip__ink_tooltip$46template = icon_tooltip.src__material_tooltip__ink_tooltip$46template;
  const src__material_tooltip__tooltip_source$46template = icon_tooltip.src__material_tooltip__tooltip_source$46template;
  const src__material_tooltip__tooltip_target$46template = icon_tooltip.src__material_tooltip__tooltip_target$46template;
  const src__material_tooltip__tooltip_controller$46template = tooltip_controller.src__material_tooltip__tooltip_controller$46template;
  const _root = Object.create(null);
  const material_tooltip__material_tooltip$46template = Object.create(_root);
  dart.defineLazy(material_tooltip__material_tooltip$46template, {
    /*material_tooltip__material_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tooltip__material_tooltip$46template.initReflector = function() {
    if (dart.test(material_tooltip__material_tooltip$46template._visited)) {
      return;
    }
    material_tooltip__material_tooltip$46template._visited = true;
    src__material_tooltip__icon_tooltip$46template.initReflector();
    src__material_tooltip__ink_tooltip$46template.initReflector();
    src__material_tooltip__paper_tooltip$46template.initReflector();
    src__material_tooltip__tooltip$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    src__material_tooltip__tooltip_source$46template.initReflector();
    src__material_tooltip__tooltip_target$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_tooltip/material_tooltip.template.ddc", {
    "package:angular_components/material_tooltip/material_tooltip.template.dart": material_tooltip__material_tooltip$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tooltip.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAeI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,4DAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,8DAAa;EACrB","file":"material_tooltip.template.ddc.js"}');
  // Exports:
  return {
    material_tooltip__material_tooltip$46template: material_tooltip__material_tooltip$46template
  };
});

//# sourceMappingURL=material_tooltip.template.ddc.js.map
