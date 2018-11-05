define(['dart_sdk', 'packages/angular_components/material_datepicker/comparison_option', 'packages/angular_components/material_datepicker/comparison', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/observable/observable', 'packages/angular_components/model/date/date', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_datepicker/range', 'packages/angular_components/src/material_datepicker/sequential', 'packages/intl/intl'], function(dart_sdk, comparison_option, comparison, calendar, observable, date, disposer, range, sequential, intl) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__comparison_option = comparison_option.material_datepicker__comparison_option;
  const material_datepicker__comparison = comparison.material_datepicker__comparison;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const model__observable__observable = observable.model__observable__observable;
  const model__date__date = date.model__date__date;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_datepicker__range = range.material_datepicker__range;
  const src__material_datepicker__sequential = sequential.src__material_datepicker__sequential;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const src__material_datepicker__date_range_editor_model = Object.create(_root);
  const src__material_datepicker__comparison_range_editor = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $contains = dartx.contains;
  const $add = dartx.add;
  const $_get = dartx._get;
  const $_set = dartx._set;
  let ObservableReferenceOfDatepickerComparison = () => (ObservableReferenceOfDatepickerComparison = dart.constFn(model__observable__observable.ObservableReference$(material_datepicker__comparison.DatepickerComparison)))();
  let ObservableReferenceOfCalendarState = () => (ObservableReferenceOfCalendarState = dart.constFn(model__observable__observable.ObservableReference$(material_datepicker__calendar.CalendarState)))();
  let ObservableReferenceOfDateRange = () => (ObservableReferenceOfDateRange = dart.constFn(model__observable__observable.ObservableReference$(model__date__date.DateRange)))();
  let StreamControllerOfDateRangeChange = () => (StreamControllerOfDateRangeChange = dart.constFn(async.StreamController$(src__material_datepicker__date_range_editor_model.DateRangeChange)))();
  let JSArrayOfComparisonOption = () => (JSArrayOfComparisonOption = dart.constFn(_interceptors.JSArray$(material_datepicker__comparison_option.ComparisonOption)))();
  let ObservableReferenceOfbool = () => (ObservableReferenceOfbool = dart.constFn(model__observable__observable.ObservableReference$(core.bool)))();
  let ChangeOfCalendarState = () => (ChangeOfCalendarState = dart.constFn(model__observable__observable.Change$(material_datepicker__calendar.CalendarState)))();
  let SequentialOfDatepickerDateRange = () => (SequentialOfDatepickerDateRange = dart.constFn(src__material_datepicker__sequential.Sequential$(material_datepicker__range.DatepickerDateRange)))();
  let ListOfComparisonOption = () => (ListOfComparisonOption = dart.constFn(core.List$(material_datepicker__comparison_option.ComparisonOption)))();
  let LinkedMapOfComparisonOption$String = () => (LinkedMapOfComparisonOption$String = dart.constFn(_js_helper.LinkedMap$(material_datepicker__comparison_option.ComparisonOption, core.String)))();
  let MapOfComparisonOption$String = () => (MapOfComparisonOption$String = dart.constFn(core.Map$(material_datepicker__comparison_option.ComparisonOption, core.String)))();
  src__material_datepicker__date_range_editor_model.Action = class Action extends core.Object {
    toString() {
      return {
        0: "Action.dragStart",
        1: "Action.drag",
        2: "Action.dragEnd",
        3: "Action.button",
        4: "Action.textEntry",
        5: "Action.click",
        6: "Action.preview",
        7: "Action.cancel"
      }[this.index];
    }
  };
  (src__material_datepicker__date_range_editor_model.Action.new = function(x) {
    this.index = x;
  }).prototype = src__material_datepicker__date_range_editor_model.Action.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.Action);
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.Action, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.Action.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__material_datepicker__date_range_editor_model.Action, ['toString']);
  src__material_datepicker__date_range_editor_model.Action.dragStart = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(0));
  src__material_datepicker__date_range_editor_model.Action.drag = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(1));
  src__material_datepicker__date_range_editor_model.Action.dragEnd = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(2));
  src__material_datepicker__date_range_editor_model.Action.button = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(3));
  src__material_datepicker__date_range_editor_model.Action.textEntry = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(4));
  src__material_datepicker__date_range_editor_model.Action.click = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(5));
  src__material_datepicker__date_range_editor_model.Action.preview = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(6));
  src__material_datepicker__date_range_editor_model.Action.cancel = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(7));
  src__material_datepicker__date_range_editor_model.Action.values = dart.constList([src__material_datepicker__date_range_editor_model.Action.dragStart, src__material_datepicker__date_range_editor_model.Action.drag, src__material_datepicker__date_range_editor_model.Action.dragEnd, src__material_datepicker__date_range_editor_model.Action.button, src__material_datepicker__date_range_editor_model.Action.textEntry, src__material_datepicker__date_range_editor_model.Action.click, src__material_datepicker__date_range_editor_model.Action.preview, src__material_datepicker__date_range_editor_model.Action.cancel], src__material_datepicker__date_range_editor_model.Action);
  src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration = class DateRangePickerConfiguration extends core.Object {
    toString() {
      return {
        0: "DateRangePickerConfiguration.basic",
        1: "DateRangePickerConfiguration.predefinedRangesOnly",
        2: "DateRangePickerConfiguration.fullyLoaded"
      }[this.index];
    }
  };
  (src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.new = function(x) {
    this.index = x;
  }).prototype = src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration);
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration, ['toString']);
  src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.basic = dart.const(new src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.new(0));
  src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.predefinedRangesOnly = dart.const(new src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.new(1));
  src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.fullyLoaded = dart.const(new src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.new(2));
  src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.values = dart.constList([src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.basic, src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.predefinedRangesOnly, src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.fullyLoaded], src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration);
  src__material_datepicker__date_range_editor_model.HasComparisonRange = class HasComparisonRange extends core.Object {
    get comparisonEnabled() {
      return this[comparisonEnabled];
    }
    set comparisonEnabled(value) {
      this[comparisonEnabled] = value;
    }
    get comparisonOption() {
      return this[comparisonOption];
    }
    set comparisonOption(value) {
      this[comparisonOption] = value;
    }
  };
  (src__material_datepicker__date_range_editor_model.HasComparisonRange.new = function() {
    this[comparisonEnabled] = null;
    this[comparisonOption] = null;
  }).prototype = src__material_datepicker__date_range_editor_model.HasComparisonRange.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.HasComparisonRange);
  const comparisonEnabled = Symbol("HasComparisonRange.comparisonEnabled");
  const comparisonOption = Symbol("HasComparisonRange.comparisonOption");
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.HasComparisonRange, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.HasComparisonRange.__proto__),
    comparisonEnabled: dart.fieldType(core.bool),
    comparisonOption: dart.fieldType(material_datepicker__comparison_option.ComparisonOption)
  }));
  src__material_datepicker__date_range_editor_model.DateRangeChange = class DateRangeChange extends core.Object {
    get date() {
      return this[date$];
    }
    set date(value) {
      super.date = value;
    }
    get cause() {
      return this[cause$];
    }
    set cause(value) {
      super.cause = value;
    }
    toString() {
      return "[" + dart.str(this.date) + "] with cause " + dart.str(this.cause);
    }
  };
  (src__material_datepicker__date_range_editor_model.DateRangeChange.new = function(date, cause) {
    this[date$] = date;
    this[cause$] = cause;
  }).prototype = src__material_datepicker__date_range_editor_model.DateRangeChange.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.DateRangeChange);
  const date$ = Symbol("DateRangeChange.date");
  const cause$ = Symbol("DateRangeChange.cause");
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.DateRangeChange, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.DateRangeChange.__proto__),
    date: dart.finalFieldType(material_datepicker__comparison.DatepickerComparison),
    cause: dart.finalFieldType(src__material_datepicker__date_range_editor_model.Action)
  }));
  dart.defineExtensionMethods(src__material_datepicker__date_range_editor_model.DateRangeChange, ['toString']);
  src__material_datepicker__date_range_editor_model.ModelState = class ModelState extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get calendarState() {
      return this[calendarState$];
    }
    set calendarState(value) {
      super.calendarState = value;
    }
    get comparisonEnabled() {
      return this[comparisonEnabled$];
    }
    set comparisonEnabled(value) {
      super.comparisonEnabled = value;
    }
    get comparisonOption() {
      return this[comparisonOption$];
    }
    set comparisonOption(value) {
      super.comparisonOption = value;
    }
  };
  (src__material_datepicker__date_range_editor_model.ModelState.new = function(value, calendarState, comparisonEnabled, comparisonOption) {
    this[value$] = value;
    this[calendarState$] = calendarState;
    this[comparisonEnabled$] = comparisonEnabled;
    this[comparisonOption$] = comparisonOption;
  }).prototype = src__material_datepicker__date_range_editor_model.ModelState.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.ModelState);
  const value$ = Symbol("ModelState.value");
  const calendarState$ = Symbol("ModelState.calendarState");
  const comparisonEnabled$ = Symbol("ModelState.comparisonEnabled");
  const comparisonOption$ = Symbol("ModelState.comparisonOption");
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.ModelState, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.ModelState.__proto__),
    value: dart.finalFieldType(material_datepicker__comparison.DatepickerComparison),
    calendarState: dart.finalFieldType(material_datepicker__calendar.CalendarState),
    comparisonEnabled: dart.finalFieldType(core.bool),
    comparisonOption: dart.finalFieldType(material_datepicker__comparison_option.ComparisonOption)
  }));
  dart.defineLazy(src__material_datepicker__date_range_editor_model, {
    /*src__material_datepicker__date_range_editor_model._rangeId*/get _rangeId() {
      return "range";
    },
    /*src__material_datepicker__date_range_editor_model._comparisonId*/get _comparisonId() {
      return "comparison";
    }
  });
  const _ref = Symbol('_ref');
  const _changes = Symbol('_changes');
  const _disposer = Symbol('_disposer');
  const _comparisonEnabled = Symbol('_comparisonEnabled');
  const _comparisonOption = Symbol('_comparisonOption');
  const _supportedComparisonOptions = Symbol('_supportedComparisonOptions');
  const _customComparisonRange = Symbol('_customComparisonRange');
  const _comparisonTitle = Symbol('_comparisonTitle');
  const _lastCause = Symbol('_lastCause');
  const _validComparisonOptions = Symbol('_validComparisonOptions');
  const _updateHasNextPrev = Symbol('_updateHasNextPrev');
  const _updateValidComparisonOptions = Symbol('_updateValidComparisonOptions');
  const _setEverything = Symbol('_setEverything');
  const _setPrimaryRange = Symbol('_setPrimaryRange');
  const _setComparisonRange = Symbol('_setComparisonRange');
  const _onCalendarChange = Symbol('_onCalendarChange');
  const _withComparison = Symbol('_withComparison');
  const _changeValue = Symbol('_changeValue');
  const _setComparisonOption = Symbol('_setComparisonOption');
  const _selectionDifferent = Symbol('_selectionDifferent');
  const _buildComparison = Symbol('_buildComparison');
  const _selectionAction = Symbol('_selectionAction');
  const _getValidComparisonOptions = Symbol('_getValidComparisonOptions');
  src__material_datepicker__date_range_editor_model.DateRangeEditorModel = class DateRangeEditorModel extends core.Object {
    get rangeId() {
      return this[rangeId];
    }
    set rangeId(value) {
      super.rangeId = value;
    }
    get comparisonId() {
      return this[comparisonId];
    }
    set comparisonId(value) {
      super.comparisonId = value;
    }
    get calendar() {
      return this[calendar$];
    }
    set calendar(value) {
      super.calendar = value;
    }
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
    get minDate() {
      return this[minDate$];
    }
    set minDate(value) {
      this[minDate$] = value;
    }
    get maxDate() {
      return this[maxDate$];
    }
    set maxDate(value) {
      this[maxDate$] = value;
    }
    get requireFullPeriods() {
      return this[requireFullPeriods$];
    }
    set requireFullPeriods(value) {
      this[requireFullPeriods$] = value;
    }
    get basic() {
      return this[basic$];
    }
    set basic(value) {
      this[basic$] = value;
    }
    get shouldShowPredefinedList() {
      return this[shouldShowPredefinedList];
    }
    set shouldShowPredefinedList(value) {
      this[shouldShowPredefinedList] = value;
    }
    get shouldShowCustomDateRangeColumn() {
      return this[shouldShowCustomDateRangeColumn];
    }
    set shouldShowCustomDateRangeColumn(value) {
      this[shouldShowCustomDateRangeColumn] = value;
    }
    get value() {
      return this[_ref].value;
    }
    set value(val) {
      this[_ref].value = val;
      if (dart.test(this[_comparisonEnabled])) {
        this[_updateValidComparisonOptions]();
      }
    }
    get validComparisonOptions() {
      return this[_validComparisonOptions];
    }
    set supportedComparisonOptions(options) {
      if (!dart.equals(options, this[_supportedComparisonOptions])) {
        if (!(options != null && dart.test(options[$isNotEmpty]))) dart.assertFailed();
        this[_supportedComparisonOptions] = options;
        this[_comparisonOption] = this[_supportedComparisonOptions][$first];
        this[_updateValidComparisonOptions]();
      }
    }
    get isCustomComparisonValid() {
      return this.validComparisonOptions[$contains](material_datepicker__comparison_option.ComparisonOption.custom);
    }
    get changes() {
      return this[_changes].stream;
    }
    get primaryRange() {
      let t = this.value;
      return t == null ? null : t.range;
    }
    get comparisonEnabled() {
      return this[_comparisonEnabled];
    }
    set comparisonEnabled(enabled) {
      this[_comparisonEnabled] = enabled;
      this.calendar.value = this.calendar.value.select(this.rangeId, {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart});
      if ((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })() != null) {
        this[_changeValue](this[_withComparison](this.value.range), src__material_datepicker__date_range_editor_model.Action.button);
      }
    }
    get comparisonOption() {
      return this[_comparisonOption];
    }
    set comparisonOption(option) {
      if (dart.test(this.basic) && dart.equals(option, material_datepicker__comparison_option.ComparisonOption.custom)) {
        this.shouldShowCustomDateRangeColumn = true;
        this.shouldShowPredefinedList = false;
      }
      this[_setComparisonOption](option);
      this.calendar.value = this.calendar.value.select(this.rangeId, {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart});
    }
    get comparisonSupported() {
      return src__material_datepicker__date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })());
    }
    get rangeTitle() {
      let t = this.value;
      let t$ = t == null ? null : t.range;
      let l = t$ == null ? null : t$.title;
      return l != null ? l : "";
    }
    get comparisonTitle() {
      return this[_comparisonTitle];
    }
    save() {
      return new src__material_datepicker__date_range_editor_model.ModelState.new(this.value, this.calendar.value, this.comparisonEnabled, this.comparisonOption);
    }
    restore(state) {
      if (state == null) return;
      this[_changeValue](state.value, src__material_datepicker__date_range_editor_model.Action.cancel);
      this.calendar.value = state.calendarState;
      this.comparisonEnabled = state.comparisonEnabled;
      this.comparisonOption = state.comparisonOption;
    }
    selectRange(range) {
      return this[_changeValue](this[_withComparison](range), src__material_datepicker__date_range_editor_model.Action.button);
    }
    get hasNext() {
      return this[hasNext];
    }
    set hasNext(value) {
      this[hasNext] = value;
    }
    next() {
      let t = this.value;
      let t$ = t == null ? null : t.range;
      let next = t$ == null ? null : t$.next;
      if (next == null) return null;
      let amt = model__date__date.daysSpanned(this.value.range.start, next.start, {inclusive: false});
      if (this[_customComparisonRange] != null) {
        this[_customComparisonRange] = material_datepicker__range.DatepickerDateRange.custom(this[_customComparisonRange].start.add({days: amt}), this[_customComparisonRange].end.add({days: amt}));
      }
      this[_changeValue](this[_withComparison](next), src__material_datepicker__date_range_editor_model.Action.button);
      return next;
    }
    get hasPrev() {
      return this[hasPrev];
    }
    set hasPrev(value) {
      this[hasPrev] = value;
    }
    prev() {
      let t = this.value;
      let t$ = t == null ? null : t.range;
      let prev = t$ == null ? null : t$.prev;
      if (prev == null) return null;
      let amt = model__date__date.daysSpanned(prev.start, this.value.range.start, {inclusive: false});
      if (this[_customComparisonRange] != null) {
        this[_customComparisonRange] = material_datepicker__range.DatepickerDateRange.custom(this[_customComparisonRange].start.add({days: -dart.notNull(amt)}), this[_customComparisonRange].end.add({days: -dart.notNull(amt)}));
      }
      this[_changeValue](this[_withComparison](prev), src__material_datepicker__date_range_editor_model.Action.button);
      return prev;
    }
    dispose() {
      this[_disposer].dispose();
      this[_ref].dispose();
      this.calendar.dispose();
      this.range.dispose();
      this.comparison.dispose();
    }
    [_changeValue](val, cause) {
      val = new material_datepicker__comparison.DatepickerComparison.reclamp(val, this.minDate, this.maxDate);
      if (dart.equals(this.value, val) && (cause == null || cause == this[_lastCause])) return;
      this.value = val;
      this[_lastCause] = cause;
      this[_changes].add(new src__material_datepicker__date_range_editor_model.DateRangeChange.new(val, cause));
    }
    [_updateHasNextPrev](newValue) {
      let t = newValue == null ? null : newValue.range;
      let prevRange = t == null ? null : t.prev;
      let t$ = newValue == null ? null : newValue.range;
      let nextRange = t$ == null ? null : t$.next;
      if (dart.test(this.requireFullPeriods)) {
        this.hasPrev.value = prevRange != null && dart.test(model__date__date.rangeContainsRange(new model__date__date.DateRange.new(this.minDate, this.maxDate), prevRange.unclamped()));
        this.hasNext.value = nextRange != null && dart.test(model__date__date.rangeContainsRange(new model__date__date.DateRange.new(this.minDate, this.maxDate), nextRange.unclamped()));
      } else {
        this.hasPrev.value = prevRange != null;
        this.hasNext.value = nextRange != null;
      }
    }
    [_setEverything](newValue) {
      this[_updateHasNextPrev](newValue);
      if (newValue == null) return;
      let range = newValue.range;
      if (range == null) {
        this.range.value = null;
        this.calendar.value = this.calendar.value.clearCurrentSelection();
      } else {
        this.range.value = range.asPlainRange();
        if (dart.test(this[_selectionDifferent](this.calendar.value, this.rangeId, range)) || !dart.test(this.calendar.value.has(this.rangeId))) {
          this.calendar.value = this.calendar.value.setSelection(new material_datepicker__calendar.CalendarSelection.new(this.rangeId, range.start, range.end), {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart, cause: material_datepicker__calendar.CausedBy.external});
        }
      }
      let comparison = newValue.comparison;
      if (comparison != null) {
        if (dart.test(this[_selectionDifferent](this.calendar.value, this.comparisonId, comparison)) || !dart.test(this.calendar.value.has(this.comparisonId))) {
          this.calendar.value = this.calendar.value.setSelection(new material_datepicker__calendar.CalendarSelection.new(this.comparisonId, comparison.start, comparison.end), {cause: material_datepicker__calendar.CausedBy.external});
        }
      } else {
        this.calendar.value = this.calendar.value.clearSelection(this.comparisonId);
      }
      this[_comparisonEnabled] = newValue.isComparisonEnabled;
      if (dart.test(this[_comparisonEnabled])) {
        this[_comparisonOption] = null;
        for (let option of this[_supportedComparisonOptions]) {
          if (dart.test(newValue.comparesTo(option))) {
            this[_comparisonOption] = option;
            break;
          }
        }
        if (this[_comparisonOption] == null && dart.test(this[_supportedComparisonOptions][$contains](material_datepicker__comparison_option.ComparisonOption.custom))) {
          this[_comparisonOption] = material_datepicker__comparison_option.ComparisonOption.custom;
        }
        this[_updateValidComparisonOptions]();
      }
      let hypotheticalComparison = comparison != null ? comparison : this[_buildComparison](range).comparison;
      if (hypotheticalComparison == null) return;
      this.comparison.value = hypotheticalComparison.asPlainRange();
      this[_customComparisonRange] = material_datepicker__range.DatepickerDateRange.custom(hypotheticalComparison.start, hypotheticalComparison.end);
      this[_comparisonTitle] = hypotheticalComparison.title;
    }
    [_setPrimaryRange](range) {
      if (dart.equals((() => {
        let t = this.value;
        let t$ = t == null ? null : t.range;
        return t$ == null ? null : t$.asPlainRange();
      })(), range)) return;
      this[_changeValue](this[_withComparison](material_datepicker__range.DatepickerDateRange.custom(range.start, range.end)), src__material_datepicker__date_range_editor_model.Action.textEntry);
    }
    [_setComparisonRange](range) {
      if (dart.equals((() => {
        let t = this[_customComparisonRange];
        return t == null ? null : t.asPlainRange();
      })(), range)) return;
      this.comparisonOption = material_datepicker__comparison_option.ComparisonOption.custom;
      this[_customComparisonRange] = material_datepicker__range.DatepickerDateRange.custom(range == null ? null : range.start, range == null ? null : range.end);
      this[_changeValue](this[_withComparison]((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })()), src__material_datepicker__date_range_editor_model.Action.textEntry);
    }
    [_onCalendarChange](change) {
      let action = this[_selectionAction](change.previous.cause, change.next.cause);
      let newState = change.next;
      let t = this.value;
      let selectedRange = t == null ? null : t.range;
      if (newState.currentSelection == this.rangeId && dart.test(this[_selectionDifferent](newState, this.rangeId, selectedRange))) {
        selectedRange = material_datepicker__range.DatepickerDateRange.custom(newState.selection(this.rangeId).start, newState.selection(this.rangeId).end);
      } else if (newState.currentSelection == this.comparisonId && dart.test(this[_selectionDifferent](newState, this.comparisonId, this[_customComparisonRange]))) {
        this[_setComparisonOption](material_datepicker__comparison_option.ComparisonOption.custom);
        this[_customComparisonRange] = material_datepicker__range.DatepickerDateRange.custom(newState.selection(this.comparisonId).start, newState.selection(this.comparisonId).end);
      }
      if (selectedRange != null) {
        this[_changeValue](this[_withComparison](selectedRange), action);
      }
      if (change.next.cause === material_datepicker__calendar.CausedBy.rangeConfirm) {
        let selectId = dart.test(this[_comparisonEnabled]) && dart.equals(this[_comparisonOption], material_datepicker__comparison_option.ComparisonOption.custom) && this.calendar.value.currentSelection == this.rangeId ? this.comparisonId : this.rangeId;
        this.calendar.value = this.calendar.value.select(selectId, {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart});
      }
    }
    [_setComparisonOption](option) {
      if (dart.equals(this[_comparisonOption], option)) return;
      this[_comparisonOption] = option;
      if ((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })() != null) {
        this[_changeValue](this[_withComparison](this.value.range), src__material_datepicker__date_range_editor_model.Action.button);
        if (!dart.test(this[_comparisonEnabled])) {
          this[_setEverything](this.value);
        }
      }
    }
    [_selectionAction](oldCause, newCause) {
      if (newCause === material_datepicker__calendar.CausedBy.preview) {
        return src__material_datepicker__date_range_editor_model.Action.preview;
      } else if (oldCause === material_datepicker__calendar.CausedBy.drag && newCause === material_datepicker__calendar.CausedBy.drag) {
        return src__material_datepicker__date_range_editor_model.Action.drag;
      } else if (oldCause === material_datepicker__calendar.CausedBy.drag && newCause === material_datepicker__calendar.CausedBy.rangeConfirm) {
        return src__material_datepicker__date_range_editor_model.Action.dragEnd;
      } else if (newCause === material_datepicker__calendar.CausedBy.drag) {
        return src__material_datepicker__date_range_editor_model.Action.dragStart;
      } else if (newCause === material_datepicker__calendar.CausedBy.endpointConfirm || newCause === material_datepicker__calendar.CausedBy.rangeConfirm) {
        return src__material_datepicker__date_range_editor_model.Action.click;
      }
      return null;
    }
    [_selectionDifferent](state, id, range) {
      if (!dart.test(state.has(id))) return false;
      if (range == null) return true;
      return !dart.equals(range.start, state.selection(id).start) || !dart.equals(range.end, state.selection(id).end);
    }
    [_withComparison](range) {
      return dart.test(this[_comparisonEnabled]) ? this[_buildComparison](range) : new material_datepicker__comparison.DatepickerComparison.noComparison(range);
    }
    static _rangeSupportsComparison(range) {
      return range != null && !dart.test(range.isAllTime);
    }
    [_buildComparison](range) {
      if (!dart.test(src__material_datepicker__date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison(range))) {
        return new material_datepicker__comparison.DatepickerComparison.noComparison(range);
      }
      let defaultCustomComparisonRange = material_datepicker__range.DatepickerDateRange.custom(range.start, range.start);
      let validComparisonOptions = this[_getValidComparisonOptions](range);
      if (dart.equals(this[_comparisonOption], material_datepicker__comparison_option.ComparisonOption.custom)) {
        return new material_datepicker__comparison.DatepickerComparison.custom(range, (() => {
          let l = this[_customComparisonRange];
          return l != null ? l : defaultCustomComparisonRange;
        })());
      }
      if (dart.test(validComparisonOptions[$contains](this[_comparisonOption]))) {
        return new material_datepicker__comparison.DatepickerComparison.new(range, this[_comparisonOption]);
      }
      if (dart.test(this.isCustomComparisonValid)) {
        return new material_datepicker__comparison.DatepickerComparison.custom(range, (() => {
          let l = this[_customComparisonRange];
          return l != null ? l : defaultCustomComparisonRange;
        })());
      }
      return new material_datepicker__comparison.DatepickerComparison.noComparison(range);
    }
    [_updateValidComparisonOptions]() {
      if ((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })() == null || !dart.test(src__material_datepicker__date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })()))) return;
      this[_validComparisonOptions] = this[_getValidComparisonOptions]((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })());
      if (!dart.test(this[_validComparisonOptions][$contains](this[_comparisonOption]))) {
        this[_comparisonOption] = material_datepicker__comparison_option.ComparisonOption.custom;
      }
    }
    [_getValidComparisonOptions](range) {
      let validOptions = JSArrayOfComparisonOption().of([]);
      if (range == null || !dart.test(src__material_datepicker__date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison(range))) {
        return validOptions;
      }
      for (let option of this[_supportedComparisonOptions]) {
        if (dart.equals(option, material_datepicker__comparison_option.ComparisonOption.custom)) {
          validOptions[$add](option);
        } else {
          let comparisonRange = option.computeComparisonRange(range);
          if ((comparisonRange == null ? null : comparisonRange.clamp({min: this.minDate, max: this.maxDate})) != null) {
            validOptions[$add](option);
          }
        }
      }
      return validOptions;
    }
  };
  (src__material_datepicker__date_range_editor_model.DateRangeEditorModel.new = function(opts) {
    let initialValue = opts && 'initialValue' in opts ? opts.initialValue : null;
    let minDate = opts && 'minDate' in opts ? opts.minDate : null;
    let maxDate = opts && 'maxDate' in opts ? opts.maxDate : null;
    let requireFullPeriods = opts && 'requireFullPeriods' in opts ? opts.requireFullPeriods : false;
    let basic = opts && 'basic' in opts ? opts.basic : false;
    let supportedComparisonOptions = opts && 'supportedComparisonOptions' in opts ? opts.supportedComparisonOptions : null;
    this[rangeId] = "range";
    this[comparisonId] = "comparison";
    this[calendar$] = new (ObservableReferenceOfCalendarState()).new(new material_datepicker__calendar.CalendarState.empty({currentSelection: "range"}), {coalesce: true});
    this[range$] = new (ObservableReferenceOfDateRange()).new(new model__date__date.DateRange.new(null, null), {coalesce: true});
    this[comparison$] = new (ObservableReferenceOfDateRange()).new(new model__date__date.DateRange.new(null, null), {coalesce: true});
    this[_changes] = StreamControllerOfDateRangeChange().broadcast({sync: true});
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_comparisonEnabled] = false;
    this[shouldShowPredefinedList] = true;
    this[shouldShowCustomDateRangeColumn] = true;
    this[_comparisonOption] = material_datepicker__comparison_option.ComparisonOption.previousPeriod;
    this[_supportedComparisonOptions] = material_datepicker__comparison_option.defaultComparisonOptions;
    this[_customComparisonRange] = null;
    this[_comparisonTitle] = "";
    this[_lastCause] = null;
    this[_validComparisonOptions] = JSArrayOfComparisonOption().of([]);
    this[hasNext] = new (ObservableReferenceOfbool()).new(false);
    this[hasPrev] = new (ObservableReferenceOfbool()).new(false);
    this[minDate$] = minDate;
    this[maxDate$] = maxDate;
    this[requireFullPeriods$] = requireFullPeriods;
    this[basic$] = basic;
    this[_ref] = new (ObservableReferenceOfDatepickerComparison()).new(initialValue);
    this.supportedComparisonOptions = (() => {
      let l = supportedComparisonOptions == null ? null : supportedComparisonOptions[$isNotEmpty];
      return l != null ? l : false;
    })() ? supportedComparisonOptions : material_datepicker__comparison_option.defaultComparisonOptions;
    this[_updateHasNextPrev](initialValue);
    this[_updateValidComparisonOptions]();
    this[_disposer].addFunction(dart.bind(this[_changes], 'close'));
    this[_disposer].addStreamSubscription(material_datepicker__comparison.DatepickerComparison, this[_ref].stream.listen(dart.bind(this, _setEverything)));
    this[_disposer].addStreamSubscription(model__date__date.DateRange, this.range.stream.listen(dart.bind(this, _setPrimaryRange)));
    this[_disposer].addStreamSubscription(model__date__date.DateRange, this.comparison.stream.listen(dart.bind(this, _setComparisonRange)));
    this[_disposer].addStreamSubscription(ChangeOfCalendarState(), this.calendar.changes.listen(dart.bind(this, _onCalendarChange)));
  }).prototype = src__material_datepicker__date_range_editor_model.DateRangeEditorModel.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.DateRangeEditorModel);
  const rangeId = Symbol("DateRangeEditorModel.rangeId");
  const comparisonId = Symbol("DateRangeEditorModel.comparisonId");
  const calendar$ = Symbol("DateRangeEditorModel.calendar");
  const range$ = Symbol("DateRangeEditorModel.range");
  const comparison$ = Symbol("DateRangeEditorModel.comparison");
  const minDate$ = Symbol("DateRangeEditorModel.minDate");
  const maxDate$ = Symbol("DateRangeEditorModel.maxDate");
  const requireFullPeriods$ = Symbol("DateRangeEditorModel.requireFullPeriods");
  const basic$ = Symbol("DateRangeEditorModel.basic");
  const shouldShowPredefinedList = Symbol("DateRangeEditorModel.shouldShowPredefinedList");
  const shouldShowCustomDateRangeColumn = Symbol("DateRangeEditorModel.shouldShowCustomDateRangeColumn");
  const hasNext = Symbol("DateRangeEditorModel.hasNext");
  const hasPrev = Symbol("DateRangeEditorModel.hasPrev");
  src__material_datepicker__date_range_editor_model.DateRangeEditorModel[dart.implements] = () => [SequentialOfDatepickerDateRange(), src__material_datepicker__date_range_editor_model.HasComparisonRange];
  dart.setMethodSignature(src__material_datepicker__date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getMethods(src__material_datepicker__date_range_editor_model.DateRangeEditorModel.__proto__),
    save: dart.fnType(src__material_datepicker__date_range_editor_model.ModelState, []),
    restore: dart.fnType(dart.void, [src__material_datepicker__date_range_editor_model.ModelState]),
    selectRange: dart.fnType(dart.void, [material_datepicker__range.DatepickerDateRange]),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    dispose: dart.fnType(dart.void, []),
    [_changeValue]: dart.fnType(dart.void, [material_datepicker__comparison.DatepickerComparison, src__material_datepicker__date_range_editor_model.Action]),
    [_updateHasNextPrev]: dart.fnType(dart.void, [material_datepicker__comparison.DatepickerComparison]),
    [_setEverything]: dart.fnType(dart.void, [material_datepicker__comparison.DatepickerComparison]),
    [_setPrimaryRange]: dart.fnType(dart.void, [model__date__date.DateRange]),
    [_setComparisonRange]: dart.fnType(dart.void, [model__date__date.DateRange]),
    [_onCalendarChange]: dart.fnType(dart.void, [model__observable__observable.Change$(material_datepicker__calendar.CalendarState)]),
    [_setComparisonOption]: dart.fnType(dart.void, [material_datepicker__comparison_option.ComparisonOption]),
    [_selectionAction]: dart.fnType(src__material_datepicker__date_range_editor_model.Action, [material_datepicker__calendar.CausedBy, material_datepicker__calendar.CausedBy]),
    [_selectionDifferent]: dart.fnType(core.bool, [material_datepicker__calendar.CalendarState, core.String, model__date__date.DateRange]),
    [_withComparison]: dart.fnType(material_datepicker__comparison.DatepickerComparison, [material_datepicker__range.DatepickerDateRange]),
    [_buildComparison]: dart.fnType(material_datepicker__comparison.DatepickerComparison, [material_datepicker__range.DatepickerDateRange]),
    [_updateValidComparisonOptions]: dart.fnType(dart.void, []),
    [_getValidComparisonOptions]: dart.fnType(core.List$(material_datepicker__comparison_option.ComparisonOption), [material_datepicker__range.DatepickerDateRange])
  }));
  dart.setGetterSignature(src__material_datepicker__date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getGetters(src__material_datepicker__date_range_editor_model.DateRangeEditorModel.__proto__),
    value: material_datepicker__comparison.DatepickerComparison,
    validComparisonOptions: core.List$(material_datepicker__comparison_option.ComparisonOption),
    isCustomComparisonValid: core.bool,
    changes: async.Stream$(src__material_datepicker__date_range_editor_model.DateRangeChange),
    primaryRange: material_datepicker__range.DatepickerDateRange,
    comparisonEnabled: core.bool,
    comparisonOption: material_datepicker__comparison_option.ComparisonOption,
    comparisonSupported: core.bool,
    rangeTitle: core.String,
    comparisonTitle: core.String
  }));
  dart.setSetterSignature(src__material_datepicker__date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getSetters(src__material_datepicker__date_range_editor_model.DateRangeEditorModel.__proto__),
    value: material_datepicker__comparison.DatepickerComparison,
    supportedComparisonOptions: core.List$(material_datepicker__comparison_option.ComparisonOption),
    comparisonEnabled: core.bool,
    comparisonOption: material_datepicker__comparison_option.ComparisonOption
  }));
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.DateRangeEditorModel.__proto__),
    rangeId: dart.finalFieldType(core.String),
    comparisonId: dart.finalFieldType(core.String),
    [_ref]: dart.finalFieldType(ObservableReferenceOfDatepickerComparison()),
    calendar: dart.finalFieldType(ObservableReferenceOfCalendarState()),
    range: dart.finalFieldType(ObservableReferenceOfDateRange()),
    comparison: dart.finalFieldType(ObservableReferenceOfDateRange()),
    [_changes]: dart.finalFieldType(StreamControllerOfDateRangeChange()),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    minDate: dart.fieldType(model__date__date.Date),
    maxDate: dart.fieldType(model__date__date.Date),
    requireFullPeriods: dart.fieldType(core.bool),
    [_comparisonEnabled]: dart.fieldType(core.bool),
    basic: dart.fieldType(core.bool),
    shouldShowPredefinedList: dart.fieldType(core.bool),
    shouldShowCustomDateRangeColumn: dart.fieldType(core.bool),
    [_comparisonOption]: dart.fieldType(material_datepicker__comparison_option.ComparisonOption),
    [_supportedComparisonOptions]: dart.fieldType(ListOfComparisonOption()),
    [_customComparisonRange]: dart.fieldType(material_datepicker__range.DatepickerDateRange),
    [_comparisonTitle]: dart.fieldType(core.String),
    [_lastCause]: dart.fieldType(src__material_datepicker__date_range_editor_model.Action),
    [_validComparisonOptions]: dart.fieldType(ListOfComparisonOption()),
    hasNext: dart.fieldType(ObservableReferenceOfbool()),
    hasPrev: dart.fieldType(ObservableReferenceOfbool())
  }));
  const _optionMsgCache = Symbol('_optionMsgCache');
  const _primaryDateRange = Symbol('_primaryDateRange');
  const _updateOptionMsg = Symbol('_updateOptionMsg');
  src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent = class ComparisonRangeEditorComponent extends core.Object {
    get model() {
      return this[model];
    }
    set model(value) {
      this[model] = value;
    }
    get comparisonHeaderMsg() {
      return intl$.Intl.message("Compare", {name: "comparisonHeaderMsg", desc: "Label for a toggle that turns time comparison on/off."});
    }
    comparisonOptionMsg(option) {
      if (!dart.equals(this[_primaryDateRange], this.model.primaryRange)) {
        this[_updateOptionMsg]();
        this[_primaryDateRange] = this.model.primaryRange;
      }
      return this[_optionMsgCache][$_get](option);
    }
    [_updateOptionMsg]() {
      for (let option of this.model.validComparisonOptions) {
        this[_optionMsgCache][$_set](option, (() => {
          let t = option.computeComparisonRange(this.model.primaryRange);
          let l = t == null ? null : t.title;
          return l != null ? l : option.displayName;
        })());
      }
    }
  };
  (src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new = function() {
    this[model] = null;
    this[_optionMsgCache] = new (LinkedMapOfComparisonOption$String()).new();
    this[_primaryDateRange] = null;
  }).prototype = src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent);
  const model = Symbol("ComparisonRangeEditorComponent.model");
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.__proto__),
    comparisonOptionMsg: dart.fnType(core.String, [material_datepicker__comparison_option.ComparisonOption]),
    [_updateOptionMsg]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, () => ({
    __proto__: dart.getGetters(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.__proto__),
    comparisonHeaderMsg: core.String
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.__proto__),
    model: dart.fieldType(src__material_datepicker__date_range_editor_model.HasComparisonRange),
    [_optionMsgCache]: dart.fieldType(MapOfComparisonOption$String()),
    [_primaryDateRange]: dart.fieldType(material_datepicker__range.DatepickerDateRange)
  }));
  dart.trackLibraries("packages/angular_components/src/material_datepicker/comparison_range_editor.ddc", {
    "package:angular_components/src/material_datepicker/date_range_editor_model.dart": src__material_datepicker__date_range_editor_model,
    "package:angular_components/src/material_datepicker/comparison_range_editor.dart": src__material_datepicker__comparison_range_editor
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor_model.dart","comparison_range_editor.dart"],"names":[],"mappings":"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","file":"comparison_range_editor.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__date_range_editor_model: src__material_datepicker__date_range_editor_model,
    src__material_datepicker__comparison_range_editor: src__material_datepicker__comparison_range_editor
  };
});

//# sourceMappingURL=comparison_range_editor.ddc.js.map
