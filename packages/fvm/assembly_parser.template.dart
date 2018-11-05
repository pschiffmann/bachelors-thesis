// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'assembly_parser.dart';
export 'assembly_parser.dart';
import 'package:verbose_regexp/verbose_regexp.dart';
import 'virtual_machine.dart';
import 'virtual_machine.template.dart' as _ref0;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
}
