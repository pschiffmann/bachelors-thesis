define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__model__selection__interfaces__selectable = Object.create(_root);
  src__model__selection__interfaces__selectable.SelectableOption = class SelectableOption extends core.Object {
    toString() {
      return {
        0: "SelectableOption.Selectable",
        1: "SelectableOption.Disabled",
        2: "SelectableOption.Hidden"
      }[this.index];
    }
  };
  (src__model__selection__interfaces__selectable.SelectableOption.new = function(x) {
    this.index = x;
  }).prototype = src__model__selection__interfaces__selectable.SelectableOption.prototype;
  dart.addTypeTests(src__model__selection__interfaces__selectable.SelectableOption);
  dart.setFieldSignature(src__model__selection__interfaces__selectable.SelectableOption, () => ({
    __proto__: dart.getFields(src__model__selection__interfaces__selectable.SelectableOption.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__model__selection__interfaces__selectable.SelectableOption, ['toString']);
  src__model__selection__interfaces__selectable.SelectableOption.Selectable = dart.const(new src__model__selection__interfaces__selectable.SelectableOption.new(0));
  src__model__selection__interfaces__selectable.SelectableOption.Disabled = dart.const(new src__model__selection__interfaces__selectable.SelectableOption.new(1));
  src__model__selection__interfaces__selectable.SelectableOption.Hidden = dart.const(new src__model__selection__interfaces__selectable.SelectableOption.new(2));
  src__model__selection__interfaces__selectable.SelectableOption.values = dart.constList([src__model__selection__interfaces__selectable.SelectableOption.Selectable, src__model__selection__interfaces__selectable.SelectableOption.Disabled, src__model__selection__interfaces__selectable.SelectableOption.Hidden], src__model__selection__interfaces__selectable.SelectableOption);
  src__model__selection__interfaces__selectable.SelectableGetter$ = dart.generic(T => {
    const SelectableGetter = dart.typedef('SelectableGetter', () => dart.fnType(src__model__selection__interfaces__selectable.SelectableOption, [T]));
    return SelectableGetter;
  });
  src__model__selection__interfaces__selectable.SelectableGetter = src__model__selection__interfaces__selectable.SelectableGetter$();
  const _is_Selectable_default = Symbol('_is_Selectable_default');
  src__model__selection__interfaces__selectable.Selectable$ = dart.generic(T => {
    class Selectable extends core.Object {
      static _isOptionCheck(T, isMaybeModel, item, option, defaultIfMissingInterface) {
        if (src__model__selection__interfaces__selectable.Selectable$(T).is(isMaybeModel)) {
          return isMaybeModel.getSelectable(item) == option;
        }
        return defaultIfMissingInterface;
      }
      static getOptionIn(T, isMaybeModel, item, defaultIfMissingInterface) {
        if (defaultIfMissingInterface === void 0) defaultIfMissingInterface = src__model__selection__interfaces__selectable.SelectableOption.Selectable;
        if (src__model__selection__interfaces__selectable.Selectable$(T).is(isMaybeModel)) {
          return isMaybeModel.getSelectable(item);
        }
        return defaultIfMissingInterface;
      }
      static filterWhereSelectable(T, isMaybeModel, defaultIfMissingInterface) {
        if (defaultIfMissingInterface === void 0) defaultIfMissingInterface = true;
        let isSelectable = _ => defaultIfMissingInterface;
        dart.fn(isSelectable, dart.fnType(core.bool, [T]));
        if (src__model__selection__interfaces__selectable.Selectable$(T).is(isMaybeModel)) {
          isSelectable = dart.fn(option => isMaybeModel.getSelectable(option) === src__model__selection__interfaces__selectable.SelectableOption.Selectable, dart.fnType(core.bool, [T]));
        }
        return isSelectable;
      }
      static isSelectableIn(T, model, item, defaultIfMissingInterface) {
        if (defaultIfMissingInterface === void 0) defaultIfMissingInterface = true;
        return src__model__selection__interfaces__selectable.Selectable._isOptionCheck(T, model, item, src__model__selection__interfaces__selectable.SelectableOption.Selectable, defaultIfMissingInterface);
      }
      static isDisabledIn(T, model, item, defaultIfMissingInterface) {
        if (defaultIfMissingInterface === void 0) defaultIfMissingInterface = false;
        return src__model__selection__interfaces__selectable.Selectable._isOptionCheck(T, model, item, src__model__selection__interfaces__selectable.SelectableOption.Disabled, defaultIfMissingInterface);
      }
      static isHiddenIn(T, model, item, defaultIfMissingInterface) {
        if (defaultIfMissingInterface === void 0) defaultIfMissingInterface = false;
        return src__model__selection__interfaces__selectable.Selectable._isOptionCheck(T, model, item, src__model__selection__interfaces__selectable.SelectableOption.Hidden, defaultIfMissingInterface);
      }
      getSelectable(item) {
        T._check(item);
        return src__model__selection__interfaces__selectable.SelectableOption.Selectable;
      }
    }
    (Selectable.new = function() {
    }).prototype = Selectable.prototype;
    dart.addTypeTests(Selectable);
    Selectable.prototype[_is_Selectable_default] = true;
    dart.setMethodSignature(Selectable, () => ({
      __proto__: dart.getMethods(Selectable.__proto__),
      getSelectable: dart.fnType(src__model__selection__interfaces__selectable.SelectableOption, [core.Object])
    }));
    return Selectable;
  });
  src__model__selection__interfaces__selectable.Selectable = src__model__selection__interfaces__selectable.Selectable$();
  dart.addTypeTests(src__model__selection__interfaces__selectable.Selectable, _is_Selectable_default);
  const _is_HasSelectionRationale_default = Symbol('_is_HasSelectionRationale_default');
  src__model__selection__interfaces__selectable.HasSelectionRationale$ = dart.generic(T => {
    let _NullHasSelectionRationaleOfT = () => (_NullHasSelectionRationaleOfT = dart.constFn(src__model__selection__interfaces__selectable._NullHasSelectionRationale$(T)))();
    class HasSelectionRationale extends core.Object {
      static none() {
        return new (_NullHasSelectionRationaleOfT()).new();
      }
    }
    (HasSelectionRationale[dart.mixinNew] = function() {
    }).prototype = HasSelectionRationale.prototype;
    dart.addTypeTests(HasSelectionRationale);
    HasSelectionRationale.prototype[_is_HasSelectionRationale_default] = true;
    return HasSelectionRationale;
  });
  src__model__selection__interfaces__selectable.HasSelectionRationale = src__model__selection__interfaces__selectable.HasSelectionRationale$();
  dart.addTypeTests(src__model__selection__interfaces__selectable.HasSelectionRationale, _is_HasSelectionRationale_default);
  const _is__NullHasSelectionRationale_default = Symbol('_is__NullHasSelectionRationale_default');
  src__model__selection__interfaces__selectable._NullHasSelectionRationale$ = dart.generic(T => {
    let HasSelectionRationaleOfT = () => (HasSelectionRationaleOfT = dart.constFn(src__model__selection__interfaces__selectable.HasSelectionRationale$(T)))();
    class _NullHasSelectionRationale extends core.Object {
      getSelectableRationale(item, isSelectable) {
        T._check(item);
        if (isSelectable === void 0) isSelectable = false;
        return null;
      }
    }
    (_NullHasSelectionRationale.new = function() {
    }).prototype = _NullHasSelectionRationale.prototype;
    dart.addTypeTests(_NullHasSelectionRationale);
    _NullHasSelectionRationale.prototype[_is__NullHasSelectionRationale_default] = true;
    _NullHasSelectionRationale[dart.implements] = () => [HasSelectionRationaleOfT()];
    dart.setMethodSignature(_NullHasSelectionRationale, () => ({
      __proto__: dart.getMethods(_NullHasSelectionRationale.__proto__),
      getSelectableRationale: dart.fnType(core.String, [core.Object], [core.bool])
    }));
    return _NullHasSelectionRationale;
  });
  src__model__selection__interfaces__selectable._NullHasSelectionRationale = src__model__selection__interfaces__selectable._NullHasSelectionRationale$();
  dart.addTypeTests(src__model__selection__interfaces__selectable._NullHasSelectionRationale, _is__NullHasSelectionRationale_default);
  dart.trackLibraries("packages/angular_components/src/model/selection/interfaces/selectable.ddc", {
    "package:angular_components/src/model/selection/interfaces/selectable.dart": src__model__selection__interfaces__selectable
  }, '{"version":3,"sourceRoot":"","sources":["selectable.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+BA+BI,YAAmB,EACnB,IAAM,EACN,MAAuB,EACvB,yBAA8B;AAE9B,4EAAI,YAAY,GAAmB;AACjC,gBAAO,AAAU,aAAY,cAAc,CAAC,IAAI,KAAG,MAAM;;AAE3D,cAAO,0BAAyB;MAClC;4BAIE,YAAmB,EACnB,IAAM,EACN,yBAAwE;kDAAvD,4BAA4B,8DAAgB,WAAW;AAExE,4EAAI,YAAY,GAAmB;AACjC,gBAAO,aAAY,cAAc,CAAC,IAAI;;AAExC,cAAO,0BAAyB;MAClC;sCAIE,YAAmB,EACnB,yBAAqC;kDAAhC,4BAA4B;AAEjC,YAAiB,eAAgB,CAAC,IAAK,yBAAyB;gBAA/C;AACjB,4EAAI,YAAY,GAAmB;AACjC,sBAAY,GAAG,QAAC,MAAM,IACb,AACL,YAAY,cAAc,CAAC,MAAM,MACjC,8DAAgB,WAAW;;AAIjC,cAAO,aAAY;MACrB;+BAIE,KAAY,EACZ,IAAM,EACN,yBAAqC;kDAAhC,4BAA4B;AAEjC,cAAO,wEAAc,IACnB,KAAK,EACL,IAAI,EACJ,8DAAgB,WAAW,EAC3B,yBAAyB;MAE7B;6BAIE,KAAY,EACZ,IAAM,EACN,yBAAsC;kDAAjC,4BAA4B;AAEjC,cAAO,wEAAc,IACnB,KAAK,EACL,IAAI,EACJ,8DAAgB,SAAS,EACzB,yBAAyB;MAE7B;2BAIE,KAAY,EACZ,IAAM,EACN,yBAAsC;kDAAjC,4BAA4B;AAEjC,cAAO,wEAAc,IACnB,KAAK,EACL,IAAI,EACJ,8DAAgB,OAAO,EACvB,yBAAyB;MAE7B;oBAG+B,IAAM;iBAAJ;cAAS,+DAAgB,WAAW;;;;IACvE;;;;;;;;;;;;;;;;AAc+C;MAA6B;;;;;;;;;;;;;;6BA2B5C,IAAM,EAAG,YAAyB;iBAAhC;qCAAY,eAAe;cAAW;MAAI;;;IAHxC","file":"selectable.ddc.js"}');
  // Exports:
  return {
    src__model__selection__interfaces__selectable: src__model__selection__interfaces__selectable
  };
});

//# sourceMappingURL=selectable.ddc.js.map
