define(['dart_sdk', 'packages/angular_components/app_layout/material_stackable_drawer.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/app_layout/material_stackable_drawer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/app_layout/material_temporary_drawer.template', 'packages/angular_components/content/deferred_content_aware.template'], function(dart_sdk, material_stackable_drawer$46scss$46css, view_type, change_detection, modules, material_stackable_drawer, deferred_content_aware, angular, material_temporary_drawer, deferred_content_aware$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_layout__material_stackable_drawer$46scss$46css$46shim = material_stackable_drawer$46scss$46css.app_layout__material_stackable_drawer$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const app_layout__material_stackable_drawer = material_stackable_drawer.app_layout__material_stackable_drawer;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const angular$46template = angular.angular$46template;
  const app_layout__material_temporary_drawer$46template = material_temporary_drawer.app_layout__material_temporary_drawer$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const _root = Object.create(null);
  const app_layout__material_stackable_drawer$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfMaterialStackableDrawerComponent = () => (ComponentRefOfMaterialStackableDrawerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent)))();
  let AppViewOfMaterialStackableDrawerComponent = () => (AppViewOfMaterialStackableDrawerComponent = dart.constFn(src__core__linker__app_view.AppView$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent)))();
  let AppViewAndintToAppViewOfMaterialStackableDrawerComponent = () => (AppViewAndintToAppViewOfMaterialStackableDrawerComponent = dart.constFn(dart.fnType(AppViewOfMaterialStackableDrawerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialStackableDrawerComponent = () => (ComponentFactoryOfMaterialStackableDrawerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent)))();
  dart.defineLazy(app_layout__material_stackable_drawer$46template, {
    /*app_layout__material_stackable_drawer$46template.styles$MaterialStackableDrawerComponent*/get styles$MaterialStackableDrawerComponent() {
      return [app_layout__material_stackable_drawer$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  let const$;
  app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0 = class ViewMaterialStackableDrawerComponent0 extends src__core__linker__app_view.AppView$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent) {
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
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(this[_el_0], "drawer-content-expanded", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    [_handle_click_0_0]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    detectHostChanges(firstCheck) {
      let currVal_1 = this.ctx.hostMatDrawerCollapsed;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateElemClass(this.rootEl, "mat-drawer-collapsed", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.ctx.hostMatDrawerExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateElemClass(this.rootEl, "mat-drawer-expanded", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-drawer"));
    let t = app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._renderType;
    t == null ? app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/app_layout/material_stackable_drawer.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, app_layout__material_stackable_drawer$46template.styles$MaterialStackableDrawerComponent) : t;
    this.setupComponentType(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._renderType);
  }).prototype = app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.prototype;
  dart.addTypeTests(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0);
  dart.setMethodSignature(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, () => ({
    __proto__: dart.getMethods(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, () => ({
    __proto__: dart.getFields(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, {
    /*app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_layout__material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponent0 = function(parentView, parentIndex) {
    return new app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_layout__material_stackable_drawer$46template, {
    /*app_layout__material_stackable_drawer$46template.styles$MaterialStackableDrawerComponentHost*/get styles$MaterialStackableDrawerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialStackableDrawerComponent_0_5 = Symbol('_MaterialStackableDrawerComponent_0_5');
  app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0 = class _ViewMaterialStackableDrawerComponentHost0 extends src__core__linker__app_view.AppView$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent) {
    build() {
      this[_compView_0] = new app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialStackableDrawerComponent_0_5] = new app_layout__material_stackable_drawer.MaterialStackableDrawerComponent.new(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent._check(this.injectorGet(dart.wrapType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialStackableDrawerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialStackableDrawerComponent()).new(0, this, this.rootEl, this[_MaterialStackableDrawerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this[_MaterialStackableDrawerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialStackableDrawerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialStackableDrawerComponent_0_5] = null;
    app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.prototype;
  dart.addTypeTests(app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0);
  dart.setMethodSignature(app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, () => ({
    __proto__: dart.getMethods(app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, () => ({
    __proto__: dart.getFields(app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0),
    [_MaterialStackableDrawerComponent_0_5]: dart.fieldType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent)
  }));
  app_layout__material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponentHost0 = function(parentView, parentIndex) {
    return new app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_layout__material_stackable_drawer$46template, {
    /*app_layout__material_stackable_drawer$46template._MaterialStackableDrawerComponentNgFactory*/get _MaterialStackableDrawerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialStackableDrawerComponent()).new("material-drawer[stackable]", dart.fn(app_layout__material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponentHost0, AppViewAndintToAppViewOfMaterialStackableDrawerComponent())));
    }
  });
  dart.copyProperties(app_layout__material_stackable_drawer$46template, {
    get MaterialStackableDrawerComponentNgFactory() {
      return app_layout__material_stackable_drawer$46template._MaterialStackableDrawerComponentNgFactory;
    }
  });
  dart.defineLazy(app_layout__material_stackable_drawer$46template, {
    /*app_layout__material_stackable_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_layout__material_stackable_drawer$46template.initReflector = function() {
    if (dart.test(app_layout__material_stackable_drawer$46template._visited)) {
      return;
    }
    app_layout__material_stackable_drawer$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent), app_layout__material_stackable_drawer$46template.MaterialStackableDrawerComponentNgFactory);
    angular$46template.initReflector();
    app_layout__material_temporary_drawer$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/app_layout/material_stackable_drawer.template.ddc", {
    "package:angular_components/app_layout/material_stackable_drawer.template.dart": app_layout__material_stackable_drawer$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_stackable_drawer.template.dart"],"names":[],"mappings":"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","file":"material_stackable_drawer.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_stackable_drawer$46template: app_layout__material_stackable_drawer$46template
  };
});

//# sourceMappingURL=material_stackable_drawer.template.ddc.js.map
