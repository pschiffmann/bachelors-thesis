define(['dart_sdk', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/proto/date_range.pb', 'packages/angular_components/material_datepicker/proto/date.pb', 'packages/quiver/time', 'packages/intl/intl'], function(dart_sdk, date, date_range, date$, time, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__date__date = date.model__date__date;
  const material_datepicker__proto__date_range$46pb = date_range.material_datepicker__proto__date_range$46pb;
  const material_datepicker__proto__date$46pb = date$.material_datepicker__proto__date$46pb;
  const time$ = time.time;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const material_datepicker__range = Object.create(_root);
  const $hashCode = dartx.hashCode;
  const $modulo = dartx['%'];
  const $truncate = dartx.truncate;
  let VoidToDatepickerDateRange = () => (VoidToDatepickerDateRange = dart.constFn(dart.fnType(material_datepicker__range.DatepickerDateRange, [])))();
  let DatepickerDateRangeToDatepickerDateRange = () => (DatepickerDateRangeToDatepickerDateRange = dart.constFn(dart.fnType(material_datepicker__range.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange])))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let JSArrayOfDatepickerDateRange = () => (JSArrayOfDatepickerDateRange = dart.constFn(_interceptors.JSArray$(material_datepicker__range.DatepickerDateRange)))();
  material_datepicker__range._ifValidRange = function(r, fn) {
    if (r == null || r.start == null || r.end == null) {
      return null;
    }
    return fn();
  };
  material_datepicker__range._genericNext = function(r) {
    return material_datepicker__range._ifValidRange(r, dart.fn(() => material_datepicker__range.DatepickerDateRange.custom(r.end.add({days: 1}), r.end.add({days: model__date__date.daysSpanned(r.start, r.end)})), VoidToDatepickerDateRange()));
  };
  material_datepicker__range._genericPrev = function(r) {
    return material_datepicker__range._ifValidRange(r, dart.fn(() => material_datepicker__range.DatepickerDateRange.custom(r.start.add({days: -dart.notNull(model__date__date.daysSpanned(r.start, r.end))}), r.start.add({days: -1})), VoidToDatepickerDateRange()));
  };
  material_datepicker__range.RangeFn = dart.typedef('RangeFn', () => dart.fnType(material_datepicker__range.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange]));
  material_datepicker__range.DatepickerDateRange = class DatepickerDateRange extends core.Object {
    static new(title, start, end, opts) {
      let next = opts && 'next' in opts ? opts.next : dart.fn(material_datepicker__range._genericNext, DatepickerDateRangeToDatepickerDateRange());
      let prev = opts && 'prev' in opts ? opts.prev : dart.fn(material_datepicker__range._genericPrev, DatepickerDateRangeToDatepickerDateRange());
      let isPredefined = opts && 'isPredefined' in opts ? opts.isPredefined : false;
      let isAllTime = opts && 'isAllTime' in opts ? opts.isAllTime : false;
      return new material_datepicker__range._BasicDateRange.new(title, start, end, next, prev, isPredefined, isAllTime);
    }
    static custom(start, end) {
      return material_datepicker__range.DatepickerDateRange.new(material_datepicker__range._customDateRangeMsg, start, end);
    }
    static fromProtoBuf(clock, pb) {
      if (dart.test(pb.hasAllTimeRange())) {
        return material_datepicker__range.allTime;
      } else if (dart.test(pb.hasDaysAgo())) {
        return new material_datepicker__range.SingleDayRange.daysAgo(clock, pb.daysAgo);
      } else if (dart.test(pb.hasLastNDays())) {
        return new material_datepicker__range.LastNDaysRange.beforeToday(clock, pb.lastNDays);
      } else if (dart.test(pb.hasLastNDaysToToday())) {
        return new material_datepicker__range.LastNDaysToTodayRange.beforeToday(clock, pb.lastNDaysToToday);
      } else if (dart.test(pb.hasWeeksAgo())) {
        if (dart.test(pb.hasStartWeekday())) {
          return new material_datepicker__range.WeekRange.weeksAgo(clock, pb.weeksAgo, {startWeekday: pb.startWeekday});
        } else {
          return new material_datepicker__range.WeekRange.weeksAgo(clock, pb.weeksAgo);
        }
      } else if (dart.test(pb.hasMonthsAgo())) {
        return new material_datepicker__range.MonthRange.monthsAgo(clock, pb.monthsAgo);
      } else if (dart.test(pb.hasBroadcastMonthsAgo())) {
        return material_datepicker__range.BroadcastMonthRange.monthsAgo(clock, pb.broadcastMonthsAgo);
      } else if (dart.test(pb.hasYearsAgo())) {
        return new material_datepicker__range.YearRange.yearsAgo(clock, pb.yearsAgo);
      }
      return material_datepicker__range.DatepickerDateRange.custom(material_datepicker__range._convertToDate(pb.dateRange.start), material_datepicker__range._convertToDate(pb.dateRange.end));
    }
  };
  (material_datepicker__range.DatepickerDateRange[dart.mixinNew] = function() {
  }).prototype = material_datepicker__range.DatepickerDateRange.prototype;
  dart.addTypeTests(material_datepicker__range.DatepickerDateRange);
  material_datepicker__range.DatepickerDateRange[dart.implements] = () => [model__date__date.DateRange];
  material_datepicker__range._clamp = function(range, opts) {
    let min = opts && 'min' in opts ? opts.min : null;
    let max = opts && 'max' in opts ? opts.max : null;
    if (min != null && max != null) if (!dart.test(min['<='](max))) dart.assertFailed();
    if ((min == null || range.end == null || dart.test(min['<='](range.end))) && (max == null || range.start == null || dart.test(max['>='](range.start)))) {
      return new material_datepicker__range._ClampedDateRange.new(range, {min: min, max: max});
    }
    return null;
  };
  material_datepicker__range.rangeEqual = function(range, o) {
    return range == null && o == null || material_datepicker__range.DatepickerDateRange.is(range) && material_datepicker__range.DatepickerDateRange.is(o) && range.title == o.title && dart.equals(range.start, o.start) && dart.equals(range.end, o.end);
  };
  material_datepicker__range.rangeHash = function(range) {
    return (dart.hashCode(range.title) ^ dart.notNull(dart.hashCode(range.start)) ^ dart.notNull(dart.hashCode(range.end))) >>> 0;
  };
  material_datepicker__range._rangeString = function(range) {
    return dart.str(range.title) + " (" + dart.str(range.start) + ") (" + dart.str(range.end) + ")";
  };
  material_datepicker__range._plainRange = function(range) {
    return new model__date__date.DateRange.new(range.start, range.end);
  };
  material_datepicker__range._makeProtoBuf = function(range) {
    return dart.test(range.isAllTime) ? (() => {
      let _ = new material_datepicker__proto__date_range$46pb.DatepickerDateRange.new();
      _.allTimeRange = true;
      return _;
    })() : (() => {
      let _ = new material_datepicker__proto__date_range$46pb.DatepickerDateRange.new();
      _.dateRange = material_datepicker__proto__date_range$46pb.DateRange._check(material_datepicker__range._makeDateRangeProto(range.start, range.end));
      return _;
    })();
  };
  material_datepicker__range._makeDateRangeProto = function(start, end) {
    let _ = new material_datepicker__proto__date_range$46pb.DateRange.new();
    _.start = material_datepicker__range._makeDateProto(start);
    _.end = material_datepicker__range._makeDateProto(end);
    return _;
  };
  material_datepicker__range._makeDateProto = function(date) {
    let _ = new material_datepicker__proto__date$46pb.Date.new();
    _.year = date.year;
    _.month = date.month;
    _.day = date.day;
    return _;
  };
  material_datepicker__range._convertToDate = function(date) {
    return new model__date__date.Date.new(date.year, date.month, date.day);
  };
  const _delegate = Symbol('_delegate');
  const _min = Symbol('_min');
  const _max = Symbol('_max');
  material_datepicker__range._ClampedDateRange = class _ClampedDateRange extends core.Object {
    get title() {
      return this[_delegate].title;
    }
    get isPredefined() {
      return this[_delegate].isPredefined;
    }
    get isAllTime() {
      return this[_delegate].isAllTime;
    }
    get start() {
      let date = this[_delegate].start;
      return date == null || this[_min] != null && dart.test(this[_min]['>'](date)) ? this[_min] : date;
    }
    get end() {
      let date = this[_delegate].end;
      return date == null || this[_max] != null && dart.test(this[_max]['<'](date)) ? this[_max] : date;
    }
    get next() {
      if (this[_max] != null && this[_delegate].end != null && dart.test(this[_delegate].end['>'](this[_max]))) {
        return null;
      }
      let t = this[_delegate].next;
      return t == null ? null : t.clamp({min: this[_min], max: this[_max]});
    }
    get prev() {
      if (this[_min] != null && this[_delegate].start != null && dart.test(this[_delegate].start['<'](this[_min]))) {
        return null;
      }
      let t = this[_delegate].prev;
      return t == null ? null : t.clamp({min: this[_min], max: this[_max]});
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this[_delegate];
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = this[_delegate].toProtoBuf();
      _.dateRange = material_datepicker__proto__date_range$46pb.DateRange._check(material_datepicker__range._makeDateRangeProto(this.start, this.end));
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return dart.test(material_datepicker__range.rangeEqual(this, o)) && material_datepicker__range._ClampedDateRange.is(o) && dart.equals(this[_min], o[_min]) && dart.equals(this[_max], o[_max]);
    }
    get hashCode() {
      return (dart.notNull(material_datepicker__range.rangeHash(this)) ^ dart.notNull(dart.hashCode(this[_min])) ^ dart.notNull(dart.hashCode(this[_max]))) >>> 0;
    }
    toString() {
      return dart.str(material_datepicker__range._rangeString(this)) + " (clamped " + dart.str(this[_min]) + " - " + dart.str(this[_max]) + ")";
    }
  };
  (material_datepicker__range._ClampedDateRange.new = function(delegate, opts) {
    let min = opts && 'min' in opts ? opts.min : null;
    let max = opts && 'max' in opts ? opts.max : null;
    this[_delegate] = delegate;
    this[_min] = min;
    this[_max] = max;
  }).prototype = material_datepicker__range._ClampedDateRange.prototype;
  dart.addTypeTests(material_datepicker__range._ClampedDateRange);
  material_datepicker__range._ClampedDateRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range._ClampedDateRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range._ClampedDateRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range._ClampedDateRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range._ClampedDateRange.__proto__),
    title: core.String,
    isPredefined: core.bool,
    isAllTime: core.bool,
    start: model__date__date.Date,
    end: model__date__date.Date,
    next: material_datepicker__range.DatepickerDateRange,
    prev: material_datepicker__range.DatepickerDateRange
  }));
  dart.setFieldSignature(material_datepicker__range._ClampedDateRange, () => ({
    __proto__: dart.getFields(material_datepicker__range._ClampedDateRange.__proto__),
    [_min]: dart.finalFieldType(model__date__date.Date),
    [_max]: dart.finalFieldType(model__date__date.Date),
    [_delegate]: dart.finalFieldType(material_datepicker__range.DatepickerDateRange)
  }));
  dart.defineExtensionMethods(material_datepicker__range._ClampedDateRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range._ClampedDateRange, ['hashCode']);
  const _next = Symbol('_next');
  const _prev = Symbol('_prev');
  material_datepicker__range._BasicDateRange = class _BasicDateRange extends core.Object {
    get next() {
      return this[_next](this);
    }
    get prev() {
      return this[_prev](this);
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      return material_datepicker__range._makeProtoBuf(this);
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
  };
  (material_datepicker__range._BasicDateRange.new = function(title, start, end, next, prev, isPredefined, isAllTime) {
    this.title = title;
    this.start = start;
    this.end = end;
    this[_next] = next;
    this[_prev] = prev;
    this.isPredefined = isPredefined;
    this.isAllTime = isAllTime;
  }).prototype = material_datepicker__range._BasicDateRange.prototype;
  dart.addTypeTests(material_datepicker__range._BasicDateRange);
  material_datepicker__range._BasicDateRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range._BasicDateRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range._BasicDateRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range._BasicDateRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range._BasicDateRange.__proto__),
    next: material_datepicker__range.DatepickerDateRange,
    prev: material_datepicker__range.DatepickerDateRange
  }));
  dart.setFieldSignature(material_datepicker__range._BasicDateRange, () => ({
    __proto__: dart.getFields(material_datepicker__range._BasicDateRange.__proto__),
    title: dart.finalFieldType(core.String),
    start: dart.finalFieldType(model__date__date.Date),
    end: dart.finalFieldType(model__date__date.Date),
    isPredefined: dart.finalFieldType(core.bool),
    isAllTime: dart.finalFieldType(core.bool),
    [_next]: dart.finalFieldType(DatepickerDateRangeToDatepickerDateRange()),
    [_prev]: dart.finalFieldType(DatepickerDateRangeToDatepickerDateRange())
  }));
  dart.defineExtensionMethods(material_datepicker__range._BasicDateRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range._BasicDateRange, ['hashCode']);
  material_datepicker__range.RangeTitle = dart.typedef('RangeTitle', () => dart.fnType(core.String, [core.int]));
  const _date = Symbol('_date');
  const _ago = Symbol('_ago');
  const _titleFunction = Symbol('_titleFunction');
  let const$;
  let const$0;
  material_datepicker__range.SingleDayRange = class SingleDayRange extends core.Object {
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get start() {
      return this[_date];
    }
    get end() {
      return this[_date];
    }
    get next() {
      return new material_datepicker__range.SingleDayRange.new(this[_date].add({days: 1}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.SingleDayRange.new(this[_date].add({days: -1}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.daysAgo = this[_ago];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _defaultTitle(daysAgo) {
      return core.String._check(dart.notNull(daysAgo) > 0 ? material_datepicker__range.SingleDayRange._addDaysMsg(daysAgo) : material_datepicker__range.SingleDayRange._daysFromNowMsg(-dart.notNull(daysAgo)));
    }
    static _addDaysMsg(daysAgo) {
      return intl$.Intl.plural(core.int._check(daysAgo), {zero: "Today", one: "Yesterday", other: dart.str(daysAgo) + " days ago", name: "_addDaysMsg", args: [daysAgo], desc: "A date range containing only one day a certain number " + "of days in the past.", examples: const$ || (const$ = dart.constMap(core.String, dart.dynamic, ["daysAgo", 2]))});
    }
    static _daysFromNowMsg(daysFromNow) {
      return intl$.Intl.plural(core.int._check(daysFromNow), {zero: "Today", one: "Tomorrow", other: dart.str(daysFromNow) + " days from now", name: "_daysFromNowMsg", args: [daysFromNow], desc: "A date range containing only one day a certain number " + "of days in the future.", examples: const$0 || (const$0 = dart.constMap(core.String, dart.dynamic, ["daysFromNow", 2]))});
    }
  };
  (material_datepicker__range.SingleDayRange.new = function(date, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.SingleDayRange._defaultTitle, intToString());
    this[_date] = date;
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
  }).prototype = material_datepicker__range.SingleDayRange.prototype;
  (material_datepicker__range.SingleDayRange.daysAgo = function(clock, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.SingleDayRange._defaultTitle, intToString());
    material_datepicker__range.SingleDayRange.new.call(this, model__date__date.Date.today(time$.Clock._check(clock)).add({days: core.int._check(dart.dsend(ago, '_negate', []))}), core.int._check(ago), titleFunction);
  }).prototype = material_datepicker__range.SingleDayRange.prototype;
  dart.addTypeTests(material_datepicker__range.SingleDayRange);
  material_datepicker__range.SingleDayRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.SingleDayRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.SingleDayRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range.SingleDayRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.SingleDayRange.__proto__),
    title: core.String,
    start: model__date__date.Date,
    end: model__date__date.Date,
    next: material_datepicker__range.DatepickerDateRange,
    prev: material_datepicker__range.DatepickerDateRange,
    isPredefined: core.bool,
    isAllTime: core.bool,
    ago: core.int
  }));
  dart.setFieldSignature(material_datepicker__range.SingleDayRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.SingleDayRange.__proto__),
    [_date]: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.SingleDayRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.SingleDayRange, ['hashCode']);
  const _start = Symbol('_start');
  const _lengthInDays = Symbol('_lengthInDays');
  let const$1;
  material_datepicker__range.LastNDaysRange = class LastNDaysRange extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get start() {
      return this[_start];
    }
    get end() {
      return this[_start].add({days: dart.notNull(this[_lengthInDays]) - 1});
    }
    get next() {
      return material_datepicker__range._genericNext(this);
    }
    get prev() {
      return material_datepicker__range._genericPrev(this);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get lengthInDays() {
      return this[_lengthInDays];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.lastNDays = this[_lengthInDays];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _lastNDaysMsg(lengthInDays) {
      return intl$.Intl.plural(core.int._check(lengthInDays), {one: "Yesterday", other: "Last " + dart.str(lengthInDays) + " days", name: "_lastNDaysMsg", args: [lengthInDays], desc: "A date range containing the last \"lengthInDays\" days, " + "not including today.", examples: const$1 || (const$1 = dart.constMap(core.String, dart.dynamic, ["lengthInDays", 7]))});
    }
  };
  (material_datepicker__range.LastNDaysRange.new = function(start, lengthInDays, title) {
    if (title === void 0) title = null;
    this[_start] = start;
    this[title$] = core.String._check((() => {
      let l = title;
      return l != null ? l : material_datepicker__range.LastNDaysRange._lastNDaysMsg(lengthInDays);
    })());
    this[_lengthInDays] = lengthInDays;
  }).prototype = material_datepicker__range.LastNDaysRange.prototype;
  (material_datepicker__range.LastNDaysRange.beforeToday = function(clock, lengthInDays, title) {
    if (title === void 0) title = null;
    material_datepicker__range.LastNDaysRange.new.call(this, model__date__date.Date.today(time$.Clock._check(clock)).add({days: core.int._check(dart.dsend(lengthInDays, '_negate', []))}), core.int._check(lengthInDays), title);
  }).prototype = material_datepicker__range.LastNDaysRange.prototype;
  dart.addTypeTests(material_datepicker__range.LastNDaysRange);
  const title$ = Symbol("LastNDaysRange.title");
  material_datepicker__range.LastNDaysRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.LastNDaysRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.LastNDaysRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range.LastNDaysRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.LastNDaysRange.__proto__),
    start: model__date__date.Date,
    end: model__date__date.Date,
    next: material_datepicker__range.DatepickerDateRange,
    prev: material_datepicker__range.DatepickerDateRange,
    isPredefined: core.bool,
    isAllTime: core.bool,
    lengthInDays: core.int
  }));
  dart.setFieldSignature(material_datepicker__range.LastNDaysRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.LastNDaysRange.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_lengthInDays]: dart.finalFieldType(core.int),
    title: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(material_datepicker__range.LastNDaysRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.LastNDaysRange, ['hashCode']);
  let const$2;
  material_datepicker__range.LastNDaysToTodayRange = class LastNDaysToTodayRange extends core.Object {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get start() {
      return this[_start];
    }
    get end() {
      return this[_start].add({days: dart.notNull(this[_lengthInDays]) - 1});
    }
    get next() {
      return material_datepicker__range._genericNext(this);
    }
    get prev() {
      return material_datepicker__range._genericPrev(this);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get lengthInDays() {
      return this[_lengthInDays];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.lastNDaysToToday = this[_lengthInDays];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _lastNDaysToTodayMsg(lengthInDays) {
      return intl$.Intl.plural(core.int._check(lengthInDays), {one: "Today", other: dart.str(lengthInDays) + " days to today", name: "_lastNDaysToTodayMsg", args: [lengthInDays], desc: "A date range containing the last \"lengthInDays\" days, " + "ending today.", examples: const$2 || (const$2 = dart.constMap(core.String, dart.dynamic, ["lengthInDays", 7]))});
    }
  };
  (material_datepicker__range.LastNDaysToTodayRange.new = function(start, lengthInDays, title) {
    if (title === void 0) title = null;
    this[_start] = start;
    this[title$0] = core.String._check((() => {
      let l = title;
      return l != null ? l : material_datepicker__range.LastNDaysToTodayRange._lastNDaysToTodayMsg(lengthInDays);
    })());
    this[_lengthInDays] = lengthInDays;
  }).prototype = material_datepicker__range.LastNDaysToTodayRange.prototype;
  (material_datepicker__range.LastNDaysToTodayRange.beforeToday = function(clock, lengthInDays, title) {
    if (title === void 0) title = null;
    material_datepicker__range.LastNDaysToTodayRange.new.call(this, model__date__date.Date.today(time$.Clock._check(clock)).add({days: core.int._check(dart.dsend(dart.dsend(lengthInDays, '-', [1]), '_negate', []))}), core.int._check(lengthInDays), title);
  }).prototype = material_datepicker__range.LastNDaysToTodayRange.prototype;
  dart.addTypeTests(material_datepicker__range.LastNDaysToTodayRange);
  const title$0 = Symbol("LastNDaysToTodayRange.title");
  material_datepicker__range.LastNDaysToTodayRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.LastNDaysToTodayRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.LastNDaysToTodayRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range.LastNDaysToTodayRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.LastNDaysToTodayRange.__proto__),
    start: model__date__date.Date,
    end: model__date__date.Date,
    next: material_datepicker__range.DatepickerDateRange,
    prev: material_datepicker__range.DatepickerDateRange,
    isPredefined: core.bool,
    isAllTime: core.bool,
    lengthInDays: core.int
  }));
  dart.setFieldSignature(material_datepicker__range.LastNDaysToTodayRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.LastNDaysToTodayRange.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_lengthInDays]: dart.finalFieldType(core.int),
    title: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(material_datepicker__range.LastNDaysToTodayRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.LastNDaysToTodayRange, ['hashCode']);
  const _startWeekday = Symbol('_startWeekday');
  let const$3;
  let const$4;
  material_datepicker__range.WeekRange = class WeekRange extends core.Object {
    static _weekStart(date, startWeekday) {
      return date.add({days: -(dart.notNull(date.weekday) - dart.notNull(startWeekday))[$modulo](7)});
    }
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get start() {
      return this[_start];
    }
    get end() {
      return this[_start].add({days: 6});
    }
    get next() {
      return new material_datepicker__range.WeekRange.new(this[_start].add({days: 7}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.WeekRange.new(this[_start].add({days: -7}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let result = material_datepicker__range._makeProtoBuf(this);
      result.weeksAgo = this[_ago];
      if (this[_startWeekday] != null) {
        result.startWeekday = this[_startWeekday];
      }
      return result;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _defaultTitle(weeksAgo) {
      return core.String._check(dart.notNull(weeksAgo) > 0 ? material_datepicker__range.WeekRange._weeksAgoMsg(weeksAgo) : material_datepicker__range.WeekRange._weeksFromNowMsg(-dart.notNull(weeksAgo)));
    }
    static _weeksAgoMsg(weeksAgo) {
      return intl$.Intl.plural(core.int._check(weeksAgo), {zero: "This week", one: "Last week", other: dart.str(weeksAgo) + " weeks ago", name: "_weeksAgoMsg", args: [weeksAgo], desc: "A date range spanning a single week in the past.", examples: const$3 || (const$3 = dart.constMap(core.String, dart.dynamic, ["weeksAgo", 2]))});
    }
    static _weeksFromNowMsg(weeksFromNow) {
      return intl$.Intl.plural(core.int._check(weeksFromNow), {zero: "This week", one: "Next week", other: dart.str(weeksFromNow) + " weeks from now", name: "_weeksFromNowMsg", args: [weeksFromNow], desc: "A date range spanning a single week in the future.", examples: const$4 || (const$4 = dart.constMap(core.String, dart.dynamic, ["weeksFromNow", 2]))});
    }
  };
  (material_datepicker__range.WeekRange.new = function(start, ago, titleFunction, startWeekday) {
    if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.WeekRange._defaultTitle, intToString());
    if (startWeekday === void 0) startWeekday = null;
    this[_start] = start;
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
    this[_startWeekday] = startWeekday;
  }).prototype = material_datepicker__range.WeekRange.prototype;
  (material_datepicker__range.WeekRange.weeksAgo = function(clock, ago, opts) {
    let titleFunction = opts && 'titleFunction' in opts ? opts.titleFunction : dart.fn(material_datepicker__range.WeekRange._defaultTitle, intToString());
    let startWeekday = opts && 'startWeekday' in opts ? opts.startWeekday : null;
    material_datepicker__range.WeekRange.new.call(this, material_datepicker__range.WeekRange._weekStart(model__date__date.Date.today(time$.Clock._check(clock)), (() => {
      let l = startWeekday;
      return l != null ? l : dart.notNull(new intl$.DateFormat.new().dateSymbols.FIRSTDAYOFWEEK) + 1;
    })()).add({days: dart.asInt(-7 * dart.notNull(core.num._check(ago)))}), core.int._check(ago), titleFunction, startWeekday);
  }).prototype = material_datepicker__range.WeekRange.prototype;
  dart.addTypeTests(material_datepicker__range.WeekRange);
  material_datepicker__range.WeekRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.WeekRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.WeekRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range.WeekRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.WeekRange.__proto__),
    title: core.String,
    start: model__date__date.Date,
    end: model__date__date.Date,
    next: material_datepicker__range.DatepickerDateRange,
    prev: material_datepicker__range.DatepickerDateRange,
    isPredefined: core.bool,
    isAllTime: core.bool,
    ago: core.int
  }));
  dart.setFieldSignature(material_datepicker__range.WeekRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.WeekRange.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_startWeekday]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.WeekRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.WeekRange, ['hashCode']);
  let const$5;
  let const$6;
  material_datepicker__range.MonthRange = class MonthRange extends core.Object {
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get start() {
      return this[_start];
    }
    get end() {
      return this[_start].add({months: 1, days: -1});
    }
    get next() {
      return new material_datepicker__range.MonthRange.new(this[_start].add({months: 1}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.MonthRange.new(this[_start].add({months: -1}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.monthsAgo = this[_ago];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _defaultTitle(monthsAgo) {
      return core.String._check(dart.notNull(monthsAgo) > 0 ? material_datepicker__range.MonthRange._monthsAgoMsg(monthsAgo) : material_datepicker__range.MonthRange._monthsFromNowMsg(-dart.notNull(monthsAgo)));
    }
    static _monthsAgoMsg(monthsAgo) {
      return intl$.Intl.plural(core.int._check(monthsAgo), {zero: "This month", one: "Last month", other: dart.str(monthsAgo) + " months ago", name: "_monthsAgoMsg", args: [monthsAgo], desc: "A date range spanning a single month in the past.", examples: const$5 || (const$5 = dart.constMap(core.String, dart.dynamic, ["monthsAgo", 2]))});
    }
    static _monthsFromNowMsg(monthsFromNow) {
      return intl$.Intl.plural(core.int._check(monthsFromNow), {zero: "This month", one: "Next month", other: dart.str(monthsFromNow) + " months from now", name: "_monthsFromNowMsg", args: [monthsFromNow], desc: "A date range spanning a single month in the future.", examples: const$6 || (const$6 = dart.constMap(core.String, dart.dynamic, ["monthsFromNow", 2]))});
    }
  };
  (material_datepicker__range.MonthRange.new = function(start, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.MonthRange._defaultTitle, intToString());
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
    this[_start] = new model__date__date.Date.new(start.year, start.month, 1);
  }).prototype = material_datepicker__range.MonthRange.prototype;
  (material_datepicker__range.MonthRange.monthsAgo = function(clock, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.MonthRange._defaultTitle, intToString());
    material_datepicker__range.MonthRange._monthsAgo.call(this, model__date__date.Date.today(clock), ago, titleFunction);
  }).prototype = material_datepicker__range.MonthRange.prototype;
  (material_datepicker__range.MonthRange._monthsAgo = function(today, ago, titleFunction) {
    material_datepicker__range.MonthRange.new.call(this, new model__date__date.Date.new(today.year, dart.notNull(today.month) - dart.notNull(ago), 1), ago, titleFunction);
  }).prototype = material_datepicker__range.MonthRange.prototype;
  dart.addTypeTests(material_datepicker__range.MonthRange);
  material_datepicker__range.MonthRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.MonthRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.MonthRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range.MonthRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.MonthRange.__proto__),
    title: core.String,
    start: model__date__date.Date,
    end: model__date__date.Date,
    next: material_datepicker__range.DatepickerDateRange,
    prev: material_datepicker__range.DatepickerDateRange,
    isPredefined: core.bool,
    isAllTime: core.bool,
    ago: core.int
  }));
  dart.setFieldSignature(material_datepicker__range.MonthRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.MonthRange.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.MonthRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.MonthRange, ['hashCode']);
  const _theFirst = Symbol('_theFirst');
  let const$7;
  let const$8;
  material_datepicker__range.BroadcastMonthRange = class BroadcastMonthRange extends core.Object {
    static _weekStart(date) {
      return date.add({days: 1 - dart.notNull(date.weekday)});
    }
    static _weekEnd(date) {
      return date.add({days: 7 - dart.notNull(date.weekday)});
    }
    static monthsAgo(clock, ago, titleFunction) {
      if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.BroadcastMonthRange._defaultTitle, intToString());
      let today = model__date__date.Date.today(clock);
      let thisCalendarMonthTheFirst = new model__date__date.Date.new(today.year, today.month, 1);
      let nextCalendarMonthTheFirst = thisCalendarMonthTheFirst.add({months: 1});
      let theFirst = dart.test(nextCalendarMonthTheFirst.isAfter(material_datepicker__range.BroadcastMonthRange._weekEnd(today))) ? thisCalendarMonthTheFirst : nextCalendarMonthTheFirst;
      return new material_datepicker__range.BroadcastMonthRange.__(theFirst.add({months: -dart.notNull(ago)}), ago, titleFunction);
    }
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get start() {
      return material_datepicker__range.BroadcastMonthRange._weekStart(this[_theFirst]);
    }
    get end() {
      return material_datepicker__range.BroadcastMonthRange._weekStart(this[_theFirst].add({months: 1})).add({days: -1});
    }
    get next() {
      return new material_datepicker__range.BroadcastMonthRange.__(this[_theFirst].add({months: 1}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.BroadcastMonthRange.__(this[_theFirst].add({months: -1}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.broadcastMonthsAgo = this[_ago];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _defaultTitle(broadcastMonthsAgo) {
      return core.String._check(dart.notNull(broadcastMonthsAgo) > 0 ? material_datepicker__range.BroadcastMonthRange._broadcastMonthsAgoMsg(broadcastMonthsAgo) : material_datepicker__range.BroadcastMonthRange._broadcastMonthsFromNowMsg(-dart.notNull(broadcastMonthsAgo)));
    }
    static _broadcastMonthsAgoMsg(broadcastMonthsAgo) {
      return intl$.Intl.plural(core.int._check(broadcastMonthsAgo), {zero: "This broadcast month", one: "Last broadcast month", other: dart.str(broadcastMonthsAgo) + " broadcast months ago", name: "_broadcastMonthsAgoMsg", args: [broadcastMonthsAgo], desc: "A date range spanning a single broadcast month in the past.", examples: const$7 || (const$7 = dart.constMap(core.String, dart.dynamic, ["broadcastMonthsAgo", 2]))});
    }
    static _broadcastMonthsFromNowMsg(broadcastMonthsFromNow) {
      return intl$.Intl.plural(core.int._check(broadcastMonthsFromNow), {zero: "This broadcast month", one: "Next broadcast month", other: dart.str(broadcastMonthsFromNow) + " broadcast months from now", name: "_broadcastMonthsFromNowMsg", args: [broadcastMonthsFromNow], desc: "A date range spanning a single broadcast month in the future.", examples: const$8 || (const$8 = dart.constMap(core.String, dart.dynamic, ["broadcastMonthsFromNow", 2]))});
    }
  };
  (material_datepicker__range.BroadcastMonthRange.__ = function(theFirst, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.BroadcastMonthRange._defaultTitle, intToString());
    this[_theFirst] = theFirst;
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
  }).prototype = material_datepicker__range.BroadcastMonthRange.prototype;
  dart.addTypeTests(material_datepicker__range.BroadcastMonthRange);
  material_datepicker__range.BroadcastMonthRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.BroadcastMonthRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.BroadcastMonthRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range.BroadcastMonthRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.BroadcastMonthRange.__proto__),
    title: core.String,
    start: model__date__date.Date,
    end: model__date__date.Date,
    next: material_datepicker__range.DatepickerDateRange,
    prev: material_datepicker__range.DatepickerDateRange,
    isPredefined: core.bool,
    isAllTime: core.bool
  }));
  dart.setFieldSignature(material_datepicker__range.BroadcastMonthRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.BroadcastMonthRange.__proto__),
    [_theFirst]: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.BroadcastMonthRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.BroadcastMonthRange, ['hashCode']);
  let const$9;
  let const$10;
  material_datepicker__range.YearRange = class YearRange extends core.Object {
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get start() {
      return this[_start];
    }
    get end() {
      return new model__date__date.Date.new(this[_start].year, 12, 31);
    }
    get next() {
      return new material_datepicker__range.YearRange.new(this[_start].add({years: 1}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.YearRange.new(this[_start].add({years: -1}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.yearsAgo = this[_ago];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _defaultTitle(yearsAgo) {
      return core.String._check(dart.notNull(yearsAgo) > 0 ? material_datepicker__range.YearRange._yearsAgoMsg(yearsAgo) : material_datepicker__range.YearRange._yearsFromNowMsg(-dart.notNull(yearsAgo)));
    }
    static _yearsAgoMsg(yearsAgo) {
      return intl$.Intl.plural(core.int._check(yearsAgo), {zero: "This year", one: "Last year", other: dart.str(yearsAgo) + " years ago", name: "_yearsAgoMsg", args: [yearsAgo], desc: "A date range spanning a single year in the past.", examples: const$9 || (const$9 = dart.constMap(core.String, dart.dynamic, ["yearsAgo", 2]))});
    }
    static _yearsFromNowMsg(yearsFromNow) {
      return intl$.Intl.plural(core.int._check(yearsFromNow), {zero: "This year", one: "Next year", other: dart.str(yearsFromNow) + " years from now", name: "_yearsFromNowMsg", args: [yearsFromNow], desc: "A date range spanning a single year in the future.", examples: const$10 || (const$10 = dart.constMap(core.String, dart.dynamic, ["yearsFromNow", 2]))});
    }
  };
  (material_datepicker__range.YearRange.new = function(start, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.YearRange._defaultTitle, intToString());
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
    this[_start] = new model__date__date.Date.new(start.year, 1, 1);
  }).prototype = material_datepicker__range.YearRange.prototype;
  (material_datepicker__range.YearRange.yearsAgo = function(clock, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.YearRange._defaultTitle, intToString());
    material_datepicker__range.YearRange.new.call(this, model__date__date.Date.today(time$.Clock._check(clock)).add({years: core.int._check(dart.dsend(ago, '_negate', []))}), core.int._check(ago), titleFunction);
  }).prototype = material_datepicker__range.YearRange.prototype;
  dart.addTypeTests(material_datepicker__range.YearRange);
  material_datepicker__range.YearRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.YearRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.YearRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range.YearRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.YearRange.__proto__),
    title: core.String,
    start: model__date__date.Date,
    end: model__date__date.Date,
    next: material_datepicker__range.DatepickerDateRange,
    prev: material_datepicker__range.DatepickerDateRange,
    isPredefined: core.bool,
    isAllTime: core.bool,
    ago: core.int
  }));
  dart.setFieldSignature(material_datepicker__range.YearRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.YearRange.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.YearRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.YearRange, ['hashCode']);
  let const$11;
  let const$12;
  material_datepicker__range.QuarterRange = class QuarterRange extends core.Object {
    get start() {
      return this[start];
    }
    set start(value) {
      super.start = value;
    }
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get end() {
      return this.start.add({months: 3, days: -1});
    }
    get next() {
      return new material_datepicker__range.QuarterRange.new(this.start.add({months: 3}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.QuarterRange.new(this.start.add({months: -3}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.quartersAgo = this[_ago];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _getStartMonth(start) {
      return ((dart.notNull(start.month) - 1) / 3)[$truncate]() * 3 + 1;
    }
    static _defaultTitle(quartersAgo) {
      return core.String._check(dart.notNull(quartersAgo) > 0 ? material_datepicker__range.QuarterRange._quartersAgoMsg(quartersAgo) : material_datepicker__range.QuarterRange._quartersFromNowMsg(-dart.notNull(quartersAgo)));
    }
    static _quartersAgoMsg(quartersAgo) {
      return intl$.Intl.plural(core.int._check(quartersAgo), {zero: "This quarter", one: "Last quarter", other: dart.str(quartersAgo) + " quarters ago", name: "_quartersAgoMsg", args: [quartersAgo], desc: "A date range spanning a single quarter in the past.", examples: const$11 || (const$11 = dart.constMap(core.String, dart.dynamic, ["quartersAgo", 2]))});
    }
    static _quartersFromNowMsg(quartersFromNow) {
      return intl$.Intl.plural(core.int._check(quartersFromNow), {zero: "This quarter", one: "Next quarter", other: dart.str(quartersFromNow) + " quarters from now", name: "_quartersFromNowMsg", args: [quartersFromNow], desc: "A date range spanning a single quarter in the future.", examples: const$12 || (const$12 = dart.constMap(core.String, dart.dynamic, ["quartersFromNow", 2]))});
    }
  };
  (material_datepicker__range.QuarterRange.new = function(startDate, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.QuarterRange._defaultTitle, intToString());
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
    this[start] = new model__date__date.Date.new(startDate.year, material_datepicker__range.QuarterRange._getStartMonth(startDate), 1);
  }).prototype = material_datepicker__range.QuarterRange.prototype;
  (material_datepicker__range.QuarterRange.quartersAgo = function(clock, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.fn(material_datepicker__range.QuarterRange._defaultTitle, intToString());
    material_datepicker__range.QuarterRange._quartersAgo.call(this, model__date__date.Date.today(clock), ago, titleFunction);
  }).prototype = material_datepicker__range.QuarterRange.prototype;
  (material_datepicker__range.QuarterRange._quartersAgo = function(today, ago, titleFunction) {
    material_datepicker__range.QuarterRange.new.call(this, new model__date__date.Date.new(today.year, dart.notNull(today.month) - dart.notNull(ago) * 3, 1), ago, titleFunction);
  }).prototype = material_datepicker__range.QuarterRange.prototype;
  dart.addTypeTests(material_datepicker__range.QuarterRange);
  const start = Symbol("QuarterRange.start");
  material_datepicker__range.QuarterRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.QuarterRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.QuarterRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range.QuarterRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.QuarterRange.__proto__),
    title: core.String,
    end: model__date__date.Date,
    next: material_datepicker__range.DatepickerDateRange,
    prev: material_datepicker__range.DatepickerDateRange,
    isPredefined: core.bool,
    isAllTime: core.bool,
    ago: core.int
  }));
  dart.setFieldSignature(material_datepicker__range.QuarterRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.QuarterRange.__proto__),
    start: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.QuarterRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.QuarterRange, ['hashCode']);
  material_datepicker__range.today = function(clock) {
    return new material_datepicker__range.SingleDayRange.daysAgo(clock, 0);
  };
  material_datepicker__range.yesterday = function(clock) {
    return new material_datepicker__range.SingleDayRange.daysAgo(clock, 1);
  };
  material_datepicker__range.thisWeek = function(clock) {
    return new material_datepicker__range.WeekRange.weeksAgo(clock, 0);
  };
  material_datepicker__range.lastWeek = function(clock) {
    return new material_datepicker__range.WeekRange.weeksAgo(clock, 1);
  };
  material_datepicker__range.last7Days = function(clock) {
    return new material_datepicker__range.LastNDaysRange.beforeToday(clock, 7);
  };
  material_datepicker__range.last14Days = function(clock) {
    return new material_datepicker__range.LastNDaysRange.beforeToday(clock, 14);
  };
  material_datepicker__range.thisMonth = function(clock) {
    return new material_datepicker__range.MonthRange.monthsAgo(clock, 0);
  };
  material_datepicker__range.lastMonth = function(clock) {
    return new material_datepicker__range.MonthRange.monthsAgo(clock, 1);
  };
  material_datepicker__range.thisBroadcastMonth = function(clock) {
    return material_datepicker__range.BroadcastMonthRange.monthsAgo(clock, 0);
  };
  material_datepicker__range.lastBroadcastMonth = function(clock) {
    return material_datepicker__range.BroadcastMonthRange.monthsAgo(clock, 1);
  };
  material_datepicker__range.last30Days = function(clock) {
    return new material_datepicker__range.LastNDaysRange.beforeToday(clock, 30);
  };
  material_datepicker__range.thisYear = function(clock) {
    return new material_datepicker__range.YearRange.yearsAgo(clock, 0);
  };
  material_datepicker__range.lastYear = function(clock) {
    return new material_datepicker__range.YearRange.yearsAgo(clock, 1);
  };
  material_datepicker__range.thisQuarter = function(clock) {
    return new material_datepicker__range.QuarterRange.quartersAgo(clock, 0);
  };
  material_datepicker__range.lastQuarter = function(clock) {
    return new material_datepicker__range.QuarterRange.quartersAgo(clock, 1);
  };
  dart.defineLazy(material_datepicker__range, {
    /*material_datepicker__range.allTime*/get allTime() {
      return material_datepicker__range.DatepickerDateRange.new(core.String._check(material_datepicker__range._allTimeMsg), null, null, {isPredefined: true, isAllTime: true});
    },
    set allTime(_) {}
  });
  material_datepicker__range.commonRanges = function(clock) {
    return JSArrayOfDatepickerDateRange().of([material_datepicker__range.today(clock), material_datepicker__range.yesterday(clock), material_datepicker__range.thisWeek(clock), material_datepicker__range.lastWeek(clock), material_datepicker__range.thisMonth(clock), material_datepicker__range.lastMonth(clock), material_datepicker__range.allTime]);
  };
  dart.defineLazy(material_datepicker__range, {
    /*material_datepicker__range._customDateRangeMsg*/get _customDateRangeMsg() {
      return intl$.Intl.message("Custom", {name: "_customDateRangeMsg", meaning: "Name of a date range", desc: "Name of a user-specified date range, as opposed to a predefined " + "date range like \"Last 7 days\""});
    }
  });
  dart.copyProperties(material_datepicker__range, {
    get _allTimeMsg() {
      return intl$.Intl.message("All time", {name: "_allTimeMsg", desc: "A date range containing the entire lifetime of the account."});
    }
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/range.ddc", {
    "package:angular_components/material_datepicker/range.dart": material_datepicker__range
  }, '{"version":3,"sourceRoot":"","sources":["range.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;sDAgBI,CAAqB,EAAE,EAAwB;AACjD,QAAI,CAAC,IAAI,QAAQ,CAAC,MAAM,IAAI,QAAQ,CAAC,IAAI,IAAI,MAAM;AACjD,YAAO;;AAET,UAAO,GAAE;EACX;qDAEiC,CAAqB;UAAK,yCAAa,CACpE,CAAC,EACD,cAAM,qDAA0B,CAC5B,CAAC,IAAI,IAAI,QAAO,KAAI,CAAC,IAAI,IAAI,QAAO,6BAAW,CAAC,CAAC,MAAM,EAAE,CAAC,IAAI;EAAI;qDACzC,CAAqB;UAAK,yCAAa,CACpE,CAAC,EACD,cAAM,qDAA0B,CAC5B,CAAC,MAAM,IAAI,QAAO,cAAC,6BAAW,CAAC,CAAC,MAAM,EAAE,CAAC,IAAI,MAC7C,CAAC,MAAM,IAAI,QAAO,CAAC;EAAI;;;eA+DD,KAAY,EAAE,KAAU,EAAE,GAAQ;UAC7C,4CAAO,4FAAY;UACpB,4CAAO,4FAAY;UACtB,oEAAe;UACf,2DAAY;AAAQ,iBAC7B,8CAAe,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,IAAI,EAAE,IAAI,EAAE,YAAY,EAAE,SAAS;IAAC;kBAIxC,KAAU,EAAE,GAAQ;AAAE,YACrD,mDAAmB,CAAC,8CAAmB,EAAE,KAAK,EAAE,GAAG;IAAC;wBAIpD,KAAW,EAAE,EAA4B;AAAE,AAC7C,oBAAI,EAAE,gBAAgB,KAAI;AACxB,cAAO,mCAAO;YACT,eAAI,EAAE,WAAW,KAAI;AAC1B,mBAAO,iDAAsB,CAAC,KAAK,EAAE,EAAE,QAAQ;YAC1C,eAAI,EAAE,aAAa,KAAI;AAC5B,mBAAO,qDAA0B,CAAC,KAAK,EAAE,EAAE,UAAU;YAChD,eAAI,EAAE,oBAAoB,KAAI;AACnC,mBAAO,4DAAiC,CAAC,KAAK,EAAE,EAAE,iBAAiB;YAC9D,eAAI,EAAE,YAAY,KAAI;AAC3B,sBAAI,EAAE,gBAAgB,KAAI;AACxB,qBAAO,6CAAkB,CAAC,KAAK,EAAE,EAAE,SAAS,iBAC1B,EAAE,aAAa;eAC5B;AACL,qBAAO,6CAAkB,CAAC,KAAK,EAAE,EAAE,SAAS;;YAEzC,eAAI,EAAE,aAAa,KAAI;AAC5B,mBAAO,+CAAoB,CAAC,KAAK,EAAE,EAAE,UAAU;YAC1C,eAAI,EAAE,sBAAsB,KAAI;AACrC,cAAO,yDAA6B,CAAC,KAAK,EAAE,EAAE,mBAAmB;YAC5D,eAAI,EAAE,YAAY,KAAI;AAC3B,mBAAO,6CAAkB,CAAC,KAAK,EAAE,EAAE,SAAS;;AAG9C,YAAO,sDAA0B,CAC7B,yCAAc,CAAC,EAAE,UAAU,MAAM,GAAG,yCAAc,CAAC,EAAE,UAAU,IAAI;IACzE;;;;;;+CAGyB,KAAyB;QAAQ;QAAU;AACpE,QAAI,GAAG,IAAI,QAAQ,GAAG,IAAI,MAAM,eAAO,AAAI,GAAD,OAAI,GAAG;AACjD,SAAK,GAAG,IAAI,QAAQ,KAAK,IAAI,IAAI,kBAAQ,AAAI,GAAD,OAAI,KAAK,IAAI,QACpD,GAAG,IAAI,QAAQ,KAAK,MAAM,IAAI,kBAAQ,AAAI,GAAD,OAAI,KAAK,MAAM,KAAG;AAC9D,iBAAO,gDAAiB,CAAC,KAAK,QAAO,GAAG,OAAO,GAAG;;AAEpD,UAAO;EACT;mDAEgB,KAAyB,EAAE,CAAC;UACvC,AAA4B,MAAvB,IAAI,QAAQ,CAAC,IAAI,0DACtB,KAAK,uDACF,CAAC,KACD,KAAK,MAAM,IAAI,CAAC,MAAM,gBACtB,KAAK,MAAM,EAAI,CAAC,MAAM,iBACtB,KAAK,IAAI,EAAI,CAAC,IAAI;EAAC;kDAEb,KAAyB;UACnC,EAAqB,AAAuB,cAA5C,KAAK,MAAM,+BAAY,KAAK,MAAM,gCAAY,KAAK,IAAI;EAAS;qDAEhD,KAAyB;UACzC,UAAG,KAAK,MAAM,oBAAK,KAAK,MAAM,qBAAM,KAAK,IAAI;EAAG;oDAE9B,KAAyB;eAC3C,+BAAS,CAAC,KAAK,MAAM,EAAE,KAAK,IAAI;EAAC;sDAEG,KAAyB;qBAC7D,KAAK,UAAU;kBACR,mEAAyB;uBAAmB;;;kBAC5C,mEAAyB;iFACZ,8CAAmB,CAAC,KAAK,MAAM,EAAE,KAAK,IAAI;;;EAAE;4DAEhD,KAAU,EAAE,GAAQ;gBAAK,yDAAe;cAChD,yCAAc,CAAC,KAAK;YACtB,yCAAc,CAAC,GAAG;;EAAC;uDAEC,IAAS;gBAAK,8CAAc;aAC/C,IAAI,KAAK;cACR,IAAI,MAAM;YACZ,IAAI,IAAI;;;uDAEE,IAAmB;eACnC,0BAAI,CAAC,IAAI,KAAK,EAAE,IAAI,MAAM,EAAE,IAAI,IAAI;EAAC;;;;;;YAmBnB,gBAAS,MAAM;;;YAEV,gBAAS,aAAa;;;YAEzB,gBAAS,UAAU;;;AAIvC,UAAM,OAAO,eAAS,MAAM;AAC5B,YAAO,AAAC,KAAI,IAAI,QAAS,UAAI,IAAI,kBAAQ,AAAK,UAAD,MAAG,IAAI,KAAK,UAAI,GAAG,IAAI;IACtE;;AAIE,UAAM,OAAO,eAAS,IAAI;AAC1B,YAAO,AAAC,KAAI,IAAI,QAAS,UAAI,IAAI,kBAAQ,AAAK,UAAD,MAAG,IAAI,KAAK,UAAI,GAAG,IAAI;IACtE;;AAIE,UAAI,UAAI,IAAI,QAAQ,eAAS,IAAI,IAAI,kBAAQ,AAAc,eAAL,IAAI,MAAG,UAAI,IAAE;AACjE,cAAO;;AAET,cAAO,eAAS,KAAK;8CAAa,UAAI,OAAO,UAAI;IACnD;;AAIE,UAAI,UAAI,IAAI,QAAQ,eAAS,MAAM,IAAI,kBAAQ,AAAgB,eAAP,MAAM,MAAG,UAAI,IAAE;AACrE,cAAO;;AAET,cAAO,eAAS,KAAK;8CAAa,UAAI,OAAO,UAAI;IACnD;;UAGgC;UAAU;YACtC,kCAAM,CAAC,YAAW,GAAG,OAAO,GAAG;IAAC;;YAGD,gBAAS;;;YAGhB,uCAAW,CAAC;IAAK;;cAMzC,eAAS,WAAW;iFAAgB,8CAAmB,CAAC,UAAK,EAAE,QAAG;;IAAC;YAEtD,CAAC;UAAD,CAAC;YAGC,WAFf,qCAAU,CAAC,MAAM,CAAC,sDACjB,CAAC,iBACF,UAAI,EAAI,CAAC,MAAK,iBACd,UAAI,EAAI,CAAC,MAAK;;;YACE,EAAgB,AAAgB,aAAhC,oCAAS,CAAC,oCAAQ,UAAI,gCAAY,UAAI;IAAS;;YAC9C,UAAG,uCAAY,CAAC,iCAAiB,UAAI,qBAAI,UAAI;IAAE;;;QA7D5B;QAAU;IAA3B,eAAS;IAC1B,UAAI,GAAG,GAAG;IACV,UAAI,GAAG,GAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YAiFgB,YAAK,CAAC;IAAK;;YACX,YAAK,CAAC;IAAK;;UAEX;UAAU;YACtC,kCAAM,CAAC,YAAW,GAAG,OAAO,GAAG;IAAC;;YACD;IAAI;;YACX,uCAAW,CAAC;IAAK;;YACH,yCAAa,CAAC;IAAK;YAE5C,CAAC;UAAD,CAAC;YAAK,sCAAU,CAAC,MAAM,CAAC;IAAC;;YACtB,qCAAS,CAAC;IAAK;;YACd,wCAAY,CAAC;IAAK;;6DAdvB,KAAU,EAAE,KAAU,EAAE,GAAQ,cAC5C,YAAiB,EAAE,SAAc;IADhB,UAAK,GAAL,KAAK;IAAO,UAAK,GAAL,KAAK;IAAO,QAAG,GAAH,GAAG;IAAO,WAAK;IAAO,WAAK;IAC/D,iBAAY,GAAZ,YAAY;IAAO,cAAS,GAAT,SAAS;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YA8BlB,qBAAc,CAAC,UAAI;IAAC;;YACtB,YAAK;;;YACP,YAAK;;;iBAEjB,6CAAc,CAAC,WAAK,IAAI,QAAO,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;iBAE5D,6CAAc,CAAC,WAAK,IAAI,QAAO,CAAC,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;YACxC;IAAI;;YACP;IAAK;;YAGZ,WAAI;;;UAEa;UAAU;YACtC,kCAAM,CAAC,YAAW,GAAG,OAAO,GAAG;IAAC;;YACD;IAAI;;YACX,uCAAW,CAAC;IAAK;;cACH,wCAAa,CAAC;kBAAiB,UAAI;;;YAE5D,CAAC;UAAD,CAAC;YAAK,sCAAU,CAAC,MAAM,CAAC;IAAC;;YACtB,qCAAS,CAAC;IAAK;;YACd,wCAAY,CAAC;IAAK;yBAEX,OAAW;gCACnC,AAAQ,aAAR,OAAO,IAAG,IAAI,qDAAW,CAAC,OAAO,IAAI,yDAAe,CAAC,cAAC,OAAO;IAAC;uBAE/C,OAAO;YAAK,WAAI,OAAO,iBAAC,OAAO,UACxC,cACD,oBACE,SAAE,OAAO,uBACV,qBACA,CAAC,OAAO,SACR,2DACF,kCACM,8DAAO,WAAW;IAAG;2BAEZ,WAAW;YAAK,WAAI,OAAO,iBAAC,WAAW,UACpD,cACD,mBACE,SAAE,WAAW,4BACd,yBACA,CAAC,WAAW,SACZ,2DACF,oCACM,gEAAO,eAAe;IAAG;;;kDAhDsB,+EAAa;IAAtD,WAAK;IAAO,UAAI;IAAQ,oBAAc;EAAkB;gEACrD,KAAK,EAAE,GAAG,EAAG,aAAwC;kCAA7B,gBAAgB,+EAAa;6DACjE,4BAAU,oBAAC,KAAK,MAAK,wBAAO,WAAC,GAAG,qCAAG,GAAG,GAAE,aAAa;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwDpD;;;;;;;YAMK,aAAM;;;YACR,aAAM,IAAI,QAAqB,aAAd,mBAAa,IAAG;IAAE;;YACnB,wCAAY,CAAC;IAAK;;YAClB,wCAAY,CAAC;IAAK;;YACzB;IAAI;;YACP;IAAK;;YAGH,oBAAa;;;UAEL;UAAU;YACtC,kCAAM,CAAC,YAAW,GAAG,OAAO,GAAG;IAAC;;YACD;IAAI;;YACX,uCAAW,CAAC;IAAK;;cAEzC,wCAAa,CAAC;oBAAmB,mBAAa;;;YAEjC,CAAC;UAAD,CAAC;YAAK,sCAAU,CAAC,MAAM,CAAC;IAAC;;YACtB,qCAAS,CAAC;IAAK;;YACd,wCAAY,CAAC;IAAK;yBAElB,YAAY;YAAK,WAAI,OAAO,iBAAC,YAAY,SACrD,oBACE,mBAAO,YAAY,mBACpB,uBACA,CAAC,YAAY,SACb,6DACF,kCACM,gEAAO,gBAAgB;IAAG;;mEAjCZ,YAAgB,EAAG,KAAY;0BAAL;IAAlC,YAAM;IACpB,YAAK;cAAG,KAAK;6BAAI,uDAAa,CAAC,YAAY;;IAC3C,mBAAa,GAAG,YAAY;;oEACP,KAAK,EAAE,YAAY,EAAG,KAAY;0BAAL;6DAC7C,4BAAU,oBAAC,KAAK,MAAK,wBAAO,WAAC,YAAY,qCAAG,YAAY,GAAE,KAAK;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuC9D;;;;;;;YAOK,aAAM;;;YACR,aAAM,IAAI,QAAqB,aAAd,mBAAa,IAAG;IAAE;;YACnB,wCAAY,CAAC;IAAK;;YAClB,wCAAY,CAAC;IAAK;;YACzB;IAAI;;YACP;IAAK;;YAGH,oBAAa;;;UAEL;UAAU;YACtC,kCAAM,CAAC,YAAW,GAAG,OAAO,GAAG;IAAC;;YACD;IAAI;;YACX,uCAAW,CAAC;IAAK;;cAEzC,wCAAa,CAAC;2BAA0B,mBAAa;;;YAExC,CAAC;UAAD,CAAC;YAAK,sCAAU,CAAC,MAAM,CAAC;IAAC;;YACtB,qCAAS,CAAC;IAAK;;YACd,wCAAY,CAAC;IAAK;gCAEX,YAAY;YAAK,WAAI,OAAO,iBAAC,YAAY,SAC5D,gBACE,SAAE,YAAY,4BACf,8BACA,CAAC,YAAY,SACb,6DACF,2BACM,gEAAO,gBAAgB;IAAG;;0EAlCL,YAAgB,EAAG,KAAY;0BAAL;IAAlC,YAAM;IAC3B,aAAK;cAAG,KAAK;6BAAI,qEAAoB,CAAC,YAAY;;IAClD,mBAAa,GAAG,YAAY;;2EACA,KAAK,EAAE,YAAY,EAAG,KAAY;0BAAL;oEACpD,4BAAU,oBAAC,KAAK,MAAK,wBAAO,WAAe,WAAb,YAAY,QAAG,wCAAK,YAAY,GAC/D,KAAK;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBAkCO,IAAS,EAAE,YAAgB;AAChD,YAAO,KAAI,IAAI,QAAO,CAAgC,CAAhB,aAAb,IAAI,QAAQ,iBAAG,YAAY,YAAI;IAC1D;;YA4BoB,qBAAc,CAAC,UAAI;IAAC;;YACtB,aAAM;;;YACR,aAAM,IAAI,QAAO;IAAE;;iBAE/B,wCAAS,CAAC,YAAM,IAAI,QAAO,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;iBAExD,wCAAS,CAAC,YAAM,IAAI,QAAO,CAAC,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;YACpC;IAAI;;YACP;IAAK;;YAGZ,WAAI;;;UAEa;UAAU;YACtC,kCAAM,CAAC,YAAW,GAAG,OAAO,GAAG;IAAC;;YACD;IAAI;;YACX,uCAAW,CAAC;IAAK;;AAG3C,UAAI,SAAS,wCAAa,CAAC;MAAvB,kBAAyC,UAAI;AACjD,UAAI,mBAAa,IAAI,MAAM;AACzB,cAAM,aAAa,GAAG,mBAAa;;AAErC,YAAO,OAAM;IACf;YAEiB,CAAC;UAAD,CAAC;YAAK,sCAAU,CAAC,MAAM,CAAC;IAAC;;YACtB,qCAAS,CAAC;IAAK;;YACd,wCAAY,CAAC;IAAK;yBAEX,QAAY;gCACpC,AAAS,aAAT,QAAQ,IAAG,IAAI,iDAAY,CAAC,QAAQ,IAAI,qDAAgB,CAAC,cAAC,QAAQ;IAAC;wBAEnD,QAAQ;YAAK,WAAI,OAAO,iBAAC,QAAQ,UAC3C,kBACD,oBACE,SAAE,QAAQ,wBACX,sBACA,CAAC,QAAQ,SACT,8DACI,gEAAO,YAAY;IAAG;4BAEZ,YAAY;YAAK,WAAI,OAAO,iBAAC,YAAY,UACvD,kBACD,oBACE,SAAE,YAAY,6BACf,0BACA,CAAC,YAAY,SACb,gEACI,gEAAO,gBAAgB;IAAG;;;kDAtEb,0EAAa;;IADzB,YAAM;IAAO,UAAI;IACtB,oBAAc;IAAuB,mBAAa;EAAE;4DAS3C,KAAK,EAAE,GAAG;QACb,uEAAgB,0EAAa;QAAM;wDAEzC,+CAAU,CACF,4BAAU,oBAAC,KAAK;cAChB,YAAY;6BACiC,iBAAxC,oBAAU,cAAc,eAAe,IAAG;aAC/C,QAAO,WAAA,AAAG,CAAF,iCAAI,GAAG,uBACvB,GAAG,GACH,aAAa,EACb,YAAY;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YA+EH,qBAAc,CAAC,UAAI;IAAC;;YACtB,aAAM;;;YACR,aAAM,IAAI,UAAS,SAAS,CAAC;IAAE;;iBAE3C,yCAAU,CAAC,YAAM,IAAI,UAAS,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;iBAE3D,yCAAU,CAAC,YAAM,IAAI,UAAS,CAAC,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;YACvC;IAAI;;YACP;IAAK;;YAGZ,WAAI;;;UAEa;UAAU;YACtC,kCAAM,CAAC,YAAW,GAAG,OAAO,GAAG;IAAC;;YACD;IAAI;;YACX,uCAAW,CAAC;IAAK;;cAEzC,wCAAa,CAAC;oBAAmB,UAAI;;;YAExB,CAAC;UAAD,CAAC;YAAK,sCAAU,CAAC,MAAM,CAAC;IAAC;;YACtB,qCAAS,CAAC;IAAK;;YACd,wCAAY,CAAC;IAAK;yBAEX,SAAa;gCACrC,AAAU,aAAV,SAAS,IAAG,IAAI,mDAAa,CAAC,SAAS,IAAI,uDAAiB,CAAC,cAAC,SAAS;IAAC;yBAEvD,SAAS;YAAK,WAAI,OAAO,iBAAC,SAAS,UAC9C,mBACD,qBACE,SAAE,SAAS,yBACZ,uBACA,CAAC,SAAS,SACV,+DACI,gEAAO,aAAa;IAAG;6BAEZ,aAAa;YAAK,WAAI,OAAO,iBAAC,aAAa,UAC1D,mBACD,qBACE,SAAE,aAAa,8BAChB,2BACA,CAAC,aAAa,SACd,iEACI,gEAAO,iBAAiB;IAAG;;wDA5D9B,KAAU;kDAAoC,2EAAa;IAA1C,UAAI;IAAQ,oBAAc;IAChD,YAAM,OAAG,0BAAI,CAAC,KAAK,KAAK,EAAE,KAAK,MAAM,EAAE;EAAE;8DAE1B,KAAW,EAAE,GAAO,EACpC,aAAwC;kCAA7B,gBAAgB,2EAAa;gEACvB,4BAAU,CAAC,KAAK,GAAG,GAAG,EAAE,aAAa;EAAC;+DAEtC,KAAU,EAAE,GAAO,EAAE,aAAwB;6DAEzD,0BAAI,CACA,KAAK,KAAK,EAEE,aAAZ,KAAK,MAAM,iBAAG,GAAG,GACjB,IACJ,GAAG,EACH,aAAa;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBAoED,IAAS;YAAK,KAAI,IAAI,QAAO,AAAE,iBAAE,IAAI,QAAQ;IAAC;oBAIhD,IAAS;YAAK,KAAI,IAAI,QAAO,AAAE,iBAAE,IAAI,QAAQ;IAAC;qBAW7B,KAAW,EAAE,GAAO,EACrD,aAAwC;oCAA7B,gBAAgB,oFAAa;AAAG,AAC9C,UAAI,QAAQ,4BAAU,CAAC,KAAK;AAC5B,UAAI,gCAA4B,0BAAI,CAAC,KAAK,KAAK,EAAE,KAAK,MAAM,EAAE;AAC9D,UAAI,4BAA4B,yBAAyB,IAAI,UAAS;AAKtE,UAAI,qBAAW,yBAAyB,QAAQ,CAAC,uDAAQ,CAAC,KAAK,MACzD,yBAAyB,GACzB,yBAAyB;AAC/B,iBAAO,iDAAqB,CACxB,QAAQ,IAAI,UAAS,cAAC,GAAG,KAAG,GAAG,EAAE,aAAa;IACpD;;YAEoB,qBAAc,CAAC,UAAI;IAAC;;YACtB,0DAAU,CAAC,eAAS;IAAC;;YACvB,0DAAU,CAAC,eAAS,IAAI,UAAS,QAAO,QAAO,CAAC;IAAE;;iBAG9D,iDAAqB,CAAC,eAAS,IAAI,UAAS,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;iBAC7C,iDAAqB,CACjD,eAAS,IAAI,UAAS,CAAC,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;YAE/B;IAAI;;YACP;IAAK;;UAEK;UAAU;YACtC,kCAAM,CAAC,YAAW,GAAG,OAAO,GAAG;IAAC;;YACD;IAAI;;YACX,uCAAW,CAAC;IAAK;;cAEzC,wCAAa,CAAC;6BAA4B,UAAI;;;YAEjC,CAAC;UAAD,CAAC;YAAK,sCAAU,CAAC,MAAM,CAAC;IAAC;;YACtB,qCAAS,CAAC;IAAK;;YACd,wCAAY,CAAC;IAAK;yBAEX,kBAAsB;gCAAK,AAAmB,aAAnB,kBAAkB,IAAG,IACtE,qEAAsB,CAAC,kBAAkB,IACzC,yEAA0B,CAAC,cAAC,kBAAkB;IAAC;kCAEvB,kBAAkB;YAC5C,WAAI,OAAO,iBAAC,kBAAkB,UACpB,6BACD,+BACE,SAAE,kBAAkB,mCACrB,gCACA,CAAC,kBAAkB,SACnB,yEACI,gEAAO,sBAAsB;IAAG;sCAEhB,sBAAsB;YACpD,WAAI,OAAO,iBAAC,sBAAsB,UACxB,6BACD,+BACE,SAAE,sBAAsB,wCACzB,oCACA,CAAC,sBAAsB,SACvB,2EACI,gEAAO,0BAA0B;IAAG;;;kDA/D3B,oFAAa;IADb,eAAS;IAAO,UAAI;IACrC,oBAAc;EAAkB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YA4EtB,qBAAc,CAAC,UAAI;IAAC;;YACtB,aAAM;;;iBACR,0BAAI,CAAC,YAAM,KAAK,EAAE,IAAI;IAAG;;iBAErC,wCAAS,CAAC,YAAM,IAAI,SAAQ,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;iBAEzD,wCAAS,CAAC,YAAM,IAAI,SAAQ,CAAC,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;YACrC;IAAI;;YACP;IAAK;;YAGZ,WAAI;;;UAEa;UAAU;YACtC,kCAAM,CAAC,YAAW,GAAG,OAAO,GAAG;IAAC;;YACD;IAAI;;YACX,uCAAW,CAAC;IAAK;;cAEzC,wCAAa,CAAC;mBAAkB,UAAI;;;YAEvB,CAAC;UAAD,CAAC;YAAK,sCAAU,CAAC,MAAM,CAAC;IAAC;;YACtB,qCAAS,CAAC;IAAK;;YACd,wCAAY,CAAC;IAAK;yBAEX,QAAY;gCACpC,AAAS,aAAT,QAAQ,IAAG,IAAI,iDAAY,CAAC,QAAQ,IAAI,qDAAgB,CAAC,cAAC,QAAQ;IAAC;wBAEnD,QAAQ;YAAK,WAAI,OAAO,iBAAC,QAAQ,UAC3C,kBACD,oBACE,SAAE,QAAQ,wBACX,sBACA,CAAC,QAAQ,SACT,8DACI,gEAAO,YAAY;IAAG;4BAEZ,YAAY;YAAK,WAAI,OAAO,iBAAC,YAAY,UACvD,kBACD,oBACE,SAAE,YAAY,6BACf,0BACA,CAAC,YAAY,SACb,gEACI,kEAAO,gBAAgB;IAAG;;uDAhD9B,KAAU;kDAAoC,0EAAa;IAA1C,UAAI;IAAQ,oBAAc;IAC/C,YAAM,OAAG,0BAAI,CAAC,KAAK,KAAK,EAAE,GAAG;EAAE;4DAClB,KAAK,EAAE,GAAG,EAAG,aAAwC;kCAA7B,gBAAgB,0EAAa;wDAC7D,4BAAU,oBAAC,KAAK,MAAK,yBAAQ,WAAC,GAAG,qCAAG,GAAG,GAAE,aAAa;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsDvD;;;;;;;YAsBS,qBAAc,CAAC,UAAI;IAAC;;YAExB,WAAK,IAAI,UAAS,SAAS,CAAC;IAAE;;iBAG1C,2CAAY,CAAC,UAAK,IAAI,UAAS,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;iBAG5D,2CAAY,CAAC,UAAK,IAAI,UAAS,CAAC,KAAS,aAAL,UAAI,IAAG,GAAG,oBAAc;IAAC;;YAExC;IAAI;;YAEP;IAAK;;YAGZ,WAAI;;;UAGa;UAAU;YACtC,kCAAM,CAAC,YAAW,GAAG,OAAO,GAAG;IAAC;;YAED;IAAI;;YAEX,uCAAW,CAAC;IAAK;;cAGzC,wCAAa,CAAC;sBAAqB,UAAI;;;YAE1B,CAAC;UAAD,CAAC;YAAK,sCAAU,CAAC,MAAM,CAAC;IAAC;;YACtB,qCAAS,CAAC;IAAK;;YACd,wCAAY,CAAC;IAAK;0BAKb,KAAU;YAAwB,AAAM,AAAI,EA7yBxE,CA6yByD,aAAZ,KAAK,MAAM,IAAG,KAAM,kBAAK,IAAI;IAAC;yBAE7C,WAAe;gCAAK,AAAY,aAAZ,WAAW,IAAG,IACxD,uDAAe,CAAC,WAAW,IAC3B,2DAAmB,CAAC,cAAC,WAAW;IAAC;2BAEhB,WAAW;YAAK,WAAI,OAAO,iBAAC,WAAW,UACpD,qBACD,uBACE,SAAE,WAAW,2BACd,yBACA,CAAC,WAAW,SACZ,iEACI,kEAAO,eAAe;IAAG;+BAEZ,eAAe;YAAK,WAAI,OAAO,iBAAC,eAAe,UAChE,qBACD,uBACE,SAAE,eAAe,gCAClB,6BACA,CAAC,eAAe,SAChB,mEACI,kEAAO,mBAAmB;IAAG;;0DA3E9B,SAAc;kDAAoC,6EAAa;IAA1C,UAAI;IAAQ,oBAAc;IACtD,WAAK,OAAG,0BAAI,CAAC,SAAS,KAAK,EAAE,sDAAc,CAAC,SAAS,GAAG;EAAE;kEAEvC,KAAW,EAAE,GAAO,EACxC,aAAwC;kCAA7B,gBAAgB,6EAAa;oEACrB,4BAAU,CAAC,KAAK,GAAG,GAAG,EAAE,aAAa;EAAC;mEAEpC,KAAU,EAAE,GAAO,EAAE,aAAwB;+DAE7D,0BAAI,CACA,KAAK,KAAK,EAEE,aAAZ,KAAK,MAAM,IAAO,aAAJ,GAAG,IAAG,GACpB,IACJ,GAAG,EACH,aAAa;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8CAiEA,KAAW;eAAK,iDAAsB,CAAC,KAAK,EAAE;EAAE;kDAE5C,KAAW;eAAK,iDAAsB,CAAC,KAAK,EAAE;EAAE;iDAEjD,KAAW;eAAK,6CAAkB,CAAC,KAAK,EAAE;EAAE;iDAE5C,KAAW;eAAK,6CAAkB,CAAC,KAAK,EAAE;EAAE;kDAE3C,KAAW;eACrC,qDAA0B,CAAC,KAAK,EAAE;EAAE;mDAET,KAAW;eACtC,qDAA0B,CAAC,KAAK,EAAE;EAAG;kDAEX,KAAW;eAAK,+CAAoB,CAAC,KAAK,EAAE;EAAE;kDAE9C,KAAW;eAAK,+CAAoB,CAAC,KAAK,EAAE;EAAE;2DAErC,KAAW;UAC9C,yDAA6B,CAAC,KAAK,EAAE;EAAE;2DAEJ,KAAW;UAC9C,yDAA6B,CAAC,KAAK,EAAE;EAAE;mDAEZ,KAAW;eACtC,qDAA0B,CAAC,KAAK,EAAE;EAAG;iDAEZ,KAAW;eAAK,6CAAkB,CAAC,KAAK,EAAE;EAAE;iDAE5C,KAAW;eAAK,6CAAkB,CAAC,KAAK,EAAE;EAAE;oDAEzC,KAAW;eACvC,mDAAwB,CAAC,KAAK,EAAE;EAAE;oDAEN,KAAW;eACvC,mDAAwB,CAAC,KAAK,EAAE;EAAE;;MAOlB,kCAAO;YAAG,mDAAmB,oBAAC,sCAAW,GAAE,MAAM,qBACnD,iBAAiB;;;;qDAEI,KAAW;UAAK,oCACjD,gCAAK,CAAC,KAAK,GACX,oCAAS,CAAC,KAAK,GACf,mCAAQ,CAAC,KAAK,GACd,mCAAQ,CAAC,KAAK,GACd,oCAAS,CAAC,KAAK,GACf,oCAAS,CAAC,KAAK,GACf,kCAAO;EACR;;MAEC,8CAAmB;YAAG,WAAI,QAAQ,CAAC,iBAC/B,gCACG,8BACH,qEACF;;;;;YAEW,WAAI,QAAQ,CAAC,mBACtB,qBACA;IAA8D","file":"range.ddc.js"}');
  // Exports:
  return {
    material_datepicker__range: material_datepicker__range
  };
});

//# sourceMappingURL=range.ddc.js.map
