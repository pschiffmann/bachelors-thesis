// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'tagged_object_components.dart';
export 'tagged_object_components.dart';
import 'package:angular/angular.dart';
import 'package:fvm/virtual_machine.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:fvm/virtual_machine.template.dart' as _ref1;
import 'package:fvm/components/tagged_object_components.scss.css.shim.dart' as import0;
import 'package:fvm/components/memory.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'tagged_object_components.dart' as import3;
import 'dart:html' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:core';

final List<dynamic> styles$TaggedClosureComponent = [import0.styles, import1.styles];

class ViewTaggedClosureComponent0 extends AppView<import3.TaggedClosureComponent> {
  import4.Element _el_0;
  import4.Element _el_3;
  import4.Text _text_4;
  import4.Element _el_6;
  import4.Text _text_7;
  ViewContainer _appEl_9;
  import6.NgFor _NgFor_9_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewTaggedClosureComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('tagged-closure');
    _renderType ??= import10.appViewUtils.createRenderType((import11.isDevMode ? 'asset:fvm/lib/components/tagged_object_components.dart' : null), ViewEncapsulation.Emulated, styles$TaggedClosureComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.TaggedClosureComponent> build() {
    final _rootEl = rootEl;
    final import4.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import4.document;
    _el_0 = createSpanAndAppend(doc, parentRenderNode);
    _el_0.className = 'memory-cell tag';
    addShimE(_el_0);
    import4.Text _text_1 = import4.Text('C');
    _el_0.append(_text_1);
    import4.Text _text_2 = import4.Text('\n');
    parentRenderNode.append(_text_2);
    _el_3 = createSpanAndAppend(doc, parentRenderNode);
    _el_3.className = 'memory-cell number-value';
    addShimE(_el_3);
    _text_4 = import4.Text('');
    _el_3.append(_text_4);
    import4.Text _text_5 = import4.Text('\n');
    parentRenderNode.append(_text_5);
    _el_6 = createSpanAndAppend(doc, parentRenderNode);
    _el_6.className = 'memory-cell number-value';
    addShimE(_el_6);
    _text_7 = import4.Text('');
    _el_6.append(_text_7);
    import4.Text _text_8 = import4.Text('\n');
    parentRenderNode.append(_text_8);
    final _anchor_9 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_9);
    _appEl_9 = ViewContainer(9, null, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_TaggedClosureComponent1);
    _NgFor_9_9 = import6.NgFor(_appEl_9, _TemplateRef_9_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.TaggedClosureComponent _ctx = ctx;
    final currVal_2 = _ctx.padding;
    if (import10.checkBinding(_expr_2, currVal_2)) {
      _NgFor_9_9.ngForOf = currVal_2;
      _expr_2 = currVal_2;
    }
    if (!import10.AppViewUtils.throwOnChanges) {
      _NgFor_9_9.ngDoCheck();
    }
    _appEl_9.detectChangesInNestedViews();
    final currVal_0 = import10.interpolate0(_ctx.object.expressionLabel);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _text_4.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import10.interpolate0(_ctx.object.globalVectorAddress);
    if (import10.checkBinding(_expr_1, currVal_1)) {
      _text_7.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_9?.destroyNestedViews();
  }
}

AppView<import3.TaggedClosureComponent> viewFactory_TaggedClosureComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewTaggedClosureComponent0(parentView, parentIndex);
}

class _ViewTaggedClosureComponent1 extends AppView<import3.TaggedClosureComponent> {
  import4.Element _el_0;
  _ViewTaggedClosureComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewTaggedClosureComponent0._renderType;
  }
  @override
  ComponentRef<import3.TaggedClosureComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'memory-cell padding';
    addShimE(_el_0);
    import4.Text _text_1 = import4.Text('...');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }
}

AppView<import3.TaggedClosureComponent> viewFactory_TaggedClosureComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTaggedClosureComponent1(parentView, parentIndex);
}

final List<dynamic> styles$TaggedClosureComponentHost = const [];

