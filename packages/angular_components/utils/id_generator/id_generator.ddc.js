define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const utils__id_generator__id_generator = Object.create(_root);
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $toUpperCase = dartx.toUpperCase;
  const $join = dartx.join;
  const $padLeft = dartx.padLeft;
  const $toRadixString = dartx.toRadixString;
  const $map = dartx.map;
  const $substring = dartx.substring;
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  utils__id_generator__id_generator.IdGenerator = class IdGenerator extends core.Object {};
  (utils__id_generator__id_generator.IdGenerator.new = function() {
  }).prototype = utils__id_generator__id_generator.IdGenerator.prototype;
  dart.addTypeTests(utils__id_generator__id_generator.IdGenerator);
  const _prefix = Symbol('_prefix');
  const _seq = Symbol('_seq');
  utils__id_generator__id_generator.SequentialIdGenerator = class SequentialIdGenerator extends core.Object {
    nextId() {
      return dart.str(this[_prefix]) + "--" + dart.str((() => {
        let x = this[_seq];
        this[_seq] = dart.notNull(x) + 1;
        return x;
      })());
    }
    static _createUuid() {
      let bytes = ListOfint().generate(16, dart.fn(_ => utils__id_generator__id_generator.SequentialIdGenerator._rnd.nextInt(256), intToint()));
      bytes[$_set](6, dart.notNull(bytes[$_get](6)) & 15 | 64);
      bytes[$_set](8, dart.notNull(bytes[$_get](8)) & 63 | 128);
      let chars = bytes[$map](core.String, dart.fn(b => b[$toRadixString](16)[$padLeft](2, "0"), intToString()))[$join]()[$toUpperCase]();
      return chars[$substring](0, 8) + "-" + chars[$substring](8, 12) + "-" + (chars[$substring](12, 16) + "-" + chars[$substring](16, 20) + "-") + chars[$substring](20, 32);
    }
  };
  (utils__id_generator__id_generator.SequentialIdGenerator.new = function(prefix) {
    this[_seq] = 0;
    this[_prefix] = prefix;
  }).prototype = utils__id_generator__id_generator.SequentialIdGenerator.prototype;
  (utils__id_generator__id_generator.SequentialIdGenerator.fromUUID = function() {
    utils__id_generator__id_generator.SequentialIdGenerator.new.call(this, utils__id_generator__id_generator.SequentialIdGenerator._createUuid());
  }).prototype = utils__id_generator__id_generator.SequentialIdGenerator.prototype;
  dart.addTypeTests(utils__id_generator__id_generator.SequentialIdGenerator);
  utils__id_generator__id_generator.SequentialIdGenerator[dart.implements] = () => [utils__id_generator__id_generator.IdGenerator];
  dart.setMethodSignature(utils__id_generator__id_generator.SequentialIdGenerator, () => ({
    __proto__: dart.getMethods(utils__id_generator__id_generator.SequentialIdGenerator.__proto__),
    nextId: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(utils__id_generator__id_generator.SequentialIdGenerator, () => ({
    __proto__: dart.getFields(utils__id_generator__id_generator.SequentialIdGenerator.__proto__),
    [_prefix]: dart.finalFieldType(core.String),
    [_seq]: dart.fieldType(core.int)
  }));
  dart.defineLazy(utils__id_generator__id_generator.SequentialIdGenerator, {
    /*utils__id_generator__id_generator.SequentialIdGenerator._rnd*/get _rnd() {
      return math.Random.new();
    }
  });
  dart.trackLibraries("packages/angular_components/utils/id_generator/id_generator.ddc", {
    "package:angular_components/utils/id_generator/id_generator.dart": utils__id_generator__id_generator
  }, '{"version":3,"sourceRoot":"","sources":["id_generator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;EAUA;;;;;;YA2BqB,UAAE,aAAO;gBAAI,UAAI;uCArCtC;;;IAqC0C;;AAQtC,UAAI,QAAQ,oBAAkB,CAAC,IAAI,QAAC,CAAC,IAAK,4DAAI,QAAQ,CAAC;AACvD,WAAK,QAAC,GAAe,AAAQ,aAAjB,KAAK,QAAC,MAAK,KAAQ;AAC/B,WAAK,QAAC,GAAe,AAAQ,aAAjB,KAAK,QAAC,MAAK,KAAQ;AAE/B,UAAI,QAAQ,KAAK,MACT,cAAC,QAAC,CAAC,IAAK,CAAC,gBAAc,CAAC,aAAW,CAAC,GAAG,4BACtC,gBACO;AAEhB,YAAO,AAAG,MAAK,YAAU,CAAC,GAAG,WAAM,KAAK,YAAU,CAAC,GAAG,aAClD,AAAG,KAAK,YAAU,CAAC,IAAI,YAAO,KAAK,YAAU,CAAC,IAAI,aAC/C,KAAK,YAAU,CAAC,IAAI;IAC7B;;;IAxCI,UAAI,GAAG;IAQgB,aAAO;EAAC;;2EASK,mEAAW;EAAG;;;;;;;;;;;;;MAnBzC,4DAAI;YAAG,gBAAW","file":"id_generator.ddc.js"}');
  // Exports:
  return {
    utils__id_generator__id_generator: utils__id_generator__id_generator
  };
});

//# sourceMappingURL=id_generator.ddc.js.map
