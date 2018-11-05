// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_spinner.dart';
export 'material_spinner.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_spinner/material_spinner.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_spinner.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$MaterialSpinnerComponent = [import0.styles];

class ViewMaterialSpinnerComponent0 extends AppView<import2.MaterialSpinnerComponent> {
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  import3.DivElement _el_2;
  import3.DivElement _el_3;
  static RenderComponentType _renderType;
  ViewMaterialSpinnerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-spinner');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/material_spinner/material_spinner.dart' : null), ViewEncapsulation.Emulated, styles$MaterialSpinnerComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialSpinnerComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'spinner';
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'circle left';
    addShimC(_el_1);
    _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'circle right';
    addShimC(_el_2);
    _el_3 = createDivAndAppend(doc, _el_0);
    _el_3.className = 'circle gap';
    addShimC(_el_3);
    init(const [], null);
    return null;
  }
}

AppView<import2.MaterialSpinnerComponent> viewFactory_MaterialSpinnerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialSpinnerComponent0(parentView, parentIndex);
}

final List<dynamic> styles$MaterialSpinnerComponentHost = const [];

class _ViewMaterialSpinnerComponentHost0 extends AppView<import2.MaterialSpinnerComponent> {
  ViewMaterialSpinnerComponent0 _compView_0;
  import2.MaterialSpinnerComponent _MaterialSpinnerComponent_0_5;
  _ViewMaterialSpinnerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialSpinnerComponent> build() {
    _compView_0 = ViewMaterialSpinnerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSpinnerComponent_0_5 = import2.MaterialSpinnerComponent();
    _compView_0.create(_MaterialSpinnerComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialSpinnerComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialSpinnerComponent> viewFactory_MaterialSpinnerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSpinnerComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialSpinnerComponent> _MaterialSpinnerComponentNgFactory = const ComponentFactory('material-spinner', viewFactory_MaterialSpinnerComponentHost0);
ComponentFactory<import2.MaterialSpinnerComponent> get MaterialSpinnerComponentNgFactory {
  return _MaterialSpinnerComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSpinnerComponent, MaterialSpinnerComponentNgFactory);
  _ref0.initReflector();
}
