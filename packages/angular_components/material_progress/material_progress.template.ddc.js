define(['dart_sdk', 'packages/angular_components/material_progress/material_progress.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_progress/material_progress', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template'], function(dart_sdk, material_progress$46scss$46css, view_type, change_detection, modules, material_progress, angular, feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_progress__material_progress$46scss$46css$46shim = material_progress$46scss$46css.material_progress__material_progress$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_progress__material_progress = material_progress.material_progress__material_progress;
  const angular$46template = angular.angular$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const _root = Object.create(null);
  const material_progress__material_progress$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfMaterialProgressComponent = () => (ComponentRefOfMaterialProgressComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_progress__material_progress.MaterialProgressComponent)))();
  let AppViewOfMaterialProgressComponent = () => (AppViewOfMaterialProgressComponent = dart.constFn(src__core__linker__app_view.AppView$(material_progress__material_progress.MaterialProgressComponent)))();
  let AppViewAndintToAppViewOfMaterialProgressComponent = () => (AppViewAndintToAppViewOfMaterialProgressComponent = dart.constFn(dart.fnType(AppViewOfMaterialProgressComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialProgressComponent = () => (ComponentFactoryOfMaterialProgressComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_progress__material_progress.MaterialProgressComponent)))();
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template.styles$MaterialProgressComponent*/get styles$MaterialProgressComponent() {
      return [material_progress__material_progress$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  let const$;
  material_progress__material_progress$46template.ViewMaterialProgressComponent0 = class ViewMaterialProgressComponent0 extends src__core__linker__app_view.AppView$(material_progress__material_progress.MaterialProgressComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = "progress-container";
      this.createAttr(this[_el_0], "role", "progressbar");
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = "secondary-progress";
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = "active-progress";
      this.addShimC(this[_el_2]);
      this.ctx.primary = this[_el_2];
      this.ctx.secondary = this[_el_1];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.ariaValue;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_0], "aria-valuenow", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.indeterminate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateClass(this[_el_0], "indeterminate", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.useFallbackAnimation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateClass(this[_el_0], "fallback", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.min);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.setAttr(this[_el_0], "aria-valuemin", currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__core__linker__app_view_utils.interpolate0(_ctx.max);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.setAttr(this[_el_0], "aria-valuemax", currVal_4 == null ? null : dart.toString(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.secondaryTransform;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_el_1].style[$setProperty]("transform", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.primaryTransform;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_el_2].style[$setProperty]("transform", currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
    }
  };
  (material_progress__material_progress$46template.ViewMaterialProgressComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_progress__material_progress$46template.ViewMaterialProgressComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-progress"));
    let t = material_progress__material_progress$46template.ViewMaterialProgressComponent0._renderType;
    t == null ? material_progress__material_progress$46template.ViewMaterialProgressComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_progress/material_progress.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_progress__material_progress$46template.styles$MaterialProgressComponent) : t;
    this.setupComponentType(material_progress__material_progress$46template.ViewMaterialProgressComponent0._renderType);
  }).prototype = material_progress__material_progress$46template.ViewMaterialProgressComponent0.prototype;
  dart.addTypeTests(material_progress__material_progress$46template.ViewMaterialProgressComponent0);
  dart.setMethodSignature(material_progress__material_progress$46template.ViewMaterialProgressComponent0, () => ({
    __proto__: dart.getMethods(material_progress__material_progress$46template.ViewMaterialProgressComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_progress__material_progress.MaterialProgressComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_progress__material_progress$46template.ViewMaterialProgressComponent0, () => ({
    __proto__: dart.getFields(material_progress__material_progress$46template.ViewMaterialProgressComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_progress__material_progress$46template.ViewMaterialProgressComponent0, {
    /*material_progress__material_progress$46template.ViewMaterialProgressComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_progress__material_progress$46template.viewFactory_MaterialProgressComponent0 = function(parentView, parentIndex) {
    return new material_progress__material_progress$46template.ViewMaterialProgressComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template.styles$MaterialProgressComponentHost*/get styles$MaterialProgressComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialProgressComponent_0_5 = Symbol('_MaterialProgressComponent_0_5');
  material_progress__material_progress$46template._ViewMaterialProgressComponentHost0 = class _ViewMaterialProgressComponentHost0 extends src__core__linker__app_view.AppView$(material_progress__material_progress.MaterialProgressComponent) {
    build() {
      this[_compView_0] = new material_progress__material_progress$46template.ViewMaterialProgressComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialProgressComponent_0_5] = new material_progress__material_progress.MaterialProgressComponent.new(null, this[_compView_0].ref, this.rootEl);
      this[_compView_0].create(this[_MaterialProgressComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialProgressComponent()).new(0, this, this.rootEl, this[_MaterialProgressComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialProgressComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialProgressComponent_0_5].ngOnDestroy();
    }
  };
  (material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialProgressComponent_0_5] = null;
    material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.prototype;
  dart.addTypeTests(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0);
  dart.setMethodSignature(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0, () => ({
    __proto__: dart.getMethods(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_progress__material_progress.MaterialProgressComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0, () => ({
    __proto__: dart.getFields(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_progress__material_progress$46template.ViewMaterialProgressComponent0),
    [_MaterialProgressComponent_0_5]: dart.fieldType(material_progress__material_progress.MaterialProgressComponent)
  }));
  material_progress__material_progress$46template.viewFactory_MaterialProgressComponentHost0 = function(parentView, parentIndex) {
    return new material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template._MaterialProgressComponentNgFactory*/get _MaterialProgressComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialProgressComponent()).new("material-progress", dart.fn(material_progress__material_progress$46template.viewFactory_MaterialProgressComponentHost0, AppViewAndintToAppViewOfMaterialProgressComponent())));
    }
  });
  dart.copyProperties(material_progress__material_progress$46template, {
    get MaterialProgressComponentNgFactory() {
      return material_progress__material_progress$46template._MaterialProgressComponentNgFactory;
    }
  });
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_progress__material_progress$46template.initReflector = function() {
    if (dart.test(material_progress__material_progress$46template._visited)) {
      return;
    }
    material_progress__material_progress$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_progress__material_progress.MaterialProgressComponent), material_progress__material_progress$46template.MaterialProgressComponentNgFactory);
    angular$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_progress/material_progress.template.ddc", {
    "package:angular_components/material_progress/material_progress.template.dart": material_progress__material_progress$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_progress.template.dart"],"names":[],"mappings":"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","file":"material_progress.template.ddc.js"}');
  // Exports:
  return {
    material_progress__material_progress$46template: material_progress__material_progress$46template
  };
});

//# sourceMappingURL=material_progress.template.ddc.js.map
