define(['dart_sdk', 'packages/quiver/time', 'packages/angular_components/utils/comparators/comparators', 'packages/intl/intl', 'packages/quiver/core', 'packages/angular_components/model/observable/observable'], function(dart_sdk, time, comparators, intl, core, observable) {
  'use strict';
  const core$ = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const time$ = time.time;
  const utils__comparators__comparators = comparators.utils__comparators__comparators;
  const intl$ = intl.intl;
  const core$0 = core.core;
  const model__observable__observable = observable.model__observable__observable;
  const _root = Object.create(null);
  const model__date__date = Object.create(_root);
  const $isNaN = dartx.isNaN;
  const $compareTo = dartx.compareTo;
  const $round = dartx.round;
  let SyncIterableOfDate = () => (SyncIterableOfDate = dart.constFn(_js_helper.SyncIterable$(model__date__date.Date)))();
  let JSArrayOfDate = () => (JSArrayOfDate = dart.constFn(_interceptors.JSArray$(model__date__date.Date)))();
  let ObservableReferenceOfDateRangeComparison = () => (ObservableReferenceOfDateRangeComparison = dart.constFn(model__observable__observable.ObservableReference$(model__date__date.DateRangeComparison)))();
  let ObservableViewOfDateRangeComparison = () => (ObservableViewOfDateRangeComparison = dart.constFn(model__observable__observable.ObservableView$(model__date__date.DateRangeComparison)))();
  const _time = Symbol('_time');
  let const$;
  model__date__date.Date = class Date extends utils__comparators__comparators.Comparators {
    static fromTime(time, opts) {
      let tzOffset = opts && 'tzOffset' in opts ? opts.tzOffset : null;
      if (time.timeZoneOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core$.ArgumentError.value(time, "time", "has a NaN time zone offset"));
      }
      let t = tzOffset;
      t == null ? tzOffset = time.timeZoneOffset : t;
      if (tzOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core$.ArgumentError.value(tzOffset, "tzOffset", "has a NaN duration"));
      }
      let localTime = time.add(tzOffset['-'](time.timeZoneOffset));
      return new model__date__date.Date.new(localTime.year, localTime.month, localTime.day);
    }
    static fromTimestamp(msSinceEpoch) {
      return model__date__date.Date.fromTime(new core$.DateTime.fromMillisecondsSinceEpoch(msSinceEpoch));
    }
    static today(clock) {
      if (clock === void 0) clock = null;
      let now = (clock != null ? clock : const$ || (const$ = dart.const(new time$.Clock.new()))).now();
      if (now.timeZoneOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core$.StateError.new("Clock " + dart.str(clock) + " returned a time with a NaN timezone " + ("offset: " + dart.str(now))));
      }
      return model__date__date.Date.fromTime(now);
    }
    static parse(input, format) {
      return model__date__date.Date.fromTime(format.parse(input));
    }
    static parseStrict(input, format) {
      return model__date__date.Date.fromTime(format.parseStrict(input));
    }
    static parseLoose(input, format) {
      return model__date__date.Date.fromTime(format.parseLoose(input));
    }
    format(format) {
      return format.format(this.asUtcTime());
    }
    asUtcTime() {
      return this[_time];
    }
    add(opts) {
      let years = opts && 'years' in opts ? opts.years : 0;
      let months = opts && 'months' in opts ? opts.months : 0;
      let days = opts && 'days' in opts ? opts.days : 0;
      return new model__date__date.Date.new(dart.notNull(this.year) + dart.notNull(years), dart.notNull(this.month) + dart.notNull(months), dart.notNull(this.day) + dart.notNull(days));
    }
    get year() {
      return this.asUtcTime().year;
    }
    get month() {
      return this.asUtcTime().month;
    }
    get day() {
      return this.asUtcTime().day;
    }
    get weekday() {
      return this.asUtcTime().weekday;
    }
    isBefore(other) {
      return this['<'](other);
    }
    isOnOrBefore(other) {
      return this['<='](other);
    }
    isAfter(other) {
      return this['>'](other);
    }
    isOnOrAfter(other) {
      return this['>='](other);
    }
    compareTo(other) {
      model__date__date.Date._check(other);
      return this.asUtcTime().compareTo(other.asUtcTime());
    }
    get hashCode() {
      return dart.hashCode(this.asUtcTime());
    }
    toString() {
      return dart.str(this.asUtcTime().year) + "-" + dart.str(this.asUtcTime().month) + "-" + dart.str(this.asUtcTime().day);
    }
  };
  (model__date__date.Date.new = function(year, month, day) {
    if (month === void 0) month = 1;
    if (day === void 0) day = 1;
    this[_time] = new core$.DateTime.utc(year, month, day);
  }).prototype = model__date__date.Date.prototype;
  dart.addTypeTests(model__date__date.Date);
  dart.setMethodSignature(model__date__date.Date, () => ({
    __proto__: dart.getMethods(model__date__date.Date.__proto__),
    format: dart.fnType(core$.String, [intl$.DateFormat]),
    asUtcTime: dart.fnType(core$.DateTime, []),
    add: dart.fnType(model__date__date.Date, [], {years: core$.int, months: core$.int, days: core$.int}),
    isBefore: dart.fnType(core$.bool, [model__date__date.Date]),
    isOnOrBefore: dart.fnType(core$.bool, [model__date__date.Date]),
    isAfter: dart.fnType(core$.bool, [model__date__date.Date]),
    isOnOrAfter: dart.fnType(core$.bool, [model__date__date.Date]),
    compareTo: dart.fnType(core$.int, [core$.Object]),
    [$compareTo]: dart.fnType(core$.int, [core$.Object])
  }));
  dart.setGetterSignature(model__date__date.Date, () => ({
    __proto__: dart.getGetters(model__date__date.Date.__proto__),
    year: core$.int,
    month: core$.int,
    day: core$.int,
    weekday: core$.int
  }));
  dart.setFieldSignature(model__date__date.Date, () => ({
    __proto__: dart.getFields(model__date__date.Date.__proto__),
    [_time]: dart.finalFieldType(core$.DateTime)
  }));
  dart.defineExtensionMethods(model__date__date.Date, ['compareTo', 'toString']);
  dart.defineExtensionAccessors(model__date__date.Date, ['hashCode']);
  dart.setBaseClass(model__date__date.Date, utils__comparators__comparators.Comparators$(model__date__date.Date));
  model__date__date.daysSpanned = function(start, end, opts) {
    let inclusive = opts && 'inclusive' in opts ? opts.inclusive : true;
    return (dart.notNull(end.asUtcTime().difference(start.asUtcTime()).inHours) / 24)[$round]() + (dart.test(inclusive) ? 1 : 0);
  };
  model__date__date.earlierOf = function(a, b) {
    return dart.test(a.isAfter(b)) ? b : a;
  };
  model__date__date.laterOf = function(a, b) {
    return dart.test(a.isAfter(b)) ? a : b;
  };
  model__date__date.DateRange = class DateRange extends core$.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    static intersectionOf(a, b) {
      let start = model__date__date.DateRange._laterStartDateOf(a.start, b.start);
      let end = model__date__date.DateRange._earlierEndDateOf(a.end, b.end);
      if (start != null && end != null && dart.test(start['>'](end))) return null;
      return new model__date__date.DateRange.new(start, end);
    }
    static _laterStartDateOf(a, b) {
      if (a == null) return b;
      if (b == null) return a;
      return model__date__date.laterOf(a, b);
    }
    static _earlierEndDateOf(a, b) {
      if (a == null) return b;
      if (b == null) return a;
      return model__date__date.earlierOf(a, b);
    }
    _equals(o) {
      if (o == null) return false;
      return model__date__date.DateRange.is(o) && dart.equals(this.start, o.start) && dart.equals(this.end, o.end);
    }
    get hashCode() {
      return core$0.hash2(this.start, this.end);
    }
    toString() {
      return dart.str(this.start) + " - " + dart.str(this.end);
    }
    asPlainRange() {
      return this;
    }
  };
  (model__date__date.DateRange.new = function(start, end) {
    this[start$] = start;
    this[end$] = end;
  }).prototype = model__date__date.DateRange.prototype;
  dart.addTypeTests(model__date__date.DateRange);
  const start$ = Symbol("DateRange.start");
  const end$ = Symbol("DateRange.end");
  dart.setMethodSignature(model__date__date.DateRange, () => ({
    __proto__: dart.getMethods(model__date__date.DateRange.__proto__),
    asPlainRange: dart.fnType(model__date__date.DateRange, [])
  }));
  dart.setFieldSignature(model__date__date.DateRange, () => ({
    __proto__: dart.getFields(model__date__date.DateRange.__proto__),
    start: dart.finalFieldType(model__date__date.Date),
    end: dart.finalFieldType(model__date__date.Date)
  }));
  dart.defineExtensionMethods(model__date__date.DateRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(model__date__date.DateRange, ['hashCode']);
  model__date__date.rangeContains = function(range, date) {
    return (range.start == null || dart.test(date['>='](range.start))) && (range.end == null || dart.test(date['<='](range.end)));
  };
  model__date__date.rangeContainsRange = function(range, subrange) {
    let containsStart = range.start == null && subrange.start == null || subrange.start != null && dart.test(model__date__date.rangeContains(range, subrange.start));
    let containsEnd = range.end == null && subrange.end == null || subrange.end != null && dart.test(model__date__date.rangeContains(range, subrange.end));
    return containsStart && containsEnd;
  };
  model__date__date.enumerateDates = function(start, end) {
    return new (SyncIterableOfDate()).new(function* enumerateDates() {
      for (let date = start; dart.test(date['<='](end)); date = date.add({days: 1})) {
        yield date;
      }
    });
  };
  model__date__date.enumerateRange = function(range) {
    if (range == null) {
      return JSArrayOfDate().of([]);
    }
    if (range.start == null || range.end == null) {
      dart.throw(new core$.ArgumentError.new("Cannot call enumerateRange with a range with a null start or end."));
    }
    return model__date__date.enumerateDates(range.start, range.end);
  };
  model__date__date.DateRangeComparison = class DateRangeComparison extends core$.Object {
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
  };
  (model__date__date.DateRangeComparison.new = function(range, opts) {
    let comparison = opts && 'comparison' in opts ? opts.comparison : null;
    this[range$] = range;
    this[comparison$] = comparison;
  }).prototype = model__date__date.DateRangeComparison.prototype;
  dart.addTypeTests(model__date__date.DateRangeComparison);
  const range$ = Symbol("DateRangeComparison.range");
  const comparison$ = Symbol("DateRangeComparison.comparison");
  dart.setGetterSignature(model__date__date.DateRangeComparison, () => ({
    __proto__: dart.getGetters(model__date__date.DateRangeComparison.__proto__),
    isComparisonEnabled: core$.bool
  }));
  dart.setFieldSignature(model__date__date.DateRangeComparison, () => ({
    __proto__: dart.getFields(model__date__date.DateRangeComparison.__proto__),
    range: dart.finalFieldType(model__date__date.DateRange),
    comparison: dart.finalFieldType(model__date__date.DateRange)
  }));
  const _ref = Symbol('_ref');
  model__date__date.DatepickerSelection = class DatepickerSelection extends model__observable__observable.ObservableViewMixin$(model__date__date.DateRangeComparison) {
    get value() {
      return this[_ref].value;
    }
    get stream() {
      return this[_ref].stream;
    }
    dispose() {}
  };
  (model__date__date.DatepickerSelection.wrap = function(ref) {
    this[_ref] = ref;
  }).prototype = model__date__date.DatepickerSelection.prototype;
  (model__date__date.DatepickerSelection.test = function(initialValue) {
    if (initialValue === void 0) initialValue = null;
    this[_ref] = new (ObservableReferenceOfDateRangeComparison()).new(initialValue);
  }).prototype = model__date__date.DatepickerSelection.prototype;
  dart.addTypeTests(model__date__date.DatepickerSelection);
  dart.setMethodSignature(model__date__date.DatepickerSelection, () => ({
    __proto__: dart.getMethods(model__date__date.DatepickerSelection.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(model__date__date.DatepickerSelection, () => ({
    __proto__: dart.getGetters(model__date__date.DatepickerSelection.__proto__),
    value: model__date__date.DateRangeComparison,
    stream: async.Stream$(model__date__date.DateRangeComparison)
  }));
  dart.setFieldSignature(model__date__date.DatepickerSelection, () => ({
    __proto__: dart.getFields(model__date__date.DatepickerSelection.__proto__),
    [_ref]: dart.finalFieldType(ObservableViewOfDateRangeComparison())
  }));
  dart.trackLibraries("packages/angular_components/model/date/date.ddc", {
    "package:angular_components/model/date/date.dart": model__date__date
  }, '{"version":3,"sourceRoot":"","sources":["date.dart"],"names":[],"mappings":"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","file":"date.ddc.js"}');
  // Exports:
  return {
    model__date__date: model__date__date
  };
});

//# sourceMappingURL=date.ddc.js.map
