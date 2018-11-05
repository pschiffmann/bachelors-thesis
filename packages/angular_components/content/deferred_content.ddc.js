define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, disposer, change_detection, modules) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__linker__view_container_ref = modules.src__core__linker__view_container_ref;
  const src__core__linker__view_ref = modules.src__core__linker__view_ref;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const _root = Object.create(null);
  const content__deferred_content = Object.create(_root);
  const $remove = dartx.remove;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $width = dartx.width;
  const $height = dartx.height;
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  const _viewContainer = Symbol('_viewContainer');
  const _template = Symbol('_template');
  const _disposer = Symbol('_disposer');
  const _placeholder = Symbol('_placeholder');
  const _viewRef = Symbol('_viewRef');
  const _visible = Symbol('_visible');
  const _setVisible = Symbol('_setVisible');
  content__deferred_content.DeferredContentDirective = class DeferredContentDirective extends core.Object {
    get preserveDimensions() {
      return this[preserveDimensions];
    }
    set preserveDimensions(value) {
      this[preserveDimensions] = value;
    }
    [_setVisible](value) {
      if (value == this[_visible]) return;
      if (dart.test(value)) {
        if (dart.test(this.preserveDimensions)) {
          this[_placeholder][$remove]();
        }
        this[_viewRef] = this[_viewContainer].createEmbeddedView(this[_template]);
      } else {
        if (dart.test(this.preserveDimensions)) {
          let t = this[_viewRef];
          let l = t == null ? null : t.rootNodes;
          let rootNodes = l != null ? l : JSArrayOfNode().of([]);
          let content = dart.test(rootNodes[$isNotEmpty]) ? rootNodes[$first] : null;
          if (html.HtmlElement.is(content)) {
            let dimensions = content.getBoundingClientRect();
            this[_placeholder].style[$width] = dart.str(dimensions[$width]) + "px";
            this[_placeholder].style[$height] = dart.str(dimensions[$height]) + "px";
          }
        }
        this[_viewContainer].clear();
        if (dart.test(this.preserveDimensions)) {
          let t$ = this[_viewContainer].element;
          let container = t$ == null ? null : t$.nativeElement;
          if ((container == null ? null : dart.dload(container, 'parentNode')) != null) {
            dart.dsend(dart.dload(container, 'parentNode'), 'insertBefore', [this[_placeholder], container]);
          }
        }
      }
      this[_visible] = value;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
      this[_viewContainer] = null;
      this[_template] = null;
    }
  };
  (content__deferred_content.DeferredContentDirective.new = function(viewContainer, template, parent) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_placeholder] = html.DivElement.new();
    this[_viewRef] = null;
    this[preserveDimensions] = false;
    this[_visible] = false;
    this[_viewContainer] = viewContainer;
    this[_template] = template;
    this[_disposer].addStreamSubscription(core.bool, parent.contentVisible.listen(dart.bind(this, _setVisible)));
  }).prototype = content__deferred_content.DeferredContentDirective.prototype;
  dart.addTypeTests(content__deferred_content.DeferredContentDirective);
  const preserveDimensions = Symbol("DeferredContentDirective.preserveDimensions");
  content__deferred_content.DeferredContentDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(content__deferred_content.DeferredContentDirective, () => ({
    __proto__: dart.getMethods(content__deferred_content.DeferredContentDirective.__proto__),
    [_setVisible]: dart.fnType(dart.void, [core.bool]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(content__deferred_content.DeferredContentDirective, () => ({
    __proto__: dart.getFields(content__deferred_content.DeferredContentDirective.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_placeholder]: dart.finalFieldType(html.DivElement),
    [_viewContainer]: dart.fieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_viewRef]: dart.fieldType(src__core__linker__view_ref.EmbeddedViewRef),
    [_template]: dart.fieldType(src__core__linker__template_ref.TemplateRef),
    preserveDimensions: dart.fieldType(core.bool),
    [_visible]: dart.fieldType(core.bool)
  }));
  const _view = Symbol('_view');
  content__deferred_content.CachingDeferredContentDirective = class CachingDeferredContentDirective extends core.Object {
    [_setVisible](value) {
      if (value == this[_visible]) return;
      if (dart.test(value) && this[_view] == null) {
        this[_view] = this[_viewContainer].createEmbeddedView(this[_template]);
      }
      this[_visible] = value;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
      this[_viewContainer] = null;
      this[_template] = null;
    }
  };
  (content__deferred_content.CachingDeferredContentDirective.new = function(viewContainer, template, parent) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_view] = null;
    this[_visible] = false;
    this[_viewContainer] = viewContainer;
    this[_template] = template;
    this[_disposer].addStreamSubscription(core.bool, parent.contentVisible.listen(dart.bind(this, _setVisible)));
  }).prototype = content__deferred_content.CachingDeferredContentDirective.prototype;
  dart.addTypeTests(content__deferred_content.CachingDeferredContentDirective);
  content__deferred_content.CachingDeferredContentDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(content__deferred_content.CachingDeferredContentDirective, () => ({
    __proto__: dart.getMethods(content__deferred_content.CachingDeferredContentDirective.__proto__),
    [_setVisible]: dart.fnType(dart.void, [core.bool]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(content__deferred_content.CachingDeferredContentDirective, () => ({
    __proto__: dart.getFields(content__deferred_content.CachingDeferredContentDirective.__proto__),
    [_viewContainer]: dart.fieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_template]: dart.fieldType(src__core__linker__template_ref.TemplateRef),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_view]: dart.fieldType(src__core__linker__view_ref.ViewRef),
    [_visible]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/content/deferred_content.ddc", {
    "package:angular_components/content/deferred_content.dart": content__deferred_content
  }, '{"version":3,"sourceRoot":"","sources":["deferred_content.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoCO;;;;;;kBAKY,KAAU;AACzB,UAAI,KAAK,IAAI,cAAQ,EAAE;AACvB,oBAAI,KAAK,GAAE;AACT,sBAAI,uBAAkB,GAAE;AAEtB,4BAAY,SAAO;;AAErB,sBAAQ,GAAG,oBAAc,mBAAmB,CAAC,eAAS;aACjD;AACL,sBAAI,uBAAkB,GAAE;AAEtB,kBAAgB,cAAQ;;cAApB,4BAAmC;AACvC,cAAI,oBAAU,SAAS,aAAW,IAAG,SAAS,QAAM,GAAG;AACvD,kCAAI,OAAO,GAAiB;AAG1B,gBAAI,aAAa,OAAO,sBAAsB;AAC9C,YAAA,AACE,AAAE,kBADQ,MAAM,QACT,GAAG,SAAG,UAAU,QAAM;YAD/B,AAEE,AAAE,kBAFQ,MAAM,SAER,GAAG,SAAG,UAAU,SAAO;;;AAKrC,4BAAc,MAAM;AAEpB,sBAAI,uBAAkB,GAAE;AAEtB,mBAAgB,oBAAc,QAAQ;cAAlC;AACJ,eAAI,SAAS,6BAAT,SAAS,oBAAgB,MAAM;AACjC,2CAAS,kCAAyB,kBAAY,EAAE,SAAS;;;;AAI/D,oBAAQ,GAAG,KAAK;IAClB;;AASE,qBAAS,QAAQ;AACjB,0BAAc,GAAG;AACjB,qBAAS,GAAG;IACd;;8FATyC,MAA2B;IAzD9D,eAAS,OAAG,0CAAgB;IAC5B,kBAAY,GAAG,mBAAU;IAGf,cAAQ;IAUnB,wBAAkB,GAAG;IAGrB,cAAQ,GAAG;IAwCP,oBAAc;IAAO,eAAS;AACrC,mBAAS,sBAAsB,YAAC,MAAM,eAAe,OAAO,CAAC,4BAAW;EAC1E;;;;;;;;;;;;;;;;;;;;;kBA4BiB,KAAU;AACzB,UAAI,KAAK,IAAI,cAAQ,EAAE;AACvB,oBAAI,KAAK,KAAI,WAAK,IAAI,MAAM;AAC1B,mBAAK,GAAG,oBAAc,mBAAmB,CAAC,eAAS;;AAErD,oBAAQ,GAAG,KAAK;IAClB;;AASE,qBAAS,QAAQ;AACjB,0BAAc,GAAG;AACjB,qBAAS,GAAG;IACd;;qGATyC,MAA2B;IAf9D,eAAS,OAAG,0CAAgB;IAC1B,WAAK;IAGR,cAAQ,GAAG;IAWP,oBAAc;IAAO,eAAS;AACrC,mBAAS,sBAAsB,YAAC,MAAM,eAAe,OAAO,CAAC,4BAAW;EAC1E","file":"deferred_content.ddc.js"}');
  // Exports:
  return {
    content__deferred_content: content__deferred_content
  };
});

//# sourceMappingURL=deferred_content.ddc.js.map
