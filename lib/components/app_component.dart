import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:fvm/assembly_parser.dart';
import 'package:fvm/virtual_machine.dart';

import 'tagged_object_components.dart';

const defaultMaxAddress = 255;

const exampleProgram = '''
dummy 2,
mkV 0, mkF ADD, jump SKIP_ADD,
ADD: testArg 2, setSP0, pushL 0, eval, getB, pushL -1, eval, getB, add, mkB, return 2,
SKIP_ADD: rewrite 2,
mark ADD2_RET, loadc 2, mkB, pushL 1, eval, apply, ADD2_RET:
rewrite 1,
mark E_RET, loadc 3, mkB, pushL 2, eval, apply, E_RET:
slide 2 1,
halt
''';

@Component(
  selector: 'fvm-app',
  exports: [
    TaggedClosure,
    TaggedFunction,
    TaggedInt,
    TaggedList,
  ],
  templateUrl: 'app_component.html',
  styleUrls: ['app_component.scss.css', 'memory.scss.css'],
  directives: [
    MaterialButtonComponent,
    MaterialIconComponent,
    materialInputDirectives,
    materialNumberInputDirectives,
    coreDirectives,
    formDirectives,
    TaggedClosureComponent,
    TaggedFunctionComponent,
    TaggedIntComponent,
    TaggedListComponent,
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
    if (parseResult != null) {
      vm = InspectableVM(parseResult.key, parseResult.value,
          maxAddress: maxAddress);
    }
  }

  void executeSingleInstruction() {
    try {
      vm.executeCurrentInstruction();
    } on VmRuntimeException catch (e) {
      window.alert(e.message);
    }
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
