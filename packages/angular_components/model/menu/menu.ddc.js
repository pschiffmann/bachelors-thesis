define(['dart_sdk', 'packages/angular_components/model/observable/observable', 'packages/angular_components/model/collection/labeled_list', 'packages/quiver/strings', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/ui/icon', 'packages/angular_components/model/ui/accepts_width', 'packages/angular_components/model/menu/menu_item_affix', 'packages/observable/observable', 'packages/built_collection/built_collection', 'packages/angular_components/model/ui/display_name', 'packages/angular_components/model/collection/combined_list', 'packages/angular_components/model/a11y/active_item'], function(dart_sdk, observable, labeled_list, strings, properties, icon, accepts_width, menu_item_affix, observable$, built_collection, display_name, combined_list, active_item) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__observable__observable = observable.model__observable__observable;
  const model__collection__labeled_list = labeled_list.model__collection__labeled_list;
  const strings$ = strings.strings;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__ui__icon = icon.model__ui__icon;
  const model__ui__accepts_width = accepts_width.model__ui__accepts_width;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const src__observable_list = observable$.src__observable_list;
  const src__list = built_collection.src__list;
  const model__ui__display_name = display_name.model__ui__display_name;
  const model__collection__combined_list = combined_list.model__collection__combined_list;
  const model__a11y__active_item = active_item.model__a11y__active_item;
  const _root = Object.create(null);
  const model__menu__menu = Object.create(_root);
  const $toString = dartx.toString;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $map = dartx.map;
  let ObservableReferenceOfbool = () => (ObservableReferenceOfbool = dart.constFn(model__observable__observable.ObservableReference$(core.bool)))();
  let ObservableReferenceOfIconVisibility = () => (ObservableReferenceOfIconVisibility = dart.constFn(model__observable__observable.ObservableReference$(model__menu__menu_item_affix.IconVisibility)))();
  let ObservableListOfMenuItemAffix = () => (ObservableListOfMenuItemAffix = dart.constFn(src__observable_list.ObservableList$(model__menu__menu_item_affix.MenuItemAffix)))();
  let BuiltListOfString = () => (BuiltListOfString = dart.constFn(src__list.BuiltList$(core.String)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  const _hasSeparator = Symbol('_hasSeparator');
  const _isCollapsible = Symbol('_isCollapsible');
  const _isExpanded = Symbol('_isExpanded');
  const _is_MenuItemGroup_default = Symbol('_is_MenuItemGroup_default');
  model__menu__menu.MenuItemGroup$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class MenuItemGroup extends model__collection__labeled_list.LabeledList$(T) {
      get hasSeparator() {
        return this[_hasSeparator].value;
      }
      set hasSeparator(value) {
        this[_hasSeparator].value = value;
      }
      get isCollapsible() {
        return this[_isCollapsible].value;
      }
      set isCollapsible(value) {
        this[_isCollapsible].value = value;
      }
      get onCollapsibleChange() {
        return this[_isCollapsible].stream;
      }
      get isExpanded() {
        return this[_isExpanded].value;
      }
      set isExpanded(value) {
        this[_isExpanded].value = value;
      }
      get onExpandedChange() {
        return this[_isExpanded].stream;
      }
    }
    (MenuItemGroup.new = function(items, label, hasSeparator, isCollapsible, isExpanded) {
      if (label === void 0) label = null;
      if (hasSeparator === void 0) hasSeparator = true;
      if (isCollapsible === void 0) isCollapsible = false;
      if (isExpanded === void 0) isExpanded = true;
      this[_hasSeparator] = new (ObservableReferenceOfbool()).new(hasSeparator);
      this[_isCollapsible] = new (ObservableReferenceOfbool()).new(isCollapsible);
      this[_isExpanded] = new (ObservableReferenceOfbool()).new(isExpanded);
      MenuItemGroup.__proto__.withLabel.call(this, ListOfT().unmodifiable(items), label);
    }).prototype = MenuItemGroup.prototype;
    dart.addTypeTests(MenuItemGroup);
    MenuItemGroup.prototype[_is_MenuItemGroup_default] = true;
    dart.setGetterSignature(MenuItemGroup, () => ({
      __proto__: dart.getGetters(MenuItemGroup.__proto__),
      hasSeparator: core.bool,
      isCollapsible: core.bool,
      onCollapsibleChange: async.Stream$(core.bool),
      isExpanded: core.bool,
      onExpandedChange: async.Stream$(core.bool)
    }));
    dart.setSetterSignature(MenuItemGroup, () => ({
      __proto__: dart.getSetters(MenuItemGroup.__proto__),
      hasSeparator: core.bool,
      isCollapsible: core.bool,
      isExpanded: core.bool
    }));
    dart.setFieldSignature(MenuItemGroup, () => ({
      __proto__: dart.getFields(MenuItemGroup.__proto__),
      [_isCollapsible]: dart.finalFieldType(ObservableReferenceOfbool()),
      [_isExpanded]: dart.finalFieldType(ObservableReferenceOfbool()),
      [_hasSeparator]: dart.finalFieldType(ObservableReferenceOfbool())
    }));
    return MenuItemGroup;
  });
  model__menu__menu.MenuItemGroup = model__menu__menu.MenuItemGroup$();
  dart.addTypeTests(model__menu__menu.MenuItemGroup, _is_MenuItemGroup_default);
  const _width = Symbol('_width');
  const _is_MenuModel_default = Symbol('_is_MenuModel_default');
  model__menu__menu.MenuModel$ = dart.generic(T => {
    let MenuItemGroupOfT = () => (MenuItemGroupOfT = dart.constFn(model__menu__menu.MenuItemGroup$(T)))();
    let ListOfMenuItemGroupOfT = () => (ListOfMenuItemGroupOfT = dart.constFn(core.List$(MenuItemGroupOfT())))();
    let JSArrayOfMenuItemGroupOfT = () => (JSArrayOfMenuItemGroupOfT = dart.constFn(_interceptors.JSArray$(MenuItemGroupOfT())))();
    class MenuModel extends core.Object {
      get itemGroups() {
        return this[itemGroups$];
      }
      set itemGroups(value) {
        super.itemGroups = value;
      }
      get icon() {
        return this[icon$];
      }
      set icon(value) {
        super.icon = value;
      }
      get uiIcon() {
        return this.icon;
      }
      get hasIcon() {
        return this.icon != null;
      }
      get tooltipText() {
        return this[tooltipText$];
      }
      set tooltipText(value) {
        super.tooltipText = value;
      }
      get hasTooltip() {
        return strings$.isNotEmpty(this.tooltipText);
      }
      get width() {
        return this[_width];
      }
      set width(val) {
        if (val == null) {
          this[_width] = null;
        } else {
          this[_width] = utils__angular__properties__properties.getInt(val);
          if (!(dart.notNull(this[_width]) >= 0 && dart.notNull(this[_width]) <= 5)) dart.assertFailed();
        }
      }
    }
    (MenuModel.new = function(itemGroups, opts) {
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let tooltipText = opts && 'tooltipText' in opts ? opts.tooltipText : null;
      this[_width] = null;
      this[icon$] = icon;
      this[tooltipText$] = tooltipText;
      this[itemGroups$] = ListOfMenuItemGroupOfT().unmodifiable(itemGroups);
      this.width = width;
    }).prototype = MenuModel.prototype;
    (MenuModel.flat = function(items, opts) {
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let tooltipText = opts && 'tooltipText' in opts ? opts.tooltipText : null;
      this[_width] = null;
      this[icon$] = icon;
      this[tooltipText$] = tooltipText;
      this[itemGroups$] = JSArrayOfMenuItemGroupOfT().of([new (MenuItemGroupOfT()).new(items)]);
      this.width = width;
    }).prototype = MenuModel.prototype;
    dart.addTypeTests(MenuModel);
    MenuModel.prototype[_is_MenuModel_default] = true;
    const itemGroups$ = Symbol("MenuModel.itemGroups");
    const icon$ = Symbol("MenuModel.icon");
    const tooltipText$ = Symbol("MenuModel.tooltipText");
    MenuModel[dart.implements] = () => [model__ui__icon.HasIcon, model__ui__accepts_width.AcceptsWidth];
    dart.setGetterSignature(MenuModel, () => ({
      __proto__: dart.getGetters(MenuModel.__proto__),
      uiIcon: model__ui__icon.Icon,
      hasIcon: core.bool,
      hasTooltip: core.bool,
      width: core.int
    }));
    dart.setSetterSignature(MenuModel, () => ({
      __proto__: dart.getSetters(MenuModel.__proto__),
      width: dart.dynamic
    }));
    dart.setFieldSignature(MenuModel, () => ({
      __proto__: dart.getFields(MenuModel.__proto__),
      itemGroups: dart.finalFieldType(ListOfMenuItemGroupOfT()),
      icon: dart.finalFieldType(model__ui__icon.Icon),
      tooltipText: dart.finalFieldType(core.String),
      [_width]: dart.fieldType(core.int)
    }));
    return MenuModel;
  });
  model__menu__menu.MenuModel = model__menu__menu.MenuModel$();
  dart.addTypeTests(model__menu__menu.MenuModel, _is_MenuModel_default);
  const _secondaryIconVisibility = Symbol('_secondaryIconVisibility');
  let const$;
  const _noop = Symbol('_noop');
  const _is_MenuItem_default = Symbol('_is_MenuItem_default');
  model__menu__menu.MenuItem$ = dart.generic(T => {
    let MenuModelOfT = () => (MenuModelOfT = dart.constFn(model__menu__menu.MenuModel$(T)))();
    class MenuItem extends core.Object {
      get label() {
        return this[label$];
      }
      set label(value) {
        super.label = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get subMenu() {
        return this[subMenu$];
      }
      set subMenu(value) {
        super.subMenu = value;
      }
      get action() {
        return this[action$];
      }
      set action(value) {
        this[action$] = value;
      }
      get icon() {
        return this[icon$];
      }
      set icon(value) {
        super.icon = value;
      }
      get uiIcon() {
        return this.icon;
      }
      get secondaryIcon() {
        return this[secondaryIcon$];
      }
      set secondaryIcon(value) {
        super.secondaryIcon = value;
      }
      get itemSuffixes() {
        return this[itemSuffixes$];
      }
      set itemSuffixes(value) {
        super.itemSuffixes = value;
      }
      get cssClasses() {
        return this[cssClasses$];
      }
      set cssClasses(value) {
        super.cssClasses = value;
      }
      get uiHoverIcon() {
        return this[_secondaryIconVisibility].value === model__menu__menu_item_affix.IconVisibility.hover ? this.secondaryIcon : null;
      }
      [_noop]() {}
      get nullAwareActionHandler() {
        return this.action != null ? this.action : dart.bind(this, _noop);
      }
      get enabled() {
        return this[enabled$];
      }
      set enabled(value) {
        this[enabled$] = value;
      }
      get hasIcon() {
        return this.icon != null;
      }
      get hasSecondaryIcon() {
        return this.secondaryIcon != null && this[_secondaryIconVisibility].value !== model__menu__menu_item_affix.IconVisibility.hidden;
      }
      get hasSecondaryHoverIcon() {
        return this.uiHoverIcon != null;
      }
      get hasSubMenu() {
        return this.subMenu != null;
      }
      get showTooltip() {
        return strings$.isNotEmpty(this.tooltip);
      }
      get uiDisplayName() {
        return this.label;
      }
      toString() {
        return new (IdentityMapOfString$Object()).from(["label", this.label, "enabled", this.enabled, "icon", this.icon, "secondaryIcon", this.secondaryIcon, "secondaryIconVisibility", this[_secondaryIconVisibility].value])[$toString]();
      }
    }
    (MenuItem.new = function(label, opts) {
      let enabled = opts && 'enabled' in opts ? opts.enabled : true;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let action = opts && 'action' in opts ? opts.action : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
      let secondaryIcon = opts && 'secondaryIcon' in opts ? opts.secondaryIcon : null;
      let itemSuffixes = opts && 'itemSuffixes' in opts ? opts.itemSuffixes : null;
      let secondaryIconVisibility = opts && 'secondaryIconVisibility' in opts ? opts.secondaryIconVisibility : null;
      let subMenu = opts && 'subMenu' in opts ? opts.subMenu : null;
      this[label$] = label;
      this[enabled$] = enabled;
      this[tooltip$] = tooltip;
      this[action$] = action;
      this[icon$] = icon;
      this[secondaryIcon$] = secondaryIcon;
      this[subMenu$] = subMenu;
      this[_secondaryIconVisibility] = secondaryIconVisibility != null ? secondaryIconVisibility : new (ObservableReferenceOfIconVisibility()).new(model__menu__menu_item_affix.IconVisibility.visible);
      this[itemSuffixes$] = itemSuffixes != null ? itemSuffixes : new (ObservableListOfMenuItemAffix()).new();
      this[cssClasses$] = BuiltListOfString().new(core.Iterable._check(cssClasses != null ? cssClasses : const$ || (const$ = dart.constList([], dart.dynamic))));
      if (this.secondaryIcon != null) {
        this.itemSuffixes.add(new model__menu__menu_item_affix.IconAffix.new({icon: this.secondaryIcon, visibility: this[_secondaryIconVisibility].value}));
      }
    }).prototype = MenuItem.prototype;
    dart.addTypeTests(MenuItem);
    MenuItem.prototype[_is_MenuItem_default] = true;
    const label$ = Symbol("MenuItem.label");
    const tooltip$ = Symbol("MenuItem.tooltip");
    const subMenu$ = Symbol("MenuItem.subMenu");
    const action$ = Symbol("MenuItem.action");
    const icon$ = Symbol("MenuItem.icon");
    const secondaryIcon$ = Symbol("MenuItem.secondaryIcon");
    const itemSuffixes$ = Symbol("MenuItem.itemSuffixes");
    const cssClasses$ = Symbol("MenuItem.cssClasses");
    const enabled$ = Symbol("MenuItem.enabled");
    MenuItem[dart.implements] = () => [model__ui__display_name.HasUIDisplayName, model__ui__icon.HasIcon, model__ui__icon.HasHoverIcon];
    dart.setMethodSignature(MenuItem, () => ({
      __proto__: dart.getMethods(MenuItem.__proto__),
      [_noop]: dart.fnType(dart.void, []),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(MenuItem, () => ({
      __proto__: dart.getGetters(MenuItem.__proto__),
      uiIcon: model__ui__icon.Icon,
      uiHoverIcon: model__ui__icon.Icon,
      nullAwareActionHandler: core.Function,
      hasIcon: core.bool,
      hasSecondaryIcon: core.bool,
      hasSecondaryHoverIcon: core.bool,
      hasSubMenu: core.bool,
      showTooltip: core.bool,
      uiDisplayName: core.String
    }));
    dart.setFieldSignature(MenuItem, () => ({
      __proto__: dart.getFields(MenuItem.__proto__),
      label: dart.finalFieldType(core.String),
      tooltip: dart.finalFieldType(core.String),
      subMenu: dart.finalFieldType(MenuModelOfT()),
      action: dart.fieldType(core.Function),
      icon: dart.finalFieldType(model__ui__icon.Icon),
      secondaryIcon: dart.finalFieldType(model__ui__icon.Icon),
      [_secondaryIconVisibility]: dart.finalFieldType(ObservableReferenceOfIconVisibility()),
      itemSuffixes: dart.finalFieldType(ObservableListOfMenuItemAffix()),
      cssClasses: dart.finalFieldType(BuiltListOfString()),
      enabled: dart.fieldType(core.bool)
    }));
    dart.defineExtensionMethods(MenuItem, ['toString']);
    return MenuItem;
  });
  model__menu__menu.MenuItem = model__menu__menu.MenuItem$();
  dart.addTypeTests(model__menu__menu.MenuItem, _is_MenuItem_default);
  model__menu__menu.NullMenuItem = class NullMenuItem extends model__menu__menu.MenuItem {
    static new() {
      dart.throw(new core.UnsupportedError.new("Should be never instantiatied"));
    }
  };
  dart.addTypeTests(model__menu__menu.NullMenuItem);
  dart.setBaseClass(model__menu__menu.NullMenuItem, model__menu__menu.MenuItem$(model__menu__menu.NullMenuItem));
  const _filterOutUnselectableItems = Symbol('_filterOutUnselectableItems');
  const _is_ActiveMenuItemModel_default = Symbol('_is_ActiveMenuItemModel_default');
  model__menu__menu.ActiveMenuItemModel$ = dart.generic(T => {
    let MenuModelOfT = () => (MenuModelOfT = dart.constFn(model__menu__menu.MenuModel$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class ActiveMenuItemModel extends model__a11y__active_item.ActiveItemModel$(T) {
      set menu(menu) {
        MenuModelOfT()._check(menu);
        super.items = model__menu__menu.ActiveMenuItemModel._createEnabledItemGroupList(T, menu == null ? null : menu.itemGroups, this[_filterOutUnselectableItems]);
      }
      set items(_) {
        ListOfT()._check(_);
        dart.throw(new core.UnsupportedError.new("ActiveMenuItemModel items can only be updated" + "by setting #menu"));
      }
      static _createEnabledItemGroupList(T, menuGroups, filterOutUnselectableItems) {
        if (menuGroups == null) return new (model__collection__combined_list.CombinedList$(T)).new(_interceptors.JSArray$(core.List$(T)).of([]));
        if (!dart.test(filterOutUnselectableItems)) return new (model__collection__combined_list.CombinedList$(T)).new(menuGroups);
        return new (model__collection__combined_list.CombinedList$(T)).new(menuGroups[$map](core.List$(T), dart.fn(group => group[$where](dart.fn(item => model__menu__menu.MenuItem.is(item) ? item.enabled : true, dart.fnType(core.bool, [T])))[$toList](), dart.fnType(core.List$(T), [core.List$(T)])))[$toList]());
      }
    }
    (ActiveMenuItemModel.new = function(idGenerator, opts) {
      let menu = opts && 'menu' in opts ? opts.menu : null;
      let filterOutUnselectableItems = opts && 'filterOutUnselectableItems' in opts ? opts.filterOutUnselectableItems : false;
      this[_filterOutUnselectableItems] = filterOutUnselectableItems;
      ActiveMenuItemModel.__proto__.new.call(this, idGenerator, {items: model__menu__menu.ActiveMenuItemModel._createEnabledItemGroupList(T, (() => {
          let t = menu;
          return t == null ? null : t.itemGroups;
        })(), filterOutUnselectableItems), loop: true});
    }).prototype = ActiveMenuItemModel.prototype;
    dart.addTypeTests(ActiveMenuItemModel);
    ActiveMenuItemModel.prototype[_is_ActiveMenuItemModel_default] = true;
    dart.setSetterSignature(ActiveMenuItemModel, () => ({
      __proto__: dart.getSetters(ActiveMenuItemModel.__proto__),
      menu: model__menu__menu.MenuModel$(T)
    }));
    dart.setFieldSignature(ActiveMenuItemModel, () => ({
      __proto__: dart.getFields(ActiveMenuItemModel.__proto__),
      [_filterOutUnselectableItems]: dart.finalFieldType(core.bool)
    }));
    return ActiveMenuItemModel;
  });
  model__menu__menu.ActiveMenuItemModel = model__menu__menu.ActiveMenuItemModel$();
  dart.addTypeTests(model__menu__menu.ActiveMenuItemModel, _is_ActiveMenuItemModel_default);
  dart.trackLibraries("packages/angular_components/model/menu/menu.ddc", {
    "package:angular_components/model/menu/menu.dart": model__menu__menu
  }, '{"version":3,"sourceRoot":"","sources":["menu.dart"],"names":[],"mappings":"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","file":"menu.ddc.js"}');
  // Exports:
  return {
    model__menu__menu: model__menu__menu
  };
});

//# sourceMappingURL=menu.ddc.js.map
