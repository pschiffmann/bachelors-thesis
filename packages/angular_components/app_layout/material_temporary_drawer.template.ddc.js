define(['dart_sdk', 'packages/angular_components/app_layout/material_temporary_drawer.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/app_layout/material_temporary_drawer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/app_layout/material_drawer_base.template', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template'], function(dart_sdk, material_temporary_drawer$46scss$46css, view_type, change_detection, modules, material_temporary_drawer, deferred_content_aware, material_drawer_base, angular, deferred_content_aware$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_layout__material_temporary_drawer$46scss$46css$46shim = material_temporary_drawer$46scss$46css.app_layout__material_temporary_drawer$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const app_layout__material_temporary_drawer = material_temporary_drawer.app_layout__material_temporary_drawer;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const app_layout__material_drawer_base$46template = material_drawer_base.app_layout__material_drawer_base$46template;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const _root = Object.create(null);
  const app_layout__material_temporary_drawer$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfMaterialTemporaryDrawerComponent = () => (ComponentRefOfMaterialTemporaryDrawerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  let AppViewOfMaterialTemporaryDrawerComponent = () => (AppViewOfMaterialTemporaryDrawerComponent = dart.constFn(src__core__linker__app_view.AppView$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  let AppViewAndintToAppViewOfMaterialTemporaryDrawerComponent = () => (AppViewAndintToAppViewOfMaterialTemporaryDrawerComponent = dart.constFn(dart.fnType(AppViewOfMaterialTemporaryDrawerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTemporaryDrawerComponent = () => (ComponentFactoryOfMaterialTemporaryDrawerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  dart.defineLazy(app_layout__material_temporary_drawer$46template, {
    /*app_layout__material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponent*/get styles$MaterialTemporaryDrawerComponent() {
      return [app_layout__material_temporary_drawer$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  let const$;
  app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0 = class ViewMaterialTemporaryDrawerComponent0 extends src__core__linker__app_view.AppView$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = "drawer-content";
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'toggle')));
      return null;
    }
    [_handle_click_0_0]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    detectHostChanges(firstCheck) {
      let currVal_0 = this.ctx.hostMatDrawerCollapsed;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this.rootEl, "mat-drawer-collapsed", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.ctx.hostMatDrawerExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateElemClass(this.rootEl, "mat-drawer-expanded", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-drawer"));
    let t = app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._renderType;
    t == null ? app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/app_layout/material_temporary_drawer.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, app_layout__material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponent) : t;
    this.setupComponentType(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._renderType);
  }).prototype = app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.prototype;
  dart.addTypeTests(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0);
  dart.setMethodSignature(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, () => ({
    __proto__: dart.getMethods(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent), []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, () => ({
    __proto__: dart.getFields(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, {
    /*app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_layout__material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponent0 = function(parentView, parentIndex) {
    return new app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_layout__material_temporary_drawer$46template, {
    /*app_layout__material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponentHost*/get styles$MaterialTemporaryDrawerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialTemporaryDrawerComponent_0_5 = Symbol('_MaterialTemporaryDrawerComponent_0_5');
  app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0 = class _ViewMaterialTemporaryDrawerComponentHost0 extends src__core__linker__app_view.AppView$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent) {
    build() {
      this[_compView_0] = new app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTemporaryDrawerComponent_0_5] = new app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent.new();
      this[_compView_0].create(this[_MaterialTemporaryDrawerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTemporaryDrawerComponent()).new(0, this, this.rootEl, this[_MaterialTemporaryDrawerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this[_MaterialTemporaryDrawerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTemporaryDrawerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTemporaryDrawerComponent_0_5] = null;
    app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.prototype;
  dart.addTypeTests(app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0);
  dart.setMethodSignature(app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, () => ({
    __proto__: dart.getMethods(app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, () => ({
    __proto__: dart.getFields(app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0),
    [_MaterialTemporaryDrawerComponent_0_5]: dart.fieldType(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent)
  }));
  app_layout__material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0 = function(parentView, parentIndex) {
    return new app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_layout__material_temporary_drawer$46template, {
    /*app_layout__material_temporary_drawer$46template._MaterialTemporaryDrawerComponentNgFactory*/get _MaterialTemporaryDrawerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTemporaryDrawerComponent()).new("material-drawer[temporary]", dart.fn(app_layout__material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0, AppViewAndintToAppViewOfMaterialTemporaryDrawerComponent())));
    }
  });
  dart.copyProperties(app_layout__material_temporary_drawer$46template, {
    get MaterialTemporaryDrawerComponentNgFactory() {
      return app_layout__material_temporary_drawer$46template._MaterialTemporaryDrawerComponentNgFactory;
    }
  });
  dart.defineLazy(app_layout__material_temporary_drawer$46template, {
    /*app_layout__material_temporary_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_layout__material_temporary_drawer$46template.initReflector = function() {
    if (dart.test(app_layout__material_temporary_drawer$46template._visited)) {
      return;
    }
    app_layout__material_temporary_drawer$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent), app_layout__material_temporary_drawer$46template.MaterialTemporaryDrawerComponentNgFactory);
    app_layout__material_drawer_base$46template.initReflector();
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/app_layout/material_temporary_drawer.template.ddc", {
    "package:angular_components/app_layout/material_temporary_drawer.template.dart": app_layout__material_temporary_drawer$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_temporary_drawer.template.dart"],"names":[],"mappings":"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","file":"material_temporary_drawer.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_temporary_drawer$46template: app_layout__material_temporary_drawer$46template
  };
});

//# sourceMappingURL=material_temporary_drawer.template.ddc.js.map
