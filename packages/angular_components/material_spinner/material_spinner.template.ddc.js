define(['dart_sdk', 'packages/angular_components/material_spinner/material_spinner.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular/angular.template'], function(dart_sdk, material_spinner$46scss$46css, view_type, change_detection, modules, material_spinner, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_spinner__material_spinner$46scss$46css$46shim = material_spinner$46scss$46css.material_spinner__material_spinner$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_spinner__material_spinner = material_spinner.material_spinner__material_spinner;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const material_spinner__material_spinner$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfMaterialSpinnerComponent = () => (ComponentRefOfMaterialSpinnerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_spinner__material_spinner.MaterialSpinnerComponent)))();
  let AppViewOfMaterialSpinnerComponent = () => (AppViewOfMaterialSpinnerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_spinner__material_spinner.MaterialSpinnerComponent)))();
  let AppViewAndintToAppViewOfMaterialSpinnerComponent = () => (AppViewAndintToAppViewOfMaterialSpinnerComponent = dart.constFn(dart.fnType(AppViewOfMaterialSpinnerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialSpinnerComponent = () => (ComponentFactoryOfMaterialSpinnerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_spinner__material_spinner.MaterialSpinnerComponent)))();
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template.styles$MaterialSpinnerComponent*/get styles$MaterialSpinnerComponent() {
      return [material_spinner__material_spinner$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  let const$;
  material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0 = class ViewMaterialSpinnerComponent0 extends src__core__linker__app_view.AppView$(material_spinner__material_spinner.MaterialSpinnerComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = "spinner";
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = "circle left";
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = "circle right";
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_3].className = "circle gap";
      this.addShimC(this[_el_3]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-spinner"));
    let t = material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._renderType;
    t == null ? material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_spinner/material_spinner.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_spinner__material_spinner$46template.styles$MaterialSpinnerComponent) : t;
    this.setupComponentType(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._renderType);
  }).prototype = material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.prototype;
  dart.addTypeTests(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0);
  dart.setMethodSignature(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0, () => ({
    __proto__: dart.getMethods(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_spinner__material_spinner.MaterialSpinnerComponent), [])
  }));
  dart.setFieldSignature(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0, () => ({
    __proto__: dart.getFields(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0, {
    /*material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_spinner__material_spinner$46template.viewFactory_MaterialSpinnerComponent0 = function(parentView, parentIndex) {
    return new material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template.styles$MaterialSpinnerComponentHost*/get styles$MaterialSpinnerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialSpinnerComponent_0_5 = Symbol('_MaterialSpinnerComponent_0_5');
  material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0 = class _ViewMaterialSpinnerComponentHost0 extends src__core__linker__app_view.AppView$(material_spinner__material_spinner.MaterialSpinnerComponent) {
    build() {
      this[_compView_0] = new material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSpinnerComponent_0_5] = new material_spinner__material_spinner.MaterialSpinnerComponent.new();
      this[_compView_0].create(this[_MaterialSpinnerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialSpinnerComponent()).new(0, this, this.rootEl, this[_MaterialSpinnerComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSpinnerComponent_0_5] = null;
    material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.prototype;
  dart.addTypeTests(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0);
  dart.setMethodSignature(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0, () => ({
    __proto__: dart.getMethods(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_spinner__material_spinner.MaterialSpinnerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0, () => ({
    __proto__: dart.getFields(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0),
    [_MaterialSpinnerComponent_0_5]: dart.fieldType(material_spinner__material_spinner.MaterialSpinnerComponent)
  }));
  material_spinner__material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0 = function(parentView, parentIndex) {
    return new material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template._MaterialSpinnerComponentNgFactory*/get _MaterialSpinnerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSpinnerComponent()).new("material-spinner", dart.fn(material_spinner__material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0, AppViewAndintToAppViewOfMaterialSpinnerComponent())));
    }
  });
  dart.copyProperties(material_spinner__material_spinner$46template, {
    get MaterialSpinnerComponentNgFactory() {
      return material_spinner__material_spinner$46template._MaterialSpinnerComponentNgFactory;
    }
  });
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_spinner__material_spinner$46template.initReflector = function() {
    if (dart.test(material_spinner__material_spinner$46template._visited)) {
      return;
    }
    material_spinner__material_spinner$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_spinner__material_spinner.MaterialSpinnerComponent), material_spinner__material_spinner$46template.MaterialSpinnerComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_spinner/material_spinner.template.ddc", {
    "package:angular_components/material_spinner/material_spinner.template.dart": material_spinner__material_spinner$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_spinner.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;MAqBoB,6EAA+B;YAAG,EAAS,6DAAM;;;;;;;;;;AAejE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,aAAQ;AAC1B,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AAChD,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;8FAxB8B,UAA2B,EAAE,WAAe;IALvD,WAAK;IACL,WAAK;IACL,WAAK;IACL,WAAK;AAEsD,yGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAC5K,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,mGAAW;gBAAX,uFAAW,GAAK,AAAQ,8CAAY,iBAAiB,CAAE,UAAQ,qCAAS,IAAG,wEAAwE,MAAO,2CAAiB,SAAS,EAAE,6EAA+B;AACrN,2BAAkB,CAAC,uFAAW;EAChC;;;;;;;;;;;;;;MAL2B,uFAAW;;;;;iGA4BwC,UAA2B,EAAE,WAAe;AAC1H,eAAO,+EAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;MAEoB,iFAAmC;YAAG;;;;;;;AAQtD,uBAAW,OAAG,+EAA6B,CAAC,MAAM;AAClD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,yCAA6B,OAAG,+DAAgC;AAChE,uBAAW,OAAO,CAAC,mCAA6B,EAAE,qBAAgB;AAClE,gBAAK,CAAC,WAAM;AACZ,iBAAO,8CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,mCAA6B;IACpE;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;mGAnBmC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,mCAA6B;AACqB,8GAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;qGAsB/F,UAA2B,EAAE,WAAe;AAC9H,eAAO,oFAAkC,CAAC,UAAU,EAAE,WAAW;EACnE;;MAEyD,gFAAkC;YAAG,gBAAM,kDAAgB,CAAC,oBAAoB,oJAAyC;;;;;AAEhL,YAAO,iFAAkC;IAC3C;;;MAEI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAO,oCAAiB,CAAC,0EAAwB,EAAE,+EAAiC;AACpF,IAAM,gCAAa;EACrB","file":"material_spinner.template.ddc.js"}');
  // Exports:
  return {
    material_spinner__material_spinner$46template: material_spinner__material_spinner$46template
  };
});

//# sourceMappingURL=material_spinner.template.ddc.js.map
