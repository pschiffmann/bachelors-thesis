define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/popup/popup_hierarchy'], function(dart_sdk, change_detection, dom_service, modal, popup_hierarchy) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const _root = Object.create(null);
  const model__a11y__active_item_directive = Object.create(_root);
  const $scrollIntoView = dartx.scrollIntoView;
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _element = Symbol('_element');
  const _domService = Symbol('_domService');
  const _modal = Symbol('_modal');
  const _popupRef = Symbol('_popupRef');
  const _active = Symbol('_active');
  const _initialized = Symbol('_initialized');
  const _visibilitySubscription = Symbol('_visibilitySubscription');
  const _hasHover = Symbol('_hasHover');
  const _scrollIntoViewIfNecessary = Symbol('_scrollIntoViewIfNecessary');
  const _shouldScrollIntoView = Symbol('_shouldScrollIntoView');
  const _scrollIntoView = Symbol('_scrollIntoView');
  model__a11y__active_item_directive.ActiveItemDirective = class ActiveItemDirective extends core.Object {
    get active() {
      return this[_active];
    }
    ngOnDestroy() {
      let t = this[_visibilitySubscription];
      t == null ? null : t.cancel();
      this[_visibilitySubscription] = null;
    }
    ngAfterViewInit() {
      this[_initialized] = true;
      this[_scrollIntoViewIfNecessary]();
    }
    set itemActive(value) {
      if (value == this[_active]) return;
      this[_active] = value;
      this[_scrollIntoViewIfNecessary]();
    }
    get [_shouldScrollIntoView]() {
      return dart.test(this[_initialized]) && dart.test(this[_active]) && !dart.test(this[_hasHover]);
    }
    [_scrollIntoViewIfNecessary]() {
      let t = this[_visibilitySubscription];
      t == null ? null : t.cancel();
      if (dart.test(this[_shouldScrollIntoView])) {
        let isVisible = this[_popupRef] != null ? this[_popupRef].isVisible : this[_modal] != null ? this[_modal].visible : true;
        if (dart.test(isVisible)) {
          this[_scrollIntoView]();
        } else {
          let onVisibleChanged = this[_popupRef] != null ? this[_popupRef].onVisibleChanged : this[_modal].onVisibleChanged;
          this[_visibilitySubscription] = onVisibleChanged.listen(dart.fn(isVisible => {
            if (dart.test(isVisible)) {
              let t = this[_visibilitySubscription];
              t == null ? null : t.cancel();
              if (dart.test(this[_shouldScrollIntoView])) {
                this[_scrollIntoView]();
              }
            }
          }, boolToNull()));
        }
      }
    }
    [_scrollIntoView]() {
      this[_domService].scheduleWrite(dart.fn(() => {
        try {
          let options = js_util.newObject();
          js_util.setProperty(options, "block", "nearest");
          js_util.setProperty(options, "inline", "nearest");
          js_util.callMethod(this[_element], "scrollIntoView", [options]);
        } catch (_) {
          this[_element][$scrollIntoView]();
        }
      }, VoidToNull()));
    }
    onMouseEnter() {
      this[_hasHover] = true;
    }
    onMouseLeave() {
      this[_hasHover] = false;
    }
  };
  (model__a11y__active_item_directive.ActiveItemDirective.new = function(element, domService, modal, popupRef) {
    this[_active] = false;
    this[_initialized] = false;
    this[_visibilitySubscription] = null;
    this[_hasHover] = false;
    this[_element] = element;
    this[_domService] = domService;
    this[_modal] = modal;
    this[_popupRef] = popupRef;
  }).prototype = model__a11y__active_item_directive.ActiveItemDirective.prototype;
  dart.addTypeTests(model__a11y__active_item_directive.ActiveItemDirective);
  model__a11y__active_item_directive.ActiveItemDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(model__a11y__active_item_directive.ActiveItemDirective, () => ({
    __proto__: dart.getMethods(model__a11y__active_item_directive.ActiveItemDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_scrollIntoViewIfNecessary]: dart.fnType(dart.void, []),
    [_scrollIntoView]: dart.fnType(dart.void, []),
    onMouseEnter: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(model__a11y__active_item_directive.ActiveItemDirective, () => ({
    __proto__: dart.getGetters(model__a11y__active_item_directive.ActiveItemDirective.__proto__),
    active: core.bool,
    [_shouldScrollIntoView]: core.bool
  }));
  dart.setSetterSignature(model__a11y__active_item_directive.ActiveItemDirective, () => ({
    __proto__: dart.getSetters(model__a11y__active_item_directive.ActiveItemDirective.__proto__),
    itemActive: core.bool
  }));
  dart.setFieldSignature(model__a11y__active_item_directive.ActiveItemDirective, () => ({
    __proto__: dart.getFields(model__a11y__active_item_directive.ActiveItemDirective.__proto__),
    [_element]: dart.finalFieldType(html.HtmlElement),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_modal]: dart.finalFieldType(laminate__components__modal__modal.Modal),
    [_popupRef]: dart.finalFieldType(src__laminate__popup__popup_ref.PopupRef),
    [_active]: dart.fieldType(core.bool),
    [_initialized]: dart.fieldType(core.bool),
    [_visibilitySubscription]: dart.fieldType(async.StreamSubscription),
    [_hasHover]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/model/a11y/active_item_directive.ddc", {
    "package:angular_components/model/a11y/active_item_directive.dart": model__a11y__active_item_directive
  }, '{"version":3,"sourceRoot":"","sources":["active_item_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YAwCqB,cAAO;;;AAOxB,2CAAuB;;AACvB,mCAAuB,GAAG;IAC5B;;AAIE,wBAAY,GAAG;AACf,sCAA0B;IAC5B;mBAIe,KAAU;AACvB,UAAI,KAAK,IAAI,aAAO,EAAE;AACtB,mBAAO,GAAG,KAAK;AACf,sCAA0B;IAC5B;;YAE0D,WAAxB,kBAAY,eAAI,aAAO,gBAAK,eAAS;;;AAGrE,2CAAuB;;AAEvB,oBAAI,2BAAqB,GAAE;AACzB,YAAI,YAAY,eAAS,IAAI,OACvB,eAAS,UAAU,GACnB,YAAM,IAAI,OAAO,YAAM,QAAQ,GAAG;AACxC,sBAAI,SAAS,GAAE;AACb,+BAAe;eACV;AACL,cAAI,mBAAmB,eAAS,IAAI,OAC9B,eAAS,iBAAiB,GAC1B,YAAM,iBAAiB;AAC7B,uCAAuB,GAAG,gBAAgB,OAAO,CAAC,QAAC,SAAS;AAC1D,0BAAI,SAAS,GAAE;AACb,mDAAuB;;AACvB,4BAAI,2BAAqB,GAAE;AACzB,qCAAe;;;;;;IAM3B;;AAGE,uBAAW,cAAc,CAAC;AACxB,YAAI;AACF,cAAI,UAAU,AAAQ,iBAAS;AAC/B,UAAQ,mBAAW,CAAC,OAAO,EAAE,SAAS;AACtC,UAAQ,mBAAW,CAAC,OAAO,EAAE,UAAU;AACvC,UAAQ,kBAAU,CAAC,cAAQ,EAAE,kBAAkB,CAAC,OAAO;iBAChD;AAAG,AACV,wBAAQ,iBAAe;;;IAG7B;;AAOE,qBAAS,GAAG;IACd;;AAIE,qBAAS,GAAG;IACd;;;IApFK,aAAO,GAAG;IAEV,kBAAY,GAAG;IAED,6BAAuB;IAsErC,eAAS,GAAG;IAhEQ,cAAQ;IAAO,iBAAW;IAAmB,YAAM;IACvD,eAAS;EAAC","file":"active_item_directive.ddc.js"}');
  // Exports:
  return {
    model__a11y__active_item_directive: model__a11y__active_item_directive
  };
});

//# sourceMappingURL=active_item_directive.ddc.js.map
