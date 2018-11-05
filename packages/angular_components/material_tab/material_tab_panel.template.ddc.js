define(['dart_sdk', 'packages/angular_components/material_tab/material_tab_panel.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_tab/material_tab_panel', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_tab/fixed_material_tab_strip.template', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular_components/material_tab/material_tab', 'packages/angular/angular.template', 'packages/angular_components/material_tab/material_tab.template', 'packages/angular_components/material_tab/tab_change_event.template'], function(dart_sdk, material_tab_panel$46scss$46css, view_type, change_detection, material_tab_panel, modules, fixed_material_tab_strip, fixed_material_tab_strip$, tab_change_event, material_tab, angular, material_tab$, tab_change_event$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__material_tab_panel$46scss$46css$46shim = material_tab_panel$46scss$46css.material_tab__material_tab_panel$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_tab__material_tab_panel = material_tab_panel.material_tab__material_tab_panel;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_tab__fixed_material_tab_strip$46template = fixed_material_tab_strip.material_tab__fixed_material_tab_strip$46template;
  const material_tab__fixed_material_tab_strip = fixed_material_tab_strip$.material_tab__fixed_material_tab_strip;
  const material_tab__tab_change_event = tab_change_event.material_tab__tab_change_event;
  const material_tab__material_tab = material_tab.material_tab__material_tab;
  const angular$46template = angular.angular$46template;
  const material_tab__material_tab$46template = material_tab$.material_tab__material_tab$46template;
  const material_tab__tab_change_event$46template = tab_change_event$.material_tab__tab_change_event$46template;
  const _root = Object.create(null);
  const material_tab__material_tab_panel$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfTab = () => (JSArrayOfTab = dart.constFn(_interceptors.JSArray$(material_tab__material_tab.Tab)))();
  let ComponentRefOfMaterialTabPanelComponent = () => (ComponentRefOfMaterialTabPanelComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab_panel.MaterialTabPanelComponent)))();
  let AppViewOfMaterialTabPanelComponent = () => (AppViewOfMaterialTabPanelComponent = dart.constFn(src__core__linker__app_view.AppView$(material_tab__material_tab_panel.MaterialTabPanelComponent)))();
  let AppViewAndintToAppViewOfMaterialTabPanelComponent = () => (AppViewAndintToAppViewOfMaterialTabPanelComponent = dart.constFn(dart.fnType(AppViewOfMaterialTabPanelComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTabPanelComponent = () => (ComponentFactoryOfMaterialTabPanelComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_tab__material_tab_panel.MaterialTabPanelComponent)))();
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template.styles$MaterialTabPanelComponent*/get styles$MaterialTabPanelComponent() {
      return [material_tab__material_tab_panel$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _FixedMaterialTabStripComponent_0_5 = Symbol('_FixedMaterialTabStripComponent_0_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  let const$0;
  material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0 = class ViewMaterialTabPanelComponent0 extends src__core__linker__app_view.AppView$(material_tab__material_tab_panel.MaterialTabPanelComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FixedMaterialTabStripComponent_0_5] = new material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0].ref, core.bool._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_FixedMaterialTabStripComponent_0_5], []);
      this.project(parentRenderNode, 0);
      let subscription_0 = this[_FixedMaterialTabStripComponent_0_5].beforeTabChange.listen(this.eventHandler1(material_tab__tab_change_event.TabChangeEvent, material_tab__tab_change_event.TabChangeEvent, dart.bind(this.ctx, 'onBeforeTabChange')));
      let subscription_1 = this[_FixedMaterialTabStripComponent_0_5].tabChange.listen(this.eventHandler1(material_tab__tab_change_event.TabChangeEvent, material_tab__tab_change_event.TabChangeEvent, dart.bind(this.ctx, 'onTabChange')));
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.tabIds;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_FixedMaterialTabStripComponent_0_5].tabIds = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeTabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_FixedMaterialTabStripComponent_0_5].activeTabIndex = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.tabLabels;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_FixedMaterialTabStripComponent_0_5].tabLabels = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
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
  (material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_FixedMaterialTabStripComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tab-panel"));
    this.rootEl.className = material_tab__material_tab_panel.MaterialTabPanelComponent.hostClass;
    let t = material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._renderType;
    t == null ? material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/material_tab_panel.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_tab__material_tab_panel$46template.styles$MaterialTabPanelComponent) : t;
    this.setupComponentType(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._renderType);
  }).prototype = material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.prototype;
  dart.addTypeTests(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0);
  dart.setMethodSignature(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab_panel.MaterialTabPanelComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getFields(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0),
    [_FixedMaterialTabStripComponent_0_5]: dart.fieldType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.int),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0, {
    /*material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_tab__material_tab_panel$46template.viewFactory_MaterialTabPanelComponent0 = function(parentView, parentIndex) {
    return new material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template.styles$MaterialTabPanelComponentHost*/get styles$MaterialTabPanelComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTabPanelComponent_0_5 = Symbol('_MaterialTabPanelComponent_0_5');
  material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0 = class _ViewMaterialTabPanelComponentHost0 extends src__core__linker__app_view.AppView$(material_tab__material_tab_panel.MaterialTabPanelComponent) {
    build() {
      this[_compView_0] = new material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTabPanelComponent_0_5] = new material_tab__material_tab_panel.MaterialTabPanelComponent.new(this[_compView_0].ref);
      this[_MaterialTabPanelComponent_0_5].tabs = JSArrayOfTab().of([]);
      this[_compView_0].create(this[_MaterialTabPanelComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTabPanelComponent()).new(0, this, this.rootEl, this[_MaterialTabPanelComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTabPanelComponent_0_5].ngAfterContentInit();
        }
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTabPanelComponent_0_5] = null;
    material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.prototype;
  dart.addTypeTests(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0);
  dart.setMethodSignature(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab_panel.MaterialTabPanelComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, () => ({
    __proto__: dart.getFields(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0),
    [_MaterialTabPanelComponent_0_5]: dart.fieldType(material_tab__material_tab_panel.MaterialTabPanelComponent)
  }));
  material_tab__material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0 = function(parentView, parentIndex) {
    return new material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template._MaterialTabPanelComponentNgFactory*/get _MaterialTabPanelComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTabPanelComponent()).new("material-tab-panel", dart.fn(material_tab__material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0, AppViewAndintToAppViewOfMaterialTabPanelComponent())));
    }
  });
  dart.copyProperties(material_tab__material_tab_panel$46template, {
    get MaterialTabPanelComponentNgFactory() {
      return material_tab__material_tab_panel$46template._MaterialTabPanelComponentNgFactory;
    }
  });
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__material_tab_panel$46template.initReflector = function() {
    if (dart.test(material_tab__material_tab_panel$46template._visited)) {
      return;
    }
    material_tab__material_tab_panel$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_tab__material_tab_panel.MaterialTabPanelComponent), material_tab__material_tab_panel$46template.MaterialTabPanelComponentNgFactory);
    angular$46template.initReflector();
    material_tab__fixed_material_tab_strip$46template.initReflector();
    material_tab__material_tab$46template.initReflector();
    material_tab__tab_change_event$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_tab/material_tab_panel.template.ddc", {
    "package:angular_components/material_tab/material_tab_panel.template.dart": material_tab__material_tab_panel$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tab_panel.template.dart"],"names":[],"mappings":"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","file":"material_tab_panel.template.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab_panel$46template: material_tab__material_tab_panel$46template
  };
});

//# sourceMappingURL=material_tab_panel.template.ddc.js.map
