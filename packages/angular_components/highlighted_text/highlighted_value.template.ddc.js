define(['dart_sdk', 'packages/angular_components/highlighted_text/highlighted_text.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/highlighted_text/highlighted_value', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular_components/model/ui/highlight_provider', 'packages/angular/angular.template', 'packages/angular_components/highlighted_text/highlighted_text.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/highlight_provider.template', 'packages/angular_components/model/ui/highlighted_text_model.template'], function(dart_sdk, highlighted_text$46scss$46css, view_type, change_detection, modules, highlighted_value, highlighted_text_model, highlight_provider, angular, highlighted_text, has_renderer, highlight_provider$, highlighted_text_model$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const highlighted_text__highlighted_text$46scss$46css$46shim = highlighted_text$46scss$46css.highlighted_text__highlighted_text$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const highlighted_text__highlighted_value = highlighted_value.highlighted_text__highlighted_value;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const model__ui__highlight_provider = highlight_provider.model__ui__highlight_provider;
  const angular$46template = angular.angular$46template;
  const highlighted_text__highlighted_text$46template = highlighted_text.highlighted_text__highlighted_text$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const model__ui__highlight_provider$46template = highlight_provider$.model__ui__highlight_provider$46template;
  const model__ui__highlighted_text_model$46template = highlighted_text_model$.model__ui__highlighted_text_model$46template;
  const _root = Object.create(null);
  const highlighted_text__highlighted_value$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHighlightedValueComponent = () => (AppViewOfHighlightedValueComponent = dart.constFn(src__core__linker__app_view.AppView$(highlighted_text__highlighted_value.HighlightedValueComponent)))();
  let AppViewAndintToAppViewOfHighlightedValueComponent = () => (AppViewAndintToAppViewOfHighlightedValueComponent = dart.constFn(dart.fnType(AppViewOfHighlightedValueComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHighlightedValueComponent = () => (ComponentRefOfHighlightedValueComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_value.HighlightedValueComponent)))();
  let ComponentFactoryOfHighlightedValueComponent = () => (ComponentFactoryOfHighlightedValueComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(highlighted_text__highlighted_value.HighlightedValueComponent)))();
  dart.defineLazy(highlighted_text__highlighted_value$46template, {
    /*highlighted_text__highlighted_value$46template.styles$HighlightedValueComponent*/get styles$HighlightedValueComponent() {
      return [highlighted_text__highlighted_text$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0 = class ViewHighlightedValueComponent0 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_value.HighlightedValueComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponent1, AppViewAndintToAppViewOfHighlightedValueComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.segments;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("highlight-value"));
    let t = highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0._renderType;
    t == null ? highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/highlighted_text/highlighted_value.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, highlighted_text__highlighted_value$46template.styles$HighlightedValueComponent) : t;
    this.setupComponentType(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0._renderType);
  }).prototype = highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.prototype;
  dart.addTypeTests(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0);
  dart.setMethodSignature(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_value.HighlightedValueComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0, {
    /*highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponent0 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _expr_1 = Symbol('_expr_1');
  highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1 = class _ViewHighlightedValueComponent1 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_value.HighlightedValueComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "text-segment";
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_segment = model__ui__highlighted_text_model.HighlightedTextSegment._check(this.locals[$_get]("$implicit"));
      let currVal_0 = local_segment.isHighlighted;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "segment-highlight", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_segment.text);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_1][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0._renderType;
  }).prototype = highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.prototype;
  dart.addTypeTests(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1);
  dart.setMethodSignature(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_value.HighlightedValueComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponent1 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(highlighted_text__highlighted_value$46template, {
    /*highlighted_text__highlighted_value$46template.styles$HighlightedValueComponentHost*/get styles$HighlightedValueComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HighlightedValueComponent_0_5 = Symbol('_HighlightedValueComponent_0_5');
  highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0 = class _ViewHighlightedValueComponentHost0 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_value.HighlightedValueComponent) {
    build() {
      this[_compView_0] = new highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HighlightedValueComponent_0_5] = new highlighted_text__highlighted_value.HighlightedValueComponent.new(model__ui__highlight_provider.HighlightProvider._check(this.injectorGet(dart.wrapType(model__ui__highlight_provider.HighlightProvider), this.viewData.parentIndex)));
      this[_compView_0].create(this[_HighlightedValueComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHighlightedValueComponent()).new(0, this, this.rootEl, this[_HighlightedValueComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HighlightedValueComponent_0_5] = null;
    highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.prototype;
  dart.addTypeTests(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0);
  dart.setMethodSignature(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_value.HighlightedValueComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0),
    [_HighlightedValueComponent_0_5]: dart.fieldType(highlighted_text__highlighted_value.HighlightedValueComponent)
  }));
  highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponentHost0 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(highlighted_text__highlighted_value$46template, {
    /*highlighted_text__highlighted_value$46template._HighlightedValueComponentNgFactory*/get _HighlightedValueComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHighlightedValueComponent()).new("highlight-value", dart.fn(highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponentHost0, AppViewAndintToAppViewOfHighlightedValueComponent())));
    }
  });
  dart.copyProperties(highlighted_text__highlighted_value$46template, {
    get HighlightedValueComponentNgFactory() {
      return highlighted_text__highlighted_value$46template._HighlightedValueComponentNgFactory;
    }
  });
  dart.defineLazy(highlighted_text__highlighted_value$46template, {
    /*highlighted_text__highlighted_value$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  highlighted_text__highlighted_value$46template.initReflector = function() {
    if (dart.test(highlighted_text__highlighted_value$46template._visited)) {
      return;
    }
    highlighted_text__highlighted_value$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(highlighted_text__highlighted_value.HighlightedValueComponent), highlighted_text__highlighted_value$46template.HighlightedValueComponentNgFactory);
    angular$46template.initReflector();
    highlighted_text__highlighted_text$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    model__ui__highlight_provider$46template.initReflector();
    model__ui__highlighted_text_model$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_value.template.ddc", {
    "package:angular_components/highlighted_text/highlighted_value.template.dart": highlighted_text__highlighted_value$46template
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_value.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAkCoB,+EAAgC;YAAG,EAAS,6DAAM;;;;;;;;;AAclE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAa,UAAU,aAAY,CAAC;AACpC,sBAAgB,SAAO,CAAC,OAAO;AAC/B,UAAM,YAAY,qDAAyB;AAC3C,sBAAgB,SAAO,CAAC,SAAS;AACjC,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,mJAAsC;AAC3F,sBAAU,OAAG,yCAAa,CAAC,cAAQ,EAAE,gBAAgB;AACrD,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAwC,OAAO,QAAG;AAClD,UAAM,YAAY,IAAI,SAAS;AAC/B,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,qBAAK,8CAAoB,eAAe,GAAE;AACxC,wBAAU,UAAU;;AAEtB,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;IACV;;gGArC+B,UAA2B,EAAE,WAAe;IAJ7D,cAAQ;IACR,gBAAU;IACpB,aAAO;AAEoE,2GAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC/K,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,qGAAW;gBAAX,yFAAW,GAAK,AAAQ,8CAAY,iBAAiB,CAAE,UAAS,qCAAS,IAAG,yEAAyE,MAAO,2CAAiB,SAAS,EAAE,+EAAgC;AACxN,2BAAkB,CAAC,yFAAW;EAChC;;;;;;;;;;;;;;;MAL2B,yFAAW;;;;;mGAyC0C,UAA2B,EAAE,WAAe;AAC5H,eAAO,iFAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;;;;AAYI,UAAI,MAAc,aAAQ;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,mBAAO,GAAG,aAAY,CAAC;AACvB,iBAAK,SAAO,CAAC,aAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAsC,gFAAgB,WAAM,QAAC;AAC7D,UAAM,YAAY,aAAa,cAAc;AAC7C,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,wBAAW,yBAAC,WAAK,GAAE,qBAAqB,SAAS;AACjD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,AAAQ,8CAAY,CAAC,aAAa,KAAK;AACzD,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;iGA5BgC,UAA2B,EAAE,WAAe;IAJ5D,WAAK;IACR,aAAO;IACf,aAAO;IACR,aAAO;AACqE,4GAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACjM,sBAAa,GAAG,6EAA8B,YAAY;EAC5D;;;;;;;;;;;;;;mGA6BgF,UAA2B,EAAE,WAAe;AAC5H,eAAO,kFAA+B,CAAC,UAAU,EAAE,WAAW;EAChE;;MAEoB,mFAAoC;YAAG;;;;;;;AAQvD,uBAAW,OAAG,iFAA8B,CAAC,MAAM;AACnD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,0CAA8B,OAAG,iEAAiC,wDAAC,gBAAgB,CAAU,8DAAiB,EAAE,aAAQ,YAAY;AACpI,uBAAW,OAAO,CAAC,oCAA8B,EAAE,qBAAgB;AACnE,gBAAK,CAAC,WAAM;AACZ,iBAAO,+CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,oCAA8B;IACrE;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;qGAnBoC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,oCAA8B;AACoB,gHAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;uGAsB9F,UAA2B,EAAE,WAAe;AAChI,eAAO,sFAAmC,CAAC,UAAU,EAAE,WAAW;EACpE;;MAE0D,kFAAmC;YAAG,gBAAM,mDAAgB,CAAC,mBAAmB,uJAA0C;;;;;AAElL,YAAO,mFAAmC;IAC5C;;;MAEI,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAO,oCAAiB,CAAC,4EAAyB,EAAE,iFAAkC;AACtF,IAAM,gCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,0DAAa;EACrB","file":"highlighted_value.template.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_value$46template: highlighted_text__highlighted_value$46template
  };
});

//# sourceMappingURL=highlighted_value.template.ddc.js.map
