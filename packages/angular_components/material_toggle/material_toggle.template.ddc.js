define(['dart_sdk', 'packages/angular_components/material_toggle/material_toggle.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, material_toggle$46scss$46css, view_type, change_detection, material_toggle, modules, has_disabled, angular, has_disabled$, events, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_toggle__material_toggle$46scss$46css$46shim = material_toggle$46scss$46css.material_toggle__material_toggle$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_toggle__material_toggle = material_toggle.material_toggle__material_toggle;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular$46template = angular.angular$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const material_toggle__material_toggle$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialToggleComponent = () => (AppViewOfMaterialToggleComponent = dart.constFn(src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent)))();
  let AppViewAndintToAppViewOfMaterialToggleComponent = () => (AppViewAndintToAppViewOfMaterialToggleComponent = dart.constFn(dart.fnType(AppViewOfMaterialToggleComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialToggleComponent = () => (ComponentRefOfMaterialToggleComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent)))();
  let ComponentFactoryOfMaterialToggleComponent = () => (ComponentFactoryOfMaterialToggleComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_toggle__material_toggle.MaterialToggleComponent)))();
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template.styles$MaterialToggleComponent*/get styles$MaterialToggleComponent() {
      return [material_toggle__material_toggle$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _el_5 = Symbol('_el_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _handle_blur_0_0 = Symbol('_handle_blur_0_0');
  const _handle_focus_0_1 = Symbol('_handle_focus_0_1');
  const _handle_mouseenter_0_2 = Symbol('_handle_mouseenter_0_2');
  const _handle_mouseleave_0_3 = Symbol('_handle_mouseleave_0_3');
  let const$;
  material_toggle__material_toggle$46template.ViewMaterialToggleComponent0 = class ViewMaterialToggleComponent0 extends src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = "material-toggle";
      this.createAttr(this[_el_0], "role", "button");
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponent1, AppViewAndintToAppViewOfMaterialToggleComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = "tgl-container";
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this.createAttr(this[_el_3], "animated", "");
      this[_el_3].className = "tgl-bar";
      this.addShimC(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_4].className = "tgl-btn-container";
      this.addShimC(this[_el_4]);
      this[_el_5] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_4]);
      this.createAttr(this[_el_5], "animated", "");
      this[_el_5].className = "tgl-btn";
      this.addShimC(this[_el_5]);
      this.project(this[_el_5], 0);
      this[_el_0][$addEventListener]("blur", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_0_0)));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_0_1)));
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseenter_0_2)));
      this[_el_0][$addEventListener]("mouseleave", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseleave_0_3)));
      this.ctx.toggleElement = this[_el_0];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.hasLabel;
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = _ctx.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(this[_el_0], "checked", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateClass(this[_el_0], "disabled", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.disabled) ? "-1" : "0";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.setAttr(this[_el_0], "tabindex", currVal_2[$toString]());
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.disabled);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.setAttr(this[_el_0], "aria-disabled", currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let l = _ctx.ariaLabel;
      let currVal_4 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.setAttr(this[_el_0], "aria-label", currVal_4[$toString]());
        this[_expr_4] = currVal_4;
      }
      let currVal_6 = src__core__linker__app_view_utils.interpolate0(_ctx.shadow_z);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this.setAttr(this[_el_3], "elevation", currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = src__core__linker__app_view_utils.interpolate0(_ctx.shadow_z);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this.setAttr(this[_el_5], "elevation", currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
    [_handle_blur_0_0]($event) {
      this.ctx.hasFocus = false;
    }
    [_handle_focus_0_1]($event) {
      this.ctx.hasFocus = true;
    }
    [_handle_mouseenter_0_2]($event) {
      this.ctx.isHovered = true;
    }
    [_handle_mouseleave_0_3]($event) {
      this.ctx.isHovered = false;
    }
  };
  (material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-toggle"));
    this.rootEl.className = material_toggle__material_toggle.MaterialToggleComponent.hostClass;
    let t = material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._renderType;
    t == null ? material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_toggle/material_toggle.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_toggle__material_toggle$46template.styles$MaterialToggleComponent) : t;
    this.setupComponentType(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._renderType);
  }).prototype = material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.prototype;
  dart.addTypeTests(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0);
  dart.setMethodSignature(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_blur_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_focus_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_mouseenter_0_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_mouseleave_0_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0, {
    /*material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponent0 = function(parentView, parentIndex) {
    return new material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  material_toggle__material_toggle$46template._ViewMaterialToggleComponent1 = class _ViewMaterialToggleComponent1 extends src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "tgl-lbl";
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.label;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._renderType;
  }).prototype = material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.prototype;
  dart.addTypeTests(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1);
  dart.setMethodSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponent1 = function(parentView, parentIndex) {
    return new material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template.styles$MaterialToggleComponentHost*/get styles$MaterialToggleComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialToggleComponent_0_5 = Symbol('_MaterialToggleComponent_0_5');
  material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0 = class _ViewMaterialToggleComponentHost0 extends src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent) {
    build() {
      this[_compView_0] = new material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialToggleComponent_0_5] = new material_toggle__material_toggle.MaterialToggleComponent.new(this[_compView_0].ref, null);
      this[_compView_0].create(this[_MaterialToggleComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialToggleComponent()).new(0, this, this.rootEl, this[_MaterialToggleComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialToggleComponent_0_5];
      }
      return notFoundResult;
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
          this[_MaterialToggleComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialToggleComponent_0_5] = null;
    material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.prototype;
  dart.addTypeTests(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0);
  dart.setMethodSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0),
    [_MaterialToggleComponent_0_5]: dart.fieldType(material_toggle__material_toggle.MaterialToggleComponent)
  }));
  material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponentHost0 = function(parentView, parentIndex) {
    return new material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template._MaterialToggleComponentNgFactory*/get _MaterialToggleComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialToggleComponent()).new("material-toggle", dart.fn(material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponentHost0, AppViewAndintToAppViewOfMaterialToggleComponent())));
    }
  });
  dart.copyProperties(material_toggle__material_toggle$46template, {
    get MaterialToggleComponentNgFactory() {
      return material_toggle__material_toggle$46template._MaterialToggleComponentNgFactory;
    }
  });
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_toggle__material_toggle$46template.initReflector = function() {
    if (dart.test(material_toggle__material_toggle$46template._visited)) {
      return;
    }
    material_toggle__material_toggle$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_toggle__material_toggle.MaterialToggleComponent), material_toggle__material_toggle$46template.MaterialToggleComponentNgFactory);
    angular$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_toggle/material_toggle.template.ddc", {
    "package:angular_components/material_toggle/material_toggle.template.dart": material_toggle__material_toggle$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_toggle.template.dart"],"names":[],"mappings":"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","file":"material_toggle.template.ddc.js"}');
  // Exports:
  return {
    material_toggle__material_toggle$46template: material_toggle__material_toggle$46template
  };
});

//# sourceMappingURL=material_toggle.template.ddc.js.map
