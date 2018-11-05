define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const verbose_regexp = Object.create(_root);
  const $replaceAll = dartx.replaceAll;
  const $splitMapJoin = dartx.splitMapJoin;
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  verbose_regexp.verbose = function(regexp) {
    return regexp[$splitMapJoin](verbose_regexp._escapeSequence, {onMatch: dart.fn(m => {
        let l = m.group(1);
        return l != null ? l : m.group(2);
      }, MatchToString()), onNonMatch: dart.fn(str => str[$replaceAll](verbose_regexp._verboseMatcher, ""), StringToString())});
  };
  dart.defineLazy(verbose_regexp, {
    /*verbose_regexp._escapeSequence*/get _escapeSequence() {
      return core.RegExp.new("(?:\\\\(#|\\s))" + "|" + "(" + "\\\\[\\s\\S]" + "|" + "\\[(" + "\\\\[\\s\\S]" + "|" + "[^\\]]" + ")*\\]" + ")");
    },
    /*verbose_regexp._verboseMatcher*/get _verboseMatcher() {
      return core.RegExp.new("#[^\n]*\n?|\\s");
    }
  });
  dart.trackLibraries("packages/verbose_regexp/verbose_regexp.ddc", {
    "package:verbose_regexp/verbose_regexp.dart": verbose_regexp
  }, '{"version":3,"sourceRoot":"","sources":["verbose_regexp.dart"],"names":[],"mappings":";;;;;;;;;;;oCAUe,MAAa;UAAK,OAAM,eAAa,CAClD,8BAAe,YACN,QAAC,CAAO;gBAAK,CAAC,MAAM,CAAC;+BAAM,CAAC,MAAM,CAAC;uCAChC,QAAC,GAAU,IAAK,GAAG,aAAW,CAAC,8BAAe,EAAE;EAC7D;;MAGY,8BAAe;YAAG,AAAI,gBAAM,CACvC,oBAEA,MACA,MAGE,iBAGA,MACA,SACE,iBACA,MACA,WACF,UACF;;MAIW,8BAAe;YAAG,AAAI,gBAAM,CAAC","file":"verbose_regexp.ddc.js"}');
  // Exports:
  return {
    verbose_regexp: verbose_regexp
  };
});

//# sourceMappingURL=verbose_regexp.ddc.js.map
