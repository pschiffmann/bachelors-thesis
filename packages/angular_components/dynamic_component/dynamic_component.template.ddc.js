define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular/angular.template', 'packages/angular_components/model/ui/has_renderer.template'], function(dart_sdk, view_type, change_detection, modules, dynamic_component, angular, has_renderer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const dynamic_component__dynamic_component = dynamic_component.dynamic_component__dynamic_component;
  const angular$46template = angular.angular$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const _root = Object.create(null);
  const dynamic_component__dynamic_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfDynamicComponent = () => (AppViewOfDynamicComponent = dart.constFn(src__core__linker__app_view.AppView$(dynamic_component__dynamic_component.DynamicComponent)))();
  let AppViewAndintToAppViewOfDynamicComponent = () => (AppViewAndintToAppViewOfDynamicComponent = dart.constFn(dart.fnType(AppViewOfDynamicComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfDynamicComponent = () => (ComponentRefOfDynamicComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(dynamic_component__dynamic_component.DynamicComponent)))();
  let ComponentFactoryOfDynamicComponent = () => (ComponentFactoryOfDynamicComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(dynamic_component__dynamic_component.DynamicComponent)))();
  dart.defineLazy(dynamic_component__dynamic_component$46template, {
    /*dynamic_component__dynamic_component$46template.styles$DynamicComponent*/get styles$DynamicComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _TemplateRef_0_8 = Symbol('_TemplateRef_0_8');
  let const$;
  dynamic_component__dynamic_component$46template.ViewDynamicComponent0 = class ViewDynamicComponent0 extends src__core__linker__app_view.AppView$(dynamic_component__dynamic_component.DynamicComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      this[_TemplateRef_0_8] = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(dynamic_component__dynamic_component$46template.viewFactory_DynamicComponent1, AppViewAndintToAppViewOfDynamicComponent()));
      this.ctx.viewContainerRef = this[_appEl_0];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_TemplateRef_0_8] = null;
    dynamic_component__dynamic_component$46template.ViewDynamicComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("dynamic-component"));
    let t = dynamic_component__dynamic_component$46template.ViewDynamicComponent0._renderType;
    t == null ? dynamic_component__dynamic_component$46template.ViewDynamicComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/dynamic_component/dynamic_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, dynamic_component__dynamic_component$46template.styles$DynamicComponent) : t;
    this.setupComponentType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0._renderType);
  }).prototype = dynamic_component__dynamic_component$46template.ViewDynamicComponent0.prototype;
  dart.addTypeTests(dynamic_component__dynamic_component$46template.ViewDynamicComponent0);
  dart.setMethodSignature(dynamic_component__dynamic_component$46template.ViewDynamicComponent0, () => ({
    __proto__: dart.getMethods(dynamic_component__dynamic_component$46template.ViewDynamicComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(dynamic_component__dynamic_component.DynamicComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(dynamic_component__dynamic_component$46template.ViewDynamicComponent0, () => ({
    __proto__: dart.getFields(dynamic_component__dynamic_component$46template.ViewDynamicComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TemplateRef_0_8]: dart.fieldType(src__core__linker__template_ref.TemplateRef)
  }));
  dart.defineLazy(dynamic_component__dynamic_component$46template.ViewDynamicComponent0, {
    /*dynamic_component__dynamic_component$46template.ViewDynamicComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  dynamic_component__dynamic_component$46template.viewFactory_DynamicComponent0 = function(parentView, parentIndex) {
    return new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(parentView, parentIndex);
  };
  let const$0;
  dynamic_component__dynamic_component$46template._ViewDynamicComponent1 = class _ViewDynamicComponent1 extends src__core__linker__app_view.AppView$(dynamic_component__dynamic_component.DynamicComponent) {
    build() {
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (dynamic_component__dynamic_component$46template._ViewDynamicComponent1.new = function(parentView, parentIndex) {
    dynamic_component__dynamic_component$46template._ViewDynamicComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = dynamic_component__dynamic_component$46template.ViewDynamicComponent0._renderType;
  }).prototype = dynamic_component__dynamic_component$46template._ViewDynamicComponent1.prototype;
  dart.addTypeTests(dynamic_component__dynamic_component$46template._ViewDynamicComponent1);
  dart.setMethodSignature(dynamic_component__dynamic_component$46template._ViewDynamicComponent1, () => ({
    __proto__: dart.getMethods(dynamic_component__dynamic_component$46template._ViewDynamicComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(dynamic_component__dynamic_component.DynamicComponent), [])
  }));
  dynamic_component__dynamic_component$46template.viewFactory_DynamicComponent1 = function(parentView, parentIndex) {
    return new dynamic_component__dynamic_component$46template._ViewDynamicComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(dynamic_component__dynamic_component$46template, {
    /*dynamic_component__dynamic_component$46template.styles$DynamicComponentHost*/get styles$DynamicComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _DynamicComponent_0_8 = Symbol('_DynamicComponent_0_8');
  dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0 = class _ViewDynamicComponentHost0 extends src__core__linker__app_view.AppView$(dynamic_component__dynamic_component.DynamicComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this.rootEl);
      this[_DynamicComponent_0_8] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], this.projectableNodes);
      this.init0(this[_appEl_0]);
      return new (ComponentRefOfDynamicComponent()).new(0, this, this.rootEl, this[_DynamicComponent_0_8]);
    }
    detectChangesInternal() {
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8].ngOnDestroy();
    }
  };
  (dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.prototype;
  dart.addTypeTests(dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0);
  dart.setMethodSignature(dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0, () => ({
    __proto__: dart.getMethods(dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(dynamic_component__dynamic_component.DynamicComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0, () => ({
    __proto__: dart.getFields(dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent)
  }));
  dynamic_component__dynamic_component$46template.viewFactory_DynamicComponentHost0 = function(parentView, parentIndex) {
    return new dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(dynamic_component__dynamic_component$46template, {
    /*dynamic_component__dynamic_component$46template._DynamicComponentNgFactory*/get _DynamicComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDynamicComponent()).new("dynamic-component", dart.fn(dynamic_component__dynamic_component$46template.viewFactory_DynamicComponentHost0, AppViewAndintToAppViewOfDynamicComponent())));
    }
  });
  dart.copyProperties(dynamic_component__dynamic_component$46template, {
    get DynamicComponentNgFactory() {
      return dynamic_component__dynamic_component$46template._DynamicComponentNgFactory;
    }
  });
  dart.defineLazy(dynamic_component__dynamic_component$46template, {
    /*dynamic_component__dynamic_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dynamic_component__dynamic_component$46template.initReflector = function() {
    if (dart.test(dynamic_component__dynamic_component$46template._visited)) {
      return;
    }
    dynamic_component__dynamic_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(dynamic_component__dynamic_component.DynamicComponent), dynamic_component__dynamic_component$46template.DynamicComponentNgFactory);
    angular$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/dynamic_component/dynamic_component.template.ddc", {
    "package:angular_components/dynamic_component/dynamic_component.template.dart": dynamic_component__dynamic_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["dynamic_component.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA0BoB,uEAAuB;YAAG;;;;;;;;AAa1C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,YAAY,qDAAyB;AAC3C,sBAAgB,SAAO,CAAC,SAAS;AACjC,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,4BAAgB,OAAG,+CAAW,CAAC,cAAQ,EAAE,kIAA6B;AACtE,cAAG,iBAAiB,GAAG,cAAQ;AAC/B,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;IACV;;wFA1BsB,UAA2B,EAAE,WAAe;IAHpD,cAAQ;IACV,sBAAgB;AAE0C,mGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,6FAAW;gBAAX,iFAAW,GAAK,AAAQ,8CAAY,iBAAiB,CAAE,UAAQ,qCAAS,IAAG,0EAA0E,MAAO,2CAAiB,KAAK,EAAE,uEAAuB;AAC3M,2BAAkB,CAAC,iFAAW;EAChC;;;;;;;;;;;;;;MAL2B,iFAAW;;;;;2FA8BwB,UAA2B,EAAE,WAAe;AAC1G,eAAO,yEAAqB,CAAC,UAAU,EAAE,WAAW;EACtD;;;;AAQI,eAAI,CAAC,yDAAU;AACf,YAAO;IACT;;yFAPuB,UAA2B,EAAE,WAAe;AAAI,oGAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,sBAAa,GAAG,qEAAqB,YAAY;EACnD;;;;;;2FAQ8D,UAA2B,EAAE,WAAe;AAC1G,eAAO,0EAAsB,CAAC,UAAU,EAAE,WAAW;EACvD;;MAEoB,2EAA2B;YAAG;;;;;;;AAS9C,uBAAW,OAAG,yEAAqB,CAAC,MAAM;AAC1C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,WAAM;AAC9C,iCAAqB,OAAG,yDAAwB,wEAAC,gBAAgB,CAAU,8EAAmB,EAAE,aAAQ,YAAY,IAAG,iBAAW,IAAI,EAAE,cAAQ;AAChJ,uBAAW,OAAO,CAAC,2BAAqB,EAAE,qBAAgB;AAC1D,gBAAK,CAAC,cAAQ;AACd,iBAAO,sCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,2BAAqB;IAC5D;;AAIE,oBAAQ,2BAA2B;AACnC,uBAAW,cAAc;IAC3B;;AAIE,4BAAQ;;AACR,gCAAW;;AACX,iCAAqB,YAAY;IACnC;;6FAvB2B,UAA2B,EAAE,WAAe;IAHjD,iBAAW;IACnB,cAAQ;IACG,2BAAqB;AAC6B,wGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;+FA0BvG,UAA2B,EAAE,WAAe;AAC9G,eAAO,8EAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;MAEiD,0EAA0B;YAAG,gBAAM,0CAAgB,CAAC,qBAAqB,sIAAiC;;;;;AAEzJ,YAAO,2EAA0B;IACnC;;;MAEI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAO,oCAAiB,CAAC,oEAAgB,EAAE,yEAAyB;AACpE,IAAM,gCAAa;AACnB,IAAM,gDAAa;EACrB","file":"dynamic_component.template.ddc.js"}');
  // Exports:
  return {
    dynamic_component__dynamic_component$46template: dynamic_component__dynamic_component$46template
  };
});

//# sourceMappingURL=dynamic_component.template.ddc.js.map
