define(['dart_sdk', 'packages/angular_components/material_menu/menu_item_affix_list.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_menu/menu_root', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/model/menu/menu_item_affix.template', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, menu_item_affix_list$46scss$46css, view_type, change_detection, modules, menu_item_affix_list, menu_item_affix, material_icon, button_decorator, button_decorator$, material_icon$, menu_root, has_disabled, angular, has_disabled$, menu_root$, menu_item_affix$, icon) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_menu__menu_item_affix_list$46scss$46css$46shim = menu_item_affix_list$46scss$46css.material_menu__menu_item_affix_list$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__common__directives__ng_class = modules.src__common__directives__ng_class;
  const material_menu__menu_item_affix_list = menu_item_affix_list.material_menu__menu_item_affix_list;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_menu__menu_root = menu_root.material_menu__menu_root;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular$46template = angular.angular$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const material_menu__menu_root$46template = menu_root$.material_menu__menu_root$46template;
  const model__menu__menu_item_affix$46template = menu_item_affix$.model__menu__menu_item_affix$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const _root = Object.create(null);
  const material_menu__menu_item_affix_list$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMenuItemAffixListComponent = () => (AppViewOfMenuItemAffixListComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent)))();
  let AppViewAndintToAppViewOfMenuItemAffixListComponent = () => (AppViewAndintToAppViewOfMenuItemAffixListComponent = dart.constFn(dart.fnType(AppViewOfMenuItemAffixListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMenuItemAffixListComponent = () => (ComponentRefOfMenuItemAffixListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent)))();
  let ComponentFactoryOfMenuItemAffixListComponent = () => (ComponentFactoryOfMenuItemAffixListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__menu_item_affix_list.MenuItemAffixListComponent)))();
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template.styles$MenuItemAffixListComponent*/get styles$MenuItemAffixListComponent() {
      return [material_menu__menu_item_affix_list$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  let const$;
  material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0 = class ViewMenuItemAffixListComponent0 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1, AppViewAndintToAppViewOfMenuItemAffixListComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new("\n");
      parentRenderNode[$append](_text_2);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.hasAffixes;
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("menu-item-affix-list"));
    let t = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
    t == null ? material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_item_affix_list.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_menu__menu_item_affix_list$46template.styles$MenuItemAffixListComponent) : t;
    this.setupComponentType(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType);
  }).prototype = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, {
    /*material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent0 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(parentView, parentIndex);
  };
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _expr_0 = Symbol('_expr_0');
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1 = class _ViewMenuItemAffixListComponent1 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      let _text_0 = html.Text.new("\n  ");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent2, AppViewAndintToAppViewOfMenuItemAffixListComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new("\n");
      this.init([_text_0, this[_appEl_1], _text_2], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.affixes;
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
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.new(parentView, parentIndex);
  };
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2 = class _ViewMenuItemAffixListComponent2 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      let _text_0 = html.Text.new("\n    ");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent3, AppViewAndintToAppViewOfMenuItemAffixListComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new("\n  ");
      this.init([_text_0, this[_appEl_1], _text_2], null);
      return null;
    }
    detectChangesInternal() {
      let local_affix = model__menu__menu_item_affix.MenuItemAffix._check(this.locals[$_get]("$implicit"));
      this[_NgIf_1_9].ngIf = local_affix.isVisible;
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent2 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.new(parentView, parentIndex);
  };
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3 = class _ViewMenuItemAffixListComponent3 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      let _text_0 = html.Text.new("\n      ");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent4, AppViewAndintToAppViewOfMenuItemAffixListComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new("\n      ");
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent5, AppViewAndintToAppViewOfMenuItemAffixListComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = html.Text.new("\n    ");
      this.init([_text_0, this[_appEl_1], _text_2, this[_appEl_3], _text_4], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_affix = model__menu__menu_item_affix.MenuItemAffix._check(this.parentView.locals[$_get]("$implicit"));
      this[_NgIf_1_9].ngIf = _ctx.isIconAffix(local_affix);
      this[_NgIf_3_9].ngIf = _ctx.isCaptionAffix(local_affix);
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent3 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _MaterialIconComponent_0_6 = Symbol('_MaterialIconComponent_0_6');
  const _NgClass_0_7 = Symbol('_NgClass_0_7');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_7 = Symbol('_expr_7');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4 = class _ViewMenuItemAffixListComponent4 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "baseline", "");
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "material-list-item-primary secondary-icon";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_NgClass_0_7] = new src__common__directives__ng_class.NgClass.new(this[_el_0]);
      let _text_1 = html.Text.new("\n      ");
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_affix = model__menu__menu_item_affix.MenuItemAffix._check(this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_4 = !dart.test(_ctx.isActionIconAffix(local_affix));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_ButtonDirective_0_5].instance.disabled = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      changed = false;
      let currVal_5 = _ctx.getIcon(local_affix);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialIconComponent_0_6].icon = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_NgClass_0_7].initialClasses = "material-list-item-primary secondary-icon";
      }
      let currVal_7 = local_affix.cssClass;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_NgClass_0_7].rawClass = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgClass_0_7].ngDoCheck();
      }
      if (firstCheck) {
        this.updateElemClass(this[_el_0], "action-icon", false);
      }
      let currVal_0 = _ctx.getActionIconAriaLabel(_ctx.getIcon(local_affix));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_0], "aria-label", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_2 = !dart.test(_ctx.isActionIconAffix(local_affix));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateElemClass(this[_el_0], "disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_affix.isVisibleOnHover;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.updateElemClass(this[_el_0], "hover-icon", currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_NgClass_0_7].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_affix = model__menu__menu_item_affix.MenuItemAffix._check(this.parentView.parentView.locals[$_get]("$implicit"));
      this.ctx.handleActionIconTrigger(this.ctx.getIcon(local_affix), html.Event._check($event));
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_NgClass_0_7] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_NgClass_0_7]: dart.fieldType(src__common__directives__ng_class.NgClass),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent4 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.new(parentView, parentIndex);
  };
  const _NgClass_0_5 = Symbol('_NgClass_0_5');
  const _text_2 = Symbol('_text_2');
  const _expr_1 = Symbol('_expr_1');
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5 = class _ViewMenuItemAffixListComponent5 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this[_el_0].className = "material-list-item-primary caption-text";
      this.addShimE(this[_el_0]);
      this[_NgClass_0_5] = new src__common__directives__ng_class.NgClass.new(this[_el_0]);
      let _text_1 = html.Text.new("\n        ");
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new("");
      this[_el_0][$append](this[_text_2]);
      let _text_3 = html.Text.new("\n      ");
      this[_el_0][$append](_text_3);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_affix = model__menu__menu_item_affix.MenuItemAffix._check(this.parentView.parentView.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_NgClass_0_5].initialClasses = "material-list-item-primary caption-text";
      }
      let currVal_1 = local_affix.cssClass;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_NgClass_0_5].rawClass = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgClass_0_5].ngDoCheck();
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.getText(local_affix));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_2][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    destroyInternal() {
      this[_NgClass_0_5].ngOnDestroy();
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_NgClass_0_5] = null;
    this[_text_2] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_NgClass_0_5]: dart.fieldType(src__common__directives__ng_class.NgClass),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent5 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template.styles$MenuItemAffixListComponentHost*/get styles$MenuItemAffixListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MenuItemAffixListComponent_0_5 = Symbol('_MenuItemAffixListComponent_0_5');
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0 = class _ViewMenuItemAffixListComponentHost0 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      this[_compView_0] = new material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MenuItemAffixListComponent_0_5] = new material_menu__menu_item_affix_list.MenuItemAffixListComponent.new(this[_compView_0].ref, material_menu__menu_root.MenuRoot._check(this.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MenuItemAffixListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMenuItemAffixListComponent()).new(0, this, this.rootEl, this[_MenuItemAffixListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MenuItemAffixListComponent_0_5];
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
      this[_MenuItemAffixListComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MenuItemAffixListComponent_0_5] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0),
    [_MenuItemAffixListComponent_0_5]: dart.fieldType(material_menu__menu_item_affix_list.MenuItemAffixListComponent)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template._MenuItemAffixListComponentNgFactory*/get _MenuItemAffixListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMenuItemAffixListComponent()).new("menu-item-affix-list", dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0, AppViewAndintToAppViewOfMenuItemAffixListComponent())));
    }
  });
  dart.copyProperties(material_menu__menu_item_affix_list$46template, {
    get MenuItemAffixListComponentNgFactory() {
      return material_menu__menu_item_affix_list$46template._MenuItemAffixListComponentNgFactory;
    }
  });
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__menu_item_affix_list$46template.initReflector = function() {
    if (dart.test(material_menu__menu_item_affix_list$46template._visited)) {
      return;
    }
    material_menu__menu_item_affix_list$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__menu_item_affix_list.MenuItemAffixListComponent), material_menu__menu_item_affix_list$46template.MenuItemAffixListComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_menu__menu_root$46template.initReflector();
    model__menu__menu_item_affix$46template.initReflector();
    model__ui__icon$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_menu/menu_item_affix_list.template.ddc", {
    "package:angular_components/material_menu/menu_item_affix_list.template.dart": material_menu__menu_item_affix_list$46template
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix_list.template.dart"],"names":[],"mappings":"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","file":"menu_item_affix_list.template.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_item_affix_list$46template: material_menu__menu_item_affix_list$46template
  };
});

//# sourceMappingURL=menu_item_affix_list.template.ddc.js.map
