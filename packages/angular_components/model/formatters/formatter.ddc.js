define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const model__formatters__formatter = Object.create(_root);
  const _is_Formatter_default = Symbol('_is_Formatter_default');
  model__formatters__formatter.Formatter$ = dart.generic(T => {
    class Formatter extends core.Object {}
    (Formatter.new = function() {
    }).prototype = Formatter.prototype;
    dart.addTypeTests(Formatter);
    Formatter.prototype[_is_Formatter_default] = true;
    return Formatter;
  });
  model__formatters__formatter.Formatter = model__formatters__formatter.Formatter$();
  dart.addTypeTests(model__formatters__formatter.Formatter, _is_Formatter_default);
  let const$;
  const _is_StyleFormatter_default = Symbol('_is_StyleFormatter_default');
  model__formatters__formatter.StyleFormatter$ = dart.generic(T => {
    let FormatterOfT = () => (FormatterOfT = dart.constFn(model__formatters__formatter.Formatter$(T)))();
    class StyleFormatter extends core.Object {
      computeStyle(value, parameters) {
        T._check(value);
        if (parameters === void 0) parameters = null;
        return const$ || (const$ = dart.constList([], core.String));
      }
    }
    (StyleFormatter.new = function() {
    }).prototype = StyleFormatter.prototype;
    dart.addTypeTests(StyleFormatter);
    StyleFormatter.prototype[_is_StyleFormatter_default] = true;
    StyleFormatter[dart.implements] = () => [FormatterOfT()];
    dart.setMethodSignature(StyleFormatter, () => ({
      __proto__: dart.getMethods(StyleFormatter.__proto__),
      computeStyle: dart.fnType(core.List$(core.String), [core.Object], [core.String])
    }));
    return StyleFormatter;
  });
  model__formatters__formatter.StyleFormatter = model__formatters__formatter.StyleFormatter$();
  dart.addTypeTests(model__formatters__formatter.StyleFormatter, _is_StyleFormatter_default);
  const _is_EntityFormatter_default = Symbol('_is_EntityFormatter_default');
  model__formatters__formatter.EntityFormatter$ = dart.generic(T => {
    let FormatterOfT = () => (FormatterOfT = dart.constFn(model__formatters__formatter.Formatter$(T)))();
    class EntityFormatter extends core.Object {}
    (EntityFormatter.new = function() {
    }).prototype = EntityFormatter.prototype;
    dart.addTypeTests(EntityFormatter);
    EntityFormatter.prototype[_is_EntityFormatter_default] = true;
    EntityFormatter[dart.implements] = () => [FormatterOfT()];
    return EntityFormatter;
  });
  model__formatters__formatter.EntityFormatter = model__formatters__formatter.EntityFormatter$();
  dart.addTypeTests(model__formatters__formatter.EntityFormatter, _is_EntityFormatter_default);
  const _is_EntityStyleFormatter_default = Symbol('_is_EntityStyleFormatter_default');
  model__formatters__formatter.EntityStyleFormatter$ = dart.generic(T => {
    let StyleFormatterOfT = () => (StyleFormatterOfT = dart.constFn(model__formatters__formatter.StyleFormatter$(T)))();
    class EntityStyleFormatter extends core.Object {}
    (EntityStyleFormatter.new = function() {
    }).prototype = EntityStyleFormatter.prototype;
    dart.addTypeTests(EntityStyleFormatter);
    EntityStyleFormatter.prototype[_is_EntityStyleFormatter_default] = true;
    EntityStyleFormatter[dart.implements] = () => [StyleFormatterOfT()];
    return EntityStyleFormatter;
  });
  model__formatters__formatter.EntityStyleFormatter = model__formatters__formatter.EntityStyleFormatter$();
  dart.addTypeTests(model__formatters__formatter.EntityStyleFormatter, _is_EntityStyleFormatter_default);
  dart.trackLibraries("packages/angular_components/model/formatters/formatter.ddc", {
    "package:angular_components/model/formatters/formatter.dart": model__formatters__formatter
  }, '{"version":3,"sourceRoot":"","sources":["formatter.dart"],"names":[],"mappings":";;;;;;;;;;;IAOA;;;;;;;;;;;;mBAI4B,KAAO,EAAG,UAAiB;iBAAzB;mCAAe;cAAgB;MAAQ;;;IACrE;;;;;;;;;;;;;;;;;IAqBA;;;;;;;;;;;;;IAQA","file":"formatter.ddc.js"}');
  // Exports:
  return {
    model__formatters__formatter: model__formatters__formatter
  };
});

//# sourceMappingURL=formatter.ddc.js.map
