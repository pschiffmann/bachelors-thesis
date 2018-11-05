define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/focus/focus', 'packages/angular_forms/src/directives', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/model/ui/icon', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/interfaces/has_disabled'], function(dart_sdk, disposer, selection_model, focus, directives, change_detection, ng_zone, icon, events, has_disabled) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const focus__focus = focus.focus__focus;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const model__ui__icon = icon.model__ui__icon;
  const utils__browser__events__events = events.utils__browser__events__events;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const _root = Object.create(null);
  const material_radio__material_radio_group = Object.create(_root);
  const material_radio__material_radio = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $last = dartx.last;
  const $isEmpty = dartx.isEmpty;
  const $single = dartx.single;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $indexOf = dartx.indexOf;
  const $modulo = dartx['%'];
  const $length = dartx.length;
  const $_get = dartx._get;
  const $target = dartx.target;
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio__material_radio.MaterialRadioComponent)))();
  let SelectionModelOfMaterialRadioComponent = () => (SelectionModelOfMaterialRadioComponent = dart.constFn(model__selection__selection_model.SelectionModel$(material_radio__material_radio.MaterialRadioComponent)))();
  let SelectionChangeRecordOfMaterialRadioComponent = () => (SelectionChangeRecordOfMaterialRadioComponent = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(material_radio__material_radio.MaterialRadioComponent)))();
  let ListOfSelectionChangeRecordOfMaterialRadioComponent = () => (ListOfSelectionChangeRecordOfMaterialRadioComponent = dart.constFn(core.List$(SelectionChangeRecordOfMaterialRadioComponent())))();
  let ListOfSelectionChangeRecordOfMaterialRadioComponentToNull = () => (ListOfSelectionChangeRecordOfMaterialRadioComponentToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecordOfMaterialRadioComponent()])))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let MaterialRadioComponentTobool = () => (MaterialRadioComponentTobool = dart.constFn(dart.fnType(core.bool, [material_radio__material_radio.MaterialRadioComponent])))();
  let ListOfMaterialRadioComponent = () => (ListOfMaterialRadioComponent = dart.constFn(core.List$(material_radio__material_radio.MaterialRadioComponent)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let StreamControllerOfFocusMoveEvent = () => (StreamControllerOfFocusMoveEvent = dart.constFn(async.StreamController$(focus__focus.FocusMoveEvent)))();
  let ControlValueAccessorOfbool = () => (ControlValueAccessorOfbool = dart.constFn(src__directives__control_value_accessor.ControlValueAccessor$(core.bool)))();
  const _ngZone = Symbol('_ngZone');
  const _disposer = Symbol('_disposer');
  const _radioComponents = Symbol('_radioComponents');
  const _onChange = Symbol('_onChange');
  const _preselectedValue = Symbol('_preselectedValue');
  const _isContentInit = Symbol('_isContentInit');
  const _selected = Symbol('_selected');
  const _resetTabIndex = Symbol('_resetTabIndex');
  const _selectedRadioComponent = Symbol('_selectedRadioComponent');
  const _moveFocus = Symbol('_moveFocus');
  const _moveSelection = Symbol('_moveSelection');
  const _getFocusableChildren = Symbol('_getFocusableChildren');
  const _move = Symbol('_move');
  material_radio__material_radio_group.MaterialRadioGroupComponent = class MaterialRadioGroupComponent extends core.Object {
    set radioComponents(radioComponents) {
      this[_radioComponents] = radioComponents;
      for (let radioComponent of this[_radioComponents]) {
        this[_disposer].addStreamSubscription(focus__focus.FocusMoveEvent, radioComponent.focusmove.listen(dart.bind(this, _moveFocus)));
        this[_disposer].addStreamSubscription(focus__focus.FocusMoveEvent, radioComponent.selectionmove.listen(dart.bind(this, _moveSelection)));
      }
    }
    writeValue(selectedValue) {
      if (selectedValue != null) this.selected = selectedValue;
    }
    registerOnChange(callback) {
      this[_disposer].addStreamSubscription(dart.dynamic, this.onChange.listen(callback));
    }
    registerOnTouched(_) {}
    onDisabledChanged(isDisabled) {}
    [_resetTabIndex]() {
      this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
        if (this[_radioComponents] == null) return;
        for (let radioComponent of this[_radioComponents]) {
          radioComponent.tabbable = false;
        }
        let selectedRadioComponent = this[_selectedRadioComponent];
        if (selectedRadioComponent != null) {
          selectedRadioComponent.tabbable = true;
        } else if (dart.test(this.focusSelection.isEmpty)) {
          let focusables = this[_getFocusableChildren]();
          if (dart.test(focusables[$isNotEmpty])) {
            focusables[$first].tabbable = true;
            focusables[$last].tabbable = true;
          }
        }
      }, voidToNull()));
    }
    get onChange() {
      return this[_onChange].stream;
    }
    get valueSelection() {
      return this[valueSelection];
    }
    set valueSelection(value) {
      this[valueSelection] = value;
    }
    get componentSelection() {
      return this[componentSelection];
    }
    set componentSelection(value) {
      super.componentSelection = value;
    }
    get [_selectedRadioComponent]() {
      if (dart.test(this.componentSelection.selectedValues[$isEmpty])) return null;
      return this.componentSelection.selectedValues[$single];
    }
    get focusSelection() {
      return this[focusSelection];
    }
    set focusSelection(value) {
      super.focusSelection = value;
    }
    set selected(selectedValue) {
      if (this[_radioComponents] != null && dart.test(this[_isContentInit])) {
        for (let radioComponent of this[_radioComponents]) {
          radioComponent.checked = dart.equals(radioComponent.value, selectedValue);
        }
        this[_preselectedValue] = null;
      } else {
        this[_preselectedValue] = selectedValue;
      }
    }
    get selected() {
      return this[_selected];
    }
    [_moveFocus](event) {
      return this[_move](event);
    }
    [_moveSelection](event) {
      return this[_move](event, true);
    }
    [_getFocusableChildren](source) {
      if (source === void 0) source = null;
      return this[_radioComponents][$where](dart.fn(radioComponent => !dart.test(radioComponent.disabled) || dart.equals(radioComponent, source), MaterialRadioComponentTobool()))[$toList]();
    }
    [_move](event, moveSelection) {
      if (moveSelection === void 0) moveSelection = false;
      let source = material_radio__material_radio.MaterialRadioComponent._check(event.focusItem);
      let focusableChildren = this[_getFocusableChildren](source);
      let index = focusableChildren[$indexOf](source);
      let newIndex = (dart.notNull(index) + dart.notNull(event.offset))[$modulo](focusableChildren[$length]);
      if (dart.test(moveSelection)) focusableChildren[$_get](newIndex).checked = true;
      focusableChildren[$_get](newIndex).focus();
    }
    ngAfterContentInit() {
      this[_isContentInit] = true;
      if (this[_preselectedValue] != null) {
        this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
          if (this[_preselectedValue] == null) return;
          this.selected = this[_preselectedValue];
          this[_preselectedValue] = null;
        }, voidToNull()));
      } else {
        this[_resetTabIndex]();
      }
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_radio__material_radio_group.MaterialRadioGroupComponent.new = function(ngZone, cd) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_radioComponents] = JSArrayOfMaterialRadioComponent().of([]);
    this[_onChange] = async.StreamController.broadcast();
    this[valueSelection] = null;
    this[componentSelection] = SelectionModelOfMaterialRadioComponent().single();
    this[focusSelection] = SelectionModelOfMaterialRadioComponent().single();
    this[_preselectedValue] = null;
    this[_isContentInit] = false;
    this[_selected] = null;
    this[_ngZone] = ngZone;
    cd == null ? null : cd.valueAccessor = this;
    this[_disposer].addStreamSubscription(ListOfSelectionChangeRecordOfMaterialRadioComponent(), this.componentSelection.selectionChanges.listen(dart.fn(checkedChanges => {
      for (let checkedChange of checkedChanges) {
        for (let radioComponent of checkedChange.removed) {
          radioComponent.checked = false;
        }
      }
      this[_resetTabIndex]();
      let t = this[_selectedRadioComponent];
      this[_selected] = t == null ? null : t.value;
      if (this.valueSelection != null && this[_selected] != null) {
        this.valueSelection.select(this[_selected]);
      }
      this[_onChange].add(this[_selected]);
    }, ListOfSelectionChangeRecordOfMaterialRadioComponentToNull())));
    this[_disposer].addStreamSubscription(ListOfSelectionChangeRecordOfMaterialRadioComponent(), this.focusSelection.selectionChanges.listen(dart.fn(_ => {
      this[_resetTabIndex]();
    }, ListOfSelectionChangeRecordOfMaterialRadioComponentToNull())));
  }).prototype = material_radio__material_radio_group.MaterialRadioGroupComponent.prototype;
  dart.addTypeTests(material_radio__material_radio_group.MaterialRadioGroupComponent);
  const valueSelection = Symbol("MaterialRadioGroupComponent.valueSelection");
  const componentSelection = Symbol("MaterialRadioGroupComponent.componentSelection");
  const focusSelection = Symbol("MaterialRadioGroupComponent.focusSelection");
  material_radio__material_radio_group.MaterialRadioGroupComponent[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy, src__core__metadata__lifecycle_hooks.AfterContentInit];
  dart.setMethodSignature(material_radio__material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getMethods(material_radio__material_radio_group.MaterialRadioGroupComponent.__proto__),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnChange: dart.fnType(dart.void, [src__directives__control_value_accessor.ChangeFunction]),
    registerOnTouched: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])]),
    onDisabledChanged: dart.fnType(dart.void, [core.bool]),
    [_resetTabIndex]: dart.fnType(dart.void, []),
    [_moveFocus]: dart.fnType(dart.void, [focus__focus.FocusMoveEvent]),
    [_moveSelection]: dart.fnType(dart.void, [focus__focus.FocusMoveEvent]),
    [_getFocusableChildren]: dart.fnType(core.List$(material_radio__material_radio.MaterialRadioComponent), [], [material_radio__material_radio.MaterialRadioComponent]),
    [_move]: dart.fnType(dart.void, [focus__focus.FocusMoveEvent], [core.bool]),
    ngAfterContentInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_radio__material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getGetters(material_radio__material_radio_group.MaterialRadioGroupComponent.__proto__),
    onChange: async.Stream,
    [_selectedRadioComponent]: material_radio__material_radio.MaterialRadioComponent,
    selected: dart.dynamic
  }));
  dart.setSetterSignature(material_radio__material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getSetters(material_radio__material_radio_group.MaterialRadioGroupComponent.__proto__),
    radioComponents: core.List$(material_radio__material_radio.MaterialRadioComponent),
    selected: dart.dynamic
  }));
  dart.setFieldSignature(material_radio__material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getFields(material_radio__material_radio_group.MaterialRadioGroupComponent.__proto__),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_radioComponents]: dart.fieldType(ListOfMaterialRadioComponent()),
    [_onChange]: dart.finalFieldType(async.StreamController),
    valueSelection: dart.fieldType(model__selection__selection_model.SelectionModel),
    componentSelection: dart.finalFieldType(SelectionModelOfMaterialRadioComponent()),
    focusSelection: dart.finalFieldType(SelectionModelOfMaterialRadioComponent()),
    [_preselectedValue]: dart.fieldType(dart.dynamic),
    [_isContentInit]: dart.fieldType(core.bool),
    [_selected]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_radio__material_radio_group.MaterialRadioGroupComponent, {
    /*material_radio__material_radio_group.MaterialRadioGroupComponent.role*/get role() {
      return "radiogroup";
    },
    /*material_radio__material_radio_group.MaterialRadioGroupComponent.tabIndex*/get tabIndex() {
      return -1;
    }
  });
  dart.defineLazy(material_radio__material_radio, {
    /*material_radio__material_radio.uncheckedIcon*/get uncheckedIcon() {
      return dart.const(new model__ui__icon.Icon.new("radio_button_unchecked"));
    },
    /*material_radio__material_radio.checkedIcon*/get checkedIcon() {
      return dart.const(new model__ui__icon.Icon.new("radio_button_checked"));
    }
  });
  const _root$ = Symbol('_root');
  const _changeDetector = Symbol('_changeDetector');
  const _group = Symbol('_group');
  const _disposer$ = Symbol('_disposer');
  const _onChecked = Symbol('_onChecked');
  const _checked = Symbol('_checked');
  const _enabledTabIndex = Symbol('_enabledTabIndex');
  const _focusMoveCtrl = Symbol('_focusMoveCtrl');
  const _selectionMoveCtrl = Symbol('_selectionMoveCtrl');
  const _isFocused = Symbol('_isFocused');
  const _isKeyboardEvent = Symbol('_isKeyboardEvent');
  material_radio__material_radio.MaterialRadioComponent = class MaterialRadioComponent extends focus__focus.RootFocusable {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    writeValue(isChecked) {
      core.bool._check(isChecked);
      this.checked = isChecked;
    }
    registerOnChange(callback) {
      this[_disposer$].addStreamSubscription(core.bool, this.onChecked.listen(callback));
    }
    registerOnTouched(_) {}
    onDisabledChanged(isDisabled) {
      this.disabled = isDisabled;
      this[_changeDetector].markForCheck();
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get onChecked() {
      return this[_onChecked].stream;
    }
    set checked(isChecked) {
      if (this[_checked] == isChecked) return;
      this[_checked] = isChecked;
      this[_changeDetector].markForCheck();
      if (this[_group] != null) {
        if (dart.test(isChecked)) {
          this[_group].componentSelection.select(this);
        } else {
          this[_group].componentSelection.deselect(this);
        }
      }
      this[_onChecked].add(this[_checked]);
    }
    get checked() {
      return this[_checked];
    }
    get icon() {
      return dart.test(this[_checked]) ? material_radio__material_radio.checkedIcon : material_radio__material_radio.uncheckedIcon;
    }
    get tabIndex() {
      return dart.test(this.disabled) ? -1 : this[_enabledTabIndex];
    }
    set tabbable(isTabbable) {
      this[_enabledTabIndex] = dart.test(isTabbable) ? 0 : -1;
      this[_changeDetector].markForCheck();
    }
    get focusmove() {
      return this[_focusMoveCtrl].stream;
    }
    get selectionmove() {
      return this[_selectionMoveCtrl].stream;
    }
    handleKeyDown(event) {
      if (!dart.equals(event[$target], this[_root$])) return;
      let focusEvent = focus__focus.FocusMoveEvent.fromKeyboardEvent(this, event);
      if (focusEvent == null) return;
      if (dart.test(event.ctrlKey)) {
        this[_focusMoveCtrl].add(focusEvent);
      } else {
        this[_selectionMoveCtrl].add(focusEvent);
      }
      event.preventDefault();
    }
    handleKeyUp(event) {
      if (!dart.equals(event[$target], this[_root$])) return;
      this[_isKeyboardEvent] = true;
    }
    get showFocus() {
      return dart.test(this[_isFocused]) && dart.test(this[_isKeyboardEvent]);
    }
    onFocus() {
      this[_isFocused] = true;
      if (this[_group] != null) this[_group].focusSelection.select(this);
    }
    onBlur() {
      this[_isFocused] = false;
      if (this[_group] != null) this[_group].focusSelection.deselect(this);
    }
    select() {
      if (!dart.test(this.disabled)) this.checked = true;
    }
    handleClick() {
      this[_isKeyboardEvent] = false;
      this.select();
    }
    handleKeyPress(event) {
      if (!dart.equals(event[$target], this[_root$]) || !dart.test(utils__browser__events__events.isSpaceKey(event))) return;
      event.preventDefault();
      this[_isKeyboardEvent] = true;
      this.select();
    }
    ngOnDestroy() {
      this[_disposer$].dispose();
    }
    get focusDelegate() {
      return async.async(dart.dynamic, function* focusDelegate() {
        return null;
      });
    }
    get radioGroupName() {
      return this[radioGroupName];
    }
    set radioGroupName(value) {
      this[radioGroupName] = value;
    }
    set radioInputElement(_) {}
  };
  (material_radio__material_radio.MaterialRadioComponent.new = function(root, changeDetector, group, cd, role) {
    this[_disposer$] = new utils__disposer__disposer.Disposer.oneShot();
    this[value$] = null;
    this[disabled] = false;
    this[_onChecked] = StreamControllerOfbool().broadcast();
    this[_checked] = false;
    this[_enabledTabIndex] = 0;
    this[_focusMoveCtrl] = StreamControllerOfFocusMoveEvent().broadcast({sync: true});
    this[_selectionMoveCtrl] = StreamControllerOfFocusMoveEvent().broadcast({sync: true});
    this[_isFocused] = false;
    this[_isKeyboardEvent] = false;
    this[radioGroupName] = null;
    this[_root$] = root;
    this[_changeDetector] = changeDetector;
    this[_group] = group;
    this[role$] = role != null ? role : "radio";
    material_radio__material_radio.MaterialRadioComponent.__proto__.new.call(this, root);
    cd == null ? null : cd.valueAccessor = this;
  }).prototype = material_radio__material_radio.MaterialRadioComponent.prototype;
  dart.addTypeTests(material_radio__material_radio.MaterialRadioComponent);
  const role$ = Symbol("MaterialRadioComponent.role");
  const value$ = Symbol("MaterialRadioComponent.value");
  const disabled = Symbol("MaterialRadioComponent.disabled");
  const radioGroupName = Symbol("MaterialRadioComponent.radioGroupName");
  material_radio__material_radio.MaterialRadioComponent[dart.implements] = () => [ControlValueAccessorOfbool(), interfaces__has_disabled.HasDisabled, focus__focus.FocusableItem, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_radio__material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getMethods(material_radio__material_radio.MaterialRadioComponent.__proto__),
    writeValue: dart.fnType(dart.void, [core.Object]),
    registerOnChange: dart.fnType(dart.void, [src__directives__control_value_accessor.ChangeFunction$(core.bool)]),
    registerOnTouched: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])]),
    onDisabledChanged: dart.fnType(dart.void, [core.bool]),
    handleKeyDown: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleKeyUp: dart.fnType(dart.void, [html.KeyboardEvent]),
    onFocus: dart.fnType(dart.void, []),
    onBlur: dart.fnType(dart.void, []),
    select: dart.fnType(dart.void, []),
    handleClick: dart.fnType(dart.void, []),
    handleKeyPress: dart.fnType(dart.void, [html.KeyboardEvent]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_radio__material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getGetters(material_radio__material_radio.MaterialRadioComponent.__proto__),
    onChecked: async.Stream$(core.bool),
    checked: core.bool,
    icon: model__ui__icon.Icon,
    tabIndex: core.int,
    focusmove: async.Stream$(focus__focus.FocusMoveEvent),
    selectionmove: async.Stream$(focus__focus.FocusMoveEvent),
    showFocus: core.bool,
    focusDelegate: async.Future
  }));
  dart.setSetterSignature(material_radio__material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getSetters(material_radio__material_radio.MaterialRadioComponent.__proto__),
    checked: core.bool,
    tabbable: core.bool,
    radioInputElement: html.HtmlElement
  }));
  dart.setFieldSignature(material_radio__material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getFields(material_radio__material_radio.MaterialRadioComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_group]: dart.finalFieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_root$]: dart.finalFieldType(html.HtmlElement),
    [_disposer$]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    role: dart.finalFieldType(core.String),
    value: dart.fieldType(dart.dynamic),
    disabled: dart.fieldType(core.bool),
    [_onChecked]: dart.finalFieldType(StreamControllerOfbool()),
    [_checked]: dart.fieldType(core.bool),
    [_enabledTabIndex]: dart.fieldType(core.int),
    [_focusMoveCtrl]: dart.finalFieldType(StreamControllerOfFocusMoveEvent()),
    [_selectionMoveCtrl]: dart.finalFieldType(StreamControllerOfFocusMoveEvent()),
    [_isFocused]: dart.fieldType(core.bool),
    [_isKeyboardEvent]: dart.fieldType(core.bool),
    radioGroupName: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_radio__material_radio.MaterialRadioComponent, {
    /*material_radio__material_radio.MaterialRadioComponent.hostClass*/get hostClass() {
      return "themeable";
    }
  });
  dart.trackLibraries("packages/angular_components/material_radio/material_radio.ddc", {
    "package:angular_components/material_radio/material_radio_group.dart": material_radio__material_radio_group,
    "package:angular_components/material_radio/material_radio.dart": material_radio__material_radio
  }, '{"version":3,"sourceRoot":"","sources":["material_radio_group.dart","material_radio.dart"],"names":[],"mappings":"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","file":"material_radio.ddc.js"}');
  // Exports:
  return {
    material_radio__material_radio_group: material_radio__material_radio_group,
    material_radio__material_radio: material_radio__material_radio
  };
});

//# sourceMappingURL=material_radio.ddc.js.map
