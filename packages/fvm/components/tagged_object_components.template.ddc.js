define(['dart_sdk', 'packages/fvm/components/tagged_object_components.scss.css.shim', 'packages/fvm/components/memory.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/fvm/components/tagged_object_components', 'packages/angular/angular.template', 'packages/fvm/virtual_machine.template'], function(dart_sdk, tagged_object_components$46scss$46css, memory$46scss$46css, view_type, change_detection, modules, tagged_object_components, angular, virtual_machine) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const components__tagged_object_components$46scss$46css$46shim = tagged_object_components$46scss$46css.components__tagged_object_components$46scss$46css$46shim;
  const components__memory$46scss$46css$46shim = memory$46scss$46css.components__memory$46scss$46css$46shim;
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
  const components__tagged_object_components = tagged_object_components.components__tagged_object_components;
  const angular$46template = angular.angular$46template;
  const virtual_machine$46template = virtual_machine.virtual_machine$46template;
  const _root = Object.create(null);
  const components__tagged_object_components$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfTaggedClosureComponent = () => (AppViewOfTaggedClosureComponent = dart.constFn(src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedClosureComponent)))();
  let AppViewAndintToAppViewOfTaggedClosureComponent = () => (AppViewAndintToAppViewOfTaggedClosureComponent = dart.constFn(dart.fnType(AppViewOfTaggedClosureComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfTaggedClosureComponent = () => (ComponentRefOfTaggedClosureComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedClosureComponent)))();
  let ComponentFactoryOfTaggedClosureComponent = () => (ComponentFactoryOfTaggedClosureComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(components__tagged_object_components.TaggedClosureComponent)))();
  let AppViewOfTaggedFunctionComponent = () => (AppViewOfTaggedFunctionComponent = dart.constFn(src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedFunctionComponent)))();
  let AppViewAndintToAppViewOfTaggedFunctionComponent = () => (AppViewAndintToAppViewOfTaggedFunctionComponent = dart.constFn(dart.fnType(AppViewOfTaggedFunctionComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfTaggedFunctionComponent = () => (ComponentRefOfTaggedFunctionComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedFunctionComponent)))();
  let ComponentFactoryOfTaggedFunctionComponent = () => (ComponentFactoryOfTaggedFunctionComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(components__tagged_object_components.TaggedFunctionComponent)))();
  let AppViewOfTaggedIntComponent = () => (AppViewOfTaggedIntComponent = dart.constFn(src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedIntComponent)))();
  let AppViewAndintToAppViewOfTaggedIntComponent = () => (AppViewAndintToAppViewOfTaggedIntComponent = dart.constFn(dart.fnType(AppViewOfTaggedIntComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfTaggedIntComponent = () => (ComponentRefOfTaggedIntComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedIntComponent)))();
  let ComponentFactoryOfTaggedIntComponent = () => (ComponentFactoryOfTaggedIntComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(components__tagged_object_components.TaggedIntComponent)))();
  let AppViewOfTaggedListComponent = () => (AppViewOfTaggedListComponent = dart.constFn(src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedListComponent)))();
  let AppViewAndintToAppViewOfTaggedListComponent = () => (AppViewAndintToAppViewOfTaggedListComponent = dart.constFn(dart.fnType(AppViewOfTaggedListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfTaggedListComponent = () => (ComponentRefOfTaggedListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedListComponent)))();
  let ComponentFactoryOfTaggedListComponent = () => (ComponentFactoryOfTaggedListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(components__tagged_object_components.TaggedListComponent)))();
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template.styles$TaggedClosureComponent*/get styles$TaggedClosureComponent() {
      return [components__tagged_object_components$46scss$46css$46shim.styles, components__memory$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_3 = Symbol('_el_3');
  const _text_4 = Symbol('_text_4');
  const _el_6 = Symbol('_el_6');
  const _text_7 = Symbol('_text_7');
  const _appEl_9 = Symbol('_appEl_9');
  const _NgFor_9_9 = Symbol('_NgFor_9_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  components__tagged_object_components$46template.ViewTaggedClosureComponent0 = class ViewTaggedClosureComponent0 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedClosureComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_0].className = "memory-cell tag";
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("C");
      this[_el_0][$append](_text_1);
      let _text_2 = html.Text.new("\n");
      parentRenderNode[$append](_text_2);
      this[_el_3] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_3].className = "memory-cell number-value";
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new("");
      this[_el_3][$append](this[_text_4]);
      let _text_5 = html.Text.new("\n");
      parentRenderNode[$append](_text_5);
      this[_el_6] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_6].className = "memory-cell number-value";
      this.addShimE(this[_el_6]);
      this[_text_7] = html.Text.new("");
      this[_el_6][$append](this[_text_7]);
      let _text_8 = html.Text.new("\n");
      parentRenderNode[$append](_text_8);
      let _anchor_9 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_9);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, null, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], dart.fn(components__tagged_object_components$46template.viewFactory_TaggedClosureComponent1, AppViewAndintToAppViewOfTaggedClosureComponent()));
      this[_NgFor_9_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_9], _TemplateRef_9_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.padding;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_NgFor_9_9].ngForOf = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_9_9].ngDoCheck();
      }
      this[_appEl_9].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.object.expressionLabel);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_4][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.object.globalVectorAddress);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_7][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      let t = this[_appEl_9];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (components__tagged_object_components$46template.ViewTaggedClosureComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_6] = null;
    this[_text_7] = null;
    this[_appEl_9] = null;
    this[_NgFor_9_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    components__tagged_object_components$46template.ViewTaggedClosureComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("tagged-closure"));
    let t = components__tagged_object_components$46template.ViewTaggedClosureComponent0._renderType;
    t == null ? components__tagged_object_components$46template.ViewTaggedClosureComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:fvm/lib/components/tagged_object_components.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, components__tagged_object_components$46template.styles$TaggedClosureComponent) : t;
    this.setupComponentType(components__tagged_object_components$46template.ViewTaggedClosureComponent0._renderType);
  }).prototype = components__tagged_object_components$46template.ViewTaggedClosureComponent0.prototype;
  dart.addTypeTests(components__tagged_object_components$46template.ViewTaggedClosureComponent0);
  dart.setMethodSignature(components__tagged_object_components$46template.ViewTaggedClosureComponent0, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template.ViewTaggedClosureComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedClosureComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template.ViewTaggedClosureComponent0, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template.ViewTaggedClosureComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_el_6]: dart.fieldType(html.Element),
    [_text_7]: dart.fieldType(html.Text),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_9_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(components__tagged_object_components$46template.ViewTaggedClosureComponent0, {
    /*components__tagged_object_components$46template.ViewTaggedClosureComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  components__tagged_object_components$46template.viewFactory_TaggedClosureComponent0 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template.ViewTaggedClosureComponent0.new(parentView, parentIndex);
  };
  components__tagged_object_components$46template._ViewTaggedClosureComponent1 = class _ViewTaggedClosureComponent1 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedClosureComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "memory-cell padding";
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("...");
      this[_el_0][$append](_text_1);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (components__tagged_object_components$46template._ViewTaggedClosureComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    components__tagged_object_components$46template._ViewTaggedClosureComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = components__tagged_object_components$46template.ViewTaggedClosureComponent0._renderType;
  }).prototype = components__tagged_object_components$46template._ViewTaggedClosureComponent1.prototype;
  dart.addTypeTests(components__tagged_object_components$46template._ViewTaggedClosureComponent1);
  dart.setMethodSignature(components__tagged_object_components$46template._ViewTaggedClosureComponent1, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template._ViewTaggedClosureComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedClosureComponent), [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template._ViewTaggedClosureComponent1, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template._ViewTaggedClosureComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element)
  }));
  components__tagged_object_components$46template.viewFactory_TaggedClosureComponent1 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template._ViewTaggedClosureComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template.styles$TaggedClosureComponentHost*/get styles$TaggedClosureComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _TaggedClosureComponent_0_5 = Symbol('_TaggedClosureComponent_0_5');
  components__tagged_object_components$46template._ViewTaggedClosureComponentHost0 = class _ViewTaggedClosureComponentHost0 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedClosureComponent) {
    build() {
      this[_compView_0] = new components__tagged_object_components$46template.ViewTaggedClosureComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TaggedClosureComponent_0_5] = new components__tagged_object_components.TaggedClosureComponent.new();
      this[_compView_0].create(this[_TaggedClosureComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfTaggedClosureComponent()).new(0, this, this.rootEl, this[_TaggedClosureComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (components__tagged_object_components$46template._ViewTaggedClosureComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TaggedClosureComponent_0_5] = null;
    components__tagged_object_components$46template._ViewTaggedClosureComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = components__tagged_object_components$46template._ViewTaggedClosureComponentHost0.prototype;
  dart.addTypeTests(components__tagged_object_components$46template._ViewTaggedClosureComponentHost0);
  dart.setMethodSignature(components__tagged_object_components$46template._ViewTaggedClosureComponentHost0, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template._ViewTaggedClosureComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedClosureComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template._ViewTaggedClosureComponentHost0, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template._ViewTaggedClosureComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(components__tagged_object_components$46template.ViewTaggedClosureComponent0),
    [_TaggedClosureComponent_0_5]: dart.fieldType(components__tagged_object_components.TaggedClosureComponent)
  }));
  components__tagged_object_components$46template.viewFactory_TaggedClosureComponentHost0 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template._ViewTaggedClosureComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template._TaggedClosureComponentNgFactory*/get _TaggedClosureComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTaggedClosureComponent()).new("tagged-closure", dart.fn(components__tagged_object_components$46template.viewFactory_TaggedClosureComponentHost0, AppViewAndintToAppViewOfTaggedClosureComponent())));
    }
  });
  dart.copyProperties(components__tagged_object_components$46template, {
    get TaggedClosureComponentNgFactory() {
      return components__tagged_object_components$46template._TaggedClosureComponentNgFactory;
    }
  });
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template.styles$TaggedFunctionComponent*/get styles$TaggedFunctionComponent() {
      return [components__tagged_object_components$46scss$46css$46shim.styles, components__memory$46scss$46css$46shim.styles];
    }
  });
  const _el_9 = Symbol('_el_9');
  const _text_10 = Symbol('_text_10');
  const _appEl_12 = Symbol('_appEl_12');
  const _NgFor_12_9 = Symbol('_NgFor_12_9');
  const _expr_3 = Symbol('_expr_3');
  let const$0;
  components__tagged_object_components$46template.ViewTaggedFunctionComponent0 = class ViewTaggedFunctionComponent0 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedFunctionComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_0].className = "memory-cell tag";
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("F");
      this[_el_0][$append](_text_1);
      let _text_2 = html.Text.new("\n");
      parentRenderNode[$append](_text_2);
      this[_el_3] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_3].className = "memory-cell number-value";
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new("");
      this[_el_3][$append](this[_text_4]);
      let _text_5 = html.Text.new("\n");
      parentRenderNode[$append](_text_5);
      this[_el_6] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_6].className = "memory-cell number-value";
      this.addShimE(this[_el_6]);
      this[_text_7] = html.Text.new("");
      this[_el_6][$append](this[_text_7]);
      let _text_8 = html.Text.new("\n");
      parentRenderNode[$append](_text_8);
      this[_el_9] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_9].className = "memory-cell number-value";
      this.addShimE(this[_el_9]);
      this[_text_10] = html.Text.new("");
      this[_el_9][$append](this[_text_10]);
      let _text_11 = html.Text.new("\n");
      parentRenderNode[$append](_text_11);
      let _anchor_12 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_12);
      this[_appEl_12] = new src__core__linker__view_container.ViewContainer.new(12, null, this, _anchor_12);
      let _TemplateRef_12_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_12], dart.fn(components__tagged_object_components$46template.viewFactory_TaggedFunctionComponent1, AppViewAndintToAppViewOfTaggedFunctionComponent()));
      this[_NgFor_12_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_12], _TemplateRef_12_8);
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_3 = _ctx.padding;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_NgFor_12_9].ngForOf = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_12_9].ngDoCheck();
      }
      this[_appEl_12].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.object.functionLabel);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_4][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.object.globalVectorAddress);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_7][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.object.argumentVectorAddress);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_10][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    destroyInternal() {
      let t = this[_appEl_12];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (components__tagged_object_components$46template.ViewTaggedFunctionComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_6] = null;
    this[_text_7] = null;
    this[_el_9] = null;
    this[_text_10] = null;
    this[_appEl_12] = null;
    this[_NgFor_12_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    components__tagged_object_components$46template.ViewTaggedFunctionComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("tagged-function"));
    let t = components__tagged_object_components$46template.ViewTaggedFunctionComponent0._renderType;
    t == null ? components__tagged_object_components$46template.ViewTaggedFunctionComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:fvm/lib/components/tagged_object_components.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, components__tagged_object_components$46template.styles$TaggedFunctionComponent) : t;
    this.setupComponentType(components__tagged_object_components$46template.ViewTaggedFunctionComponent0._renderType);
  }).prototype = components__tagged_object_components$46template.ViewTaggedFunctionComponent0.prototype;
  dart.addTypeTests(components__tagged_object_components$46template.ViewTaggedFunctionComponent0);
  dart.setMethodSignature(components__tagged_object_components$46template.ViewTaggedFunctionComponent0, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template.ViewTaggedFunctionComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedFunctionComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template.ViewTaggedFunctionComponent0, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template.ViewTaggedFunctionComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_el_6]: dart.fieldType(html.Element),
    [_text_7]: dart.fieldType(html.Text),
    [_el_9]: dart.fieldType(html.Element),
    [_text_10]: dart.fieldType(html.Text),
    [_appEl_12]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_12_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(components__tagged_object_components$46template.ViewTaggedFunctionComponent0, {
    /*components__tagged_object_components$46template.ViewTaggedFunctionComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  components__tagged_object_components$46template.viewFactory_TaggedFunctionComponent0 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template.ViewTaggedFunctionComponent0.new(parentView, parentIndex);
  };
  components__tagged_object_components$46template._ViewTaggedFunctionComponent1 = class _ViewTaggedFunctionComponent1 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedFunctionComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "memory-cell padding";
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("...");
      this[_el_0][$append](_text_1);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (components__tagged_object_components$46template._ViewTaggedFunctionComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    components__tagged_object_components$46template._ViewTaggedFunctionComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = components__tagged_object_components$46template.ViewTaggedFunctionComponent0._renderType;
  }).prototype = components__tagged_object_components$46template._ViewTaggedFunctionComponent1.prototype;
  dart.addTypeTests(components__tagged_object_components$46template._ViewTaggedFunctionComponent1);
  dart.setMethodSignature(components__tagged_object_components$46template._ViewTaggedFunctionComponent1, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template._ViewTaggedFunctionComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedFunctionComponent), [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template._ViewTaggedFunctionComponent1, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template._ViewTaggedFunctionComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element)
  }));
  components__tagged_object_components$46template.viewFactory_TaggedFunctionComponent1 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template._ViewTaggedFunctionComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template.styles$TaggedFunctionComponentHost*/get styles$TaggedFunctionComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _TaggedFunctionComponent_0_5 = Symbol('_TaggedFunctionComponent_0_5');
  components__tagged_object_components$46template._ViewTaggedFunctionComponentHost0 = class _ViewTaggedFunctionComponentHost0 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedFunctionComponent) {
    build() {
      this[_compView_0] = new components__tagged_object_components$46template.ViewTaggedFunctionComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TaggedFunctionComponent_0_5] = new components__tagged_object_components.TaggedFunctionComponent.new();
      this[_compView_0].create(this[_TaggedFunctionComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfTaggedFunctionComponent()).new(0, this, this.rootEl, this[_TaggedFunctionComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (components__tagged_object_components$46template._ViewTaggedFunctionComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TaggedFunctionComponent_0_5] = null;
    components__tagged_object_components$46template._ViewTaggedFunctionComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = components__tagged_object_components$46template._ViewTaggedFunctionComponentHost0.prototype;
  dart.addTypeTests(components__tagged_object_components$46template._ViewTaggedFunctionComponentHost0);
  dart.setMethodSignature(components__tagged_object_components$46template._ViewTaggedFunctionComponentHost0, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template._ViewTaggedFunctionComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedFunctionComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template._ViewTaggedFunctionComponentHost0, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template._ViewTaggedFunctionComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(components__tagged_object_components$46template.ViewTaggedFunctionComponent0),
    [_TaggedFunctionComponent_0_5]: dart.fieldType(components__tagged_object_components.TaggedFunctionComponent)
  }));
  components__tagged_object_components$46template.viewFactory_TaggedFunctionComponentHost0 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template._ViewTaggedFunctionComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template._TaggedFunctionComponentNgFactory*/get _TaggedFunctionComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTaggedFunctionComponent()).new("tagged-function", dart.fn(components__tagged_object_components$46template.viewFactory_TaggedFunctionComponentHost0, AppViewAndintToAppViewOfTaggedFunctionComponent())));
    }
  });
  dart.copyProperties(components__tagged_object_components$46template, {
    get TaggedFunctionComponentNgFactory() {
      return components__tagged_object_components$46template._TaggedFunctionComponentNgFactory;
    }
  });
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template.styles$TaggedIntComponent*/get styles$TaggedIntComponent() {
      return [components__tagged_object_components$46scss$46css$46shim.styles, components__memory$46scss$46css$46shim.styles];
    }
  });
  const _appEl_6 = Symbol('_appEl_6');
  const _NgFor_6_9 = Symbol('_NgFor_6_9');
  let const$1;
  components__tagged_object_components$46template.ViewTaggedIntComponent0 = class ViewTaggedIntComponent0 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedIntComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_0].className = "memory-cell tag";
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("B");
      this[_el_0][$append](_text_1);
      let _text_2 = html.Text.new("\n");
      parentRenderNode[$append](_text_2);
      this[_el_3] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_3].className = "memory-cell number-value";
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new("");
      this[_el_3][$append](this[_text_4]);
      let _text_5 = html.Text.new("\n");
      parentRenderNode[$append](_text_5);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(components__tagged_object_components$46template.viewFactory_TaggedIntComponent1, AppViewAndintToAppViewOfTaggedIntComponent()));
      this[_NgFor_6_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_6], _TemplateRef_6_8);
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.padding;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_NgFor_6_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_6_9].ngDoCheck();
      }
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.object.value);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_4][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_6];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (components__tagged_object_components$46template.ViewTaggedIntComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_appEl_6] = null;
    this[_NgFor_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    components__tagged_object_components$46template.ViewTaggedIntComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("tagged-int"));
    let t = components__tagged_object_components$46template.ViewTaggedIntComponent0._renderType;
    t == null ? components__tagged_object_components$46template.ViewTaggedIntComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:fvm/lib/components/tagged_object_components.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, components__tagged_object_components$46template.styles$TaggedIntComponent) : t;
    this.setupComponentType(components__tagged_object_components$46template.ViewTaggedIntComponent0._renderType);
  }).prototype = components__tagged_object_components$46template.ViewTaggedIntComponent0.prototype;
  dart.addTypeTests(components__tagged_object_components$46template.ViewTaggedIntComponent0);
  dart.setMethodSignature(components__tagged_object_components$46template.ViewTaggedIntComponent0, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template.ViewTaggedIntComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedIntComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template.ViewTaggedIntComponent0, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template.ViewTaggedIntComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_6_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(components__tagged_object_components$46template.ViewTaggedIntComponent0, {
    /*components__tagged_object_components$46template.ViewTaggedIntComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  components__tagged_object_components$46template.viewFactory_TaggedIntComponent0 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template.ViewTaggedIntComponent0.new(parentView, parentIndex);
  };
  components__tagged_object_components$46template._ViewTaggedIntComponent1 = class _ViewTaggedIntComponent1 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedIntComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "memory-cell padding";
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("...");
      this[_el_0][$append](_text_1);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (components__tagged_object_components$46template._ViewTaggedIntComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    components__tagged_object_components$46template._ViewTaggedIntComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = components__tagged_object_components$46template.ViewTaggedIntComponent0._renderType;
  }).prototype = components__tagged_object_components$46template._ViewTaggedIntComponent1.prototype;
  dart.addTypeTests(components__tagged_object_components$46template._ViewTaggedIntComponent1);
  dart.setMethodSignature(components__tagged_object_components$46template._ViewTaggedIntComponent1, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template._ViewTaggedIntComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedIntComponent), [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template._ViewTaggedIntComponent1, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template._ViewTaggedIntComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element)
  }));
  components__tagged_object_components$46template.viewFactory_TaggedIntComponent1 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template._ViewTaggedIntComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template.styles$TaggedIntComponentHost*/get styles$TaggedIntComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _TaggedIntComponent_0_5 = Symbol('_TaggedIntComponent_0_5');
  components__tagged_object_components$46template._ViewTaggedIntComponentHost0 = class _ViewTaggedIntComponentHost0 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedIntComponent) {
    build() {
      this[_compView_0] = new components__tagged_object_components$46template.ViewTaggedIntComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TaggedIntComponent_0_5] = new components__tagged_object_components.TaggedIntComponent.new();
      this[_compView_0].create(this[_TaggedIntComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfTaggedIntComponent()).new(0, this, this.rootEl, this[_TaggedIntComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (components__tagged_object_components$46template._ViewTaggedIntComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TaggedIntComponent_0_5] = null;
    components__tagged_object_components$46template._ViewTaggedIntComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = components__tagged_object_components$46template._ViewTaggedIntComponentHost0.prototype;
  dart.addTypeTests(components__tagged_object_components$46template._ViewTaggedIntComponentHost0);
  dart.setMethodSignature(components__tagged_object_components$46template._ViewTaggedIntComponentHost0, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template._ViewTaggedIntComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedIntComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template._ViewTaggedIntComponentHost0, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template._ViewTaggedIntComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(components__tagged_object_components$46template.ViewTaggedIntComponent0),
    [_TaggedIntComponent_0_5]: dart.fieldType(components__tagged_object_components.TaggedIntComponent)
  }));
  components__tagged_object_components$46template.viewFactory_TaggedIntComponentHost0 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template._ViewTaggedIntComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template._TaggedIntComponentNgFactory*/get _TaggedIntComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTaggedIntComponent()).new("tagged-int", dart.fn(components__tagged_object_components$46template.viewFactory_TaggedIntComponentHost0, AppViewAndintToAppViewOfTaggedIntComponent())));
    }
  });
  dart.copyProperties(components__tagged_object_components$46template, {
    get TaggedIntComponentNgFactory() {
      return components__tagged_object_components$46template._TaggedIntComponentNgFactory;
    }
  });
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template.styles$TaggedListComponent*/get styles$TaggedListComponent() {
      return [components__tagged_object_components$46scss$46css$46shim.styles, components__memory$46scss$46css$46shim.styles];
    }
  });
  const _appEl_8 = Symbol('_appEl_8');
  const _NgFor_8_9 = Symbol('_NgFor_8_9');
  let const$2;
  components__tagged_object_components$46template.ViewTaggedListComponent0 = class ViewTaggedListComponent0 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_0].className = "memory-cell tag";
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("V");
      this[_el_0][$append](_text_1);
      let _text_2 = html.Text.new("\n");
      parentRenderNode[$append](_text_2);
      this[_el_3] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_3].className = "memory-cell number-value";
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new("");
      this[_el_3][$append](this[_text_4]);
      let _text_5 = html.Text.new("\n");
      parentRenderNode[$append](_text_5);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(components__tagged_object_components$46template.viewFactory_TaggedListComponent1, AppViewAndintToAppViewOfTaggedListComponent()));
      this[_NgFor_6_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = html.Text.new("\n");
      parentRenderNode[$append](_text_7);
      let _anchor_8 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_8);
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, null, this, _anchor_8);
      let _TemplateRef_8_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_8], dart.fn(components__tagged_object_components$46template.viewFactory_TaggedListComponent2, AppViewAndintToAppViewOfTaggedListComponent()));
      this[_NgFor_8_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_8], _TemplateRef_8_8);
      this.init(const$2 || (const$2 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.object.values;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_NgFor_6_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_6_9].ngDoCheck();
      }
      let currVal_2 = _ctx.padding;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_NgFor_8_9].ngForOf = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_8_9].ngDoCheck();
      }
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.object.length);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_4][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_6];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_8];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (components__tagged_object_components$46template.ViewTaggedListComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_appEl_6] = null;
    this[_NgFor_6_9] = null;
    this[_appEl_8] = null;
    this[_NgFor_8_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    components__tagged_object_components$46template.ViewTaggedListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("tagged-list"));
    let t = components__tagged_object_components$46template.ViewTaggedListComponent0._renderType;
    t == null ? components__tagged_object_components$46template.ViewTaggedListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:fvm/lib/components/tagged_object_components.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, components__tagged_object_components$46template.styles$TaggedListComponent) : t;
    this.setupComponentType(components__tagged_object_components$46template.ViewTaggedListComponent0._renderType);
  }).prototype = components__tagged_object_components$46template.ViewTaggedListComponent0.prototype;
  dart.addTypeTests(components__tagged_object_components$46template.ViewTaggedListComponent0);
  dart.setMethodSignature(components__tagged_object_components$46template.ViewTaggedListComponent0, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template.ViewTaggedListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template.ViewTaggedListComponent0, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template.ViewTaggedListComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_6_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_8_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(components__tagged_object_components$46template.ViewTaggedListComponent0, {
    /*components__tagged_object_components$46template.ViewTaggedListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  components__tagged_object_components$46template.viewFactory_TaggedListComponent0 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template.ViewTaggedListComponent0.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  components__tagged_object_components$46template._ViewTaggedListComponent1 = class _ViewTaggedListComponent1 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "memory-cell number-value";
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new("");
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_value = core.int._check(this.locals[$_get]("$implicit"));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_value);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (components__tagged_object_components$46template._ViewTaggedListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    components__tagged_object_components$46template._ViewTaggedListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = components__tagged_object_components$46template.ViewTaggedListComponent0._renderType;
  }).prototype = components__tagged_object_components$46template._ViewTaggedListComponent1.prototype;
  dart.addTypeTests(components__tagged_object_components$46template._ViewTaggedListComponent1);
  dart.setMethodSignature(components__tagged_object_components$46template._ViewTaggedListComponent1, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template._ViewTaggedListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template._ViewTaggedListComponent1, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template._ViewTaggedListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  components__tagged_object_components$46template.viewFactory_TaggedListComponent1 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template._ViewTaggedListComponent1.new(parentView, parentIndex);
  };
  components__tagged_object_components$46template._ViewTaggedListComponent2 = class _ViewTaggedListComponent2 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "memory-cell padding";
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("...");
      this[_el_0][$append](_text_1);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (components__tagged_object_components$46template._ViewTaggedListComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    components__tagged_object_components$46template._ViewTaggedListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = components__tagged_object_components$46template.ViewTaggedListComponent0._renderType;
  }).prototype = components__tagged_object_components$46template._ViewTaggedListComponent2.prototype;
  dart.addTypeTests(components__tagged_object_components$46template._ViewTaggedListComponent2);
  dart.setMethodSignature(components__tagged_object_components$46template._ViewTaggedListComponent2, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template._ViewTaggedListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedListComponent), [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template._ViewTaggedListComponent2, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template._ViewTaggedListComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element)
  }));
  components__tagged_object_components$46template.viewFactory_TaggedListComponent2 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template._ViewTaggedListComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template.styles$TaggedListComponentHost*/get styles$TaggedListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _TaggedListComponent_0_5 = Symbol('_TaggedListComponent_0_5');
  components__tagged_object_components$46template._ViewTaggedListComponentHost0 = class _ViewTaggedListComponentHost0 extends src__core__linker__app_view.AppView$(components__tagged_object_components.TaggedListComponent) {
    build() {
      this[_compView_0] = new components__tagged_object_components$46template.ViewTaggedListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TaggedListComponent_0_5] = new components__tagged_object_components.TaggedListComponent.new();
      this[_compView_0].create(this[_TaggedListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfTaggedListComponent()).new(0, this, this.rootEl, this[_TaggedListComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (components__tagged_object_components$46template._ViewTaggedListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TaggedListComponent_0_5] = null;
    components__tagged_object_components$46template._ViewTaggedListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = components__tagged_object_components$46template._ViewTaggedListComponentHost0.prototype;
  dart.addTypeTests(components__tagged_object_components$46template._ViewTaggedListComponentHost0);
  dart.setMethodSignature(components__tagged_object_components$46template._ViewTaggedListComponentHost0, () => ({
    __proto__: dart.getMethods(components__tagged_object_components$46template._ViewTaggedListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(components__tagged_object_components.TaggedListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(components__tagged_object_components$46template._ViewTaggedListComponentHost0, () => ({
    __proto__: dart.getFields(components__tagged_object_components$46template._ViewTaggedListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(components__tagged_object_components$46template.ViewTaggedListComponent0),
    [_TaggedListComponent_0_5]: dart.fieldType(components__tagged_object_components.TaggedListComponent)
  }));
  components__tagged_object_components$46template.viewFactory_TaggedListComponentHost0 = function(parentView, parentIndex) {
    return new components__tagged_object_components$46template._ViewTaggedListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template._TaggedListComponentNgFactory*/get _TaggedListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTaggedListComponent()).new("tagged-list", dart.fn(components__tagged_object_components$46template.viewFactory_TaggedListComponentHost0, AppViewAndintToAppViewOfTaggedListComponent())));
    }
  });
  dart.copyProperties(components__tagged_object_components$46template, {
    get TaggedListComponentNgFactory() {
      return components__tagged_object_components$46template._TaggedListComponentNgFactory;
    }
  });
  dart.defineLazy(components__tagged_object_components$46template, {
    /*components__tagged_object_components$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  components__tagged_object_components$46template.initReflector = function() {
    if (dart.test(components__tagged_object_components$46template._visited)) {
      return;
    }
    components__tagged_object_components$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(components__tagged_object_components.TaggedClosureComponent), components__tagged_object_components$46template.TaggedClosureComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(components__tagged_object_components.TaggedFunctionComponent), components__tagged_object_components$46template.TaggedFunctionComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(components__tagged_object_components.TaggedIntComponent), components__tagged_object_components$46template.TaggedIntComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(components__tagged_object_components.TaggedListComponent), components__tagged_object_components$46template.TaggedListComponentNgFactory);
    angular$46template.initReflector();
    virtual_machine$46template.initReflector();
  };
  dart.trackLibraries("packages/fvm/components/tagged_object_components.template.ddc", {
    "package:fvm/components/tagged_object_components.template.dart": components__tagged_object_components$46template
  }, '{"version":3,"sourceRoot":"","sources":["tagged_object_components.template.dart"],"names":[],"mappings":"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","file":"tagged_object_components.template.ddc.js"}');
  // Exports:
  return {
    components__tagged_object_components$46template: components__tagged_object_components$46template
  };
});

//# sourceMappingURL=tagged_object_components.template.ddc.js.map
