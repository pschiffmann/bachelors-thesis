define(['dart_sdk', 'packages/angular_components/reorder_list/reorder_list.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/reorder_list/reorder_list', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular/angular.template', 'packages/angular_components/reorder_list/reorder_events.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/keyboard/keyboard.template'], function(dart_sdk, reorder_list$46scss$46css, view_type, change_detection, reorder_list, modules, ng_zone, directive_change_detector, angular, reorder_events, disposer, keyboard) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reorder_list__reorder_list$46scss$46css$46shim = reorder_list$46scss$46css.reorder_list__reorder_list$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const reorder_list__reorder_list = reorder_list.reorder_list__reorder_list;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const angular$46template = angular.angular$46template;
  const reorder_list__reorder_events$46template = reorder_events.reorder_list__reorder_events$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const utils__keyboard__keyboard$46template = keyboard.utils__keyboard__keyboard$46template;
  const _root = Object.create(null);
  const reorder_list__reorder_list$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfReorderItemDirective = () => (JSArrayOfReorderItemDirective = dart.constFn(_interceptors.JSArray$(reorder_list__reorder_list.ReorderItemDirective)))();
  let ComponentRefOfReorderListComponent = () => (ComponentRefOfReorderListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(reorder_list__reorder_list.ReorderListComponent)))();
  let AppViewOfReorderListComponent = () => (AppViewOfReorderListComponent = dart.constFn(src__core__linker__app_view.AppView$(reorder_list__reorder_list.ReorderListComponent)))();
  let AppViewAndintToAppViewOfReorderListComponent = () => (AppViewAndintToAppViewOfReorderListComponent = dart.constFn(dart.fnType(AppViewOfReorderListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfReorderListComponent = () => (ComponentFactoryOfReorderListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(reorder_list__reorder_list.ReorderListComponent)))();
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template.styles$ReorderListComponent*/get styles$ReorderListComponent() {
      return [reorder_list__reorder_list$46scss$46css$46shim.styles];
    }
  });
  const _el_1 = Symbol('_el_1');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  reorder_list__reorder_list$46template.ViewReorderListComponent0 = class ViewReorderListComponent0 extends src__core__linker__app_view.AppView$(reorder_list__reorder_list.ReorderListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      this.project(parentRenderNode, 0);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_1].className = "placeholder";
      this.addShimC(this[_el_1]);
      this.project(this[_el_1], 1);
      this.ctx.placeholder = this[_el_1];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = !dart.test(_ctx.showPlaceholder);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(this[_el_1], "hidden", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    detectHostChanges(firstCheck) {
      let currVal_1 = this.ctx.verticalItems;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateElemClass(this.rootEl, "vertical", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.ctx.multiSelect;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateElemClass(this.rootEl, "multiselect", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (reorder_list__reorder_list$46template.ViewReorderListComponent0.new = function(parentView, parentIndex) {
    this[_el_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    reorder_list__reorder_list$46template.ViewReorderListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("reorder-list"));
    this.rootEl.className = reorder_list__reorder_list.ReorderListComponent.hostClass;
    this.createAttr(this.rootEl, "role", reorder_list__reorder_list.ReorderListComponent.hostRole);
    let t = reorder_list__reorder_list$46template.ViewReorderListComponent0._renderType;
    t == null ? reorder_list__reorder_list$46template.ViewReorderListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/reorder_list/reorder_list.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, reorder_list__reorder_list$46template.styles$ReorderListComponent) : t;
    this.setupComponentType(reorder_list__reorder_list$46template.ViewReorderListComponent0._renderType);
  }).prototype = reorder_list__reorder_list$46template.ViewReorderListComponent0.prototype;
  dart.addTypeTests(reorder_list__reorder_list$46template.ViewReorderListComponent0);
  dart.setMethodSignature(reorder_list__reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getMethods(reorder_list__reorder_list$46template.ViewReorderListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(reorder_list__reorder_list.ReorderListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(reorder_list__reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list$46template.ViewReorderListComponent0.__proto__),
    [_el_1]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(reorder_list__reorder_list$46template.ViewReorderListComponent0, {
    /*reorder_list__reorder_list$46template.ViewReorderListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  reorder_list__reorder_list$46template.viewFactory_ReorderListComponent0 = function(parentView, parentIndex) {
    return new reorder_list__reorder_list$46template.ViewReorderListComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template.styles$ReorderListComponentHost*/get styles$ReorderListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _ReorderListComponent_0_5 = Symbol('_ReorderListComponent_0_5');
  reorder_list__reorder_list$46template._ViewReorderListComponentHost0 = class _ViewReorderListComponentHost0 extends src__core__linker__app_view.AppView$(reorder_list__reorder_list.ReorderListComponent) {
    build() {
      this[_compView_0] = new reorder_list__reorder_list$46template.ViewReorderListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ReorderListComponent_0_5] = new reorder_list__reorder_list.ReorderListComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_ReorderListComponent_0_5].items = JSArrayOfReorderItemDirective().of([]);
      this[_compView_0].create(this[_ReorderListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfReorderListComponent()).new(0, this, this.rootEl, this[_ReorderListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(reorder_list__reorder_list.ReorderListComponent) && 0 === nodeIndex) {
        return this[_ReorderListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_ReorderListComponent_0_5].ngOnDestroy();
    }
  };
  (reorder_list__reorder_list$46template._ViewReorderListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ReorderListComponent_0_5] = null;
    reorder_list__reorder_list$46template._ViewReorderListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = reorder_list__reorder_list$46template._ViewReorderListComponentHost0.prototype;
  dart.addTypeTests(reorder_list__reorder_list$46template._ViewReorderListComponentHost0);
  dart.setMethodSignature(reorder_list__reorder_list$46template._ViewReorderListComponentHost0, () => ({
    __proto__: dart.getMethods(reorder_list__reorder_list$46template._ViewReorderListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(reorder_list__reorder_list.ReorderListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(reorder_list__reorder_list$46template._ViewReorderListComponentHost0, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list$46template._ViewReorderListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(reorder_list__reorder_list$46template.ViewReorderListComponent0),
    [_ReorderListComponent_0_5]: dart.fieldType(reorder_list__reorder_list.ReorderListComponent)
  }));
  reorder_list__reorder_list$46template.viewFactory_ReorderListComponentHost0 = function(parentView, parentIndex) {
    return new reorder_list__reorder_list$46template._ViewReorderListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template._ReorderListComponentNgFactory*/get _ReorderListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfReorderListComponent()).new("reorder-list", dart.fn(reorder_list__reorder_list$46template.viewFactory_ReorderListComponentHost0, AppViewAndintToAppViewOfReorderListComponent())));
    }
  });
  dart.copyProperties(reorder_list__reorder_list$46template, {
    get ReorderListComponentNgFactory() {
      return reorder_list__reorder_list$46template._ReorderListComponentNgFactory;
    }
  });
  reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd = class ReorderItemDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.hostDraggable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(el, "draggable", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
  };
  (reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd.__proto__.new.call(this);
  }).prototype = reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd.prototype;
  dart.addTypeTests(reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd);
  const instance$ = Symbol("ReorderItemDirectiveNgCd.instance");
  dart.setFieldSignature(reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(reorder_list__reorder_list.ReorderItemDirective),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  reorder_list__reorder_list$46template.initReflector = function() {
    if (dart.test(reorder_list__reorder_list$46template._visited)) {
      return;
    }
    reorder_list__reorder_list$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(reorder_list__reorder_list.ReorderListComponent), reorder_list__reorder_list$46template.ReorderListComponentNgFactory);
    angular$46template.initReflector();
    reorder_list__reorder_events$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    utils__keyboard__keyboard$46template.initReflector();
    reorder_list__reorder_events$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_list.template.ddc", {
    "package:angular_components/reorder_list/reorder_list.template.dart": reorder_list__reorder_list$46template
  }, '{"version":3,"sourceRoot":"","sources":["reorder_list.template.dart"],"names":[],"mappings":"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","file":"reorder_list.template.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_list$46template: reorder_list__reorder_list$46template
  };
});

//# sourceMappingURL=reorder_list.template.ddc.js.map
