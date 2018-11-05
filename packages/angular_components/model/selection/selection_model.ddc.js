define(['dart_sdk', 'packages/observable/observable'], function(dart_sdk, observable) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__records = observable.src__records;
  const src__observable = observable.src__observable;
  const _root = Object.create(null);
  const src__model__selection__delegating_selection_model = Object.create(_root);
  const src__model__selection__radio_group_single_selection_model = Object.create(_root);
  const model__selection__selection_model = Object.create(_root);
  const $cast = dartx.cast;
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $hashCode = dartx.hashCode;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  const $toString = dartx.toString;
  const $first = dartx.first;
  const $clear = dartx.clear;
  const $single = dartx.single;
  let ObservableOfChangeRecord = () => (ObservableOfChangeRecord = dart.constFn(src__observable.Observable$(src__records.ChangeRecord)))();
  let ObjectToObject = () => (ObjectToObject = dart.constFn(dart.fnType(core.Object, [core.Object])))();
  let ListOfChangeRecord = () => (ListOfChangeRecord = dart.constFn(core.List$(src__records.ChangeRecord)))();
  let StreamOfListOfChangeRecord = () => (StreamOfListOfChangeRecord = dart.constFn(async.Stream$(ListOfChangeRecord())))();
  const _delegateModel = Symbol('_delegateModel');
  const _is_CastIterable_default = Symbol('_is_CastIterable_default');
  model__selection__selection_model.CastIterable$ = dart.generic(T => {
    class CastIterable extends core.Object {
      castIterable(values) {
        return values[$cast](T);
      }
    }
    (CastIterable.new = function() {
    }).prototype = CastIterable.prototype;
    dart.addTypeTests(CastIterable);
    CastIterable.prototype[_is_CastIterable_default] = true;
    dart.setMethodSignature(CastIterable, () => ({
      __proto__: dart.getMethods(CastIterable.__proto__),
      castIterable: dart.fnType(core.Iterable$(T), [core.Iterable])
    }));
    return CastIterable;
  });
  model__selection__selection_model.CastIterable = model__selection__selection_model.CastIterable$();
  dart.addTypeTests(model__selection__selection_model.CastIterable, _is_CastIterable_default);
  const _is_DelegatingSelectionModel_default = Symbol('_is_DelegatingSelectionModel_default');
  src__model__selection__delegating_selection_model.DelegatingSelectionModel$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    const Object_CastIterable$ = class Object_CastIterable extends core.Object {};
    (Object_CastIterable$.new = function() {
    }).prototype = Object_CastIterable$.prototype;
    dart.mixinMembers(Object_CastIterable$, model__selection__selection_model.CastIterable$(T));
    class DelegatingSelectionModel extends Object_CastIterable$ {
      clear() {
        this[_delegateModel].clear();
      }
      select(value) {
        T._check(value);
        return this[_delegateModel].select(value);
      }
      deselect(value) {
        T._check(value);
        return this[_delegateModel].deselect(value);
      }
      isSelected(value) {
        T._check(value);
        return this[_delegateModel].isSelected(value);
      }
      get isEmpty() {
        return this[_delegateModel].isEmpty;
      }
      get isNotEmpty() {
        return this[_delegateModel].isNotEmpty;
      }
      get selectedValues() {
        return this[_delegateModel].selectedValues;
      }
      get changes() {
        return this[_delegateModel].changes;
      }
      deliverChanges() {
        return this[_delegateModel].deliverChanges();
      }
      notifyChange(changeRecord) {
        if (changeRecord === void 0) changeRecord = null;
        this[_delegateModel].notifyChange(changeRecord);
      }
      notifyPropertyChange(T, field, oldValue, newValue) {
        this[_delegateModel].notifyPropertyChange(T, field, oldValue, newValue);
        return newValue;
      }
      get hasObservers() {
        return this[_delegateModel].hasObservers;
      }
      observed() {
        return this[_delegateModel].observed();
      }
      unobserved() {
        return this[_delegateModel].unobserved();
      }
      deliverSelectionChanges() {
        return this[_delegateModel].deliverSelectionChanges();
      }
      notifySelectionChange(opts) {
        let added = opts && 'added' in opts ? opts.added : dart.constList([], T);
        IterableOfT()._check(added);
        let removed = opts && 'removed' in opts ? opts.removed : dart.constList([], T);
        IterableOfT()._check(removed);
        this[_delegateModel].notifySelectionChange({added: added, removed: removed});
      }
      get hasSelectionObservers() {
        return this[_delegateModel].hasSelectionObservers;
      }
      get selectionChanges() {
        return this[_delegateModel].selectionChanges;
      }
    }
    (DelegatingSelectionModel.new = function(delegateModel) {
      this[_delegateModel] = delegateModel;
    }).prototype = DelegatingSelectionModel.prototype;
    dart.addTypeTests(DelegatingSelectionModel);
    DelegatingSelectionModel.prototype[_is_DelegatingSelectionModel_default] = true;
    DelegatingSelectionModel[dart.implements] = () => [SelectionModelOfT()];
    dart.setMethodSignature(DelegatingSelectionModel, () => ({
      __proto__: dart.getMethods(DelegatingSelectionModel.__proto__),
      clear: dart.fnType(dart.void, []),
      select: dart.fnType(core.bool, [core.Object]),
      deselect: dart.fnType(core.bool, [core.Object]),
      isSelected: dart.fnType(core.bool, [core.Object]),
      deliverChanges: dart.fnType(core.bool, []),
      notifyChange: dart.fnType(dart.void, [], [src__records.ChangeRecord]),
      notifyPropertyChange: dart.gFnType(T => [T, [core.Symbol, T, T]]),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      deliverSelectionChanges: dart.fnType(core.bool, []),
      notifySelectionChange: dart.fnType(dart.void, [], {added: core.Object, removed: core.Object})
    }));
    dart.setGetterSignature(DelegatingSelectionModel, () => ({
      __proto__: dart.getGetters(DelegatingSelectionModel.__proto__),
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      selectedValues: core.Iterable$(T),
      changes: async.Stream$(core.List$(src__records.ChangeRecord)),
      hasObservers: core.bool,
      hasSelectionObservers: core.bool,
      selectionChanges: async.Stream$(core.List$(model__selection__selection_model.SelectionChangeRecord$(T)))
    }));
    dart.setFieldSignature(DelegatingSelectionModel, () => ({
      __proto__: dart.getFields(DelegatingSelectionModel.__proto__),
      [_delegateModel]: dart.finalFieldType(SelectionModelOfT())
    }));
    return DelegatingSelectionModel;
  });
  src__model__selection__delegating_selection_model.DelegatingSelectionModel = src__model__selection__delegating_selection_model.DelegatingSelectionModel$();
  dart.addTypeTests(src__model__selection__delegating_selection_model.DelegatingSelectionModel, _is_DelegatingSelectionModel_default);
  const _is_DelegatingSingleSelectionModel_default = Symbol('_is_DelegatingSingleSelectionModel_default');
  src__model__selection__delegating_selection_model.DelegatingSingleSelectionModel$ = dart.generic(T => {
    let SingleSelectionModelOfT = () => (SingleSelectionModelOfT = dart.constFn(model__selection__selection_model.SingleSelectionModel$(T)))();
    class DelegatingSingleSelectionModel extends src__model__selection__delegating_selection_model.DelegatingSelectionModel$(T) {
      get selectedValue() {
        return SingleSelectionModelOfT().as(this[_delegateModel]).selectedValue;
      }
    }
    (DelegatingSingleSelectionModel.new = function(delegateModel) {
      DelegatingSingleSelectionModel.__proto__.new.call(this, delegateModel);
    }).prototype = DelegatingSingleSelectionModel.prototype;
    dart.addTypeTests(DelegatingSingleSelectionModel);
    DelegatingSingleSelectionModel.prototype[_is_DelegatingSingleSelectionModel_default] = true;
    DelegatingSingleSelectionModel[dart.implements] = () => [SingleSelectionModelOfT()];
    dart.setGetterSignature(DelegatingSingleSelectionModel, () => ({
      __proto__: dart.getGetters(DelegatingSingleSelectionModel.__proto__),
      selectedValue: T
    }));
    return DelegatingSingleSelectionModel;
  });
  src__model__selection__delegating_selection_model.DelegatingSingleSelectionModel = src__model__selection__delegating_selection_model.DelegatingSingleSelectionModel$();
  dart.addTypeTests(src__model__selection__delegating_selection_model.DelegatingSingleSelectionModel, _is_DelegatingSingleSelectionModel_default);
  const _is_DelegatingMultiSelectionModel_default = Symbol('_is_DelegatingMultiSelectionModel_default');
  src__model__selection__delegating_selection_model.DelegatingMultiSelectionModel$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let MultiSelectionModelOfT = () => (MultiSelectionModelOfT = dart.constFn(model__selection__selection_model.MultiSelectionModel$(T)))();
    class DelegatingMultiSelectionModel extends src__model__selection__delegating_selection_model.DelegatingSelectionModel$(T) {
      selectAll(values) {
        IterableOfT()._check(values);
        MultiSelectionModelOfT().as(this[_delegateModel]).selectAll(values);
      }
      deselectAll(values) {
        IterableOfT()._check(values);
        MultiSelectionModelOfT().as(this[_delegateModel]).deselectAll(values);
      }
    }
    (DelegatingMultiSelectionModel.new = function(delegateModel) {
      DelegatingMultiSelectionModel.__proto__.new.call(this, delegateModel);
    }).prototype = DelegatingMultiSelectionModel.prototype;
    dart.addTypeTests(DelegatingMultiSelectionModel);
    DelegatingMultiSelectionModel.prototype[_is_DelegatingMultiSelectionModel_default] = true;
    DelegatingMultiSelectionModel[dart.implements] = () => [MultiSelectionModelOfT()];
    dart.setMethodSignature(DelegatingMultiSelectionModel, () => ({
      __proto__: dart.getMethods(DelegatingMultiSelectionModel.__proto__),
      selectAll: dart.fnType(dart.void, [core.Object]),
      deselectAll: dart.fnType(dart.void, [core.Object])
    }));
    return DelegatingMultiSelectionModel;
  });
  src__model__selection__delegating_selection_model.DelegatingMultiSelectionModel = src__model__selection__delegating_selection_model.DelegatingMultiSelectionModel$();
  dart.addTypeTests(src__model__selection__delegating_selection_model.DelegatingMultiSelectionModel, _is_DelegatingMultiSelectionModel_default);
  const _is_RadioGroupSingleSelectionModel_default = Symbol('_is_RadioGroupSingleSelectionModel_default');
  src__model__selection__radio_group_single_selection_model.RadioGroupSingleSelectionModel$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SingleSelectionModelOfT = () => (SingleSelectionModelOfT = dart.constFn(model__selection__selection_model.SingleSelectionModel$(T)))();
    class RadioGroupSingleSelectionModel extends src__model__selection__delegating_selection_model.DelegatingSingleSelectionModel$(T) {
      clear() {}
      deselect(value) {
        T._check(value);
        return false;
      }
    }
    (RadioGroupSingleSelectionModel.new = function(initialValue) {
      if (initialValue === void 0) initialValue = null;
      RadioGroupSingleSelectionModel.__proto__.new.call(this, SingleSelectionModelOfT()._check(SelectionModelOfT().single({selected: initialValue == null ? null : initialValue})));
    }).prototype = RadioGroupSingleSelectionModel.prototype;
    dart.addTypeTests(RadioGroupSingleSelectionModel);
    RadioGroupSingleSelectionModel.prototype[_is_RadioGroupSingleSelectionModel_default] = true;
    dart.setMethodSignature(RadioGroupSingleSelectionModel, () => ({
      __proto__: dart.getMethods(RadioGroupSingleSelectionModel.__proto__),
      deselect: dart.fnType(core.bool, [core.Object])
    }));
    return RadioGroupSingleSelectionModel;
  });
  src__model__selection__radio_group_single_selection_model.RadioGroupSingleSelectionModel = src__model__selection__radio_group_single_selection_model.RadioGroupSingleSelectionModel$();
  dart.addTypeTests(src__model__selection__radio_group_single_selection_model.RadioGroupSingleSelectionModel, _is_RadioGroupSingleSelectionModel_default);
  model__selection__selection_model.KeyProvider$ = dart.generic(T => {
    const KeyProvider = dart.typedef('KeyProvider', () => dart.fnType(core.Object, [T]));
    return KeyProvider;
  });
  model__selection__selection_model.KeyProvider = model__selection__selection_model.KeyProvider$();
  model__selection__selection_model.MatchCallback = dart.typedef('MatchCallback', () => dart.fnType(async.Future$(core.List), [core.String]));
  model__selection__selection_model._defaultKeyProvider = function(o) {
    return o;
  };
  const _is_SelectionModel_default = Symbol('_is_SelectionModel_default');
  model__selection__selection_model.SelectionModel$ = dart.generic(T => {
    let _NoopSelectionModelImplOfT = () => (_NoopSelectionModelImplOfT = dart.constFn(model__selection__selection_model._NoopSelectionModelImpl$(T)))();
    let SingleSelectionModelOfT = () => (SingleSelectionModelOfT = dart.constFn(model__selection__selection_model.SingleSelectionModel$(T)))();
    let RadioGroupSingleSelectionModelOfT = () => (RadioGroupSingleSelectionModelOfT = dart.constFn(src__model__selection__radio_group_single_selection_model.RadioGroupSingleSelectionModel$(T)))();
    let MultiSelectionModelOfT = () => (MultiSelectionModelOfT = dart.constFn(model__selection__selection_model.MultiSelectionModel$(T)))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SelectionObservableOfT = () => (SelectionObservableOfT = dart.constFn(model__selection__selection_model.SelectionObservable$(T)))();
    const Object_CastIterable$ = class Object_CastIterable extends core.Object {};
    (Object_CastIterable$.new = function() {
    }).prototype = Object_CastIterable$.prototype;
    dart.mixinMembers(Object_CastIterable$, model__selection__selection_model.CastIterable$(T));
    class SelectionModel extends Object_CastIterable$ {
      static empty() {
        return new (_NoopSelectionModelImplOfT()).new();
      }
      static single(opts) {
        return SingleSelectionModelOfT().new(opts);
      }
      static radio(selected) {
        return new (RadioGroupSingleSelectionModelOfT()).new(selected);
      }
      static multi(opts) {
        return MultiSelectionModelOfT().new(opts);
      }
      static new() {
        return SelectionModelOfT().empty();
      }
      static withList(opts) {
        let selectedValues = opts && 'selectedValues' in opts ? opts.selectedValues : null;
        let keyProvider = opts && 'keyProvider' in opts ? opts.keyProvider : null;
        let allowMulti = opts && 'allowMulti' in opts ? opts.allowMulti : false;
        if (dart.test(allowMulti)) {
          return SelectionModelOfT().multi({selectedValues: selectedValues, keyProvider: keyProvider});
        } else {
          return SelectionModelOfT().single({selected: (() => {
              let l = selectedValues == null ? null : selectedValues[$isNotEmpty];
              return l != null ? l : false;
            })() ? selectedValues[$last] : null, keyProvider: keyProvider});
        }
      }
      get isNotEmpty() {
        return !dart.test(this.isEmpty);
      }
    }
    (SelectionModel[dart.mixinNew] = function() {
    }).prototype = SelectionModel.prototype;
    dart.addTypeTests(SelectionModel);
    SelectionModel.prototype[_is_SelectionModel_default] = true;
    SelectionModel[dart.implements] = () => [ObservableOfChangeRecord(), SelectionObservableOfT()];
    dart.setGetterSignature(SelectionModel, () => ({
      __proto__: dart.getGetters(SelectionModel.__proto__),
      isNotEmpty: core.bool
    }));
    return SelectionModel;
  });
  model__selection__selection_model.SelectionModel = model__selection__selection_model.SelectionModel$();
  dart.addTypeTests(model__selection__selection_model.SelectionModel, _is_SelectionModel_default);
  const _is_SingleSelectionModel_default = Symbol('_is_SingleSelectionModel_default');
  model__selection__selection_model.SingleSelectionModel$ = dart.generic(T => {
    let _SingleSelectionModelImplOfT = () => (_SingleSelectionModelImplOfT = dart.constFn(model__selection__selection_model._SingleSelectionModelImpl$(T)))();
    class SingleSelectionModel extends model__selection__selection_model.SelectionModel$(T) {
      static new(opts) {
        let selected = opts && 'selected' in opts ? opts.selected : null;
        let keyProvider = opts && 'keyProvider' in opts ? opts.keyProvider : null;
        return new (_SingleSelectionModelImplOfT()).new(selected, keyProvider != null ? keyProvider : dart.fn(model__selection__selection_model._defaultKeyProvider, ObjectToObject()));
      }
    }
    dart.addTypeTests(SingleSelectionModel);
    SingleSelectionModel.prototype[_is_SingleSelectionModel_default] = true;
    return SingleSelectionModel;
  });
  model__selection__selection_model.SingleSelectionModel = model__selection__selection_model.SingleSelectionModel$();
  dart.addTypeTests(model__selection__selection_model.SingleSelectionModel, _is_SingleSelectionModel_default);
  const _is_MultiSelectionModel_default = Symbol('_is_MultiSelectionModel_default');
  model__selection__selection_model.MultiSelectionModel$ = dart.generic(T => {
    let _MultiSelectionModelImplOfT = () => (_MultiSelectionModelImplOfT = dart.constFn(model__selection__selection_model._MultiSelectionModelImpl$(T)))();
    class MultiSelectionModel extends model__selection__selection_model.SelectionModel$(T) {
      static new(opts) {
        let selectedValues = opts && 'selectedValues' in opts ? opts.selectedValues : null;
        let keyProvider = opts && 'keyProvider' in opts ? opts.keyProvider : null;
        return new (_MultiSelectionModelImplOfT()).new(selectedValues != null ? selectedValues : dart.constList([], T), keyProvider != null ? keyProvider : dart.fn(model__selection__selection_model._defaultKeyProvider, ObjectToObject()));
      }
    }
    dart.addTypeTests(MultiSelectionModel);
    MultiSelectionModel.prototype[_is_MultiSelectionModel_default] = true;
    return MultiSelectionModel;
  });
  model__selection__selection_model.MultiSelectionModel = model__selection__selection_model.MultiSelectionModel$();
  dart.addTypeTests(model__selection__selection_model.MultiSelectionModel, _is_MultiSelectionModel_default);
  const _is_SelectionChangeRecord_default = Symbol('_is_SelectionChangeRecord_default');
  model__selection__selection_model.SelectionChangeRecord$ = dart.generic(T => {
    let _SelectionChangeRecordImplOfT = () => (_SelectionChangeRecordImplOfT = dart.constFn(model__selection__selection_model._SelectionChangeRecordImpl$(T)))();
    class SelectionChangeRecord extends src__records.ChangeRecord {
      static new(opts) {
        return _SelectionChangeRecordImplOfT().new(opts);
      }
    }
    dart.addTypeTests(SelectionChangeRecord);
    SelectionChangeRecord.prototype[_is_SelectionChangeRecord_default] = true;
    return SelectionChangeRecord;
  });
  model__selection__selection_model.SelectionChangeRecord = model__selection__selection_model.SelectionChangeRecord$();
  dart.addTypeTests(model__selection__selection_model.SelectionChangeRecord, _is_SelectionChangeRecord_default);
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  const _selectionChangeController = Symbol('_selectionChangeController');
  const _selectionChangeRecords = Symbol('_selectionChangeRecords');
  const _is_SelectionChangeNotifier_default = Symbol('_is_SelectionChangeNotifier_default');
  model__selection__selection_model.SelectionChangeNotifier$ = dart.generic(T => {
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let UnmodifiableListViewOfSelectionChangeRecordOfT = () => (UnmodifiableListViewOfSelectionChangeRecordOfT = dart.constFn(collection.UnmodifiableListView$(SelectionChangeRecordOfT())))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let JSArrayOfSelectionChangeRecordOfT = () => (JSArrayOfSelectionChangeRecordOfT = dart.constFn(_interceptors.JSArray$(SelectionChangeRecordOfT())))();
    let ListOfSelectionChangeRecordOfT = () => (ListOfSelectionChangeRecordOfT = dart.constFn(core.List$(SelectionChangeRecordOfT())))();
    let StreamControllerOfListOfSelectionChangeRecordOfT = () => (StreamControllerOfListOfSelectionChangeRecordOfT = dart.constFn(async.StreamController$(ListOfSelectionChangeRecordOfT())))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    class SelectionChangeNotifier extends core.Object {
      deliverSelectionChanges() {
        if (dart.test(this.hasSelectionObservers) && this[_selectionChangeRecords] != null && dart.test(this[_selectionChangeRecords][$isNotEmpty])) {
          let records = new (UnmodifiableListViewOfSelectionChangeRecordOfT()).new(this[_selectionChangeRecords]);
          this[_selectionChangeRecords] = null;
          this[_selectionChangeController].add(records);
          return true;
        } else {
          return false;
        }
      }
      notifySelectionChange(opts) {
        let added = opts && 'added' in opts ? opts.added : dart.constList([], T);
        IterableOfT()._check(added);
        let removed = opts && 'removed' in opts ? opts.removed : dart.constList([], T);
        IterableOfT()._check(removed);
        if (dart.test(this.hasSelectionObservers)) {
          let record = SelectionChangeRecordOfT().new({added: added, removed: removed});
          if (this[_selectionChangeRecords] == null) {
            this[_selectionChangeRecords] = JSArrayOfSelectionChangeRecordOfT().of([]);
            async.scheduleMicrotask(dart.bind(this, 'deliverSelectionChanges'));
          }
          this[_selectionChangeRecords][$add](record);
        }
      }
      get hasSelectionObservers() {
        return this[_selectionChangeController] != null && dart.test(this[_selectionChangeController].hasListener);
      }
      get selectionChanges() {
        if (this[_selectionChangeController] == null) {
          this[_selectionChangeController] = StreamControllerOfListOfSelectionChangeRecordOfT().broadcast({sync: true});
        }
        return this[_selectionChangeController].stream;
      }
    }
    (SelectionChangeNotifier.new = function() {
      this[_selectionChangeController] = null;
      this[_selectionChangeRecords] = null;
    }).prototype = SelectionChangeNotifier.prototype;
    dart.addTypeTests(SelectionChangeNotifier);
    SelectionChangeNotifier.prototype[_is_SelectionChangeNotifier_default] = true;
    SelectionChangeNotifier[dart.implements] = () => [SelectionModelOfT()];
    dart.setMethodSignature(SelectionChangeNotifier, () => ({
      __proto__: dart.getMethods(SelectionChangeNotifier.__proto__),
      deliverSelectionChanges: dart.fnType(core.bool, []),
      notifySelectionChange: dart.fnType(dart.void, [], {added: core.Object, removed: core.Object})
    }));
    dart.setGetterSignature(SelectionChangeNotifier, () => ({
      __proto__: dart.getGetters(SelectionChangeNotifier.__proto__),
      hasSelectionObservers: core.bool,
      selectionChanges: async.Stream$(core.List$(model__selection__selection_model.SelectionChangeRecord$(T)))
    }));
    dart.setFieldSignature(SelectionChangeNotifier, () => ({
      __proto__: dart.getFields(SelectionChangeNotifier.__proto__),
      [_selectionChangeController]: dart.fieldType(StreamControllerOfListOfSelectionChangeRecordOfT()),
      [_selectionChangeRecords]: dart.fieldType(ListOfSelectionChangeRecordOfT())
    }));
    return SelectionChangeNotifier;
  });
  model__selection__selection_model.SelectionChangeNotifier = model__selection__selection_model.SelectionChangeNotifier$();
  dart.addTypeTests(model__selection__selection_model.SelectionChangeNotifier, _is_SelectionChangeNotifier_default);
  const _is__MultiSelectionModelImpl_default = Symbol('_is__MultiSelectionModelImpl_default');
  model__selection__selection_model._MultiSelectionModelImpl$ = dart.generic(T => {
    let TAndTTobool = () => (TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    let TToint = () => (TToint = dart.constFn(dart.fnType(core.int, [T])))();
    let LinkedHashSetOfT = () => (LinkedHashSetOfT = dart.constFn(collection.LinkedHashSet$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let TTobool = () => (TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    let MultiSelectionModelOfT = () => (MultiSelectionModelOfT = dart.constFn(model__selection__selection_model.MultiSelectionModel$(T)))();
    const Observable_SelectionChangeNotifier$ = class Observable_SelectionChangeNotifier extends src__observable.Observable$(src__records.ChangeRecord) {};
    (Observable_SelectionChangeNotifier$.new = function() {
      model__selection__selection_model.SelectionChangeNotifier$(T).new.call(this);
      Observable_SelectionChangeNotifier$.__proto__.new.call(this);
    }).prototype = Observable_SelectionChangeNotifier$.prototype;
    dart.mixinMembers(Observable_SelectionChangeNotifier$, model__selection__selection_model.SelectionChangeNotifier$(T));
    const Observable_CastIterable$ = class Observable_CastIterable extends Observable_SelectionChangeNotifier$ {};
    (Observable_CastIterable$.new = function() {
      Observable_CastIterable$.__proto__.new.call(this);
    }).prototype = Observable_CastIterable$.prototype;
    dart.mixinMembers(Observable_CastIterable$, model__selection__selection_model.CastIterable$(T));
    class _MultiSelectionModelImpl extends Observable_CastIterable$ {
      clear() {
        if (dart.test(this.selectedValues.isNotEmpty)) {
          let removedItems = this.selectedValues.toList({growable: false});
          this.selectedValues.clear();
          this.notifyPropertyChange(core.bool, const$ || (const$ = dart.const(core.Symbol.new('isEmpty'))), false, true);
          this.notifyPropertyChange(core.bool, const$0 || (const$0 = dart.const(core.Symbol.new('isNotEmpty'))), true, false);
          this.notifySelectionChange({removed: removedItems});
        }
      }
      deselect(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.new());
        }
        if (dart.test(this.selectedValues.remove(value))) {
          if (dart.test(this.isEmpty)) {
            this.notifyPropertyChange(core.bool, const$1 || (const$1 = dart.const(core.Symbol.new('isEmpty'))), false, true);
            this.notifyPropertyChange(core.bool, const$2 || (const$2 = dart.const(core.Symbol.new('isNotEmpty'))), true, false);
          }
          this.notifySelectionChange({removed: JSArrayOfT().of([value])});
          return true;
        }
        return false;
      }
      select(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.new());
        }
        if (dart.test(this.selectedValues.add(value))) {
          if (this.selectedValues.length === 1) {
            this.notifyPropertyChange(core.bool, const$3 || (const$3 = dart.const(core.Symbol.new('isEmpty'))), true, false);
            this.notifyPropertyChange(core.bool, const$4 || (const$4 = dart.const(core.Symbol.new('isNotEmpty'))), false, true);
          }
          this.notifySelectionChange({added: JSArrayOfT().of([value])});
          return true;
        } else {
          return false;
        }
      }
      selectAll(values) {
        IterableOfT()._check(values);
        if (values == null) {
          dart.throw(new core.ArgumentError.new());
        }
        let toAdd = values[$where](dart.fn(v => !dart.test(this.selectedValues.contains(v)), TTobool()))[$toList]();
        if (dart.test(toAdd[$isEmpty])) return;
        let wasEmpty = this.isEmpty;
        this.selectedValues.addAll(toAdd);
        if (dart.test(wasEmpty) && dart.test(this.isNotEmpty)) {
          this.notifyPropertyChange(core.bool, const$5 || (const$5 = dart.const(core.Symbol.new('isEmpty'))), true, false);
          this.notifyPropertyChange(core.bool, const$6 || (const$6 = dart.const(core.Symbol.new('isNotEmpty'))), false, true);
        }
        this.notifySelectionChange({added: toAdd});
      }
      deselectAll(values) {
        IterableOfT()._check(values);
        if (values == null) {
          dart.throw(new core.ArgumentError.new());
        }
        let toRemove = values[$where](dart.fn(v => this.selectedValues.contains(v), TTobool()))[$toList]();
        if (dart.test(toRemove[$isEmpty])) return;
        let wasNotEmpty = this.isNotEmpty;
        this.selectedValues.removeAll(toRemove);
        if (dart.test(wasNotEmpty) && dart.test(this.isEmpty)) {
          this.notifyPropertyChange(core.bool, const$7 || (const$7 = dart.const(core.Symbol.new('isEmpty'))), false, true);
          this.notifyPropertyChange(core.bool, const$8 || (const$8 = dart.const(core.Symbol.new('isNotEmpty'))), true, false);
        }
        this.notifySelectionChange({removed: toRemove});
      }
      isSelected(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.new());
        }
        return this.selectedValues.contains(value);
      }
      get isEmpty() {
        return this.selectedValues.isEmpty;
      }
      get isNotEmpty() {
        return this.selectedValues.isNotEmpty;
      }
    }
    (_MultiSelectionModelImpl.new = function(initialSelection, keyProvider) {
      let _ = LinkedHashSetOfT().new({equals: dart.fn((a, b) => dart.equals(keyProvider(a), keyProvider(b)), TAndTTobool()), hashCode: dart.fn(o => dart.hashCode(keyProvider(o)), TToint())});
      _.addAll(initialSelection);
      this.selectedValues = _;
      _MultiSelectionModelImpl.__proto__.new.call(this);
    }).prototype = _MultiSelectionModelImpl.prototype;
    dart.addTypeTests(_MultiSelectionModelImpl);
    _MultiSelectionModelImpl.prototype[_is__MultiSelectionModelImpl_default] = true;
    _MultiSelectionModelImpl[dart.implements] = () => [MultiSelectionModelOfT()];
    dart.setMethodSignature(_MultiSelectionModelImpl, () => ({
      __proto__: dart.getMethods(_MultiSelectionModelImpl.__proto__),
      clear: dart.fnType(dart.void, []),
      deselect: dart.fnType(core.bool, [core.Object]),
      select: dart.fnType(core.bool, [core.Object]),
      selectAll: dart.fnType(dart.void, [core.Object]),
      deselectAll: dart.fnType(dart.void, [core.Object]),
      isSelected: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(_MultiSelectionModelImpl, () => ({
      __proto__: dart.getGetters(_MultiSelectionModelImpl.__proto__),
      isEmpty: core.bool,
      isNotEmpty: core.bool
    }));
    dart.setFieldSignature(_MultiSelectionModelImpl, () => ({
      __proto__: dart.getFields(_MultiSelectionModelImpl.__proto__),
      selectedValues: dart.finalFieldType(LinkedHashSetOfT())
    }));
    return _MultiSelectionModelImpl;
  });
  model__selection__selection_model._MultiSelectionModelImpl = model__selection__selection_model._MultiSelectionModelImpl$();
  dart.addTypeTests(model__selection__selection_model._MultiSelectionModelImpl, _is__MultiSelectionModelImpl_default);
  let const$9;
  const _is__NoopSelectionModelImpl_default = Symbol('_is__NoopSelectionModelImpl_default');
  model__selection__selection_model._NoopSelectionModelImpl$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let ListOfSelectionChangeRecordOfT = () => (ListOfSelectionChangeRecordOfT = dart.constFn(core.List$(SelectionChangeRecordOfT())))();
    let StreamOfListOfSelectionChangeRecordOfT = () => (StreamOfListOfSelectionChangeRecordOfT = dart.constFn(async.Stream$(ListOfSelectionChangeRecordOfT())))();
    let SingleSelectionModelOfT = () => (SingleSelectionModelOfT = dart.constFn(model__selection__selection_model.SingleSelectionModel$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class _NoopSelectionModelImpl extends core.Object {
      deliverSelectionChanges() {
        return false;
      }
      notifySelectionChange(opts) {
        let added = opts && 'added' in opts ? opts.added : null;
        IterableOfT()._check(added);
        let removed = opts && 'removed' in opts ? opts.removed : null;
        IterableOfT()._check(removed);
      }
      get changes() {
        return StreamOfListOfChangeRecord().fromIterable(const$9 || (const$9 = dart.constList([], ListOfChangeRecord())));
      }
      deliverChanges() {
        return false;
      }
      notifyChange(_) {
        if (_ === void 0) _ = null;
      }
      notifyPropertyChange(T, field, oldValue, newValue) {
        return null;
      }
      observed() {}
      unobserved() {}
      clear() {}
      select(_) {
        T._check(_);
        return false;
      }
      deselect(_) {
        T._check(_);
        return false;
      }
      isSelected(_) {
        T._check(_);
        return false;
      }
      get selectionChanges() {
        return StreamOfListOfSelectionChangeRecordOfT().fromIterable(dart.constList([], ListOfSelectionChangeRecordOfT()));
      }
      castIterable(values) {
        return values[$cast](T);
      }
    }
    (_NoopSelectionModelImpl.new = function() {
      this.hasSelectionObservers = false;
      this.hasObservers = false;
      this.isEmpty = true;
      this.isNotEmpty = false;
      this.selectedValue = null;
      this.selectedValues = dart.constList([], T);
    }).prototype = _NoopSelectionModelImpl.prototype;
    dart.addTypeTests(_NoopSelectionModelImpl);
    _NoopSelectionModelImpl.prototype[_is__NoopSelectionModelImpl_default] = true;
    _NoopSelectionModelImpl[dart.implements] = () => [SingleSelectionModelOfT()];
    dart.setMethodSignature(_NoopSelectionModelImpl, () => ({
      __proto__: dart.getMethods(_NoopSelectionModelImpl.__proto__),
      deliverSelectionChanges: dart.fnType(core.bool, []),
      notifySelectionChange: dart.fnType(dart.void, [], {added: core.Object, removed: core.Object}),
      deliverChanges: dart.fnType(core.bool, []),
      notifyChange: dart.fnType(dart.void, [], [src__records.ChangeRecord]),
      notifyPropertyChange: dart.gFnType(T => [T, [core.Symbol, T, T]]),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      clear: dart.fnType(dart.void, []),
      select: dart.fnType(core.bool, [core.Object]),
      deselect: dart.fnType(core.bool, [core.Object]),
      isSelected: dart.fnType(core.bool, [core.Object]),
      castIterable: dart.fnType(core.Iterable$(T), [core.Iterable])
    }));
    dart.setGetterSignature(_NoopSelectionModelImpl, () => ({
      __proto__: dart.getGetters(_NoopSelectionModelImpl.__proto__),
      changes: async.Stream$(core.List$(src__records.ChangeRecord)),
      selectionChanges: async.Stream$(core.List$(model__selection__selection_model.SelectionChangeRecord$(T)))
    }));
    dart.setFieldSignature(_NoopSelectionModelImpl, () => ({
      __proto__: dart.getFields(_NoopSelectionModelImpl.__proto__),
      hasSelectionObservers: dart.finalFieldType(core.bool),
      hasObservers: dart.finalFieldType(core.bool),
      isEmpty: dart.finalFieldType(core.bool),
      isNotEmpty: dart.finalFieldType(core.bool),
      selectedValue: dart.finalFieldType(T),
      selectedValues: dart.finalFieldType(ListOfT())
    }));
    return _NoopSelectionModelImpl;
  });
  model__selection__selection_model._NoopSelectionModelImpl = model__selection__selection_model._NoopSelectionModelImpl$();
  dart.addTypeTests(model__selection__selection_model._NoopSelectionModelImpl, _is__NoopSelectionModelImpl_default);
  const _is_SelectionObservable_default = Symbol('_is_SelectionObservable_default');
  model__selection__selection_model.SelectionObservable$ = dart.generic(T => {
    class SelectionObservable extends core.Object {}
    (SelectionObservable.new = function() {
    }).prototype = SelectionObservable.prototype;
    dart.addTypeTests(SelectionObservable);
    SelectionObservable.prototype[_is_SelectionObservable_default] = true;
    return SelectionObservable;
  });
  model__selection__selection_model.SelectionObservable = model__selection__selection_model.SelectionObservable$();
  dart.addTypeTests(model__selection__selection_model.SelectionObservable, _is_SelectionObservable_default);
  const _is__SelectionChangeRecordImpl_default = Symbol('_is__SelectionChangeRecordImpl_default');
  model__selection__selection_model._SelectionChangeRecordImpl$ = dart.generic(T => {
    let UnmodifiableListViewOfT = () => (UnmodifiableListViewOfT = dart.constFn(collection.UnmodifiableListView$(T)))();
    let _SelectionChangeRecordImplOfT = () => (_SelectionChangeRecordImplOfT = dart.constFn(model__selection__selection_model._SelectionChangeRecordImpl$(T)))();
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    class _SelectionChangeRecordImpl extends src__records.ChangeRecord {
      static new(opts) {
        let added = opts && 'added' in opts ? opts.added : null;
        let removed = opts && 'removed' in opts ? opts.removed : null;
        added = added != null ? new (UnmodifiableListViewOfT()).new(added) : dart.constList([], T);
        removed = removed != null ? new (UnmodifiableListViewOfT()).new(removed) : dart.constList([], T);
        return new (_SelectionChangeRecordImplOfT()).__(added, removed);
      }
      toString() {
        return "SelectionChangeRecord{added: " + dart.str(this.added) + ", removed: " + dart.str(this.removed) + "}";
      }
    }
    (_SelectionChangeRecordImpl.__ = function(added, removed) {
      this.added = added;
      this.removed = removed;
      _SelectionChangeRecordImpl.__proto__.new.call(this);
    }).prototype = _SelectionChangeRecordImpl.prototype;
    dart.addTypeTests(_SelectionChangeRecordImpl);
    _SelectionChangeRecordImpl.prototype[_is__SelectionChangeRecordImpl_default] = true;
    _SelectionChangeRecordImpl[dart.implements] = () => [SelectionChangeRecordOfT()];
    dart.setMethodSignature(_SelectionChangeRecordImpl, () => ({
      __proto__: dart.getMethods(_SelectionChangeRecordImpl.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setFieldSignature(_SelectionChangeRecordImpl, () => ({
      __proto__: dart.getFields(_SelectionChangeRecordImpl.__proto__),
      added: dart.finalFieldType(IterableOfT()),
      removed: dart.finalFieldType(IterableOfT())
    }));
    dart.defineExtensionMethods(_SelectionChangeRecordImpl, ['toString']);
    return _SelectionChangeRecordImpl;
  });
  model__selection__selection_model._SelectionChangeRecordImpl = model__selection__selection_model._SelectionChangeRecordImpl$();
  dart.addTypeTests(model__selection__selection_model._SelectionChangeRecordImpl, _is__SelectionChangeRecordImpl_default);
  const _keyOf = Symbol('_keyOf');
  const _selectedValues = Symbol('_selectedValues');
  const _selectedKey = Symbol('_selectedKey');
  let const$10;
  let const$11;
  const _isKeySelected = Symbol('_isKeySelected');
  let const$12;
  let const$13;
  const _is__SingleSelectionModelImpl_default = Symbol('_is__SingleSelectionModelImpl_default');
  model__selection__selection_model._SingleSelectionModelImpl$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let SingleSelectionModelOfT = () => (SingleSelectionModelOfT = dart.constFn(model__selection__selection_model.SingleSelectionModel$(T)))();
    let TToObject = () => (TToObject = dart.constFn(dart.fnType(core.Object, [T])))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    const Observable_SelectionChangeNotifier$ = class Observable_SelectionChangeNotifier extends src__observable.Observable$(src__records.ChangeRecord) {};
    (Observable_SelectionChangeNotifier$.new = function() {
      model__selection__selection_model.SelectionChangeNotifier$(T).new.call(this);
      Observable_SelectionChangeNotifier$.__proto__.new.call(this);
    }).prototype = Observable_SelectionChangeNotifier$.prototype;
    dart.mixinMembers(Observable_SelectionChangeNotifier$, model__selection__selection_model.SelectionChangeNotifier$(T));
    const Observable_CastIterable$ = class Observable_CastIterable extends Observable_SelectionChangeNotifier$ {};
    (Observable_CastIterable$.new = function() {
      Observable_CastIterable$.__proto__.new.call(this);
    }).prototype = Observable_CastIterable$.prototype;
    dart.mixinMembers(Observable_CastIterable$, model__selection__selection_model.CastIterable$(T));
    class _SingleSelectionModelImpl extends Observable_CastIterable$ {
      clear() {
        if (dart.test(this[_selectedValues][$isNotEmpty])) {
          this.deselect(this[_selectedValues][$first]);
        }
      }
      select(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.notNull("value"));
        }
        let newKey = this[_keyOf](value);
        if (dart.equals(newKey, this[_selectedKey])) {
          return false;
        }
        let previousValue = dart.test(this[_selectedValues][$isEmpty]) ? null : this[_selectedValues][$first];
        let removedItems = dart.constList([], T);
        this[_selectedKey] = newKey;
        this[_selectedValues][$clear]();
        this[_selectedValues][$add](value);
        if (previousValue == null) {
          this.notifyPropertyChange(core.bool, const$10 || (const$10 = dart.const(core.Symbol.new('isEmpty'))), true, false);
          this.notifyPropertyChange(core.bool, const$11 || (const$11 = dart.const(core.Symbol.new('isNotEmpty'))), false, true);
        } else {
          removedItems = JSArrayOfT().of([previousValue]);
        }
        this.notifySelectionChange({added: JSArrayOfT().of([value]), removed: removedItems});
        return true;
      }
      deselect(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.notNull("value"));
        }
        if (dart.test(this[_selectedValues][$isEmpty]) || !dart.test(this[_isKeySelected](value))) {
          return false;
        }
        let previousValue = dart.test(this[_selectedValues][$isEmpty]) ? null : this[_selectedValues][$first];
        let removedItems = dart.constList([], T);
        this[_selectedKey] = null;
        this[_selectedValues][$clear]();
        if (previousValue != null) {
          this.notifyPropertyChange(core.bool, const$12 || (const$12 = dart.const(core.Symbol.new('isEmpty'))), false, true);
          this.notifyPropertyChange(core.bool, const$13 || (const$13 = dart.const(core.Symbol.new('isNotEmpty'))), true, false);
          removedItems = JSArrayOfT().of([previousValue]);
        }
        this.notifySelectionChange({added: JSArrayOfT().of([]), removed: removedItems});
        return true;
      }
      [_isKeySelected](value) {
        T._check(value);
        return dart.equals(this[_keyOf](value), this[_selectedKey]);
      }
      isSelected(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.notNull("value"));
        }
        return this[_isKeySelected](value);
      }
      get isEmpty() {
        return this[_selectedValues][$isEmpty];
      }
      get isNotEmpty() {
        return this[_selectedValues][$isNotEmpty];
      }
      get selectedValues() {
        return this[_selectedValues];
      }
      get selectedValue() {
        return dart.test(this[_selectedValues][$isEmpty]) ? null : this[_selectedValues][$single];
      }
    }
    (_SingleSelectionModelImpl.new = function(selectedValue, keyOf) {
      this[_selectedValues] = JSArrayOfT().of([]);
      this[_selectedKey] = null;
      this[_keyOf] = keyOf;
      _SingleSelectionModelImpl.__proto__.new.call(this);
      if (selectedValue != null) {
        this[_selectedKey] = this[_keyOf](selectedValue);
        this[_selectedValues][$add](selectedValue);
      }
    }).prototype = _SingleSelectionModelImpl.prototype;
    dart.addTypeTests(_SingleSelectionModelImpl);
    _SingleSelectionModelImpl.prototype[_is__SingleSelectionModelImpl_default] = true;
    _SingleSelectionModelImpl[dart.implements] = () => [SingleSelectionModelOfT()];
    dart.setMethodSignature(_SingleSelectionModelImpl, () => ({
      __proto__: dart.getMethods(_SingleSelectionModelImpl.__proto__),
      clear: dart.fnType(dart.void, []),
      select: dart.fnType(core.bool, [core.Object]),
      deselect: dart.fnType(core.bool, [core.Object]),
      [_isKeySelected]: dart.fnType(core.bool, [core.Object]),
      isSelected: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(_SingleSelectionModelImpl, () => ({
      __proto__: dart.getGetters(_SingleSelectionModelImpl.__proto__),
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      selectedValues: core.Iterable$(T),
      selectedValue: T
    }));
    dart.setFieldSignature(_SingleSelectionModelImpl, () => ({
      __proto__: dart.getFields(_SingleSelectionModelImpl.__proto__),
      [_keyOf]: dart.finalFieldType(TToObject()),
      [_selectedValues]: dart.finalFieldType(ListOfT()),
      [_selectedKey]: dart.fieldType(dart.dynamic)
    }));
    return _SingleSelectionModelImpl;
  });
  model__selection__selection_model._SingleSelectionModelImpl = model__selection__selection_model._SingleSelectionModelImpl$();
  dart.addTypeTests(model__selection__selection_model._SingleSelectionModelImpl, _is__SingleSelectionModelImpl_default);
  dart.trackLibraries("packages/angular_components/model/selection/selection_model.ddc", {
    "package:angular_components/src/model/selection/delegating_selection_model.dart": src__model__selection__delegating_selection_model,
    "package:angular_components/src/model/selection/radio_group_single_selection_model.dart": src__model__selection__radio_group_single_selection_model,
    "package:angular_components/model/selection/selection_model.dart": model__selection__selection_model
  }, '{"version":3,"sourceRoot":"","sources":["selection_model.dart","../../src/model/selection/delegating_selection_model.dart","../../src/model/selection/radio_group_single_selection_model.dart","../../src/model/selection/selection_change_notifier.dart","../../src/model/selection/multi_selection_model_impl.dart","../../src/model/selection/noop_selection_model_impl.dart","../../src/model/selection/single_selection_model_impl.dart"],"names":[],"mappings":"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","file":"selection_model.ddc.js"}');
  // Exports:
  return {
    src__model__selection__delegating_selection_model: src__model__selection__delegating_selection_model,
    src__model__selection__radio_group_single_selection_model: src__model__selection__radio_group_single_selection_model,
    model__selection__selection_model: model__selection__selection_model
  };
});

//# sourceMappingURL=selection_model.ddc.js.map
