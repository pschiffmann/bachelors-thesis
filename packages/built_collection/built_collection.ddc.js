define(['dart_sdk', 'packages/quiver/core', 'packages/collection/src/canonicalized_map', 'packages/quiver/collection'], function(dart_sdk, core, canonicalized_map, collection) {
  'use strict';
  const core$ = dart_sdk.core;
  const math = dart_sdk.math;
  const collection$ = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$0 = core.core;
  const src__unmodifiable_wrappers = canonicalized_map.src__unmodifiable_wrappers;
  const collection$0 = collection.collection;
  const _root = Object.create(null);
  const built_collection = Object.create(_root);
  const src__internal__copy_on_write_set = Object.create(_root);
  const src__internal__copy_on_write_list = Object.create(_root);
  const src__set = Object.create(_root);
  const src__iterable = Object.create(_root);
  const src__list = Object.create(_root);
  const src__internal__copy_on_write_map = Object.create(_root);
  const src__list_multimap = Object.create(_root);
  const src__map = Object.create(_root);
  const src__set_multimap = Object.create(_root);
  const $any = dartx.any;
  const $cast = dartx.cast;
  const $contains = dartx.contains;
  const $elementAt = dartx.elementAt;
  const $every = dartx.every;
  const $expand = dartx.expand;
  const $firstWhere = dartx.firstWhere;
  const $fold = dartx.fold;
  const $followedBy = dartx.followedBy;
  const $forEach = dartx.forEach;
  const $join = dartx.join;
  const $lastWhere = dartx.lastWhere;
  const $map = dartx.map;
  const $reduce = dartx.reduce;
  const $singleWhere = dartx.singleWhere;
  const $skip = dartx.skip;
  const $skipWhile = dartx.skipWhile;
  const $take = dartx.take;
  const $takeWhile = dartx.takeWhile;
  const $toList = dartx.toList;
  const $toSet = dartx.toSet;
  const $where = dartx.where;
  const $whereType = dartx.whereType;
  const $toString = dartx.toString;
  const $length = dartx.length;
  const $first = dartx.first;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $iterator = dartx.iterator;
  const $last = dartx.last;
  const $single = dartx.single;
  const $_get = dartx._get;
  const $plus = dartx['+'];
  const $asMap = dartx.asMap;
  const $getRange = dartx.getRange;
  const $indexOf = dartx.indexOf;
  const $indexWhere = dartx.indexWhere;
  const $lastIndexOf = dartx.lastIndexOf;
  const $lastIndexWhere = dartx.lastIndexWhere;
  const $reversed = dartx.reversed;
  const $sublist = dartx.sublist;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $sort = dartx.sort;
  const $shuffle = dartx.shuffle;
  const $clear = dartx.clear;
  const $insert = dartx.insert;
  const $insertAll = dartx.insertAll;
  const $setAll = dartx.setAll;
  const $remove = dartx.remove;
  const $removeAt = dartx.removeAt;
  const $removeLast = dartx.removeLast;
  const $removeWhere = dartx.removeWhere;
  const $retainWhere = dartx.retainWhere;
  const $setRange = dartx.setRange;
  const $removeRange = dartx.removeRange;
  const $fillRange = dartx.fillRange;
  const $replaceRange = dartx.replaceRange;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $containsKey = dartx.containsKey;
  const $containsValue = dartx.containsValue;
  const $entries = dartx.entries;
  const $keys = dartx.keys;
  const $values = dartx.values;
  const $addEntries = dartx.addEntries;
  const $putIfAbsent = dartx.putIfAbsent;
  const $update = dartx.update;
  const $updateAll = dartx.updateAll;
  const $runtimeType = dartx.runtimeType;
  let IterableOfObject = () => (IterableOfObject = dart.constFn(core$.Iterable$(core$.Object)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let ObjectAndObjectToNull = () => (ObjectAndObjectToNull = dart.constFn(dart.fnType(core$.Null, [core$.Object, core$.Object])))();
  src__internal__copy_on_write_set._SetFactory$ = dart.generic(E => {
    const _SetFactory = dart.typedef('_SetFactory', () => dart.fnType(core$.Set$(E), []));
    return _SetFactory;
  });
  src__internal__copy_on_write_set._SetFactory = src__internal__copy_on_write_set._SetFactory$();
  const _set = Symbol('_set');
  const _setFactory = Symbol('_setFactory');
  const _copyBeforeWrite = Symbol('_copyBeforeWrite');
  const _maybeCopyBeforeWrite = Symbol('_maybeCopyBeforeWrite');
  const _is_CopyOnWriteSet_default = Symbol('_is_CopyOnWriteSet_default');
  src__internal__copy_on_write_set.CopyOnWriteSet$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core$.Set$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let VoidToSetOfE = () => (VoidToSetOfE = dart.constFn(dart.fnType(SetOfE(), [])))();
    class CopyOnWriteSet extends core$.Object {
      get length() {
        return this[_set].length;
      }
      lookup(object) {
        return this[_set].lookup(object);
      }
      intersection(other) {
        return this[_set].intersection(other);
      }
      union(other) {
        SetOfE()._check(other);
        return this[_set].union(other);
      }
      difference(other) {
        return this[_set].difference(other);
      }
      containsAll(other) {
        return this[_set].containsAll(other);
      }
      any(test) {
        return this[_set].any(test);
      }
      cast(T) {
        return new (src__internal__copy_on_write_set.CopyOnWriteSet$(T)).new(this[_set].cast(T));
      }
      contains(element) {
        return this[_set].contains(element);
      }
      elementAt(index) {
        return this[_set].elementAt(index);
      }
      every(test) {
        return this[_set].every(test);
      }
      expand(T, f) {
        return this[_set].expand(T, f);
      }
      get first() {
        return this[_set].first;
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set].firstWhere(test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_set].fold(T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this[_set].followedBy(other);
      }
      forEach(f) {
        return this[_set].forEach(f);
      }
      get isEmpty() {
        return this[_set].isEmpty;
      }
      get isNotEmpty() {
        return this[_set].isNotEmpty;
      }
      get iterator() {
        return this[_set].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_set].join(separator);
      }
      get last() {
        return this[_set].last;
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set].lastWhere(test, {orElse: orElse});
      }
      map(T, f) {
        return this[_set].map(T, f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_set].reduce(combine);
      }
      get single() {
        return this[_set].single;
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set].singleWhere(test, {orElse: orElse});
      }
      skip(count) {
        return this[_set].skip(count);
      }
      skipWhile(test) {
        return this[_set].skipWhile(test);
      }
      take(count) {
        return this[_set].take(count);
      }
      takeWhile(test) {
        return this[_set].takeWhile(test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set].toList({growable: growable});
      }
      toSet() {
        return this[_set].toSet();
      }
      where(test) {
        return this[_set].where(test);
      }
      whereType(T) {
        return this[_set].whereType(T);
      }
      add(value) {
        E._check(value);
        this[_maybeCopyBeforeWrite]();
        return this[_set].add(value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite]();
        this[_set].addAll(iterable);
      }
      clear() {
        this[_maybeCopyBeforeWrite]();
        this[_set].clear();
      }
      remove(value) {
        this[_maybeCopyBeforeWrite]();
        return this[_set].remove(value);
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite]();
        this[_set].removeWhere(test);
      }
      retainWhere(test) {
        this[_maybeCopyBeforeWrite]();
        this[_set].retainWhere(test);
      }
      removeAll(elements) {
        this[_maybeCopyBeforeWrite]();
        this[_set].removeAll(elements);
      }
      retainAll(elements) {
        this[_maybeCopyBeforeWrite]();
        this[_set].retainAll(elements);
      }
      toString() {
        return dart.toString(this[_set]);
      }
      [_maybeCopyBeforeWrite]() {
        if (!dart.test(this[_copyBeforeWrite])) return;
        this[_copyBeforeWrite] = false;
        this[_set] = this[_setFactory] != null ? (() => {
          let _ = this[_setFactory]();
          _.addAll(this[_set]);
          return _;
        })() : SetOfE().from(this[_set]);
      }
    }
    (CopyOnWriteSet.new = function(set, setFactory) {
      if (setFactory === void 0) setFactory = null;
      this[_set] = set;
      this[_setFactory] = setFactory;
      this[_copyBeforeWrite] = true;
    }).prototype = CopyOnWriteSet.prototype;
    dart.addTypeTests(CopyOnWriteSet);
    CopyOnWriteSet.prototype[_is_CopyOnWriteSet_default] = true;
    CopyOnWriteSet[dart.implements] = () => [SetOfE()];
    dart.setMethodSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getMethods(CopyOnWriteSet.__proto__),
      lookup: dart.fnType(E, [core$.Object]),
      intersection: dart.fnType(core$.Set$(E), [core$.Set$(core$.Object)]),
      union: dart.fnType(core$.Set$(E), [core$.Object]),
      difference: dart.fnType(core$.Set$(E), [core$.Set$(core$.Object)]),
      containsAll: dart.fnType(core$.bool, [core$.Iterable$(core$.Object)]),
      any: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      [$any]: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      cast: dart.gFnType(T => [core$.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core$.Set$(T), []]),
      contains: dart.fnType(core$.bool, [core$.Object]),
      [$contains]: dart.fnType(core$.bool, [core$.Object]),
      elementAt: dart.fnType(E, [core$.int]),
      [$elementAt]: dart.fnType(E, [core$.int]),
      every: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      [$every]: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      expand: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      firstWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core$.Iterable$(E), [core$.Object]),
      [$followedBy]: dart.fnType(core$.Iterable$(E), [core$.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      join: dart.fnType(core$.String, [], [core$.String]),
      [$join]: dart.fnType(core$.String, [], [core$.String]),
      lastWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      map: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      reduce: dart.fnType(E, [core$.Object]),
      [$reduce]: dart.fnType(E, [core$.Object]),
      singleWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      skip: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$skip]: dart.fnType(core$.Iterable$(E), [core$.int]),
      skipWhile: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$skipWhile]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      take: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$take]: dart.fnType(core$.Iterable$(E), [core$.int]),
      takeWhile: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$takeWhile]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      toList: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      [$toList]: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      toSet: dart.fnType(core$.Set$(E), []),
      [$toSet]: dart.fnType(core$.Set$(E), []),
      where: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$where]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      whereType: dart.gFnType(T => [core$.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core$.Iterable$(T), []]),
      add: dart.fnType(core$.bool, [core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core$.bool, [core$.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      removeAll: dart.fnType(dart.void, [core$.Iterable$(core$.Object)]),
      retainAll: dart.fnType(dart.void, [core$.Iterable$(core$.Object)]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      [_maybeCopyBeforeWrite]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getGetters(CopyOnWriteSet.__proto__),
      length: core$.int,
      [$length]: core$.int,
      first: E,
      [$first]: E,
      isEmpty: core$.bool,
      [$isEmpty]: core$.bool,
      isNotEmpty: core$.bool,
      [$isNotEmpty]: core$.bool,
      iterator: core$.Iterator$(E),
      [$iterator]: core$.Iterator$(E),
      last: E,
      [$last]: E,
      single: E,
      [$single]: E
    }));
    dart.setFieldSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getFields(CopyOnWriteSet.__proto__),
      [_setFactory]: dart.finalFieldType(VoidToSetOfE()),
      [_copyBeforeWrite]: dart.fieldType(core$.bool),
      [_set]: dart.fieldType(SetOfE())
    }));
    dart.defineExtensionMethods(CopyOnWriteSet, [
      'any',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'join',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      'toString'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteSet, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'single'
    ]);
    return CopyOnWriteSet;
  });
  src__internal__copy_on_write_set.CopyOnWriteSet = src__internal__copy_on_write_set.CopyOnWriteSet$();
  dart.addTypeTests(src__internal__copy_on_write_set.CopyOnWriteSet, _is_CopyOnWriteSet_default);
  const _list = Symbol('_list');
  const _growable = Symbol('_growable');
  const _copyBeforeWrite$ = Symbol('_copyBeforeWrite');
  const _maybeCopyBeforeWrite$ = Symbol('_maybeCopyBeforeWrite');
  const _is_CopyOnWriteList_default = Symbol('_is_CopyOnWriteList_default');
  src__internal__copy_on_write_list.CopyOnWriteList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    class CopyOnWriteList extends core$.Object {
      get length() {
        return this[_list][$length];
      }
      _get(index) {
        return this[_list][$_get](index);
      }
      ['+'](other) {
        ListOfE()._check(other);
        return this[_list][$plus](other);
      }
      any(test) {
        return this[_list][$any](test);
      }
      asMap() {
        return this[_list][$asMap]();
      }
      cast(T) {
        return new (src__internal__copy_on_write_list.CopyOnWriteList$(T)).new(this[_list][$cast](T), this[_growable]);
      }
      contains(element) {
        return this[_list][$contains](element);
      }
      elementAt(index) {
        return this[_list][$elementAt](index);
      }
      every(test) {
        return this[_list][$every](test);
      }
      expand(T, f) {
        return this[_list][$expand](T, f);
      }
      get first() {
        return this[_list][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_list][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this[_list][$followedBy](other);
      }
      forEach(f) {
        return this[_list][$forEach](f);
      }
      getRange(start, end) {
        return this[_list][$getRange](start, end);
      }
      indexOf(element, start) {
        E._check(element);
        if (start === void 0) start = 0;
        return this[_list][$indexOf](element, start);
      }
      indexWhere(test, start) {
        if (start === void 0) start = 0;
        return this[_list][$indexWhere](test, start);
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
      get iterator() {
        return this[_list][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_list][$join](separator);
      }
      get last() {
        return this[_list][$last];
      }
      lastIndexOf(element, start) {
        E._check(element);
        if (start === void 0) start = null;
        return this[_list][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start) {
        if (start === void 0) start = null;
        return this[_list][$lastIndexWhere](test, start);
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list][$lastWhere](test, {orElse: orElse});
      }
      map(T, f) {
        return this[_list][$map](T, f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_list][$reduce](combine);
      }
      get reversed() {
        return this[_list][$reversed];
      }
      get single() {
        return this[_list][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list][$singleWhere](test, {orElse: orElse});
      }
      skip(count) {
        return this[_list][$skip](count);
      }
      skipWhile(test) {
        return this[_list][$skipWhile](test);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return this[_list][$sublist](start, end);
      }
      take(count) {
        return this[_list][$take](count);
      }
      takeWhile(test) {
        return this[_list][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_list][$toList]({growable: growable});
      }
      toSet() {
        return this[_list][$toSet]();
      }
      where(test) {
        return this[_list][$where](test);
      }
      whereType(T) {
        return this[_list][$whereType](T);
      }
      set length(length) {
        this[_maybeCopyBeforeWrite$]();
        this[_list][$length] = length;
      }
      _set(index, element) {
        E._check(element);
        this[_maybeCopyBeforeWrite$]();
        this[_list][$_set](index, element);
        return element;
      }
      set first(element) {
        E._check(element);
        this[_maybeCopyBeforeWrite$]();
        this[_list][$first] = element;
      }
      set last(element) {
        E._check(element);
        this[_maybeCopyBeforeWrite$]();
        this[_list][$last] = element;
      }
      add(value) {
        E._check(value);
        this[_maybeCopyBeforeWrite$]();
        this[_list][$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_list][$addAll](iterable);
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        this[_maybeCopyBeforeWrite$]();
        this[_list][$sort](compare);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        this[_maybeCopyBeforeWrite$]();
        this[_list][$shuffle](random);
      }
      clear() {
        this[_maybeCopyBeforeWrite$]();
        this[_list][$clear]();
      }
      insert(index, element) {
        E._check(element);
        this[_maybeCopyBeforeWrite$]();
        this[_list][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_list][$insertAll](index, iterable);
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_list][$setAll](index, iterable);
      }
      remove(value) {
        this[_maybeCopyBeforeWrite$]();
        return this[_list][$remove](value);
      }
      removeAt(index) {
        this[_maybeCopyBeforeWrite$]();
        return this[_list][$removeAt](index);
      }
      removeLast() {
        this[_maybeCopyBeforeWrite$]();
        return this[_list][$removeLast]();
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite$]();
        this[_list][$removeWhere](test);
      }
      retainWhere(test) {
        this[_maybeCopyBeforeWrite$]();
        this[_list][$retainWhere](test);
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        this[_maybeCopyBeforeWrite$]();
        this[_list][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        this[_maybeCopyBeforeWrite$]();
        this[_list][$removeRange](start, end);
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        this[_maybeCopyBeforeWrite$]();
        this[_list][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_list][$replaceRange](start, end, iterable);
      }
      toString() {
        return dart.toString(this[_list]);
      }
      [_maybeCopyBeforeWrite$]() {
        if (!dart.test(this[_copyBeforeWrite$])) return;
        this[_copyBeforeWrite$] = false;
        this[_list] = ListOfE().from(this[_list], {growable: this[_growable]});
      }
    }
    (CopyOnWriteList.new = function(list, growable) {
      this[_list] = list;
      this[_growable] = growable;
      this[_copyBeforeWrite$] = true;
    }).prototype = CopyOnWriteList.prototype;
    CopyOnWriteList.prototype[dart.isList] = true;
    dart.addTypeTests(CopyOnWriteList);
    CopyOnWriteList.prototype[_is_CopyOnWriteList_default] = true;
    CopyOnWriteList[dart.implements] = () => [ListOfE()];
    dart.setMethodSignature(CopyOnWriteList, () => ({
      __proto__: dart.getMethods(CopyOnWriteList.__proto__),
      _get: dart.fnType(E, [core$.int]),
      [$_get]: dart.fnType(E, [core$.int]),
      '+': dart.fnType(core$.List$(E), [core$.Object]),
      [$plus]: dart.fnType(core$.List$(E), [core$.Object]),
      any: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      [$any]: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      asMap: dart.fnType(core$.Map$(core$.int, E), []),
      [$asMap]: dart.fnType(core$.Map$(core$.int, E), []),
      cast: dart.gFnType(T => [core$.List$(T), []]),
      [$cast]: dart.gFnType(T => [core$.List$(T), []]),
      contains: dart.fnType(core$.bool, [core$.Object]),
      [$contains]: dart.fnType(core$.bool, [core$.Object]),
      elementAt: dart.fnType(E, [core$.int]),
      [$elementAt]: dart.fnType(E, [core$.int]),
      every: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      [$every]: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      expand: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      firstWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core$.Iterable$(E), [core$.Object]),
      [$followedBy]: dart.fnType(core$.Iterable$(E), [core$.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      getRange: dart.fnType(core$.Iterable$(E), [core$.int, core$.int]),
      [$getRange]: dart.fnType(core$.Iterable$(E), [core$.int, core$.int]),
      indexOf: dart.fnType(core$.int, [core$.Object], [core$.int]),
      [$indexOf]: dart.fnType(core$.int, [core$.Object], [core$.int]),
      indexWhere: dart.fnType(core$.int, [dart.fnType(core$.bool, [E])], [core$.int]),
      [$indexWhere]: dart.fnType(core$.int, [dart.fnType(core$.bool, [E])], [core$.int]),
      join: dart.fnType(core$.String, [], [core$.String]),
      [$join]: dart.fnType(core$.String, [], [core$.String]),
      lastIndexOf: dart.fnType(core$.int, [core$.Object], [core$.int]),
      [$lastIndexOf]: dart.fnType(core$.int, [core$.Object], [core$.int]),
      lastIndexWhere: dart.fnType(core$.int, [dart.fnType(core$.bool, [E])], [core$.int]),
      [$lastIndexWhere]: dart.fnType(core$.int, [dart.fnType(core$.bool, [E])], [core$.int]),
      lastWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      map: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      reduce: dart.fnType(E, [core$.Object]),
      [$reduce]: dart.fnType(E, [core$.Object]),
      singleWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      skip: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$skip]: dart.fnType(core$.Iterable$(E), [core$.int]),
      skipWhile: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$skipWhile]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      sublist: dart.fnType(core$.List$(E), [core$.int], [core$.int]),
      [$sublist]: dart.fnType(core$.List$(E), [core$.int], [core$.int]),
      take: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$take]: dart.fnType(core$.Iterable$(E), [core$.int]),
      takeWhile: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$takeWhile]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      toList: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      [$toList]: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      toSet: dart.fnType(core$.Set$(E), []),
      [$toSet]: dart.fnType(core$.Set$(E), []),
      where: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$where]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      whereType: dart.gFnType(T => [core$.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core$.Iterable$(T), []]),
      _set: dart.fnType(dart.void, [core$.int, core$.Object]),
      [$_set]: dart.fnType(dart.void, [core$.int, core$.Object]),
      add: dart.fnType(dart.void, [core$.Object]),
      [$add]: dart.fnType(dart.void, [core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      [$addAll]: dart.fnType(dart.void, [core$.Object]),
      sort: dart.fnType(dart.void, [], [dart.fnType(core$.int, [E, E])]),
      [$sort]: dart.fnType(dart.void, [], [dart.fnType(core$.int, [E, E])]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      [$shuffle]: dart.fnType(dart.void, [], [math.Random]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      insert: dart.fnType(dart.void, [core$.int, core$.Object]),
      [$insert]: dart.fnType(dart.void, [core$.int, core$.Object]),
      insertAll: dart.fnType(dart.void, [core$.int, core$.Object]),
      [$insertAll]: dart.fnType(dart.void, [core$.int, core$.Object]),
      setAll: dart.fnType(dart.void, [core$.int, core$.Object]),
      [$setAll]: dart.fnType(dart.void, [core$.int, core$.Object]),
      remove: dart.fnType(core$.bool, [core$.Object]),
      [$remove]: dart.fnType(core$.bool, [core$.Object]),
      removeAt: dart.fnType(E, [core$.int]),
      [$removeAt]: dart.fnType(E, [core$.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      setRange: dart.fnType(dart.void, [core$.int, core$.int, core$.Object], [core$.int]),
      [$setRange]: dart.fnType(dart.void, [core$.int, core$.int, core$.Object], [core$.int]),
      removeRange: dart.fnType(dart.void, [core$.int, core$.int]),
      [$removeRange]: dart.fnType(dart.void, [core$.int, core$.int]),
      fillRange: dart.fnType(dart.void, [core$.int, core$.int], [core$.Object]),
      [$fillRange]: dart.fnType(dart.void, [core$.int, core$.int], [core$.Object]),
      replaceRange: dart.fnType(dart.void, [core$.int, core$.int, core$.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core$.int, core$.int, core$.Object]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      [_maybeCopyBeforeWrite$]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteList, () => ({
      __proto__: dart.getGetters(CopyOnWriteList.__proto__),
      length: core$.int,
      [$length]: core$.int,
      first: E,
      [$first]: E,
      isEmpty: core$.bool,
      [$isEmpty]: core$.bool,
      isNotEmpty: core$.bool,
      [$isNotEmpty]: core$.bool,
      iterator: core$.Iterator$(E),
      [$iterator]: core$.Iterator$(E),
      last: E,
      [$last]: E,
      reversed: core$.Iterable$(E),
      [$reversed]: core$.Iterable$(E),
      single: E,
      [$single]: E
    }));
    dart.setSetterSignature(CopyOnWriteList, () => ({
      __proto__: dart.getSetters(CopyOnWriteList.__proto__),
      length: core$.int,
      [$length]: core$.int,
      first: E,
      [$first]: E,
      last: E,
      [$last]: E
    }));
    dart.setFieldSignature(CopyOnWriteList, () => ({
      __proto__: dart.getFields(CopyOnWriteList.__proto__),
      [_copyBeforeWrite$]: dart.fieldType(core$.bool),
      [_growable]: dart.fieldType(core$.bool),
      [_list]: dart.fieldType(ListOfE())
    }));
    dart.defineExtensionMethods(CopyOnWriteList, [
      '_get',
      '+',
      'any',
      'asMap',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'getRange',
      'indexOf',
      'indexWhere',
      'join',
      'lastIndexOf',
      'lastIndexWhere',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'sublist',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      '_set',
      'add',
      'addAll',
      'sort',
      'shuffle',
      'clear',
      'insert',
      'insertAll',
      'setAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'setRange',
      'removeRange',
      'fillRange',
      'replaceRange',
      'toString'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteList, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'reversed',
      'single'
    ]);
    return CopyOnWriteList;
  });
  src__internal__copy_on_write_list.CopyOnWriteList = src__internal__copy_on_write_list.CopyOnWriteList$();
  dart.addTypeTests(src__internal__copy_on_write_list.CopyOnWriteList, _is_CopyOnWriteList_default);
  const _overridenHashCode = Symbol('_overridenHashCode');
  const _set$ = Symbol('_set');
  const _setFactory$ = Symbol('_setFactory');
  const _hashCode = Symbol('_hashCode');
  let const$;
  const _is_BuiltSet_default = Symbol('_is_BuiltSet_default');
  src__set.BuiltSet$ = dart.generic(E => {
    let BuiltSetOfE = () => (BuiltSetOfE = dart.constFn(src__set.BuiltSet$(E)))();
    let _BuiltSetOfE = () => (_BuiltSetOfE = dart.constFn(src__set._BuiltSet$(E)))();
    let SetBuilderOfE = () => (SetBuilderOfE = dart.constFn(src__set.SetBuilder$(E)))();
    let BuiltListOfE = () => (BuiltListOfE = dart.constFn(src__list.BuiltList$(E)))();
    let EToint = () => (EToint = dart.constFn(dart.fnType(core$.int, [E])))();
    let UnmodifiableSetViewOfE = () => (UnmodifiableSetViewOfE = dart.constFn(src__unmodifiable_wrappers.UnmodifiableSetView$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let CopyOnWriteSetOfE = () => (CopyOnWriteSetOfE = dart.constFn(src__internal__copy_on_write_set.CopyOnWriteSet$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let BuiltIterableOfE = () => (BuiltIterableOfE = dart.constFn(src__iterable.BuiltIterable$(E)))();
    let SetOfE = () => (SetOfE = dart.constFn(core$.Set$(E)))();
    let VoidToSetOfE = () => (VoidToSetOfE = dart.constFn(dart.fnType(SetOfE(), [])))();
    class BuiltSet extends core$.Object {
      static new(iterable) {
        if (iterable === void 0) iterable = const$ || (const$ = dart.constList([], dart.dynamic));
        return BuiltSetOfE().from(iterable);
      }
      static from(iterable) {
        if (src__set._BuiltSet.is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(E)))) {
          return BuiltSetOfE().as(iterable);
        } else {
          return new (_BuiltSetOfE()).copyAndCheckTypes(iterable);
        }
      }
      static of(iterable) {
        if (_BuiltSetOfE().is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(E)))) {
          return iterable;
        } else {
          return new (_BuiltSetOfE()).copyAndCheckForNull(iterable);
        }
      }
      static build(updates) {
        return (() => {
          let _ = SetBuilderOfE().new();
          _.update(updates);
          return _;
        })().build();
      }
      toBuilder() {
        return new (SetBuilderOfE())._fromBuiltSet(_BuiltSetOfE()._check(this));
      }
      rebuild(updates) {
        return (() => {
          let _ = this.toBuilder();
          _.update(updates);
          return _;
        })().build();
      }
      toBuiltList() {
        return BuiltListOfE().new(this);
      }
      toBuiltSet() {
        return this;
      }
      get hashCode() {
        if (this[_hashCode] == null) {
          this[_hashCode] = core$0.hashObjects((() => {
            let _ = this[_set$].map(core$.int, dart.fn(e => dart.hashCode(e), EToint()))[$toList]({growable: false});
            _[$sort]();
            return _;
          })());
        }
        return this[_hashCode];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__set.BuiltSet.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        return this.containsAll(IterableOfObject()._check(other));
      }
      toString() {
        return dart.toString(this[_set$]);
      }
      asSet() {
        return new (UnmodifiableSetViewOfE()).new(this[_set$]);
      }
      get length() {
        return this[_set$].length;
      }
      containsAll(other) {
        return this[_set$].containsAll(other);
      }
      difference(other) {
        return new (_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$].difference(other[_set$]));
      }
      intersection(other) {
        return new (_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$].intersection(other[_set$]));
      }
      lookup(object) {
        return this[_set$].lookup(object);
      }
      union(other) {
        BuiltSetOfE()._check(other);
        return new (_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$].union(other[_set$]));
      }
      get iterator() {
        return this[_set$].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
      cast(T) {
        return core$.Iterable.castFrom(E, T, this[_set$]);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this[_set$].followedBy(other);
      }
      whereType(T) {
        return this[_set$].whereType(T);
      }
      map(T, f) {
        return this[_set$].map(T, f);
      }
      where(test) {
        return this[_set$].where(test);
      }
      expand(T, f) {
        return this[_set$].expand(T, f);
      }
      contains(element) {
        return this[_set$].contains(element);
      }
      forEach(f) {
        return this[_set$].forEach(f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_set$].reduce(combine);
      }
      fold(T, initialValue, combine) {
        return this[_set$].fold(T, initialValue, combine);
      }
      every(test) {
        return this[_set$].every(test);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_set$].join(separator);
      }
      any(test) {
        return this[_set$].any(test);
      }
      toSet() {
        return new (CopyOnWriteSetOfE()).new(this[_set$], this[_setFactory$]);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set$].toList({growable: growable});
      }
      get isEmpty() {
        return this[_set$].isEmpty;
      }
      get isNotEmpty() {
        return this[_set$].isNotEmpty;
      }
      take(n) {
        return this[_set$].take(n);
      }
      takeWhile(test) {
        return this[_set$].takeWhile(test);
      }
      skip(n) {
        return this[_set$].skip(n);
      }
      skipWhile(test) {
        return this[_set$].skipWhile(test);
      }
      get first() {
        return this[_set$].first;
      }
      get last() {
        return this[_set$].last;
      }
      get single() {
        return this[_set$].single;
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set$].firstWhere(test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set$].lastWhere(test, {orElse: orElse});
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set$].singleWhere(test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_set$].elementAt(index);
      }
    }
    (BuiltSet.__ = function(setFactory, set) {
      this[_hashCode] = null;
      this[_setFactory$] = setFactory;
      this[_set$] = set;
      if (dart.equals(dart.wrapType(E), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new("explicit element type required, for example \"new BuiltSet<int>\""));
      }
    }).prototype = BuiltSet.prototype;
    BuiltSet.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltSet);
    BuiltSet.prototype[_is_BuiltSet_default] = true;
    BuiltSet[dart.implements] = () => [IterableOfE(), BuiltIterableOfE()];
    dart.setMethodSignature(BuiltSet, () => ({
      __proto__: dart.getMethods(BuiltSet.__proto__),
      toBuilder: dart.fnType(src__set.SetBuilder$(E), []),
      rebuild: dart.fnType(src__set.BuiltSet$(E), [dart.fnType(dart.dynamic, [src__set.SetBuilder$(E)])]),
      toBuiltList: dart.fnType(src__list.BuiltList$(E), []),
      toBuiltSet: dart.fnType(src__set.BuiltSet$(E), []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      asSet: dart.fnType(core$.Set$(E), []),
      containsAll: dart.fnType(core$.bool, [core$.Iterable$(core$.Object)]),
      difference: dart.fnType(src__set.BuiltSet$(E), [src__set.BuiltSet$(core$.Object)]),
      intersection: dart.fnType(src__set.BuiltSet$(E), [src__set.BuiltSet$(core$.Object)]),
      lookup: dart.fnType(E, [core$.Object]),
      union: dart.fnType(src__set.BuiltSet$(E), [core$.Object]),
      cast: dart.gFnType(T => [core$.Iterable$(T), []]),
      [$cast]: dart.gFnType(T => [core$.Iterable$(T), []]),
      followedBy: dart.fnType(core$.Iterable$(E), [core$.Object]),
      [$followedBy]: dart.fnType(core$.Iterable$(E), [core$.Object]),
      whereType: dart.gFnType(T => [core$.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core$.Iterable$(T), []]),
      map: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      where: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$where]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      expand: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      contains: dart.fnType(core$.bool, [core$.Object]),
      [$contains]: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      reduce: dart.fnType(E, [core$.Object]),
      [$reduce]: dart.fnType(E, [core$.Object]),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      every: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      [$every]: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      join: dart.fnType(core$.String, [], [core$.String]),
      [$join]: dart.fnType(core$.String, [], [core$.String]),
      any: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      [$any]: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      toSet: dart.fnType(core$.Set$(E), []),
      [$toSet]: dart.fnType(core$.Set$(E), []),
      toList: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      [$toList]: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      take: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$take]: dart.fnType(core$.Iterable$(E), [core$.int]),
      takeWhile: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$takeWhile]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      skip: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$skip]: dart.fnType(core$.Iterable$(E), [core$.int]),
      skipWhile: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$skipWhile]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      firstWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      lastWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      singleWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      elementAt: dart.fnType(E, [core$.int]),
      [$elementAt]: dart.fnType(E, [core$.int])
    }));
    dart.setGetterSignature(BuiltSet, () => ({
      __proto__: dart.getGetters(BuiltSet.__proto__),
      hashCode: core$.int,
      [$hashCode]: core$.int,
      length: core$.int,
      [$length]: core$.int,
      iterator: core$.Iterator$(E),
      [$iterator]: core$.Iterator$(E),
      isEmpty: core$.bool,
      [$isEmpty]: core$.bool,
      isNotEmpty: core$.bool,
      [$isNotEmpty]: core$.bool,
      first: E,
      [$first]: E,
      last: E,
      [$last]: E,
      single: E,
      [$single]: E
    }));
    dart.setFieldSignature(BuiltSet, () => ({
      __proto__: dart.getFields(BuiltSet.__proto__),
      [_setFactory$]: dart.finalFieldType(VoidToSetOfE()),
      [_set$]: dart.finalFieldType(SetOfE()),
      [_hashCode]: dart.fieldType(core$.int)
    }));
    dart.defineExtensionMethods(BuiltSet, [
      '_equals',
      'toString',
      'cast',
      'followedBy',
      'whereType',
      'map',
      'where',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'every',
      'join',
      'any',
      'toSet',
      'toList',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'singleWhere',
      'elementAt'
    ]);
    dart.defineExtensionAccessors(BuiltSet, [
      'hashCode',
      'length',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single'
    ]);
    return BuiltSet;
  });
  src__set.BuiltSet = src__set.BuiltSet$();
  dart.addTypeTests(src__set.BuiltSet, _is_BuiltSet_default);
  const _is__BuiltSet_default = Symbol('_is__BuiltSet_default');
  src__set._BuiltSet$ = dart.generic(E => {
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection$._HashSet$(E)))();
    class _BuiltSet extends src__set.BuiltSet$(E) {
      hasExactElementType(type) {
        return dart.equals(dart.wrapType(E), type);
      }
    }
    (_BuiltSet.withSafeSet = function(setFactory, set) {
      _BuiltSet.__proto__.__.call(this, setFactory, set);
    }).prototype = _BuiltSet.prototype;
    (_BuiltSet.copyAndCheckTypes = function(iterable) {
      _BuiltSet.__proto__.__.call(this, null, new (_HashSetOfE()).new());
      for (let element of iterable) {
        if (E.is(element)) {
          this[_set$].add(element);
        } else {
          dart.throw(new core$.ArgumentError.new("iterable contained invalid element: " + dart.str(element)));
        }
      }
    }).prototype = _BuiltSet.prototype;
    (_BuiltSet.copyAndCheckForNull = function(iterable) {
      _BuiltSet.__proto__.__.call(this, null, new (_HashSetOfE()).new());
      for (let element of iterable) {
        if (element == null) {
          dart.throw(new core$.ArgumentError.new("iterable contained invalid element: null"));
        } else {
          this[_set$].add(E._check(element));
        }
      }
    }).prototype = _BuiltSet.prototype;
    dart.addTypeTests(_BuiltSet);
    _BuiltSet.prototype[_is__BuiltSet_default] = true;
    dart.setMethodSignature(_BuiltSet, () => ({
      __proto__: dart.getMethods(_BuiltSet.__proto__),
      hasExactElementType: dart.fnType(core$.bool, [core$.Type])
    }));
    return _BuiltSet;
  });
  src__set._BuiltSet = src__set._BuiltSet$();
  dart.addTypeTests(src__set._BuiltSet, _is__BuiltSet_default);
  const _is_OverriddenHashcodeBuiltSet_default = Symbol('_is_OverriddenHashcodeBuiltSet_default');
  src__set.OverriddenHashcodeBuiltSet$ = dart.generic(T => {
    class OverriddenHashcodeBuiltSet extends src__set._BuiltSet$(T) {
      get hashCode() {
        return this[_overridenHashCode];
      }
    }
    (OverriddenHashcodeBuiltSet.new = function(iterable, overridenHashCode) {
      this[_overridenHashCode] = overridenHashCode;
      OverriddenHashcodeBuiltSet.__proto__.copyAndCheckTypes.call(this, iterable);
    }).prototype = OverriddenHashcodeBuiltSet.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltSet);
    OverriddenHashcodeBuiltSet.prototype[_is_OverriddenHashcodeBuiltSet_default] = true;
    dart.setFieldSignature(OverriddenHashcodeBuiltSet, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltSet.__proto__),
      [_overridenHashCode]: dart.finalFieldType(core$.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltSet, ['hashCode']);
    return OverriddenHashcodeBuiltSet;
  });
  src__set.OverriddenHashcodeBuiltSet = src__set.OverriddenHashcodeBuiltSet$();
  dart.addTypeTests(src__set.OverriddenHashcodeBuiltSet, _is_OverriddenHashcodeBuiltSet_default);
  src__set._SetFactory$ = dart.generic(E => {
    const _SetFactory = dart.typedef('_SetFactory', () => dart.fnType(core$.Set$(E), []));
    return _SetFactory;
  });
  src__set._SetFactory = src__set._SetFactory$();
  const _setOwner = Symbol('_setOwner');
  const _checkGenericTypeParameter = Symbol('_checkGenericTypeParameter');
  let const$0;
  const _withOwner = Symbol('_withOwner');
  const _createSet = Symbol('_createSet');
  const _setSafeSet = Symbol('_setSafeSet');
  const _checkElement = Symbol('_checkElement');
  const _safeSet = Symbol('_safeSet');
  const _checkElements = Symbol('_checkElements');
  const _is_SetBuilder_default = Symbol('_is_SetBuilder_default');
  src__set.SetBuilder$ = dart.generic(E => {
    let SetBuilderOfE = () => (SetBuilderOfE = dart.constFn(src__set.SetBuilder$(E)))();
    let _BuiltSetOfE = () => (_BuiltSetOfE = dart.constFn(src__set._BuiltSet$(E)))();
    let SetOfE = () => (SetOfE = dart.constFn(core$.Set$(E)))();
    let VoidToSetOfE = () => (VoidToSetOfE = dart.constFn(dart.fnType(SetOfE(), [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let EToE = () => (EToE = dart.constFn(dart.fnType(E, [E])))();
    let EToIterableOfE = () => (EToIterableOfE = dart.constFn(dart.fnType(IterableOfE(), [E])))();
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection$._HashSet$(E)))();
    class SetBuilder extends core$.Object {
      static new(iterable) {
        if (iterable === void 0) iterable = const$0 || (const$0 = dart.constList([], dart.dynamic));
        let _ = new (SetBuilderOfE())._uninitialized();
        _.replace(iterable);
        return _;
      }
      build() {
        if (this[_setOwner] == null) {
          this[_setOwner] = new (_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$]);
        }
        return this[_setOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(iterable) {
        if (_BuiltSetOfE().is(iterable) && dart.equals(iterable[_setFactory$], this[_setFactory$])) {
          this[_withOwner](iterable);
        } else {
          let set = this[_createSet]();
          for (let element of iterable) {
            if (E.is(element)) {
              set.add(element);
            } else {
              dart.throw(new core$.ArgumentError.new("iterable contained invalid element: " + dart.str(element)));
            }
          }
          this[_setSafeSet](set);
        }
      }
      withBase(base) {
        VoidToSetOfE()._check(base);
        if (base == null) {
          dart.throw(new core$.ArgumentError.notNull("base"));
        }
        this[_setFactory$] = base;
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set$]);
          return _;
        })());
      }
      withDefaultBase() {
        this[_setFactory$] = null;
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set$]);
          return _;
        })());
      }
      get length() {
        return this[_set$].length;
      }
      get isEmpty() {
        return this[_set$].isEmpty;
      }
      get isNotEmpty() {
        return this[_set$].isNotEmpty;
      }
      add(value) {
        E._check(value);
        this[_checkElement](value);
        this[_safeSet].add(value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_checkElements](iterable);
        this[_safeSet].addAll(iterable);
      }
      clear() {
        this[_safeSet].clear();
      }
      remove(value) {
        return this[_safeSet].remove(value);
      }
      removeAll(elements) {
        this[_safeSet].removeAll(elements);
      }
      removeWhere(test) {
        this[_safeSet].removeWhere(test);
      }
      retainAll(elements) {
        this[_safeSet].retainAll(elements);
      }
      retainWhere(test) {
        this[_safeSet].retainWhere(test);
      }
      map(f) {
        EToE()._check(f);
        let result = this[_createSet]();
        result.addAll(this[_set$].map(E, f));
        this[_checkElements](result);
        this[_setSafeSet](result);
      }
      where(test) {
        return this.retainWhere(test);
      }
      expand(f) {
        EToIterableOfE()._check(f);
        let result = this[_createSet]();
        result.addAll(this[_set$].expand(E, f));
        this[_checkElements](result);
        this[_setSafeSet](result);
      }
      take(n) {
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set$].take(n));
          return _;
        })());
      }
      takeWhile(test) {
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set$].takeWhile(test));
          return _;
        })());
      }
      skip(n) {
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set$].skip(n));
          return _;
        })());
      }
      skipWhile(test) {
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set$].skipWhile(test));
          return _;
        })());
      }
      [_withOwner](setOwner) {
        _BuiltSetOfE()._check(setOwner);
        if (!dart.equals(setOwner[_setFactory$], this[_setFactory$])) dart.assertFailed("Can't reuse a built set that uses a different base");
        this[_set$] = setOwner[_set$];
        this[_setOwner] = setOwner;
      }
      [_setSafeSet](set) {
        SetOfE()._check(set);
        this[_setOwner] = null;
        this[_set$] = set;
      }
      get [_safeSet]() {
        if (this[_setOwner] != null) {
          let _ = this[_createSet]();
          _.addAll(this[_set$]);
          this[_set$] = _;
          this[_setOwner] = null;
        }
        return this[_set$];
      }
      [_createSet]() {
        return this[_setFactory$] != null ? this[_setFactory$]() : new (_HashSetOfE()).new();
      }
      [_checkGenericTypeParameter]() {
        if (dart.equals(dart.wrapType(E), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new("explicit element type required, " + "for example \"new SetBuilder<int>\""));
        }
      }
      [_checkElement](element) {
        E._check(element);
        if (element == null) {
          dart.throw(new core$.ArgumentError.new("null element"));
        }
      }
      [_checkElements](elements) {
        for (let element of elements) {
          if (!E.is(element)) {
            dart.throw(new core$.ArgumentError.new("invalid element: " + dart.str(element)));
          }
        }
      }
    }
    (SetBuilder._uninitialized = function() {
      this[_setFactory$] = null;
      this[_set$] = null;
      this[_setOwner] = null;
      this[_checkGenericTypeParameter]();
    }).prototype = SetBuilder.prototype;
    (SetBuilder._fromBuiltSet = function(set) {
      this[_setFactory$] = set[_setFactory$];
      this[_set$] = set[_set$];
      this[_setOwner] = set;
    }).prototype = SetBuilder.prototype;
    dart.addTypeTests(SetBuilder);
    SetBuilder.prototype[_is_SetBuilder_default] = true;
    dart.setMethodSignature(SetBuilder, () => ({
      __proto__: dart.getMethods(SetBuilder.__proto__),
      build: dart.fnType(src__set.BuiltSet$(E), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [src__set.SetBuilder$(E)])]),
      replace: dart.fnType(dart.void, [core$.Iterable]),
      withBase: dart.fnType(dart.void, [core$.Object]),
      withDefaultBase: dart.fnType(dart.void, []),
      add: dart.fnType(dart.void, [core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core$.bool, [core$.Object]),
      removeAll: dart.fnType(dart.void, [core$.Iterable$(core$.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core$.Iterable$(core$.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      map: dart.fnType(dart.void, [core$.Object]),
      where: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      expand: dart.fnType(dart.void, [core$.Object]),
      take: dart.fnType(dart.void, [core$.int]),
      takeWhile: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      skip: dart.fnType(dart.void, [core$.int]),
      skipWhile: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      [_withOwner]: dart.fnType(dart.void, [core$.Object]),
      [_setSafeSet]: dart.fnType(dart.void, [core$.Object]),
      [_createSet]: dart.fnType(core$.Set$(E), []),
      [_checkGenericTypeParameter]: dart.fnType(dart.void, []),
      [_checkElement]: dart.fnType(dart.void, [core$.Object]),
      [_checkElements]: dart.fnType(dart.void, [core$.Iterable])
    }));
    dart.setGetterSignature(SetBuilder, () => ({
      __proto__: dart.getGetters(SetBuilder.__proto__),
      length: core$.int,
      isEmpty: core$.bool,
      isNotEmpty: core$.bool,
      [_safeSet]: core$.Set$(E)
    }));
    dart.setFieldSignature(SetBuilder, () => ({
      __proto__: dart.getFields(SetBuilder.__proto__),
      [_setFactory$]: dart.fieldType(VoidToSetOfE()),
      [_set$]: dart.fieldType(SetOfE()),
      [_setOwner]: dart.fieldType(_BuiltSetOfE())
    }));
    return SetBuilder;
  });
  src__set.SetBuilder = src__set.SetBuilder$();
  dart.addTypeTests(src__set.SetBuilder, _is_SetBuilder_default);
  const _is_BuiltIterable_default = Symbol('_is_BuiltIterable_default');
  src__iterable.BuiltIterable$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    class BuiltIterable extends core$.Object {
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
    }
    (BuiltIterable.new = function() {
    }).prototype = BuiltIterable.prototype;
    BuiltIterable.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltIterable);
    BuiltIterable.prototype[_is_BuiltIterable_default] = true;
    BuiltIterable[dart.implements] = () => [IterableOfE()];
    return BuiltIterable;
  });
  src__iterable.BuiltIterable = src__iterable.BuiltIterable$();
  dart.addTypeTests(src__iterable.BuiltIterable, _is_BuiltIterable_default);
  const _overridenHashCode$ = Symbol('_overridenHashCode');
  let const$1;
  const _list$ = Symbol('_list');
  const _hashCode$ = Symbol('_hashCode');
  let const$2;
  const _is_BuiltList_default = Symbol('_is_BuiltList_default');
  src__list.BuiltList$ = dart.generic(E => {
    let BuiltListOfE = () => (BuiltListOfE = dart.constFn(src__list.BuiltList$(E)))();
    let _BuiltListOfE = () => (_BuiltListOfE = dart.constFn(src__list._BuiltList$(E)))();
    let ListBuilderOfE = () => (ListBuilderOfE = dart.constFn(src__list.ListBuilder$(E)))();
    let BuiltSetOfE = () => (BuiltSetOfE = dart.constFn(src__set.BuiltSet$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let CopyOnWriteListOfE = () => (CopyOnWriteListOfE = dart.constFn(src__internal__copy_on_write_list.CopyOnWriteList$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let BuiltIterableOfE = () => (BuiltIterableOfE = dart.constFn(src__iterable.BuiltIterable$(E)))();
    class BuiltList extends core$.Object {
      static new(iterable) {
        if (iterable === void 0) iterable = const$2 || (const$2 = dart.constList([], dart.dynamic));
        return BuiltListOfE().from(iterable);
      }
      static from(iterable) {
        if (src__list._BuiltList.is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(E)))) {
          return BuiltListOfE().as(iterable);
        } else {
          return new (_BuiltListOfE()).copyAndCheckTypes(iterable);
        }
      }
      static of(iterable) {
        if (_BuiltListOfE().is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(E)))) {
          return iterable;
        } else {
          return new (_BuiltListOfE()).copyAndCheckForNull(iterable);
        }
      }
      static build(updates) {
        return (() => {
          let _ = ListBuilderOfE().new();
          _.update(updates);
          return _;
        })().build();
      }
      toBuilder() {
        return ListBuilderOfE().new(this);
      }
      rebuild(updates) {
        return (() => {
          let _ = this.toBuilder();
          _.update(updates);
          return _;
        })().build();
      }
      toBuiltList() {
        return this;
      }
      toBuiltSet() {
        return BuiltSetOfE().new(this);
      }
      get hashCode() {
        if (this[_hashCode$] == null) {
          this[_hashCode$] = core$0.hashObjects(this[_list$]);
        }
        return this[_hashCode$];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__list.BuiltList.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let i = 0; i !== this.length; ++i) {
          if (!dart.equals(dart.dindex(other, i), this._get(i))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_list$]);
      }
      asList() {
        return ListOfE().unmodifiable(this[_list$]);
      }
      _get(index) {
        return this[_list$][$_get](index);
      }
      ['+'](other) {
        BuiltListOfE()._check(other);
        return new (_BuiltListOfE()).withSafeList(this[_list$][$plus](other[_list$]));
      }
      get length() {
        return this[_list$][$length];
      }
      get reversed() {
        return this[_list$][$reversed];
      }
      indexOf(element, start) {
        E._check(element);
        if (start === void 0) start = 0;
        return this[_list$][$indexOf](element, start);
      }
      lastIndexOf(element, start) {
        E._check(element);
        if (start === void 0) start = null;
        return this[_list$][$lastIndexOf](element, start);
      }
      indexWhere(test, start) {
        if (start === void 0) start = 0;
        return this[_list$][$indexWhere](test, start);
      }
      lastIndexWhere(test, start) {
        if (start === void 0) start = null;
        return this[_list$][$lastIndexWhere](test, start);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return new (_BuiltListOfE()).withSafeList(this[_list$][$sublist](start, end));
      }
      getRange(start, end) {
        return this[_list$][$getRange](start, end);
      }
      asMap() {
        return this[_list$][$asMap]();
      }
      get iterator() {
        return this[_list$][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
      map(T, f) {
        return this[_list$][$map](T, f);
      }
      where(test) {
        return this[_list$][$where](test);
      }
      whereType(T) {
        return this[_list$][$whereType](T);
      }
      expand(T, f) {
        return this[_list$][$expand](T, f);
      }
      contains(element) {
        return this[_list$][$contains](element);
      }
      forEach(f) {
        return this[_list$][$forEach](f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_list$][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_list$][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this[_list$][$followedBy](other);
      }
      every(test) {
        return this[_list$][$every](test);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_list$][$join](separator);
      }
      any(test) {
        return this[_list$][$any](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return new (CopyOnWriteListOfE()).new(this[_list$], growable);
      }
      toSet() {
        return this[_list$][$toSet]();
      }
      get isEmpty() {
        return this[_list$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$][$isNotEmpty];
      }
      take(n) {
        return this[_list$][$take](n);
      }
      takeWhile(test) {
        return this[_list$][$takeWhile](test);
      }
      skip(n) {
        return this[_list$][$skip](n);
      }
      skipWhile(test) {
        return this[_list$][$skipWhile](test);
      }
      get first() {
        return this[_list$][$first];
      }
      get last() {
        return this[_list$][$last];
      }
      get single() {
        return this[_list$][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list$][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list$][$lastWhere](test, {orElse: orElse});
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list$][$singleWhere](test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_list$][$elementAt](index);
      }
      cast(T) {
        return core$.Iterable.castFrom(E, T, this[_list$]);
      }
    }
    (BuiltList.__ = function(list) {
      this[_hashCode$] = null;
      this[_list$] = list;
      if (dart.equals(dart.wrapType(E), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new("explicit element type required, for example \"new BuiltList<int>\""));
      }
    }).prototype = BuiltList.prototype;
    BuiltList.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltList);
    BuiltList.prototype[_is_BuiltList_default] = true;
    BuiltList[dart.implements] = () => [IterableOfE(), BuiltIterableOfE()];
    dart.setMethodSignature(BuiltList, () => ({
      __proto__: dart.getMethods(BuiltList.__proto__),
      toBuilder: dart.fnType(src__list.ListBuilder$(E), []),
      rebuild: dart.fnType(src__list.BuiltList$(E), [dart.fnType(dart.dynamic, [src__list.ListBuilder$(E)])]),
      toBuiltList: dart.fnType(src__list.BuiltList$(E), []),
      toBuiltSet: dart.fnType(src__set.BuiltSet$(E), []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      asList: dart.fnType(core$.List$(E), []),
      _get: dart.fnType(E, [core$.int]),
      '+': dart.fnType(src__list.BuiltList$(E), [core$.Object]),
      indexOf: dart.fnType(core$.int, [core$.Object], [core$.int]),
      lastIndexOf: dart.fnType(core$.int, [core$.Object], [core$.int]),
      indexWhere: dart.fnType(core$.int, [dart.fnType(core$.bool, [E])], [core$.int]),
      lastIndexWhere: dart.fnType(core$.int, [dart.fnType(core$.bool, [E])], [core$.int]),
      sublist: dart.fnType(src__list.BuiltList$(E), [core$.int], [core$.int]),
      getRange: dart.fnType(core$.Iterable$(E), [core$.int, core$.int]),
      asMap: dart.fnType(core$.Map$(core$.int, E), []),
      map: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      where: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$where]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      whereType: dart.gFnType(T => [core$.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core$.Iterable$(T), []]),
      expand: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      contains: dart.fnType(core$.bool, [core$.Object]),
      [$contains]: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      reduce: dart.fnType(E, [core$.Object]),
      [$reduce]: dart.fnType(E, [core$.Object]),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core$.Iterable$(E), [core$.Object]),
      [$followedBy]: dart.fnType(core$.Iterable$(E), [core$.Object]),
      every: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      [$every]: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      join: dart.fnType(core$.String, [], [core$.String]),
      [$join]: dart.fnType(core$.String, [], [core$.String]),
      any: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      [$any]: dart.fnType(core$.bool, [dart.fnType(core$.bool, [E])]),
      toList: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      [$toList]: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      toSet: dart.fnType(core$.Set$(E), []),
      [$toSet]: dart.fnType(core$.Set$(E), []),
      take: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$take]: dart.fnType(core$.Iterable$(E), [core$.int]),
      takeWhile: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$takeWhile]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      skip: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$skip]: dart.fnType(core$.Iterable$(E), [core$.int]),
      skipWhile: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      [$skipWhile]: dart.fnType(core$.Iterable$(E), [dart.fnType(core$.bool, [E])]),
      firstWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      lastWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      singleWhere: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core$.bool, [E])], {orElse: core$.Object}),
      elementAt: dart.fnType(E, [core$.int]),
      [$elementAt]: dart.fnType(E, [core$.int]),
      cast: dart.gFnType(T => [core$.Iterable$(T), []]),
      [$cast]: dart.gFnType(T => [core$.Iterable$(T), []])
    }));
    dart.setGetterSignature(BuiltList, () => ({
      __proto__: dart.getGetters(BuiltList.__proto__),
      hashCode: core$.int,
      [$hashCode]: core$.int,
      length: core$.int,
      [$length]: core$.int,
      reversed: core$.Iterable$(E),
      iterator: core$.Iterator$(E),
      [$iterator]: core$.Iterator$(E),
      isEmpty: core$.bool,
      [$isEmpty]: core$.bool,
      isNotEmpty: core$.bool,
      [$isNotEmpty]: core$.bool,
      first: E,
      [$first]: E,
      last: E,
      [$last]: E,
      single: E,
      [$single]: E
    }));
    dart.setFieldSignature(BuiltList, () => ({
      __proto__: dart.getFields(BuiltList.__proto__),
      [_list$]: dart.finalFieldType(ListOfE()),
      [_hashCode$]: dart.fieldType(core$.int)
    }));
    dart.defineExtensionMethods(BuiltList, [
      '_equals',
      'toString',
      'map',
      'where',
      'whereType',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'followedBy',
      'every',
      'join',
      'any',
      'toList',
      'toSet',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'singleWhere',
      'elementAt',
      'cast'
    ]);
    dart.defineExtensionAccessors(BuiltList, [
      'hashCode',
      'length',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single'
    ]);
    return BuiltList;
  });
  src__list.BuiltList = src__list.BuiltList$();
  dart.addTypeTests(src__list.BuiltList, _is_BuiltList_default);
  const _is__BuiltList_default = Symbol('_is__BuiltList_default');
  src__list._BuiltList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    class _BuiltList extends src__list.BuiltList$(E) {
      hasExactElementType(type) {
        return dart.equals(dart.wrapType(E), type);
      }
    }
    (_BuiltList.withSafeList = function(list) {
      _BuiltList.__proto__.__.call(this, list);
    }).prototype = _BuiltList.prototype;
    (_BuiltList.copyAndCheckTypes = function(iterable) {
      if (iterable === void 0) iterable = const$1 || (const$1 = dart.constList([], dart.dynamic));
      _BuiltList.__proto__.__.call(this, ListOfE().from(iterable, {growable: false}));
      for (let element of this[_list$]) {
        if (!E.is(element)) {
          dart.throw(new core$.ArgumentError.new("iterable contained invalid element: " + dart.str(element)));
        }
      }
    }).prototype = _BuiltList.prototype;
    (_BuiltList.copyAndCheckForNull = function(iterable) {
      _BuiltList.__proto__.__.call(this, ListOfE().from(iterable, {growable: false}));
      for (let element of this[_list$]) {
        if (element == null) {
          dart.throw(new core$.ArgumentError.new("iterable contained invalid element: null"));
        }
      }
    }).prototype = _BuiltList.prototype;
    dart.addTypeTests(_BuiltList);
    _BuiltList.prototype[_is__BuiltList_default] = true;
    dart.setMethodSignature(_BuiltList, () => ({
      __proto__: dart.getMethods(_BuiltList.__proto__),
      hasExactElementType: dart.fnType(core$.bool, [core$.Type])
    }));
    return _BuiltList;
  });
  src__list._BuiltList = src__list._BuiltList$();
  dart.addTypeTests(src__list._BuiltList, _is__BuiltList_default);
  const _is_OverriddenHashcodeBuiltList_default = Symbol('_is_OverriddenHashcodeBuiltList_default');
  src__list.OverriddenHashcodeBuiltList$ = dart.generic(T => {
    class OverriddenHashcodeBuiltList extends src__list._BuiltList$(T) {
      get hashCode() {
        return this[_overridenHashCode$];
      }
    }
    (OverriddenHashcodeBuiltList.new = function(iterable, overridenHashCode) {
      this[_overridenHashCode$] = overridenHashCode;
      OverriddenHashcodeBuiltList.__proto__.copyAndCheckTypes.call(this, iterable);
    }).prototype = OverriddenHashcodeBuiltList.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltList);
    OverriddenHashcodeBuiltList.prototype[_is_OverriddenHashcodeBuiltList_default] = true;
    dart.setFieldSignature(OverriddenHashcodeBuiltList, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltList.__proto__),
      [_overridenHashCode$]: dart.finalFieldType(core$.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltList, ['hashCode']);
    return OverriddenHashcodeBuiltList;
  });
  src__list.OverriddenHashcodeBuiltList = src__list.OverriddenHashcodeBuiltList$();
  dart.addTypeTests(src__list.OverriddenHashcodeBuiltList, _is_OverriddenHashcodeBuiltList_default);
  const _listOwner = Symbol('_listOwner');
  const _checkGenericTypeParameter$ = Symbol('_checkGenericTypeParameter');
  let const$3;
  const _setOwner$ = Symbol('_setOwner');
  const _setSafeList = Symbol('_setSafeList');
  const _checkElement$ = Symbol('_checkElement');
  const _safeList = Symbol('_safeList');
  const _checkElements$ = Symbol('_checkElements');
  const _is_ListBuilder_default = Symbol('_is_ListBuilder_default');
  src__list.ListBuilder$ = dart.generic(E => {
    let ListBuilderOfE = () => (ListBuilderOfE = dart.constFn(src__list.ListBuilder$(E)))();
    let _BuiltListOfE = () => (_BuiltListOfE = dart.constFn(src__list._BuiltList$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let EToE = () => (EToE = dart.constFn(dart.fnType(E, [E])))();
    let EToIterableOfE = () => (EToIterableOfE = dart.constFn(dart.fnType(IterableOfE(), [E])))();
    class ListBuilder extends core$.Object {
      static new(iterable) {
        if (iterable === void 0) iterable = const$3 || (const$3 = dart.constList([], dart.dynamic));
        let _ = new (ListBuilderOfE())._uninitialized();
        _.replace(iterable);
        return _;
      }
      build() {
        if (this[_listOwner] == null) {
          this[_setOwner$](new (_BuiltListOfE()).withSafeList(this[_list$]));
        }
        return this[_listOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(iterable) {
        if (_BuiltListOfE().is(iterable)) {
          this[_setOwner$](iterable);
        } else {
          this[_setSafeList](ListOfE().from(iterable));
        }
      }
      _get(index) {
        return this[_list$][$_get](index);
      }
      _set(index, element) {
        E._check(element);
        this[_checkElement$](element);
        this[_safeList][$_set](index, element);
        return element;
      }
      get first() {
        return this[_list$][$first];
      }
      set first(value) {
        E._check(value);
        this[_list$][$first] = value;
      }
      get last() {
        return this[_list$][$last];
      }
      set last(value) {
        E._check(value);
        this[_list$][$last] = value;
      }
      get length() {
        return this[_list$][$length];
      }
      get isEmpty() {
        return this[_list$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$][$isNotEmpty];
      }
      add(value) {
        E._check(value);
        this[_checkElement$](value);
        this[_safeList][$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_checkElements$](iterable);
        this[_safeList][$addAll](iterable);
      }
      reverse() {
        this[_list$] = this[_list$][$reversed][$toList]({growable: true});
        this[_listOwner] = null;
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        this[_safeList][$sort](compare);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        this[_safeList][$shuffle](random);
      }
      clear() {
        this[_safeList][$clear]();
      }
      insert(index, element) {
        E._check(element);
        this[_checkElement$](element);
        this[_safeList][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_checkElements$](iterable);
        this[_safeList][$insertAll](index, iterable);
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_checkElements$](iterable);
        this[_safeList][$setAll](index, iterable);
      }
      remove(value) {
        return this[_safeList][$remove](value);
      }
      removeAt(index) {
        return this[_safeList][$removeAt](index);
      }
      removeLast() {
        return this[_safeList][$removeLast]();
      }
      removeWhere(test) {
        this[_safeList][$removeWhere](test);
      }
      retainWhere(test) {
        this[_safeList][$retainWhere](test);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        this[_setSafeList](this[_list$][$sublist](start, end));
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        this[_checkElements$](iterable);
        this[_safeList][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        this[_safeList][$removeRange](start, end);
      }
      fillRange(start, end, fillValue) {
        E._check(fillValue);
        this[_checkElement$](fillValue);
        this[_safeList][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        this[_checkElements$](iterable);
        this[_safeList][$replaceRange](start, end, iterable);
      }
      map(f) {
        EToE()._check(f);
        let result = this[_list$][$map](E, f)[$toList]({growable: true});
        this[_checkElements$](result);
        this[_setSafeList](result);
      }
      where(test) {
        return this.retainWhere(test);
      }
      expand(f) {
        EToIterableOfE()._check(f);
        let result = this[_list$][$expand](E, f)[$toList]({growable: true});
        this[_checkElements$](result);
        this[_setSafeList](result);
      }
      take(n) {
        this[_setSafeList](this[_list$] = this[_list$][$take](n)[$toList]({growable: true}));
      }
      takeWhile(test) {
        this[_setSafeList](this[_list$] = this[_list$][$takeWhile](test)[$toList]({growable: true}));
      }
      skip(n) {
        this[_setSafeList](this[_list$][$skip](n)[$toList]({growable: true}));
      }
      skipWhile(test) {
        this[_setSafeList](this[_list$][$skipWhile](test)[$toList]({growable: true}));
      }
      [_setOwner$](listOwner) {
        _BuiltListOfE()._check(listOwner);
        this[_list$] = listOwner[_list$];
        this[_listOwner] = listOwner;
      }
      [_setSafeList](list) {
        ListOfE()._check(list);
        this[_list$] = list;
        this[_listOwner] = null;
      }
      get [_safeList]() {
        if (this[_listOwner] != null) {
          this[_setSafeList](ListOfE().from(this[_list$], {growable: true}));
        }
        return this[_list$];
      }
      [_checkGenericTypeParameter$]() {
        if (dart.equals(dart.wrapType(E), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new("explicit element type required, " + "for example \"new ListBuilder<int>\""));
        }
      }
      [_checkElement$](element) {
        E._check(element);
        if (element == null) {
          dart.throw(new core$.ArgumentError.new("null element"));
        }
      }
      [_checkElements$](elements) {
        for (let element of elements) {
          if (!E.is(element)) {
            dart.throw(new core$.ArgumentError.new("invalid element: " + dart.str(element)));
          }
        }
      }
    }
    (ListBuilder._uninitialized = function() {
      this[_list$] = null;
      this[_listOwner] = null;
      this[_checkGenericTypeParameter$]();
    }).prototype = ListBuilder.prototype;
    dart.addTypeTests(ListBuilder);
    ListBuilder.prototype[_is_ListBuilder_default] = true;
    dart.setMethodSignature(ListBuilder, () => ({
      __proto__: dart.getMethods(ListBuilder.__proto__),
      build: dart.fnType(src__list.BuiltList$(E), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [src__list.ListBuilder$(E)])]),
      replace: dart.fnType(dart.void, [core$.Iterable]),
      _get: dart.fnType(E, [core$.int]),
      _set: dart.fnType(dart.void, [core$.int, core$.Object]),
      add: dart.fnType(dart.void, [core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      reverse: dart.fnType(dart.void, []),
      sort: dart.fnType(dart.void, [], [dart.fnType(core$.int, [E, E])]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      clear: dart.fnType(dart.void, []),
      insert: dart.fnType(dart.void, [core$.int, core$.Object]),
      insertAll: dart.fnType(dart.void, [core$.int, core$.Object]),
      setAll: dart.fnType(dart.void, [core$.int, core$.Object]),
      remove: dart.fnType(core$.bool, [core$.Object]),
      removeAt: dart.fnType(E, [core$.int]),
      removeLast: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      sublist: dart.fnType(dart.void, [core$.int], [core$.int]),
      setRange: dart.fnType(dart.void, [core$.int, core$.int, core$.Object], [core$.int]),
      removeRange: dart.fnType(dart.void, [core$.int, core$.int]),
      fillRange: dart.fnType(dart.void, [core$.int, core$.int, core$.Object]),
      replaceRange: dart.fnType(dart.void, [core$.int, core$.int, core$.Object]),
      map: dart.fnType(dart.void, [core$.Object]),
      where: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      expand: dart.fnType(dart.void, [core$.Object]),
      take: dart.fnType(dart.void, [core$.int]),
      takeWhile: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      skip: dart.fnType(dart.void, [core$.int]),
      skipWhile: dart.fnType(dart.void, [dart.fnType(core$.bool, [E])]),
      [_setOwner$]: dart.fnType(dart.void, [core$.Object]),
      [_setSafeList]: dart.fnType(dart.void, [core$.Object]),
      [_checkGenericTypeParameter$]: dart.fnType(dart.void, []),
      [_checkElement$]: dart.fnType(dart.void, [core$.Object]),
      [_checkElements$]: dart.fnType(dart.void, [core$.Iterable])
    }));
    dart.setGetterSignature(ListBuilder, () => ({
      __proto__: dart.getGetters(ListBuilder.__proto__),
      first: E,
      last: E,
      length: core$.int,
      isEmpty: core$.bool,
      isNotEmpty: core$.bool,
      [_safeList]: core$.List$(E)
    }));
    dart.setSetterSignature(ListBuilder, () => ({
      __proto__: dart.getSetters(ListBuilder.__proto__),
      first: E,
      last: E
    }));
    dart.setFieldSignature(ListBuilder, () => ({
      __proto__: dart.getFields(ListBuilder.__proto__),
      [_list$]: dart.fieldType(ListOfE()),
      [_listOwner]: dart.fieldType(_BuiltListOfE())
    }));
    return ListBuilder;
  });
  src__list.ListBuilder = src__list.ListBuilder$();
  dart.addTypeTests(src__list.ListBuilder, _is_ListBuilder_default);
  src__internal__copy_on_write_map._MapFactory$ = dart.generic((K, V) => {
    const _MapFactory = dart.typedef('_MapFactory', () => dart.fnType(core$.Map$(K, V), []));
    return _MapFactory;
  });
  src__internal__copy_on_write_map._MapFactory = src__internal__copy_on_write_map._MapFactory$();
  const _map = Symbol('_map');
  const _mapFactory = Symbol('_mapFactory');
  const _copyBeforeWrite$0 = Symbol('_copyBeforeWrite');
  const _maybeCopyBeforeWrite$0 = Symbol('_maybeCopyBeforeWrite');
  const _is_CopyOnWriteMap_default = Symbol('_is_CopyOnWriteMap_default');
  src__internal__copy_on_write_map.CopyOnWriteMap$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core$.Map$(K, V)))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core$.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core$.Iterable$(MapEntryOfK$V())))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let VoidToMapOfK$V = () => (VoidToMapOfK$V = dart.constFn(dart.fnType(MapOfK$V(), [])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class CopyOnWriteMap extends core$.Object {
      _get(key) {
        return this[_map][$_get](key);
      }
      cast(K2, V2) {
        return new (src__internal__copy_on_write_map.CopyOnWriteMap$(K2, V2)).new(this[_map][$cast](K2, V2));
      }
      containsKey(key) {
        return this[_map][$containsKey](key);
      }
      containsValue(value) {
        return this[_map][$containsValue](value);
      }
      get entries() {
        return this[_map][$entries];
      }
      forEach(f) {
        return this[_map][$forEach](f);
      }
      get isEmpty() {
        return this[_map][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map][$isNotEmpty];
      }
      get keys() {
        return this[_map][$keys];
      }
      get length() {
        return this[_map][$length];
      }
      map(K2, V2, f) {
        return this[_map][$map](K2, V2, f);
      }
      get values() {
        return this[_map][$values];
      }
      _set(key, value) {
        K._check(key);
        V._check(value);
        this[_maybeCopyBeforeWrite$0]();
        this[_map][$_set](key, value);
        return value;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        this[_maybeCopyBeforeWrite$0]();
        this[_map][$addAll](other);
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        this[_maybeCopyBeforeWrite$0]();
        this[_map][$addEntries](entries);
      }
      clear() {
        this[_maybeCopyBeforeWrite$0]();
        this[_map][$clear]();
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        this[_maybeCopyBeforeWrite$0]();
        return this[_map][$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        this[_maybeCopyBeforeWrite$0]();
        return this[_map][$remove](key);
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite$0]();
        this[_map][$removeWhere](test);
      }
      toString() {
        return dart.toString(this[_map]);
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        this[_maybeCopyBeforeWrite$0]();
        return this[_map][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        KAndVToV()._check(update);
        this[_maybeCopyBeforeWrite$0]();
        this[_map][$updateAll](update);
      }
      [_maybeCopyBeforeWrite$0]() {
        if (!dart.test(this[_copyBeforeWrite$0])) return;
        this[_copyBeforeWrite$0] = false;
        this[_map] = this[_mapFactory] != null ? (() => {
          let _ = this[_mapFactory]();
          _[$addAll](this[_map]);
          return _;
        })() : MapOfK$V().from(this[_map]);
      }
    }
    (CopyOnWriteMap.new = function(map, mapFactory) {
      if (mapFactory === void 0) mapFactory = null;
      this[_map] = map;
      this[_mapFactory] = mapFactory;
      this[_copyBeforeWrite$0] = true;
    }).prototype = CopyOnWriteMap.prototype;
    CopyOnWriteMap.prototype[dart.isMap] = true;
    dart.addTypeTests(CopyOnWriteMap);
    CopyOnWriteMap.prototype[_is_CopyOnWriteMap_default] = true;
    CopyOnWriteMap[dart.implements] = () => [MapOfK$V()];
    dart.setMethodSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getMethods(CopyOnWriteMap.__proto__),
      _get: dart.fnType(V, [core$.Object]),
      [$_get]: dart.fnType(V, [core$.Object]),
      cast: dart.gFnType((K2, V2) => [core$.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core$.Map$(K2, V2), []]),
      containsKey: dart.fnType(core$.bool, [core$.Object]),
      [$containsKey]: dart.fnType(core$.bool, [core$.Object]),
      containsValue: dart.fnType(core$.bool, [core$.Object]),
      [$containsValue]: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [core$.Map$(K2, V2), [dart.fnType(core$.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core$.Map$(K2, V2), [dart.fnType(core$.MapEntry$(K2, V2), [K, V])]]),
      _set: dart.fnType(dart.void, [core$.Object, core$.Object]),
      [$_set]: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      [$addAll]: dart.fnType(dart.void, [core$.Object]),
      addEntries: dart.fnType(dart.void, [core$.Object]),
      [$addEntries]: dart.fnType(dart.void, [core$.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      putIfAbsent: dart.fnType(V, [core$.Object, core$.Object]),
      [$putIfAbsent]: dart.fnType(V, [core$.Object, core$.Object]),
      remove: dart.fnType(V, [core$.Object]),
      [$remove]: dart.fnType(V, [core$.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core$.bool, [K, V])]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      update: dart.fnType(V, [core$.Object, core$.Object], {ifAbsent: core$.Object}),
      [$update]: dart.fnType(V, [core$.Object, core$.Object], {ifAbsent: core$.Object}),
      updateAll: dart.fnType(dart.void, [core$.Object]),
      [$updateAll]: dart.fnType(dart.void, [core$.Object]),
      [_maybeCopyBeforeWrite$0]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getGetters(CopyOnWriteMap.__proto__),
      entries: core$.Iterable$(core$.MapEntry$(K, V)),
      [$entries]: core$.Iterable$(core$.MapEntry$(K, V)),
      isEmpty: core$.bool,
      [$isEmpty]: core$.bool,
      isNotEmpty: core$.bool,
      [$isNotEmpty]: core$.bool,
      keys: core$.Iterable$(K),
      [$keys]: core$.Iterable$(K),
      length: core$.int,
      [$length]: core$.int,
      values: core$.Iterable$(V),
      [$values]: core$.Iterable$(V)
    }));
    dart.setFieldSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getFields(CopyOnWriteMap.__proto__),
      [_mapFactory]: dart.finalFieldType(VoidToMapOfK$V()),
      [_copyBeforeWrite$0]: dart.fieldType(core$.bool),
      [_map]: dart.fieldType(MapOfK$V())
    }));
    dart.defineExtensionMethods(CopyOnWriteMap, [
      '_get',
      'cast',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      '_set',
      'addAll',
      'addEntries',
      'clear',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return CopyOnWriteMap;
  });
  src__internal__copy_on_write_map.CopyOnWriteMap = src__internal__copy_on_write_map.CopyOnWriteMap$();
  dart.addTypeTests(src__internal__copy_on_write_map.CopyOnWriteMap, _is_CopyOnWriteMap_default);
  const _overridenHashCode$0 = Symbol('_overridenHashCode');
  const _map$ = Symbol('_map');
  const _emptyList = Symbol('_emptyList');
  const _hashCode$0 = Symbol('_hashCode');
  const _keys = Symbol('_keys');
  const _values = Symbol('_values');
  let const$4;
  const _is_BuiltListMultimap_default = Symbol('_is_BuiltListMultimap_default');
  src__list_multimap.BuiltListMultimap$ = dart.generic((K, V) => {
    let BuiltListMultimapOfK$V = () => (BuiltListMultimapOfK$V = dart.constFn(src__list_multimap.BuiltListMultimap$(K, V)))();
    let _BuiltListMultimapOfK$V = () => (_BuiltListMultimapOfK$V = dart.constFn(src__list_multimap._BuiltListMultimap$(K, V)))();
    let ListMultimapBuilderOfK$V = () => (ListMultimapBuilderOfK$V = dart.constFn(src__list_multimap.ListMultimapBuilder$(K, V)))();
    let CopyOnWriteMapOfK$BuiltListOfV = () => (CopyOnWriteMapOfK$BuiltListOfV = dart.constFn(src__internal__copy_on_write_map.CopyOnWriteMap$(K, BuiltListOfV())))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core$.int, [K])))();
    let MapOfK$IterableOfV = () => (MapOfK$IterableOfV = dart.constFn(core$.Map$(K, IterableOfV())))();
    let KAndBuiltListOfVToNull = () => (KAndBuiltListOfVToNull = dart.constFn(dart.fnType(core$.Null, [K, BuiltListOfV()])))();
    let MapOfK$BuiltListOfV = () => (MapOfK$BuiltListOfV = dart.constFn(core$.Map$(K, BuiltListOfV())))();
    let IterableOfK = () => (IterableOfK = dart.constFn(core$.Iterable$(K)))();
    let BuiltListOfV = () => (BuiltListOfV = dart.constFn(src__list.BuiltList$(V)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core$.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core$.Null, [V])))();
    let BuiltListOfVToBuiltListOfV = () => (BuiltListOfVToBuiltListOfV = dart.constFn(dart.fnType(BuiltListOfV(), [BuiltListOfV()])))();
    class BuiltListMultimap extends core$.Object {
      static new(multimap) {
        if (multimap === void 0) multimap = const$4 || (const$4 = dart.constMap(dart.dynamic, dart.dynamic, []));
        if (src__list_multimap._BuiltListMultimap.is(multimap) && dart.test(multimap.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V)))) {
          return BuiltListMultimapOfK$V().as(multimap);
        } else if (core$.Map.is(multimap) || collection$0.ListMultimap.is(multimap) || src__list_multimap.BuiltListMultimap.is(multimap)) {
          return new (_BuiltListMultimapOfK$V()).copyAndCheck(core$.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dindex(multimap, k), dynamicTodynamic()));
        } else {
          dart.throw(new core$.ArgumentError.new("expected Map, ListMultimap or BuiltListMultimap, " + ("got " + dart.str(dart.runtimeType(multimap)))));
        }
      }
      static build(updates) {
        return (() => {
          let _ = ListMultimapBuilderOfK$V().new();
          _.update(updates);
          return _;
        })().build();
      }
      toBuilder() {
        return ListMultimapBuilderOfK$V().new(this);
      }
      rebuild(updates) {
        return (() => {
          let _ = this.toBuilder();
          _.update(updates);
          return _;
        })().build();
      }
      toMap() {
        return new (CopyOnWriteMapOfK$BuiltListOfV()).new(this[_map$]);
      }
      get hashCode() {
        if (this[_hashCode$0] == null) {
          this[_hashCode$0] = core$0.hashObjects((() => {
            let _ = this[_map$][$keys][$map](core$.int, dart.fn(key => core$0.hash2(dart.hashCode(key), dart.hashCode(this[_map$][$_get](key))), KToint()))[$toList]({growable: false});
            _[$sort]();
            return _;
          })());
        }
        return this[_hashCode$0];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__list_multimap.BuiltListMultimap.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dindex(other, key), this._get(key))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_map$]);
      }
      asMap() {
        return MapOfK$IterableOfV().unmodifiable(this[_map$]);
      }
      _get(key) {
        let result = this[_map$][$_get](key);
        return result == null ? this[_emptyList] : result;
      }
      containsKey(key) {
        return this[_map$][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      forEach(f) {
        this[_map$][$forEach](dart.fn((key, values) => {
          values.forEach(dart.fn(value => {
            f(key, value);
          }, VToNull()));
        }, KAndBuiltListOfVToNull()));
      }
      forEachKey(f) {
        this[_map$][$forEach](dart.fn((key, values) => {
          f(key, values);
        }, KAndBuiltListOfVToNull()));
      }
      get isEmpty() {
        return this[_map$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$][$isNotEmpty];
      }
      get keys() {
        if (this[_keys] == null) {
          this[_keys] = this[_map$][$keys];
        }
        return this[_keys];
      }
      get length() {
        return this[_map$][$length];
      }
      get values() {
        if (this[_values] == null) {
          this[_values] = this[_map$][$values][$expand](V, dart.fn(x => x, BuiltListOfVToBuiltListOfV()));
        }
        return this[_values];
      }
    }
    (BuiltListMultimap.__ = function(map) {
      this[_emptyList] = BuiltListOfV().new();
      this[_hashCode$0] = null;
      this[_keys] = null;
      this[_values] = null;
      this[_map$] = map;
      if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new("explicit key type required, " + "for example \"new BuiltListMultimap<int, int>\""));
      }
      if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new("explicit value type required," + " for example \"new BuiltListMultimap<int, int>\""));
      }
    }).prototype = BuiltListMultimap.prototype;
    dart.addTypeTests(BuiltListMultimap);
    BuiltListMultimap.prototype[_is_BuiltListMultimap_default] = true;
    dart.setMethodSignature(BuiltListMultimap, () => ({
      __proto__: dart.getMethods(BuiltListMultimap.__proto__),
      toBuilder: dart.fnType(src__list_multimap.ListMultimapBuilder$(K, V), []),
      rebuild: dart.fnType(src__list_multimap.BuiltListMultimap$(K, V), [dart.fnType(dart.dynamic, [src__list_multimap.ListMultimapBuilder$(K, V)])]),
      toMap: dart.fnType(core$.Map$(K, src__list.BuiltList$(V)), []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      asMap: dart.fnType(core$.Map$(K, core$.Iterable$(V)), []),
      _get: dart.fnType(src__list.BuiltList$(V), [core$.Object]),
      containsKey: dart.fnType(core$.bool, [core$.Object]),
      containsValue: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      forEachKey: dart.fnType(dart.void, [dart.fnType(dart.void, [K, core$.Iterable$(V)])])
    }));
    dart.setGetterSignature(BuiltListMultimap, () => ({
      __proto__: dart.getGetters(BuiltListMultimap.__proto__),
      hashCode: core$.int,
      [$hashCode]: core$.int,
      isEmpty: core$.bool,
      isNotEmpty: core$.bool,
      keys: core$.Iterable$(K),
      length: core$.int,
      values: core$.Iterable$(V)
    }));
    dart.setFieldSignature(BuiltListMultimap, () => ({
      __proto__: dart.getFields(BuiltListMultimap.__proto__),
      [_map$]: dart.finalFieldType(MapOfK$BuiltListOfV()),
      [_emptyList]: dart.finalFieldType(BuiltListOfV()),
      [_hashCode$0]: dart.fieldType(core$.int),
      [_keys]: dart.fieldType(IterableOfK()),
      [_values]: dart.fieldType(IterableOfV())
    }));
    dart.defineExtensionMethods(BuiltListMultimap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltListMultimap, ['hashCode']);
    return BuiltListMultimap;
  });
  src__list_multimap.BuiltListMultimap = src__list_multimap.BuiltListMultimap$();
  dart.addTypeTests(src__list_multimap.BuiltListMultimap, _is_BuiltListMultimap_default);
  const _is__BuiltListMultimap_default = Symbol('_is__BuiltListMultimap_default');
  src__list_multimap._BuiltListMultimap$ = dart.generic((K, V) => {
    let LinkedMapOfK$BuiltListOfV = () => (LinkedMapOfK$BuiltListOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltListOfV())))();
    let BuiltListOfV = () => (BuiltListOfV = dart.constFn(src__list.BuiltList$(V)))();
    class _BuiltListMultimap extends src__list_multimap.BuiltListMultimap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.equals(dart.wrapType(K), key) && dart.equals(dart.wrapType(V), value);
      }
    }
    (_BuiltListMultimap.withSafeMap = function(map) {
      _BuiltListMultimap.__proto__.__.call(this, map);
    }).prototype = _BuiltListMultimap.prototype;
    (_BuiltListMultimap.copyAndCheck = function(keys, lookup) {
      _BuiltListMultimap.__proto__.__.call(this, new (LinkedMapOfK$BuiltListOfV()).new());
      for (let key of keys) {
        if (K.is(key)) {
          this[_map$][$_set](key, BuiltListOfV().new(core$.Iterable._check(dart.dcall(lookup, [key]))));
        } else {
          dart.throw(new core$.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltListMultimap.prototype;
    dart.addTypeTests(_BuiltListMultimap);
    _BuiltListMultimap.prototype[_is__BuiltListMultimap_default] = true;
    dart.setMethodSignature(_BuiltListMultimap, () => ({
      __proto__: dart.getMethods(_BuiltListMultimap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core$.bool, [core$.Type, core$.Type])
    }));
    return _BuiltListMultimap;
  });
  src__list_multimap._BuiltListMultimap = src__list_multimap._BuiltListMultimap$();
  dart.addTypeTests(src__list_multimap._BuiltListMultimap, _is__BuiltListMultimap_default);
  const _is_OverriddenHashcodeBuiltListMultimap_default = Symbol('_is_OverriddenHashcodeBuiltListMultimap_default');
  src__list_multimap.OverriddenHashcodeBuiltListMultimap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltListMultimap extends src__list_multimap._BuiltListMultimap$(K, V) {
      get hashCode() {
        return this[_overridenHashCode$0];
      }
    }
    (OverriddenHashcodeBuiltListMultimap.new = function(map, overridenHashCode) {
      this[_overridenHashCode$0] = overridenHashCode;
      OverriddenHashcodeBuiltListMultimap.__proto__.copyAndCheck.call(this, core$.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dindex(map, k), dynamicTodynamic()));
    }).prototype = OverriddenHashcodeBuiltListMultimap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltListMultimap);
    OverriddenHashcodeBuiltListMultimap.prototype[_is_OverriddenHashcodeBuiltListMultimap_default] = true;
    dart.setFieldSignature(OverriddenHashcodeBuiltListMultimap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltListMultimap.__proto__),
      [_overridenHashCode$0]: dart.finalFieldType(core$.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltListMultimap, ['hashCode']);
    return OverriddenHashcodeBuiltListMultimap;
  });
  src__list_multimap.OverriddenHashcodeBuiltListMultimap = src__list_multimap.OverriddenHashcodeBuiltListMultimap$();
  dart.addTypeTests(src__list_multimap.OverriddenHashcodeBuiltListMultimap, _is_OverriddenHashcodeBuiltListMultimap_default);
  const _builtMap = Symbol('_builtMap');
  const _builtMapOwner = Symbol('_builtMapOwner');
  const _builderMap = Symbol('_builderMap');
  const _checkGenericTypeParameter$0 = Symbol('_checkGenericTypeParameter');
  let const$5;
  const _setOwner$0 = Symbol('_setOwner');
  const _setWithCopyAndCheck = Symbol('_setWithCopyAndCheck');
  const _makeWriteableCopy = Symbol('_makeWriteableCopy');
  const _checkKey = Symbol('_checkKey');
  const _checkValue = Symbol('_checkValue');
  const _getValuesBuilder = Symbol('_getValuesBuilder');
  const _is_ListMultimapBuilder_default = Symbol('_is_ListMultimapBuilder_default');
  src__list_multimap.ListMultimapBuilder$ = dart.generic((K, V) => {
    let ListMultimapBuilderOfK$V = () => (ListMultimapBuilderOfK$V = dart.constFn(src__list_multimap.ListMultimapBuilder$(K, V)))();
    let _BuiltListMultimapOfK$V = () => (_BuiltListMultimapOfK$V = dart.constFn(src__list_multimap._BuiltListMultimap$(K, V)))();
    let ListMultimapOfK$V = () => (ListMultimapOfK$V = dart.constFn(collection$0.ListMultimap$(K, V)))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core$.Null, [K, V])))();
    let MapOfK$BuiltListOfV = () => (MapOfK$BuiltListOfV = dart.constFn(core$.Map$(K, BuiltListOfV())))();
    let LinkedMapOfK$ListBuilderOfV = () => (LinkedMapOfK$ListBuilderOfV = dart.constFn(_js_helper.LinkedMap$(K, ListBuilderOfV())))();
    let LinkedMapOfK$BuiltListOfV = () => (LinkedMapOfK$BuiltListOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltListOfV())))();
    let MapOfK$ListBuilderOfV = () => (MapOfK$ListBuilderOfV = dart.constFn(core$.Map$(K, ListBuilderOfV())))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core$.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core$.Null, [V])))();
    let ListBuilderOfV = () => (ListBuilderOfV = dart.constFn(src__list.ListBuilder$(V)))();
    let BuiltListOfV = () => (BuiltListOfV = dart.constFn(src__list.BuiltList$(V)))();
    class ListMultimapBuilder extends core$.Object {
      static new(multimap) {
        if (multimap === void 0) multimap = const$5 || (const$5 = dart.constMap(dart.dynamic, dart.dynamic, []));
        let _ = new (ListMultimapBuilderOfK$V())._uninitialized();
        _.replace(multimap);
        return _;
      }
      build() {
        if (this[_builtMapOwner] == null) {
          for (let key of this[_builderMap][$keys]) {
            let builtList = this[_builderMap][$_get](key).build();
            if (dart.test(builtList.isEmpty)) {
              this[_builtMap][$remove](key);
            } else {
              this[_builtMap][$_set](key, builtList);
            }
          }
          this[_builtMapOwner] = new (_BuiltListMultimapOfK$V()).withSafeMap(this[_builtMap]);
        }
        return this[_builtMapOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(multimap) {
        if (_BuiltListMultimapOfK$V().is(multimap)) {
          this[_setOwner$0](multimap);
        } else if (core$.Map.is(multimap) || collection$0.ListMultimap.is(multimap) || src__list_multimap.BuiltListMultimap.is(multimap)) {
          this[_setWithCopyAndCheck](core$.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dindex(multimap, k), dynamicTodynamic()));
        } else {
          dart.throw(new core$.ArgumentError.new("expected Map, ListMultimap or BuiltListMultimap, " + ("got " + dart.str(dart.runtimeType(multimap)))));
        }
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.fnType(K, [T])._check(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.fnType(V, [T])._check(value);
        let values = opts && 'values' in opts ? opts.values : null;
        dart.fnType(IterableOfV(), [T])._check(values);
        if (value != null && values != null) {
          dart.throw(new core$.ArgumentError.new("expected value or values to be set, got both"));
        }
        if (key == null) key = dart.fn(x => K.as(x), dart.fnType(K, [T]));
        if (values != null) {
          for (let element of iterable) {
            this.addValues(key(element), values(element));
          }
        } else {
          if (value == null) value = dart.fn(x => V.as(x), dart.fnType(V, [T]));
          for (let element of iterable) {
            this.add(key(element), value(element));
          }
        }
      }
      add(key, value) {
        K._check(key);
        V._check(value);
        this[_makeWriteableCopy]();
        this[_checkKey](key);
        this[_checkValue](value);
        this[_getValuesBuilder](key).add(value);
      }
      addValues(key, values) {
        K._check(key);
        IterableOfV()._check(values);
        values[$forEach](dart.fn(value => {
          this.add(key, value);
        }, VToNull()));
      }
      addAll(other) {
        ListMultimapOfK$V()._check(other);
        other.forEach(dart.fn((key, value) => {
          this.add(key, value);
        }, KAndVToNull()));
      }
      remove(key, value) {
        V._check(value);
        if (K.is(key)) {
          this[_makeWriteableCopy]();
          this[_getValuesBuilder](key).remove(value);
        }
      }
      removeAll(key) {
        if (K.is(key)) {
          this[_makeWriteableCopy]();
          this[_builtMap] = this[_builtMap];
          this[_builderMap][$_set](key, ListBuilderOfV().new());
        }
      }
      clear() {
        this[_makeWriteableCopy]();
        this[_builtMap][$clear]();
        this[_builderMap][$clear]();
      }
      [_getValuesBuilder](key) {
        K._check(key);
        let result = this[_builderMap][$_get](key);
        if (result == null) {
          let builtValues = this[_builtMap][$_get](key);
          if (builtValues == null) {
            result = ListBuilderOfV().new();
          } else {
            result = builtValues.toBuilder();
          }
          this[_builderMap][$_set](key, result);
        }
        return result;
      }
      [_makeWriteableCopy]() {
        if (this[_builtMapOwner] != null) {
          this[_builtMap] = MapOfK$BuiltListOfV().from(this[_builtMap]);
          this[_builtMapOwner] = null;
        }
      }
      [_setOwner$0](builtListMultimap) {
        _BuiltListMultimapOfK$V()._check(builtListMultimap);
        this[_builtMapOwner] = builtListMultimap;
        this[_builtMap] = builtListMultimap[_map$];
        this[_builderMap] = new (LinkedMapOfK$ListBuilderOfV()).new();
      }
      [_setWithCopyAndCheck](keys, lookup) {
        this[_builtMapOwner] = null;
        this[_builtMap] = new (LinkedMapOfK$BuiltListOfV()).new();
        this[_builderMap] = new (LinkedMapOfK$ListBuilderOfV()).new();
        for (let key of keys) {
          if (K.is(key)) {
            for (let value of core$.Iterable._check(dart.dcall(lookup, [key]))) {
              if (V.is(value)) {
                this.add(key, value);
              } else {
                dart.throw(new core$.ArgumentError.new("map contained invalid value: " + dart.str(value) + ", for key " + dart.str(key)));
              }
            }
          } else {
            dart.throw(new core$.ArgumentError.new("map contained invalid key: " + dart.str(key)));
          }
        }
      }
      [_checkGenericTypeParameter$0]() {
        if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new("explicit key type required, " + "for example \"new ListMultimapBuilder<int, int>\""));
        }
        if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new("explicit value type required, " + "for example \"new ListMultimapBuilder<int, int>\""));
        }
      }
      [_checkKey](key) {
        K._check(key);
        if (key == null) {
          dart.throw(new core$.ArgumentError.new("null key"));
        }
      }
      [_checkValue](value) {
        V._check(value);
        if (value == null) {
          dart.throw(new core$.ArgumentError.new("null value"));
        }
      }
    }
    (ListMultimapBuilder._uninitialized = function() {
      this[_builtMap] = null;
      this[_builtMapOwner] = null;
      this[_builderMap] = null;
      this[_checkGenericTypeParameter$0]();
    }).prototype = ListMultimapBuilder.prototype;
    dart.addTypeTests(ListMultimapBuilder);
    ListMultimapBuilder.prototype[_is_ListMultimapBuilder_default] = true;
    dart.setMethodSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getMethods(ListMultimapBuilder.__proto__),
      build: dart.fnType(src__list_multimap.BuiltListMultimap$(K, V), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [src__list_multimap.ListMultimapBuilder$(K, V)])]),
      replace: dart.fnType(dart.void, [dart.dynamic]),
      addIterable: dart.gFnType(T => [dart.void, [core$.Iterable$(T)], {key: core$.Object, value: core$.Object, values: core$.Object}]),
      add: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addValues: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      remove: dart.fnType(dart.void, [core$.Object, core$.Object]),
      removeAll: dart.fnType(dart.void, [core$.Object]),
      clear: dart.fnType(dart.void, []),
      [_getValuesBuilder]: dart.fnType(src__list.ListBuilder$(V), [core$.Object]),
      [_makeWriteableCopy]: dart.fnType(dart.void, []),
      [_setOwner$0]: dart.fnType(dart.void, [core$.Object]),
      [_setWithCopyAndCheck]: dart.fnType(dart.void, [core$.Iterable, core$.Function]),
      [_checkGenericTypeParameter$0]: dart.fnType(dart.void, []),
      [_checkKey]: dart.fnType(dart.void, [core$.Object]),
      [_checkValue]: dart.fnType(dart.void, [core$.Object])
    }));
    dart.setFieldSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getFields(ListMultimapBuilder.__proto__),
      [_builtMap]: dart.fieldType(MapOfK$BuiltListOfV()),
      [_builtMapOwner]: dart.fieldType(_BuiltListMultimapOfK$V()),
      [_builderMap]: dart.fieldType(MapOfK$ListBuilderOfV())
    }));
    return ListMultimapBuilder;
  });
  src__list_multimap.ListMultimapBuilder = src__list_multimap.ListMultimapBuilder$();
  dart.addTypeTests(src__list_multimap.ListMultimapBuilder, _is_ListMultimapBuilder_default);
  const _overrridenHashCode = Symbol('_overrridenHashCode');
  const _map$0 = Symbol('_map');
  const _mapFactory$ = Symbol('_mapFactory');
  const _hashCode$1 = Symbol('_hashCode');
  const _keys$ = Symbol('_keys');
  const _values$ = Symbol('_values');
  let const$6;
  const _is_BuiltMap_default = Symbol('_is_BuiltMap_default');
  src__map.BuiltMap$ = dart.generic((K, V) => {
    let BuiltMapOfK$V = () => (BuiltMapOfK$V = dart.constFn(src__map.BuiltMap$(K, V)))();
    let _BuiltMapOfK$V = () => (_BuiltMapOfK$V = dart.constFn(src__map._BuiltMap$(K, V)))();
    let KToV = () => (KToV = dart.constFn(dart.fnType(V, [K])))();
    let MapBuilderOfK$V = () => (MapBuilderOfK$V = dart.constFn(src__map.MapBuilder$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core$.Map$(K, V)))();
    let CopyOnWriteMapOfK$V = () => (CopyOnWriteMapOfK$V = dart.constFn(src__internal__copy_on_write_map.CopyOnWriteMap$(K, V)))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core$.int, [K])))();
    let VoidToMapOfK$V = () => (VoidToMapOfK$V = dart.constFn(dart.fnType(MapOfK$V(), [])))();
    let IterableOfK = () => (IterableOfK = dart.constFn(core$.Iterable$(K)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core$.Iterable$(V)))();
    class BuiltMap extends core$.Object {
      static new(map) {
        if (map === void 0) map = const$6 || (const$6 = dart.constMap(dart.dynamic, dart.dynamic, []));
        if (src__map._BuiltMap.is(map) && dart.test(map.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V)))) {
          return BuiltMapOfK$V().as(map);
        } else if (core$.Map.is(map) || src__map.BuiltMap.is(map)) {
          return new (_BuiltMapOfK$V()).copyAndCheckTypes(core$.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dindex(map, k), dynamicTodynamic()));
        } else {
          dart.throw(new core$.ArgumentError.new("expected Map or BuiltMap, got " + dart.str(dart.runtimeType(map))));
        }
      }
      static from(map) {
        return new (_BuiltMapOfK$V()).copyAndCheckTypes(map[$keys], dart.fn(k => map[$_get](k), dynamicTodynamic()));
      }
      static of(map) {
        return new (_BuiltMapOfK$V()).copyAndCheckForNull(map[$keys], dart.fn(k => map[$_get](k), KToV()));
      }
      static build(updates) {
        return (() => {
          let _ = MapBuilderOfK$V().new();
          _.update(updates);
          return _;
        })().build();
      }
      toBuilder() {
        return new (MapBuilderOfK$V())._fromBuiltMap(_BuiltMapOfK$V()._check(this));
      }
      rebuild(updates) {
        return (() => {
          let _ = this.toBuilder();
          _.update(updates);
          return _;
        })().build();
      }
      asMap() {
        return MapOfK$V().unmodifiable(this[_map$0]);
      }
      toMap() {
        return new (CopyOnWriteMapOfK$V()).new(this[_map$0], this[_mapFactory$]);
      }
      get hashCode() {
        if (this[_hashCode$1] == null) {
          this[_hashCode$1] = core$0.hashObjects((() => {
            let _ = this[_map$0][$keys][$map](core$.int, dart.fn(key => core$0.hash2(dart.hashCode(key), dart.hashCode(this[_map$0][$_get](key))), KToint()))[$toList]({growable: false});
            _[$sort]();
            return _;
          })());
        }
        return this[_hashCode$1];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__map.BuiltMap.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dindex(other, key), this._get(key))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_map$0]);
      }
      _get(key) {
        return this[_map$0][$_get](key);
      }
      containsKey(key) {
        return this[_map$0][$containsKey](key);
      }
      containsValue(value) {
        return this[_map$0][$containsValue](value);
      }
      forEach(f) {
        this[_map$0][$forEach](f);
      }
      get isEmpty() {
        return this[_map$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$0][$isNotEmpty];
      }
      get keys() {
        if (this[_keys$] == null) {
          this[_keys$] = this[_map$0][$keys];
        }
        return this[_keys$];
      }
      get length() {
        return this[_map$0][$length];
      }
      get values() {
        if (this[_values$] == null) {
          this[_values$] = this[_map$0][$values];
        }
        return this[_values$];
      }
      get entries() {
        return this[_map$0][$entries];
      }
      map(K2, V2, f) {
        return new (src__map._BuiltMap$(K2, V2)).withSafeMap(null, this[_map$0][$map](K2, V2, f));
      }
    }
    (BuiltMap.__ = function(mapFactory, map) {
      this[_hashCode$1] = null;
      this[_keys$] = null;
      this[_values$] = null;
      this[_mapFactory$] = mapFactory;
      this[_map$0] = map;
      if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new("explicit key type required, for example \"new BuiltMap<int, int>\""));
      }
      if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new("explicit value type required," + " for example \"new BuiltMap<int, int>\""));
      }
    }).prototype = BuiltMap.prototype;
    dart.addTypeTests(BuiltMap);
    BuiltMap.prototype[_is_BuiltMap_default] = true;
    dart.setMethodSignature(BuiltMap, () => ({
      __proto__: dart.getMethods(BuiltMap.__proto__),
      toBuilder: dart.fnType(src__map.MapBuilder$(K, V), []),
      rebuild: dart.fnType(src__map.BuiltMap$(K, V), [dart.fnType(dart.dynamic, [src__map.MapBuilder$(K, V)])]),
      asMap: dart.fnType(core$.Map$(K, V), []),
      toMap: dart.fnType(core$.Map$(K, V), []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      _get: dart.fnType(V, [core$.Object]),
      containsKey: dart.fnType(core$.bool, [core$.Object]),
      containsValue: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [src__map.BuiltMap$(K2, V2), [dart.fnType(core$.MapEntry$(K2, V2), [K, V])]])
    }));
    dart.setGetterSignature(BuiltMap, () => ({
      __proto__: dart.getGetters(BuiltMap.__proto__),
      hashCode: core$.int,
      [$hashCode]: core$.int,
      isEmpty: core$.bool,
      isNotEmpty: core$.bool,
      keys: core$.Iterable$(K),
      length: core$.int,
      values: core$.Iterable$(V),
      entries: core$.Iterable$(core$.MapEntry$(K, V))
    }));
    dart.setFieldSignature(BuiltMap, () => ({
      __proto__: dart.getFields(BuiltMap.__proto__),
      [_mapFactory$]: dart.finalFieldType(VoidToMapOfK$V()),
      [_map$0]: dart.finalFieldType(MapOfK$V()),
      [_hashCode$1]: dart.fieldType(core$.int),
      [_keys$]: dart.fieldType(IterableOfK()),
      [_values$]: dart.fieldType(IterableOfV())
    }));
    dart.defineExtensionMethods(BuiltMap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltMap, ['hashCode']);
    return BuiltMap;
  });
  src__map.BuiltMap = src__map.BuiltMap$();
  dart.addTypeTests(src__map.BuiltMap, _is_BuiltMap_default);
  const _is__BuiltMap_default = Symbol('_is__BuiltMap_default');
  src__map._BuiltMap$ = dart.generic((K, V) => {
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    class _BuiltMap extends src__map.BuiltMap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.equals(dart.wrapType(K), key) && dart.equals(dart.wrapType(V), value);
      }
    }
    (_BuiltMap.withSafeMap = function(mapFactory, map) {
      _BuiltMap.__proto__.__.call(this, mapFactory, map);
    }).prototype = _BuiltMap.prototype;
    (_BuiltMap.copyAndCheckTypes = function(keys, lookup) {
      _BuiltMap.__proto__.__.call(this, null, new (LinkedMapOfK$V()).new());
      for (let key of keys) {
        if (K.is(key)) {
          let value = dart.dcall(lookup, [key]);
          if (V.is(value)) {
            this[_map$0][$_set](key, value);
          } else {
            dart.throw(new core$.ArgumentError.new("map contained invalid value: " + dart.str(value)));
          }
        } else {
          dart.throw(new core$.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltMap.prototype;
    (_BuiltMap.copyAndCheckForNull = function(keys, lookup) {
      _BuiltMap.__proto__.__.call(this, null, new (LinkedMapOfK$V()).new());
      for (let key of keys) {
        if (key == null) {
          dart.throw(new core$.ArgumentError.new("map contained invalid key: null"));
        }
        let value = lookup(key);
        if (value == null) {
          dart.throw(new core$.ArgumentError.new("map contained invalid value: null"));
        }
        this[_map$0][$_set](key, value);
      }
    }).prototype = _BuiltMap.prototype;
    dart.addTypeTests(_BuiltMap);
    _BuiltMap.prototype[_is__BuiltMap_default] = true;
    dart.setMethodSignature(_BuiltMap, () => ({
      __proto__: dart.getMethods(_BuiltMap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core$.bool, [core$.Type, core$.Type])
    }));
    return _BuiltMap;
  });
  src__map._BuiltMap = src__map._BuiltMap$();
  dart.addTypeTests(src__map._BuiltMap, _is__BuiltMap_default);
  const _is_OverriddenHashcodeBuiltMap_default = Symbol('_is_OverriddenHashcodeBuiltMap_default');
  src__map.OverriddenHashcodeBuiltMap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltMap extends src__map._BuiltMap$(K, V) {
      get hashCode() {
        return this[_overrridenHashCode];
      }
    }
    (OverriddenHashcodeBuiltMap.new = function(map, overrridenHashCode) {
      this[_overrridenHashCode] = overrridenHashCode;
      OverriddenHashcodeBuiltMap.__proto__.copyAndCheckTypes.call(this, core$.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dindex(map, k), dynamicTodynamic()));
    }).prototype = OverriddenHashcodeBuiltMap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltMap);
    OverriddenHashcodeBuiltMap.prototype[_is_OverriddenHashcodeBuiltMap_default] = true;
    dart.setFieldSignature(OverriddenHashcodeBuiltMap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltMap.__proto__),
      [_overrridenHashCode]: dart.finalFieldType(core$.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltMap, ['hashCode']);
    return OverriddenHashcodeBuiltMap;
  });
  src__map.OverriddenHashcodeBuiltMap = src__map.OverriddenHashcodeBuiltMap$();
  dart.addTypeTests(src__map.OverriddenHashcodeBuiltMap, _is_OverriddenHashcodeBuiltMap_default);
  src__map._MapFactory$ = dart.generic((K, V) => {
    const _MapFactory = dart.typedef('_MapFactory', () => dart.fnType(core$.Map$(K, V), []));
    return _MapFactory;
  });
  src__map._MapFactory = src__map._MapFactory$();
  const _mapOwner = Symbol('_mapOwner');
  const _checkGenericTypeParameter$1 = Symbol('_checkGenericTypeParameter');
  let const$7;
  const _setOwner$1 = Symbol('_setOwner');
  const _createMap = Symbol('_createMap');
  const _setSafeMap = Symbol('_setSafeMap');
  const _checkKey$ = Symbol('_checkKey');
  const _checkValue$ = Symbol('_checkValue');
  const _safeMap = Symbol('_safeMap');
  const _checkKeys = Symbol('_checkKeys');
  const _checkValues = Symbol('_checkValues');
  const _is_MapBuilder_default = Symbol('_is_MapBuilder_default');
  src__map.MapBuilder$ = dart.generic((K, V) => {
    let MapBuilderOfK$V = () => (MapBuilderOfK$V = dart.constFn(src__map.MapBuilder$(K, V)))();
    let _BuiltMapOfK$V = () => (_BuiltMapOfK$V = dart.constFn(src__map._BuiltMap$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core$.Map$(K, V)))();
    let VoidToMapOfK$V = () => (VoidToMapOfK$V = dart.constFn(dart.fnType(MapOfK$V(), [])))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core$.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core$.Iterable$(MapEntryOfK$V())))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class MapBuilder extends core$.Object {
      static new(map) {
        if (map === void 0) map = const$7 || (const$7 = dart.constMap(dart.dynamic, dart.dynamic, []));
        let _ = new (MapBuilderOfK$V())._uninitialized();
        _.replace(map);
        return _;
      }
      build() {
        if (this[_mapOwner] == null) {
          this[_mapOwner] = new (_BuiltMapOfK$V()).withSafeMap(this[_mapFactory$], this[_map$0]);
        }
        return this[_mapOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(map) {
        if (_BuiltMapOfK$V().is(map) && dart.equals(map[_mapFactory$], this[_mapFactory$])) {
          this[_setOwner$1](map);
        } else if (src__map.BuiltMap.is(map)) {
          let replacement = this[_createMap]();
          map.forEach(dart.fn((key, value) => {
            replacement[$_set](K.as(key), V.as(value));
          }, ObjectAndObjectToNull()));
          this[_setSafeMap](replacement);
        } else if (core$.Map.is(map)) {
          let replacement = this[_createMap]();
          map[$forEach](dart.fn((key, value) => {
            replacement[$_set](K.as(key), V.as(value));
          }, ObjectAndObjectToNull()));
          this[_setSafeMap](replacement);
        } else {
          dart.throw(new core$.ArgumentError.new("expected Map or BuiltMap, got " + dart.str(dart.runtimeType(map))));
        }
      }
      withBase(base) {
        VoidToMapOfK$V()._check(base);
        if (base == null) {
          dart.throw(new core$.ArgumentError.notNull("base"));
        }
        this[_mapFactory$] = base;
        this[_setSafeMap]((() => {
          let _ = this[_createMap]();
          _[$addAll](this[_map$0]);
          return _;
        })());
      }
      withDefaultBase() {
        this[_mapFactory$] = null;
        this[_setSafeMap]((() => {
          let _ = this[_createMap]();
          _[$addAll](this[_map$0]);
          return _;
        })());
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.fnType(K, [T])._check(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.fnType(V, [T])._check(value);
        if (key == null) key = dart.fn(x => K.as(x), dart.fnType(K, [T]));
        if (value == null) value = dart.fn(x => V.as(x), dart.fnType(V, [T]));
        for (let element of iterable) {
          this._set(key(element), value(element));
        }
      }
      _get(key) {
        return this[_map$0][$_get](key);
      }
      _set(key, value) {
        K._check(key);
        V._check(value);
        this[_checkKey$](key);
        this[_checkValue$](value);
        this[_safeMap][$_set](key, value);
        return value;
      }
      get length() {
        return this[_map$0][$length];
      }
      get isEmpty() {
        return this[_map$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$0][$isNotEmpty];
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        this[_checkKey$](key);
        return this[_safeMap][$putIfAbsent](key, dart.fn(() => {
          let value = ifAbsent();
          this[_checkValue$](value);
          return value;
        }, VoidToV()));
      }
      addAll(other) {
        MapOfK$V()._check(other);
        this[_checkKeys](other[$keys]);
        this[_checkValues](other[$values]);
        this[_safeMap][$addAll](other);
      }
      remove(key) {
        return this[_safeMap][$remove](key);
      }
      removeWhere(predicate) {
        this[_safeMap][$removeWhere](predicate);
      }
      clear() {
        this[_safeMap][$clear]();
      }
      addEntries(newEntries) {
        IterableOfMapEntryOfK$V()._check(newEntries);
        this[_safeMap][$addEntries](newEntries);
      }
      updateValue(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        return this[_safeMap][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAllValues(update) {
        KAndVToV()._check(update);
        this[_safeMap][$updateAll](update);
      }
      [_setOwner$1](mapOwner) {
        _BuiltMapOfK$V()._check(mapOwner);
        if (!dart.equals(mapOwner[_mapFactory$], this[_mapFactory$])) dart.assertFailed("Can't reuse a built map that uses a different base");
        this[_mapOwner] = mapOwner;
        this[_map$0] = mapOwner[_map$0];
      }
      [_setSafeMap](map) {
        MapOfK$V()._check(map);
        this[_mapOwner] = null;
        this[_map$0] = map;
      }
      get [_safeMap]() {
        if (this[_mapOwner] != null) {
          let _ = this[_createMap]();
          _[$addAll](this[_map$0]);
          this[_map$0] = _;
          this[_mapOwner] = null;
        }
        return this[_map$0];
      }
      [_createMap]() {
        return this[_mapFactory$] != null ? this[_mapFactory$]() : new (LinkedMapOfK$V()).new();
      }
      [_checkGenericTypeParameter$1]() {
        if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new("explicit key type required, for example \"new MapBuilder<int, int>\""));
        }
        if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new("explicit value type required, " + "for example \"new MapBuilder<int, int>\""));
        }
      }
      [_checkKey$](key) {
        K._check(key);
        if (key == null) {
          dart.throw(new core$.ArgumentError.new("null key"));
        }
      }
      [_checkKeys](keys) {
        for (let key of keys) {
          if (!K.is(key)) {
            dart.throw(new core$.ArgumentError.new("invalid key: " + dart.str(key)));
          }
        }
      }
      [_checkValue$](value) {
        V._check(value);
        if (value == null) {
          dart.throw(new core$.ArgumentError.new("null value"));
        }
      }
      [_checkValues](values) {
        for (let value of values) {
          if (!V.is(value)) {
            dart.throw(new core$.ArgumentError.new("invalid value: " + dart.str(value)));
          }
        }
      }
    }
    (MapBuilder._uninitialized = function() {
      this[_mapFactory$] = null;
      this[_map$0] = null;
      this[_mapOwner] = null;
      this[_checkGenericTypeParameter$1]();
    }).prototype = MapBuilder.prototype;
    (MapBuilder._fromBuiltMap = function(map) {
      this[_mapFactory$] = map[_mapFactory$];
      this[_map$0] = map[_map$0];
      this[_mapOwner] = map;
    }).prototype = MapBuilder.prototype;
    dart.addTypeTests(MapBuilder);
    MapBuilder.prototype[_is_MapBuilder_default] = true;
    dart.setMethodSignature(MapBuilder, () => ({
      __proto__: dart.getMethods(MapBuilder.__proto__),
      build: dart.fnType(src__map.BuiltMap$(K, V), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [src__map.MapBuilder$(K, V)])]),
      replace: dart.fnType(dart.void, [core$.Object]),
      withBase: dart.fnType(dart.void, [core$.Object]),
      withDefaultBase: dart.fnType(dart.void, []),
      addIterable: dart.gFnType(T => [dart.void, [core$.Iterable$(T)], {key: core$.Object, value: core$.Object}]),
      _get: dart.fnType(V, [core$.Object]),
      _set: dart.fnType(dart.void, [core$.Object, core$.Object]),
      putIfAbsent: dart.fnType(V, [core$.Object, core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      remove: dart.fnType(V, [core$.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [K, V])]),
      clear: dart.fnType(dart.void, []),
      addEntries: dart.fnType(dart.void, [core$.Object]),
      updateValue: dart.fnType(V, [core$.Object, core$.Object], {ifAbsent: core$.Object}),
      updateAllValues: dart.fnType(dart.void, [core$.Object]),
      [_setOwner$1]: dart.fnType(dart.void, [core$.Object]),
      [_setSafeMap]: dart.fnType(dart.void, [core$.Object]),
      [_createMap]: dart.fnType(core$.Map$(K, V), []),
      [_checkGenericTypeParameter$1]: dart.fnType(dart.void, []),
      [_checkKey$]: dart.fnType(dart.void, [core$.Object]),
      [_checkKeys]: dart.fnType(dart.void, [core$.Iterable]),
      [_checkValue$]: dart.fnType(dart.void, [core$.Object]),
      [_checkValues]: dart.fnType(dart.void, [core$.Iterable])
    }));
    dart.setGetterSignature(MapBuilder, () => ({
      __proto__: dart.getGetters(MapBuilder.__proto__),
      length: core$.int,
      isEmpty: core$.bool,
      isNotEmpty: core$.bool,
      [_safeMap]: core$.Map$(K, V)
    }));
    dart.setFieldSignature(MapBuilder, () => ({
      __proto__: dart.getFields(MapBuilder.__proto__),
      [_mapFactory$]: dart.fieldType(VoidToMapOfK$V()),
      [_map$0]: dart.fieldType(MapOfK$V()),
      [_mapOwner]: dart.fieldType(_BuiltMapOfK$V())
    }));
    return MapBuilder;
  });
  src__map.MapBuilder = src__map.MapBuilder$();
  dart.addTypeTests(src__map.MapBuilder, _is_MapBuilder_default);
  const _overridenHashCode$1 = Symbol('_overridenHashCode');
  const _map$1 = Symbol('_map');
  const _emptySet = Symbol('_emptySet');
  const _hashCode$2 = Symbol('_hashCode');
  const _keys$0 = Symbol('_keys');
  const _values$0 = Symbol('_values');
  let const$8;
  const _is_BuiltSetMultimap_default = Symbol('_is_BuiltSetMultimap_default');
  src__set_multimap.BuiltSetMultimap$ = dart.generic((K, V) => {
    let BuiltSetMultimapOfK$V = () => (BuiltSetMultimapOfK$V = dart.constFn(src__set_multimap.BuiltSetMultimap$(K, V)))();
    let _BuiltSetMultimapOfK$V = () => (_BuiltSetMultimapOfK$V = dart.constFn(src__set_multimap._BuiltSetMultimap$(K, V)))();
    let SetMultimapBuilderOfK$V = () => (SetMultimapBuilderOfK$V = dart.constFn(src__set_multimap.SetMultimapBuilder$(K, V)))();
    let CopyOnWriteMapOfK$BuiltSetOfV = () => (CopyOnWriteMapOfK$BuiltSetOfV = dart.constFn(src__internal__copy_on_write_map.CopyOnWriteMap$(K, BuiltSetOfV())))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core$.int, [K])))();
    let MapOfK$IterableOfV = () => (MapOfK$IterableOfV = dart.constFn(core$.Map$(K, IterableOfV())))();
    let KAndBuiltSetOfVToNull = () => (KAndBuiltSetOfVToNull = dart.constFn(dart.fnType(core$.Null, [K, BuiltSetOfV()])))();
    let MapOfK$BuiltSetOfV = () => (MapOfK$BuiltSetOfV = dart.constFn(core$.Map$(K, BuiltSetOfV())))();
    let IterableOfK = () => (IterableOfK = dart.constFn(core$.Iterable$(K)))();
    let BuiltSetOfV = () => (BuiltSetOfV = dart.constFn(src__set.BuiltSet$(V)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core$.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core$.Null, [V])))();
    let BuiltSetOfVToBuiltSetOfV = () => (BuiltSetOfVToBuiltSetOfV = dart.constFn(dart.fnType(BuiltSetOfV(), [BuiltSetOfV()])))();
    class BuiltSetMultimap extends core$.Object {
      static new(multimap) {
        if (multimap === void 0) multimap = const$8 || (const$8 = dart.constMap(dart.dynamic, dart.dynamic, []));
        if (src__set_multimap._BuiltSetMultimap.is(multimap) && dart.test(multimap.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V)))) {
          return BuiltSetMultimapOfK$V().as(multimap);
        } else if (core$.Map.is(multimap) || collection$0.SetMultimap.is(multimap) || src__set_multimap.BuiltSetMultimap.is(multimap)) {
          return new (_BuiltSetMultimapOfK$V()).copyAndCheck(core$.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dindex(multimap, k), dynamicTodynamic()));
        } else {
          dart.throw(new core$.ArgumentError.new("expected Map, SetMultimap or BuiltSetMultimap, " + ("got " + dart.str(dart.runtimeType(multimap)))));
        }
      }
      static build(updates) {
        return (() => {
          let _ = SetMultimapBuilderOfK$V().new();
          _.update(updates);
          return _;
        })().build();
      }
      toBuilder() {
        return SetMultimapBuilderOfK$V().new(this);
      }
      rebuild(updates) {
        return (() => {
          let _ = this.toBuilder();
          _.update(updates);
          return _;
        })().build();
      }
      toMap() {
        return new (CopyOnWriteMapOfK$BuiltSetOfV()).new(this[_map$1]);
      }
      get hashCode() {
        if (this[_hashCode$2] == null) {
          this[_hashCode$2] = core$0.hashObjects((() => {
            let _ = this[_map$1][$keys][$map](core$.int, dart.fn(key => core$0.hash2(dart.hashCode(key), dart.hashCode(this[_map$1][$_get](key))), KToint()))[$toList]({growable: false});
            _[$sort]();
            return _;
          })());
        }
        return this[_hashCode$2];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__set_multimap.BuiltSetMultimap.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dindex(other, key), this._get(key))) return false;
        }
        return true;
      }
      asMap() {
        return MapOfK$IterableOfV().unmodifiable(this[_map$1]);
      }
      toString() {
        return dart.toString(this[_map$1]);
      }
      _get(key) {
        let result = this[_map$1][$_get](key);
        return result == null ? this[_emptySet] : result;
      }
      containsKey(key) {
        return this[_map$1][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      forEach(f) {
        this[_map$1][$forEach](dart.fn((key, values) => {
          values.forEach(dart.fn(value => {
            f(key, value);
          }, VToNull()));
        }, KAndBuiltSetOfVToNull()));
      }
      forEachKey(f) {
        this[_map$1][$forEach](dart.fn((key, values) => {
          f(key, values);
        }, KAndBuiltSetOfVToNull()));
      }
      get isEmpty() {
        return this[_map$1][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$1][$isNotEmpty];
      }
      get keys() {
        if (this[_keys$0] == null) {
          this[_keys$0] = this[_map$1][$keys];
        }
        return this[_keys$0];
      }
      get length() {
        return this[_map$1][$length];
      }
      get values() {
        if (this[_values$0] == null) {
          this[_values$0] = this[_map$1][$values][$expand](V, dart.fn(x => x, BuiltSetOfVToBuiltSetOfV()));
        }
        return this[_values$0];
      }
    }
    (BuiltSetMultimap.__ = function(map) {
      this[_emptySet] = BuiltSetOfV().new();
      this[_hashCode$2] = null;
      this[_keys$0] = null;
      this[_values$0] = null;
      this[_map$1] = map;
      if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new("explicit key type required, " + "for example \"new BuiltSetMultimap<int, int>\""));
      }
      if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new("explicit value type required," + " for example \"new BuiltSetMultimap<int, int>\""));
      }
    }).prototype = BuiltSetMultimap.prototype;
    dart.addTypeTests(BuiltSetMultimap);
    BuiltSetMultimap.prototype[_is_BuiltSetMultimap_default] = true;
    dart.setMethodSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getMethods(BuiltSetMultimap.__proto__),
      toBuilder: dart.fnType(src__set_multimap.SetMultimapBuilder$(K, V), []),
      rebuild: dart.fnType(src__set_multimap.BuiltSetMultimap$(K, V), [dart.fnType(dart.dynamic, [src__set_multimap.SetMultimapBuilder$(K, V)])]),
      toMap: dart.fnType(core$.Map$(K, src__set.BuiltSet$(V)), []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      asMap: dart.fnType(core$.Map$(K, core$.Iterable$(V)), []),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      _get: dart.fnType(src__set.BuiltSet$(V), [core$.Object]),
      containsKey: dart.fnType(core$.bool, [core$.Object]),
      containsValue: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      forEachKey: dart.fnType(dart.void, [dart.fnType(dart.void, [K, core$.Iterable$(V)])])
    }));
    dart.setGetterSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getGetters(BuiltSetMultimap.__proto__),
      hashCode: core$.int,
      [$hashCode]: core$.int,
      isEmpty: core$.bool,
      isNotEmpty: core$.bool,
      keys: core$.Iterable$(K),
      length: core$.int,
      values: core$.Iterable$(V)
    }));
    dart.setFieldSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getFields(BuiltSetMultimap.__proto__),
      [_map$1]: dart.finalFieldType(MapOfK$BuiltSetOfV()),
      [_emptySet]: dart.finalFieldType(BuiltSetOfV()),
      [_hashCode$2]: dart.fieldType(core$.int),
      [_keys$0]: dart.fieldType(IterableOfK()),
      [_values$0]: dart.fieldType(IterableOfV())
    }));
    dart.defineExtensionMethods(BuiltSetMultimap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltSetMultimap, ['hashCode']);
    return BuiltSetMultimap;
  });
  src__set_multimap.BuiltSetMultimap = src__set_multimap.BuiltSetMultimap$();
  dart.addTypeTests(src__set_multimap.BuiltSetMultimap, _is_BuiltSetMultimap_default);
  const _is__BuiltSetMultimap_default = Symbol('_is__BuiltSetMultimap_default');
  src__set_multimap._BuiltSetMultimap$ = dart.generic((K, V) => {
    let LinkedMapOfK$BuiltSetOfV = () => (LinkedMapOfK$BuiltSetOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltSetOfV())))();
    let BuiltSetOfV = () => (BuiltSetOfV = dart.constFn(src__set.BuiltSet$(V)))();
    class _BuiltSetMultimap extends src__set_multimap.BuiltSetMultimap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.equals(dart.wrapType(K), key) && dart.equals(dart.wrapType(V), value);
      }
    }
    (_BuiltSetMultimap.withSafeMap = function(map) {
      _BuiltSetMultimap.__proto__.__.call(this, map);
    }).prototype = _BuiltSetMultimap.prototype;
    (_BuiltSetMultimap.copyAndCheck = function(keys, lookup) {
      _BuiltSetMultimap.__proto__.__.call(this, new (LinkedMapOfK$BuiltSetOfV()).new());
      for (let key of keys) {
        if (K.is(key)) {
          this[_map$1][$_set](key, BuiltSetOfV().new(core$.Iterable._check(dart.dcall(lookup, [key]))));
        } else {
          dart.throw(new core$.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltSetMultimap.prototype;
    dart.addTypeTests(_BuiltSetMultimap);
    _BuiltSetMultimap.prototype[_is__BuiltSetMultimap_default] = true;
    dart.setMethodSignature(_BuiltSetMultimap, () => ({
      __proto__: dart.getMethods(_BuiltSetMultimap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core$.bool, [core$.Type, core$.Type])
    }));
    return _BuiltSetMultimap;
  });
  src__set_multimap._BuiltSetMultimap = src__set_multimap._BuiltSetMultimap$();
  dart.addTypeTests(src__set_multimap._BuiltSetMultimap, _is__BuiltSetMultimap_default);
  const _is_OverriddenHashcodeBuiltSetMultimap_default = Symbol('_is_OverriddenHashcodeBuiltSetMultimap_default');
  src__set_multimap.OverriddenHashcodeBuiltSetMultimap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltSetMultimap extends src__set_multimap._BuiltSetMultimap$(K, V) {
      get hashCode() {
        return this[_overridenHashCode$1];
      }
    }
    (OverriddenHashcodeBuiltSetMultimap.new = function(map, overridenHashCode) {
      this[_overridenHashCode$1] = overridenHashCode;
      OverriddenHashcodeBuiltSetMultimap.__proto__.copyAndCheck.call(this, core$.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dindex(map, k), dynamicTodynamic()));
    }).prototype = OverriddenHashcodeBuiltSetMultimap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltSetMultimap);
    OverriddenHashcodeBuiltSetMultimap.prototype[_is_OverriddenHashcodeBuiltSetMultimap_default] = true;
    dart.setFieldSignature(OverriddenHashcodeBuiltSetMultimap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltSetMultimap.__proto__),
      [_overridenHashCode$1]: dart.finalFieldType(core$.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltSetMultimap, ['hashCode']);
    return OverriddenHashcodeBuiltSetMultimap;
  });
  src__set_multimap.OverriddenHashcodeBuiltSetMultimap = src__set_multimap.OverriddenHashcodeBuiltSetMultimap$();
  dart.addTypeTests(src__set_multimap.OverriddenHashcodeBuiltSetMultimap, _is_OverriddenHashcodeBuiltSetMultimap_default);
  const _builtMap$ = Symbol('_builtMap');
  const _builtMapOwner$ = Symbol('_builtMapOwner');
  const _builderMap$ = Symbol('_builderMap');
  const _checkGenericTypeParameter$2 = Symbol('_checkGenericTypeParameter');
  let const$9;
  const _setOwner$2 = Symbol('_setOwner');
  const _setWithCopyAndCheck$ = Symbol('_setWithCopyAndCheck');
  const _makeWriteableCopy$ = Symbol('_makeWriteableCopy');
  const _checkKey$0 = Symbol('_checkKey');
  const _checkValue$0 = Symbol('_checkValue');
  const _getValuesBuilder$ = Symbol('_getValuesBuilder');
  const _is_SetMultimapBuilder_default = Symbol('_is_SetMultimapBuilder_default');
  src__set_multimap.SetMultimapBuilder$ = dart.generic((K, V) => {
    let SetMultimapBuilderOfK$V = () => (SetMultimapBuilderOfK$V = dart.constFn(src__set_multimap.SetMultimapBuilder$(K, V)))();
    let _BuiltSetMultimapOfK$V = () => (_BuiltSetMultimapOfK$V = dart.constFn(src__set_multimap._BuiltSetMultimap$(K, V)))();
    let SetMultimapOfK$V = () => (SetMultimapOfK$V = dart.constFn(collection$0.SetMultimap$(K, V)))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core$.Null, [K, V])))();
    let MapOfK$BuiltSetOfV = () => (MapOfK$BuiltSetOfV = dart.constFn(core$.Map$(K, BuiltSetOfV())))();
    let LinkedMapOfK$SetBuilderOfV = () => (LinkedMapOfK$SetBuilderOfV = dart.constFn(_js_helper.LinkedMap$(K, SetBuilderOfV())))();
    let LinkedMapOfK$BuiltSetOfV = () => (LinkedMapOfK$BuiltSetOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltSetOfV())))();
    let MapOfK$SetBuilderOfV = () => (MapOfK$SetBuilderOfV = dart.constFn(core$.Map$(K, SetBuilderOfV())))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core$.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core$.Null, [V])))();
    let SetBuilderOfV = () => (SetBuilderOfV = dart.constFn(src__set.SetBuilder$(V)))();
    let BuiltSetOfV = () => (BuiltSetOfV = dart.constFn(src__set.BuiltSet$(V)))();
    class SetMultimapBuilder extends core$.Object {
      static new(multimap) {
        if (multimap === void 0) multimap = const$9 || (const$9 = dart.constMap(dart.dynamic, dart.dynamic, []));
        let _ = new (SetMultimapBuilderOfK$V())._uninitialized();
        _.replace(multimap);
        return _;
      }
      build() {
        if (this[_builtMapOwner$] == null) {
          for (let key of this[_builderMap$][$keys]) {
            let builtSet = this[_builderMap$][$_get](key).build();
            if (dart.test(builtSet.isEmpty)) {
              this[_builtMap$][$remove](key);
            } else {
              this[_builtMap$][$_set](key, builtSet);
            }
          }
          this[_builtMapOwner$] = new (_BuiltSetMultimapOfK$V()).withSafeMap(this[_builtMap$]);
        }
        return this[_builtMapOwner$];
      }
      update(updates) {
        updates(this);
      }
      replace(multimap) {
        if (_BuiltSetMultimapOfK$V().is(multimap)) {
          this[_setOwner$2](multimap);
        } else if (core$.Map.is(multimap) || collection$0.SetMultimap.is(multimap) || src__set_multimap.BuiltSetMultimap.is(multimap)) {
          this[_setWithCopyAndCheck$](core$.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dindex(multimap, k), dynamicTodynamic()));
        } else {
          dart.throw(new core$.ArgumentError.new("expected Map, SetMultimap or BuiltSetMultimap, " + ("got " + dart.str(dart.runtimeType(multimap)))));
        }
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.fnType(K, [T])._check(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.fnType(V, [T])._check(value);
        let values = opts && 'values' in opts ? opts.values : null;
        dart.fnType(IterableOfV(), [T])._check(values);
        if (value != null && values != null) {
          dart.throw(new core$.ArgumentError.new("expected value or values to be set, got both"));
        }
        if (key == null) key = dart.fn(x => K.as(x), dart.fnType(K, [T]));
        if (values != null) {
          for (let element of iterable) {
            this.addValues(key(element), values(element));
          }
        } else {
          if (value == null) value = dart.fn(x => V.as(x), dart.fnType(V, [T]));
          for (let element of iterable) {
            this.add(key(element), value(element));
          }
        }
      }
      add(key, value) {
        K._check(key);
        V._check(value);
        this[_makeWriteableCopy$]();
        this[_checkKey$0](key);
        this[_checkValue$0](value);
        this[_getValuesBuilder$](key).add(value);
      }
      addValues(key, values) {
        K._check(key);
        IterableOfV()._check(values);
        values[$forEach](dart.fn(value => {
          this.add(key, value);
        }, VToNull()));
      }
      addAll(other) {
        SetMultimapOfK$V()._check(other);
        other.forEach(dart.fn((key, value) => {
          this.add(key, value);
        }, KAndVToNull()));
      }
      remove(key, value) {
        V._check(value);
        if (K.is(key)) {
          this[_makeWriteableCopy$]();
          this[_getValuesBuilder$](key).remove(value);
        }
      }
      removeAll(key) {
        if (K.is(key)) {
          this[_makeWriteableCopy$]();
          this[_builtMap$] = this[_builtMap$];
          this[_builderMap$][$_set](key, SetBuilderOfV().new());
        }
      }
      clear() {
        this[_makeWriteableCopy$]();
        this[_builtMap$][$clear]();
        this[_builderMap$][$clear]();
      }
      [_getValuesBuilder$](key) {
        K._check(key);
        let result = this[_builderMap$][$_get](key);
        if (result == null) {
          let builtValues = this[_builtMap$][$_get](key);
          if (builtValues == null) {
            result = SetBuilderOfV().new();
          } else {
            result = builtValues.toBuilder();
          }
          this[_builderMap$][$_set](key, result);
        }
        return result;
      }
      [_makeWriteableCopy$]() {
        if (this[_builtMapOwner$] != null) {
          this[_builtMap$] = MapOfK$BuiltSetOfV().from(this[_builtMap$]);
          this[_builtMapOwner$] = null;
        }
      }
      [_setOwner$2](builtSetMultimap) {
        _BuiltSetMultimapOfK$V()._check(builtSetMultimap);
        this[_builtMapOwner$] = builtSetMultimap;
        this[_builtMap$] = builtSetMultimap[_map$1];
        this[_builderMap$] = new (LinkedMapOfK$SetBuilderOfV()).new();
      }
      [_setWithCopyAndCheck$](keys, lookup) {
        this[_builtMapOwner$] = null;
        this[_builtMap$] = new (LinkedMapOfK$BuiltSetOfV()).new();
        this[_builderMap$] = new (LinkedMapOfK$SetBuilderOfV()).new();
        for (let key of keys) {
          if (K.is(key)) {
            for (let value of core$.Iterable._check(dart.dcall(lookup, [key]))) {
              if (V.is(value)) {
                this.add(key, value);
              } else {
                dart.throw(new core$.ArgumentError.new("map contained invalid value: " + dart.str(value) + ", for key " + dart.str(key)));
              }
            }
          } else {
            dart.throw(new core$.ArgumentError.new("map contained invalid key: " + dart.str(key)));
          }
        }
      }
      [_checkGenericTypeParameter$2]() {
        if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new("explicit key type required, " + "for example \"new SetMultimapBuilder<int, int>\""));
        }
        if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new("explicit value type required, " + "for example \"new SetMultimapBuilder<int, int>\""));
        }
      }
      [_checkKey$0](key) {
        K._check(key);
        if (key == null) {
          dart.throw(new core$.ArgumentError.new("invalid key: " + dart.str(key)));
        }
      }
      [_checkValue$0](value) {
        V._check(value);
        if (value == null) {
          dart.throw(new core$.ArgumentError.new("invalid value: " + dart.str(value)));
        }
      }
    }
    (SetMultimapBuilder._uninitialized = function() {
      this[_builtMap$] = null;
      this[_builtMapOwner$] = null;
      this[_builderMap$] = null;
      this[_checkGenericTypeParameter$2]();
    }).prototype = SetMultimapBuilder.prototype;
    dart.addTypeTests(SetMultimapBuilder);
    SetMultimapBuilder.prototype[_is_SetMultimapBuilder_default] = true;
    dart.setMethodSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getMethods(SetMultimapBuilder.__proto__),
      build: dart.fnType(src__set_multimap.BuiltSetMultimap$(K, V), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [src__set_multimap.SetMultimapBuilder$(K, V)])]),
      replace: dart.fnType(dart.void, [dart.dynamic]),
      addIterable: dart.gFnType(T => [dart.void, [core$.Iterable$(T)], {key: core$.Object, value: core$.Object, values: core$.Object}]),
      add: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addValues: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      remove: dart.fnType(dart.void, [core$.Object, core$.Object]),
      removeAll: dart.fnType(dart.void, [core$.Object]),
      clear: dart.fnType(dart.void, []),
      [_getValuesBuilder$]: dart.fnType(src__set.SetBuilder$(V), [core$.Object]),
      [_makeWriteableCopy$]: dart.fnType(dart.void, []),
      [_setOwner$2]: dart.fnType(dart.void, [core$.Object]),
      [_setWithCopyAndCheck$]: dart.fnType(dart.void, [core$.Iterable, core$.Function]),
      [_checkGenericTypeParameter$2]: dart.fnType(dart.void, []),
      [_checkKey$0]: dart.fnType(dart.void, [core$.Object]),
      [_checkValue$0]: dart.fnType(dart.void, [core$.Object])
    }));
    dart.setFieldSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getFields(SetMultimapBuilder.__proto__),
      [_builtMap$]: dart.fieldType(MapOfK$BuiltSetOfV()),
      [_builtMapOwner$]: dart.fieldType(_BuiltSetMultimapOfK$V()),
      [_builderMap$]: dart.fieldType(MapOfK$SetBuilderOfV())
    }));
    return SetMultimapBuilder;
  });
  src__set_multimap.SetMultimapBuilder = src__set_multimap.SetMultimapBuilder$();
  dart.addTypeTests(src__set_multimap.SetMultimapBuilder, _is_SetMultimapBuilder_default);
  dart.trackLibraries("packages/built_collection/built_collection.ddc", {
    "package:built_collection/built_collection.dart": built_collection,
    "package:built_collection/src/internal/copy_on_write_set.dart": src__internal__copy_on_write_set,
    "package:built_collection/src/internal/copy_on_write_list.dart": src__internal__copy_on_write_list,
    "package:built_collection/src/set.dart": src__set,
    "package:built_collection/src/iterable.dart": src__iterable,
    "package:built_collection/src/list.dart": src__list,
    "package:built_collection/src/internal/copy_on_write_map.dart": src__internal__copy_on_write_map,
    "package:built_collection/src/list_multimap.dart": src__list_multimap,
    "package:built_collection/src/map.dart": src__map,
    "package:built_collection/src/set_multimap.dart": src__set_multimap
  }, '{"version":3,"sourceRoot":"","sources":["src/internal/copy_on_write_set.dart","src/internal/copy_on_write_list.dart","src/set/built_set.dart","src/set.dart","src/set/set_builder.dart","src/iterable/built_iterable.dart","src/list/built_list.dart","src/list.dart","src/list/list_builder.dart","src/internal/copy_on_write_map.dart","src/list_multimap/built_list_multimap.dart","src/list_multimap.dart","src/list_multimap/list_multimap_builder.dart","src/map/built_map.dart","src/map.dart","src/map/map_builder.dart","src/set_multimap/built_set_multimap.dart","src/set_multimap.dart","src/set_multimap/set_multimap_builder.dart"],"names":[],"mappings":"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","file":"built_collection.ddc.js"}');
  // Exports:
  return {
    built_collection: built_collection,
    src__internal__copy_on_write_set: src__internal__copy_on_write_set,
    src__internal__copy_on_write_list: src__internal__copy_on_write_list,
    src__set: src__set,
    src__iterable: src__iterable,
    src__list: src__list,
    src__internal__copy_on_write_map: src__internal__copy_on_write_map,
    src__list_multimap: src__list_multimap,
    src__map: src__map,
    src__set_multimap: src__set_multimap
  };
});

//# sourceMappingURL=built_collection.ddc.js.map
