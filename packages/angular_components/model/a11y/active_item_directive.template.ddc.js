define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular/angular.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, modules, directive_change_detector, active_item_directive, angular, modal, popup, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const model__a11y__active_item_directive = active_item_directive.model__a11y__active_item_directive;
  const angular$46template = angular.angular$46template;
  const laminate__components__modal__modal$46template = modal.laminate__components__modal__modal$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const model__a11y__active_item_directive$46template = Object.create(_root);
  const _expr_0 = Symbol('_expr_0');
  model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd = class ActiveItemDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.active;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(el, "active", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd.__proto__.new.call(this);
  }).prototype = model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd.prototype;
  dart.addTypeTests(model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd);
  const instance$ = Symbol("ActiveItemDirectiveNgCd.instance");
  dart.setFieldSignature(model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(model__a11y__active_item_directive.ActiveItemDirective),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(model__a11y__active_item_directive$46template, {
    /*model__a11y__active_item_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__a11y__active_item_directive$46template.initReflector = function() {
    if (dart.test(model__a11y__active_item_directive$46template._visited)) {
      return;
    }
    model__a11y__active_item_directive$46template._visited = true;
    angular$46template.initReflector();
    laminate__components__modal__modal$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/model/a11y/active_item_directive.template.ddc", {
    "package:angular_components/model/a11y/active_item_directive.template.dart": model__a11y__active_item_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["active_item_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAyBoC;;;;;;sBAGX,IAAqB,EAAE,EAAkB;AAC9D,UAAM,YAAY,aAAQ,OAAO;AACjC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,4BAAe,CAAC,EAAE,EAAE,UAAU,SAAS;AACvC,qBAAO,GAAG,SAAS;;IAEvB;;wFAPwB,QAAa;IADhC,aAAO;IACiB,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;MAUpC,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,iEAAa;EACrB","file":"active_item_directive.template.ddc.js"}');
  // Exports:
  return {
    model__a11y__active_item_directive$46template: model__a11y__active_item_directive$46template
  };
});

//# sourceMappingURL=active_item_directive.template.ddc.js.map
