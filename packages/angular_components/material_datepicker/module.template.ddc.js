define(['dart_sdk', 'packages/angular_components/material_datepicker/module', 'packages/angular_components/material_datepicker/model', 'packages/angular_components/material_datepicker/comparison', 'packages/angular_components/material_datepicker/range', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/model.template', 'packages/angular/angular.template', 'packages/angular_components/laminate/popup/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/time_zone_aware_clock.template'], function(dart_sdk, module, model, comparison, range, change_detection, date, model$, angular, module$, date$, time_zone_aware_clock) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__module = module.material_datepicker__module;
  const material_datepicker__model = model.material_datepicker__model;
  const material_datepicker__comparison = comparison.material_datepicker__comparison;
  const material_datepicker__range = range.material_datepicker__range;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__core__di__decorators = change_detection.src__core__di__decorators;
  const src__di__reflector = change_detection.src__di__reflector;
  const model__date__date = date.model__date__date;
  const material_datepicker__model$46template = model$.material_datepicker__model$46template;
  const angular$46template = angular.angular$46template;
  const laminate__popup__module$46template = module$.laminate__popup__module$46template;
  const model__date__date$46template = date$.model__date__date$46template;
  const model__date__time_zone_aware_clock$46template = time_zone_aware_clock.model__date__time_zone_aware_clock$46template;
  const _root = Object.create(null);
  const material_datepicker__module$46template = Object.create(_root);
  let DatepickerComparisonAndDatepickerDateRangeToDatepickerModel = () => (DatepickerComparisonAndDatepickerDateRangeToDatepickerModel = dart.constFn(dart.fnType(material_datepicker__model.DatepickerModel, [material_datepicker__comparison.DatepickerComparison, material_datepicker__range.DatepickerDateRange])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let DatepickerModelToDatepickerSelection = () => (DatepickerModelToDatepickerSelection = dart.constFn(dart.fnType(model__date__date.DatepickerSelection, [material_datepicker__model.DatepickerModel])))();
  dart.defineLazy(material_datepicker__module$46template, {
    /*material_datepicker__module$46template._visited*/get _visited() {
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
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  material_datepicker__module$46template.initReflector = function() {
    if (dart.test(material_datepicker__module$46template._visited)) {
      return;
    }
    material_datepicker__module$46template._visited = true;
    src__di__reflector.registerDependencies(dart.fn(material_datepicker__module.modelFactory, DatepickerComparisonAndDatepickerDateRangeToDatepickerModel()), const$7 || (const$7 = dart.constList([const$2 || (const$2 = dart.constList([const$0 || (const$0 = dart.const(new src__core__di__decorators.Inject.new(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("defaultDateComparison")))))), const$1 || (const$1 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object)), const$6 || (const$6 = dart.constList([const$4 || (const$4 = dart.const(new src__core__di__decorators.Inject.new(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("defaultDateRange")))))), const$5 || (const$5 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(dart.fn(material_datepicker__module.selectionFactory, DatepickerModelToDatepickerSelection()), const$9 || (const$9 = dart.constList([const$8 || (const$8 = dart.constList([dart.wrapType(material_datepicker__model.DatepickerModel)], core.Object))], ListOfObject())));
    material_datepicker__model$46template.initReflector();
    angular$46template.initReflector();
    laminate__popup__module$46template.initReflector();
    model__date__date$46template.initReflector();
    model__date__time_zone_aware_clock$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/module.template.ddc", {
    "package:angular_components/material_datepicker/module.template.dart": material_datepicker__module$46template
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;MAsBI,+CAAQ;YAAG;;;;;;;;;;;;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAO,uCAAoB,CAAC,gHAAY,EAAE,sCACxC,sCAAO,qCAAM,oCAAa,CAAC,mCAAM,2CAAwB,CAAC,+BAA2B,qCAAM,sCAAe,sBAC1G,sCAAO,qCAAM,oCAAa,CAAC,qCAAM,2CAAwB,CAAC,0BAAsB,qCAAM,sCAAe;AAEvG,IAAO,uCAAoB,CAAC,6FAAgB,EAAE,sCAC5C,sCAAW,yDAAe;AAE5B,IAAM,mDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,2DAAa;EACrB","file":"module.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__module$46template: material_datepicker__module$46template
  };
});

//# sourceMappingURL=module.template.ddc.js.map
