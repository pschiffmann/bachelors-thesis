define(['dart_sdk', 'packages/protobuf/protobuf', 'packages/angular_components/material_datepicker/proto/date.pb'], function(dart_sdk, protobuf, date) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf$ = protobuf.protobuf;
  const material_datepicker__proto__date$46pb = date.material_datepicker__proto__date$46pb;
  const _root = Object.create(null);
  const material_datepicker__proto__date_range$46pb = Object.create(_root);
  let GeneratedMessageTovoid = () => (GeneratedMessageTovoid = dart.constFn(dart.fnType(dart.void, [protobuf$.GeneratedMessage])))();
  let PbListOfDatepickerDateRange = () => (PbListOfDatepickerDateRange = dart.constFn(protobuf$.PbList$(material_datepicker__proto__date_range$46pb.DatepickerDateRange)))();
  let VoidToDateRange = () => (VoidToDateRange = dart.constFn(dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, [])))();
  let PbListOfDateRange = () => (PbListOfDateRange = dart.constFn(protobuf$.PbList$(material_datepicker__proto__date_range$46pb.DateRange)))();
  let VoidToDate = () => (VoidToDate = dart.constFn(dart.fnType(material_datepicker__proto__date$46pb.Date, [])))();
  material_datepicker__proto__date_range$46pb.DatepickerDateRange = class DatepickerDateRange extends protobuf$.GeneratedMessage {
    clone() {
      let _ = new material_datepicker__proto__date_range$46pb.DatepickerDateRange.new();
      _.mergeFromMessage(this);
      return _;
    }
    copyWith(updates) {
      return material_datepicker__proto__date_range$46pb.DatepickerDateRange._check(super.copyWith(dart.fn(message => updates(material_datepicker__proto__date_range$46pb.DatepickerDateRange.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return material_datepicker__proto__date_range$46pb.DatepickerDateRange._i;
    }
    static create() {
      return new material_datepicker__proto__date_range$46pb.DatepickerDateRange.new();
    }
    static createRepeated() {
      return new (PbListOfDatepickerDateRange()).new();
    }
    static getDefault() {
      let t = material_datepicker__proto__date_range$46pb.DatepickerDateRange._defaultInstance;
      return t == null ? material_datepicker__proto__date_range$46pb.DatepickerDateRange._defaultInstance = (() => {
        let _ = material_datepicker__proto__date_range$46pb.DatepickerDateRange.create();
        _.freeze();
        return _;
      })() : t;
    }
    static $checkItem(v) {
      if (!material_datepicker__proto__date_range$46pb.DatepickerDateRange.is(v)) protobuf$.checkItemFailed(v, material_datepicker__proto__date_range$46pb.DatepickerDateRange._i.messageName);
    }
    get dateRange() {
      return this.$_getN(material_datepicker__proto__date_range$46pb.DateRange, 0);
    }
    set dateRange(v) {
      this.setField(1, v);
    }
    hasDateRange() {
      return this.$_has(0);
    }
    clearDateRange() {
      return this.clearField(1);
    }
    get daysAgo() {
      return this.$_get(core.int, 1, 0);
    }
    set daysAgo(v) {
      this.$_setSignedInt32(1, v);
    }
    hasDaysAgo() {
      return this.$_has(1);
    }
    clearDaysAgo() {
      return this.clearField(2);
    }
    get weeksAgo() {
      return this.$_get(core.int, 2, 0);
    }
    set weeksAgo(v) {
      this.$_setSignedInt32(2, v);
    }
    hasWeeksAgo() {
      return this.$_has(2);
    }
    clearWeeksAgo() {
      return this.clearField(3);
    }
    get monthsAgo() {
      return this.$_get(core.int, 3, 0);
    }
    set monthsAgo(v) {
      this.$_setSignedInt32(3, v);
    }
    hasMonthsAgo() {
      return this.$_has(3);
    }
    clearMonthsAgo() {
      return this.clearField(4);
    }
    get yearsAgo() {
      return this.$_get(core.int, 4, 0);
    }
    set yearsAgo(v) {
      this.$_setSignedInt32(4, v);
    }
    hasYearsAgo() {
      return this.$_has(4);
    }
    clearYearsAgo() {
      return this.clearField(5);
    }
    get lastNDays() {
      return this.$_get(core.int, 5, 0);
    }
    set lastNDays(v) {
      this.$_setSignedInt32(5, v);
    }
    hasLastNDays() {
      return this.$_has(5);
    }
    clearLastNDays() {
      return this.clearField(6);
    }
    get allTimeRange() {
      return this.$_get(core.bool, 6, false);
    }
    set allTimeRange(v) {
      this.$_setBool(6, v);
    }
    hasAllTimeRange() {
      return this.$_has(6);
    }
    clearAllTimeRange() {
      return this.clearField(7);
    }
    get broadcastMonthsAgo() {
      return this.$_get(core.int, 7, 0);
    }
    set broadcastMonthsAgo(v) {
      this.$_setSignedInt32(7, v);
    }
    hasBroadcastMonthsAgo() {
      return this.$_has(7);
    }
    clearBroadcastMonthsAgo() {
      return this.clearField(8);
    }
    get lastNDaysToToday() {
      return this.$_get(core.int, 8, 0);
    }
    set lastNDaysToToday(v) {
      this.$_setSignedInt32(8, v);
    }
    hasLastNDaysToToday() {
      return this.$_has(8);
    }
    clearLastNDaysToToday() {
      return this.clearField(9);
    }
    get quartersAgo() {
      return this.$_get(core.int, 9, 0);
    }
    set quartersAgo(v) {
      this.$_setSignedInt32(9, v);
    }
    hasQuartersAgo() {
      return this.$_has(9);
    }
    clearQuartersAgo() {
      return this.clearField(10);
    }
    get startWeekday() {
      return this.$_get(core.int, 10, 0);
    }
    set startWeekday(v) {
      this.$_setSignedInt32(10, v);
    }
    hasStartWeekday() {
      return this.$_has(10);
    }
    clearStartWeekday() {
      return this.clearField(11);
    }
  };
  (material_datepicker__proto__date_range$46pb.DatepickerDateRange.new = function() {
    material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date_range$46pb.DatepickerDateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DatepickerDateRange.fromBuffer = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__.fromBuffer.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DatepickerDateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DatepickerDateRange.fromJson = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__.fromJson.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DatepickerDateRange.prototype;
  dart.addTypeTests(material_datepicker__proto__date_range$46pb.DatepickerDateRange);
  dart.setMethodSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getMethods(material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__),
    clone: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, []),
    copyWith: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [dart.fnType(dart.void, [material_datepicker__proto__date_range$46pb.DatepickerDateRange])]),
    hasDateRange: dart.fnType(core.bool, []),
    clearDateRange: dart.fnType(dart.void, []),
    hasDaysAgo: dart.fnType(core.bool, []),
    clearDaysAgo: dart.fnType(dart.void, []),
    hasWeeksAgo: dart.fnType(core.bool, []),
    clearWeeksAgo: dart.fnType(dart.void, []),
    hasMonthsAgo: dart.fnType(core.bool, []),
    clearMonthsAgo: dart.fnType(dart.void, []),
    hasYearsAgo: dart.fnType(core.bool, []),
    clearYearsAgo: dart.fnType(dart.void, []),
    hasLastNDays: dart.fnType(core.bool, []),
    clearLastNDays: dart.fnType(dart.void, []),
    hasAllTimeRange: dart.fnType(core.bool, []),
    clearAllTimeRange: dart.fnType(dart.void, []),
    hasBroadcastMonthsAgo: dart.fnType(core.bool, []),
    clearBroadcastMonthsAgo: dart.fnType(dart.void, []),
    hasLastNDaysToToday: dart.fnType(core.bool, []),
    clearLastNDaysToToday: dart.fnType(dart.void, []),
    hasQuartersAgo: dart.fnType(core.bool, []),
    clearQuartersAgo: dart.fnType(dart.void, []),
    hasStartWeekday: dart.fnType(core.bool, []),
    clearStartWeekday: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getGetters(material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__),
    info_: protobuf$.BuilderInfo,
    dateRange: material_datepicker__proto__date_range$46pb.DateRange,
    daysAgo: core.int,
    weeksAgo: core.int,
    monthsAgo: core.int,
    yearsAgo: core.int,
    lastNDays: core.int,
    allTimeRange: core.bool,
    broadcastMonthsAgo: core.int,
    lastNDaysToToday: core.int,
    quartersAgo: core.int,
    startWeekday: core.int
  }));
  dart.setSetterSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getSetters(material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__),
    dateRange: material_datepicker__proto__date_range$46pb.DateRange,
    daysAgo: core.int,
    weeksAgo: core.int,
    monthsAgo: core.int,
    yearsAgo: core.int,
    lastNDays: core.int,
    allTimeRange: core.bool,
    broadcastMonthsAgo: core.int,
    lastNDaysToToday: core.int,
    quartersAgo: core.int,
    startWeekday: core.int
  }));
  dart.defineLazy(material_datepicker__proto__date_range$46pb.DatepickerDateRange, {
    /*material_datepicker__proto__date_range$46pb.DatepickerDateRange._i*/get _i() {
      let _ = new protobuf$.BuilderInfo.new("DatepickerDateRange", {package: dart.const(new protobuf$.PackageName.new("angular_components.lib.material_datepicker.proto"))});
      _.a(material_datepicker__proto__date_range$46pb.DateRange, 1, "dateRange", protobuf$.PbFieldType.OM, dart.fn(material_datepicker__proto__date_range$46pb.DateRange.getDefault, VoidToDateRange()), dart.fn(material_datepicker__proto__date_range$46pb.DateRange.create, VoidToDateRange()));
      _.a(core.int, 2, "daysAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 3, "weeksAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 4, "monthsAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 5, "yearsAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 6, "lastNDays", protobuf$.PbFieldType.O3);
      _.aOB(7, "allTimeRange");
      _.a(core.int, 8, "broadcastMonthsAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 9, "lastNDaysToToday", protobuf$.PbFieldType.O3);
      _.a(core.int, 10, "quartersAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 11, "startWeekday", protobuf$.PbFieldType.O3);
      _.hasRequiredFields = false;
      return _;
    },
    /*material_datepicker__proto__date_range$46pb.DatepickerDateRange._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  material_datepicker__proto__date_range$46pb.DateRange = class DateRange extends protobuf$.GeneratedMessage {
    clone() {
      let _ = new material_datepicker__proto__date_range$46pb.DateRange.new();
      _.mergeFromMessage(this);
      return _;
    }
    copyWith(updates) {
      return material_datepicker__proto__date_range$46pb.DateRange._check(super.copyWith(dart.fn(message => updates(material_datepicker__proto__date_range$46pb.DateRange.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return material_datepicker__proto__date_range$46pb.DateRange._i;
    }
    static create() {
      return new material_datepicker__proto__date_range$46pb.DateRange.new();
    }
    static createRepeated() {
      return new (PbListOfDateRange()).new();
    }
    static getDefault() {
      let t = material_datepicker__proto__date_range$46pb.DateRange._defaultInstance;
      return t == null ? material_datepicker__proto__date_range$46pb.DateRange._defaultInstance = (() => {
        let _ = material_datepicker__proto__date_range$46pb.DateRange.create();
        _.freeze();
        return _;
      })() : t;
    }
    static $checkItem(v) {
      if (!material_datepicker__proto__date_range$46pb.DateRange.is(v)) protobuf$.checkItemFailed(v, material_datepicker__proto__date_range$46pb.DateRange._i.messageName);
    }
    get start() {
      return this.$_getN(material_datepicker__proto__date$46pb.Date, 0);
    }
    set start(v) {
      this.setField(1, v);
    }
    hasStart() {
      return this.$_has(0);
    }
    clearStart() {
      return this.clearField(1);
    }
    get end() {
      return this.$_getN(material_datepicker__proto__date$46pb.Date, 1);
    }
    set end(v) {
      this.setField(2, v);
    }
    hasEnd() {
      return this.$_has(1);
    }
    clearEnd() {
      return this.clearField(2);
    }
  };
  (material_datepicker__proto__date_range$46pb.DateRange.new = function() {
    material_datepicker__proto__date_range$46pb.DateRange.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date_range$46pb.DateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DateRange.fromBuffer = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DateRange.__proto__.fromBuffer.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DateRange.fromJson = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DateRange.__proto__.fromJson.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DateRange.prototype;
  dart.addTypeTests(material_datepicker__proto__date_range$46pb.DateRange);
  dart.setMethodSignature(material_datepicker__proto__date_range$46pb.DateRange, () => ({
    __proto__: dart.getMethods(material_datepicker__proto__date_range$46pb.DateRange.__proto__),
    clone: dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, []),
    copyWith: dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, [dart.fnType(dart.void, [material_datepicker__proto__date_range$46pb.DateRange])]),
    hasStart: dart.fnType(core.bool, []),
    clearStart: dart.fnType(dart.void, []),
    hasEnd: dart.fnType(core.bool, []),
    clearEnd: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__proto__date_range$46pb.DateRange, () => ({
    __proto__: dart.getGetters(material_datepicker__proto__date_range$46pb.DateRange.__proto__),
    info_: protobuf$.BuilderInfo,
    start: material_datepicker__proto__date$46pb.Date,
    end: material_datepicker__proto__date$46pb.Date
  }));
  dart.setSetterSignature(material_datepicker__proto__date_range$46pb.DateRange, () => ({
    __proto__: dart.getSetters(material_datepicker__proto__date_range$46pb.DateRange.__proto__),
    start: material_datepicker__proto__date$46pb.Date,
    end: material_datepicker__proto__date$46pb.Date
  }));
  dart.defineLazy(material_datepicker__proto__date_range$46pb.DateRange, {
    /*material_datepicker__proto__date_range$46pb.DateRange._i*/get _i() {
      let _ = new protobuf$.BuilderInfo.new("DateRange", {package: dart.const(new protobuf$.PackageName.new("angular_components.lib.material_datepicker.proto"))});
      _.a(material_datepicker__proto__date$46pb.Date, 1, "start", protobuf$.PbFieldType.OM, dart.fn(material_datepicker__proto__date$46pb.Date.getDefault, VoidToDate()), dart.fn(material_datepicker__proto__date$46pb.Date.create, VoidToDate()));
      _.a(material_datepicker__proto__date$46pb.Date, 2, "end", protobuf$.PbFieldType.OM, dart.fn(material_datepicker__proto__date$46pb.Date.getDefault, VoidToDate()), dart.fn(material_datepicker__proto__date$46pb.Date.create, VoidToDate()));
      _.hasRequiredFields = false;
      return _;
    },
    /*material_datepicker__proto__date_range$46pb.DateRange._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/proto/date_range.pb.ddc", {
    "package:angular_components/material_datepicker/proto/date_range.pb.dart": material_datepicker__proto__date_range$46pb
  }, '{"version":3,"sourceRoot":"","sources":["date_range.pb.dart"],"names":[],"mappings":"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","file":"date_range.pb.ddc.js"}');
  // Exports:
  return {
    material_datepicker__proto__date_range$46pb: material_datepicker__proto__date_range$46pb
  };
});

//# sourceMappingURL=date_range.pb.ddc.js.map
