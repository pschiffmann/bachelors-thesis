import 'package:angular/angular.dart';
import 'package:fvm/virtual_machine.dart';

@Component(
    selector: 'tagged-list',
    styleUrls: ['tagged_object_components.scss.css'],
    template: '''
<span class="memory-cell tag">B</span>
<span class="memory-cell">{{object.length}}</span>
<span *ngFor="let value of object.values"
      class="memory-cell">
  {{value}}
</span>
''',
    directives: [NgFor])
class TaggedListComponent {
  @Input()
  TaggedList object;
}
