define(['dart_sdk', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, module, tooltip_controller, disposer, change_detection, angular, tooltip_controller$, disposer$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tooltip__module = module.material_tooltip__module;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__di__decorators = change_detection.src__core__di__decorators;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__material_tooltip__tooltip_controller$46template = tooltip_controller$.src__material_tooltip__tooltip_controller$46template;
  const utils__disposer__disposer$46template = disposer$.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_tooltip__module$46template = Object.create(_root);
  let TooltipControllerAndDisposerToTooltipController = () => (TooltipControllerAndDisposerToTooltipController = dart.constFn(dart.fnType(src__material_tooltip__tooltip_controller.TooltipController, [src__material_tooltip__tooltip_controller.TooltipController, utils__disposer__disposer.Disposer])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(material_tooltip__module$46template, {
    /*material_tooltip__module$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  material_tooltip__module$46template.initReflector = function() {
    if (dart.test(material_tooltip__module$46template._visited)) {
      return;
    }
    material_tooltip__module$46template._visited = true;
    src__di__reflector.registerDependencies(dart.fn(material_tooltip__module.createTooltipController, TooltipControllerAndDisposerToTooltipController()), const$4 || (const$4 = dart.constList([const$1 || (const$1 = dart.constList([dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), const$ || (const$ = dart.const(new src__core__di__decorators.SkipSelf.new())), const$0 || (const$0 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object)), const$3 || (const$3 = dart.constList([dart.wrapType(utils__disposer__disposer.Disposer), const$2 || (const$2 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_tooltip/module.template.ddc", {
    "package:angular_components/material_tooltip/module.template.dart": material_tooltip__module$46template
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAiBI,4CAAQ;YAAG;;;;;;;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAO,uCAAoB,CAAC,4GAAuB,EAAE,sCACnD,sCAAW,0EAAiB,EAAE,mCAAM,sCAAe,MAAI,qCAAM,sCAAe,sBAC5E,sCAAW,iDAAQ,EAAE,qCAAM,sCAAe;AAE5C,IAAM,gCAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,kDAAa;EACrB","file":"module.template.ddc.js"}');
  // Exports:
  return {
    material_tooltip__module$46template: material_tooltip__module$46template
  };
});

//# sourceMappingURL=module.template.ddc.js.map
