// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'active_item_directive.dart';
export 'active_item_directive.dart';
import 'dart:async';
import 'dart:html' as dom;
import 'package:angular/angular.dart';
import 'package:js/js_util.dart' as js_util;
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/popup/popup.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref1;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref2;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref3;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'active_item_directive.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;
import 'package:angular/src/core/linker/app_view_utils.dart' as import4;

class ActiveItemDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.ActiveItemDirective instance;
  bool _expr_0;
  ActiveItemDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    final currVal_0 = instance.active;
    if (import4.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(el, 'active', currVal_0);
      _expr_0 = currVal_0;
    }
  }
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