class _ViewTaggedClosureComponentHost0 extends AppView<import3.TaggedClosureComponent> {
  ViewTaggedClosureComponent0 _compView_0;
  import3.TaggedClosureComponent _TaggedClosureComponent_0_5;
  _ViewTaggedClosureComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import3.TaggedClosureComponent> build() {
    _compView_0 = ViewTaggedClosureComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TaggedClosureComponent_0_5 = import3.TaggedClosureComponent();
    _compView_0.create(_TaggedClosureComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _TaggedClosureComponent_0_5);
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

AppView<import3.TaggedClosureComponent> viewFactory_TaggedClosureComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTaggedClosureComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import3.TaggedClosureComponent> _TaggedClosureComponentNgFactory = const ComponentFactory('tagged-closure', viewFactory_TaggedClosureComponentHost0);
ComponentFactory<import3.TaggedClosureComponent> get TaggedClosureComponentNgFactory {
  return _TaggedClosureComponentNgFactory;
}

final List<dynamic> styles$TaggedFunctionComponent = [import0.styles, import1.styles];

class ViewTaggedFunctionComponent0 extends AppView<import3.TaggedFunctionComponent> {
  import4.Element _el_0;
  import4.Element _el_3;
  import4.Text _text_4;
  import4.Element _el_6;
  import4.Text _text_7;
  import4.Element _el_9;
  import4.Text _text_10;
  ViewContainer _appEl_12;
  import6.NgFor _NgFor_12_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewTaggedFunctionComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('tagged-function');
    _renderType ??= import10.appViewUtils.createRenderType((import11.isDevMode ? 'asset:fvm/lib/components/tagged_object_components.dart' : null), ViewEncapsulation.Emulated, styles$TaggedFunctionComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.TaggedFunctionComponent> build() {
    final _rootEl = rootEl;
    final import4.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import4.document;
    _el_0 = createSpanAndAppend(doc, parentRenderNode);
    _el_0.className = 'memory-cell tag';
    addShimE(_el_0);
    import4.Text _text_1 = import4.Text('F');
    _el_0.append(_text_1);
    import4.Text _text_2 = import4.Text('\n');
    parentRenderNode.append(_text_2);
    _el_3 = createSpanAndAppend(doc, parentRenderNode);
    _el_3.className = 'memory-cell number-value';
    addShimE(_el_3);
    _text_4 = import4.Text('');
    _el_3.append(_text_4);
    import4.Text _text_5 = import4.Text('\n');
    parentRenderNode.append(_text_5);
    _el_6 = createSpanAndAppend(doc, parentRenderNode);
    _el_6.className = 'memory-cell number-value';
    addShimE(_el_6);
    _text_7 = import4.Text('');
    _el_6.append(_text_7);
    import4.Text _text_8 = import4.Text('\n');
    parentRenderNode.append(_text_8);
    _el_9 = createSpanAndAppend(doc, parentRenderNode);
    _el_9.className = 'memory-cell number-value';
    addShimE(_el_9);
    _text_10 = import4.Text('');
    _el_9.append(_text_10);
    import4.Text _text_11 = import4.Text('\n');
    parentRenderNode.append(_text_11);
    final _anchor_12 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_12);
    _appEl_12 = ViewContainer(12, null, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(_appEl_12, viewFactory_TaggedFunctionComponent1);
    _NgFor_12_9 = import6.NgFor(_appEl_12, _TemplateRef_12_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.TaggedFunctionComponent _ctx = ctx;
    final currVal_3 = _ctx.padding;
    if (import10.checkBinding(_expr_3, currVal_3)) {
      _NgFor_12_9.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    if (!import10.AppViewUtils.throwOnChanges) {
      _NgFor_12_9.ngDoCheck();
    }
    _appEl_12.detectChangesInNestedViews();
    final currVal_0 = import10.interpolate0(_ctx.object.functionLabel);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _text_4.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import10.interpolate0(_ctx.object.globalVectorAddress);
    if (import10.checkBinding(_expr_1, currVal_1)) {
      _text_7.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import10.interpolate0(_ctx.object.argumentVectorAddress);
    if (import10.checkBinding(_expr_2, currVal_2)) {
      _text_10.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }

  @override
  void destroyInternal() {
    _appEl_12?.destroyNestedViews();
  }
}

AppView<import3.TaggedFunctionComponent> viewFactory_TaggedFunctionComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewTaggedFunctionComponent0(parentView, parentIndex);
}

class _ViewTaggedFunctionComponent1 extends AppView<import3.TaggedFunctionComponent> {
  import4.Element _el_0;
  _ViewTaggedFunctionComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewTaggedFunctionComponent0._renderType;
  }
  @override
  ComponentRef<import3.TaggedFunctionComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'memory-cell padding';
    addShimE(_el_0);
    import4.Text _text_1 = import4.Text('...');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }
}

AppView<import3.TaggedFunctionComponent> viewFactory_TaggedFunctionComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTaggedFunctionComponent1(parentView, parentIndex);
}

final List<dynamic> styles$TaggedFunctionComponentHost = const [];

class _ViewTaggedFunctionComponentHost0 extends AppView<import3.TaggedFunctionComponent> {
  ViewTaggedFunctionComponent0 _compView_0;
  import3.TaggedFunctionComponent _TaggedFunctionComponent_0_5;
  _ViewTaggedFunctionComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import3.TaggedFunctionComponent> build() {
    _compView_0 = ViewTaggedFunctionComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TaggedFunctionComponent_0_5 = import3.TaggedFunctionComponent();
    _compView_0.create(_TaggedFunctionComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _TaggedFunctionComponent_0_5);
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

AppView<import3.TaggedFunctionComponent> viewFactory_TaggedFunctionComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTaggedFunctionComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import3.TaggedFunctionComponent> _TaggedFunctionComponentNgFactory = const ComponentFactory('tagged-function', viewFactory_TaggedFunctionComponentHost0);
ComponentFactory<import3.TaggedFunctionComponent> get TaggedFunctionComponentNgFactory {
  return _TaggedFunctionComponentNgFactory;
}

final List<dynamic> styles$TaggedIntComponent = [import0.styles, import1.styles];

class ViewTaggedIntComponent0 extends AppView<import3.TaggedIntComponent> {
  import4.Element _el_0;
  import4.Element _el_3;
  import4.Text _text_4;
  ViewContainer _appEl_6;
  import6.NgFor _NgFor_6_9;
  var _expr_0;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewTaggedIntComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('tagged-int');
    _renderType ??= import10.appViewUtils.createRenderType((import11.isDevMode ? 'asset:fvm/lib/components/tagged_object_components.dart' : null), ViewEncapsulation.Emulated, styles$TaggedIntComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.TaggedIntComponent> build() {
    final _rootEl = rootEl;
    final import4.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import4.document;
    _el_0 = createSpanAndAppend(doc, parentRenderNode);
    _el_0.className = 'memory-cell tag';
    addShimE(_el_0);
    import4.Text _text_1 = import4.Text('B');
    _el_0.append(_text_1);
    import4.Text _text_2 = import4.Text('\n');
    parentRenderNode.append(_text_2);
    _el_3 = createSpanAndAppend(doc, parentRenderNode);
    _el_3.className = 'memory-cell number-value';
    addShimE(_el_3);
    _text_4 = import4.Text('');
    _el_3.append(_text_4);
    import4.Text _text_5 = import4.Text('\n');
    parentRenderNode.append(_text_5);
    final _anchor_6 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_6);
    _appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_TaggedIntComponent1);
    _NgFor_6_9 = import6.NgFor(_appEl_6, _TemplateRef_6_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.TaggedIntComponent _ctx = ctx;
    final currVal_1 = _ctx.padding;
    if (import10.checkBinding(_expr_1, currVal_1)) {
      _NgFor_6_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if (!import10.AppViewUtils.throwOnChanges) {
      _NgFor_6_9.ngDoCheck();
    }
    _appEl_6.detectChangesInNestedViews();
    final currVal_0 = import10.interpolate0(_ctx.object.value);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _text_4.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_6?.destroyNestedViews();
  }
}

AppView<import3.TaggedIntComponent> viewFactory_TaggedIntComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewTaggedIntComponent0(parentView, parentIndex);
}

class _ViewTaggedIntComponent1 extends AppView<import3.TaggedIntComponent> {
  import4.Element _el_0;
  _ViewTaggedIntComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewTaggedIntComponent0._renderType;
  }
  @override
  ComponentRef<import3.TaggedIntComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'memory-cell padding';
    addShimE(_el_0);
    import4.Text _text_1 = import4.Text('...');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }
}

AppView<import3.TaggedIntComponent> viewFactory_TaggedIntComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTaggedIntComponent1(parentView, parentIndex);
}

final List<dynamic> styles$TaggedIntComponentHost = const [];

class _ViewTaggedIntComponentHost0 extends AppView<import3.TaggedIntComponent> {
  ViewTaggedIntComponent0 _compView_0;
  import3.TaggedIntComponent _TaggedIntComponent_0_5;
  _ViewTaggedIntComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import3.TaggedIntComponent> build() {
    _compView_0 = ViewTaggedIntComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TaggedIntComponent_0_5 = import3.TaggedIntComponent();
    _compView_0.create(_TaggedIntComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _TaggedIntComponent_0_5);
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

AppView<import3.TaggedIntComponent> viewFactory_TaggedIntComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTaggedIntComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import3.TaggedIntComponent> _TaggedIntComponentNgFactory = const ComponentFactory('tagged-int', viewFactory_TaggedIntComponentHost0);
ComponentFactory<import3.TaggedIntComponent> get TaggedIntComponentNgFactory {
  return _TaggedIntComponentNgFactory;
}

final List<dynamic> styles$TaggedListComponent = [import0.styles, import1.styles];

class ViewTaggedListComponent0 extends AppView<import3.TaggedListComponent> {
  import4.Element _el_0;
  import4.Element _el_3;
  import4.Text _text_4;
  ViewContainer _appEl_6;
  import6.NgFor _NgFor_6_9;
  ViewContainer _appEl_8;
  import6.NgFor _NgFor_8_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewTaggedListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('tagged-list');
    _renderType ??= import10.appViewUtils.createRenderType((import11.isDevMode ? 'asset:fvm/lib/components/tagged_object_components.dart' : null), ViewEncapsulation.Emulated, styles$TaggedListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.TaggedListComponent> build() {
    final _rootEl = rootEl;
    final import4.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import4.document;
    _el_0 = createSpanAndAppend(doc, parentRenderNode);
    _el_0.className = 'memory-cell tag';
    addShimE(_el_0);
    import4.Text _text_1 = import4.Text('V');
    _el_0.append(_text_1);
    import4.Text _text_2 = import4.Text('\n');
    parentRenderNode.append(_text_2);
    _el_3 = createSpanAndAppend(doc, parentRenderNode);
    _el_3.className = 'memory-cell number-value';
    addShimE(_el_3);
    _text_4 = import4.Text('');
    _el_3.append(_text_4);
    import4.Text _text_5 = import4.Text('\n');
    parentRenderNode.append(_text_5);
    final _anchor_6 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_6);
    _appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_TaggedListComponent1);
    _NgFor_6_9 = import6.NgFor(_appEl_6, _TemplateRef_6_8);
    import4.Text _text_7 = import4.Text('\n');
    parentRenderNode.append(_text_7);
    final _anchor_8 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_8);
    _appEl_8 = ViewContainer(8, null, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_TaggedListComponent2);
    _NgFor_8_9 = import6.NgFor(_appEl_8, _TemplateRef_8_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.TaggedListComponent _ctx = ctx;
    final currVal_1 = _ctx.object.values;
    if (import10.checkBinding(_expr_1, currVal_1)) {
      _NgFor_6_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if (!import10.AppViewUtils.throwOnChanges) {
      _NgFor_6_9.ngDoCheck();
    }
    final currVal_2 = _ctx.padding;
    if (import10.checkBinding(_expr_2, currVal_2)) {
      _NgFor_8_9.ngForOf = currVal_2;
      _expr_2 = currVal_2;
    }
    if (!import10.AppViewUtils.throwOnChanges) {
      _NgFor_8_9.ngDoCheck();
    }
    _appEl_6.detectChangesInNestedViews();
    _appEl_8.detectChangesInNestedViews();
    final currVal_0 = import10.interpolate0(_ctx.object.length);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _text_4.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_6?.destroyNestedViews();
    _appEl_8?.destroyNestedViews();
  }
}

AppView<import3.TaggedListComponent> viewFactory_TaggedListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewTaggedListComponent0(parentView, parentIndex);
}

class _ViewTaggedListComponent1 extends AppView<import3.TaggedListComponent> {
  import4.Element _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewTaggedListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewTaggedListComponent0._renderType;
  }
  @override
  ComponentRef<import3.TaggedListComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'memory-cell number-value';
    addShimE(_el_0);
    _text_1 = import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final int local_value = locals['\$implicit'];
    final currVal_0 = import10.interpolate0(local_value);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import3.TaggedListComponent> viewFactory_TaggedListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTaggedListComponent1(parentView, parentIndex);
}

class _ViewTaggedListComponent2 extends AppView<import3.TaggedListComponent> {
  import4.Element _el_0;
  _ViewTaggedListComponent2(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewTaggedListComponent0._renderType;
  }
  @override
  ComponentRef<import3.TaggedListComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'memory-cell padding';
    addShimE(_el_0);
    import4.Text _text_1 = import4.Text('...');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }
}

AppView<import3.TaggedListComponent> viewFactory_TaggedListComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTaggedListComponent2(parentView, parentIndex);
}

final List<dynamic> styles$TaggedListComponentHost = const [];

class _ViewTaggedListComponentHost0 extends AppView<import3.TaggedListComponent> {
  ViewTaggedListComponent0 _compView_0;
  import3.TaggedListComponent _TaggedListComponent_0_5;
  _ViewTaggedListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import3.TaggedListComponent> build() {
    _compView_0 = ViewTaggedListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TaggedListComponent_0_5 = import3.TaggedListComponent();
    _compView_0.create(_TaggedListComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _TaggedListComponent_0_5);
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

AppView<import3.TaggedListComponent> viewFactory_TaggedListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTaggedListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import3.TaggedListComponent> _TaggedListComponentNgFactory = const ComponentFactory('tagged-list', viewFactory_TaggedListComponentHost0);
ComponentFactory<import3.TaggedListComponent> get TaggedListComponentNgFactory {
  return _TaggedListComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(TaggedClosureComponent, TaggedClosureComponentNgFactory);
  _ngRef.registerComponent(TaggedFunctionComponent, TaggedFunctionComponentNgFactory);
  _ngRef.registerComponent(TaggedIntComponent, TaggedIntComponentNgFactory);
  _ngRef.registerComponent(TaggedListComponent, TaggedListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
