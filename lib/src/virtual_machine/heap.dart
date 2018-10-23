part of fvm.virtual_machine;

const abbreviations = {
  TaggedInt: 'T',
  TaggedList: 'V',
  TaggedFunction: 'F',
  TaggedClosure: 'C'
};

/// Represents an object that can be stored on the [VM.heap].
abstract class TaggedObject {
  const TaggedObject();
  String get tag => abbreviations[runtimeType];
  int get sizeInCells;
  List<String> get formattedCellValues;
}

class TaggedInt extends TaggedObject {
  TaggedInt(this.value);

  final int value;

  @override
  int get sizeInCells => 2;
  @override
  List<String> get formattedCellValues => [value.toString()];
}

class TaggedList extends TaggedObject {
  TaggedList(this.values);
  const TaggedList.empty() : values = const [];

  final List<int> values;
  int get length => values.length;

  @override
  int get sizeInCells => 2 + values.length;
  @override
  List<String> get formattedCellValues =>
      values.map((v) => v.toString()).toList(growable: false);
}

class TaggedFunction extends TaggedObject {
  TaggedFunction(
      this.functionLabel, this.globalVectorAddress, this.argumentVectorAddress);

  final String functionLabel;
  final int globalVectorAddress;
  final int argumentVectorAddress;

  @override
  int get sizeInCells => 4;
  @override
  List<String> get formattedCellValues => [
        functionLabel,
        globalVectorAddress.toString(),
        argumentVectorAddress.toString()
      ];
}

class TaggedClosure extends TaggedObject {
  TaggedClosure(this.expressionLabel, this.globalVectorAddress);

  final String expressionLabel;
  final int globalVectorAddress;

  @override
  int get sizeInCells => 3;
  @override
  List<String> get formattedCellValues =>
      [expressionLabel, globalVectorAddress.toString()];
}
