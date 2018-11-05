define(['dart_sdk', 'packages/angular_components/glyph/glyph.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/glyph/glyph', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, glyph$46scss$46css, view_type, change_detection, modules, glyph, angular, icon) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const glyph__glyph$46scss$46css$46shim = glyph$46scss$46css.glyph__glyph$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const glyph__glyph = glyph.glyph__glyph;
  const angular$46template = angular.angular$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const _root = Object.create(null);
  const glyph__glyph$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfGlyphComponent = () => (ComponentRefOfGlyphComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(glyph__glyph.GlyphComponent)))();
  let AppViewOfGlyphComponent = () => (AppViewOfGlyphComponent = dart.constFn(src__core__linker__app_view.AppView$(glyph__glyph.GlyphComponent)))();
  let AppViewAndintToAppViewOfGlyphComponent = () => (AppViewAndintToAppViewOfGlyphComponent = dart.constFn(dart.fnType(AppViewOfGlyphComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfGlyphComponent = () => (ComponentFactoryOfGlyphComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(glyph__glyph.GlyphComponent)))();
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template.styles$GlyphComponent*/get styles$GlyphComponent() {
      return [glyph__glyph$46scss$46css$46shim.styles];
    }
  });
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  glyph__glyph$46template.ViewGlyphComponent0 = class ViewGlyphComponent0 extends src__core__linker__app_view.AppView$(glyph__glyph.GlyphComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "i", parentRenderNode);
      this.createAttr(this[_el_1], "aria-hidden", "true");
      this[_el_1].className = "glyph-i";
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.useMaterialIconsExtended;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_1]), "material-icons", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let l = _ctx.iconName;
      let currVal_1 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_2][$text] = currVal_1;
        this[_expr_1] = currVal_1;
      }
    }
  };
  (glyph__glyph$46template.ViewGlyphComponent0.new = function(parentView, parentIndex) {
    this[_el_1] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    glyph__glyph$46template.ViewGlyphComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("glyph"));
    let t = glyph__glyph$46template.ViewGlyphComponent0._renderType;
    t == null ? glyph__glyph$46template.ViewGlyphComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/glyph/glyph.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, glyph__glyph$46template.styles$GlyphComponent) : t;
    this.setupComponentType(glyph__glyph$46template.ViewGlyphComponent0._renderType);
  }).prototype = glyph__glyph$46template.ViewGlyphComponent0.prototype;
  dart.addTypeTests(glyph__glyph$46template.ViewGlyphComponent0);
  dart.setMethodSignature(glyph__glyph$46template.ViewGlyphComponent0, () => ({
    __proto__: dart.getMethods(glyph__glyph$46template.ViewGlyphComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(glyph__glyph.GlyphComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(glyph__glyph$46template.ViewGlyphComponent0, () => ({
    __proto__: dart.getFields(glyph__glyph$46template.ViewGlyphComponent0.__proto__),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(glyph__glyph$46template.ViewGlyphComponent0, {
    /*glyph__glyph$46template.ViewGlyphComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  glyph__glyph$46template.viewFactory_GlyphComponent0 = function(parentView, parentIndex) {
    return new glyph__glyph$46template.ViewGlyphComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template.styles$GlyphComponentHost*/get styles$GlyphComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _GlyphComponent_0_5 = Symbol('_GlyphComponent_0_5');
  glyph__glyph$46template._ViewGlyphComponentHost0 = class _ViewGlyphComponentHost0 extends src__core__linker__app_view.AppView$(glyph__glyph.GlyphComponent) {
    build() {
      this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_GlyphComponent_0_5] = new glyph__glyph.GlyphComponent.new(this.rootEl);
      this[_compView_0].create(this[_GlyphComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfGlyphComponent()).new(0, this, this.rootEl, this[_GlyphComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (glyph__glyph$46template._ViewGlyphComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_GlyphComponent_0_5] = null;
    glyph__glyph$46template._ViewGlyphComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = glyph__glyph$46template._ViewGlyphComponentHost0.prototype;
  dart.addTypeTests(glyph__glyph$46template._ViewGlyphComponentHost0);
  dart.setMethodSignature(glyph__glyph$46template._ViewGlyphComponentHost0, () => ({
    __proto__: dart.getMethods(glyph__glyph$46template._ViewGlyphComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(glyph__glyph.GlyphComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(glyph__glyph$46template._ViewGlyphComponentHost0, () => ({
    __proto__: dart.getFields(glyph__glyph$46template._ViewGlyphComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_0_5]: dart.fieldType(glyph__glyph.GlyphComponent)
  }));
  glyph__glyph$46template.viewFactory_GlyphComponentHost0 = function(parentView, parentIndex) {
    return new glyph__glyph$46template._ViewGlyphComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template._GlyphComponentNgFactory*/get _GlyphComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfGlyphComponent()).new("glyph", dart.fn(glyph__glyph$46template.viewFactory_GlyphComponentHost0, AppViewAndintToAppViewOfGlyphComponent())));
    }
  });
  dart.copyProperties(glyph__glyph$46template, {
    get GlyphComponentNgFactory() {
      return glyph__glyph$46template._GlyphComponentNgFactory;
    }
  });
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  glyph__glyph$46template.initReflector = function() {
    if (dart.test(glyph__glyph$46template._visited)) {
      return;
    }
    glyph__glyph$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(glyph__glyph.GlyphComponent), glyph__glyph$46template.GlyphComponentNgFactory);
    angular$46template.initReflector();
    model__ui__icon$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/glyph/glyph.template.ddc", {
    "package:angular_components/glyph/glyph.template.dart": glyph__glyph$46template
  }, '{"version":3,"sourceRoot":"","sources":["glyph.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAwBoB,6CAAqB;YAAG,EAAS,uCAAM;;;;;;;;;;AAevD,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAa,UAAU,aAAY,CAAC;AACpC,sBAAgB,SAAO,CAAC,OAAO;AAC/B,UAAI,MAAc,aAAQ;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,qBAAU,CAAC,WAAK,EAAE,eAAe;AACjC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,mBAAO,GAAG,aAAY,CAAC;AACvB,iBAAK,SAAO,CAAC,aAAO;AACpB,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAA6B,OAAO,QAAG;AACvC,UAAM,YAAY,IAAI,yBAAyB;AAC/C,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,wBAAW,yBAAC,WAAK,GAAE,kBAAkB,SAAS;AAC9C,qBAAO,GAAG,SAAS;;AAErB,cAAmB,IAAI,SAAS;UAA1B,4BAA8B;AACpC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,qBAAO,OAAK,GAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;8DAnCoB,UAA2B,EAAE,WAAe;IALhD,WAAK;IACR,aAAO;IACf,aAAO;IACR,aAAO;AAEyD,yEAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAClK,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,mEAAW;gBAAX,uDAAW,GAAK,AAAQ,8CAAY,iBAAiB,CAAE,UAAQ,qCAAS,IAAG,kDAAkD,MAAO,2CAAiB,SAAS,EAAE,6CAAqB;AACrL,2BAAkB,CAAC,uDAAW;EAChC;;;;;;;;;;;;;;;MAL2B,uDAAW;;;;;iEAuCoB,UAA2B,EAAE,WAAe;AACtG,eAAO,+CAAmB,CAAC,UAAU,EAAE,WAAW;EACpD;;MAEoB,iDAAyB;YAAG;;;;;;;AAQ5C,uBAAW,OAAG,+CAAmB,CAAC,MAAM;AACxC,iBAAM,GAAG,iBAAW,OAAO;AAC3B,+BAAmB,OAAG,+BAAsB,CAAC,WAAM;AACnD,uBAAW,OAAO,CAAC,yBAAmB,EAAE,qBAAgB;AACxD,gBAAK,CAAC,WAAM;AACZ,iBAAO,oCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,yBAAmB;IAC1D;;AAIE,UAAK,UAAU;AACf,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;mEAvByB,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,yBAAmB;AAC+B,8EAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;qEA0BzG,UAA2B,EAAE,WAAe;AAC1G,eAAO,oDAAwB,CAAC,UAAU,EAAE,WAAW;EACzD;;MAE+C,gDAAwB;YAAG,gBAAM,wCAAgB,CAAC,SAAS,0GAA+B;;;;;AAEvI,YAAO,iDAAwB;IACjC;;;MAEI,gCAAQ;YAAG;;;;;AAEb,kBAAI,gCAAQ,GAAE;AACZ;;AAEF,uCAAW;AAEX,IAAO,oCAAiB,CAAC,0CAAc,EAAE,+CAAuB;AAChE,IAAM,gCAAa;AACnB,IAAM,wCAAa;EACrB","file":"glyph.template.ddc.js"}');
  // Exports:
  return {
    glyph__glyph$46template: glyph__glyph$46template
  };
});

//# sourceMappingURL=glyph.template.ddc.js.map
