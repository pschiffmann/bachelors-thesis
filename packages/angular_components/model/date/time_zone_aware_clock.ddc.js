define(['dart_sdk', 'packages/logging/logging', 'packages/angular/src/core/change_detection/change_detection', 'packages/quiver/time'], function(dart_sdk, logging, change_detection, time) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging$ = logging.logging;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__providers = change_detection.src__di__providers;
  const time$ = time.time;
  const _root = Object.create(null);
  const model__date__time_zone_aware_clock = Object.create(_root);
  const $isNaN = dartx.isNaN;
  let VoidToSettableTimeZone = () => (VoidToSettableTimeZone = dart.constFn(dart.fnType(model__date__time_zone_aware_clock.SettableTimeZone, [])))();
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let CompleterOfNull = () => (CompleterOfNull = dart.constFn(async.Completer$(core.Null)))();
  dart.defineLazy(model__date__time_zone_aware_clock, {
    /*model__date__time_zone_aware_clock._logger*/get _logger() {
      return logging$.Logger.new("third_party.dart_src.acx.model.date.time_zone_aware_clock");
    },
    /*model__date__time_zone_aware_clock.timeZoneAwareClock*/get timeZoneAwareClock() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new("timeZoneAwareClock"));
    },
    /*model__date__time_zone_aware_clock.timeZoneAwareClockProviders*/get timeZoneAwareClockProviders() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(model__date__time_zone_aware_clock.SettableTimeZone), {useFactory: dart.fn(model__date__time_zone_aware_clock.settableTimeZoneFactory, VoidToSettableTimeZone())})), dart.wrapType(model__date__time_zone_aware_clock.TimeZoneAwareClock), dart.const(src__di__providers.Provider.new(model__date__time_zone_aware_clock.timeZoneAwareClock, {useExisting: dart.wrapType(model__date__time_zone_aware_clock.TimeZoneAwareClock)}))], core.Object);
    }
  });
  const _now = Symbol('_now');
  model__date__time_zone_aware_clock.TimeZoneAwareClock = class TimeZoneAwareClock extends time$.Clock {
    toString() {
      return "TimeZoneAwareClock";
    }
  };
  (model__date__time_zone_aware_clock.TimeZoneAwareClock.new = function(timeZone) {
    model__date__time_zone_aware_clock.TimeZoneAwareClock.__proto__.new.call(this, dart.bind(timeZone, _now));
  }).prototype = model__date__time_zone_aware_clock.TimeZoneAwareClock.prototype;
  (model__date__time_zone_aware_clock.TimeZoneAwareClock.fixed = function(time) {
    model__date__time_zone_aware_clock.TimeZoneAwareClock.__proto__.new.call(this, dart.fn(() => time, VoidToDateTime()));
  }).prototype = model__date__time_zone_aware_clock.TimeZoneAwareClock.prototype;
  dart.addTypeTests(model__date__time_zone_aware_clock.TimeZoneAwareClock);
  dart.defineExtensionMethods(model__date__time_zone_aware_clock.TimeZoneAwareClock, ['toString']);
  model__date__time_zone_aware_clock.clockFactory = function(timeZone) {
    return new model__date__time_zone_aware_clock.TimeZoneAwareClock.new(timeZone);
  };
  model__date__time_zone_aware_clock.settableTimeZoneFactory = function() {
    return new model__date__time_zone_aware_clock.SettableTimeZone.new();
  };
  const _time = Symbol('_time');
  const _throwIfNotInitialized = Symbol('_throwIfNotInitialized');
  const _initialized = Symbol('_initialized');
  const _offsetFromUtc = Symbol('_offsetFromUtc');
  model__date__time_zone_aware_clock.SettableTimeZone = class SettableTimeZone extends core.Object {
    get offsetFromUtc() {
      return this[_offsetFromUtc];
    }
    set offsetFromUtc(newOffset) {
      if (newOffset != null && newOffset.inMicroseconds == null) {
        dart.throw(new core.ArgumentError.value(newOffset, "newOffset" + "holds a null or undefined value"));
      }
      if (newOffset != null && newOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core.ArgumentError.value(newOffset, "newOffset" + "is NaN!"));
      }
      if (!dart.test(this[_initialized].isCompleted) && newOffset != null) {
        this[_initialized].complete();
      }
      this[_offsetFromUtc] = newOffset;
    }
    get isInitialized() {
      return this[_offsetFromUtc] != null;
    }
    get onInit() {
      return this[_initialized].future;
    }
    [_now]() {
      let systemTime = this[_time]();
      if (this.offsetFromUtc == null) {
        if (dart.dtest(this[_throwIfNotInitialized])) {
          dart.throw(new core.StateError.new("TimeZoneAwareClock not initialized with time zone data"));
        } else {
          model__date__time_zone_aware_clock._logger.severe("not initialized with time zone data");
          return systemTime;
        }
      } else if (systemTime.timeZoneOffset.inMicroseconds == null) {
        dart.throw(new core.StateError.new("System time has a null or undefined timezone offset! " + dart.str(systemTime)));
      } else if (systemTime.timeZoneOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core.StateError.new("System time has a NaN timezone offset! " + dart.str(systemTime)));
      }
      let offset = this.offsetFromUtc['-'](systemTime.timeZoneOffset);
      if (offset.inMicroseconds == null) {
        dart.throw(new core.StateError.new("Computed time offset is null or undefined! " + (dart.str(this.offsetFromUtc) + " - " + dart.str(systemTime.timeZoneOffset) + " = " + dart.str(offset))));
      }
      if (offset.inMicroseconds[$isNaN]) {
        dart.throw(new core.StateError.new("Computed time offset is NaN! " + (dart.str(this.offsetFromUtc) + " - " + dart.str(systemTime.timeZoneOffset) + " = " + dart.str(offset))));
      }
      return systemTime.add(offset);
    }
  };
  (model__date__time_zone_aware_clock.SettableTimeZone.new = function(timeFunc, throwIfNotInitialized) {
    if (timeFunc === void 0) timeFunc = dart.fn(time$.systemTime, VoidToDateTime());
    if (throwIfNotInitialized === void 0) throwIfNotInitialized = false;
    this[_initialized] = CompleterOfNull().new();
    this[_offsetFromUtc] = null;
    this[_time] = timeFunc;
    this[_throwIfNotInitialized] = throwIfNotInitialized;
  }).prototype = model__date__time_zone_aware_clock.SettableTimeZone.prototype;
  dart.addTypeTests(model__date__time_zone_aware_clock.SettableTimeZone);
  dart.setMethodSignature(model__date__time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getMethods(model__date__time_zone_aware_clock.SettableTimeZone.__proto__),
    [_now]: dart.fnType(core.DateTime, [])
  }));
  dart.setGetterSignature(model__date__time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getGetters(model__date__time_zone_aware_clock.SettableTimeZone.__proto__),
    offsetFromUtc: core.Duration,
    isInitialized: core.bool,
    onInit: async.Future$(core.Null)
  }));
  dart.setSetterSignature(model__date__time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getSetters(model__date__time_zone_aware_clock.SettableTimeZone.__proto__),
    offsetFromUtc: core.Duration
  }));
  dart.setFieldSignature(model__date__time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getFields(model__date__time_zone_aware_clock.SettableTimeZone.__proto__),
    [_time]: dart.finalFieldType(VoidToDateTime()),
    [_initialized]: dart.finalFieldType(CompleterOfNull()),
    [_throwIfNotInitialized]: dart.finalFieldType(dart.dynamic),
    [_offsetFromUtc]: dart.fieldType(core.Duration)
  }));
  dart.trackLibraries("packages/angular_components/model/date/time_zone_aware_clock.ddc", {
    "package:angular_components/model/date/time_zone_aware_clock.dart": model__date__time_zone_aware_clock
  }, '{"version":3,"sourceRoot":"","sources":["time_zone_aware_clock.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAWM,0CAAO;YACT,oBAAM,CAAC;;MAOL,qDAAkB;4BAAG,2CAAW,CAAC;;MAIjC,8DAA2B;YAAG,4BAClC,+BAAQ,CAAC,kEAAgB,eAAc,6FAAuB,KAC9D,oEAAkB,aAClB,+BAAQ,CAAC,qDAAkB,gBAAe,oEAAkB;;;;;;YA+BvC;IAAoB;;wEAPtB,QAAyB;AAAI,6FAAM,QAAQ;EAAM;0EAI3C,IAAa;AAAI,mFAAM,cAAM,IAAI;EAAC;;;6DAO1C,QAAyB;eAAK,yDAAkB,CAAC,QAAQ;EAAC;;eAK/B,uDAAgB;EAAE;;;;;;;YAahC,qBAAc;;sBAC1B,SAAkB;AAClC,UAAI,SAAS,IAAI,QAAQ,SAAS,eAAe,IAAI,MAAM;AACzD,uBAAM,wBAAmB,CACrB,SAAS,EAAE,cAAY;;AAE7B,UAAI,SAAS,IAAI,QAAQ,SAAS,eAAe,QAAM,EAAE;AACvD,uBAAM,wBAAmB,CAAC,SAAS,EAAE,cAAY;;AAGnD,qBAAK,kBAAY,YAAY,KAAI,SAAS,IAAI,MAAM;AAClD,0BAAY,SAAS;;AAEvB,0BAAc,GAAG,SAAS;IAC5B;;YAK0B,qBAAc,IAAI;IAAI;;YAIrB,mBAAY,OAAO;;;AAkB5C,UAAI,aAAa,WAAK;AACtB,UAAI,kBAAa,IAAI,MAAM;AAEzB,uBAAI,4BAAsB,GAAE;AAC1B,yBAAM,mBAAU,CACZ;eACC;AACL,oDAAO,OAAO,CAAC;AACf,gBAAO,WAAU;;YAEd,KAAI,UAAU,eAAe,eAAe,IAAI,MAAM;AAC3D,uBAAM,mBAAU,CACZ,mEAAuD,UAAU;YAChE,KAAI,UAAU,eAAe,eAAe,QAAM,EAAE;AACzD,uBAAM,mBAAU,CAAC,qDAAyC,UAAU;;AAKtE,UAAI,SAAS,AAAc,kBAAD,MAAG,UAAU,eAAe;AACtD,UAAI,MAAM,eAAe,IAAI,MAAM;AACjC,uBAAM,mBAAU,CAAC,iDACb,SAAE,kBAAa,qBAAK,UAAU,eAAe,qBAAK,MAAM;;AAE9D,UAAI,MAAM,eAAe,QAAM,EAAE;AAC/B,uBAAM,mBAAU,CAAC,mCACb,SAAE,kBAAa,qBAAK,UAAU,eAAe,qBAAK,MAAM;;AAE9D,YAAO,WAAU,IAAI,CAAC,MAAM;IAC9B;;sEArCK,QAAkC,EAAE,qBAAkC;6BAAzD,WAAW,2CAAU;0CAAO,wBAAwB;IAxChE,kBAAY,GAAG,qBAAe;IAuB3B,oBAAc;IAkBjB,WAAK,GAAG,QAAQ;IAChB,4BAAsB,GAAG,qBAAqB","file":"time_zone_aware_clock.ddc.js"}');
  // Exports:
  return {
    model__date__time_zone_aware_clock: model__date__time_zone_aware_clock
  };
});

//# sourceMappingURL=time_zone_aware_clock.ddc.js.map
