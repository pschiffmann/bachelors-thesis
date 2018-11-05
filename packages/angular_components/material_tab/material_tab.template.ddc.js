define(['dart_sdk', 'packages/angular_components/material_tab/material_tab.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_tab/material_tab', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_tab$46scss$46css, view_type, change_detection, material_tab, modules, id_generator, deferred_content_aware, angular, deferred_content_aware$, focus, id_generator$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__material_tab$46scss$46css$46shim = material_tab$46scss$46css.material_tab__material_tab$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_tab__material_tab = material_tab.material_tab__material_tab;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const utils__id_generator__id_generator$46template = id_generator$.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_tab__material_tab$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialTabComponent = () => (AppViewOfMaterialTabComponent = dart.constFn(src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent)))();
  let AppViewAndintToAppViewOfMaterialTabComponent = () => (AppViewAndintToAppViewOfMaterialTabComponent = dart.constFn(dart.fnType(AppViewOfMaterialTabComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTabComponent = () => (ComponentRefOfMaterialTabComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent)))();
  let ComponentFactoryOfMaterialTabComponent = () => (ComponentFactoryOfMaterialTabComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_tab__material_tab.MaterialTabComponent)))();
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template.styles$MaterialTabComponent*/get styles$MaterialTabComponent() {
      return [material_tab__material_tab$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  material_tab__material_tab$46template.ViewMaterialTabComponent0 = class ViewMaterialTabComponent0 extends src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_tab__material_tab$46template.viewFactory_MaterialTabComponent1, AppViewAndintToAppViewOfMaterialTabComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.active;
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_1 = this.ctx.active;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateElemClass(this.rootEl, "material-tab", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.ctx.panelId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.setAttr(this.rootEl, "id", currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.ctx.tabId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.setAttr(this.rootEl, "aria-labelledby", currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
    }
  };
  (material_tab__material_tab$46template.ViewMaterialTabComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_tab__material_tab$46template.ViewMaterialTabComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tab"));
    this.createAttr(this.rootEl, "role", material_tab__material_tab.MaterialTabComponent.hostRole);
    let t = material_tab__material_tab$46template.ViewMaterialTabComponent0._renderType;
    t == null ? material_tab__material_tab$46template.ViewMaterialTabComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/material_tab.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_tab__material_tab$46template.styles$MaterialTabComponent) : t;
    this.setupComponentType(material_tab__material_tab$46template.ViewMaterialTabComponent0._renderType);
  }).prototype = material_tab__material_tab$46template.ViewMaterialTabComponent0.prototype;
  dart.addTypeTests(material_tab__material_tab$46template.ViewMaterialTabComponent0);
  dart.setMethodSignature(material_tab__material_tab$46template.ViewMaterialTabComponent0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab$46template.ViewMaterialTabComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_tab__material_tab$46template.ViewMaterialTabComponent0, () => ({
    __proto__: dart.getFields(material_tab__material_tab$46template.ViewMaterialTabComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab__material_tab$46template.ViewMaterialTabComponent0, {
    /*material_tab__material_tab$46template.ViewMaterialTabComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_tab__material_tab$46template.viewFactory_MaterialTabComponent0 = function(parentView, parentIndex) {
    return new material_tab__material_tab$46template.ViewMaterialTabComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  material_tab__material_tab$46template._ViewMaterialTabComponent1 = class _ViewMaterialTabComponent1 extends src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "tab-content";
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (material_tab__material_tab$46template._ViewMaterialTabComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_tab__material_tab$46template._ViewMaterialTabComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_tab__material_tab$46template.ViewMaterialTabComponent0._renderType;
  }).prototype = material_tab__material_tab$46template._ViewMaterialTabComponent1.prototype;
  dart.addTypeTests(material_tab__material_tab$46template._ViewMaterialTabComponent1);
  dart.setMethodSignature(material_tab__material_tab$46template._ViewMaterialTabComponent1, () => ({
    __proto__: dart.getMethods(material_tab__material_tab$46template._ViewMaterialTabComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent), [])
  }));
  dart.setFieldSignature(material_tab__material_tab$46template._ViewMaterialTabComponent1, () => ({
    __proto__: dart.getFields(material_tab__material_tab$46template._ViewMaterialTabComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_tab__material_tab$46template.viewFactory_MaterialTabComponent1 = function(parentView, parentIndex) {
    return new material_tab__material_tab$46template._ViewMaterialTabComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template.styles$MaterialTabComponentHost*/get styles$MaterialTabComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialTabComponent_0_5 = Symbol('_MaterialTabComponent_0_5');
  material_tab__material_tab$46template._ViewMaterialTabComponentHost0 = class _ViewMaterialTabComponentHost0 extends src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent) {
    build() {
      this[_compView_0] = new material_tab__material_tab$46template.ViewMaterialTabComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTabComponent_0_5] = new material_tab__material_tab.MaterialTabComponent.new(this.rootEl, utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTabComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTabComponent()).new(0, this, this.rootEl, this[_MaterialTabComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_tab__material_tab.Tab) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this[_MaterialTabComponent_0_5];
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
    }
  };
  (material_tab__material_tab$46template._ViewMaterialTabComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTabComponent_0_5] = null;
    material_tab__material_tab$46template._ViewMaterialTabComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_tab__material_tab$46template._ViewMaterialTabComponentHost0.prototype;
  dart.addTypeTests(material_tab__material_tab$46template._ViewMaterialTabComponentHost0);
  dart.setMethodSignature(material_tab__material_tab$46template._ViewMaterialTabComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab$46template._ViewMaterialTabComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__material_tab$46template._ViewMaterialTabComponentHost0, () => ({
    __proto__: dart.getFields(material_tab__material_tab$46template._ViewMaterialTabComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__material_tab$46template.ViewMaterialTabComponent0),
    [_MaterialTabComponent_0_5]: dart.fieldType(material_tab__material_tab.MaterialTabComponent)
  }));
  material_tab__material_tab$46template.viewFactory_MaterialTabComponentHost0 = function(parentView, parentIndex) {
    return new material_tab__material_tab$46template._ViewMaterialTabComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template._MaterialTabComponentNgFactory*/get _MaterialTabComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTabComponent()).new("material-tab", dart.fn(material_tab__material_tab$46template.viewFactory_MaterialTabComponentHost0, AppViewAndintToAppViewOfMaterialTabComponent())));
    }
  });
  dart.copyProperties(material_tab__material_tab$46template, {
    get MaterialTabComponentNgFactory() {
      return material_tab__material_tab$46template._MaterialTabComponentNgFactory;
    }
  });
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__material_tab$46template.initReflector = function() {
    if (dart.test(material_tab__material_tab$46template._visited)) {
      return;
    }
    material_tab__material_tab$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_tab__material_tab.MaterialTabComponent), material_tab__material_tab$46template.MaterialTabComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    focus__focus$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_tab/material_tab.template.ddc", {
    "package:angular_components/material_tab/material_tab.template.dart": material_tab__material_tab$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tab.template.dart"],"names":[],"mappings":"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","file":"material_tab.template.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab$46template: material_tab__material_tab$46template
  };
});

//# sourceMappingURL=material_tab.template.ddc.js.map
