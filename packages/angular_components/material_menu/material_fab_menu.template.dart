// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_fab_menu.dart';
export 'material_fab_menu.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/laminate/popup/popup.dart';
import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_list/material_list_item.dart';
import 'package:angular_components/material_menu/menu_root.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/mixins/track_layout_changes.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/model/observable/observable.dart';
import 'menu_item_groups.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'menu_item_groups.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref4;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref5;
import 'package:angular_components/material_button/material_fab.template.dart' as _ref6;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref7;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref8;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref9;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref10;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref11;
import 'package:angular_components/mixins/track_layout_changes.template.dart' as _ref12;
import 'package:angular_components/model/menu/menu.template.dart' as _ref13;
import 'package:angular_components/model/observable/observable.template.dart' as _ref14;
import 'package:angular_components/material_menu/material_fab_menu.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_fab_menu.dart' as import2;
import 'dart:html' as import3;
import '../material_button/material_fab.template.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_button/material_fab.dart' as import6;
import '../src/material_tooltip/tooltip.dart' as import7;
import '../src/laminate/popup/popup_source_directive.dart' as import8;
import '../material_icon/material_icon.template.dart' as import9;
import '../material_icon/material_icon.dart' as import10;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/runtime.dart' as import16;
import 'package:angular/angular.dart';
import '../material_tooltip/module.dart' as import18;
import '../src/material_tooltip/tooltip_controller.dart' as import19;
import '../utils/disposer/disposer.dart' as import20;
import '../src/laminate/popup/dom_popup_source.dart' as import21;
import '../utils/angular/reference/reference.dart' as import22;
import '../focus/focus_interface.dart' as import23;
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_popup/material_popup.template.dart' as import25;
import '../material_popup/material_popup.dart' as import26;
import '../content/deferred_content.dart' as import27;
import '../src/laminate/popup/popup_hierarchy.dart' as import28;
import 'package:angular/src/core/zone/ng_zone.dart' as import29;
import '../src/laminate/overlay/overlay_service.dart' as import30;
import '../laminate/overlay/zindexer.dart' as import31;
import 'package:angular/src/core/di/opaque_token.dart' as import32;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import34;
import '../src/laminate/popup/popup_size_provider.dart' as import35;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import37;
import '../mixins/material_dropdown_base.dart' as import38;
import '../src/laminate/popup/popup_ref.dart' as import39;
import '../material_list/material_list_item.template.dart' as import40;
import '../material_list/material_list_item.dart' as import41;
import 'menu_item_groups.template.dart' as import42;
import '../focus/focus.dart' as import43;
import 'menu_root.dart' as import44;
import 'menu_item_groups.dart' as import45;
import '../utils/browser/dom_service/dom_service.dart' as import46;
import '../laminate/components/modal/modal.dart' as import47;
import '../utils/id_generator/id_generator.dart' as import48;
import '../interfaces/has_disabled.dart' as import49;

final List<dynamic> styles$MaterialFabMenuComponent = [import0.styles];

