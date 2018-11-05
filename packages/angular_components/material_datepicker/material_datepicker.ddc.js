define(['dart_sdk', 'packages/angular_components/utils/angular/css/css', 'packages/intl/intl', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/material_datepicker/range', 'packages/quiver/time', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_input/material_input'], function(dart_sdk, css, intl, alignment, date, calendar, range, time, focus_interface, keyboard_handler_mixin, focusable_mixin, change_detection, has_disabled, dropdown_button, material_input) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__angular__css__css = css.utils__angular__css__css;
  const intl$ = intl.intl;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__date__date = date.model__date__date;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const material_datepicker__range = range.material_datepicker__range;
  const time$ = time.time;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const mixins__focusable_mixin = focusable_mixin.mixins__focusable_mixin;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_select__dropdown_button = dropdown_button.material_select__dropdown_button;
  const material_input__material_input = material_input.material_input__material_input;
  const _root = Object.create(null);
  const material_datepicker__material_datepicker = Object.create(_root);
  const $classes = dartx.classes;
  const $isEmpty = dartx.isEmpty;
  let StreamControllerOfDate = () => (StreamControllerOfDate = dart.constFn(async.StreamController$(model__date__date.Date)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let JSArrayOfSingleDayRange = () => (JSArrayOfSingleDayRange = dart.constFn(_interceptors.JSArray$(material_datepicker__range.SingleDayRange)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let ListOfSingleDayRange = () => (ListOfSingleDayRange = dart.constFn(core.List$(material_datepicker__range.SingleDayRange)))();
  const _compact = Symbol('_compact');
  const _controller = Symbol('_controller');
  const _date = Symbol('_date');
  const _calendar = Symbol('_calendar');
  const _disabled = Symbol('_disabled');
  const _popupVisible = Symbol('_popupVisible');
  const _popupVisibleController = Symbol('_popupVisibleController');
  const _presetDates = Symbol('_presetDates');
  const _numCalendarWeekRows = Symbol('_numCalendarWeekRows');
  const _updateLabel = Symbol('_updateLabel');
  const _setDateInternal = Symbol('_setDateInternal');
  const _focusTarget = Symbol('_focusTarget');
  const KeyboardHandlerMixin_FocusableMixin$ = class KeyboardHandlerMixin_FocusableMixin extends model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin {};
  (KeyboardHandlerMixin_FocusableMixin$.new = function() {
    mixins__focusable_mixin.FocusableMixin.new.call(this);
    KeyboardHandlerMixin_FocusableMixin$.__proto__.new.call(this);
  }).prototype = KeyboardHandlerMixin_FocusableMixin$.prototype;
  dart.mixinMembers(KeyboardHandlerMixin_FocusableMixin$, mixins__focusable_mixin.FocusableMixin);
  material_datepicker__material_datepicker.MaterialDatepickerComponent = class MaterialDatepickerComponent extends KeyboardHandlerMixin_FocusableMixin$ {
    get popupClassName() {
      return this[popupClassName];
    }
    set popupClassName(value) {
      super.popupClassName = value;
    }
    get outputFormat() {
      return this[outputFormat];
    }
    set outputFormat(value) {
      this[outputFormat] = value;
    }
    get maxDate() {
      return this[maxDate];
    }
    set maxDate(value) {
      this[maxDate] = value;
    }
    get minDate() {
      return this[minDate];
    }
    set minDate(value) {
      this[minDate] = value;
    }
    set compact(value) {
      this[_compact] = value;
    }
    get compact() {
      return this[_compact];
    }
    get required() {
      return this[required];
    }
    set required(value) {
      this[required] = value;
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    get dateChange() {
      return this[_controller].stream;
    }
    [_setDateInternal](date, opts) {
      let cause = opts && 'cause' in opts ? opts.cause : material_datepicker__calendar.CausedBy.external;
      let closePopup = opts && 'closePopup' in opts ? opts.closePopup : true;
      if (dart.equals(date, this[_date])) return;
      this[_controller].add(date);
      this[_date] = date;
      this[_calendar] = date != null ? this[_calendar].setCurrentSelection(date, date, {cause: cause}) : this[_calendar].clearCurrentSelection();
      this[_updateLabel]();
      if (dart.test(closePopup)) {
        this.popupVisible = false;
      }
    }
    set date(date) {
      this[_setDateInternal](date, {closePopup: false});
    }
    get date() {
      return this[_date];
    }
    get calendar() {
      return this[_calendar];
    }
    set calendar(state) {
      this[_calendar] = state;
      if (!dart.test(state.has(state.currentSelection))) return;
      this[_setDateInternal](state.selection(state.currentSelection).start, {cause: material_datepicker__calendar.CausedBy.rangeConfirm});
    }
    set disabled(value) {
      this[_disabled] = value;
      this[_popupVisible] = dart.test(this[_popupVisible]) && !dart.test(this.disabled);
    }
    get disabled() {
      return this[_disabled];
    }
    get popupVisible() {
      return this[_popupVisible];
    }
    get popupVisibleChange() {
      return this[_popupVisibleController].stream;
    }
    set popupVisible(visible) {
      this[_popupVisible] = dart.test(visible) && !dart.test(this.disabled);
      this[_popupVisibleController].add(this[_popupVisible]);
      this.focusable = this[_focusTarget];
    }
    ngAfterViewInit() {
      this.focusable = this[_focusTarget];
    }
    get dropdownButton() {
      return this[dropdownButton];
    }
    set dropdownButton(value) {
      this[dropdownButton] = value;
    }
    get textInput() {
      return this[textInput];
    }
    set textInput(value) {
      this[textInput] = value;
    }
    get [_focusTarget]() {
      return focus__focus_interface.Focusable._check(dart.test(this.disabled) ? null : dart.test(this[_popupVisible]) ? this.textInput : this.dropdownButton);
    }
    get selectDatePlaceHolderMsg() {
      return intl$.Intl.message("Select a date", {name: "selectDatePlaceHolderMsg", desc: "Placeholder text for datepicker with an empty date."});
    }
    get placeholderMsg() {
      return intl$.Intl.message("Enter date", {name: "placeholderMsg", desc: "Placeholder text for an empty date picker text box."});
    }
    get formattedDate() {
      return core.String._check(this.date != null ? this.date.format(this.outputFormat) : this.selectDatePlaceHolderMsg);
    }
    onTrigger() {
      this.popupVisible = !dart.test(this.disabled);
    }
    handleEscapeKey(event) {
      this.popupVisible = false;
    }
    get presetDates() {
      return this[_presetDates];
    }
    set presetDates(preset) {
      this[_presetDates] = preset;
      this[_updateLabel]();
    }
    isPresetDateSelected(presetDate) {
      return dart.equals(this.date, presetDate.start);
    }
    get labelMsg() {
      return this[labelMsg];
    }
    set labelMsg(value) {
      this[labelMsg] = value;
    }
    [_updateLabel]() {
      if (dart.test(this.presetDates[$isEmpty])) return;
      this.labelMsg = material_datepicker__material_datepicker.MaterialDatepickerComponent.customDateMsg;
      for (let presetDate of this.presetDates) {
        if (dart.equals(this.date, presetDate.start)) {
          this.labelMsg = presetDate.title;
          break;
        }
      }
    }
    onPresetClicked(selected) {
      this[_setDateInternal](selected.start);
    }
    setDateFromInput(newDate) {
      this[_setDateInternal](newDate);
    }
    set numCalendarWeekRows(value) {
      this[_numCalendarWeekRows] = value;
    }
    get calendarWeekRowsStyle() {
      return this[_numCalendarWeekRows] != null ? "num-week-rows-" + dart.str(this[_numCalendarWeekRows]) : "";
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
  };
  (material_datepicker__material_datepicker.MaterialDatepickerComponent.new = function(element, popupClass, clock) {
    this[outputFormat] = new intl$.DateFormat.yMMMd();
    this[maxDate] = null;
    this[minDate] = null;
    this[_compact] = !dart.test(html.window.matchMedia("(pointer: coarse)").matches);
    this[required] = true;
    this[preferredPositions] = laminate__enums__alignment.RelativePosition.overlapAlignments;
    this[_controller] = StreamControllerOfDate().broadcast();
    this[_date] = null;
    this[_calendar] = new material_datepicker__calendar.CalendarState.empty();
    this[_disabled] = false;
    this[_popupVisible] = false;
    this[_popupVisibleController] = StreamControllerOfbool().broadcast();
    this[dropdownButton] = null;
    this[textInput] = null;
    this[_presetDates] = JSArrayOfSingleDayRange().of([]);
    this[labelMsg] = null;
    this[_numCalendarWeekRows] = null;
    this[error] = null;
    this[popupClassName] = utils__angular__css__css.constructEncapsulatedCss(popupClass, element[$classes]);
    material_datepicker__material_datepicker.MaterialDatepickerComponent.__proto__.new.call(this);
    let t = clock;
    t == null ? clock = new time$.Clock.new() : t;
    let now = clock.now();
    this.minDate = new model__date__date.Date.new(dart.notNull(now.year) - 10, core.DateTime.january, 1);
    this.maxDate = new model__date__date.Date.new(dart.notNull(now.year) + 10, core.DateTime.december, 31);
  }).prototype = material_datepicker__material_datepicker.MaterialDatepickerComponent.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker.MaterialDatepickerComponent);
  const popupClassName = Symbol("MaterialDatepickerComponent.popupClassName");
  const outputFormat = Symbol("MaterialDatepickerComponent.outputFormat");
  const maxDate = Symbol("MaterialDatepickerComponent.maxDate");
  const minDate = Symbol("MaterialDatepickerComponent.minDate");
  const required = Symbol("MaterialDatepickerComponent.required");
  const preferredPositions = Symbol("MaterialDatepickerComponent.preferredPositions");
  const dropdownButton = Symbol("MaterialDatepickerComponent.dropdownButton");
  const textInput = Symbol("MaterialDatepickerComponent.textInput");
  const labelMsg = Symbol("MaterialDatepickerComponent.labelMsg");
  const error = Symbol("MaterialDatepickerComponent.error");
  material_datepicker__material_datepicker.MaterialDatepickerComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, interfaces__has_disabled.HasDisabled];
  dart.setMethodSignature(material_datepicker__material_datepicker.MaterialDatepickerComponent, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker.MaterialDatepickerComponent.__proto__),
    [_setDateInternal]: dart.fnType(dart.void, [model__date__date.Date], {cause: material_datepicker__calendar.CausedBy, closePopup: core.bool}),
    ngAfterViewInit: dart.fnType(dart.void, []),
    onTrigger: dart.fnType(dart.void, []),
    isPresetDateSelected: dart.fnType(core.bool, [material_datepicker__range.SingleDayRange]),
    [_updateLabel]: dart.fnType(dart.void, []),
    onPresetClicked: dart.fnType(dart.void, [material_datepicker__range.SingleDayRange]),
    setDateFromInput: dart.fnType(dart.void, [model__date__date.Date])
  }));
  dart.setGetterSignature(material_datepicker__material_datepicker.MaterialDatepickerComponent, () => ({
    __proto__: dart.getGetters(material_datepicker__material_datepicker.MaterialDatepickerComponent.__proto__),
    compact: core.bool,
    dateChange: async.Stream$(model__date__date.Date),
    date: model__date__date.Date,
    calendar: material_datepicker__calendar.CalendarState,
    disabled: core.bool,
    popupVisible: core.bool,
    popupVisibleChange: async.Stream$(core.bool),
    [_focusTarget]: focus__focus_interface.Focusable,
    selectDatePlaceHolderMsg: dart.dynamic,
    placeholderMsg: dart.dynamic,
    formattedDate: core.String,
    presetDates: core.List$(material_datepicker__range.SingleDayRange),
    calendarWeekRowsStyle: core.String
  }));
  dart.setSetterSignature(material_datepicker__material_datepicker.MaterialDatepickerComponent, () => ({
    __proto__: dart.getSetters(material_datepicker__material_datepicker.MaterialDatepickerComponent.__proto__),
    compact: core.bool,
    date: model__date__date.Date,
    calendar: material_datepicker__calendar.CalendarState,
    disabled: core.bool,
    popupVisible: core.bool,
    presetDates: core.List$(material_datepicker__range.SingleDayRange),
    numCalendarWeekRows: core.int
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker.MaterialDatepickerComponent, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker.MaterialDatepickerComponent.__proto__),
    popupClassName: dart.finalFieldType(core.String),
    outputFormat: dart.fieldType(intl$.DateFormat),
    maxDate: dart.fieldType(model__date__date.Date),
    minDate: dart.fieldType(model__date__date.Date),
    [_compact]: dart.fieldType(core.bool),
    required: dart.fieldType(core.bool),
    preferredPositions: dart.fieldType(ListOfRelativePosition()),
    [_controller]: dart.finalFieldType(StreamControllerOfDate()),
    [_date]: dart.fieldType(model__date__date.Date),
    [_calendar]: dart.fieldType(material_datepicker__calendar.CalendarState),
    [_disabled]: dart.fieldType(core.bool),
    [_popupVisible]: dart.fieldType(core.bool),
    [_popupVisibleController]: dart.finalFieldType(StreamControllerOfbool()),
    dropdownButton: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    textInput: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_presetDates]: dart.fieldType(ListOfSingleDayRange()),
    labelMsg: dart.fieldType(core.String),
    [_numCalendarWeekRows]: dart.fieldType(core.int),
    error: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_datepicker__material_datepicker.MaterialDatepickerComponent, {
    /*material_datepicker__material_datepicker.MaterialDatepickerComponent.customDateMsg*/get customDateMsg() {
      return intl$.Intl.message("Custom", {name: "customDateMsg", desc: "Indicates that a single custom date is selected"});
    }
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/material_datepicker.ddc", {
    "package:angular_components/material_datepicker/material_datepicker.dart": material_datepicker__material_datepicker
  }, '{"version":3,"sourceRoot":"","sources":["material_datepicker.dart"],"names":[],"mappings":"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","file":"material_datepicker.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_datepicker: material_datepicker__material_datepicker
  };
});

//# sourceMappingURL=material_datepicker.ddc.js.map
