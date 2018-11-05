define(['dart_sdk', 'packages/angular_components/material_button/material_fab.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_button/material_fab', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular/angular.template'], function(dart_sdk, material_fab$46scss$46css, view_type, change_detection, material_fab, modules, material_ripple, material_ripple$, material_button_base, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_fab$46scss$46css$46shim = material_fab$46scss$46css.material_button__material_fab$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_button__material_fab = material_fab.material_button__material_fab;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const material_button__material_button_base$46template = material_button_base.material_button__material_button_base$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const material_button__material_fab$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfMaterialFabComponent = () => (ComponentRefOfMaterialFabComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_button__material_fab.MaterialFabComponent)))();
  let AppViewOfMaterialFabComponent = () => (AppViewOfMaterialFabComponent = dart.constFn(src__core__linker__app_view.AppView$(material_button__material_fab.MaterialFabComponent)))();
  let AppViewAndintToAppViewOfMaterialFabComponent = () => (AppViewAndintToAppViewOfMaterialFabComponent = dart.constFn(dart.fnType(AppViewOfMaterialFabComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialFabComponent = () => (ComponentFactoryOfMaterialFabComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_button__material_fab.MaterialFabComponent)))();
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template.styles$MaterialFabComponent*/get styles$MaterialFabComponent() {
      return [material_button__material_fab$46scss$46css$46shim.styles];
    }
  });
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _MaterialRippleComponent_2_5 = Symbol('_MaterialRippleComponent_2_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  let const$;
  material_button__material_fab$46template.ViewMaterialFabComponent0 = class ViewMaterialFabComponent0 extends src__core__linker__app_view.AppView$(material_button__material_fab.MaterialFabComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_1].className = "content";
      this.addShimC(this[_el_1]);
      this.project(this[_el_1], 0);
      this[_compView_2] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_MaterialRippleComponent_2_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(html.HtmlElement._check(this[_el_2]));
      this[_compView_2].create(this[_MaterialRippleComponent_2_5], []);
      this[_el_2][$addEventListener]("mousedown", this.eventHandler1(html.Event, html.Event, dart.bind(this.ctx, 'onMouseDown')));
      this[_el_2][$addEventListener]("mouseup", this.eventHandler1(html.Event, html.Event, dart.bind(this.ctx, 'onMouseUp')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseDown')));
      _rootEl[$addEventListener]("mouseup", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseUp')));
      _rootEl[$addEventListener]("focus", this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onBlur')));
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
      this[_MaterialRippleComponent_2_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let currVal_0 = this.ctx.tabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setProp(this.rootEl, "tabIndex", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.ctx.ariaRole;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this.rootEl, "role", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.ctx.disabledStr;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.setAttr(this.rootEl, "aria-disabled", currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.updateElemClass(this.rootEl, "is-disabled", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = this.ctx.hostDisabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.setAttr(this.rootEl, "disabled", currVal_4 == null ? null : dart.toString(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = this.ctx.hostRaised;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this.setAttr(this.rootEl, "raised", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = this.ctx.hostClassIsFocused;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this.updateElemClass(this.rootEl, "is-focused", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = this.ctx.hostClassIsPressed;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this.updateElemClass(this.rootEl, "is-pressed", currVal_7);
        this[_expr_7] = currVal_7;
      }
    }
  };
  (material_button__material_fab$46template.ViewMaterialFabComponent0.new = function(parentView, parentIndex) {
    this[_el_1] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_MaterialRippleComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    material_button__material_fab$46template.ViewMaterialFabComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-fab"));
    this.createAttr(this.rootEl, "animated", material_button__material_fab.MaterialFabComponent.hostAnimated);
    let t = material_button__material_fab$46template.ViewMaterialFabComponent0._renderType;
    t == null ? material_button__material_fab$46template.ViewMaterialFabComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_button/material_fab.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_button__material_fab$46template.styles$MaterialFabComponent) : t;
    this.setupComponentType(material_button__material_fab$46template.ViewMaterialFabComponent0._renderType);
  }).prototype = material_button__material_fab$46template.ViewMaterialFabComponent0.prototype;
  dart.addTypeTests(material_button__material_fab$46template.ViewMaterialFabComponent0);
  dart.setMethodSignature(material_button__material_fab$46template.ViewMaterialFabComponent0, () => ({
    __proto__: dart.getMethods(material_button__material_fab$46template.ViewMaterialFabComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_button__material_fab.MaterialFabComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_button__material_fab$46template.ViewMaterialFabComponent0, () => ({
    __proto__: dart.getFields(material_button__material_fab$46template.ViewMaterialFabComponent0.__proto__),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_2_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_button__material_fab$46template.ViewMaterialFabComponent0, {
    /*material_button__material_fab$46template.ViewMaterialFabComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_button__material_fab$46template.viewFactory_MaterialFabComponent0 = function(parentView, parentIndex) {
    return new material_button__material_fab$46template.ViewMaterialFabComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template.styles$MaterialFabComponentHost*/get styles$MaterialFabComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialFabComponent_0_5 = Symbol('_MaterialFabComponent_0_5');
  material_button__material_fab$46template._ViewMaterialFabComponentHost0 = class _ViewMaterialFabComponentHost0 extends src__core__linker__app_view.AppView$(material_button__material_fab.MaterialFabComponent) {
    build() {
      this[_compView_0] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialFabComponent_0_5] = new material_button__material_fab.MaterialFabComponent.new(this.rootEl, this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialFabComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialFabComponent()).new(0, this, this.rootEl, this[_MaterialFabComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialFabComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_button__material_fab$46template._ViewMaterialFabComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialFabComponent_0_5] = null;
    material_button__material_fab$46template._ViewMaterialFabComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_button__material_fab$46template._ViewMaterialFabComponentHost0.prototype;
  dart.addTypeTests(material_button__material_fab$46template._ViewMaterialFabComponentHost0);
  dart.setMethodSignature(material_button__material_fab$46template._ViewMaterialFabComponentHost0, () => ({
    __proto__: dart.getMethods(material_button__material_fab$46template._ViewMaterialFabComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_button__material_fab.MaterialFabComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_button__material_fab$46template._ViewMaterialFabComponentHost0, () => ({
    __proto__: dart.getFields(material_button__material_fab$46template._ViewMaterialFabComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_0_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent)
  }));
  material_button__material_fab$46template.viewFactory_MaterialFabComponentHost0 = function(parentView, parentIndex) {
    return new material_button__material_fab$46template._ViewMaterialFabComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template._MaterialFabComponentNgFactory*/get _MaterialFabComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialFabComponent()).new("material-fab", dart.fn(material_button__material_fab$46template.viewFactory_MaterialFabComponentHost0, AppViewAndintToAppViewOfMaterialFabComponent())));
    }
  });
  dart.copyProperties(material_button__material_fab$46template, {
    get MaterialFabComponentNgFactory() {
      return material_button__material_fab$46template._MaterialFabComponentNgFactory;
    }
  });
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_button__material_fab$46template.initReflector = function() {
    if (dart.test(material_button__material_fab$46template._visited)) {
      return;
    }
    material_button__material_fab$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_button__material_fab.MaterialFabComponent), material_button__material_fab$46template.MaterialFabComponentNgFactory);
    material_button__material_button_base$46template.initReflector();
    angular$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_button/material_fab.template.ddc", {
    "package:angular_components/material_button/material_fab.template.dart": material_button__material_fab$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_fab.template.dart"],"names":[],"mappings":"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","file":"material_fab.template.ddc.js"}');
  // Exports:
  return {
    material_button__material_fab$46template: material_button__material_fab$46template
  };
});

//# sourceMappingURL=material_fab.template.ddc.js.map
