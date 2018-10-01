import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:fvm/assembly_parser.dart';
import 'package:fvm/virtual_machine.dart';

@Component(
    selector: 'fvm-app',
    styleUrls: ['app_component.css'],
    templateUrl: 'app_component.html',
    directives: [
      MaterialButtonComponent,
      MaterialIconComponent,
      NgFor,
      NgIf,
    ])
class AppComponent implements OnInit {
  VM vm;

  @override
  Future<Null> ngOnInit() async => initializeDemoVM();

  void initializeDemoVM() {
    final parseResult = parse('''
    loadc 3,
    loadc  4 ,
    add,
    -- example comment
    halt
    ''');
    vm = VM(parseResult.key, parseResult.value, stackSize: 16, heapSize: 16);
  }

  void executeSingleInstruction() {
    try {
      vm.executeCurrentInstruction();
      print(vm.stack);
    } on UnsupportedError {} on IndexError {}
  }
}
