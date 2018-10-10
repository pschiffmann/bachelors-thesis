part of fvm.virtual_machine;

/// Represents an object that can be stored on the [VM.heap].
abstract class TaggedObject {
  String get tag;
  int get sizeInCells;
}

class TaggedInt implements TaggedObject {
  TaggedInt(this.value);

  final int value;

  @override
  String get tag => 'B';
  @override
  int get sizeInCells => 2;
}

class TaggedReferenceList implements TaggedObject {
  TaggedReferenceList(this.values);

  final List<int> values;

  @override
  String get tag => 'V';
  @override
  int get sizeInCells => 1 + values.length;
}
