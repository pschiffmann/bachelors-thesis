define(['dart_sdk', 'packages/angular_components/material_datepicker/range', 'packages/intl/intl'], function(dart_sdk, range, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__range = range.material_datepicker__range;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const material_datepicker__comparison_option = Object.create(_root);
  const $hashCode = dartx.hashCode;
  let JSArrayOfComparisonOption = () => (JSArrayOfComparisonOption = dart.constFn(_interceptors.JSArray$(material_datepicker__comparison_option.ComparisonOption)))();
  let DatepickerDateRangeToDatepickerDateRange = () => (DatepickerDateRangeToDatepickerDateRange = dart.constFn(dart.fnType(material_datepicker__range.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange])))();
  let DatepickerDateRangeToNull = () => (DatepickerDateRangeToNull = dart.constFn(dart.fnType(core.Null, [material_datepicker__range.DatepickerDateRange])))();
  material_datepicker__comparison_option.ComparisonFn = dart.typedef('ComparisonFn', () => dart.fnType(material_datepicker__range.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange]));
  dart.defineLazy(material_datepicker__comparison_option, {
    /*material_datepicker__comparison_option.defaultComparisonOptions*/get defaultComparisonOptions() {
      return JSArrayOfComparisonOption().of([material_datepicker__comparison_option.ComparisonOption.previousPeriod, material_datepicker__comparison_option.ComparisonOption.samePeriodLastYear, material_datepicker__comparison_option.ComparisonOption.custom]);
    },
    set defaultComparisonOptions(_) {}
  });
  material_datepicker__comparison_option.ComparisonOption = class ComparisonOption extends core.Object {
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      super.displayName = value;
    }
    get computeComparisonRange() {
      return this[computeComparisonRange$];
    }
    set computeComparisonRange(value) {
      super.computeComparisonRange = value;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__comparison_option.ComparisonOption.is(o) && this.displayName == o.displayName && dart.equals(this.computeComparisonRange, o.computeComparisonRange);
    }
    get hashCode() {
      return (dart.hashCode(this.displayName) ^ dart.notNull(dart.hashCode(this.computeComparisonRange))) >>> 0;
    }
    toString() {
      return this.displayName;
    }
  };
  (material_datepicker__comparison_option.ComparisonOption.new = function(displayName, computeComparisonRange) {
    this[displayName$] = displayName;
    this[computeComparisonRange$] = computeComparisonRange;
  }).prototype = material_datepicker__comparison_option.ComparisonOption.prototype;
  dart.addTypeTests(material_datepicker__comparison_option.ComparisonOption);
  const displayName$ = Symbol("ComparisonOption.displayName");
  const computeComparisonRange$ = Symbol("ComparisonOption.computeComparisonRange");
  dart.setFieldSignature(material_datepicker__comparison_option.ComparisonOption, () => ({
    __proto__: dart.getFields(material_datepicker__comparison_option.ComparisonOption.__proto__),
    displayName: dart.finalFieldType(core.String),
    computeComparisonRange: dart.finalFieldType(DatepickerDateRangeToDatepickerDateRange())
  }));
  dart.defineExtensionMethods(material_datepicker__comparison_option.ComparisonOption, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__comparison_option.ComparisonOption, ['hashCode']);
  dart.defineLazy(material_datepicker__comparison_option.ComparisonOption, {
    /*material_datepicker__comparison_option.ComparisonOption.previousPeriod*/get previousPeriod() {
      return new material_datepicker__comparison_option.ComparisonOption.new(material_datepicker__comparison_option.ComparisonOption._prevPeriodMsg, dart.fn(range => {
        let prev = range.prev;
        if (prev != null && !dart.test(prev.isPredefined)) {
          return material_datepicker__range.DatepickerDateRange.new(material_datepicker__comparison_option.ComparisonOption._prevPeriodMsg, prev.start, prev.end);
        }
        return prev;
      }, DatepickerDateRangeToDatepickerDateRange()));
    },
    /*material_datepicker__comparison_option.ComparisonOption.samePeriodLastYear*/get samePeriodLastYear() {
      return new material_datepicker__comparison_option.ComparisonOption.new(material_datepicker__comparison_option.ComparisonOption._previousYearMsg, dart.fn(range => material_datepicker__range.DatepickerDateRange.new(material_datepicker__comparison_option.ComparisonOption._previousYearMsg, range.start.add({years: -1}), range.end.add({years: -1})), DatepickerDateRangeToDatepickerDateRange()));
    },
    /*material_datepicker__comparison_option.ComparisonOption.custom*/get custom() {
      return new material_datepicker__comparison_option.ComparisonOption.new(material_datepicker__comparison_option.ComparisonOption._customMsg, dart.fn(range => null, DatepickerDateRangeToNull()));
    },
    /*material_datepicker__comparison_option.ComparisonOption._prevPeriodMsg*/get _prevPeriodMsg() {
      return intl$.Intl.message("Previous period", {name: "_prevPeriodMsg", meaning: "An option name, the date range before the selected date " + "range", desc: "Setting to compare the selected date range with the previous " + "period. E.g. if the selected range were May, this would be April" + "."});
    },
    /*material_datepicker__comparison_option.ComparisonOption._previousYearMsg*/get _previousYearMsg() {
      return intl$.Intl.message("Previous year", {name: "_previousYearMsg", meaning: "An option name, the same date range in the last year", desc: "Setting to compare the selected date range with the same range " + "last year. E.g. if the selected range were May 2015, this would" + " be May 2014."});
    },
    /*material_datepicker__comparison_option.ComparisonOption._customMsg*/get _customMsg() {
      return intl$.Intl.message("Custom", {name: "_customMsg", meaning: "An option name, user could enter the date range they want", desc: "Setting to compare the selected date range with another " + "arbitrary user-selected date range."});
    }
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/comparison_option.ddc", {
    "package:angular_components/material_datepicker/comparison_option.dart": material_datepicker__comparison_option
  }, '{"version":3,"sourceRoot":"","sources":["comparison_option.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAauB,+DAAwB;YAAG,iCAChD,uDAAgB,eAAe,EAC/B,uDAAgB,mBAAmB,EACnC,uDAAgB,OAAO;;;;;IAMV;;;;;;IAGM;;;;;;YAyCF,CAAC;UAAD,CAAC;YAEoB,4DADlC,CAAC,KACD,gBAAgB,IAAI,CAAC,YAAY,gBACjC,2BAA2B,EAAI,CAAC,uBAAuB;;;YAEvC,EAAqB,cAArB,gBAAW,+BAAY,2BAAsB;IAAS;;YAErD,iBAAW;;;0EA9CT,WAAgB,EAAE,sBAA2B;IAAxC,kBAAW,GAAX,WAAW;IAAO,6BAAsB,GAAtB,sBAAsB;EAAC;;;;;;;;;;;;MAEvC,sEAAc;iBACxC,2DAAgB,CAAC,sEAAc,EAAE,QAAC,KAAyB;AAC7D,YAAI,OAAO,KAAK,KAAK;AACrB,YAAI,IAAI,IAAI,mBAAS,IAAI,aAAa,GAAE;AACtC,gBAAO,mDAAmB,CAAC,sEAAc,EAAE,IAAI,MAAM,EAAE,IAAI,IAAI;;AAEjE,cAAO,KAAI;;;MAGiB,0EAAkB;iBAAG,2DAAgB,CAC/D,wEAAgB,EAChB,QAAC,KAAyB,IAAK,kDAAmB,CAAC,wEAAgB,EAC/D,KAAK,MAAM,IAAI,SAAQ,CAAC,KAAI,KAAK,IAAI,IAAI,SAAQ,CAAC;;MAE5B,8DAAM;iBAChC,2DAAgB,CAAC,kEAAU,EAAE,QAAC,KAAyB,IAAK;;MAE5C,sEAAc;YAAG,WAAI,QAAQ,CAAC,0BACxC,2BACG,6DACL,eACE,kEACF,qEACA;;MACY,wEAAgB;YAAG,WAAI,QAAQ,CAAC,wBAC1C,6BACG,8DACH,oEACF,oEACA;;MAEY,kEAAU;YAAG,WAAI,QAAQ,CAAC,iBACpC,uBACG,mEACH,6DACF","file":"comparison_option.ddc.js"}');
  // Exports:
  return {
    material_datepicker__comparison_option: material_datepicker__comparison_option
  };
});

//# sourceMappingURL=comparison_option.ddc.js.map
