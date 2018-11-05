define(['dart_sdk', 'packages/intl/intl', 'packages/angular_components/model/date/date', 'packages/angular_components/interfaces/has_disabled', 'packages/quiver/time'], function(dart_sdk, intl, date, has_disabled, time) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const model__date__date = date.model__date__date;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const time$ = time.time;
  const _root = Object.create(null);
  const material_datepicker__material_date_time_picker = Object.create(_root);
  let StreamControllerOfDateTime = () => (StreamControllerOfDateTime = dart.constFn(async.StreamController$(core.DateTime)))();
  const _clock = Symbol('_clock');
  const _disabled = Symbol('_disabled');
  const _required = Symbol('_required');
  const _utc = Symbol('_utc');
  const _dateTimeController = Symbol('_dateTimeController');
  const _dateTime = Symbol('_dateTime');
  const _date = Symbol('_date');
  const _time = Symbol('_time');
  const _updateDateTimeAndNotify = Symbol('_updateDateTimeAndNotify');
  material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent = class MaterialDateTimePickerComponent extends core.Object {
    get outputDateFormat() {
      return this[outputDateFormat];
    }
    set outputDateFormat(value) {
      this[outputDateFormat] = value;
    }
    get outputTimeFormat() {
      return this[outputTimeFormat];
    }
    set outputTimeFormat(value) {
      this[outputTimeFormat] = value;
    }
    get maxDateTime() {
      return this[maxDateTime];
    }
    set maxDateTime(value) {
      this[maxDateTime] = value;
    }
    get maxDate() {
      return new model__date__date.Date.new(this.maxDateTime.year, this.maxDateTime.month, this.maxDateTime.day);
    }
    get maxTime() {
      if (dart.test(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent._sameDate(this[_date], this.maxDateTime))) {
        return material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.cloneDateTime(this.maxDateTime);
      }
      return null;
    }
    get minDateTime() {
      return this[minDateTime];
    }
    set minDateTime(value) {
      this[minDateTime] = value;
    }
    get minDate() {
      return new model__date__date.Date.new(this.minDateTime.year, this.minDateTime.month, this.minDateTime.day);
    }
    get minTime() {
      if (dart.test(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent._sameDate(this[_date], this.minDateTime))) {
        return material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.cloneDateTime(this.minDateTime);
      }
      return null;
    }
    get disabled() {
      return this[_disabled];
    }
    set disabled(value) {
      return this[_disabled] = value;
    }
    get required() {
      return this[_required];
    }
    set required(value) {
      return this[_required] = value;
    }
    get utc() {
      return this[_utc];
    }
    set utc(value) {
      this[_utc] = value;
      this.dateTime = dart.test(this[_utc]) ? (() => {
        let t = this[_dateTime];
        return t == null ? null : t.toUtc();
      })() : (() => {
        let t = this[_dateTime];
        return t == null ? null : t.toLocal();
      })();
    }
    get dateTimeChange() {
      return this[_dateTimeController].stream;
    }
    get dateTime() {
      return this[_dateTime];
    }
    set dateTime(value) {
      if (!dart.equals(value, this[_dateTime])) {
        this[_dateTime] = value;
        this[_date] = this[_dateTime] == null ? null : model__date__date.Date.fromTime(this[_dateTime]);
        this[_time] = material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.cloneDateTime(this[_dateTime]);
      }
    }
    get date() {
      return this[_date];
    }
    set date(value) {
      if (!dart.equals(value, this[_date])) {
        this[_date] = value;
        if (this[_date] != null && this[_time] == null) {
          if (dart.test(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent._sameDate(this[_date], this.minDateTime))) {
            this[_time] = material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.cloneDateTime(this.minDateTime);
          } else {
            this[_time] = dart.test(this[_utc]) ? new core.DateTime.utc(this[_date].year) : new core.DateTime.new(this[_date].year);
          }
        }
        this[_updateDateTimeAndNotify]();
      }
    }
    get time() {
      return this[_time];
    }
    set time(value) {
      if (!dart.equals(value, this[_time])) {
        this[_time] = value;
        this[_updateDateTimeAndNotify]();
      }
    }
    setTimeToNowIfUnset() {
      if (!dart.test(this.disabled) && this[_time] == null) {
        let now = this[_clock].now();
        this[_time] = now;
        this[_date] = new model__date__date.Date.new(now.year, now.month, now.day);
        this[_updateDateTimeAndNotify]();
      }
    }
    [_updateDateTimeAndNotify]() {
      this[_dateTime] = this[_date] != null && this[_time] != null ? dart.test(this.utc) ? new core.DateTime.utc(this[_date].year, this[_date].month, this[_date].day, this[_time].hour, this[_time].minute) : new core.DateTime.new(this[_date].year, this[_date].month, this[_date].day, this[_time].hour, this[_time].minute) : null;
      if (this[_dateTime] != null || !dart.test(this[_required])) {
        this[_dateTimeController].add(this[_dateTime]);
      }
    }
    static _sameDate(date, toCompare) {
      if (date == null || toCompare == null) {
        return false;
      }
      return date.year == toCompare.year && date.month == toCompare.month && date.day == toCompare.day;
    }
    static cloneDateTime(dateTime) {
      return dateTime != null ? new core.DateTime.fromMillisecondsSinceEpoch(dateTime.millisecondsSinceEpoch, {isUtc: dateTime.isUtc}) : null;
    }
  };
  (material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.new = function(clock) {
    this[outputDateFormat] = new intl$.DateFormat.yMMMd();
    this[outputTimeFormat] = new intl$.DateFormat.jm();
    this[maxDateTime] = null;
    this[minDateTime] = null;
    this[_disabled] = false;
    this[_required] = false;
    this[_utc] = false;
    this[_dateTimeController] = StreamControllerOfDateTime().broadcast();
    this[_dateTime] = null;
    this[_date] = null;
    this[_time] = null;
    this[_clock] = clock;
    let year = this[_clock].now().toUtc().year;
    this.minDateTime = new core.DateTime.new(dart.notNull(year) - 10, core.DateTime.january, 1, 0, 0);
    this.maxDateTime = new core.DateTime.new(dart.notNull(year) + 10, core.DateTime.december, 31, 23, 59);
  }).prototype = material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.prototype;
  dart.addTypeTests(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent);
  const outputDateFormat = Symbol("MaterialDateTimePickerComponent.outputDateFormat");
  const outputTimeFormat = Symbol("MaterialDateTimePickerComponent.outputTimeFormat");
  const maxDateTime = Symbol("MaterialDateTimePickerComponent.maxDateTime");
  const minDateTime = Symbol("MaterialDateTimePickerComponent.minDateTime");
  material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent[dart.implements] = () => [interfaces__has_disabled.HasDisabled];
  dart.setMethodSignature(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.__proto__),
    setTimeToNowIfUnset: dart.fnType(dart.void, []),
    [_updateDateTimeAndNotify]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent, () => ({
    __proto__: dart.getGetters(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.__proto__),
    maxDate: model__date__date.Date,
    maxTime: core.DateTime,
    minDate: model__date__date.Date,
    minTime: core.DateTime,
    disabled: core.bool,
    required: core.bool,
    utc: core.bool,
    dateTimeChange: async.Stream$(core.DateTime),
    dateTime: core.DateTime,
    date: model__date__date.Date,
    time: core.DateTime
  }));
  dart.setSetterSignature(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent, () => ({
    __proto__: dart.getSetters(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.__proto__),
    disabled: core.bool,
    required: core.bool,
    utc: core.bool,
    dateTime: core.DateTime,
    date: model__date__date.Date,
    time: core.DateTime
  }));
  dart.setFieldSignature(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_time_picker.MaterialDateTimePickerComponent.__proto__),
    [_clock]: dart.finalFieldType(time$.Clock),
    outputDateFormat: dart.fieldType(intl$.DateFormat),
    outputTimeFormat: dart.fieldType(intl$.DateFormat),
    maxDateTime: dart.fieldType(core.DateTime),
    minDateTime: dart.fieldType(core.DateTime),
    [_disabled]: dart.fieldType(core.bool),
    [_required]: dart.fieldType(core.bool),
    [_utc]: dart.fieldType(core.bool),
    [_dateTimeController]: dart.finalFieldType(StreamControllerOfDateTime()),
    [_dateTime]: dart.fieldType(core.DateTime),
    [_date]: dart.fieldType(model__date__date.Date),
    [_time]: dart.fieldType(core.DateTime)
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_time_picker.ddc", {
    "package:angular_components/material_datepicker/material_date_time_picker.dart": material_datepicker__material_date_time_picker
  }, '{"version":3,"sourceRoot":"","sources":["material_date_time_picker.dart"],"names":[],"mappings":"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","file":"material_date_time_picker.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_time_picker: material_datepicker__material_date_time_picker
  };
});

//# sourceMappingURL=material_date_time_picker.ddc.js.map
