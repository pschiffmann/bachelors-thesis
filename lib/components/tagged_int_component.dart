import 'package:angular/angular.dart';
import 'package:fvm/virtual_machine.dart';

@Component(
    selector: 'tagged-int',
    styleUrls: ['tagged_object_components.scss.css'],
    template: '''
<span class="memory-cell tag">B</span>
<span class="memory-cell">{{object.value}}</span>
''',
    directives: [NgFor])
class TaggedIntComponent {
  @Input()
  TaggedInt object;
}
