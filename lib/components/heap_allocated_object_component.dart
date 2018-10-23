import 'package:angular/angular.dart';
import 'package:fvm/virtual_machine.dart';

@Component(
    selector: 'heap-allocated-object',
    styleUrls: ['heap_allocated_object_component.css'],
    templateUrl: 'heap_allocated_object_component.html',
    directives: [NgFor])
class HeapAllocatedObjectComponent {
  @Input()
  set taggedObject(TaggedObject object) {
    _taggedObject = object;
    cellValues = object.formattedCellValues;
  }

  TaggedObject get taggedObject => _taggedObject;
  TaggedObject _taggedObject;

  List<String> cellValues;
}
