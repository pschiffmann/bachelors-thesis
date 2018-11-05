define(['dart_sdk', 'packages/intl/intl'], function(dart_sdk, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const material_input__material_percent_directive = Object.create(_root);
  const $indexOf = dartx.indexOf;
  const $keys = dartx.keys;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const _replaceErrorMessage = Symbol('_replaceErrorMessage');
  material_input__material_percent_directive.MaterialPercentInputDirective = class MaterialPercentInputDirective extends core.Object {
    [_replaceErrorMessage](errors) {
      let overrides = null;
      for (let key of material_input__material_percent_directive.MaterialPercentInputDirective._errorOverrides[$keys]) {
        if (dart.test(material_input__material_percent_directive.MaterialPercentInputDirective._errorOverrides[$containsKey](key))) {
          let t = overrides;
          t == null ? overrides = MapOfString$dynamic().from(errors) : t;
          dart.dsetindex(overrides, key, material_input__material_percent_directive.MaterialPercentInputDirective._errorOverrides[$_get](key));
        }
      }
      let result = overrides != null ? overrides : errors;
      return MapOfString$dynamic()._check(this.percentErrorRenderer != null ? dart.dcall(this.percentErrorRenderer, [result]) : result);
    }
    get percentErrorRenderer() {
      return this[percentErrorRenderer];
    }
    set percentErrorRenderer(value) {
      this[percentErrorRenderer] = value;
    }
  };
  (material_input__material_percent_directive.MaterialPercentInputDirective.new = function(input, element) {
    this[percentErrorRenderer] = null;
    input.rightAlign = true;
    let percentPattern = new intl$.NumberFormat.percentPattern();
    input.trailingText = percentPattern.symbols.PERCENT;
    let percentLocation = percentPattern.symbols.PERCENT_PATTERN[$indexOf](percentPattern.symbols.PERCENT);
    if (percentLocation > percentPattern.symbols.PERCENT_PATTERN.length / 2) {
      element.dir = "ltr";
    } else {
      element.dir = "rtl";
    }
    input.errorRenderer = dart.bind(this, _replaceErrorMessage);
  }).prototype = material_input__material_percent_directive.MaterialPercentInputDirective.prototype;
  dart.addTypeTests(material_input__material_percent_directive.MaterialPercentInputDirective);
  const percentErrorRenderer = Symbol("MaterialPercentInputDirective.percentErrorRenderer");
  dart.setMethodSignature(material_input__material_percent_directive.MaterialPercentInputDirective, () => ({
    __proto__: dart.getMethods(material_input__material_percent_directive.MaterialPercentInputDirective.__proto__),
    [_replaceErrorMessage]: dart.fnType(core.Map$(core.String, dart.dynamic), [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setFieldSignature(material_input__material_percent_directive.MaterialPercentInputDirective, () => ({
    __proto__: dart.getFields(material_input__material_percent_directive.MaterialPercentInputDirective.__proto__),
    percentErrorRenderer: dart.fieldType(core.Function)
  }));
  dart.defineLazy(material_input__material_percent_directive.MaterialPercentInputDirective, {
    /*material_input__material_percent_directive.MaterialPercentInputDirective._errorOverrides*/get _errorOverrides() {
      return new (IdentityMapOfString$String()).from(["non-negative", material_input__material_percent_directive.MaterialPercentInputDirective._negativePercentageErrMsg, "lower-bound-number", material_input__material_percent_directive.MaterialPercentInputDirective._percentTooSmallErrMsg, "upper-bound-number", material_input__material_percent_directive.MaterialPercentInputDirective._percentTooLargeErrMsg]);
    },
    set _errorOverrides(_) {},
    /*material_input__material_percent_directive.MaterialPercentInputDirective._negativePercentageErrMsg*/get _negativePercentageErrMsg() {
      return intl$.Intl.message("Percentages must be positive", {desc: "Validation error message when input precentage is negative, it " + "must be a positive number."});
    },
    /*material_input__material_percent_directive.MaterialPercentInputDirective._percentTooSmallErrMsg*/get _percentTooSmallErrMsg() {
      return intl$.Intl.message("Enter a larger number", {desc: "Validation error message for when the input percentage is too " + "small", meaning: "Validation error message for when the input percentage is " + "too small"});
    },
    /*material_input__material_percent_directive.MaterialPercentInputDirective._percentTooLargeErrMsg*/get _percentTooLargeErrMsg() {
      return intl$.Intl.message("Enter a smaller number", {desc: "Validation error message for when the input percentage is too " + "large", meaning: "Validation error message for when the input percentage is " + "too large"});
    }
  });
  dart.trackLibraries("packages/angular_components/material_input/material_percent_directive.ddc", {
    "package:angular_components/material_input/material_percent_directive.dart": material_input__material_percent_directive
  }, '{"version":3,"sourceRoot":"","sources":["material_percent_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;2BAuC4C,MAA2B;AACnE,UAAI;AACJ,eAAS,MAAO,yFAAe,OAAK,EAAE;AACpC,sBAAI,wFAAe,cAAY,CAAC,GAAG,IAAG;AACpC,2BAAS;sBAAT,SAAS,GAAK,0BAAyB,CAAC,MAAM;AAC9C,kCAAS,EAAC,GAAG,EAAI,wFAAe,QAAC,GAAG;;;AAGxC,UAAM,SAAS,SAAS,WAAT,SAAS,GAAI,MAAM;AAClC,0CAAO,AAAC,yBAAoB,IAAI,kBAC1B,yBAAoB,GAAC,MAAM,KAC3B,MAAM;IACd;IAQS;;;;;;;2FArCL,KAA4B,EAAE,OAAmB;IAqC5C,0BAAoB;AApC3B,SAAK,WAAW,GAAG;AACnB,QAAM,qBAAiB,iCAA2B;AAClD,SAAK,aAAa,GAAG,cAAc,QAAQ,QAAQ;AACnD,QAAM,kBAAkB,cAAc,QAAQ,gBAAgB,UAClD,CAAC,cAAc,QAAQ,QAAQ;AAG3C,QAAI,AAAgB,eAAD,GAAG,AAA8C,cAAhC,QAAQ,gBAAgB,OAAO,GAAG,GAAG;AACvE,aAAO,IAAI,GAAG;WACT;AACL,aAAO,IAAI,GAAG;;AAEhB,SAAK,cAAc,GAAG,qCAAoB;EAC5C;;;;;;;;;;;;MAyB2B,wFAAe;YAAG,0CAC3C,cAAkC,EAAE,kGAAyB,EAC7D,oBAA6B,EAAE,+FAAsB,EACrD,oBAA6B,EAAE,+FAAsB;;;MAG1C,kGAAyB;YAAG,WAAI,QAAQ,CACjD,uCACM,oEACF;;MAEK,+FAAsB;YAAG,WAAI,QAAQ,CAAC,gCACzC,mEACF,kBACK,+DACL;;MAEK,+FAAsB;YAAG,WAAI,QAAQ,CAAC,iCACzC,mEACF,kBACK,+DACL","file":"material_percent_directive.ddc.js"}');
  // Exports:
  return {
    material_input__material_percent_directive: material_input__material_percent_directive
  };
});

//# sourceMappingURL=material_percent_directive.ddc.js.map
