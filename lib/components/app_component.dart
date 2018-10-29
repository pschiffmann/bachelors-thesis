import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:fvm/assembly_parser.dart';
import 'package:fvm/virtual_machine.dart';

import 'heap_allocated_object_component.dart';

const defaultMaxAddress = 255;

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
  templateUrl: 'app_component.html',
  styleUrls: ['app_component.scss.css'],
  directives: [
    MaterialButtonComponent,
    MaterialIconComponent,
    materialInputDirectives,
    materialNumberInputDirectives,
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchWhen,
    formDirectives,
    HeapAllocatedObjectComponent
  ],
)
class AppComponent implements OnInit {
  static const executionMode = #executionMode;
  static const editingMode = #editingMode;

  /// The current mode of this component.
  Symbol mode = executionMode;

  InspectableVM vm;

  int maxAddress = defaultMaxAddress;

  String editorInput = exampleProgram;
  final List<String> parseErrors = [];

  @override
  Future<Null> ngOnInit() async => initializeVM();

  void initializeVM() {
    final parseResult = parse(editorInput,
        (message, offset) => parseErrors.add('at offset $offset: $message'));
    vm = InspectableVM(parseResult.key, parseResult.value,
        maxAddress: maxAddress);
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
