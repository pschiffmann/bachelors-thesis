define(['dart_sdk', 'packages/angular_components/highlighted_text/highlighted_text.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular/angular.template', 'packages/angular_components/model/ui/highlighted_text_model.template'], function(dart_sdk, highlighted_text$46scss$46css, view_type, change_detection, modules, highlighted_text, highlighted_text_model, angular, highlighted_text_model$) {
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
  const highlighted_text__highlighted_text = highlighted_text.highlighted_text__highlighted_text;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const angular$46template = angular.angular$46template;
  const model__ui__highlighted_text_model$46template = highlighted_text_model$.model__ui__highlighted_text_model$46template;
  const _root = Object.create(null);
  const highlighted_text__highlighted_text$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHighlightedTextComponent = () => (AppViewOfHighlightedTextComponent = dart.constFn(src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent)))();
  let AppViewAndintToAppViewOfHighlightedTextComponent = () => (AppViewAndintToAppViewOfHighlightedTextComponent = dart.constFn(dart.fnType(AppViewOfHighlightedTextComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHighlightedTextComponent = () => (ComponentRefOfHighlightedTextComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent)))();
  let ComponentFactoryOfHighlightedTextComponent = () => (ComponentFactoryOfHighlightedTextComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(highlighted_text__highlighted_text.HighlightedTextComponent)))();
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template.styles$HighlightedTextComponent*/get styles$HighlightedTextComponent() {
      return [highlighted_text__highlighted_text$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0 = class ViewHighlightedTextComponent0 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponent1, AppViewAndintToAppViewOfHighlightedTextComponent()));
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
  (highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("highlighted-text"));
    let t = highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._renderType;
    t == null ? highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/highlighted_text/highlighted_text.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, highlighted_text__highlighted_text$46template.styles$HighlightedTextComponent) : t;
    this.setupComponentType(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._renderType);
  }).prototype = highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.prototype;
  dart.addTypeTests(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0);
  dart.setMethodSignature(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0, {
    /*highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponent0 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _expr_1 = Symbol('_expr_1');
  highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1 = class _ViewHighlightedTextComponent1 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent) {
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
  (highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._renderType;
  }).prototype = highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.prototype;
  dart.addTypeTests(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1);
  dart.setMethodSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponent1 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template.styles$HighlightedTextComponentHost*/get styles$HighlightedTextComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HighlightedTextComponent_0_5 = Symbol('_HighlightedTextComponent_0_5');
  highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0 = class _ViewHighlightedTextComponentHost0 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent) {
    build() {
      this[_compView_0] = new highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HighlightedTextComponent_0_5] = new highlighted_text__highlighted_text.HighlightedTextComponent.new();
      this[_compView_0].create(this[_HighlightedTextComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHighlightedTextComponent()).new(0, this, this.rootEl, this[_HighlightedTextComponent_0_5]);
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
    }
  };
  (highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HighlightedTextComponent_0_5] = null;
    highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.prototype;
  dart.addTypeTests(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0);
  dart.setMethodSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0),
    [_HighlightedTextComponent_0_5]: dart.fieldType(highlighted_text__highlighted_text.HighlightedTextComponent)
  }));
  highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponentHost0 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template._HighlightedTextComponentNgFactory*/get _HighlightedTextComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHighlightedTextComponent()).new("highlighted-text", dart.fn(highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponentHost0, AppViewAndintToAppViewOfHighlightedTextComponent())));
    }
  });
  dart.copyProperties(highlighted_text__highlighted_text$46template, {
    get HighlightedTextComponentNgFactory() {
      return highlighted_text__highlighted_text$46template._HighlightedTextComponentNgFactory;
    }
  });
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  highlighted_text__highlighted_text$46template.initReflector = function() {
    if (dart.test(highlighted_text__highlighted_text$46template._visited)) {
      return;
    }
    highlighted_text__highlighted_text$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(highlighted_text__highlighted_text.HighlightedTextComponent), highlighted_text__highlighted_text$46template.HighlightedTextComponentNgFactory);
    angular$46template.initReflector();
    model__ui__highlighted_text_model$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_text.template.ddc", {
    "package:angular_components/highlighted_text/highlighted_text.template.dart": highlighted_text__highlighted_text$46template
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_text.template.dart"],"names":[],"mappings":"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","file":"highlighted_text.template.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_text$46template: highlighted_text__highlighted_text$46template
  };
});

//# sourceMappingURL=highlighted_text.template.ddc.js.map
