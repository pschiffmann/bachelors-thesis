// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_expansionpanel.dart';
export 'material_expansionpanel.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/content/deferred_content_aware.dart';
import 'package:angular_components/interfaces/has_disabled.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.dart';
import 'package:angular_components/model/action/async_action.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref4;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref5;
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart' as _ref6;
import 'package:angular_components/model/action/async_action.template.dart' as _ref7;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref8;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref9;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_expansionpanel.dart' as import2;
import 'dart:html' as import3;
import '../material_yes_no_buttons/material_yes_no_buttons.dart' as import4;
import '../button_decorator/button_decorator.template.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import '../button_decorator/button_decorator.dart' as import14;
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_icon/material_icon.template.dart' as import16;
import '../material_icon/material_icon.dart' as import17;
import '../material_yes_no_buttons/material_yes_no_buttons.template.dart' as import18;
import '../interfaces/has_disabled.dart' as import19;
import 'package:angular/src/core/zone/ng_zone.dart' as import20;
import '../utils/browser/dom_service/dom_service.dart' as import21;
import '../content/deferred_content_aware.dart' as import22;

final List<dynamic> styles$MaterialExpansionPanel = [import0.styles];

class ViewMaterialExpansionPanel0 extends AppView<import2.MaterialExpansionPanel> {
  import3.DivElement _el_0;
  import4.KeyUpBoundaryDirective _KeyUpBoundaryDirective_0_5;
  import3.Element _el_1;
  import3.DivElement _el_2;
  import5.ButtonDirectiveNgCd _ButtonDirective_2_5;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  import3.DivElement _el_4;
  import3.Element _el_5;
  import3.Text _text_6;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  import3.DivElement _el_8;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  import3.Element _el_11;
  import3.DivElement _el_12;
  import3.DivElement _el_13;
  ViewContainer _appEl_14;
  bool _query_expandCollapseButton_1_3_isDirty = true;
  NgIf _NgIf_14_9;
  import3.DivElement _el_15;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  ViewContainer _appEl_17;
  NgIf _NgIf_17_9;
  ViewContainer _appEl_18;
  NgIf _NgIf_18_9;
  var _expr_0;
  var _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  bool _expr_6;
  var _expr_7;
  bool _expr_8;
  var _expr_10;
  bool _expr_14;
  bool _expr_15;
  static RenderComponentType _renderType;
  ViewMaterialExpansionPanel0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-expansionpanel');
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:angular_components/lib/material_expansionpanel/material_expansionpanel.dart' : null), ViewEncapsulation.Emulated, styles$MaterialExpansionPanel);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'panel themeable';
    createAttr(_el_0, 'keyupBoundary', '');
    createAttr(_el_0, 'role', 'group');
    addShimC(_el_0);
    _KeyUpBoundaryDirective_0_5 = import4.KeyUpBoundaryDirective(_el_0);
    _el_1 = createAndAppend(doc, 'header', _el_0);
    addShimE(_el_1);
    _el_2 = createDivAndAppend(doc, _el_1);
    createAttr(_el_2, 'buttonDecorator', '');
    _el_2.className = 'header';
    addShimC(_el_2);
    _ButtonDirective_2_5 = import5.ButtonDirectiveNgCd(import14.ButtonDirective(_el_2, null));
    final _anchor_3 = createViewContainerAnchor();
    _el_2.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MaterialExpansionPanel1);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    _el_4 = createDivAndAppend(doc, _el_2);
    _el_4.className = 'panel-name';
    addShimC(_el_4);
    _el_5 = createAndAppend(doc, 'p', _el_4);
    _el_5.className = 'primary-text';
    addShimE(_el_5);
    _text_6 = import3.Text('');
    _el_5.append(_text_6);
    final _anchor_7 = createViewContainerAnchor();
    _el_4.append(_anchor_7);
    _appEl_7 = ViewContainer(7, 4, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_MaterialExpansionPanel2);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    project(_el_4, 0);
    _el_8 = createDivAndAppend(doc, _el_2);
    _el_8.className = 'panel-description';
    addShimC(_el_8);
    project(_el_8, 1);
    final _anchor_9 = createViewContainerAnchor();
    _el_2.append(_anchor_9);
    _appEl_9 = ViewContainer(9, 2, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_MaterialExpansionPanel3);
    _NgIf_9_9 = NgIf(_appEl_9, _TemplateRef_9_8);
    final _anchor_10 = createViewContainerAnchor();
    _el_1.append(_anchor_10);
    _appEl_10 = ViewContainer(10, 1, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_MaterialExpansionPanel4);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    _el_11 = createAndAppend(doc, 'main', _el_0);
    addShimE(_el_11);
    _el_12 = createDivAndAppend(doc, _el_11);
    addShimC(_el_12);
    _el_13 = createDivAndAppend(doc, _el_12);
    _el_13.className = 'content-wrapper';
    addShimC(_el_13);
    final _anchor_14 = createViewContainerAnchor();
    _el_13.append(_anchor_14);
    _appEl_14 = ViewContainer(14, 13, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(_appEl_14, viewFactory_MaterialExpansionPanel5);
    _NgIf_14_9 = NgIf(_appEl_14, _TemplateRef_14_8);
    _el_15 = createDivAndAppend(doc, _el_13);
    _el_15.className = 'content';
    addShimC(_el_15);
    project(_el_15, 3);
    final _anchor_16 = createViewContainerAnchor();
    _el_13.append(_anchor_16);
    _appEl_16 = ViewContainer(16, 13, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = TemplateRef(_appEl_16, viewFactory_MaterialExpansionPanel6);
    _NgIf_16_9 = NgIf(_appEl_16, _TemplateRef_16_8);
    final _anchor_17 = createViewContainerAnchor();
    _el_12.append(_anchor_17);
    _appEl_17 = ViewContainer(17, 12, this, _anchor_17);
    TemplateRef _TemplateRef_17_8 = TemplateRef(_appEl_17, viewFactory_MaterialExpansionPanel7);
    _NgIf_17_9 = NgIf(_appEl_17, _TemplateRef_17_8);
    final _anchor_18 = createViewContainerAnchor();
    _el_12.append(_anchor_18);
    _appEl_18 = ViewContainer(18, 12, this, _anchor_18);
    TemplateRef _TemplateRef_18_8 = TemplateRef(_appEl_18, viewFactory_MaterialExpansionPanel8);
    _NgIf_18_9 = NgIf(_appEl_18, _TemplateRef_18_8);
    _el_2.addEventListener('click', eventHandler1(_ButtonDirective_2_5.instance.handleClick));
    _el_2.addEventListener('keypress', eventHandler1(_ButtonDirective_2_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_2_5.instance.trigger.listen(eventHandler0(ctx.handleHeaderClick));
    ctx.mainPanel = _el_11;
    ctx.mainContent = _el_12;
    ctx.contentWrapper = _el_13;
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import14.ButtonDirective) && ((2 <= nodeIndex) && (nodeIndex <= 9)))) {
      return _ButtonDirective_2_5.instance;
    }
    if ((identical(token, import4.KeyUpBoundaryDirective) && ((0 <= nodeIndex) && (nodeIndex <= 18)))) {
      return _KeyUpBoundaryDirective_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_8 = _ctx.disabled;
    if (import11.checkBinding(_expr_8, currVal_8)) {
      _ButtonDirective_2_5.instance.disabled = currVal_8;
      _expr_8 = currVal_8;
    }
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_2_5.instance.ngOnInit();
    }
    _NgIf_3_9.ngIf = (_ctx.shouldShowExpandIcon && _ctx.shouldExpandOnLeft);
    _NgIf_7_9.ngIf = (_ctx.secondaryText != null);
    _NgIf_9_9.ngIf = (_ctx.shouldShowExpandIcon && !_ctx.shouldExpandOnLeft);
    _NgIf_10_9.ngIf = !_ctx.shouldShowExpandIcon;
    _NgIf_14_9.ngIf = (_ctx.shouldShowHiddenHeaderExpandIcon && _ctx.shouldExpandOnLeft);
    _NgIf_16_9.ngIf = (_ctx.shouldShowHiddenHeaderExpandIcon && !_ctx.shouldExpandOnLeft);
    _NgIf_17_9.ngIf = !_ctx.showSaveCancel;
    _NgIf_18_9.ngIf = _ctx.showSaveCancel;
    _appEl_3.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    _appEl_16.detectChangesInNestedViews();
    _appEl_17.detectChangesInNestedViews();
    _appEl_18.detectChangesInNestedViews();
    if (!import11.AppViewUtils.throwOnChanges) {
      if (_query_expandCollapseButton_1_3_isDirty) {
        ctx.expandCollapse = import11.firstOrNull(import11.flattenNodes([
          [_ButtonDirective_2_5.instance],
          _appEl_14.mapNestedViews((_ViewMaterialExpansionPanel5 nestedView) {
            return [nestedView._ButtonDirective_0_5.instance];
          }),
          _appEl_16.mapNestedViews((_ViewMaterialExpansionPanel6 nestedView) {
            return [nestedView._ButtonDirective_0_5.instance];
          })
        ]));
        _query_expandCollapseButton_1_3_isDirty = false;
      }
    }
    final currVal_0 = _ctx.name;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-label', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isExpanded;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      setAttr(_el_0, 'aria-expanded', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.isExpanded;
    if (import11.checkBinding(_expr_2, currVal_2)) {
      updateClass(_el_0, 'open', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.anotherExpanded;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      updateClass(_el_0, 'background', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = (_ctx.isExpanded && _ctx.hideExpandedHeader);
    if (import11.checkBinding(_expr_4, currVal_4)) {
      updateClass(_el_1, 'hidden', currVal_4);
      _expr_4 = currVal_4;
    }
    final bool currVal_5 = !_ctx.isExpanded;
    if (import11.checkBinding(_expr_5, currVal_5)) {
      updateClass(_el_2, 'closed', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.disableHeaderExpansion;
    if (import11.checkBinding(_expr_6, currVal_6)) {
      updateClass(_el_2, 'disable-header-expansion', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.headerMsg;
    if (import11.checkBinding(_expr_7, currVal_7)) {
      setAttr(_el_2, 'aria-label', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
    _ButtonDirective_2_5.detectHostChanges(this, _el_2);
    final currVal_10 = (_ctx.name ?? '');
    if (import11.checkBinding(_expr_10, currVal_10)) {
      _text_6.text = currVal_10;
      _expr_10 = currVal_10;
    }
    final bool currVal_14 = !_ctx.isExpanded;
    if (import11.checkBinding(_expr_14, currVal_14)) {
      updateClass(_el_11, 'hidden', currVal_14);
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.hideExpandedHeader;
    if (import11.checkBinding(_expr_15, currVal_15)) {
      updateClass(_el_13, 'hidden-header', currVal_15);
      _expr_15 = currVal_15;
    }
  }

  @override
  void destroyInternal() {
    _appEl_3?.destroyNestedViews();
    _appEl_7?.destroyNestedViews();
    _appEl_9?.destroyNestedViews();
    _appEl_10?.destroyNestedViews();
    _appEl_14?.destroyNestedViews();
    _appEl_16?.destroyNestedViews();
    _appEl_17?.destroyNestedViews();
    _appEl_18?.destroyNestedViews();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialExpansionPanel0(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel1 extends AppView<import2.MaterialExpansionPanel> {
  import3.Element _el_0;
  import16.ViewMaterialIconComponent0 _compView_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import17.MaterialIconComponent _MaterialIconComponent_0_6;
  bool _expr_0;
  var _expr_1;
  _ViewMaterialExpansionPanel1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = import16.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'expand-button expand-on-left';
    addShimC(_el_0);
    _ButtonDirective_0_5 = import5.ButtonDirectiveNgCd(import14.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import17.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_6, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(ctx.handleExpandIconClick));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import14.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_0_5.instance.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.expandIcon;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_6.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.shouldFlipExpandIcon;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'expand-more', currVal_0);
      _expr_0 = currVal_0;
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel1(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel2 extends AppView<import2.MaterialExpansionPanel> {
  import3.Element _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialExpansionPanel2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('p');
    _el_0.className = 'secondary-text';
    addShimE(_el_0);
    _text_1 = import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    final currVal_0 = (_ctx.secondaryText ?? '');
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel2(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel3 extends AppView<import2.MaterialExpansionPanel> {
  import3.Element _el_0;
  import16.ViewMaterialIconComponent0 _compView_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import17.MaterialIconComponent _MaterialIconComponent_0_6;
  bool _expr_0;
  var _expr_1;
  _ViewMaterialExpansionPanel3(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = import16.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'expand-button';
    addShimC(_el_0);
    _ButtonDirective_0_5 = import5.ButtonDirectiveNgCd(import14.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import17.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_6, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(ctx.handleExpandIconClick));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import14.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_0_5.instance.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.expandIcon;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_6.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.shouldFlipExpandIcon;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'expand-more', currVal_0);
      _expr_0 = currVal_0;
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel3(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel4 extends AppView<import2.MaterialExpansionPanel> {
  import3.DivElement _el_0;
  _ViewMaterialExpansionPanel4(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'action';
    addShimC(_el_0);
    project(_el_0, 2);
    init0(_el_0);
    return null;
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel4(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel5 extends AppView<import2.MaterialExpansionPanel> {
  import3.Element _el_0;
  import16.ViewMaterialIconComponent0 _compView_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import17.MaterialIconComponent _MaterialIconComponent_0_6;
  var _expr_0;
  var _expr_1;
  _ViewMaterialExpansionPanel5(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = import16.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'expand-button expand-on-left';
    addShimC(_el_0);
    _ButtonDirective_0_5 = import5.ButtonDirectiveNgCd(import14.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import17.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_6, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(ctx.collapse));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import14.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_0_5.instance.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.expandIcon;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_6.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.closePanelMsg;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-label', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import12.unsafeCast<ViewMaterialExpansionPanel0>(parentView)._query_expandCollapseButton_1_3_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel5(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel6 extends AppView<import2.MaterialExpansionPanel> {
  import3.Element _el_0;
  import16.ViewMaterialIconComponent0 _compView_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import17.MaterialIconComponent _MaterialIconComponent_0_6;
  var _expr_0;
  var _expr_1;
  _ViewMaterialExpansionPanel6(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = import16.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'expand-button';
    addShimC(_el_0);
    _ButtonDirective_0_5 = import5.ButtonDirectiveNgCd(import14.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import17.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_6, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(ctx.collapse));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import14.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_0_5.instance.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.expandIcon;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_6.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.closePanelMsg;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-label', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import12.unsafeCast<ViewMaterialExpansionPanel0>(parentView)._query_expandCollapseButton_1_3_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel6(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel7 extends AppView<import2.MaterialExpansionPanel> {
  import3.DivElement _el_0;
  _ViewMaterialExpansionPanel7(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'toolbelt';
    addShimC(_el_0);
    project(_el_0, 4);
    init0(_el_0);
    return null;
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel7(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel8 extends AppView<import2.MaterialExpansionPanel> {
  import3.Element _el_0;
  import18.ViewMaterialYesNoButtonsComponent0 _compView_0;
  import4.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_0_5;
  import4.EnterAcceptsDirective _EnterAcceptsDirective_0_6;
  String _expr_0;
  String _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  _ViewMaterialExpansionPanel8(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = import18.ViewMaterialYesNoButtonsComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'action-buttons';
    createAttr(_el_0, 'reverse', '');
    addShimC(_el_0);
    _MaterialYesNoButtonsComponent_0_5 = import4.MaterialYesNoButtonsComponent();
    _EnterAcceptsDirective_0_6 = import4.EnterAcceptsDirective(_MaterialYesNoButtonsComponent_0_5, _el_0, import12.unsafeCast<ViewMaterialExpansionPanel0>(parentView)._KeyUpBoundaryDirective_0_5);
    _compView_0.create(_MaterialYesNoButtonsComponent_0_5, []);
    final subscription_0 = _MaterialYesNoButtonsComponent_0_5.yes.listen(eventHandler0(ctx.doSave));
    final subscription_1 = _MaterialYesNoButtonsComponent_0_5.no.listen(eventHandler0(ctx.doCancel));
    init([_el_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialYesNoButtonsComponent_0_5;
    }
    if ((identical(token, import4.EnterAcceptsDirective) && (0 == nodeIndex))) {
      return _EnterAcceptsDirective_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.saveText;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _MaterialYesNoButtonsComponent_0_5.yesText = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.cancelText;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _MaterialYesNoButtonsComponent_0_5.noText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.saveDisabled;
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _MaterialYesNoButtonsComponent_0_5.yesDisabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.cancelDisplayed;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      _MaterialYesNoButtonsComponent_0_5.noDisplayed = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.activeSaveCancelAction;
    if (import11.checkBinding(_expr_4, currVal_4)) {
      _MaterialYesNoButtonsComponent_0_5.pending = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_5 = _ctx.enterAccepts;
    if (import11.checkBinding(_expr_5, currVal_5)) {
      _EnterAcceptsDirective_0_6.enterAccepts = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _EnterAcceptsDirective_0_6.ngOnDestroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel8(parentView, parentIndex);
}

final List<dynamic> styles$MaterialExpansionPanelHost = const [];

class _ViewMaterialExpansionPanelHost0 extends AppView<import2.MaterialExpansionPanel> {
  ViewMaterialExpansionPanel0 _compView_0;
  import2.MaterialExpansionPanel _MaterialExpansionPanel_0_5;
  _ViewMaterialExpansionPanelHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = ViewMaterialExpansionPanel0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialExpansionPanel_0_5 = import2.MaterialExpansionPanel(this.injectorGet(import20.NgZone, viewData.parentIndex), _compView_0.ref, this.injectorGet(import21.DomService, viewData.parentIndex), null);
    _compView_0.create(_MaterialExpansionPanel_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialExpansionPanel_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import2.MaterialExpansionPanel) || identical(token, import22.DeferredContentAware)) || identical(token, import19.HasDisabled)) && (0 == nodeIndex))) {
      return _MaterialExpansionPanel_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialExpansionPanel_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialExpansionPanel_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanelHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanelHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialExpansionPanel> _MaterialExpansionPanelNgFactory = const ComponentFactory('material-expansionpanel', viewFactory_MaterialExpansionPanelHost0);
ComponentFactory<import2.MaterialExpansionPanel> get MaterialExpansionPanelNgFactory {
  return _MaterialExpansionPanelNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialExpansionPanel, MaterialExpansionPanelNgFactory);
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
}
