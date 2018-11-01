import 'package:angular/angular.dart';
import 'package:fvm/virtual_machine.dart';

@Component(
    selector: 'tagged-function',
    styleUrls: ['tagged_object_components.scss.css'],
    template: '''
<span class="memory-cell tag">F</span>
<span class="memory-cell">{{object.functionLabel}}</span>
<span class="memory-cell">{{object.globalVectorAddress}}</span>
<span class="memory-cell">{{object.argumentVectorAddress}}</span>
''',
    directives: [NgFor])
class TaggedFunctionComponent {
  @Input()
  TaggedFunction object;
}
