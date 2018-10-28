part of fvm.virtual_machine;

const abbreviations = {
  TaggedInt: 'T',
  TaggedList: 'V',
  TaggedFunction: 'F',
  TaggedClosure: 'C'
};

/// Represents an object that can be stored on the [VM._heap].
abstract class TaggedObject {
  const TaggedObject(this.padding);
  final int padding;
  String get tag => abbreviations[runtimeType];
  int get sizeInCells;
  List<String> get formattedCellValues;
  List<String> get _formattedPaddingCells =>
      List.filled(padding, '', growable: false);
  TaggedObject copy(int padding);
}

class TaggedInt extends TaggedObject {
  TaggedInt(this.value, [int padding = 0]) : super(padding);

  final int value;

  @override
  int get sizeInCells => 2 + padding;
  @override
  List<String> get formattedCellValues =>
      [value.toString()] + _formattedPaddingCells;
  @override
  TaggedInt copy(int padding) => TaggedInt(value, padding);
}

class TaggedList extends TaggedObject {
  TaggedList(this.values, [int padding = 0]) : super(padding);
  const TaggedList.empty()
      : values = const [],
        super(0);

  final List<int> values;
  int get length => values.length;

  @override
  int get sizeInCells => 2 + values.length + padding;
  @override
  List<String> get formattedCellValues =>
      values.map((v) => v.toString()).toList(growable: false) +
      _formattedPaddingCells;
  @override
  TaggedList copy(int padding) => TaggedList(values, padding);
}

class TaggedFunction extends TaggedObject {
  TaggedFunction(
      this.functionLabel, this.globalVectorAddress, this.argumentVectorAddress,
      [int padding = 0])
      : super(padding);

  final String functionLabel;
  final int globalVectorAddress;
  final int argumentVectorAddress;

  @override
  int get sizeInCells => 4 + padding;
  @override
  List<String> get formattedCellValues =>
      [
        functionLabel,
        globalVectorAddress.toString(),
        argumentVectorAddress.toString()
      ] +
      _formattedPaddingCells;
  @override
  TaggedFunction copy(int padding) => TaggedFunction(
      functionLabel, globalVectorAddress, argumentVectorAddress, padding);
}

class TaggedClosure extends TaggedObject {
  TaggedClosure(this.expressionLabel, this.globalVectorAddress,
      [int padding = 0])
      : super(padding);

  final String expressionLabel;
  final int globalVectorAddress;

  @override
  int get sizeInCells => 3 + padding;
  @override
  List<String> get formattedCellValues =>
      [expressionLabel, globalVectorAddress.toString()] +
      _formattedPaddingCells;
  @override
  TaggedClosure copy(int padding) =>
      TaggedClosure(expressionLabel, globalVectorAddress, padding);
}
