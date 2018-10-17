import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:fvm/assembly_parser.dart';
import 'package:fvm/virtual_machine.dart';

const exampleProgram = '''
loadc 3,
A:
loadc 4,
add,
jump A,
halt
''';

@Component(
    selector: 'fvm-app',
    styleUrls: ['app_component.css'],
    templateUrl: 'app_component.html',
    directives: [
      MaterialButtonComponent,
      MaterialIconComponent,
      NgFor,
      NgIf,
      NgSwitch,
      NgSwitchWhen,
      formDirectives
    ])
class AppComponent implements OnInit {
  static const executionMode = #executionMode;
  static const editingMode = #editingMode;

  /// The current mode of this component.
  Symbol mode = executionMode;

  VM vm;

  String editorInput = exampleProgram;
  final List<String> parseErrors = [];

  @override
  Future<Null> ngOnInit() async => initializeVM();

  void initializeVM() {
    final parseResult = parse(editorInput,
        (message, offset) => parseErrors.add('at offset $offset: $message'));
    vm = VM(parseResult.key, parseResult.value);
  }

  void executeSingleInstruction() {
    try {
      vm.executeCurrentInstruction();
      print(vm.stack);
    } on UnsupportedError {} on IndexError {}
  }

  ///
  void activateEditingMode() {
    mode = editingMode;
  }

  ///
  void activateExecutionMode() {
    parseErrors.clear();
    initializeVM();
    if (parseErrors.isEmpty) {
      mode = executionMode;
    }
  }
}
