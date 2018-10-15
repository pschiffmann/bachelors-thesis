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
  const TaggedReferenceList.empty() : values = const [];

  final List<int> values;
  int get length => values.length;

  @override
  String get tag => 'V';
  @override
  int get sizeInCells => 2 + values.length;
}

class TaggedFunction implements TaggedObject {
  TaggedFunction(
      this.functionLabel, this.globalVectorAddress, this.argumentVectorAddress);

  final String functionLabel;
  final int globalVectorAddress;
  final int argumentVectorAddress;

  @override
  String get tag => 'F';
  @override
  int get sizeInCells => 3;
}

class TaggedClosure implements TaggedObject {
  TaggedClosure(this.expressionLabel, this.globalVectorAddress);

  final String expressionLabel;
  final int globalVectorAddress;

  @override
  String get tag => 'C';
  @override
  int get sizeInCells => 2;
}
