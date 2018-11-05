define(['dart_sdk', 'packages/angular_components/material_chips/material_chips.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_chips/material_chips', 'packages/angular_components/material_chips/material_chip.template', 'packages/angular_components/material_chips/material_chip', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_chips$46scss$46css, view_type, change_detection, modules, material_chips, material_chip, material_chip$, has_renderer, angular, selection_model, has_renderer$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_chips__material_chips$46scss$46css$46shim = material_chips$46scss$46css.material_chips__material_chips$46scss$46css$46shim;
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
  const material_chips__material_chips = material_chips.material_chips__material_chips;
  const material_chips__material_chip$46template = material_chip.material_chips__material_chip$46template;
  const material_chips__material_chip = material_chip$.material_chips__material_chip;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const angular$46template = angular.angular$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_chips__material_chips$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialChipsComponent = () => (AppViewOfMaterialChipsComponent = dart.constFn(src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent)))();
  let AppViewAndintToAppViewOfMaterialChipsComponent = () => (AppViewAndintToAppViewOfMaterialChipsComponent = dart.constFn(dart.fnType(AppViewOfMaterialChipsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialChipsComponent = () => (ComponentRefOfMaterialChipsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_chips__material_chips.MaterialChipsComponent)))();
  let ComponentFactoryOfMaterialChipsComponent = () => (ComponentFactoryOfMaterialChipsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_chips__material_chips.MaterialChipsComponent)))();
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template.styles$MaterialChipsComponent*/get styles$MaterialChipsComponent() {
      return [material_chips__material_chips$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  material_chips__material_chips$46template.ViewMaterialChipsComponent0 = class ViewMaterialChipsComponent0 extends src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_chips__material_chips$46template.viewFactory_MaterialChipsComponent1, AppViewAndintToAppViewOfMaterialChipsComponent()));
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.project(parentRenderNode, 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.selectedItems;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_0_9].ngDoCheck();
      }
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_chips__material_chips$46template.ViewMaterialChipsComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    material_chips__material_chips$46template.ViewMaterialChipsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-chips"));
    let t = material_chips__material_chips$46template.ViewMaterialChipsComponent0._renderType;
    t == null ? material_chips__material_chips$46template.ViewMaterialChipsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_chips/material_chips.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_chips__material_chips$46template.styles$MaterialChipsComponent) : t;
    this.setupComponentType(material_chips__material_chips$46template.ViewMaterialChipsComponent0._renderType);
  }).prototype = material_chips__material_chips$46template.ViewMaterialChipsComponent0.prototype;
  dart.addTypeTests(material_chips__material_chips$46template.ViewMaterialChipsComponent0);
  dart.setMethodSignature(material_chips__material_chips$46template.ViewMaterialChipsComponent0, () => ({
    __proto__: dart.getMethods(material_chips__material_chips$46template.ViewMaterialChipsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chips.MaterialChipsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_chips__material_chips$46template.ViewMaterialChipsComponent0, () => ({
    __proto__: dart.getFields(material_chips__material_chips$46template.ViewMaterialChipsComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_chips__material_chips$46template.ViewMaterialChipsComponent0, {
    /*material_chips__material_chips$46template.ViewMaterialChipsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_chips__material_chips$46template.viewFactory_MaterialChipsComponent0 = function(parentView, parentIndex) {
    return new material_chips__material_chips$46template.ViewMaterialChipsComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialChipComponent_0_5 = Symbol('_MaterialChipComponent_0_5');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$0;
  let const$1;
  material_chips__material_chips$46template._ViewMaterialChipsComponent1 = class _ViewMaterialChipsComponent1 extends src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent) {
    build() {
      this[_compView_0] = new material_chips__material_chip$46template.ViewMaterialChipComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialChipComponent_0_5] = new material_chips__material_chip.MaterialChipComponent.new(this[_el_0]);
      this[_compView_0].create(this[_MaterialChipComponent_0_5], [const$0 || (const$0 = dart.constList([], dart.dynamic)), const$1 || (const$1 = dart.constList([], dart.dynamic))]);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(model__ui__has_renderer.HasRenderer) && 0 === nodeIndex) {
        return this[_MaterialChipComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_chip = this.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.selectionModel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialChipComponent_0_5].selectionModel = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.removable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialChipComponent_0_5].removable = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.itemRenderer;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialChipComponent_0_5].itemRenderer = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_chip;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialChipComponent_0_5].value = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
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
  (material_chips__material_chips$46template._ViewMaterialChipsComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialChipComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_chips__material_chips$46template._ViewMaterialChipsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_chips__material_chips$46template.ViewMaterialChipsComponent0._renderType;
  }).prototype = material_chips__material_chips$46template._ViewMaterialChipsComponent1.prototype;
  dart.addTypeTests(material_chips__material_chips$46template._ViewMaterialChipsComponent1);
  dart.setMethodSignature(material_chips__material_chips$46template._ViewMaterialChipsComponent1, () => ({
    __proto__: dart.getMethods(material_chips__material_chips$46template._ViewMaterialChipsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chips.MaterialChipsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_chips__material_chips$46template._ViewMaterialChipsComponent1, () => ({
    __proto__: dart.getFields(material_chips__material_chips$46template._ViewMaterialChipsComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_chips__material_chip$46template.ViewMaterialChipComponent0),
    [_MaterialChipComponent_0_5]: dart.fieldType(material_chips__material_chip.MaterialChipComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  material_chips__material_chips$46template.viewFactory_MaterialChipsComponent1 = function(parentView, parentIndex) {
    return new material_chips__material_chips$46template._ViewMaterialChipsComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template.styles$MaterialChipsComponentHost*/get styles$MaterialChipsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialChipsComponent_0_5 = Symbol('_MaterialChipsComponent_0_5');
  material_chips__material_chips$46template._ViewMaterialChipsComponentHost0 = class _ViewMaterialChipsComponentHost0 extends src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent) {
    build() {
      this[_compView_0] = new material_chips__material_chips$46template.ViewMaterialChipsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialChipsComponent_0_5] = new material_chips__material_chips.MaterialChipsComponent.new(this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialChipsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialChipsComponent()).new(0, this, this.rootEl, this[_MaterialChipsComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(model__ui__has_renderer.HasRenderer) && 0 === nodeIndex) {
        return this[_MaterialChipsComponent_0_5];
      }
      return notFoundResult;
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
      this[_MaterialChipsComponent_0_5].ngOnDestroy();
    }
  };
  (material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialChipsComponent_0_5] = null;
    material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.prototype;
  dart.addTypeTests(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0);
  dart.setMethodSignature(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0, () => ({
    __proto__: dart.getMethods(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chips.MaterialChipsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0, () => ({
    __proto__: dart.getFields(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_chips__material_chips$46template.ViewMaterialChipsComponent0),
    [_MaterialChipsComponent_0_5]: dart.fieldType(material_chips__material_chips.MaterialChipsComponent)
  }));
  material_chips__material_chips$46template.viewFactory_MaterialChipsComponentHost0 = function(parentView, parentIndex) {
    return new material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template._MaterialChipsComponentNgFactory*/get _MaterialChipsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialChipsComponent()).new("material-chips", dart.fn(material_chips__material_chips$46template.viewFactory_MaterialChipsComponentHost0, AppViewAndintToAppViewOfMaterialChipsComponent())));
    }
  });
  dart.copyProperties(material_chips__material_chips$46template, {
    get MaterialChipsComponentNgFactory() {
      return material_chips__material_chips$46template._MaterialChipsComponentNgFactory;
    }
  });
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_chips__material_chips$46template.initReflector = function() {
    if (dart.test(material_chips__material_chips$46template._visited)) {
      return;
    }
    material_chips__material_chips$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_chips__material_chips.MaterialChipsComponent), material_chips__material_chips$46template.MaterialChipsComponentNgFactory);
    angular$46template.initReflector();
    material_chips__material_chip$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_chips/material_chips.template.ddc", {
    "package:angular_components/material_chips/material_chips.template.dart": material_chips__material_chips$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_chips.template.dart"],"names":[],"mappings":"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","file":"material_chips.template.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chips$46template: material_chips__material_chips$46template
  };
});

//# sourceMappingURL=material_chips.template.ddc.js.map
