define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const material_datepicker__config = Object.create(_root);
  material_datepicker__config.DatepickerConfig = class DatepickerConfig extends core.Object {
    get movingStartMaintainsLength() {
      return this[movingStartMaintainsLength$];
    }
    set movingStartMaintainsLength(value) {
      super.movingStartMaintainsLength = value;
    }
  };
  (material_datepicker__config.DatepickerConfig.new = function(opts) {
    let movingStartMaintainsLength = opts && 'movingStartMaintainsLength' in opts ? opts.movingStartMaintainsLength : true;
    this[movingStartMaintainsLength$] = movingStartMaintainsLength;
  }).prototype = material_datepicker__config.DatepickerConfig.prototype;
  dart.addTypeTests(material_datepicker__config.DatepickerConfig);
  const movingStartMaintainsLength$ = Symbol("DatepickerConfig.movingStartMaintainsLength");
  dart.setFieldSignature(material_datepicker__config.DatepickerConfig, () => ({
    __proto__: dart.getFields(material_datepicker__config.DatepickerConfig.__proto__),
    movingStartMaintainsLength: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/config.ddc", {
    "package:angular_components/material_datepicker/config.dart": material_datepicker__config
  }, '{"version":3,"sourceRoot":"","sources":["config.dart"],"names":[],"mappings":";;;;;;;;IAUa;;;;;;;;QAEY,8GAA6B;IAA7B,iCAA0B,GAA1B,0BAA0B;EAAS","file":"config.ddc.js"}');
  // Exports:
  return {
    material_datepicker__config: material_datepicker__config
  };
});

//# sourceMappingURL=config.ddc.js.map
