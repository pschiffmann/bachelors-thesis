// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:fvm/assembly_parser.dart';
import 'package:fvm/virtual_machine.dart';
import 'tagged_object_components.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'package:fvm/assembly_parser.template.dart' as _ref3;
import 'package:fvm/virtual_machine.template.dart' as _ref4;
import 'tagged_object_components.template.dart' as _ref5;
import 'package:fvm/components/app_component.scss.css.shim.dart' as import0;
import 'package:fvm/components/memory.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import3;
import 'dart:html' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import6;
import 'package:angular/src/common/directives/ng_switch.dart' as import7;
import 'package:angular_components/material_button/material_button.template.dart' as import8;
import 'package:angular_components/theme/dark_theme.dart' as import9;
import 'package:angular_components/material_button/material_button.dart' as import10;
import 'package:angular_components/material_icon/material_icon.template.dart' as import11;
import 'package:angular_components/material_icon/material_icon.dart' as import12;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import14;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/src/runtime.dart' as import17;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import20;
import 'package:angular_components/button_decorator/button_decorator.dart' as import21;
import 'package:angular_components/interfaces/has_disabled.dart' as import22;
import 'dart:core';
import '../virtual_machine.dart' as import24;
import 'tagged_object_components.template.dart' as import25;
import 'tagged_object_components.dart' as import26;
import 'package:angular_components/material_input/material_input.template.dart' as import27;
import 'package:angular_components/material_input/deferred_validator.dart' as import28;
import 'package:angular_components/material_input/material_number_accessor.dart' as import29;
import 'package:angular_components/material_input/material_number_validators.dart' as import30;
import 'package:angular_forms/src/directives/validators.dart' as import31;
import 'package:angular_forms/src/directives/ng_model.dart' as import32;
import 'package:angular_components/material_input/material_input.dart' as import33;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import34;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import35;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import36;
import 'package:intl/intl.dart' as import37;
import 'package:angular_forms/src/directives/ng_control.dart' as import38;
import 'package:angular_components/utils/angular/reference/reference.dart' as import39;
import 'package:angular_components/focus/focus_interface.dart' as import40;
import 'package:angular_components/material_input/base_material_input.dart' as import41;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import42;

final List<dynamic> styles$AppComponent = [import0.styles, import1.styles];

