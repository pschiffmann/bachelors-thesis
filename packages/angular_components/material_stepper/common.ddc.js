define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const material_stepper__common = Object.create(_root);
  dart.defineLazy(material_stepper__common, {
    /*material_stepper__common.horizontal*/get horizontal() {
      return "horizontal";
    },
    /*material_stepper__common.vertical*/get vertical() {
      return "vertical";
    },
    /*material_stepper__common.sizeDefault*/get sizeDefault() {
      return "default";
    },
    /*material_stepper__common.sizeMini*/get sizeMini() {
      return "mini";
    },
    /*material_stepper__common.all*/get all() {
      return "all";
    },
    /*material_stepper__common.backwards*/get backwards() {
      return "backwards";
    },
    /*material_stepper__common.none*/get none() {
      return "none";
    },
    /*material_stepper__common.orientations*/get orientations() {
      return dart.constList(["horizontal", "vertical"], core.String);
    },
    /*material_stepper__common.sizes*/get sizes() {
      return dart.constList(["default", "mini"], core.String);
    },
    /*material_stepper__common.jumps*/get jumps() {
      return dart.constList(["all", "backwards", "none"], core.String);
    }
  });
  dart.trackLibraries("packages/angular_components/material_stepper/common.ddc", {
    "package:angular_components/material_stepper/common.dart": material_stepper__common
  }, '{"version":3,"sourceRoot":"","sources":["common.dart"],"names":[],"mappings":";;;;;;;;MAIM,mCAAU;YAAG;;MACb,iCAAQ;YAAG;;MACX,oCAAW;YAAG;;MACd,iCAAQ;YAAG;;MACX,4BAAG;YAAG;;MACN,kCAAS;YAAG;;MACZ,6BAAI;YAAG;;MAEP,qCAAY;YAAG,iBAAC,YAAU,EAAE,UAAQ;;MAEpC,8BAAK;YAAG,iBAAC,SAAW,EAAE,MAAQ;;MAE9B,8BAAK;YAAG,iBAAC,KAAG,EAAE,WAAS,EAAE,MAAI","file":"common.ddc.js"}');
  // Exports:
  return {
    material_stepper__common: material_stepper__common
  };
});

//# sourceMappingURL=common.ddc.js.map
