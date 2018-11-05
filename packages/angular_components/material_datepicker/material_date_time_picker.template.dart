// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_date_time_picker.dart';
export 'material_date_time_picker.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:quiver/time.dart';
import 'package:angular_components/interfaces/has_disabled.dart';
import 'package:angular_components/material_datepicker/material_datepicker.dart';
import 'package:angular_components/material_datepicker/material_time_picker.dart';
import 'package:angular_components/material_datepicker/module.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/model/date/date.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref1;
import 'package:angular_components/material_datepicker/material_datepicker.template.dart' as _ref2;
import 'package:angular_components/material_datepicker/material_time_picker.template.dart' as _ref3;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref4;
import 'package:angular_components/material_input/material_input.template.dart' as _ref5;
import 'package:angular_components/model/date/date.template.dart' as _ref6;
import 'package:angular_components/material_datepicker/material_date_time_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_date_time_picker.dart' as import2;
import 'dart:html' as import3;
import 'material_datepicker.template.dart' as import4;
import 'material_datepicker.dart' as import5;
import 'material_time_picker.template.dart' as import6;
import 'material_time_picker.dart' as import7;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import14;
import '../interfaces/has_disabled.dart' as import15;

final List<dynamic> styles$MaterialDateTimePickerComponent = [import0.styles];

class ViewMaterialDateTimePickerComponent0 extends AppView<import2.MaterialDateTimePickerComponent> {
  import3.Element _el_0;
  import4.ViewMaterialDatepickerComponent0 _compView_0;
  import5.MaterialDatepickerComponent _MaterialDatepickerComponent_0_5;
  import3.Element _el_1;
  import6.ViewMaterialTimePickerComponent0 _compView_1;
  import7.MaterialTimePickerComponent _MaterialTimePickerComponent_1_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  var _expr_4;
  bool _expr_5;
  var _expr_6;
  var _expr_7;
  bool _expr_8;
  bool _expr_9;
  bool _expr_10;
  var _expr_11;
  var _expr_12;
  static RenderComponentType _renderType;
  ViewMaterialDateTimePickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-date-time-picker');
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_date_time_picker.dart' : null), ViewEncapsulation.Emulated, styles$MaterialDateTimePickerComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialDateTimePickerComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewMaterialDatepickerComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _MaterialDatepickerComponent_0_5 = import5.MaterialDatepickerComponent(_el_0, null, parentView.injectorGet(const import14.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null));
    _compView_0.create(_MaterialDatepickerComponent_0_5, []);
    _compView_1 = import6.ViewMaterialTimePickerComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    addShimC(_el_1);
    _MaterialTimePickerComponent_1_5 = import7.MaterialTimePickerComponent(parentView.injectorGet(const import14.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex));
    _compView_1.create(_MaterialTimePickerComponent_1_5, []);
    final subscription_0 = _MaterialDatepickerComponent_0_5.dateChange.listen(eventHandler1(_handle_dateChange_0_0));
    final subscription_1 = _MaterialTimePickerComponent_1_5.timeChange.listen(eventHandler1(_handle_timeChange_1_0));
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialDatepickerComponent_0_5;
    }
    if ((identical(token, import15.HasDisabled) && (1 == nodeIndex))) {
      return _MaterialTimePickerComponent_1_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDateTimePickerComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.outputDateFormat;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _MaterialDatepickerComponent_0_5.outputFormat = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.maxDate;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _MaterialDatepickerComponent_0_5.maxDate = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.minDate;
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _MaterialDatepickerComponent_0_5.minDate = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.required;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      _MaterialDatepickerComponent_0_5.required = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.date;
    if (import11.checkBinding(_expr_4, currVal_4)) {
      _MaterialDatepickerComponent_0_5.date = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.disabled;
    if (import11.checkBinding(_expr_5, currVal_5)) {
      _MaterialDatepickerComponent_0_5.disabled = currVal_5;
      _expr_5 = currVal_5;
    }
    changed = false;
    final currVal_6 = _ctx.outputTimeFormat;
    if (import11.checkBinding(_expr_6, currVal_6)) {
      _MaterialTimePickerComponent_1_5.outputFormat = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.time;
    if (import11.checkBinding(_expr_7, currVal_7)) {
      _MaterialTimePickerComponent_1_5.time = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.disabled;
    if (import11.checkBinding(_expr_8, currVal_8)) {
      _MaterialTimePickerComponent_1_5.disabled = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.required;
    if (import11.checkBinding(_expr_9, currVal_9)) {
      _MaterialTimePickerComponent_1_5.required = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.utc;
    if (import11.checkBinding(_expr_10, currVal_10)) {
      _MaterialTimePickerComponent_1_5.utc = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.maxTime;
    if (import11.checkBinding(_expr_11, currVal_11)) {
      _MaterialTimePickerComponent_1_5.maxTime = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.minTime;
    if (import11.checkBinding(_expr_12, currVal_12)) {
      _MaterialTimePickerComponent_1_5.minTime = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialTimePickerComponent_1_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
    if (!import11.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialDatepickerComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_1?.destroy();
    _MaterialTimePickerComponent_1_5.ngOnDestroy();
  }

  void _handle_dateChange_0_0($event) {
    ctx.date = $event;
  }

  void _handle_timeChange_1_0($event) {
    ctx.time = $event;
  }
}

AppView<import2.MaterialDateTimePickerComponent> viewFactory_MaterialDateTimePickerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialDateTimePickerComponent0(parentView, parentIndex);
}

final List<dynamic> styles$MaterialDateTimePickerComponentHost = const [];

class _ViewMaterialDateTimePickerComponentHost0 extends AppView<import2.MaterialDateTimePickerComponent> {
  ViewMaterialDateTimePickerComponent0 _compView_0;
  import2.MaterialDateTimePickerComponent _MaterialDateTimePickerComponent_0_5;
  _ViewMaterialDateTimePickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialDateTimePickerComponent> build() {
    _compView_0 = ViewMaterialDateTimePickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialDateTimePickerComponent_0_5 = import2.MaterialDateTimePickerComponent(this.injectorGet(const import14.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex));
    _compView_0.create(_MaterialDateTimePickerComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialDateTimePickerComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialDateTimePickerComponent_0_5;
    }
    return notFoundResult;
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
  }
}

AppView<import2.MaterialDateTimePickerComponent> viewFactory_MaterialDateTimePickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDateTimePickerComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialDateTimePickerComponent> _MaterialDateTimePickerComponentNgFactory = const ComponentFactory('material-date-time-picker', viewFactory_MaterialDateTimePickerComponentHost0);
ComponentFactory<import2.MaterialDateTimePickerComponent> get MaterialDateTimePickerComponentNgFactory {
  return _MaterialDateTimePickerComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDateTimePickerComponent, MaterialDateTimePickerComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
