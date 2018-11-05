define(['dart_sdk', 'packages/angular_components/material_datepicker/comparison_option', 'packages/angular_components/material_datepicker/range', 'packages/angular_components/model/date/date'], function(dart_sdk, comparison_option, range, date) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__comparison_option = comparison_option.material_datepicker__comparison_option;
  const material_datepicker__range = range.material_datepicker__range;
  const model__date__date = date.model__date__date;
  const _root = Object.create(null);
  const material_datepicker__comparison = Object.create(_root);
  material_datepicker__comparison.DatepickerComparison = class DatepickerComparison extends core.Object {
    get range() {
      return this[range$];
    }
    set range(value) {
      super.range = value;
    }
    get comparison() {
      return this[comparison$];
    }
    set comparison(value) {
      super.comparison = value;
    }
    get isComparisonEnabled() {
      return this.comparison != null;
    }
    comparesToPreviousPeriod() {
      return this.comparesTo(material_datepicker__comparison_option.ComparisonOption.previousPeriod);
    }
    comparesToSamePeriodLastYear() {
      return this.comparesTo(material_datepicker__comparison_option.ComparisonOption.samePeriodLastYear);
    }
    comparesTo(option) {
      return this.comparison != null && option != null && this.range != null && dart.equals(this.comparison.unclamped(), option.computeComparisonRange(this.range.unclamped()));
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__comparison.DatepickerComparison.is(o) && dart.test(material_datepicker__range.rangeEqual(this.range, o.range)) && dart.test(material_datepicker__range.rangeEqual(this.comparison, o.comparison));
    }
    get hashCode() {
      return dart.test(this.isComparisonEnabled) ? (dart.notNull(material_datepicker__range.rangeHash(this.range)) ^ dart.notNull(material_datepicker__range.rangeHash(this.comparison))) >>> 0 : material_datepicker__range.rangeHash(this.range);
    }
    toString() {
      return "DatepickerComparison -- " + dart.str(this.range) + " / " + dart.str(this.comparison);
    }
  };
  (material_datepicker__comparison.DatepickerComparison.new = function(range, option) {
    material_datepicker__comparison.DatepickerComparison.custom.call(this, range, option.computeComparisonRange(range));
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  (material_datepicker__comparison.DatepickerComparison.noComparison = function(range) {
    material_datepicker__comparison.DatepickerComparison.custom.call(this, range, null);
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  (material_datepicker__comparison.DatepickerComparison.previousPeriod = function(range) {
    material_datepicker__comparison.DatepickerComparison.new.call(this, range, material_datepicker__comparison_option.ComparisonOption.previousPeriod);
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  (material_datepicker__comparison.DatepickerComparison.samePeriodLastYear = function(range) {
    material_datepicker__comparison.DatepickerComparison.new.call(this, range, material_datepicker__comparison_option.ComparisonOption.samePeriodLastYear);
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  (material_datepicker__comparison.DatepickerComparison.reclamp = function(orig, min, max) {
    material_datepicker__comparison.DatepickerComparison.custom.call(this, (() => {
      let t = orig == null ? null : orig.range;
      let t$ = t == null ? null : t.unclamped();
      return t$ == null ? null : t$.clamp({min: min, max: max});
    })(), (() => {
      let t = orig == null ? null : orig.comparison;
      let t$ = t == null ? null : t.unclamped();
      return t$ == null ? null : t$.clamp({min: min, max: max});
    })());
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  (material_datepicker__comparison.DatepickerComparison.custom = function(range, comparison) {
    this[range$] = range;
    this[comparison$] = comparison;
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  dart.addTypeTests(material_datepicker__comparison.DatepickerComparison);
  const range$ = Symbol("DatepickerComparison.range");
  const comparison$ = Symbol("DatepickerComparison.comparison");
  material_datepicker__comparison.DatepickerComparison[dart.implements] = () => [model__date__date.DateRangeComparison];
  dart.setMethodSignature(material_datepicker__comparison.DatepickerComparison, () => ({
    __proto__: dart.getMethods(material_datepicker__comparison.DatepickerComparison.__proto__),
    comparesToPreviousPeriod: dart.fnType(core.bool, []),
    comparesToSamePeriodLastYear: dart.fnType(core.bool, []),
    comparesTo: dart.fnType(core.bool, [material_datepicker__comparison_option.ComparisonOption])
  }));
  dart.setGetterSignature(material_datepicker__comparison.DatepickerComparison, () => ({
    __proto__: dart.getGetters(material_datepicker__comparison.DatepickerComparison.__proto__),
    isComparisonEnabled: core.bool
  }));
  dart.setFieldSignature(material_datepicker__comparison.DatepickerComparison, () => ({
    __proto__: dart.getFields(material_datepicker__comparison.DatepickerComparison.__proto__),
    range: dart.finalFieldType(material_datepicker__range.DatepickerDateRange),
    comparison: dart.finalFieldType(material_datepicker__range.DatepickerDateRange)
  }));
  dart.defineExtensionMethods(material_datepicker__comparison.DatepickerComparison, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__comparison.DatepickerComparison, ['hashCode']);
  dart.trackLibraries("packages/angular_components/material_datepicker/comparison.ddc", {
    "package:angular_components/material_datepicker/comparison.dart": material_datepicker__comparison
  }, '{"version":3,"sourceRoot":"","sources":["comparison.dart"],"names":[],"mappings":";;;;;;;;;;;IAY4B;;;;;;IAGA;;;;;;;YAsBM,gBAAU,IAAI;IAAI;;YAI9C,gBAAU,CAAC,uDAAgB,eAAe;IAAC;;YAI3C,gBAAU,CAAC,uDAAgB,mBAAmB;IAAC;eAGnC,MAAuB;YACnC,AAEc,gBAFJ,IAAI,QACd,MAAM,IAAI,QACV,UAAK,IAAI,oBACT,eAAU,UAAU,IAChB,MAAM,uBAAuB,CAAC,UAAK,UAAU;IAAG;YAEvC,CAAC;UAAD,CAAC;YAEa,yDAD3B,CAAC,eACD,qCAAU,CAAC,UAAK,EAAE,CAAC,MAAM,gBACzB,qCAAU,CAAC,eAAU,EAAE,CAAC,WAAW;IAAC;;uBACpB,wBAAmB,IACjC,CAAiB,aAAjB,oCAAS,CAAC,UAAK,kBAAI,oCAAS,CAAC,eAAU,YACvC,oCAAS,CAAC,UAAK;IAAC;;YACD,uCAA0B,UAAK,qBAAI,eAAU;IAAC;;uEA7C9C,KAAyB,EAAE,MAAuB;2EACrD,KAAK,EAAE,MAAM,uBAAuB,CAAC,KAAK;EAAE;gFAE5B,KAAyB;2EACzC,KAAK,EAAE;EAAK;kFAEM,KAAyB;wEAClD,KAAK,EAAE,uDAAgB,eAAe;EAAC;sFAEV,KAAyB;wEACtD,KAAK,EAAE,uDAAgB,mBAAmB;EAAC;2EAIzB,IAAyB,EAAE,GAAQ,EAAE,GAAQ;;cACxD,IAAI,kBAAJ,IAAI,MAAO;;gDAA0B,GAAG,OAAO,GAAG;;cAC1D,IAAI,kBAAJ,IAAI,WAAY;;gDAA0B,GAAG,OAAO,GAAG;;EAAE;0EAEvC,KAAU,EAAE,UAAe;IAAtB,YAAK,GAAL,KAAK;IAAO,iBAAU,GAAV,UAAU;EAAC","file":"comparison.ddc.js"}');
  // Exports:
  return {
    material_datepicker__comparison: material_datepicker__comparison
  };
});

//# sourceMappingURL=comparison.ddc.js.map
