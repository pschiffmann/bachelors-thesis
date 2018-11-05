define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/model/action/async_action', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_expansionpanel/material_expansionpanel'], function(dart_sdk, disposer, async_action, change_detection, material_expansionpanel) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const material_expansionpanel__material_expansionpanel = material_expansionpanel.material_expansionpanel__material_expansionpanel;
  const _root = Object.create(null);
  const material_expansionpanel__material_expansionpanel_set = Object.create(_root);
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let AsyncActionOfbool = () => (AsyncActionOfbool = dart.constFn(src__model__action__async_action.AsyncAction$(core.bool)))();
  let AsyncActionOfboolToNull = () => (AsyncActionOfboolToNull = dart.constFn(dart.fnType(core.Null, [AsyncActionOfbool()])))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let ListOfMaterialExpansionPanel = () => (ListOfMaterialExpansionPanel = dart.constFn(core.List$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  const _panelDisposer = Symbol('_panelDisposer');
  const _openPanel = Symbol('_openPanel');
  const _panels = Symbol('_panels');
  const _onPanelsChange = Symbol('_onPanelsChange');
  const _setOpenPanel = Symbol('_setOpenPanel');
  const _onPanelOpen = Symbol('_onPanelOpen');
  const _onPanelClose = Symbol('_onPanelClose');
  material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet = class MaterialExpansionPanelSet extends core.Object {
    set panels(panels) {
      this[_panels] = panels;
      this[_onPanelsChange]();
    }
    [_onPanelsChange]() {
      this[_panelDisposer].dispose();
      this[_openPanel] = null;
      for (let panel of this[_panels]) {
        if (dart.test(panel.isExpanded)) {
          if (this[_openPanel] != null) {
            dart.throw(new core.StateError.new("Should only have one panel open at a time"));
          }
          this[_openPanel] = panel;
        }
        this[_panelDisposer].addStreamSubscription(core.bool, panel.isExpandedChange.listen(dart.fn(isExpanded => {
          if (dart.test(isExpanded)) this[_setOpenPanel](panel);
        }, boolToNull())));
        this[_panelDisposer].addStreamSubscription(AsyncActionOfbool(), panel.open.listen(dart.fn(action => {
          this[_onPanelOpen](panel, action);
        }, AsyncActionOfboolToNull())));
        this[_panelDisposer].addStreamSubscription(AsyncActionOfbool(), panel.close.listen(dart.fn(action => {
          this[_onPanelClose](panel, action);
        }, AsyncActionOfboolToNull())));
        this[_panelDisposer].addStreamSubscription(AsyncActionOfbool(), panel.cancel.listen(dart.fn(action => {
          this[_onPanelClose](panel, action);
        }, AsyncActionOfboolToNull())));
        if (dart.test(panel.closeOnSave)) {
          this[_panelDisposer].addStreamSubscription(AsyncActionOfbool(), panel.save.listen(dart.fn(action => {
            this[_onPanelClose](panel, action);
          }, AsyncActionOfboolToNull())));
        }
      }
    }
    [_onPanelOpen](panel, action) {
      return async.async(dart.dynamic, (function* _onPanelOpen() {
        if (this[_openPanel] == null) this[_setOpenPanel](panel);
        if (dart.test(this[_openPanel].activeSaveCancelAction)) {
          action.cancel();
          return;
        }
        action.cancelIf(this[_openPanel].collapse({byUserAction: false}).then(core.bool, dart.fn(success => {
          if (dart.test(success)) this[_setOpenPanel](panel);
          return !dart.test(success);
        }, boolTobool())));
      }).bind(this));
    }
    [_onPanelClose](panel, action) {
      return async.async(dart.dynamic, (function* _onPanelClose() {
        let wasCollapseSucessful = (yield action.onDone);
        if (dart.test(wasCollapseSucessful) && dart.equals(this[_openPanel], panel)) this[_setOpenPanel](null);
      }).bind(this));
    }
    [_setOpenPanel](panel) {
      if (dart.equals(this[_openPanel], panel)) return;
      this[_openPanel] = panel;
      for (let panel of this[_panels]) {
        if (!dart.equals(panel, this[_openPanel])) panel.anotherExpanded = this[_openPanel] != null;
      }
    }
    ngOnDestroy() {
      this[_panelDisposer].dispose();
    }
  };
  (material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.new = function() {
    this[_panelDisposer] = new utils__disposer__disposer.Disposer.multi();
    this[_openPanel] = null;
    this[_panels] = null;
  }).prototype = material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet);
  material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.__proto__),
    [_onPanelsChange]: dart.fnType(dart.void, []),
    [_onPanelOpen]: dart.fnType(dart.void, [material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, src__model__action__async_action.AsyncAction$(core.bool)]),
    [_onPanelClose]: dart.fnType(dart.void, [material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, src__model__action__async_action.AsyncAction$(core.bool)]),
    [_setOpenPanel]: dart.fnType(dart.void, [material_expansionpanel__material_expansionpanel.MaterialExpansionPanel]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet, () => ({
    __proto__: dart.getSetters(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.__proto__),
    panels: core.List$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.__proto__),
    [_panelDisposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_openPanel]: dart.fieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel),
    [_panels]: dart.fieldType(ListOfMaterialExpansionPanel())
  }));
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel_set.ddc", {
    "package:angular_components/material_expansionpanel/material_expansionpanel_set.dart": material_expansionpanel__material_expansionpanel_set
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel_set.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;eAuCa,MAAmC;AAC5C,mBAAO,GAAG,MAAM;AAChB,2BAAe;IACjB;;AAGE,0BAAc,QAAQ;AACtB,sBAAU,GAAG;AAEb,eAAW,QAAS,cAAO,EAAE;AAC3B,sBAAI,KAAK,WAAW,GAAE;AACpB,cAAI,gBAAU,IAAI,MAAM;AACtB,2BAAM,mBAAU,CAAC;;AAEnB,0BAAU,GAAG,KAAK;;AAGpB,QACE,AAAE,0CAAqB,YAAE,KAAK,iBAAiB,OAAO,CAAC,QAAC,UAAU;AAChE,wBAAI,UAAU,GAAE,mBAAa,CAAC,KAAK;;QAErC,AAAE,0CAAqB,sBAAC,KAAK,KAAK,OAAO,CAAC,QAAC,MAAM;AAC/C,4BAAY,CAAC,KAAK,EAAE,MAAM;;QAE5B,AAAE,0CAAqB,sBAAC,KAAK,MAAM,OAAO,CAAC,QAAC,MAAM;AAChD,6BAAa,CAAC,KAAK,EAAE,MAAM;;QAE7B,AAAE,0CAAqB,sBAAC,KAAK,OAAO,OAAO,CAAC,QAAC,MAAM;AACjD,6BAAa,CAAC,KAAK,EAAE,MAAM;;AAG/B,sBAAI,KAAK,YAAY,GAAE;AACrB,8BAAc,sBAAsB,sBAAC,KAAK,KAAK,OAAO,CAAC,QAAC,MAAM;AAC5D,+BAAa,CAAC,KAAK,EAAE,MAAM;;;;IAInC;mBAGI,KAA4B,EAAE,MAAwB;AAAE;AAC1D,YAAI,gBAAU,IAAI,MAAM,mBAAa,CAAC,KAAK;AAE3C,sBAAI,gBAAU,uBAAuB,GAAE;AAGrC,gBAAM,OAAO;AACb;;AAGF,cAAM,SAAS,CAAC,gBAAU,SAAS,gBAAe,YAAW,YAAC,QAAC,OAAO;AACpE,wBAAI,OAAO,GAAE,mBAAa,CAAC,KAAK;AAChC,gBAAO,YAAC,OAAO;;MAEnB;;oBAGI,KAA4B,EAAE,MAAwB;AAAE;AAC1D,YAAM,wBAAuB,MAAM,MAAM,OAAO;AAChD,sBAAI,oBAAoB,iBAAI,gBAAU,EAAI,KAAK,GAAE,mBAAa,CAAC;MACjE;;oBAEmB,KAA4B;AAC7C,sBAAI,gBAAU,EAAI,KAAK,GAAE;AACzB,sBAAU,GAAG,KAAK;AAClB,eAAW,QAAS,cAAO,EAAE;AAC3B,yBAAI,KAAK,EAAI,gBAAU,GAAE,KAAK,gBAAgB,GAAG,gBAAU,IAAI;;IAEnE;;AAIE,0BAAc,QAAQ;IACxB;;;IA9EM,oBAAc,OAAG,wCAAc;IACd,gBAAU;IACJ,aAAO;EA6EtC","file":"material_expansionpanel_set.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel_set: material_expansionpanel__material_expansionpanel_set
  };
});

//# sourceMappingURL=material_expansionpanel_set.ddc.js.map
