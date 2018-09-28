import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
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
    vm = VM([
      LoadConstantInstruction(3),
      LoadConstantInstruction(4),
      AddInstruction()
    ], stackSize: 16, heapSize: 16);
  }

  void executeSingleInstruction() {
    try {
      vm.executeCurrentInstruction();
      print(vm.stack);
    } on UnsupportedError {} on IndexError {}
  }
}
