import 'package:angular/angular.dart';
import 'package:fvm/virtual_machine.dart';

@Component(
    selector: 'tagged-closure',
    styleUrls: ['tagged_object_components.scss.css'],
    template: '''
<span class="memory-cell tag">B</span>
<span class="memory-cell">{{object.expressionLabel}}</span>
<span class="memory-cell">{{object.globalVectorAddress}}</span>
''',
    directives: [NgFor])
class TaggedClosureComponent {
  @Input()
  TaggedClosure object;
}
