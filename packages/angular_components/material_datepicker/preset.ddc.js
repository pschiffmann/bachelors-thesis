define(['dart_sdk', 'packages/angular_components/material_datepicker/range', 'packages/intl/intl'], function(dart_sdk, range, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__range = range.material_datepicker__range;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const material_datepicker__preset = Object.create(_root);
  const $add = dartx.add;
  const $remainder = dartx.remainder;
  const $contains = dartx.contains;
  const $insert = dartx.insert;
  const $_get = dartx._get;
  let JSArrayOfDatepickerPreset = () => (JSArrayOfDatepickerPreset = dart.constFn(_interceptors.JSArray$(material_datepicker__preset.DatepickerPreset)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfDatepickerPreset = () => (ListOfDatepickerPreset = dart.constFn(core.List$(material_datepicker__preset.DatepickerPreset)))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  material_datepicker__preset.DatepickerPreset = class DatepickerPreset extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get range() {
      return this[range$];
    }
    set range(value) {
      super.range = value;
    }
    get shortTitle() {
      return this[shortTitle$];
    }
    set shortTitle(value) {
      super.shortTitle = value;
    }
    get alternatives() {
      return this[alternatives$];
    }
    set alternatives(value) {
      super.alternatives = value;
    }
    static fromRange(range) {
      return new material_datepicker__preset.DatepickerPreset.new(range.title, range);
    }
    static thisWeek(clock, opts) {
      let startWeekday = opts && 'startWeekday' in opts ? opts.startWeekday : null;
      let validStartWeekdays = opts && 'validStartWeekdays' in opts ? opts.validStartWeekdays : null;
      let t = startWeekday;
      t == null ? startWeekday = material_datepicker__preset.DatepickerPreset._defaultStartWeekday : t;
      validStartWeekdays = material_datepicker__preset.DatepickerPreset._initValidStartWeekdays(startWeekday, validStartWeekdays);
      let result = null;
      let alternatives = JSArrayOfDatepickerPreset().of([]);
      for (let startDay of validStartWeekdays) {
        let startDayName = material_datepicker__preset.DatepickerPreset._weekdayName(startDay);
        let preset = new material_datepicker__preset.DatepickerPreset.new(material_datepicker__preset.DatepickerPreset._thisWeekTitle(startDayName), new material_datepicker__range.WeekRange.weeksAgo(clock, 0, {startWeekday: startDay}), {shortTitle: material_datepicker__preset.DatepickerPreset._thisWeekShortTitle(startDayName), alternatives: alternatives});
        alternatives[$add](preset);
        if (startDay == startWeekday) result = preset;
      }
      return result;
    }
    static lastWeek(clock, opts) {
      let startWeekday = opts && 'startWeekday' in opts ? opts.startWeekday : null;
      let validStartWeekdays = opts && 'validStartWeekdays' in opts ? opts.validStartWeekdays : null;
      let t = startWeekday;
      t == null ? startWeekday = material_datepicker__preset.DatepickerPreset._defaultStartWeekday : t;
      validStartWeekdays = material_datepicker__preset.DatepickerPreset._initValidStartWeekdays(startWeekday, validStartWeekdays);
      let result = null;
      let alternatives = JSArrayOfDatepickerPreset().of([]);
      for (let startDay of validStartWeekdays) {
        let endDay = 1 + (dart.notNull(startDay) - 1 + 6)[$remainder](7);
        let startDayName = material_datepicker__preset.DatepickerPreset._weekdayName(startDay);
        let endDayName = material_datepicker__preset.DatepickerPreset._weekdayName(dart.asInt(endDay));
        let preset = new material_datepicker__preset.DatepickerPreset.new(material_datepicker__preset.DatepickerPreset._lastWeekTitle(startDayName, endDayName), new material_datepicker__range.WeekRange.weeksAgo(clock, 1, {startWeekday: startDay}), {shortTitle: material_datepicker__preset.DatepickerPreset._lastWeekShortTitle(startDayName, endDayName), alternatives: alternatives});
        alternatives[$add](preset);
        if (startDay == startWeekday) result = preset;
      }
      return result;
    }
    static get _defaultStartWeekday() {
      return 1 + dart.notNull(new intl$.DateFormat.new().dateSymbols.FIRSTDAYOFWEEK);
    }
    static _initValidStartWeekdays(startWeekday, validStartWeekdays) {
      let t = validStartWeekdays;
      t == null ? validStartWeekdays = ListOfint().from(material_datepicker__preset.DatepickerPreset._defaultValidStartWeekdays) : t;
      if (!dart.test(validStartWeekdays[$contains](startWeekday))) {
        validStartWeekdays[$insert](0, startWeekday);
      }
      return validStartWeekdays;
    }
    static _weekdayName(weekday) {
      return material_datepicker__preset.DatepickerPreset._weekdayNames[$_get](dart.asInt(weekday[$remainder](7)));
    }
    static _thisWeekTitle(startDayName) {
      return intl$.Intl.message("This week (" + dart.str(startDayName) + " – Today)", {name: "DatepickerPreset__thisWeekTitle", desc: "Label for a date range corresponding to \"this week\" starting " + "on a particular day of the week and ending today." + " [REL_NOTE: zjd/2017-12-31]", args: [startDayName], examples: const$ || (const$ = dart.constMap(core.String, dart.dynamic, ["startDayName", "Mon"]))});
    }
    static _thisWeekShortTitle(startDayName) {
      return intl$.Intl.message(dart.str(startDayName) + " – Today", {name: "DatepickerPreset__thisWeekShortTitle", desc: "Short label for a date range corresponding to \"this week\" " + "indicating which day of the week is the starting day of the " + "week." + " [REL_NOTE: zjd/2017-12-31]", args: [startDayName], examples: const$0 || (const$0 = dart.constMap(core.String, dart.dynamic, ["startDayName", "Mon"]))});
    }
    static _lastWeekTitle(startDayName, endDayName) {
      return intl$.Intl.message("Last week (" + dart.str(startDayName) + " – " + dart.str(endDayName) + ")", {name: "DatepickerPreset__lastWeekTitle", desc: "Label for a date range corresponding to \"last week\" starting " + "on a particular day of the week and ending on the last day of " + "the week." + " [REL_NOTE: zjd/2017-12-31]", args: [startDayName, endDayName], examples: const$1 || (const$1 = dart.constMap(core.String, dart.dynamic, ["startDayName", "Sun", "endDayName", "Sat"]))});
    }
    static _lastWeekShortTitle(startDayName, endDayName) {
      return intl$.Intl.message(dart.str(startDayName) + " – " + dart.str(endDayName), {name: "DatepickerPreset__lastWeekShortTitle", desc: "Short label for a date range corresponding to \"last week\" " + "indicating which day of the week is the starting day of the " + "week and which is the last day of the week." + " [REL_NOTE: zjd/2017-12-31]", args: [startDayName, endDayName], examples: const$2 || (const$2 = dart.constMap(core.String, dart.dynamic, ["startDayName", "Sun", "endDayName", "Sat"]))});
    }
  };
  (material_datepicker__preset.DatepickerPreset.new = function(title, range, opts) {
    let shortTitle = opts && 'shortTitle' in opts ? opts.shortTitle : null;
    let alternatives = opts && 'alternatives' in opts ? opts.alternatives : null;
    this[title$] = title;
    this[range$] = range;
    this[shortTitle$] = shortTitle;
    this[alternatives$] = alternatives;
  }).prototype = material_datepicker__preset.DatepickerPreset.prototype;
  dart.addTypeTests(material_datepicker__preset.DatepickerPreset);
  const title$ = Symbol("DatepickerPreset.title");
  const range$ = Symbol("DatepickerPreset.range");
  const shortTitle$ = Symbol("DatepickerPreset.shortTitle");
  const alternatives$ = Symbol("DatepickerPreset.alternatives");
  dart.setFieldSignature(material_datepicker__preset.DatepickerPreset, () => ({
    __proto__: dart.getFields(material_datepicker__preset.DatepickerPreset.__proto__),
    title: dart.finalFieldType(core.String),
    range: dart.finalFieldType(material_datepicker__range.DatepickerDateRange),
    shortTitle: dart.finalFieldType(core.String),
    alternatives: dart.finalFieldType(ListOfDatepickerPreset())
  }));
  dart.defineLazy(material_datepicker__preset.DatepickerPreset, {
    /*material_datepicker__preset.DatepickerPreset._weekdayNames*/get _weekdayNames() {
      return new intl$.DateFormat.new().dateSymbols.STANDALONESHORTWEEKDAYS;
    },
    /*material_datepicker__preset.DatepickerPreset._defaultValidStartWeekdays*/get _defaultValidStartWeekdays() {
      return dart.constList([core.DateTime.sunday, core.DateTime.monday], core.int);
    }
  });
  material_datepicker__preset.defaultPresets = function(clock) {
    return JSArrayOfDatepickerPreset().of([material_datepicker__preset.DatepickerPreset.fromRange(material_datepicker__range.today(clock)), material_datepicker__preset.DatepickerPreset.fromRange(material_datepicker__range.yesterday(clock)), material_datepicker__preset.DatepickerPreset.thisWeek(clock), material_datepicker__preset.DatepickerPreset.fromRange(material_datepicker__range.last7Days(clock)), material_datepicker__preset.DatepickerPreset.lastWeek(clock), material_datepicker__preset.DatepickerPreset.fromRange(material_datepicker__range.last14Days(clock)), material_datepicker__preset.DatepickerPreset.fromRange(material_datepicker__range.thisMonth(clock)), material_datepicker__preset.DatepickerPreset.fromRange(material_datepicker__range.last30Days(clock)), material_datepicker__preset.DatepickerPreset.fromRange(material_datepicker__range.lastMonth(clock)), material_datepicker__preset.DatepickerPreset.fromRange(material_datepicker__range.allTime)]);
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/preset.ddc", {
    "package:angular_components/material_datepicker/preset.dart": material_datepicker__preset
  }, '{"version":3,"sourceRoot":"","sources":["preset.dart"],"names":[],"mappings":"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","file":"preset.ddc.js"}');
  // Exports:
  return {
    material_datepicker__preset: material_datepicker__preset
  };
});

//# sourceMappingURL=preset.ddc.js.map
