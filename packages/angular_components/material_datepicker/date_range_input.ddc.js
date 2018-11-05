define(['dart_sdk', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/observable/observable', 'packages/intl/intl', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, date, calendar, observable, intl, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__date__date = date.model__date__date;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const model__observable__observable = observable.model__observable__observable;
  const intl$ = intl.intl;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_datepicker__date_range_input = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  let StreamControllerOfDateRange = () => (StreamControllerOfDateRange = dart.constFn(async.StreamController$(model__date__date.DateRange)))();
  let ObservableReferenceOfCalendarState = () => (ObservableReferenceOfCalendarState = dart.constFn(model__observable__observable.ObservableReference$(material_datepicker__calendar.CalendarState)))();
  const _changeDetector = Symbol('_changeDetector');
  const _calendarStream = Symbol('_calendarStream');
  const _disabled = Symbol('_disabled');
  const _controller = Symbol('_controller');
  const _isClearRangeSelected = Symbol('_isClearRangeSelected');
  const _range = Symbol('_range');
  const _model = Symbol('_model');
  const _onCalendarChange = Symbol('_onCalendarChange');
  material_datepicker__date_range_input.DateRangeInputComponent = class DateRangeInputComponent extends core.Object {
    set disabled(isDisabled) {
      this[_disabled] = isDisabled;
    }
    get disabled() {
      return this[_disabled];
    }
    ngOnInit() {
      this[_calendarStream] = this[_model].stream.listen(dart.bind(this, _onCalendarChange));
    }
    ngOnDestroy() {
      let t = this[_calendarStream];
      t == null ? null : t.cancel();
    }
    [_onCalendarChange](state) {
      this[_changeDetector].markForCheck();
    }
    onStartFocused() {
      if (dart.test(this[_disabled])) {
        return;
      }
      if (this.state.currentSelection == this.rangeId && !dart.test(this.state.previewAnchoredAtStart)) return;
      this[_model].value = this.state.select(this.rangeId, {previewAnchoredAtStart: false});
    }
    onEndFocused() {
      if (dart.test(this[_disabled])) {
        return;
      }
      if (this.state.currentSelection == this.rangeId && dart.test(this.state.previewAnchoredAtStart)) return;
      this[_model].value = this.state.select(this.rangeId, {previewAnchoredAtStart: true});
    }
    get isStartActive() {
      return this.state.currentSelection == this.rangeId && dart.test(this.state.selections[$isNotEmpty]) && !dart.test(this.state.previewAnchoredAtStart);
    }
    get isEndActive() {
      return this.state.currentSelection == this.rangeId && dart.test(this.state.selections[$isNotEmpty]) && dart.test(this.state.previewAnchoredAtStart);
    }
    get rangeChange() {
      return this[_controller].stream;
    }
    set range(range) {
      if (!dart.equals(range, this[_range]) && (range == null ? null : range.start) != null && (range == null ? null : range.end) != null) {
        this[_controller].add(range);
      }
      this[_range] = range != null ? range : new model__date__date.DateRange.new(null, null);
    }
    set isClearRangeSelected(value) {
      this[_isClearRangeSelected] = value;
    }
    get isDateInputRequired() {
      return !dart.test(this[_isClearRangeSelected]);
    }
    get range() {
      return this[_range];
    }
    set state(state) {
      this[_model].value = state;
      if (this[_calendarStream] == null) this[_onCalendarChange](state);
    }
    get state() {
      return this[_model].value;
    }
    get stateChange() {
      return this[_model].stream;
    }
    get rangeId() {
      return this[rangeId];
    }
    set rangeId(value) {
      this[rangeId] = value;
    }
    get start() {
      return this.range.start;
    }
    set start(date) {
      if (!dart.equals(this.range.start, date)) {
        this.range = new model__date__date.DateRange.new(date, this.range.end);
      }
    }
    get end() {
      return this.range.end;
    }
    set end(date) {
      if (!dart.equals(this.range.end, date)) {
        this.range = new model__date__date.DateRange.new(this.range.start, date);
      }
    }
    get startMaxDate() {
      let l = this.end;
      return l != null ? l : this.maxDate;
    }
    get endMinDate() {
      let l = this.start;
      return l != null ? l : this.minDate;
    }
    get dateFormat() {
      return this[dateFormat];
    }
    set dateFormat(value) {
      this[dateFormat] = value;
    }
    get activeDateFormat() {
      return this[activeDateFormat];
    }
    set activeDateFormat(value) {
      this[activeDateFormat] = value;
    }
    get startDateFormat() {
      return dart.test(this.isStartActive) ? this.activeDateFormat : this.dateFormat;
    }
    get endDateFormat() {
      return dart.test(this.isEndActive) ? this.activeDateFormat : this.dateFormat;
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
    get startDateMsg() {
      return this[startDateMsg];
    }
    set startDateMsg(value) {
      super.startDateMsg = value;
    }
    get endDateMsg() {
      return this[endDateMsg];
    }
    set endDateMsg(value) {
      super.endDateMsg = value;
    }
  };
  (material_datepicker__date_range_input.DateRangeInputComponent.new = function(changeDetector) {
    this[_calendarStream] = null;
    this[_disabled] = false;
    this[_controller] = StreamControllerOfDateRange().broadcast();
    this[_isClearRangeSelected] = false;
    this[_range] = new model__date__date.DateRange.new(null, null);
    this[_model] = new (ObservableReferenceOfCalendarState()).new(new material_datepicker__calendar.CalendarState.empty(), {coalesce: true});
    this[rangeId] = null;
    this[dateFormat] = new intl$.DateFormat.yMMMd();
    this[activeDateFormat] = new intl$.DateFormat.yMd();
    this[maxDate] = new model__date__date.Date.new(9999, core.DateTime.december, 31);
    this[minDate] = new model__date__date.Date.new(1000, core.DateTime.january, 1);
    this[startDateMsg] = intl$.Intl.message("Start date", {name: "DateRangeInputComponent_startDateMsg", desc: "ARIA label for the input specifying the start of the date range"});
    this[endDateMsg] = intl$.Intl.message("End date", {name: "DateRangeInputComponent_endDateMsg", desc: "ARIA label for the input specifying the end of the date range"});
    this[_changeDetector] = changeDetector;
  }).prototype = material_datepicker__date_range_input.DateRangeInputComponent.prototype;
  dart.addTypeTests(material_datepicker__date_range_input.DateRangeInputComponent);
  const rangeId = Symbol("DateRangeInputComponent.rangeId");
  const dateFormat = Symbol("DateRangeInputComponent.dateFormat");
  const activeDateFormat = Symbol("DateRangeInputComponent.activeDateFormat");
  const maxDate = Symbol("DateRangeInputComponent.maxDate");
  const minDate = Symbol("DateRangeInputComponent.minDate");
  const startDateMsg = Symbol("DateRangeInputComponent.startDateMsg");
  const endDateMsg = Symbol("DateRangeInputComponent.endDateMsg");
  material_datepicker__date_range_input.DateRangeInputComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_datepicker__date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_input.DateRangeInputComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onCalendarChange]: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    onStartFocused: dart.fnType(dart.void, []),
    onEndFocused: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_input.DateRangeInputComponent.__proto__),
    disabled: core.bool,
    isStartActive: core.bool,
    isEndActive: core.bool,
    rangeChange: async.Stream$(model__date__date.DateRange),
    isDateInputRequired: core.bool,
    range: model__date__date.DateRange,
    state: material_datepicker__calendar.CalendarState,
    stateChange: async.Stream$(material_datepicker__calendar.CalendarState),
    start: model__date__date.Date,
    end: model__date__date.Date,
    startMaxDate: model__date__date.Date,
    endMinDate: model__date__date.Date,
    startDateFormat: intl$.DateFormat,
    endDateFormat: intl$.DateFormat
  }));
  dart.setSetterSignature(material_datepicker__date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getSetters(material_datepicker__date_range_input.DateRangeInputComponent.__proto__),
    disabled: core.bool,
    range: model__date__date.DateRange,
    isClearRangeSelected: core.bool,
    state: material_datepicker__calendar.CalendarState,
    start: model__date__date.Date,
    end: model__date__date.Date
  }));
  dart.setFieldSignature(material_datepicker__date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_input.DateRangeInputComponent.__proto__),
    [_changeDetector]: dart.fieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_calendarStream]: dart.fieldType(async.StreamSubscription),
    [_disabled]: dart.fieldType(core.bool),
    [_controller]: dart.finalFieldType(StreamControllerOfDateRange()),
    [_isClearRangeSelected]: dart.fieldType(core.bool),
    [_range]: dart.fieldType(model__date__date.DateRange),
    [_model]: dart.fieldType(ObservableReferenceOfCalendarState()),
    rangeId: dart.fieldType(core.String),
    dateFormat: dart.fieldType(intl$.DateFormat),
    activeDateFormat: dart.fieldType(intl$.DateFormat),
    maxDate: dart.fieldType(model__date__date.Date),
    minDate: dart.fieldType(model__date__date.Date),
    startDateMsg: dart.finalFieldType(core.String),
    endDateMsg: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_input.ddc", {
    "package:angular_components/material_datepicker/date_range_input.dart": material_datepicker__date_range_input
  }, '{"version":3,"sourceRoot":"","sources":["date_range_input.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;iBAmEe,UAAe;AAC1B,qBAAS,GAAG,UAAU;IACxB;;YAEqB,gBAAS;;;AAK5B,2BAAe,GAAG,YAAM,OAAO,OAAO,CAAC,kCAAiB;IAC1D;;AAIE,mCAAe;;IACjB;wBAEuB,KAAmB;AACxC,2BAAe,aAAa;IAC9B;;AAGE,oBAAI,eAAS,GAAE;AACb;;AAEF,UAAI,UAAK,iBAAiB,IAAI,YAAO,eAAK,UAAK,uBAAuB,GACpE;AACF,kBAAM,MAAM,GAAG,UAAK,OAAO,CAAC,YAAO,2BAA0B;IAC/D;;AAGE,oBAAI,eAAS,GAAE;AACb;;AAEF,UAAI,UAAK,iBAAiB,IAAI,YAAO,cAAI,UAAK,uBAAuB,GACnE;AACF,kBAAM,MAAM,GAAG,UAAK,OAAO,CAAC,YAAO,2BAA0B;IAC/D;;YAGI,AAC4B,WADvB,iBAAiB,IAAI,YAAO,cACjC,UAAK,WAAW,aAAW,gBAC1B,UAAK,uBAAuB;;;YAG7B,AAC4B,WADvB,iBAAiB,IAAI,YAAO,cACjC,UAAK,WAAW,aAAW,eAC3B,UAAK,uBAAuB;;;YAKK,kBAAW,OAAO;;cAK7C,KAAe;AACvB,uBAAI,KAAK,EAAI,YAAM,MAAI,KAAK,kBAAL,KAAK,MAAO,KAAI,SAAQ,KAAK,kBAAL,KAAK,IAAK,KAAI,MAAM;AAEjE,yBAAW,IAAI,CAAC,KAAK;;AAEvB,kBAAM,GAAG,KAAK,WAAL,KAAK,OAAI,+BAAS,CAAC,MAAM;IACpC;6BAQyB,KAAU;AACjC,iCAAqB,GAAG,KAAK;IAC/B;;YAKgC,YAAC,2BAAqB;;;YAG/B,aAAM;;cAKnB,KAAmB;AAC3B,kBAAM,MAAM,GAAG,KAAK;AACpB,UAAI,qBAAe,IAAI,MAAM,uBAAiB,CAAC,KAAK;IACtD;;YAE2B,aAAM,MAAM;;;YAOE,aAAM,OAAO;;IAI/C;;;;;;;YAEW,WAAK,MAAM;;cACnB,IAAS;AACjB,uBAAI,UAAK,MAAM,EAAI,IAAI,GAAE;AACvB,kBAAK,OAAG,+BAAS,CAAC,IAAI,EAAE,UAAK,IAAI;;IAErC;;YAEgB,WAAK,IAAI;;YACjB,IAAS;AACf,uBAAI,UAAK,IAAI,EAAI,IAAI,GAAE;AACrB,kBAAK,OAAG,+BAAS,CAAC,UAAK,MAAM,EAAE,IAAI;;IAEvC;;cAMyB,QAAG;6BAAI,YAAO;;;cAChB,UAAK;6BAAI,YAAO;;IAK5B;;;;;;IAMA;;;;;;;uBAGP,kBAAa,IAAG,qBAAgB,GAAG,eAAU;;;uBAEjB,gBAAW,IAAG,qBAAgB,GAAG,eAAU;;IAKtE;;;;;;IAKA;;;;;;IAEC;;;;;;IAIA;;;;;;;;IAnKa,qBAAe;IAa7B,eAAS,GAAG;IAgDX,iBAAW,GAAG,uCAAqC;IAYpD,2BAAqB,GAAG;IAenB,YAAM,OAAG,+BAAS,CAAC,MAAM;IAYA,YAAM,OACrC,0CAAmB,KAAC,iDAAmB,eAAc;IASlD,aAAO;IA0BH,gBAAU,OAAG,sBAAgB;IAM7B,sBAAgB,OAAG,oBAAc;IAUvC,aAAO,OAAG,0BAAI,CAAC,MAAM,aAAQ,SAAS,EAAE;IAKxC,aAAO,OAAG,0BAAI,CAAC,MAAM,aAAQ,QAAQ,EAAE;IAEtC,kBAAY,GAAG,UAAI,QAAQ,CAAC,qBACxB,8CACA;IAEJ,gBAAU,GAAG,UAAI,QAAQ,CAAC,mBACtB,4CACA;IAnKmB,qBAAe;EAAC","file":"date_range_input.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_input: material_datepicker__date_range_input
  };
});

//# sourceMappingURL=date_range_input.ddc.js.map
