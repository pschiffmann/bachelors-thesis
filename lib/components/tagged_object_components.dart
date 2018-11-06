import 'package:angular/angular.dart';
import 'package:fvm/virtual_machine.dart';

abstract class TaggedObjectComponent<T extends TaggedObject> {
  @Input()
  set object(T object) {
    _object = object;
    padding = List.generate(object.padding, (_) => null);
  }

  T get object => _object;
  T _object;

  @Input()
  bool isGlobalVector;

  List<Null> padding;
}

@Component(
    selector: 'tagged-closure',
    styleUrls: ['tagged_object_components.scss.css', 'memory.scss.css'],
    template: '''
<span class="memory-cell tag">
  C
  <span *ngIf="isGlobalVector"
        class="pointer-indicator">GP</span>
</span>
<span class="memory-cell number-value">{{object.expressionLabel}}</span>
<span class="memory-cell number-value">{{object.globalVectorAddress}}</span>
<span class="memory-cell padding"
      *ngFor="let _ of padding">...</span>
''',
    directives: [coreDirectives])
class TaggedClosureComponent extends TaggedObjectComponent<TaggedClosure> {}

@Component(
    selector: 'tagged-function',
    styleUrls: ['tagged_object_components.scss.css', 'memory.scss.css'],
    template: '''
<span class="memory-cell tag">
  F
  <span *ngIf="isGlobalVector"
        class="pointer-indicator">GP</span>
</span>
<span class="memory-cell number-value">{{object.functionLabel}}</span>
<span class="memory-cell number-value">{{object.globalVectorAddress}}</span>
<span class="memory-cell number-value">{{object.argumentVectorAddress}}</span>
<span class="memory-cell padding"
      *ngFor="let _ of padding">...</span>
''',
    directives: [coreDirectives])
class TaggedFunctionComponent extends TaggedObjectComponent<TaggedFunction> {}

@Component(
    selector: 'tagged-int',
    styleUrls: ['tagged_object_components.scss.css', 'memory.scss.css'],
    template: '''
<span class="memory-cell tag">
  B
  <span *ngIf="isGlobalVector"
        class="pointer-indicator">GP</span>
</span>
<span class="memory-cell number-value">{{object.value}}</span>
<span class="memory-cell padding"
      *ngFor="let _ of padding">...</span>
''',
    directives: [coreDirectives])
class TaggedIntComponent extends TaggedObjectComponent<TaggedInt> {}

@Component(
    selector: 'tagged-list',
    styleUrls: ['tagged_object_components.scss.css', 'memory.scss.css'],
    template: '''
<span class="memory-cell tag">
  V
  <span *ngIf="isGlobalVector"
        class="pointer-indicator">GP</span>
</span>
<span class="memory-cell number-value">{{object.length}}</span>
<span *ngFor="let value of object.values"
      class="memory-cell number-value">
  {{value}}
</span>
<span class="memory-cell padding"
      *ngFor="let _ of padding">...</span>
''',
    directives: [coreDirectives])
class TaggedListComponent extends TaggedObjectComponent<TaggedList> {}
