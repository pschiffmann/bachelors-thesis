define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const check = Object.create(_root);
  const $toString = dartx.toString;
  check.checkArgument = function(expression, opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    if (!dart.test(expression)) {
      dart.throw(new core.ArgumentError.new(check._resolveMessage(message, null)));
    }
  };
  check.checkListIndex = function(index, size, opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(size)) {
      dart.throw(new core.RangeError.new(check._resolveMessage(message, "index " + dart.str(index) + " not valid for list of size " + dart.str(size))));
    }
    return index;
  };
  check.checkNotNull = function(T, reference, opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    if (reference == null) {
      dart.throw(new core.ArgumentError.new(check._resolveMessage(message, "null pointer")));
    }
    return reference;
  };
  check.checkState = function(expression, opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    if (!dart.test(expression)) {
      dart.throw(new core.StateError.new(check._resolveMessage(message, "failed precondition")));
    }
  };
  check._resolveMessage = function(message, defaultMessage) {
    if (core.Function.is(message)) message = dart.dcall(message, []);
    if (message == null) return defaultMessage;
    return dart.toString(message);
  };
  dart.trackLibraries("packages/quiver/check.ddc", {
    "package:quiver/check.dart": check
  }, '{"version":3,"sourceRoot":"","sources":["check.dart"],"names":[],"mappings":";;;;;;;;iCA0CmB,UAAe;QAAG;AACnC,mBAAK,UAAU,GAAE;AACf,iBAAM,IAAI,sBAAa,CAAC,qBAAe,CAAC,OAAO,EAAE;;EAErD;kCAImB,KAAS,EAAE,IAAQ;QAAG;AACvC,QAAU,aAAN,KAAK,IAAG,KAAW,aAAN,KAAK,kBAAI,IAAI,GAAE;AAC9B,iBAAM,IAAI,mBAAU,CAAC,qBAAe,CAChC,OAAO,EAAE,oBAAQ,KAAK,8CAA6B,IAAI;;AAE7D,UAAO,MAAK;EACd;mCAIkB,SAAW;QAAG;AAC9B,QAAI,SAAS,IAAI,MAAM;AACrB,iBAAM,IAAI,sBAAa,CAAC,qBAAe,CAAC,OAAO,EAAE;;AAEnD,UAAO,UAAS;EAClB;8BAGgB,UAAe;QAAG;AAChC,mBAAK,UAAU,GAAE;AACf,iBAAM,IAAI,mBAAU,CAAC,qBAAe,CAAC,OAAO,EAAE;;EAElD;mCAEuB,OAAO,EAAE,cAAqB;AACnD,yBAAI,OAAO,GAAc,OAAO,cAAG,OAAO;AAC1C,QAAI,OAAO,IAAI,MAAM,MAAO,eAAc;AAC1C,yBAAO,OAAO;EAChB","file":"check.ddc.js"}');
  // Exports:
  return {
    check: check
  };
});

//# sourceMappingURL=check.ddc.js.map