class ViewMaterialFabMenuComponent0 extends AppView<import2.MaterialFabMenuComponent> {
  import3.Element _el_1;
  import4.ViewMaterialFabComponent0 _compView_1;
  ViewContainer _appEl_1;
  import6.MaterialFabComponent _MaterialFabComponent_1_8;
  import7.MaterialTooltipDirective _MaterialTooltipDirective_1_9;
  import8.PopupSourceDirective _PopupSourceDirective_1_10;
  dynamic __TooltipController_1_11;
  import3.Element _el_3;
  import9.ViewMaterialIconComponent0 _compView_3;
  import10.MaterialIconComponent _MaterialIconComponent_3_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  String _expr_6;
  bool _expr_7;
  var _expr_8;
  static RenderComponentType _renderType;
  ViewMaterialFabMenuComponent0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-fab-menu');
    _renderType ??= import15.appViewUtils.createRenderType((import16.isDevMode ? 'asset:angular_components/lib/material_menu/material_fab_menu.dart' : null), ViewEncapsulation.Emulated, styles$MaterialFabMenuComponent);
    setupComponentType(_renderType);
  }
  dynamic get _TooltipController_1_11 {
    if ((this.__TooltipController_1_11 == null)) {
      (__TooltipController_1_11 = import18.createTooltipController(this.parentView.injectorGet(import19.TooltipController, this.viewData.parentIndex, null), this.parentView.injectorGet(import20.Disposer, this.viewData.parentIndex, null)));
    }
    return this.__TooltipController_1_11;
  }

  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    import3.Text _text_0 = import3.Text('\n');
    parentRenderNode.append(_text_0);
    _compView_1 = import4.ViewMaterialFabComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    createAttr(_el_1, 'popupSource', '');
    createAttr(_el_1, 'raised', '');
    addShimC(_el_1);
    _appEl_1 = ViewContainer(1, null, this, _el_1);
    _MaterialFabComponent_1_8 = import6.MaterialFabComponent(_el_1, _compView_1.ref);
    _MaterialTooltipDirective_1_9 = import7.MaterialTooltipDirective(parentView.injectorGet(import21.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, _appEl_1, _compView_1.ref, parentView.injectorGet(import3.Window, viewData.parentIndex));
    _PopupSourceDirective_1_10 = import8.PopupSourceDirective(parentView.injectorGet(import21.DomPopupSourceFactory, viewData.parentIndex), _el_1, parentView.injectorGet(import22.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import23.Focusable, viewData.parentIndex, null), null);
    import3.Text _text_2 = import3.Text('\n  ');
    _compView_3 = import9.ViewMaterialIconComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import10.MaterialIconComponent(_el_3);
    _compView_3.create(_MaterialIconComponent_3_5, []);
    import3.Text _text_4 = import3.Text('\n');
    _compView_1.create(_MaterialFabComponent_1_8, [
      [_text_2, _el_3, _text_4]
    ]);
    import3.Text _text_5 = import3.Text('\n');
    parentRenderNode.append(_text_5);
    final _anchor_6 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_6);
    _appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_MaterialFabMenuComponent1);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    import3.Text _text_7 = import3.Text('\n');
    parentRenderNode.append(_text_7);
    final subscription_0 = _MaterialFabComponent_1_8.trigger.listen(eventHandler0(ctx.trigger));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.TooltipController) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _TooltipController_1_11;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialFabMenuComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_1_8.raised = true;
      changed = true;
    }
    final bool currVal_3 = !_ctx.isFabEnabled;
    if (import15.checkBinding(_expr_3, currVal_3)) {
      _MaterialFabComponent_1_8.disabled = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialFabComponent_1_8.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(_ctx.tooltipPositions, null)) {
        (_MaterialTooltipDirective_1_9.positions = _ctx.tooltipPositions);
      }
    }
    final currVal_6 = _ctx.tooltip;
    if (import15.checkBinding(_expr_6, currVal_6)) {
      _MaterialTooltipDirective_1_9.text = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.hasTooltip;
    if (import15.checkBinding(_expr_7, currVal_7)) {
      _MaterialTooltipDirective_1_9.canShow = currVal_7;
      _expr_7 = currVal_7;
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialTooltipDirective_1_9.ngOnInit();
    }
    changed = false;
    final currVal_8 = _ctx.glyph;
    if (import15.checkBinding(_expr_8, currVal_8)) {
      _MaterialIconComponent_3_5.icon = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _NgIf_6_9.ngIf = _ctx.hasMenu;
    _appEl_1.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.isFabHidden;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(_el_1, 'invisible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaLabel;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      setAttr(_el_1, 'aria-label', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.naviId;
    if (import15.checkBinding(_expr_2, currVal_2)) {
      setAttr(_el_1, 'navi-id', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_3.detectChanges();
    if (!import15.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialTooltipDirective_1_9.ngAfterViewInit();
        _PopupSourceDirective_1_10.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _compView_1?.destroy();
    _compView_3?.destroy();
    _MaterialTooltipDirective_1_9.ngOnDestroy();
    _PopupSourceDirective_1_10.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialFabMenuComponent0(parentView, parentIndex);
}

class _ViewMaterialFabMenuComponent1 extends AppView<import2.MaterialFabMenuComponent> {
  import3.Element _el_0;
  import25.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import26.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupRef_0_11;
  dynamic __PopupHierarchy_0_12;
  ViewContainer _appEl_2;
  import27.DeferredContentDirective _DeferredContentDirective_2_9;
  var _expr_2;
  var _expr_3;
  bool _expr_4;
  bool _expr_5;
  _ViewMaterialFabMenuComponent1(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialFabMenuComponent0._renderType;
  }
  dynamic get _PopupRef_0_11 {
    if ((this.__PopupRef_0_11 == null)) {
      (__PopupRef_0_11 = import26.getResolvedPopupRef(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupRef_0_11;
  }

  dynamic get _PopupHierarchy_0_12 {
    if ((this.__PopupHierarchy_0_12 == null)) {
      (__PopupHierarchy_0_12 = import26.getHierarchy(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupHierarchy_0_12;
  }

  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    _compView_0 = import25.ViewMaterialPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'autoDismiss', '');
    createAttr(_el_0, 'enforceSpaceConstraints', '');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_8 = import26.MaterialPopupComponent(parentView.injectorGet(import28.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import26.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import29.NgZone, viewData.parentIndex), parentView.injectorGet(import30.OverlayService, viewData.parentIndex), parentView.injectorGet(import31.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import32.OpaqueToken<List<import34.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import32.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import35.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, ElementRef(_el_0));
    import3.Text _text_1 = import3.Text('\n  ');
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialFabMenuComponent2);
    _DeferredContentDirective_2_9 = import27.DeferredContentDirective(_appEl_2, _TemplateRef_2_8, _MaterialPopupComponent_0_8);
    import3.Text _text_3 = import3.Text('\n');
    _compView_0.create(_MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _appEl_2, _text_3],
      const []
    ]);
    final subscription_0 = _MaterialPopupComponent_0_8.onClose.listen(eventHandler0(ctx.onPopupClosed));
    final subscription_1 = _MaterialPopupComponent_0_8.onOpened.listen(eventHandler0(ctx.onPopupOpened));
    init([_appEl_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import26.MaterialPopupComponent) || identical(token, import37.DeferredContentAware)) || identical(token, import38.DropdownHandle)) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialPopupComponent_0_8;
    }
    if ((identical(token, import39.PopupRef) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupRef_0_11;
    }
    if ((identical(token, import28.PopupHierarchy) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupHierarchy_0_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialFabMenuComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_source = import16.unsafeCast<ViewMaterialFabMenuComponent0>(parentView)._PopupSourceDirective_1_10;
    if (firstCheck) {
      _MaterialPopupComponent_0_8.autoDismiss = true;
      _MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      _MaterialPopupComponent_0_8.hasBox = false;
    }
    final currVal_2 = _ctx.preferredPopupPositions;
    if (import15.checkBinding(_expr_2, currVal_2)) {
      _MaterialPopupComponent_0_8.preferredPositions = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_source;
    if (import15.checkBinding(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_8.source = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.trackLayoutChanges;
    if (import15.checkBinding(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_8.trackLayoutChanges = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.showPopup;
    if (import15.checkBinding(_expr_5, currVal_5)) {
      _MaterialPopupComponent_0_8.visible = currVal_5;
      _expr_5 = currVal_5;
    }
    if (firstCheck) {
      (_DeferredContentDirective_2_9.preserveDimensions = true);
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import15.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _compView_0?.destroy();
    _DeferredContentDirective_2_9.ngOnDestroy();
    _MaterialPopupComponent_0_8.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponent1(parentView, parentIndex);
}

class _ViewMaterialFabMenuComponent2 extends AppView<import2.MaterialFabMenuComponent> {
  import3.DivElement _el_0;
  import3.DivElement _el_2;
  import3.Element _el_4;
  import40.ViewMaterialListItemComponent0 _compView_4;
  import41.MaterialListItemComponent _MaterialListItemComponent_4_5;
  import3.Element _el_6;
  import9.ViewMaterialIconComponent0 _compView_6;
  import10.MaterialIconComponent _MaterialIconComponent_6_5;
  import3.Element _el_9;
  import42.ViewMenuItemGroupsComponent0 _compView_9;
  import43.AutoFocusDirective _AutoFocusDirective_9_5;
  import44.MenuRootDirective _MenuRootDirective_9_6;
  import44.MenuRootDirective _MenuRoot_9_7;
  import45.MenuItemGroupsComponent _MenuItemGroupsComponent_9_8;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  var _expr_8;
  _ViewMaterialFabMenuComponent2(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialFabMenuComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'menu-content';
    createAttr(_el_0, 'elevation', '2');
    addShimC(_el_0);
    import3.Text _text_1 = import3.Text('\n    ');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'content-wrapper';
    addShimC(_el_2);
    import3.Text _text_3 = import3.Text('\n      ');
    _el_2.append(_text_3);
    _compView_4 = import40.ViewMaterialListItemComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    _el_2.append(_el_4);
    _el_4.className = import15.interpolate2('', 'close-menu', ' ', import41.MaterialListItemComponent.hostClass, '');
    addShimC(_el_4);
    _MaterialListItemComponent_4_5 = import41.MaterialListItemComponent(_el_4, import16.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8, null, null);
    import3.Text _text_5 = import3.Text('\n        ');
    _compView_6 = import9.ViewMaterialIconComponent0(this, 6);
    _el_6 = _compView_6.rootEl;
    _el_6.className = 'close-icon material-list-item-primary';
    createAttr(_el_6, 'icon', 'close');
    addShimC(_el_6);
    _MaterialIconComponent_6_5 = import10.MaterialIconComponent(_el_6);
    _compView_6.create(_MaterialIconComponent_6_5, []);
    import3.Text _text_7 = import3.Text('\n      ');
    _compView_4.create(_MaterialListItemComponent_4_5, [
      [_text_5, _el_6, _text_7]
    ]);
    import3.Text _text_8 = import3.Text('\n      ');
    _el_2.append(_text_8);
    _compView_9 = import42.ViewMenuItemGroupsComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_2.append(_el_9);
    createAttr(_el_9, 'autoFocus', '');
    _el_9.className = 'menu-groups';
    createAttr(_el_9, 'menu-root', '');
    createAttr(_el_9, 'preventCloseOnPressLeft', '');
    addShimC(_el_9);
    _AutoFocusDirective_9_5 = import43.AutoFocusDirective(_el_9, parentView.parentView.injectorGet(import46.DomService, parentView.viewData.parentIndex), null, parentView.parentView.injectorGet(import47.ModalComponent, parentView.viewData.parentIndex, null), import16.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._PopupRef_0_11);
    _MenuRootDirective_9_6 = import44.MenuRootDirective(import16.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8);
    _MenuRoot_9_7 = _MenuRootDirective_9_6;
    _MenuItemGroupsComponent_9_8 = import45.MenuItemGroupsComponent(_MenuRoot_9_7, _compView_9.ref, import16.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8, parentView.parentView.injectorGet(import48.IdGenerator, parentView.viewData.parentIndex, null));
    import3.Text _text_10 = import3.Text('\n      ');
    _compView_9.create(_MenuItemGroupsComponent_9_8, []);
    import3.Text _text_11 = import3.Text('\n    ');
    _el_2.append(_text_11);
    import3.Text _text_12 = import3.Text('\n  ');
    _el_0.append(_text_12);
    final subscription_0 = _MaterialListItemComponent_4_5.trigger.listen(eventHandler0(ctx.hideMenu));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import49.HasDisabled) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _MaterialListItemComponent_4_5;
    }
    if ((identical(token, import44.MenuRoot) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MenuRoot_9_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialFabMenuComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialListItemComponent_4_5.closeOnActivate = false;
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_4_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_6_5.icon = 'close';
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    if (firstCheck) {
      (_AutoFocusDirective_9_5.autoFocus = true);
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _AutoFocusDirective_9_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MenuItemGroupsComponent_9_8.preventCloseOnPressLeft = '';
      changed = true;
    }
    final currVal_8 = _ctx.menuItem.subMenu;
    if (import15.checkBinding(_expr_8, currVal_8)) {
      _MenuItemGroupsComponent_9_8.menu = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _MenuItemGroupsComponent_9_8.ngOnInit();
    }
    final currVal_0 = _ctx.menuVisible;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.closing;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      updateClass(_el_0, 'closing', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hasIcons;
    if (import15.checkBinding(_expr_2, currVal_2)) {
      updateClass(_el_0, 'has-icons', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.menuVisible;
    if (import15.checkBinding(_expr_3, currVal_3)) {
      updateClass(_el_2, 'visible', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.closing;
    if (import15.checkBinding(_expr_4, currVal_4)) {
      updateClass(_el_2, 'closing', currVal_4);
      _expr_4 = currVal_4;
    }
    _compView_4.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    _compView_6.detectChanges();
    _compView_9.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_4?.destroy();
    _compView_6?.destroy();
    _compView_9?.destroy();
    _MaterialListItemComponent_4_5.ngOnDestroy();
    _AutoFocusDirective_9_5.ngOnDestroy();
    _MenuItemGroupsComponent_9_8.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialFabMenuComponentHost = const [];

class _ViewMaterialFabMenuComponentHost0 extends AppView<import2.MaterialFabMenuComponent> {
  ViewMaterialFabMenuComponent0 _compView_0;
  import2.MaterialFabMenuComponent _MaterialFabMenuComponent_0_5;
  _ViewMaterialFabMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    _compView_0 = ViewMaterialFabMenuComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialFabMenuComponent_0_5 = import2.MaterialFabMenuComponent(_compView_0.ref);
    _compView_0.create(_MaterialFabMenuComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialFabMenuComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialFabMenuComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialFabMenuComponent> _MaterialFabMenuComponentNgFactory = const ComponentFactory('material-fab-menu', viewFactory_MaterialFabMenuComponentHost0);
ComponentFactory<import2.MaterialFabMenuComponent> get MaterialFabMenuComponentNgFactory {
  return _MaterialFabMenuComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialFabMenuComponent, MaterialFabMenuComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
  _ref14.initReflector();
}