class ViewAppComponent0 extends AppView<import3.AppComponent> {
  import4.DivElement _el_0;
  import4.Element _el_1;
  import4.DivElement _el_3;
  import4.DivElement _el_4;
  import4.Element _el_5;
  import4.Element _el_7;
  ViewContainer _appEl_8;
  import6.NgFor _NgFor_8_9;
  import4.DivElement _el_9;
  import4.Element _el_10;
  import4.Element _el_12;
  ViewContainer _appEl_13;
  import6.NgFor _NgFor_13_9;
  import4.DivElement _el_14;
  import7.NgSwitch _NgSwitch_14_5;
  import4.Element _el_15;
  ViewContainer _appEl_17;
  import7.NgSwitchWhen _NgSwitchWhen_17_9;
  ViewContainer _appEl_18;
  import7.NgSwitchWhen _NgSwitchWhen_18_9;
  import4.DivElement _el_19;
  import4.Element _el_20;
  import8.ViewMaterialButtonComponent0 _compView_20;
  import9.AcxDarkTheme _AcxDarkTheme_20_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_20_6;
  import4.Element _el_21;
  import11.ViewMaterialIconComponent0 _compView_21;
  import12.MaterialIconComponent _MaterialIconComponent_21_5;
  import4.Element _el_22;
  import8.ViewMaterialButtonComponent0 _compView_22;
  import9.AcxDarkTheme _AcxDarkTheme_22_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_22_6;
  import4.Element _el_23;
  import11.ViewMaterialIconComponent0 _compView_23;
  import12.MaterialIconComponent _MaterialIconComponent_23_5;
  ViewContainer _appEl_24;
  import7.NgSwitchWhen _NgSwitchWhen_24_9;
  ViewContainer _appEl_25;
  import7.NgSwitchWhen _NgSwitchWhen_25_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_5;
  bool _expr_8;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('fvm-app');
    _renderType ??= import16.appViewUtils.createRenderType((import17.isDevMode ? 'asset:fvm/lib/components/app_component.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    final _rootEl = rootEl;
    final import4.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import4.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'mdc-layout-grid';
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h1', _el_0);
    addShimE(_el_1);
    import4.Text _text_2 = import4.Text('F-Maschine');
    _el_1.append(_text_2);
    _el_3 = createDivAndAppend(doc, _el_0);
    _el_3.className = 'mdc-layout-grid__inner';
    addShimC(_el_3);
    _el_4 = createDivAndAppend(doc, _el_3);
    _el_4.className = 'mdc-layout-grid__cell';
    addShimC(_el_4);
    _el_5 = createAndAppend(doc, 'h2', _el_4);
    addShimE(_el_5);
    import4.Text _text_6 = import4.Text('Stack');
    _el_5.append(_text_6);
    _el_7 = createAndAppend(doc, 'pre', _el_4);
    _el_7.className = 'memory-block';
    addShimE(_el_7);
    final _anchor_8 = createViewContainerAnchor();
    _el_7.append(_anchor_8);
    _appEl_8 = ViewContainer(8, 7, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_AppComponent1);
    _NgFor_8_9 = import6.NgFor(_appEl_8, _TemplateRef_8_8);
    _el_9 = createDivAndAppend(doc, _el_3);
    _el_9.className = 'mdc-layout-grid__cell';
    addShimC(_el_9);
    _el_10 = createAndAppend(doc, 'h2', _el_9);
    addShimE(_el_10);
    import4.Text _text_11 = import4.Text('Heap');
    _el_10.append(_text_11);
    _el_12 = createAndAppend(doc, 'pre', _el_9);
    _el_12.className = 'memory-block';
    addShimE(_el_12);
    final _anchor_13 = createViewContainerAnchor();
    _el_12.append(_anchor_13);
    _appEl_13 = ViewContainer(13, 12, this, _anchor_13);
    TemplateRef _TemplateRef_13_8 = TemplateRef(_appEl_13, viewFactory_AppComponent5);
    _NgFor_13_9 = import6.NgFor(_appEl_13, _TemplateRef_13_8);
    _el_14 = createDivAndAppend(doc, _el_3);
    _el_14.className = 'mdc-layout-grid__cell';
    addShimC(_el_14);
    _NgSwitch_14_5 = import7.NgSwitch();
    _el_15 = createAndAppend(doc, 'h2', _el_14);
    addShimE(_el_15);
    import4.Text _text_16 = import4.Text('program memory');
    _el_15.append(_text_16);
    final _anchor_17 = createViewContainerAnchor();
    _el_14.append(_anchor_17);
    _appEl_17 = ViewContainer(17, 14, this, _anchor_17);
    TemplateRef _TemplateRef_17_8 = TemplateRef(_appEl_17, viewFactory_AppComponent10);
    _NgSwitchWhen_17_9 = import7.NgSwitchWhen(_appEl_17, _TemplateRef_17_8, _NgSwitch_14_5);
    final _anchor_18 = createViewContainerAnchor();
    _el_14.append(_anchor_18);
    _appEl_18 = ViewContainer(18, 14, this, _anchor_18);
    TemplateRef _TemplateRef_18_8 = TemplateRef(_appEl_18, viewFactory_AppComponent13);
    _NgSwitchWhen_18_9 = import7.NgSwitchWhen(_appEl_18, _TemplateRef_18_8, _NgSwitch_14_5);
    _el_19 = createDivAndAppend(doc, _el_14);
    addShimC(_el_19);
    _compView_20 = import8.ViewMaterialButtonComponent0(this, 20);
    _el_20 = _compView_20.rootEl;
    _el_19.append(_el_20);
    createAttr(_el_20, 'raised', '');
    addShimC(_el_20);
    _AcxDarkTheme_20_5 = import9.AcxDarkTheme(parentView.injectorGet(const import20.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialButtonComponent_20_6 = import10.MaterialButtonComponent(_el_20, _AcxDarkTheme_20_5, _compView_20.ref, null);
    _compView_21 = import11.ViewMaterialIconComponent0(this, 21);
    _el_21 = _compView_21.rootEl;
    createAttr(_el_21, 'icon', 'skip_next');
    addShimC(_el_21);
    _MaterialIconComponent_21_5 = import12.MaterialIconComponent(_el_21);
    _compView_21.create(_MaterialIconComponent_21_5, []);
    _compView_20.create(_MaterialButtonComponent_20_6, [
      [_el_21]
    ]);
    _compView_22 = import8.ViewMaterialButtonComponent0(this, 22);
    _el_22 = _compView_22.rootEl;
    _el_19.append(_el_22);
    createAttr(_el_22, 'raised', '');
    addShimC(_el_22);
    _AcxDarkTheme_22_5 = import9.AcxDarkTheme(parentView.injectorGet(const import20.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialButtonComponent_22_6 = import10.MaterialButtonComponent(_el_22, _AcxDarkTheme_22_5, _compView_22.ref, null);
    _compView_23 = import11.ViewMaterialIconComponent0(this, 23);
    _el_23 = _compView_23.rootEl;
    createAttr(_el_23, 'icon', 'replay');
    addShimC(_el_23);
    _MaterialIconComponent_23_5 = import12.MaterialIconComponent(_el_23);
    _compView_23.create(_MaterialIconComponent_23_5, []);
    _compView_22.create(_MaterialButtonComponent_22_6, [
      [_el_23]
    ]);
    final _anchor_24 = createViewContainerAnchor();
    _el_19.append(_anchor_24);
    _appEl_24 = ViewContainer(24, 19, this, _anchor_24);
    TemplateRef _TemplateRef_24_8 = TemplateRef(_appEl_24, viewFactory_AppComponent15);
    _NgSwitchWhen_24_9 = import7.NgSwitchWhen(_appEl_24, _TemplateRef_24_8, _NgSwitch_14_5);
    final _anchor_25 = createViewContainerAnchor();
    _el_19.append(_anchor_25);
    _appEl_25 = ViewContainer(25, 19, this, _anchor_25);
    TemplateRef _TemplateRef_25_8 = TemplateRef(_appEl_25, viewFactory_AppComponent16);
    _NgSwitchWhen_25_9 = import7.NgSwitchWhen(_appEl_25, _TemplateRef_25_8, _NgSwitch_14_5);
    final subscription_0 = _MaterialButtonComponent_20_6.trigger.listen(eventHandler0(ctx.executeSingleInstruction));
    final subscription_1 = _MaterialButtonComponent_22_6.trigger.listen(eventHandler0(ctx.initializeVM));
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import9.AcxDarkTheme) && ((20 <= nodeIndex) && (nodeIndex <= 21)))) {
      return _AcxDarkTheme_20_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import21.ButtonDirective)) || identical(token, import22.HasDisabled)) && ((20 <= nodeIndex) && (nodeIndex <= 21)))) {
      return _MaterialButtonComponent_20_6;
    }
    if ((identical(token, import9.AcxDarkTheme) && ((22 <= nodeIndex) && (nodeIndex <= 23)))) {
      return _AcxDarkTheme_22_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import21.ButtonDirective)) || identical(token, import22.HasDisabled)) && ((22 <= nodeIndex) && (nodeIndex <= 23)))) {
      return _MaterialButtonComponent_22_6;
    }
    if ((identical(token, import7.NgSwitch) && ((14 <= nodeIndex) && (nodeIndex <= 25)))) {
      return _NgSwitch_14_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import3.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.vm.stack;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _NgFor_8_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import16.AppViewUtils.throwOnChanges) {
      _NgFor_8_9.ngDoCheck();
    }
    final currVal_1 = _ctx.vm.heap.values;
    if (import16.checkBinding(_expr_1, currVal_1)) {
      _NgFor_13_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if (!import16.AppViewUtils.throwOnChanges) {
      _NgFor_13_9.ngDoCheck();
    }
    final currVal_2 = _ctx.mode;
    if (import16.checkBinding(_expr_2, currVal_2)) {
      _NgSwitch_14_5.ngSwitch = currVal_2;
      _expr_2 = currVal_2;
    }
    if (firstCheck) {
      if (!identical(import3.AppComponent.executionMode, null)) {
        (_NgSwitchWhen_17_9.ngSwitchCase = import3.AppComponent.executionMode);
      }
      if (!identical(import3.AppComponent.editingMode, null)) {
        (_NgSwitchWhen_18_9.ngSwitchCase = import3.AppComponent.editingMode);
      }
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_20_6.raised = true;
      changed = true;
    }
    final currVal_5 = ((_ctx.mode != import3.AppComponent.executionMode) || _ctx.vm.terminated);
    if (import16.checkBinding(_expr_5, currVal_5)) {
      _MaterialButtonComponent_20_6.disabled = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_20.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_20_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_21_5.icon = 'skip_next';
      changed = true;
    }
    if (changed) {
      _compView_21.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_22_6.raised = true;
      changed = true;
    }
    final currVal_8 = (_ctx.mode != import3.AppComponent.executionMode);
    if (import16.checkBinding(_expr_8, currVal_8)) {
      _MaterialButtonComponent_22_6.disabled = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    if (changed) {
      _compView_22.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_22_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_23_5.icon = 'replay';
      changed = true;
    }
    if (changed) {
      _compView_23.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(import3.AppComponent.executionMode, null)) {
        (_NgSwitchWhen_24_9.ngSwitchCase = import3.AppComponent.executionMode);
      }
      if (!identical(import3.AppComponent.editingMode, null)) {
        (_NgSwitchWhen_25_9.ngSwitchCase = import3.AppComponent.editingMode);
      }
    }
    _appEl_8.detectChangesInNestedViews();
    _appEl_13.detectChangesInNestedViews();
    _appEl_17.detectChangesInNestedViews();
    _appEl_18.detectChangesInNestedViews();
    _appEl_24.detectChangesInNestedViews();
    _appEl_25.detectChangesInNestedViews();
    _compView_20.detectHostChanges(firstCheck);
    _compView_22.detectHostChanges(firstCheck);
    _compView_20.detectChanges();
    _compView_21.detectChanges();
    _compView_22.detectChanges();
    _compView_23.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_8?.destroyNestedViews();
    _appEl_13?.destroyNestedViews();
    _appEl_17?.destroyNestedViews();
    _appEl_18?.destroyNestedViews();
    _appEl_24?.destroyNestedViews();
    _appEl_25?.destroyNestedViews();
    _compView_20?.destroy();
    _compView_21?.destroy();
    _compView_22?.destroy();
    _compView_23?.destroy();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

class _ViewAppComponent1 extends AppView<import3.AppComponent> {
  import4.Element _el_0;
  import4.Comment _anchor_1;
  import4.Element _el_1_0;
  import4.Text _text_1_1;
  import4.Comment _anchor_3;
  import4.Element _el_3_0;
  import4.Text _text_3_1;
  import4.Element _el_3_2;
  import4.Text _text_3_3;
  import4.Comment _anchor_5;
  import4.Element _el_5_0;
  import4.Text _text_5_1;
  import4.Text _text_7;
  bool _expr_0 = false;
  bool _expr_1 = false;
  bool _expr_2 = false;
  var _expr_3;
  _ViewAppComponent1(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'memory-cell number-value';
    addShimE(_el_0);
    _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    import4.Text _text_2 = import4.Text(' ');
    _el_0.append(_text_2);
    _anchor_3 = createViewContainerAnchor();
    _el_0.append(_anchor_3);
    import4.Text _text_4 = import4.Text(' ');
    _el_0.append(_text_4);
    _anchor_5 = createViewContainerAnchor();
    _el_0.append(_anchor_5);
    import4.Text _text_6 = import4.Text(' ');
    _el_0.append(_text_6);
    _text_7 = import4.Text('');
    _el_0.append(_text_7);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.AppComponent _ctx = ctx;
    final int local_i = locals['index'];
    final int local_value = locals['\$implicit'];
    final currVal_0 = ((local_i == _ctx.vm.stackPointer) == true);
    if (import16.checkBinding(_expr_0, currVal_0)) {
      if (currVal_0) {
        var doc = import4.document;
        _el_1_0 = doc.createElement('span');
        _el_1_0.className = 'pointer-indicator';
        addShimE(_el_1_0);
        _text_1_1 = import4.Text('SP');
        _el_1_0.append(_text_1_1);
        addInlinedNodes(_anchor_1, [_el_1_0]);
      } else {
        removeInlinedNodes([_el_1_0]);
      }
      _expr_0 = currVal_0;
    }
    final currVal_1 = ((local_i == _ctx.vm.stackPointer0) == true);
    if (import16.checkBinding(_expr_1, currVal_1)) {
      if (currVal_1) {
        var doc = import4.document;
        _el_3_0 = doc.createElement('span');
        _el_3_0.className = 'pointer-indicator';
        addShimE(_el_3_0);
        _text_3_1 = import4.Text('SP');
        _el_3_0.append(_text_3_1);
        _el_3_2 = createAndAppend(doc, 'sub', _el_3_0);
        addShimE(_el_3_2);
        _text_3_3 = import4.Text('0');
        _el_3_2.append(_text_3_3);
        addInlinedNodes(_anchor_3, [_el_3_0]);
      } else {
        removeInlinedNodes([_el_3_0]);
      }
      _expr_1 = currVal_1;
    }
    final currVal_2 = ((local_i == _ctx.vm.framePointer) == true);
    if (import16.checkBinding(_expr_2, currVal_2)) {
      if (currVal_2) {
        var doc = import4.document;
        _el_5_0 = doc.createElement('span');
        _el_5_0.className = 'pointer-indicator';
        addShimE(_el_5_0);
        _text_5_1 = import4.Text('FP');
        _el_5_0.append(_text_5_1);
        addInlinedNodes(_anchor_5, [_el_5_0]);
      } else {
        removeInlinedNodes([_el_5_0]);
      }
      _expr_2 = currVal_2;
    }
    final currVal_3 = import16.interpolate0(local_value);
    if (import16.checkBinding(_expr_3, currVal_3)) {
      _text_7.text = currVal_3;
      _expr_3 = currVal_3;
    }
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent1(parentView, parentIndex);
}

class _ViewAppComponent5 extends AppView<import3.AppComponent> {
  import4.DivElement _el_0;
  import7.NgSwitch _NgSwitch_0_5;
  ViewContainer _appEl_1;
  import7.NgSwitchWhen _NgSwitchWhen_1_9;
  ViewContainer _appEl_2;
  import7.NgSwitchWhen _NgSwitchWhen_2_9;
  ViewContainer _appEl_3;
  import7.NgSwitchWhen _NgSwitchWhen_3_9;
  ViewContainer _appEl_4;
  import7.NgSwitchWhen _NgSwitchWhen_4_9;
  var _expr_0;
  _ViewAppComponent5(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _NgSwitch_0_5 = import7.NgSwitch();
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_AppComponent6);
    _NgSwitchWhen_1_9 = import7.NgSwitchWhen(_appEl_1, _TemplateRef_1_8, _NgSwitch_0_5);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_AppComponent7);
    _NgSwitchWhen_2_9 = import7.NgSwitchWhen(_appEl_2, _TemplateRef_2_8, _NgSwitch_0_5);
    final _anchor_3 = createViewContainerAnchor();
    _el_0.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_AppComponent8);
    _NgSwitchWhen_3_9 = import7.NgSwitchWhen(_appEl_3, _TemplateRef_3_8, _NgSwitch_0_5);
    final _anchor_4 = createViewContainerAnchor();
    _el_0.append(_anchor_4);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_AppComponent9);
    _NgSwitchWhen_4_9 = import7.NgSwitchWhen(_appEl_4, _TemplateRef_4_8, _NgSwitch_0_5);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import7.NgSwitch) && ((0 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _NgSwitch_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final import24.TaggedObject local_object = locals['\$implicit'];
    final currVal_0 = local_object.runtimeType;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _NgSwitch_0_5.ngSwitch = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      if (!identical(import24.TaggedInt, null)) {
        (_NgSwitchWhen_1_9.ngSwitchCase = import24.TaggedInt);
      }
      if (!identical(import24.TaggedList, null)) {
        (_NgSwitchWhen_2_9.ngSwitchCase = import24.TaggedList);
      }
      if (!identical(import24.TaggedFunction, null)) {
        (_NgSwitchWhen_3_9.ngSwitchCase = import24.TaggedFunction);
      }
      if (!identical(import24.TaggedClosure, null)) {
        (_NgSwitchWhen_4_9.ngSwitchCase = import24.TaggedClosure);
      }
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
    _appEl_4?.destroyNestedViews();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent5(parentView, parentIndex);
}

class _ViewAppComponent6 extends AppView<import3.AppComponent> {
  import4.Element _el_0;
  import25.ViewTaggedIntComponent0 _compView_0;
  import26.TaggedIntComponent _TaggedIntComponent_0_5;
  var _expr_0;
  _ViewAppComponent6(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = import25.ViewTaggedIntComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _TaggedIntComponent_0_5 = import26.TaggedIntComponent();
    _compView_0.create(_TaggedIntComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import24.TaggedObject local_object = parentView.locals['\$implicit'];
    final currVal_0 = local_object;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _TaggedIntComponent_0_5.object = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent6(parentView, parentIndex);
}

class _ViewAppComponent7 extends AppView<import3.AppComponent> {
  import4.Element _el_0;
  import25.ViewTaggedListComponent0 _compView_0;
  import26.TaggedListComponent _TaggedListComponent_0_5;
  var _expr_0;
  _ViewAppComponent7(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = import25.ViewTaggedListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _TaggedListComponent_0_5 = import26.TaggedListComponent();
    _compView_0.create(_TaggedListComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import24.TaggedObject local_object = parentView.locals['\$implicit'];
    final currVal_0 = local_object;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _TaggedListComponent_0_5.object = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent7(parentView, parentIndex);
}

class _ViewAppComponent8 extends AppView<import3.AppComponent> {
  import4.Element _el_0;
  import25.ViewTaggedFunctionComponent0 _compView_0;
  import26.TaggedFunctionComponent _TaggedFunctionComponent_0_5;
  var _expr_0;
  _ViewAppComponent8(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = import25.ViewTaggedFunctionComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _TaggedFunctionComponent_0_5 = import26.TaggedFunctionComponent();
    _compView_0.create(_TaggedFunctionComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import24.TaggedObject local_object = parentView.locals['\$implicit'];
    final currVal_0 = local_object;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _TaggedFunctionComponent_0_5.object = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent8(parentView, parentIndex);
}

class _ViewAppComponent9 extends AppView<import3.AppComponent> {
  import4.Element _el_0;
  import25.ViewTaggedClosureComponent0 _compView_0;
  import26.TaggedClosureComponent _TaggedClosureComponent_0_5;
  var _expr_0;
  _ViewAppComponent9(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = import25.ViewTaggedClosureComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _TaggedClosureComponent_0_5 = import26.TaggedClosureComponent();
    _compView_0.create(_TaggedClosureComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import24.TaggedObject local_object = parentView.locals['\$implicit'];
    final currVal_0 = local_object;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _TaggedClosureComponent_0_5.object = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent9(parentView, parentIndex);
}

class _ViewAppComponent10 extends AppView<import3.AppComponent> {
  import4.Element _el_0;
  ViewContainer _appEl_1;
  import6.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewAppComponent10(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('pre');
    _el_0.className = 'memory-block';
    addShimE(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_AppComponent11);
    _NgFor_1_9 = import6.NgFor(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.AppComponent _ctx = ctx;
    final currVal_0 = _ctx.vm.program;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import16.AppViewUtils.throwOnChanges) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent10(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent10(parentView, parentIndex);
}

class _ViewAppComponent11 extends AppView<import3.AppComponent> {
  import4.Element _el_0;
  import4.Text _text_1;
  import4.Comment _anchor_3;
  import4.Element _el_3_0;
  import4.Text _text_3_1;
  var _expr_0;
  bool _expr_1 = false;
  _ViewAppComponent11(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'memory-cell';
    addShimE(_el_0);
    _text_1 = import4.Text('');
    _el_0.append(_text_1);
    import4.Text _text_2 = import4.Text(' ');
    _el_0.append(_text_2);
    _anchor_3 = createViewContainerAnchor();
    _el_0.append(_anchor_3);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.AppComponent _ctx = ctx;
    final import24.Instruction local_instruction = locals['\$implicit'];
    final int local_i = locals['index'];
    final currVal_1 = ((local_i == _ctx.vm.programCounter) == true);
    if (import16.checkBinding(_expr_1, currVal_1)) {
      if (currVal_1) {
        var doc = import4.document;
        _el_3_0 = doc.createElement('span');
        _el_3_0.className = 'pointer-indicator';
        addShimE(_el_3_0);
        _text_3_1 = import4.Text('PC');
        _el_3_0.append(_text_3_1);
        addInlinedNodes(_anchor_3, [_el_3_0]);
      } else {
        removeInlinedNodes([_el_3_0]);
      }
      _expr_1 = currVal_1;
    }
    final currVal_0 = import16.interpolate0(local_instruction);
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent11(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent11(parentView, parentIndex);
}

class _ViewAppComponent13 extends AppView<import3.AppComponent> {
  import4.DivElement _el_0;
  import4.Element _el_1;
  import27.ViewMaterialInputComponent0 _compView_1;
  import28.DeferredValidator _DeferredValidator_1_5;
  import29.MaterialNumberValidator _MaterialNumberValidator_1_6;
  import30.PositiveNumValidator _PositiveNumValidator_1_7;
  import31.RequiredValidator _RequiredValidator_1_8;
  List<dynamic> _NgValidators_1_9;
  import32.NgModel _NgModel_1_10;
  import32.NgModel _NgControl_1_11;
  import33.MaterialInputComponent _MaterialInputComponent_1_12;
  import33.MaterialInputComponent _BaseMaterialInput_1_13;
  import34.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_1_14;
  import29.MaterialNumberValueAccessor _MaterialNumberValueAccessor_1_15;
  import4.Element _el_2;
  import4.TextAreaElement _el_3;
  import35.DefaultValueAccessor _DefaultValueAccessor_3_5;
  List<import36.ControlValueAccessor<dynamic>> _NgValueAccessor_3_6;
  import32.NgModel _NgModel_3_7;
  import4.UListElement _el_4;
  ViewContainer _appEl_5;
  import6.NgFor _NgFor_5_9;
  _ViewAppComponent13(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _compView_1 = import27.ViewMaterialInputComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'checkPositive', '');
    createAttr(_el_1, 'label', 'max address');
    createAttr(_el_1, 'required', '');
    createAttr(_el_1, 'type', 'number');
    addShimC(_el_1);
    _DeferredValidator_1_5 = import28.DeferredValidator();
    _MaterialNumberValidator_1_6 = import29.MaterialNumberValidator();
    _PositiveNumValidator_1_7 = import30.PositiveNumValidator();
    _RequiredValidator_1_8 = import31.RequiredValidator();
    _NgValidators_1_9 = [_DeferredValidator_1_5, _MaterialNumberValidator_1_6, _PositiveNumValidator_1_7, _RequiredValidator_1_8];
    _NgModel_1_10 = import32.NgModel(_NgValidators_1_9, null);
    _NgControl_1_11 = _NgModel_1_10;
    _MaterialInputComponent_1_12 = import33.MaterialInputComponent('number', null, null, _NgControl_1_11, _compView_1.ref, _DeferredValidator_1_5);
    _BaseMaterialInput_1_13 = _MaterialInputComponent_1_12;
    _MaterialInputDefaultValueAccessor_1_14 = import34.MaterialInputDefaultValueAccessor(_BaseMaterialInput_1_13, _NgControl_1_11);
    _MaterialNumberValueAccessor_1_15 = import29.MaterialNumberValueAccessor(_BaseMaterialInput_1_13, _NgControl_1_11, parentView.parentView.injectorGet(import37.NumberFormat, parentView.viewData.parentIndex, null), null, null, null, null);
    _compView_1.create(_MaterialInputComponent_1_12, [const [], const []]);
    _el_2 = createAndAppend(doc, 'pre', _el_0);
    addShimE(_el_2);
    _el_3 = createAndAppend(doc, 'textarea', _el_2);
    _el_3.className = 'assembly-editor';
    createAttr(_el_3, 'rows', '10');
    createAttr(_el_3, 'wrap', 'off');
    addShimC(_el_3);
    _DefaultValueAccessor_3_5 = import35.DefaultValueAccessor(_el_3);
    _NgValueAccessor_3_6 = [_DefaultValueAccessor_3_5];
    _NgModel_3_7 = import32.NgModel(null, _NgValueAccessor_3_6);
    _el_4 = createAndAppend(doc, 'ul', _el_0);
    addShimC(_el_4);
    final _anchor_5 = createViewContainerAnchor();
    _el_4.append(_anchor_5);
    _appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_AppComponent14);
    _NgFor_5_9 = import6.NgFor(_appEl_5, _TemplateRef_5_8);
    final subscription_0 = _NgModel_1_10.update.listen(eventHandler1(_handle_ngModelChange_1_0));
    _el_3.addEventListener('blur', eventHandler0(_DefaultValueAccessor_3_5.touchHandler));
    _el_3.addEventListener('input', eventHandler1(_handle_input_3_2));
    final subscription_1 = _NgModel_3_7.update.listen(eventHandler1(_handle_ngModelChange_3_0));
    init([_el_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import28.DeferredValidator) && (1 == nodeIndex))) {
      return _DeferredValidator_1_5;
    }
    if ((identical(token, import29.MaterialNumberValidator) && (1 == nodeIndex))) {
      return _MaterialNumberValidator_1_6;
    }
    if ((identical(token, import30.PositiveNumValidator) && (1 == nodeIndex))) {
      return _PositiveNumValidator_1_7;
    }
    if ((identical(token, const import20.MultiToken('NgValidators')) && (1 == nodeIndex))) {
      return _NgValidators_1_9;
    }
    if ((identical(token, import32.NgModel) && (1 == nodeIndex))) {
      return _NgModel_1_10;
    }
    if ((identical(token, import38.NgControl) && (1 == nodeIndex))) {
      return _NgControl_1_11;
    }
    if (((((identical(token, import33.MaterialInputComponent) || identical(token, import39.ReferenceDirective)) || identical(token, import40.Focusable)) || identical(token, import22.HasDisabled)) && (1 == nodeIndex))) {
      return _MaterialInputComponent_1_12;
    }
    if ((identical(token, import41.BaseMaterialInput) && (1 == nodeIndex))) {
      return _BaseMaterialInput_1_13;
    }
    if ((identical(token, import34.MaterialInputDefaultValueAccessor) && (1 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_1_14;
    }
    if ((identical(token, import29.MaterialNumberValueAccessor) && (1 == nodeIndex))) {
      return _MaterialNumberValueAccessor_1_15;
    }
    if ((identical(token, const import20.MultiToken<import42.ControlValueAccessor>('NgValueAccessor')) && (3 == nodeIndex))) {
      return _NgValueAccessor_3_6;
    }
    if (((identical(token, import32.NgModel) || identical(token, import38.NgControl)) && (3 == nodeIndex))) {
      return _NgModel_3_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import3.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _PositiveNumValidator_1_7.enabled = true;
      _RequiredValidator_1_8.required = true;
    }
    changed = false;
    _NgModel_1_10.model = _ctx.maxAddress;
    _NgModel_1_10.ngAfterChanges();
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_1_10.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_1_12.label = 'max address';
      changed = true;
      _MaterialInputComponent_1_12.floatingLabel = true;
      changed = true;
      _MaterialInputComponent_1_12.required = true;
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    _NgModel_3_7.model = _ctx.editorInput;
    _NgModel_3_7.ngAfterChanges();
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_3_7.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(_ctx.parseErrors, null)) {
        (_NgFor_5_9.ngForOf = _ctx.parseErrors);
      }
    }
    if (!import16.AppViewUtils.throwOnChanges) {
      _NgFor_5_9.ngDoCheck();
    }
    _appEl_5.detectChangesInNestedViews();
    _compView_1.detectChanges();
    if (!import16.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialInputComponent_1_12.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_5?.destroyNestedViews();
    _compView_1?.destroy();
    _MaterialInputComponent_1_12.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_1_14.ngOnDestroy();
    _MaterialNumberValueAccessor_1_15.ngOnDestroy();
  }

  void _handle_ngModelChange_1_0($event) {
    ctx.maxAddress = $event;
  }

  void _handle_ngModelChange_3_0($event) {
    ctx.editorInput = $event;
  }

  void _handle_input_3_2($event) {
    _DefaultValueAccessor_3_5.handleChange($event.target.value);
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent13(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent13(parentView, parentIndex);
}

class _ViewAppComponent14 extends AppView<import3.AppComponent> {
  import4.Element _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent14(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('li');
    _el_0.className = 'error';
    addShimE(_el_0);
    _text_1 = import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final String local_error = locals['\$implicit'];
    final currVal_0 = import16.interpolate0(local_error);
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent14(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent14(parentView, parentIndex);
}

class _ViewAppComponent15 extends AppView<import3.AppComponent> {
  import4.Element _el_0;
  import8.ViewMaterialButtonComponent0 _compView_0;
  import9.AcxDarkTheme _AcxDarkTheme_0_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import4.Element _el_1;
  import11.ViewMaterialIconComponent0 _compView_1;
  import12.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewAppComponent15(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = import8.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = import9.AcxDarkTheme(parentView.parentView.injectorGet(const import20.OpaqueToken('acxDarkTheme'), parentView.viewData.parentIndex, null));
    _MaterialButtonComponent_0_6 = import10.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _compView_1 = import11.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    createAttr(_el_1, 'icon', 'create');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import12.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(ctx.activateEditingMode));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import9.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import21.ButtonDirective)) || identical(token, import22.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_0_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_0_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'create';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_1?.destroy();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent15(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent15(parentView, parentIndex);
}

class _ViewAppComponent16 extends AppView<import3.AppComponent> {
  import4.Element _el_0;
  import8.ViewMaterialButtonComponent0 _compView_0;
  import9.AcxDarkTheme _AcxDarkTheme_0_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import4.Element _el_1;
  import11.ViewMaterialIconComponent0 _compView_1;
  import12.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewAppComponent16(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = import8.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = import9.AcxDarkTheme(parentView.parentView.injectorGet(const import20.OpaqueToken('acxDarkTheme'), parentView.viewData.parentIndex, null));
    _MaterialButtonComponent_0_6 = import10.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _compView_1 = import11.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    createAttr(_el_1, 'icon', 'save');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import12.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(ctx.activateExecutionMode));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import9.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import21.ButtonDirective)) || identical(token, import22.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_0_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_0_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'save';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_1?.destroy();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent16(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent16(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import3.AppComponent> {
  ViewAppComponent0 _compView_0;
  import3.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import3.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _AppComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import3.AppComponent> _AppComponentNgFactory = const ComponentFactory('fvm-app', viewFactory_AppComponentHost0);
ComponentFactory<import3.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
