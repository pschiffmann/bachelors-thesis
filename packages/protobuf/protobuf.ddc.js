define(['dart_sdk', 'packages/fixnum/fixnum'], function(dart_sdk, fixnum) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const fixnum$ = fixnum.fixnum;
  const _root = Object.create(null);
  const protobuf = Object.create(_root);
  const $startsWith = dartx.startsWith;
  const $substring = dartx.substring;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $rightShift = dartx['>>'];
  const $length = dartx.length;
  const $setRange = dartx.setRange;
  const $getUint32 = dartx.getUint32;
  const $getInt32 = dartx.getInt32;
  const $buffer = dartx.buffer;
  const $offsetInBytes = dartx.offsetInBytes;
  const $getFloat32 = dartx.getFloat32;
  const $getFloat64 = dartx.getFloat64;
  const $leftShift = dartx['<<'];
  const $_set = dartx._set;
  const $lengthInBytes = dartx.lengthInBytes;
  const $isNaN = dartx.isNaN;
  const $setFloat64 = dartx.setFloat64;
  const $abs = dartx.abs;
  const $isNegative = dartx.isNegative;
  const $isInfinite = dartx.isInfinite;
  const $setFloat32 = dartx.setFloat32;
  const $setInt32 = dartx.setInt32;
  const $containsKey = dartx.containsKey;
  const $lastIndexOf = dartx.lastIndexOf;
  const $values = dartx.values;
  const $compareTo = dartx.compareTo;
  const $sort = dartx.sort;
  const $hashCode = dartx.hashCode;
  const $isEmpty = dartx.isEmpty;
  const $every = dartx.every;
  const $toString = dartx.toString;
  const $_equals = dartx._equals;
  const $isNotEmpty = dartx.isNotEmpty;
  const $remove = dartx.remove;
  const $keys = dartx.keys;
  const $clear = dartx.clear;
  const $putIfAbsent = dartx.putIfAbsent;
  const $fillRange = dartx.fillRange;
  const $getUint64 = dartx.getUint64;
  const $addAll = dartx.addAll;
  const $join = dartx.join;
  const $toDouble = dartx.toDouble;
  const $iterator = dartx.iterator;
  const $map = dartx.map;
  const $where = dartx.where;
  const $expand = dartx.expand;
  const $contains = dartx.contains;
  const $forEach = dartx.forEach;
  const $reduce = dartx.reduce;
  const $fold = dartx.fold;
  const $any = dartx.any;
  const $toList = dartx.toList;
  const $toSet = dartx.toSet;
  const $take = dartx.take;
  const $takeWhile = dartx.takeWhile;
  const $skip = dartx.skip;
  const $skipWhile = dartx.skipWhile;
  const $first = dartx.first;
  const $last = dartx.last;
  const $single = dartx.single;
  const $firstWhere = dartx.firstWhere;
  const $lastWhere = dartx.lastWhere;
  const $elementAt = dartx.elementAt;
  const $indexOf = dartx.indexOf;
  const $sublist = dartx.sublist;
  const $getRange = dartx.getRange;
  const $asMap = dartx.asMap;
  const $setAll = dartx.setAll;
  const $insert = dartx.insert;
  const $insertAll = dartx.insertAll;
  const $replaceRange = dartx.replaceRange;
  const $reversed = dartx.reversed;
  const $shuffle = dartx.shuffle;
  const $removeAt = dartx.removeAt;
  const $removeLast = dartx.removeLast;
  const $removeWhere = dartx.removeWhere;
  const $retainWhere = dartx.retainWhere;
  const $removeRange = dartx.removeRange;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intAndFieldInfoAndFunctionTovoid = () => (intAndFieldInfoAndFunctionTovoid = dart.constFn(dart.fnType(dart.void, [core.int, protobuf.FieldInfo, core.Function])))();
  let ListTovoid = () => (ListTovoid = dart.constFn(dart.fnType(dart.void, [core.List])))();
  let ListToNull = () => (ListToNull = dart.constFn(dart.fnType(core.Null, [core.List])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfFieldInfo = () => (JSArrayOfFieldInfo = dart.constFn(_interceptors.JSArray$(protobuf.FieldInfo)))();
  let IdentityMapOfint$FieldInfo = () => (IdentityMapOfint$FieldInfo = dart.constFn(_js_helper.IdentityMap$(core.int, protobuf.FieldInfo)))();
  let IdentityMapOfString$FieldInfo = () => (IdentityMapOfString$FieldInfo = dart.constFn(_js_helper.IdentityMap$(core.String, protobuf.FieldInfo)))();
  let ListOfFieldInfo = () => (ListOfFieldInfo = dart.constFn(core.List$(protobuf.FieldInfo)))();
  let FieldInfoAndFieldInfoToint = () => (FieldInfoAndFieldInfoToint = dart.constFn(dart.fnType(core.int, [protobuf.FieldInfo, protobuf.FieldInfo])))();
  let MapOfint$FieldInfo = () => (MapOfint$FieldInfo = dart.constFn(core.Map$(core.int, protobuf.FieldInfo)))();
  let MapOfString$FieldInfo = () => (MapOfString$FieldInfo = dart.constFn(core.Map$(core.String, protobuf.FieldInfo)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let ListOfGeneratedMessage = () => (ListOfGeneratedMessage = dart.constFn(core.List$(protobuf.GeneratedMessage)))();
  let GeneratedMessageTobool = () => (GeneratedMessageTobool = dart.constFn(dart.fnType(core.bool, [protobuf.GeneratedMessage])))();
  let VoidToGeneratedMessage = () => (VoidToGeneratedMessage = dart.constFn(dart.fnType(protobuf.GeneratedMessage, [])))();
  let ListOfProtobufEnum = () => (ListOfProtobufEnum = dart.constFn(core.List$(protobuf.ProtobufEnum)))();
  let intToProtobufEnum = () => (intToProtobufEnum = dart.constFn(dart.fnType(protobuf.ProtobufEnum, [core.int])))();
  let IdentityMapOfint$Extension = () => (IdentityMapOfint$Extension = dart.constFn(_js_helper.IdentityMap$(core.int, protobuf.Extension)))();
  let IdentityMapOfint$dynamic = () => (IdentityMapOfint$dynamic = dart.constFn(_js_helper.IdentityMap$(core.int, dart.dynamic)))();
  let MapOfint$Extension = () => (MapOfint$Extension = dart.constFn(core.Map$(core.int, protobuf.Extension)))();
  let MapOfint$dynamic = () => (MapOfint$dynamic = dart.constFn(core.Map$(core.int, dart.dynamic)))();
  let IdentityMapOfString$MapOfint$Extension = () => (IdentityMapOfString$MapOfint$Extension = dart.constFn(_js_helper.IdentityMap$(core.String, MapOfint$Extension())))();
  let VoidToMapOfint$Extension = () => (VoidToMapOfint$Extension = dart.constFn(dart.fnType(MapOfint$Extension(), [])))();
  let MapOfString$MapOfint$Extension = () => (MapOfString$MapOfint$Extension = dart.constFn(core.Map$(core.String, MapOfint$Extension())))();
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let String__Tovoid = () => (String__Tovoid = dart.constFn(dart.fnType(dart.void, [core.String], [core.String])))();
  let PbListBaseTovoid = () => (PbListBaseTovoid = dart.constFn(dart.fnType(dart.void, [protobuf.PbListBase])))();
  let FieldInfoAnddynamicTovoid = () => (FieldInfoAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicAnddynamicTovoid = () => (dynamicAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, dart.dynamic])))();
  let PbListBaseOfGeneratedMessage = () => (PbListBaseOfGeneratedMessage = dart.constFn(protobuf.PbListBase$(protobuf.GeneratedMessage)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToListOfint = () => (VoidToListOfint = dart.constFn(dart.fnType(ListOfint(), [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  let PbListOfint = () => (PbListOfint = dart.constFn(protobuf.PbList$(core.int)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamicAndintTodynamic = () => (dynamicAndintTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, core.int])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let IdentityMapOfint$UnknownFieldSetField = () => (IdentityMapOfint$UnknownFieldSetField = dart.constFn(_js_helper.IdentityMap$(core.int, protobuf.UnknownFieldSetField)))();
  let MapOfint$UnknownFieldSetField = () => (MapOfint$UnknownFieldSetField = dart.constFn(core.Map$(core.int, protobuf.UnknownFieldSetField)))();
  let VoidToUnknownFieldSetField = () => (VoidToUnknownFieldSetField = dart.constFn(dart.fnType(protobuf.UnknownFieldSetField, [])))();
  let intAndObjectToNull = () => (intAndObjectToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.Object])))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let JSArrayOfInt64 = () => (JSArrayOfInt64 = dart.constFn(_interceptors.JSArray$(fixnum$.Int64)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfUnknownFieldSet = () => (JSArrayOfUnknownFieldSet = dart.constFn(_interceptors.JSArray$(protobuf.UnknownFieldSet)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let ListOfListOfint = () => (ListOfListOfint = dart.constFn(core.List$(ListOfint())))();
  let ListOfInt64 = () => (ListOfInt64 = dart.constFn(core.List$(fixnum$.Int64)))();
  let ListOfUnknownFieldSet = () => (ListOfUnknownFieldSet = dart.constFn(core.List$(protobuf.UnknownFieldSet)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let dynamicToUint8List = () => (dynamicToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [dart.dynamic])))();
  protobuf.makeLongInt = function(n) {
    return fixnum$.Int64.new(n);
  };
  protobuf.parseLongInt = function(text) {
    if (text[$startsWith]("0x")) return fixnum$.Int64.parseHex(text[$substring](2));
    if (text[$startsWith]("+0x")) return fixnum$.Int64.parseHex(text[$substring](3));
    if (text[$startsWith]("-0x")) return fixnum$.Int64.parseHex(text[$substring](3))._negate();
    return fixnum$.Int64.parseInt(text);
  };
  dart.defineLazy(protobuf, {
    /*protobuf._utf8*/get _utf8() {
      return dart.const(new convert.Utf8Codec.new({allowMalformed: true}));
    }
  });
  const _infosSortedByTag = Symbol('_infosSortedByTag');
  const _values = Symbol('_values');
  const _hasExtensions = Symbol('_hasExtensions');
  const _tagNumbers = Symbol('_tagNumbers');
  const _extensions = Symbol('_extensions');
  const _getInfoOrNull = Symbol('_getInfoOrNull');
  const _getFieldOrNull = Symbol('_getFieldOrNull');
  const _unknownFields = Symbol('_unknownFields');
  protobuf._writeToCodedBufferWriter = function(fs, out) {
    for (let fi of fs[_infosSortedByTag]) {
      let value = fs[_values][$_get](fi.index);
      if (value == null) continue;
      out.writeField(fi.tagNumber, fi.type, value);
    }
    if (dart.test(fs[_hasExtensions])) {
      for (let tagNumber of protobuf.sorted(core.int, fs[_extensions][_tagNumbers])) {
        let fi = fs[_extensions][_getInfoOrNull](tagNumber);
        out.writeField(tagNumber, fi.type, fs[_extensions][_getFieldOrNull](fi));
      }
    }
    if (dart.test(fs.hasUnknownFields)) {
      fs[_unknownFields].writeToCodedBufferWriter(out);
    }
  };
  const _ensureRepeatedField = Symbol('_ensureRepeatedField');
  const _withLimit = Symbol('_withLimit');
  const _nonExtensionInfo = Symbol('_nonExtensionInfo');
  const _messageName = Symbol('_messageName');
  const _ensureUnknownFields = Symbol('_ensureUnknownFields');
  const _setFieldUnchecked = Symbol('_setFieldUnchecked');
  const _decodeEnum = Symbol('_decodeEnum');
  const _meta = Symbol('_meta');
  const _makeEmptyMessage = Symbol('_makeEmptyMessage');
  protobuf._mergeFromCodedBufferReader = function(fs, input, registry) {
    if (!(registry != null)) dart.assertFailed();
    function readPackableToList(wireType, fi, readToList) {
      let list = fs[_ensureRepeatedField](dart.dynamic, fi);
      if (wireType === 2) {
        input[_withLimit](input.readInt32(), dart.fn(() => {
          while (!dart.test(input.isAtEnd())) {
            dart.dcall(readToList, [list]);
          }
        }, VoidToNull()));
      } else {
        dart.dcall(readToList, [list]);
      }
    }
    dart.fn(readPackableToList, intAndFieldInfoAndFunctionTovoid());
    function readPackable(wireType, fi, readFunc) {
      function readToList(list) {
        return list[$add](dart.dcall(readFunc, []));
      }
      dart.fn(readToList, ListTovoid());
      readPackableToList(wireType, fi, readToList);
    }
    dart.fn(readPackable, intAndFieldInfoAndFunctionTovoid());
    while (true) {
      let tag = input.readTag();
      if (tag === 0) return;
      let wireType = dart.notNull(tag) & 7;
      let tagNumber = tag[$rightShift](3);
      let fi = fs[_nonExtensionInfo](tagNumber);
      if (fi == null) {
        fi = registry.getExtension(fs[_messageName], tagNumber);
      }
      if (fi == null || !dart.test(protobuf._wireTypeMatches(fi.type, wireType))) {
        if (!dart.test(fs[_ensureUnknownFields]().mergeFieldFromBuffer(tag, input))) {
          return;
        }
        continue;
      }
      let fieldType = fi.type;
      fieldType = (dart.notNull(fieldType) & ~(protobuf.PbFieldType._PACKED_BIT | protobuf.PbFieldType._REQUIRED_BIT)) >>> 0;
      switch (fieldType) {
        case protobuf.PbFieldType._OPTIONAL_BOOL:
        {
          fs[_setFieldUnchecked](fi, input.readBool());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_BYTES:
        {
          fs[_setFieldUnchecked](fi, input.readBytes());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_STRING:
        {
          fs[_setFieldUnchecked](fi, input.readString());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_FLOAT:
        {
          fs[_setFieldUnchecked](fi, input.readFloat());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_DOUBLE:
        {
          fs[_setFieldUnchecked](fi, input.readDouble());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_ENUM:
        {
          let rawValue = input.readEnum();
          let value = fs[_meta][_decodeEnum](tagNumber, registry, rawValue);
          if (value == null) {
            let unknown = fs[_ensureUnknownFields]();
            unknown.mergeVarintField(tagNumber, fixnum$.Int64.new(rawValue));
          } else {
            fs[_setFieldUnchecked](fi, value);
          }
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_GROUP:
        {
          let subMessage = fs[_meta][_makeEmptyMessage](tagNumber, registry);
          let oldValue = fs[_getFieldOrNull](fi);
          if (oldValue != null) {
            subMessage.mergeFromMessage(protobuf.GeneratedMessage._check(oldValue));
          }
          input.readGroup(tagNumber, subMessage, registry);
          fs[_setFieldUnchecked](fi, subMessage);
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_INT32:
        {
          fs[_setFieldUnchecked](fi, input.readInt32());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_INT64:
        {
          fs[_setFieldUnchecked](fi, input.readInt64());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_SINT32:
        {
          fs[_setFieldUnchecked](fi, input.readSint32());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_SINT64:
        {
          fs[_setFieldUnchecked](fi, input.readSint64());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_UINT32:
        {
          fs[_setFieldUnchecked](fi, input.readUint32());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_UINT64:
        {
          fs[_setFieldUnchecked](fi, input.readUint64());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_FIXED32:
        {
          fs[_setFieldUnchecked](fi, input.readFixed32());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_FIXED64:
        {
          fs[_setFieldUnchecked](fi, input.readFixed64());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_SFIXED32:
        {
          fs[_setFieldUnchecked](fi, input.readSfixed32());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_SFIXED64:
        {
          fs[_setFieldUnchecked](fi, input.readSfixed64());
          break;
        }
        case protobuf.PbFieldType._OPTIONAL_MESSAGE:
        {
          let subMessage = fs[_meta][_makeEmptyMessage](tagNumber, registry);
          let oldValue = fs[_getFieldOrNull](fi);
          if (oldValue != null) {
            subMessage.mergeFromMessage(protobuf.GeneratedMessage._check(oldValue));
          }
          input.readMessage(subMessage, registry);
          fs[_setFieldUnchecked](fi, subMessage);
          break;
        }
        case protobuf.PbFieldType._REPEATED_BOOL:
        {
          readPackable(wireType, fi, dart.bind(input, 'readBool'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_BYTES:
        {
          fs[_ensureRepeatedField](dart.dynamic, fi)[$add](input.readBytes());
          break;
        }
        case protobuf.PbFieldType._REPEATED_STRING:
        {
          fs[_ensureRepeatedField](dart.dynamic, fi)[$add](input.readString());
          break;
        }
        case protobuf.PbFieldType._REPEATED_FLOAT:
        {
          readPackable(wireType, fi, dart.bind(input, 'readFloat'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_DOUBLE:
        {
          readPackable(wireType, fi, dart.bind(input, 'readDouble'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_ENUM:
        {
          readPackableToList(wireType, fi, dart.fn(list => {
            let rawValue = input.readEnum();
            let value = fs[_meta][_decodeEnum](tagNumber, registry, rawValue);
            if (value == null) {
              let unknown = fs[_ensureUnknownFields]();
              unknown.mergeVarintField(tagNumber, fixnum$.Int64.new(rawValue));
            } else {
              list[$add](value);
            }
          }, ListToNull()));
          break;
        }
        case protobuf.PbFieldType._REPEATED_GROUP:
        {
          let subMessage = fs[_meta][_makeEmptyMessage](tagNumber, registry);
          input.readGroup(tagNumber, subMessage, registry);
          fs[_ensureRepeatedField](dart.dynamic, fi)[$add](subMessage);
          break;
        }
        case protobuf.PbFieldType._REPEATED_INT32:
        {
          readPackable(wireType, fi, dart.bind(input, 'readInt32'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_INT64:
        {
          readPackable(wireType, fi, dart.bind(input, 'readInt64'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_SINT32:
        {
          readPackable(wireType, fi, dart.bind(input, 'readSint32'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_SINT64:
        {
          readPackable(wireType, fi, dart.bind(input, 'readSint64'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_UINT32:
        {
          readPackable(wireType, fi, dart.bind(input, 'readUint32'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_UINT64:
        {
          readPackable(wireType, fi, dart.bind(input, 'readUint64'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_FIXED32:
        {
          readPackable(wireType, fi, dart.bind(input, 'readFixed32'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_FIXED64:
        {
          readPackable(wireType, fi, dart.bind(input, 'readFixed64'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_SFIXED32:
        {
          readPackable(wireType, fi, dart.bind(input, 'readSfixed32'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_SFIXED64:
        {
          readPackable(wireType, fi, dart.bind(input, 'readSfixed64'));
          break;
        }
        case protobuf.PbFieldType._REPEATED_MESSAGE:
        {
          let subMessage = fs[_meta][_makeEmptyMessage](tagNumber, registry);
          input.readMessage(subMessage, registry);
          fs[_ensureRepeatedField](dart.dynamic, fi)[$add](subMessage);
          break;
        }
        default:
        {
          dart.throw("Unknown field type " + dart.str(fieldType));
        }
      }
    }
  };
  const _buffer = Symbol('_buffer');
  const _recursionLimit = Symbol('_recursionLimit');
  const _sizeLimit = Symbol('_sizeLimit');
  const _bufferPos = Symbol('_bufferPos');
  const _currentLimit = Symbol('_currentLimit');
  const _lastTag = Symbol('_lastTag');
  const _recursionDepth = Symbol('_recursionDepth');
  const _checkLimit = Symbol('_checkLimit');
  const _readRawVarint32 = Symbol('_readRawVarint32');
  const _readRawVarint64 = Symbol('_readRawVarint64');
  const _readByteData = Symbol('_readByteData');
  const _readRawVarintByte = Symbol('_readRawVarintByte');
  protobuf.CodedBufferReader = class CodedBufferReader extends core.Object {
    checkLastTagWas(value) {
      if (this[_lastTag] != value) {
        dart.throw(new protobuf.InvalidProtocolBufferException.invalidEndTag());
      }
    }
    isAtEnd() {
      return dart.notNull(this[_bufferPos]) >= dart.notNull(this[_currentLimit]);
    }
    [_withLimit](byteLimit, callback) {
      if (dart.notNull(byteLimit) < 0) {
        dart.throw(new core.ArgumentError.new("CodedBufferReader encountered an embedded string or message" + " which claimed to have negative size."));
      }
      byteLimit = dart.notNull(byteLimit) + dart.notNull(this[_bufferPos]);
      let oldLimit = this[_currentLimit];
      if (oldLimit !== -1 && dart.notNull(byteLimit) > dart.notNull(oldLimit) || dart.notNull(byteLimit) > dart.notNull(this[_sizeLimit])) {
        dart.throw(new protobuf.InvalidProtocolBufferException.truncatedMessage());
      }
      this[_currentLimit] = byteLimit;
      dart.dcall(callback, []);
      this[_currentLimit] = oldLimit;
    }
    [_checkLimit](increment) {
      if (!(this[_currentLimit] !== -1)) dart.assertFailed();
      this[_bufferPos] = dart.notNull(this[_bufferPos]) + dart.notNull(increment);
      if (dart.notNull(this[_bufferPos]) > dart.notNull(this[_currentLimit])) {
        dart.throw(new protobuf.InvalidProtocolBufferException.truncatedMessage());
      }
    }
    readGroup(fieldNumber, message, extensionRegistry) {
      if (dart.notNull(this[_recursionDepth]) >= dart.notNull(this[_recursionLimit])) {
        dart.throw(new protobuf.InvalidProtocolBufferException.recursionLimitExceeded());
      }
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) + 1;
      message.mergeFromCodedBufferReader(this, extensionRegistry);
      this.checkLastTagWas(protobuf.makeTag(fieldNumber, 4));
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) - 1;
    }
    readUnknownFieldSetGroup(fieldNumber) {
      if (dart.notNull(this[_recursionDepth]) >= dart.notNull(this[_recursionLimit])) {
        dart.throw(new protobuf.InvalidProtocolBufferException.recursionLimitExceeded());
      }
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) + 1;
      let unknownFieldSet = new protobuf.UnknownFieldSet.new();
      unknownFieldSet.mergeFromCodedBufferReader(this);
      this.checkLastTagWas(protobuf.makeTag(fieldNumber, 4));
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) - 1;
      return unknownFieldSet;
    }
    readMessage(message, extensionRegistry) {
      let length = this.readInt32();
      if (dart.notNull(this[_recursionDepth]) >= dart.notNull(this[_recursionLimit])) {
        dart.throw(new protobuf.InvalidProtocolBufferException.recursionLimitExceeded());
      }
      if (dart.notNull(length) < 0) {
        dart.throw(new core.ArgumentError.new("CodedBufferReader encountered an embedded string or message" + " which claimed to have negative size."));
      }
      let oldLimit = this[_currentLimit];
      this[_currentLimit] = dart.notNull(this[_bufferPos]) + dart.notNull(length);
      if (dart.notNull(this[_currentLimit]) > dart.notNull(oldLimit)) {
        dart.throw(new protobuf.InvalidProtocolBufferException.truncatedMessage());
      }
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) + 1;
      message.mergeFromCodedBufferReader(this, extensionRegistry);
      this.checkLastTagWas(0);
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) - 1;
      this[_currentLimit] = oldLimit;
    }
    readEnum() {
      return this.readInt32();
    }
    readInt32() {
      return this[_readRawVarint32]();
    }
    readInt64() {
      return this[_readRawVarint64]();
    }
    readUint32() {
      return this[_readRawVarint32](false);
    }
    readUint64() {
      return this[_readRawVarint64]();
    }
    readSint32() {
      return protobuf.CodedBufferReader._decodeZigZag32(this.readUint32());
    }
    readSint64() {
      return protobuf.CodedBufferReader._decodeZigZag64(this.readUint64());
    }
    readFixed32() {
      return this[_readByteData](4)[$getUint32](0, typed_data.Endian.little);
    }
    readFixed64() {
      return this.readSfixed64();
    }
    readSfixed32() {
      return this[_readByteData](4)[$getInt32](0, typed_data.Endian.little);
    }
    readSfixed64() {
      let data = this[_readByteData](8);
      let view = typed_data.Uint8List.view(data[$buffer], data[$offsetInBytes], 8);
      return fixnum$.Int64.fromBytes(view);
    }
    readBool() {
      return this[_readRawVarint32]() !== 0;
    }
    readBytes() {
      let length = this.readInt32();
      this[_checkLimit](length);
      return typed_data.Uint8List.view(this[_buffer][$buffer], dart.notNull(this[_buffer][$offsetInBytes]) + dart.notNull(this[_bufferPos]) - dart.notNull(length), length);
    }
    readString() {
      return protobuf._utf8.decode(this.readBytes());
    }
    readFloat() {
      return this[_readByteData](4)[$getFloat32](0, typed_data.Endian.little);
    }
    readDouble() {
      return this[_readByteData](8)[$getFloat64](0, typed_data.Endian.little);
    }
    readTag() {
      if (dart.test(this.isAtEnd())) {
        this[_lastTag] = 0;
        return 0;
      }
      this[_lastTag] = this.readInt32();
      if (protobuf.getTagFieldNumber(this[_lastTag]) === 0) {
        dart.throw(new protobuf.InvalidProtocolBufferException.invalidTag());
      }
      return this[_lastTag];
    }
    static _decodeZigZag32(value) {
      if ((dart.notNull(value) & 1) === 1) {
        return -value[$rightShift](1) - 1;
      } else {
        return value[$rightShift](1);
      }
    }
    static _decodeZigZag64(value) {
      if (dart.equals(value['&'](1), 1)) value = value._negate();
      return value['>>'](1);
    }
    [_readRawVarintByte]() {
      this[_checkLimit](1);
      return this[_buffer][$_get](dart.notNull(this[_bufferPos]) - 1);
    }
    [_readRawVarint32](signed) {
      if (signed === void 0) signed = true;
      let bytes = dart.notNull(this[_currentLimit]) - dart.notNull(this[_bufferPos]);
      if (bytes > 10) bytes = 10;
      let result = 0;
      for (let i = 0; i < bytes; i++) {
        let byte = this[_buffer][$_get]((() => {
          let x = this[_bufferPos];
          this[_bufferPos] = dart.notNull(x) + 1;
          return x;
        })());
        result = (result | (dart.notNull(byte) & 127)[$leftShift](i * 7)) >>> 0;
        if ((dart.notNull(byte) & 128) === 0) {
          result = (result & 4294967295) >>> 0;
          return dart.test(signed) ? result - 2 * ((2147483648 & result) >>> 0) : result;
        }
      }
      dart.throw(new protobuf.InvalidProtocolBufferException.malformedVarint());
    }
    [_readRawVarint64]() {
      let lo = 0;
      let hi = 0;
      for (let i = 0; i < 4; i++) {
        let byte = this[_readRawVarintByte]();
        lo = (lo | (dart.notNull(byte) & 127)[$leftShift](i * 7)) >>> 0;
        if ((dart.notNull(byte) & 128) === 0) return fixnum$.Int64.fromInts(hi, lo);
      }
      let byte = this[_readRawVarintByte]();
      lo = (lo | (dart.notNull(byte) & 15) << 28) >>> 0;
      hi = dart.notNull(byte) >> 4 & 7;
      if ((dart.notNull(byte) & 128) === 0) {
        return fixnum$.Int64.fromInts(hi, lo);
      }
      for (let i = 0; i < 5; i++) {
        let byte = this[_readRawVarintByte]();
        hi = (hi | (dart.notNull(byte) & 127)[$leftShift](i * 7 + 3)) >>> 0;
        if ((dart.notNull(byte) & 128) === 0) return fixnum$.Int64.fromInts(hi, lo);
      }
      dart.throw(new protobuf.InvalidProtocolBufferException.malformedVarint());
    }
    [_readByteData](sizeInBytes) {
      this[_checkLimit](sizeInBytes);
      return typed_data.ByteData.view(this[_buffer][$buffer], dart.notNull(this[_buffer][$offsetInBytes]) + dart.notNull(this[_bufferPos]) - dart.notNull(sizeInBytes), sizeInBytes);
    }
  };
  (protobuf.CodedBufferReader.new = function(buffer, opts) {
    let recursionLimit = opts && 'recursionLimit' in opts ? opts.recursionLimit : 64;
    let sizeLimit = opts && 'sizeLimit' in opts ? opts.sizeLimit : 67108864;
    this[_bufferPos] = 0;
    this[_currentLimit] = -1;
    this[_lastTag] = 0;
    this[_recursionDepth] = 0;
    let _ = typed_data.Uint8List.is(buffer) ? buffer : typed_data.Uint8List.new(buffer[$length]);
    _[$setRange](0, buffer[$length], buffer);
    this[_buffer] = _;
    this[_recursionLimit] = recursionLimit;
    this[_sizeLimit] = math.min(core.int, sizeLimit, buffer[$length]);
    this[_currentLimit] = this[_sizeLimit];
  }).prototype = protobuf.CodedBufferReader.prototype;
  dart.addTypeTests(protobuf.CodedBufferReader);
  dart.setMethodSignature(protobuf.CodedBufferReader, () => ({
    __proto__: dart.getMethods(protobuf.CodedBufferReader.__proto__),
    checkLastTagWas: dart.fnType(dart.void, [core.int]),
    isAtEnd: dart.fnType(core.bool, []),
    [_withLimit]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_checkLimit]: dart.fnType(dart.void, [core.int]),
    readGroup: dart.fnType(dart.void, [core.int, protobuf.GeneratedMessage, protobuf.ExtensionRegistry]),
    readUnknownFieldSetGroup: dart.fnType(protobuf.UnknownFieldSet, [core.int]),
    readMessage: dart.fnType(dart.void, [protobuf.GeneratedMessage, protobuf.ExtensionRegistry]),
    readEnum: dart.fnType(core.int, []),
    readInt32: dart.fnType(core.int, []),
    readInt64: dart.fnType(fixnum$.Int64, []),
    readUint32: dart.fnType(core.int, []),
    readUint64: dart.fnType(fixnum$.Int64, []),
    readSint32: dart.fnType(core.int, []),
    readSint64: dart.fnType(fixnum$.Int64, []),
    readFixed32: dart.fnType(core.int, []),
    readFixed64: dart.fnType(fixnum$.Int64, []),
    readSfixed32: dart.fnType(core.int, []),
    readSfixed64: dart.fnType(fixnum$.Int64, []),
    readBool: dart.fnType(core.bool, []),
    readBytes: dart.fnType(core.List$(core.int), []),
    readString: dart.fnType(core.String, []),
    readFloat: dart.fnType(core.double, []),
    readDouble: dart.fnType(core.double, []),
    readTag: dart.fnType(core.int, []),
    [_readRawVarintByte]: dart.fnType(core.int, []),
    [_readRawVarint32]: dart.fnType(core.int, [], [core.bool]),
    [_readRawVarint64]: dart.fnType(fixnum$.Int64, []),
    [_readByteData]: dart.fnType(typed_data.ByteData, [core.int])
  }));
  dart.setFieldSignature(protobuf.CodedBufferReader, () => ({
    __proto__: dart.getFields(protobuf.CodedBufferReader.__proto__),
    [_buffer]: dart.finalFieldType(typed_data.Uint8List),
    [_bufferPos]: dart.fieldType(core.int),
    [_currentLimit]: dart.fieldType(core.int),
    [_lastTag]: dart.fieldType(core.int),
    [_recursionDepth]: dart.fieldType(core.int),
    [_recursionLimit]: dart.finalFieldType(core.int),
    [_sizeLimit]: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(protobuf.CodedBufferReader, {
    /*protobuf.CodedBufferReader.DEFAULT_RECURSION_LIMIT*/get DEFAULT_RECURSION_LIMIT() {
      return 64;
    },
    /*protobuf.CodedBufferReader.DEFAULT_SIZE_LIMIT*/get DEFAULT_SIZE_LIMIT() {
      return 64 << 20;
    }
  });
  const _splices = Symbol('_splices');
  const _lastSplicePos = Symbol('_lastSplicePos');
  const _outputChunk = Symbol('_outputChunk');
  const _bytesInChunk = Symbol('_bytesInChunk');
  const _outputChunkAsByteData = Symbol('_outputChunkAsByteData');
  const _outputChunks = Symbol('_outputChunks');
  const _outputChunksBytes = Symbol('_outputChunksBytes');
  const _bytesTotal = Symbol('_bytesTotal');
  const _commitChunk = Symbol('_commitChunk');
  const _writeTag = Symbol('_writeTag');
  const _startLengthDelimited = Symbol('_startLengthDelimited');
  const _writeValueAs = Symbol('_writeValueAs');
  const _endLengthDelimited = Symbol('_endLengthDelimited');
  const _writeValue = Symbol('_writeValue');
  const _commitSplice = Symbol('_commitSplice');
  const _copyInto = Symbol('_copyInto');
  const _ensureBytes = Symbol('_ensureBytes');
  const _writeRawBytes = Symbol('_writeRawBytes');
  const _varint32LengthInBytes = Symbol('_varint32LengthInBytes');
  const _writeVarint32 = Symbol('_writeVarint32');
  const _writeVarint64 = Symbol('_writeVarint64');
  const _writeInt32 = Symbol('_writeInt32');
  const _writeDouble = Symbol('_writeDouble');
  const _writeFloat = Symbol('_writeFloat');
  const _writeInt64 = Symbol('_writeInt64');
  const _writeBytesNoTag = Symbol('_writeBytesNoTag');
  protobuf.CodedBufferWriter = class CodedBufferWriter extends core.Object {
    get lengthInBytes() {
      return this[_bytesTotal];
    }
    writeField(fieldNumber, fieldType, fieldValue) {
      let valueType = (dart.notNull(fieldType) & ~7) >>> 0;
      if ((dart.notNull(fieldType) & protobuf.PbFieldType._PACKED_BIT) !== 0) {
        if (!dart.dtest(dart.dload(fieldValue, 'isEmpty'))) {
          this[_writeTag](fieldNumber, 2);
          let mark = this[_startLengthDelimited]();
          for (let value of core.Iterable._check(fieldValue)) {
            this[_writeValueAs](valueType, value);
          }
          this[_endLengthDelimited](mark);
        }
        return;
      }
      let wireFormat = protobuf.CodedBufferWriter._wireTypes[$_get](protobuf.CodedBufferWriter._valueTypeIndex(valueType));
      if ((dart.notNull(fieldType) & protobuf.PbFieldType._REPEATED_BIT) !== 0) {
        for (let i = 0; i < dart.notNull(core.num._check(dart.dload(fieldValue, 'length'))); i++) {
          this[_writeValue](fieldNumber, valueType, dart.dindex(fieldValue, i), wireFormat);
        }
        return;
      }
      this[_writeValue](fieldNumber, valueType, fieldValue, wireFormat);
    }
    toBuffer() {
      let result = typed_data.Uint8List.new(this[_bytesTotal]);
      this.writeTo(result);
      return result;
    }
    writeTo(buffer, offset) {
      if (offset === void 0) offset = 0;
      if (dart.notNull(buffer[$length]) - dart.notNull(offset) < dart.notNull(this[_bytesTotal])) {
        return false;
      }
      this[_commitChunk](false);
      this[_commitSplice]();
      let outPos = offset;
      let chunkIndex = 0, chunkPos = 0;
      for (let i = 0; i < dart.notNull(this[_splices][$length]); i++) {
        let action = this[_splices][$_get](i);
        if (core.int.is(action)) {
          if (dart.notNull(action) <= 0) {
            let v = 0 - dart.notNull(action);
            while (v >= 128) {
              buffer[$_set]((() => {
                let x = outPos;
                outPos = dart.notNull(x) + 1;
                return x;
              })(), 128 | v & 127);
              v = v[$rightShift](7);
            }
            buffer[$_set]((() => {
              let x = outPos;
              outPos = dart.notNull(x) + 1;
              return x;
            })(), v);
          } else {
            let bytesToCopy = action;
            while (dart.notNull(bytesToCopy) > 0) {
              let chunk = typed_data.Uint8List._check(this[_outputChunks][$_get](chunkIndex));
              let bytesInChunk = core.int._check(this[_outputChunks][$_get](chunkIndex + 1));
              let leftInChunk = dart.notNull(bytesInChunk) - chunkPos;
              let bytesToCopyFromChunk = leftInChunk > dart.notNull(bytesToCopy) ? bytesToCopy : leftInChunk;
              let endPos = chunkPos + dart.notNull(bytesToCopyFromChunk);
              while (chunkPos < endPos) {
                buffer[$_set]((() => {
                  let x = outPos;
                  outPos = dart.notNull(x) + 1;
                  return x;
                })(), chunk[$_get](chunkPos++));
              }
              bytesToCopy = dart.notNull(bytesToCopy) - dart.notNull(bytesToCopyFromChunk);
              if (chunkPos === bytesInChunk) {
                chunkIndex = chunkIndex + 2;
                chunkPos = 0;
              }
            }
          }
        } else {
          outPos = this[_copyInto](buffer, outPos, typed_data.TypedData._check(action));
        }
      }
      return true;
    }
    [_commitChunk](allocateNew) {
      if (this[_bytesInChunk] !== 0) {
        this[_outputChunks][$add](this[_outputChunk]);
        this[_outputChunks][$add](this[_bytesInChunk]);
        this[_outputChunksBytes] = dart.notNull(this[_outputChunksBytes]) + dart.notNull(this[_bytesInChunk]);
      }
      if (dart.test(allocateNew)) {
        this[_outputChunk] = typed_data.Uint8List.new(512);
        this[_bytesInChunk] = 0;
        this[_outputChunkAsByteData] = typed_data.ByteData.view(this[_outputChunk][$buffer]);
      } else {
        this[_outputChunk] = this[_outputChunkAsByteData] = null;
        this[_bytesInChunk] = 0;
      }
    }
    [_ensureBytes](count) {
      if (dart.notNull(this[_bytesInChunk]) + dart.notNull(count) > 512) {
        this[_commitChunk](true);
      }
    }
    [_commitSplice]() {
      let pos = dart.notNull(this[_bytesInChunk]) + dart.notNull(this[_outputChunksBytes]);
      let bytes = pos - dart.notNull(this[_lastSplicePos]);
      if (bytes > 0) {
        this[_splices][$add](bytes);
      }
      this[_lastSplicePos] = pos;
    }
    [_writeRawBytes](value) {
      this[_commitSplice]();
      this[_splices][$add](value);
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + dart.notNull(value[$lengthInBytes]);
    }
    [_startLengthDelimited]() {
      this[_commitSplice]();
      let index = this[_splices][$length];
      this[_splices][$add](this[_bytesTotal]);
      return index;
    }
    [_endLengthDelimited](index) {
      let writtenSizeInBytes = dart.asInt(dart.notNull(this[_bytesTotal]) - dart.notNull(core.num._check(this[_splices][$_get](index))));
      this[_splices][$_set](index, 0 - dart.notNull(writtenSizeInBytes));
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + dart.notNull(this[_varint32LengthInBytes](writtenSizeInBytes));
    }
    [_varint32LengthInBytes](value) {
      value = (dart.notNull(value) & 4294967295) >>> 0;
      if (dart.notNull(value) < 128) return 1;
      if (dart.notNull(value) < 16384) return 2;
      if (dart.notNull(value) < 2097152) return 3;
      if (dart.notNull(value) < 268435456) return 4;
      return 5;
    }
    [_writeVarint32](value) {
      this[_ensureBytes](5);
      let i = this[_bytesInChunk];
      while (dart.notNull(value) >= 128) {
        this[_outputChunk][$_set]((() => {
          let x = i;
          i = dart.notNull(x) + 1;
          return x;
        })(), 128 | dart.notNull(value) & 127);
        value = value[$rightShift](7);
      }
      this[_outputChunk][$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), value);
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + (dart.notNull(i) - dart.notNull(this[_bytesInChunk]));
      this[_bytesInChunk] = i;
    }
    [_writeVarint64](value) {
      this[_ensureBytes](10);
      let i = this[_bytesInChunk];
      let lo = value.toUnsigned(32).toInt();
      let hi = value['>>'](32).toUnsigned(32).toInt();
      while (dart.notNull(hi) > 0 || dart.notNull(lo) >= 128) {
        this[_outputChunk][$_set]((() => {
          let x = i;
          i = dart.notNull(x) + 1;
          return x;
        })(), 128 | dart.notNull(lo) & 127);
        lo = (lo[$rightShift](7) | (dart.notNull(hi) & 127) << 25) >>> 0;
        hi = hi[$rightShift](7);
      }
      this[_outputChunk][$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), lo);
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + (dart.notNull(i) - dart.notNull(this[_bytesInChunk]));
      this[_bytesInChunk] = i;
    }
    [_writeDouble](value) {
      if (value[$isNaN]) {
        this[_writeInt32](0);
        this[_writeInt32](2146959360);
        return;
      }
      this[_ensureBytes](8);
      this[_outputChunkAsByteData][$setFloat64](this[_bytesInChunk], value, typed_data.Endian.little);
      this[_bytesInChunk] = dart.notNull(this[_bytesInChunk]) + 8;
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + 8;
    }
    [_writeFloat](value) {
      let MIN_FLOAT_DENORM = 1.401298464324817e-45;
      let MAX_FLOAT = 3.4028234663852886e+38;
      if (value[$isNaN]) {
        this[_writeInt32](2143289344);
      } else if (value[$abs]() < MIN_FLOAT_DENORM) {
        this[_writeInt32](value[$isNegative] ? 2147483648 : 0);
      } else if (value[$isInfinite] || value[$abs]() > MAX_FLOAT) {
        this[_writeInt32](value[$isNegative] ? 4286578688 : 2139095040);
      } else {
        let sz = 4;
        this[_ensureBytes](sz);
        this[_outputChunkAsByteData][$setFloat32](this[_bytesInChunk], value, typed_data.Endian.little);
        this[_bytesInChunk] = dart.notNull(this[_bytesInChunk]) + sz;
        this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + sz;
      }
    }
    [_writeInt32](value) {
      let sizeInBytes = 4;
      this[_ensureBytes](sizeInBytes);
      this[_outputChunkAsByteData][$setInt32](this[_bytesInChunk], (dart.notNull(value) & 4294967295) >>> 0, typed_data.Endian.little);
      this[_bytesInChunk] = dart.notNull(this[_bytesInChunk]) + sizeInBytes;
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + sizeInBytes;
    }
    [_writeInt64](value) {
      this[_writeInt32](value.toUnsigned(32).toInt());
      this[_writeInt32](value['>>'](32).toUnsigned(32).toInt());
    }
    [_writeValueAs](valueType, value) {
      switch (valueType) {
        case protobuf.PbFieldType._BOOL_BIT:
        {
          this[_writeVarint32](dart.dtest(value) ? 1 : 0);
          break;
        }
        case protobuf.PbFieldType._BYTES_BIT:
        {
          this[_writeBytesNoTag](typed_data.TypedData.is(value) ? value : typed_data.Uint8List.fromList(ListOfint()._check(value)));
          break;
        }
        case protobuf.PbFieldType._STRING_BIT:
        {
          this[_writeBytesNoTag](protobuf._utf8.encode(core.String._check(value)));
          break;
        }
        case protobuf.PbFieldType._DOUBLE_BIT:
        {
          this[_writeDouble](core.double._check(value));
          break;
        }
        case protobuf.PbFieldType._FLOAT_BIT:
        {
          this[_writeFloat](core.double._check(value));
          break;
        }
        case protobuf.PbFieldType._ENUM_BIT:
        {
          this[_writeVarint32](core.int._check(dart.dsend(dart.dload(value, 'value'), '&', [4294967295])));
          break;
        }
        case protobuf.PbFieldType._GROUP_BIT:
        {
          dart.dsend(value, 'writeToCodedBufferWriter', [this]);
          break;
        }
        case protobuf.PbFieldType._INT32_BIT:
        {
          this[_writeVarint32](core.int._check(dart.dsend(value, '&', [4294967295])));
          break;
        }
        case protobuf.PbFieldType._INT64_BIT:
        {
          this[_writeVarint64](fixnum$.Int64._check(value));
          break;
        }
        case protobuf.PbFieldType._SINT32_BIT:
        {
          this[_writeVarint32](protobuf._encodeZigZag32(core.int._check(value)));
          break;
        }
        case protobuf.PbFieldType._SINT64_BIT:
        {
          this[_writeVarint64](protobuf._encodeZigZag64(fixnum$.Int64._check(value)));
          break;
        }
        case protobuf.PbFieldType._UINT32_BIT:
        {
          this[_writeVarint32](core.int._check(value));
          break;
        }
        case protobuf.PbFieldType._UINT64_BIT:
        {
          this[_writeVarint64](fixnum$.Int64._check(value));
          break;
        }
        case protobuf.PbFieldType._FIXED32_BIT:
        {
          this[_writeInt32](core.int._check(value));
          break;
        }
        case protobuf.PbFieldType._FIXED64_BIT:
        {
          this[_writeInt64](fixnum$.Int64._check(value));
          break;
        }
        case protobuf.PbFieldType._SFIXED32_BIT:
        {
          this[_writeInt32](core.int._check(value));
          break;
        }
        case protobuf.PbFieldType._SFIXED64_BIT:
        {
          this[_writeInt64](fixnum$.Int64._check(value));
          break;
        }
        case protobuf.PbFieldType._MESSAGE_BIT:
        {
          let mark = this[_startLengthDelimited]();
          dart.dsend(value, 'writeToCodedBufferWriter', [this]);
          this[_endLengthDelimited](mark);
          break;
        }
      }
    }
    [_writeBytesNoTag](value) {
      this.writeInt32NoTag(core.int._check(dart.dload(value, 'length')));
      this[_writeRawBytes](typed_data.TypedData._check(value));
    }
    [_writeTag](fieldNumber, wireFormat) {
      this.writeInt32NoTag(protobuf.makeTag(fieldNumber, wireFormat));
    }
    [_writeValue](fieldNumber, valueType, value, wireFormat) {
      this[_writeTag](fieldNumber, wireFormat);
      this[_writeValueAs](valueType, value);
      if (valueType === protobuf.PbFieldType._GROUP_BIT) {
        this[_writeTag](fieldNumber, 4);
      }
    }
    writeInt32NoTag(value) {
      this[_writeVarint32]((dart.notNull(value) & 4294967295) >>> 0);
    }
    [_copyInto](buffer, pos, value) {
      if (typed_data.Uint8List.is(value)) {
        let len = value[$length];
        for (let j = 0; j < dart.notNull(len); j++) {
          buffer[$_set]((() => {
            let x = pos;
            pos = dart.notNull(x) + 1;
            return x;
          })(), value[$_get](j));
        }
        return pos;
      } else {
        let len = value[$lengthInBytes];
        let u8 = typed_data.Uint8List.view(value[$buffer], value[$offsetInBytes], value[$lengthInBytes]);
        for (let j = 0; j < dart.notNull(len); j++) {
          buffer[$_set]((() => {
            let x = pos;
            pos = dart.notNull(x) + 1;
            return x;
          })(), u8[$_get](j));
        }
        return pos;
      }
    }
    static _valueTypeIndex(powerOf2) {
      return (125613361 * dart.notNull(powerOf2))[$rightShift](27) & 31;
    }
  };
  (protobuf.CodedBufferWriter.new = function() {
    this[_splices] = [];
    this[_lastSplicePos] = 0;
    this[_outputChunk] = null;
    this[_bytesInChunk] = 0;
    this[_outputChunkAsByteData] = null;
    this[_outputChunks] = [];
    this[_outputChunksBytes] = 0;
    this[_bytesTotal] = 0;
    this[_commitChunk](true);
  }).prototype = protobuf.CodedBufferWriter.prototype;
  dart.addTypeTests(protobuf.CodedBufferWriter);
  dart.setMethodSignature(protobuf.CodedBufferWriter, () => ({
    __proto__: dart.getMethods(protobuf.CodedBufferWriter.__proto__),
    writeField: dart.fnType(dart.void, [core.int, core.int, dart.dynamic]),
    toBuffer: dart.fnType(typed_data.Uint8List, []),
    writeTo: dart.fnType(core.bool, [typed_data.Uint8List], [core.int]),
    [_commitChunk]: dart.fnType(dart.void, [core.bool]),
    [_ensureBytes]: dart.fnType(dart.void, [core.int]),
    [_commitSplice]: dart.fnType(dart.void, []),
    [_writeRawBytes]: dart.fnType(dart.void, [typed_data.TypedData]),
    [_startLengthDelimited]: dart.fnType(core.int, []),
    [_endLengthDelimited]: dart.fnType(dart.void, [core.int]),
    [_varint32LengthInBytes]: dart.fnType(core.int, [core.int]),
    [_writeVarint32]: dart.fnType(dart.void, [core.int]),
    [_writeVarint64]: dart.fnType(dart.void, [fixnum$.Int64]),
    [_writeDouble]: dart.fnType(dart.void, [core.double]),
    [_writeFloat]: dart.fnType(dart.void, [core.double]),
    [_writeInt32]: dart.fnType(dart.void, [core.int]),
    [_writeInt64]: dart.fnType(dart.void, [fixnum$.Int64]),
    [_writeValueAs]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_writeBytesNoTag]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_writeTag]: dart.fnType(dart.dynamic, [core.int, core.int]),
    [_writeValue]: dart.fnType(dart.void, [core.int, core.int, dart.dynamic, core.int]),
    writeInt32NoTag: dart.fnType(dart.void, [core.int]),
    [_copyInto]: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.TypedData])
  }));
  dart.setGetterSignature(protobuf.CodedBufferWriter, () => ({
    __proto__: dart.getGetters(protobuf.CodedBufferWriter.__proto__),
    lengthInBytes: core.int
  }));
  dart.setFieldSignature(protobuf.CodedBufferWriter, () => ({
    __proto__: dart.getFields(protobuf.CodedBufferWriter.__proto__),
    [_splices]: dart.finalFieldType(core.List),
    [_lastSplicePos]: dart.fieldType(core.int),
    [_outputChunk]: dart.fieldType(typed_data.Uint8List),
    [_bytesInChunk]: dart.fieldType(core.int),
    [_outputChunkAsByteData]: dart.fieldType(typed_data.ByteData),
    [_outputChunks]: dart.finalFieldType(core.List),
    [_outputChunksBytes]: dart.fieldType(core.int),
    [_bytesTotal]: dart.fieldType(core.int)
  }));
  dart.defineLazy(protobuf.CodedBufferWriter, {
    /*protobuf.CodedBufferWriter._chunkLength*/get _chunkLength() {
      return 512;
    },
    /*protobuf.CodedBufferWriter._BOOL_BIT_INDEX*/get _BOOL_BIT_INDEX() {
      return 14;
    },
    /*protobuf.CodedBufferWriter._BYTES_BIT_INDEX*/get _BYTES_BIT_INDEX() {
      return 29;
    },
    /*protobuf.CodedBufferWriter._STRING_BIT_INDEX*/get _STRING_BIT_INDEX() {
      return 27;
    },
    /*protobuf.CodedBufferWriter._DOUBLE_BIT_INDEX*/get _DOUBLE_BIT_INDEX() {
      return 23;
    },
    /*protobuf.CodedBufferWriter._FLOAT_BIT_INDEX*/get _FLOAT_BIT_INDEX() {
      return 15;
    },
    /*protobuf.CodedBufferWriter._ENUM_BIT_INDEX*/get _ENUM_BIT_INDEX() {
      return 31;
    },
    /*protobuf.CodedBufferWriter._GROUP_BIT_INDEX*/get _GROUP_BIT_INDEX() {
      return 30;
    },
    /*protobuf.CodedBufferWriter._INT32_BIT_INDEX*/get _INT32_BIT_INDEX() {
      return 28;
    },
    /*protobuf.CodedBufferWriter._INT64_BIT_INDEX*/get _INT64_BIT_INDEX() {
      return 25;
    },
    /*protobuf.CodedBufferWriter._SINT32_BIT_INDEX*/get _SINT32_BIT_INDEX() {
      return 18;
    },
    /*protobuf.CodedBufferWriter._SINT64_BIT_INDEX*/get _SINT64_BIT_INDEX() {
      return 5;
    },
    /*protobuf.CodedBufferWriter._UINT32_BIT_INDEX*/get _UINT32_BIT_INDEX() {
      return 11;
    },
    /*protobuf.CodedBufferWriter._UINT64_BIT_INDEX*/get _UINT64_BIT_INDEX() {
      return 22;
    },
    /*protobuf.CodedBufferWriter._FIXED32_BIT_INDEX*/get _FIXED32_BIT_INDEX() {
      return 13;
    },
    /*protobuf.CodedBufferWriter._FIXED64_BIT_INDEX*/get _FIXED64_BIT_INDEX() {
      return 26;
    },
    /*protobuf.CodedBufferWriter._SFIXED32_BIT_INDEX*/get _SFIXED32_BIT_INDEX() {
      return 21;
    },
    /*protobuf.CodedBufferWriter._SFIXED64_BIT_INDEX*/get _SFIXED64_BIT_INDEX() {
      return 10;
    },
    /*protobuf.CodedBufferWriter._MESSAGE_BIT_INDEX*/get _MESSAGE_BIT_INDEX() {
      return 20;
    },
    /*protobuf.CodedBufferWriter._wireTypes*/get _wireTypes() {
      let _ = typed_data.Uint8List.new(32);
      _[$_set](14, 0);
      _[$_set](29, 2);
      _[$_set](27, 2);
      _[$_set](23, 1);
      _[$_set](15, 5);
      _[$_set](31, 0);
      _[$_set](30, 3);
      _[$_set](28, 0);
      _[$_set](25, 0);
      _[$_set](18, 0);
      _[$_set](5, 0);
      _[$_set](11, 0);
      _[$_set](22, 0);
      _[$_set](13, 5);
      _[$_set](26, 1);
      _[$_set](21, 5);
      _[$_set](10, 1);
      _[$_set](20, 2);
      return _;
    }
  });
  protobuf._encodeZigZag32 = function(value) {
    return (dart.notNull(value) << 1 ^ value[$rightShift](31)) >>> 0;
  };
  protobuf._encodeZigZag64 = function(value) {
    return value['<<'](1)['^'](value['>>'](63));
  };
  let const$;
  const _sortedByTag = Symbol('_sortedByTag');
  const _addField = Symbol('_addField');
  const _computeSortedByTag = Symbol('_computeSortedByTag');
  protobuf.BuilderInfo = class BuilderInfo extends core.Object {
    get qualifiedMessageName() {
      return this[qualifiedMessageName];
    }
    set qualifiedMessageName(value) {
      super.qualifiedMessageName = value;
    }
    get byIndex() {
      return this[byIndex];
    }
    set byIndex(value) {
      super.byIndex = value;
    }
    get fieldInfo() {
      return this[fieldInfo];
    }
    set fieldInfo(value) {
      super.fieldInfo = value;
    }
    get byTagAsString() {
      return this[byTagAsString];
    }
    set byTagAsString(value) {
      super.byTagAsString = value;
    }
    get byName() {
      return this[byName];
    }
    set byName(value) {
      super.byName = value;
    }
    get hasExtensions() {
      return this[hasExtensions];
    }
    set hasExtensions(value) {
      this[hasExtensions] = value;
    }
    get hasRequiredFields() {
      return this[hasRequiredFields];
    }
    set hasRequiredFields(value) {
      this[hasRequiredFields] = value;
    }
    add(T, tagNumber, name, fieldType, defaultOrMaker, subBuilder, valueOf, enumValues) {
      let index = this.byIndex[$length];
      this[_addField](new (protobuf.FieldInfo$(T)).new(name, tagNumber, index, fieldType, defaultOrMaker, subBuilder, valueOf, enumValues));
    }
    addRepeated(T, tagNumber, name, fieldType, check, subBuilder, valueOf, enumValues) {
      let index = this.byIndex[$length];
      this[_addField](new (protobuf.FieldInfo$(T)).repeated(name, tagNumber, index, fieldType, check, subBuilder, valueOf, enumValues));
    }
    [_addField](fi) {
      this.byIndex[$add](fi);
      if (!dart.equals(this.byIndex[$_get](fi.index), fi)) dart.assertFailed();
      this.fieldInfo[$_set](fi.tagNumber, fi);
      this.byTagAsString[$_set](dart.str(fi.tagNumber), fi);
      this.byName[$_set](fi.name, fi);
    }
    a(T, tagNumber, name, fieldType, defaultOrMaker, subBuilder, valueOf, enumValues) {
      if (defaultOrMaker === void 0) defaultOrMaker = null;
      if (subBuilder === void 0) subBuilder = null;
      if (valueOf === void 0) valueOf = null;
      if (enumValues === void 0) enumValues = null;
      this.add(T, tagNumber, name, fieldType, defaultOrMaker, subBuilder, valueOf, enumValues);
    }
    aOS(tagNumber, name) {
      this.add(core.String, tagNumber, name, protobuf.PbFieldType.OS, null, null, null, null);
    }
    pPS(tagNumber, name) {
      this.addRepeated(core.String, tagNumber, name, protobuf.PbFieldType.PS, protobuf.getCheckFunction(protobuf.PbFieldType.PS), null, null, null);
    }
    aQS(tagNumber, name) {
      this.add(core.String, tagNumber, name, protobuf.PbFieldType.QS, null, null, null, null);
    }
    aInt64(tagNumber, name) {
      this.add(fixnum$.Int64, tagNumber, name, protobuf.PbFieldType.O6, fixnum$.Int64.ZERO, null, null, null);
    }
    aOB(tagNumber, name) {
      this.add(core.bool, tagNumber, name, protobuf.PbFieldType.OB, null, null, null, null);
    }
    e(T, tagNumber, name, fieldType, defaultOrMaker, valueOf, enumValues) {
      this.add(T, tagNumber, name, fieldType, defaultOrMaker, null, valueOf, enumValues);
    }
    p(T, tagNumber, name, fieldType) {
      if (!(!dart.test(protobuf._isGroupOrMessage(fieldType)) && !dart.test(protobuf._isEnum(fieldType)))) dart.assertFailed();
      this.addRepeated(T, tagNumber, name, fieldType, protobuf.getCheckFunction(fieldType), null, null, null);
    }
    pp(T, tagNumber, name, fieldType, check, subBuilder, valueOf, enumValues) {
      if (subBuilder === void 0) subBuilder = null;
      if (valueOf === void 0) valueOf = null;
      if (enumValues === void 0) enumValues = null;
      if (!(dart.test(protobuf._isGroupOrMessage(fieldType)) || dart.test(protobuf._isEnum(fieldType)))) dart.assertFailed();
      this.addRepeated(T, tagNumber, name, fieldType, check, subBuilder, valueOf, enumValues);
    }
    containsTagNumber(tagNumber) {
      return this.fieldInfo[$containsKey](tagNumber);
    }
    defaultValue(tagNumber) {
      let func = this.makeDefault(tagNumber);
      return func == null ? null : func();
    }
    fieldName(tagNumber) {
      let i = this.fieldInfo[$_get](tagNumber);
      return i != null ? i.name : null;
    }
    fieldType(tagNumber) {
      let i = this.fieldInfo[$_get](tagNumber);
      return i != null ? i.type : null;
    }
    makeDefault(tagNumber) {
      let i = this.fieldInfo[$_get](tagNumber);
      return i != null ? i.makeDefault : null;
    }
    subBuilder(tagNumber) {
      let i = this.fieldInfo[$_get](tagNumber);
      return i != null ? i.subBuilder : null;
    }
    tagNumber(fieldName) {
      let i = this.byName[$_get](fieldName);
      return i != null ? i.tagNumber : null;
    }
    valueOfFunc(tagNumber) {
      let i = this.fieldInfo[$_get](tagNumber);
      return i != null ? i.valueOf : null;
    }
    get sortedByTag() {
      let t = this[_sortedByTag];
      return t == null ? this[_sortedByTag] = this[_computeSortedByTag]() : t;
    }
    get messageName() {
      let lastDot = this.qualifiedMessageName[$lastIndexOf](".");
      return lastDot === -1 ? this.qualifiedMessageName : this.qualifiedMessageName[$substring](lastDot + 1);
    }
    [_computeSortedByTag]() {
      let _ = ListOfFieldInfo().from(this.fieldInfo[$values], {growable: false});
      _[$sort](dart.fn((a, b) => a.tagNumber[$compareTo](b.tagNumber), FieldInfoAndFieldInfoToint()));
      return _;
    }
    [_makeEmptyMessage](tagNumber, extensionRegistry) {
      let subBuilderFunc = this.subBuilder(tagNumber);
      if (subBuilderFunc == null && extensionRegistry != null) {
        subBuilderFunc = extensionRegistry.getExtension(this.qualifiedMessageName, tagNumber).subBuilder;
      }
      return subBuilderFunc();
    }
    [_decodeEnum](tagNumber, registry, rawValue) {
      let f = this.valueOfFunc(tagNumber);
      if (f == null && registry != null) {
        f = registry.getExtension(this.qualifiedMessageName, tagNumber).valueOf;
      }
      return f(rawValue);
    }
  };
  (protobuf.BuilderInfo.new = function(messageName, opts) {
    let package$ = opts && 'package' in opts ? opts.package : const$ || (const$ = dart.const(new protobuf.PackageName.new("")));
    this[byIndex] = JSArrayOfFieldInfo().of([]);
    this[fieldInfo] = new (IdentityMapOfint$FieldInfo()).new();
    this[byTagAsString] = new (IdentityMapOfString$FieldInfo()).new();
    this[byName] = new (IdentityMapOfString$FieldInfo()).new();
    this[hasExtensions] = false;
    this[hasRequiredFields] = true;
    this[_sortedByTag] = null;
    this[qualifiedMessageName] = dart.str(package$.prefix) + dart.str(messageName);
  }).prototype = protobuf.BuilderInfo.prototype;
  dart.addTypeTests(protobuf.BuilderInfo);
  const qualifiedMessageName = Symbol("BuilderInfo.qualifiedMessageName");
  const byIndex = Symbol("BuilderInfo.byIndex");
  const fieldInfo = Symbol("BuilderInfo.fieldInfo");
  const byTagAsString = Symbol("BuilderInfo.byTagAsString");
  const byName = Symbol("BuilderInfo.byName");
  const hasExtensions = Symbol("BuilderInfo.hasExtensions");
  const hasRequiredFields = Symbol("BuilderInfo.hasRequiredFields");
  dart.setMethodSignature(protobuf.BuilderInfo, () => ({
    __proto__: dart.getMethods(protobuf.BuilderInfo.__proto__),
    add: dart.gFnType(T => [dart.void, [core.int, core.String, core.int, dart.dynamic, dart.fnType(protobuf.GeneratedMessage, []), dart.fnType(protobuf.ProtobufEnum, [core.int]), core.List$(protobuf.ProtobufEnum)]]),
    addRepeated: dart.gFnType(T => [dart.void, [core.int, core.String, core.int, dart.fnType(dart.void, [T]), dart.fnType(protobuf.GeneratedMessage, []), dart.fnType(protobuf.ProtobufEnum, [core.int]), core.List$(protobuf.ProtobufEnum)]]),
    [_addField]: dart.fnType(dart.void, [protobuf.FieldInfo]),
    a: dart.gFnType(T => [dart.void, [core.int, core.String, core.int], [dart.dynamic, dart.fnType(protobuf.GeneratedMessage, []), dart.fnType(protobuf.ProtobufEnum, [core.int]), core.List$(protobuf.ProtobufEnum)]]),
    aOS: dart.fnType(dart.void, [core.int, core.String]),
    pPS: dart.fnType(dart.void, [core.int, core.String]),
    aQS: dart.fnType(dart.void, [core.int, core.String]),
    aInt64: dart.fnType(dart.void, [core.int, core.String]),
    aOB: dart.fnType(dart.void, [core.int, core.String]),
    e: dart.gFnType(T => [dart.void, [core.int, core.String, core.int, dart.dynamic, dart.fnType(protobuf.ProtobufEnum, [core.int]), core.List$(protobuf.ProtobufEnum)]]),
    p: dart.gFnType(T => [dart.void, [core.int, core.String, core.int]]),
    pp: dart.gFnType(T => [dart.void, [core.int, core.String, core.int, dart.fnType(dart.void, [T])], [dart.fnType(protobuf.GeneratedMessage, []), dart.fnType(protobuf.ProtobufEnum, [core.int]), core.List$(protobuf.ProtobufEnum)]]),
    containsTagNumber: dart.fnType(core.bool, [core.int]),
    defaultValue: dart.fnType(dart.dynamic, [core.int]),
    fieldName: dart.fnType(core.String, [core.int]),
    fieldType: dart.fnType(core.int, [core.int]),
    makeDefault: dart.fnType(dart.fnType(dart.dynamic, []), [core.int]),
    subBuilder: dart.fnType(dart.fnType(protobuf.GeneratedMessage, []), [core.int]),
    tagNumber: dart.fnType(core.int, [core.String]),
    valueOfFunc: dart.fnType(dart.fnType(protobuf.ProtobufEnum, [core.int]), [core.int]),
    [_computeSortedByTag]: dart.fnType(core.List$(protobuf.FieldInfo), []),
    [_makeEmptyMessage]: dart.fnType(protobuf.GeneratedMessage, [core.int, protobuf.ExtensionRegistry]),
    [_decodeEnum]: dart.fnType(dart.dynamic, [core.int, protobuf.ExtensionRegistry, core.int])
  }));
  dart.setGetterSignature(protobuf.BuilderInfo, () => ({
    __proto__: dart.getGetters(protobuf.BuilderInfo.__proto__),
    sortedByTag: core.List$(protobuf.FieldInfo),
    messageName: core.String
  }));
  dart.setFieldSignature(protobuf.BuilderInfo, () => ({
    __proto__: dart.getFields(protobuf.BuilderInfo.__proto__),
    qualifiedMessageName: dart.finalFieldType(core.String),
    byIndex: dart.finalFieldType(ListOfFieldInfo()),
    fieldInfo: dart.finalFieldType(MapOfint$FieldInfo()),
    byTagAsString: dart.finalFieldType(MapOfString$FieldInfo()),
    byName: dart.finalFieldType(MapOfString$FieldInfo()),
    hasExtensions: dart.fieldType(core.bool),
    hasRequiredFields: dart.fieldType(core.bool),
    [_sortedByTag]: dart.fieldType(ListOfFieldInfo())
  }));
  protobuf.EventPlugin = class EventPlugin extends core.Object {};
  (protobuf.EventPlugin.new = function() {
  }).prototype = protobuf.EventPlugin.prototype;
  dart.addTypeTests(protobuf.EventPlugin);
  protobuf.InvalidProtocolBufferException = class InvalidProtocolBufferException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "InvalidProtocolBufferException: " + dart.str(this.message);
    }
  };
  (protobuf.InvalidProtocolBufferException.__ = function(message) {
    this[message$] = message;
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.invalidEndTag = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message end-group tag did not match expected tag.");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.invalidTag = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message contained an invalid tag (zero).");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.invalidWireType = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message tag had invalid wire type.");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.malformedVarint = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "CodedBufferReader encountered a malformed varint.");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.recursionLimitExceeded = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.truncatedMessage = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.wrongAnyMessage = function(anyTypeName, unpackerTypeName) {
    protobuf.InvalidProtocolBufferException.__.call(this, "The type of the Any message (" + dart.str(anyTypeName) + ") does not match the given\nunpacker (" + dart.str(unpackerTypeName) + ").\n");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  dart.addTypeTests(protobuf.InvalidProtocolBufferException);
  const message$ = Symbol("InvalidProtocolBufferException.message");
  protobuf.InvalidProtocolBufferException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(protobuf.InvalidProtocolBufferException, () => ({
    __proto__: dart.getFields(protobuf.InvalidProtocolBufferException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(protobuf.InvalidProtocolBufferException, ['toString']);
  let const$0;
  const _hasRequiredValues = Symbol('_hasRequiredValues');
  const _fieldSet = Symbol('_fieldSet');
  const _hasRequiredFields = Symbol('_hasRequiredFields');
  const _appendInvalidFields = Symbol('_appendInvalidFields');
  const _createRepeatedField = Symbol('_createRepeatedField');
  const _createRepeatedFieldWithType = Symbol('_createRepeatedFieldWithType');
  const _is_FieldInfo_default = Symbol('_is_FieldInfo_default');
  protobuf.FieldInfo$ = dart.generic(T => {
    let PbListOfT = () => (PbListOfT = dart.constFn(protobuf.PbList$(T)))();
    let VoidToPbListOfT = () => (VoidToPbListOfT = dart.constFn(dart.fnType(PbListOfT(), [])))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class FieldInfo extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get tagNumber() {
        return this[tagNumber$];
      }
      set tagNumber(value) {
        super.tagNumber = value;
      }
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
      get type() {
        return this[type$];
      }
      set type(value) {
        super.type = value;
      }
      get makeDefault() {
        return this[makeDefault];
      }
      set makeDefault(value) {
        super.makeDefault = value;
      }
      get subBuilder() {
        return this[subBuilder$];
      }
      set subBuilder(value) {
        super.subBuilder = value;
      }
      get enumValues() {
        return this[enumValues$];
      }
      set enumValues(value) {
        super.enumValues = value;
      }
      get valueOf() {
        return this[valueOf$];
      }
      set valueOf(value) {
        super.valueOf = value;
      }
      get check() {
        return this[check$];
      }
      set check(value) {
        super.check = value;
      }
      static findMakeDefault(type, defaultOrMaker) {
        if (defaultOrMaker == null) return protobuf.PbFieldType._defaultForType(type);
        if (VoidTodynamic().is(defaultOrMaker)) return defaultOrMaker;
        return dart.fn(() => defaultOrMaker, VoidTodynamic());
      }
      get isRequired() {
        return protobuf._isRequired(this.type);
      }
      get isRepeated() {
        return protobuf._isRepeated(this.type);
      }
      get isGroupOrMessage() {
        return protobuf._isGroupOrMessage(this.type);
      }
      get isEnum() {
        return protobuf._isEnum(this.type);
      }
      get readonlyDefault() {
        if (dart.test(this.isRepeated)) return const$0 || (const$0 = dart.constList([], core.Null));
        return this.makeDefault();
      }
      [_hasRequiredValues](value) {
        if (value == null) return !dart.test(this.isRequired);
        if (!dart.test(protobuf._isGroupOrMessage(this.type))) return true;
        if (!dart.test(this.isRepeated)) {
          let message = protobuf.GeneratedMessage._check(value);
          return message[_fieldSet][_hasRequiredValues]();
        }
        let list = ListOfGeneratedMessage()._check(value);
        if (dart.test(list[$isEmpty])) return true;
        if (!dart.test(list[$_get](0)[_fieldSet][_hasRequiredFields])) return true;
        return list[$every](dart.fn(m => m[_fieldSet][_hasRequiredValues](), GeneratedMessageTobool()));
      }
      [_appendInvalidFields](problems, value, prefix) {
        if (value == null) {
          if (dart.test(this.isRequired)) problems[$add](dart.str(prefix) + dart.str(this.name));
        } else if (!dart.test(protobuf._isGroupOrMessage(this.type))) {
        } else if (!dart.test(this.isRepeated)) {
          let message = protobuf.GeneratedMessage._check(value);
          message[_fieldSet][_appendInvalidFields](problems, dart.str(prefix) + dart.str(this.name) + ".");
        } else {
          let list = ListOfGeneratedMessage().as(value);
          if (dart.test(list[$isEmpty])) return;
          if (!dart.test(list[$_get](0)[_fieldSet][_hasRequiredFields])) return;
          let position = 0;
          for (let message of list) {
            message[_fieldSet][_appendInvalidFields](problems, dart.str(prefix) + dart.str(this.name) + "[" + dart.str(position) + "].");
            position++;
          }
        }
      }
      [_createRepeatedField](m) {
        if (!dart.test(this.isRepeated)) dart.assertFailed();
        return m.createRepeatedField(T, this.tagNumber, this);
      }
      [_createRepeatedFieldWithType](S, m) {
        dart.checkTypeBound(S, T, 'S');
        if (!dart.test(this.isRepeated)) dart.assertFailed();
        return m.createRepeatedField(S, this.tagNumber, protobuf.FieldInfo$(S)._check(this));
      }
      [_ensureRepeatedField](fs) {
        return fs[_ensureRepeatedField](T, this);
      }
      toString() {
        return this.name;
      }
    }
    (FieldInfo.new = function(name, tagNumber, index, type, defaultOrMaker, subBuilder, valueOf, enumValues) {
      if (defaultOrMaker === void 0) defaultOrMaker = null;
      if (subBuilder === void 0) subBuilder = null;
      if (valueOf === void 0) valueOf = null;
      if (enumValues === void 0) enumValues = null;
      this[name$] = name;
      this[tagNumber$] = tagNumber;
      this[index$] = index;
      this[subBuilder$] = subBuilder;
      this[valueOf$] = valueOf;
      this[enumValues$] = enumValues;
      this[type$] = type;
      this[makeDefault] = protobuf.FieldInfo.findMakeDefault(type, defaultOrMaker);
      this[check$] = null;
      if (!(type !== 0)) dart.assertFailed();
      if (!(!dart.test(protobuf._isGroupOrMessage(type)) || this.subBuilder != null)) dart.assertFailed();
      if (!(!dart.test(protobuf._isEnum(type)) || this.valueOf != null)) dart.assertFailed();
    }).prototype = FieldInfo.prototype;
    (FieldInfo.repeated = function(name, tagNumber, index, type, check, subBuilder, valueOf, enumValues) {
      if (valueOf === void 0) valueOf = null;
      if (enumValues === void 0) enumValues = null;
      this[name$] = name;
      this[tagNumber$] = tagNumber;
      this[index$] = index;
      this[check$] = check;
      this[subBuilder$] = subBuilder;
      this[valueOf$] = valueOf;
      this[enumValues$] = enumValues;
      this[type$] = type;
      this[makeDefault] = dart.fn(() => new (PbListOfT()).new({check: check}), VoidToPbListOfT());
      if (!(this.name != null)) dart.assertFailed();
      if (!(this.tagNumber != null)) dart.assertFailed();
      if (!dart.test(protobuf._isRepeated(type))) dart.assertFailed();
      if (!(this.check != null)) dart.assertFailed();
      if (!(!dart.test(protobuf._isEnum(type)) || this.valueOf != null)) dart.assertFailed();
    }).prototype = FieldInfo.prototype;
    dart.addTypeTests(FieldInfo);
    FieldInfo.prototype[_is_FieldInfo_default] = true;
    const name$ = Symbol("FieldInfo.name");
    const tagNumber$ = Symbol("FieldInfo.tagNumber");
    const index$ = Symbol("FieldInfo.index");
    const type$ = Symbol("FieldInfo.type");
    const makeDefault = Symbol("FieldInfo.makeDefault");
    const subBuilder$ = Symbol("FieldInfo.subBuilder");
    const enumValues$ = Symbol("FieldInfo.enumValues");
    const valueOf$ = Symbol("FieldInfo.valueOf");
    const check$ = Symbol("FieldInfo.check");
    dart.setMethodSignature(FieldInfo, () => ({
      __proto__: dart.getMethods(FieldInfo.__proto__),
      [_hasRequiredValues]: dart.fnType(core.bool, [dart.dynamic]),
      [_appendInvalidFields]: dart.fnType(dart.void, [core.List$(core.String), dart.dynamic, core.String]),
      [_createRepeatedField]: dart.fnType(core.List$(T), [protobuf.GeneratedMessage]),
      [_createRepeatedFieldWithType]: dart.gFnType(S => [core.List$(S), [protobuf.GeneratedMessage]], S => [T]),
      [_ensureRepeatedField]: dart.fnType(core.List$(T), [protobuf._FieldSet]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(FieldInfo, () => ({
      __proto__: dart.getGetters(FieldInfo.__proto__),
      isRequired: core.bool,
      isRepeated: core.bool,
      isGroupOrMessage: core.bool,
      isEnum: core.bool,
      readonlyDefault: dart.dynamic
    }));
    dart.setFieldSignature(FieldInfo, () => ({
      __proto__: dart.getFields(FieldInfo.__proto__),
      name: dart.finalFieldType(core.String),
      tagNumber: dart.finalFieldType(core.int),
      index: dart.finalFieldType(core.int),
      type: dart.finalFieldType(core.int),
      makeDefault: dart.finalFieldType(VoidTodynamic()),
      subBuilder: dart.finalFieldType(VoidToGeneratedMessage()),
      enumValues: dart.finalFieldType(ListOfProtobufEnum()),
      valueOf: dart.finalFieldType(intToProtobufEnum()),
      check: dart.finalFieldType(TTovoid())
    }));
    dart.defineExtensionMethods(FieldInfo, ['toString']);
    return FieldInfo;
  });
  protobuf.FieldInfo = protobuf.FieldInfo$();
  dart.addTypeTests(protobuf.FieldInfo, _is_FieldInfo_default);
  const _is_Extension_default = Symbol('_is_Extension_default');
  protobuf.Extension$ = dart.generic(T => {
    class Extension extends protobuf.FieldInfo$(T) {
      get extendee() {
        return this[extendee$];
      }
      set extendee(value) {
        super.extendee = value;
      }
      get hashCode() {
        return dart.hashCode(this.extendee) * 31 + dart.notNull(this.tagNumber);
      }
      _equals(other) {
        if (other == null) return false;
        if (!protobuf.Extension.is(other)) return false;
        let o = protobuf.Extension._check(other);
        return this.extendee == o.extendee && this.tagNumber == o.tagNumber;
      }
    }
    (Extension.new = function(extendee, name, tagNumber, fieldType, defaultOrMaker, subBuilder, valueOf, enumValues) {
      if (defaultOrMaker === void 0) defaultOrMaker = null;
      if (subBuilder === void 0) subBuilder = null;
      if (valueOf === void 0) valueOf = null;
      if (enumValues === void 0) enumValues = null;
      this[extendee$] = extendee;
      Extension.__proto__.new.call(this, name, tagNumber, null, fieldType, defaultOrMaker, subBuilder, valueOf, enumValues);
    }).prototype = Extension.prototype;
    (Extension.repeated = function(extendee, name, tagNumber, fieldType, check, subBuilder, valueOf, enumValues) {
      if (subBuilder === void 0) subBuilder = null;
      if (valueOf === void 0) valueOf = null;
      if (enumValues === void 0) enumValues = null;
      this[extendee$] = extendee;
      Extension.__proto__.repeated.call(this, name, tagNumber, null, fieldType, check, subBuilder, valueOf, enumValues);
    }).prototype = Extension.prototype;
    dart.addTypeTests(Extension);
    Extension.prototype[_is_Extension_default] = true;
    const extendee$ = Symbol("Extension.extendee");
    dart.setMethodSignature(Extension, () => ({
      __proto__: dart.getMethods(Extension.__proto__),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(Extension, () => ({
      __proto__: dart.getGetters(Extension.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setFieldSignature(Extension, () => ({
      __proto__: dart.getFields(Extension.__proto__),
      extendee: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(Extension, ['_equals']);
    dart.defineExtensionAccessors(Extension, ['hashCode']);
    return Extension;
  });
  protobuf.Extension = protobuf.Extension$();
  dart.addTypeTests(protobuf.Extension, _is_Extension_default);
  const _parent = Symbol('_parent');
  const _info = Symbol('_info');
  const _isReadOnly = Symbol('_isReadOnly');
  const _validateInfo = Symbol('_validateInfo');
  const _addInfoUnchecked = Symbol('_addInfoUnchecked');
  const _getFieldOrDefault = Symbol('_getFieldOrDefault');
  const _hasField = Symbol('_hasField');
  const _message = Symbol('_message');
  const _clearField = Symbol('_clearField');
  const _clearFieldAndInfo = Symbol('_clearFieldAndInfo');
  const _hasObservers = Symbol('_hasObservers');
  const _eventPlugin = Symbol('_eventPlugin');
  const _setFieldFailedMessage = Symbol('_setFieldFailedMessage');
  const _validateField = Symbol('_validateField');
  const _setField = Symbol('_setField');
  const _setFieldAndInfo = Symbol('_setFieldAndInfo');
  const _infos = Symbol('_infos');
  const _hasValues = Symbol('_hasValues');
  const _equalValues = Symbol('_equalValues');
  const _clearValues = Symbol('_clearValues');
  protobuf._ExtensionFieldSet = class _ExtensionFieldSet extends core.Object {
    [_getInfoOrNull](tagNumber) {
      return this[_info][$_get](tagNumber);
    }
    [_getFieldOrDefault](fi) {
      if (dart.test(fi.isRepeated)) return this[_ensureRepeatedField](dart.dynamic, fi);
      this[_validateInfo](fi);
      this[_addInfoUnchecked](fi);
      let value = this[_getFieldOrNull](fi);
      if (value == null) return fi.makeDefault();
      return value;
    }
    [_hasField](tagNumber) {
      let value = this[_values][$_get](tagNumber);
      if (value == null) return false;
      if (core.List.is(value)) return value[$isNotEmpty];
      return true;
    }
    [_ensureRepeatedField](T, fi) {
      if (!dart.test(fi.isRepeated)) dart.assertFailed();
      if (!(fi.extendee == this[_parent][_messageName])) dart.assertFailed();
      let list = this[_values][$_get](fi.tagNumber);
      if (list != null) return core.List$(T).as(list);
      this[_validateInfo](fi);
      let newList = fi[_createRepeatedField](this[_parent][_message]);
      this[_addInfoUnchecked](fi);
      this[_setFieldUnchecked](fi, newList);
      return newList;
    }
    [_getFieldOrNull](extension) {
      return this[_values][$_get](extension.tagNumber);
    }
    [_clearFieldAndInfo](fi) {
      this[_clearField](fi);
      this[_info][$remove](fi.tagNumber);
    }
    [_clearField](fi) {
      this[_validateInfo](fi);
      if (dart.test(this[_parent][_hasObservers])) this[_parent][_eventPlugin].beforeClearField(fi);
      this[_values][$remove](fi.tagNumber);
    }
    [_setField](tagNumber, value) {
      let fi = this[_getInfoOrNull](tagNumber);
      if (fi == null) {
        dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + dart.str(this[_parent]) + "._messageName"));
      }
      if (dart.test(fi.isRepeated)) {
        dart.throw(new core.ArgumentError.new(this[_parent][_setFieldFailedMessage](fi, value, "repeating field (use get + .add())")));
      }
      this[_parent][_validateField](fi, value);
      this[_setFieldUnchecked](fi, value);
    }
    [_setFieldAndInfo](fi, value) {
      if (dart.test(fi.isRepeated)) {
        dart.throw(new core.ArgumentError.new(this[_parent][_setFieldFailedMessage](fi, value, "repeating field (use get + .add())")));
      }
      this[_validateInfo](fi);
      this[_parent][_validateField](fi, value);
      this[_addInfoUnchecked](fi);
      this[_setFieldUnchecked](fi, value);
    }
    [_validateInfo](fi) {
      if (fi.extendee != this[_parent][_messageName]) {
        dart.throw(new core.ArgumentError.new("Extension " + dart.str(fi) + " not legal for message " + dart.str(this[_parent][_messageName])));
      }
    }
    [_addInfoUnchecked](fi) {
      if (!(fi.extendee == this[_parent][_messageName])) dart.assertFailed();
      this[_info][$_set](fi.tagNumber, fi);
    }
    [_setFieldUnchecked](fi, value) {
      if (dart.test(this[_parent][_hasObservers])) {
        this[_parent][_eventPlugin].beforeSetField(fi, value);
      }
      this[_values][$_set](fi.tagNumber, value);
    }
    get [_tagNumbers]() {
      return this[_values][$keys];
    }
    get [_infos]() {
      return this[_info][$values];
    }
    get [_hasValues]() {
      return this[_values][$isNotEmpty];
    }
    [_equalValues](other) {
      return protobuf._areMapsEqual(this[_values], other[_values]);
    }
    [_clearValues]() {
      return this[_values][$clear]();
    }
  };
  (protobuf._ExtensionFieldSet.new = function(parent) {
    this[_info] = new (IdentityMapOfint$Extension()).new();
    this[_values] = new (IdentityMapOfint$dynamic()).new();
    this[_parent] = parent;
    if (!!dart.test(this[_parent][_isReadOnly])) dart.assertFailed();
  }).prototype = protobuf._ExtensionFieldSet.prototype;
  dart.addTypeTests(protobuf._ExtensionFieldSet);
  dart.setMethodSignature(protobuf._ExtensionFieldSet, () => ({
    __proto__: dart.getMethods(protobuf._ExtensionFieldSet.__proto__),
    [_getInfoOrNull]: dart.fnType(protobuf.Extension, [core.int]),
    [_getFieldOrDefault]: dart.fnType(dart.dynamic, [protobuf.Extension]),
    [_hasField]: dart.fnType(core.bool, [core.int]),
    [_ensureRepeatedField]: dart.gFnType(T => [core.List$(T), [protobuf.Extension$(T)]]),
    [_getFieldOrNull]: dart.fnType(dart.dynamic, [protobuf.Extension]),
    [_clearFieldAndInfo]: dart.fnType(dart.void, [protobuf.Extension]),
    [_clearField]: dart.fnType(dart.void, [protobuf.Extension]),
    [_setField]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_setFieldAndInfo]: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    [_validateInfo]: dart.fnType(dart.void, [protobuf.Extension]),
    [_addInfoUnchecked]: dart.fnType(dart.void, [protobuf.Extension]),
    [_setFieldUnchecked]: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    [_equalValues]: dart.fnType(core.bool, [protobuf._ExtensionFieldSet]),
    [_clearValues]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(protobuf._ExtensionFieldSet, () => ({
    __proto__: dart.getGetters(protobuf._ExtensionFieldSet.__proto__),
    [_tagNumbers]: core.Iterable$(core.int),
    [_infos]: core.Iterable$(protobuf.Extension),
    [_hasValues]: dart.dynamic
  }));
  dart.setFieldSignature(protobuf._ExtensionFieldSet, () => ({
    __proto__: dart.getFields(protobuf._ExtensionFieldSet.__proto__),
    [_parent]: dart.finalFieldType(protobuf._FieldSet),
    [_info]: dart.finalFieldType(MapOfint$Extension()),
    [_values]: dart.finalFieldType(MapOfint$dynamic())
  }));
  protobuf.ExtensionRegistry = class ExtensionRegistry extends core.Object {
    add(extension) {
      let map = this[_extensions][$putIfAbsent](extension.extendee, dart.fn(() => new (IdentityMapOfint$Extension()).new(), VoidToMapOfint$Extension()));
      map[$_set](extension.tagNumber, extension);
    }
    getExtension(messageName, tagNumber) {
      let map = this[_extensions][$_get](messageName);
      if (map != null) {
        return map[$_get](tagNumber);
      }
      return null;
    }
  };
  (protobuf.ExtensionRegistry.new = function() {
    this[_extensions] = new (IdentityMapOfString$MapOfint$Extension()).new();
  }).prototype = protobuf.ExtensionRegistry.prototype;
  dart.addTypeTests(protobuf.ExtensionRegistry);
  dart.setMethodSignature(protobuf.ExtensionRegistry, () => ({
    __proto__: dart.getMethods(protobuf.ExtensionRegistry.__proto__),
    add: dart.fnType(dart.void, [protobuf.Extension]),
    getExtension: dart.fnType(protobuf.Extension, [core.String, core.int])
  }));
  dart.setFieldSignature(protobuf.ExtensionRegistry, () => ({
    __proto__: dart.getFields(protobuf.ExtensionRegistry.__proto__),
    [_extensions]: dart.finalFieldType(MapOfString$MapOfint$Extension())
  }));
  dart.defineLazy(protobuf.ExtensionRegistry, {
    /*protobuf.ExtensionRegistry.EMPTY*/get EMPTY() {
      return dart.const(new protobuf._EmptyExtensionRegistry.new());
    }
  });
  protobuf._EmptyExtensionRegistry = class _EmptyExtensionRegistry extends core.Object {
    get [_extensions]() {
      return null;
    }
    add(extension) {
      dart.throw(new core.UnsupportedError.new("Immutable ExtensionRegistry"));
    }
    getExtension(messageName, tagNumber) {
      return null;
    }
  };
  (protobuf._EmptyExtensionRegistry.new = function() {
  }).prototype = protobuf._EmptyExtensionRegistry.prototype;
  dart.addTypeTests(protobuf._EmptyExtensionRegistry);
  protobuf._EmptyExtensionRegistry[dart.implements] = () => [protobuf.ExtensionRegistry];
  dart.setMethodSignature(protobuf._EmptyExtensionRegistry, () => ({
    __proto__: dart.getMethods(protobuf._EmptyExtensionRegistry.__proto__),
    add: dart.fnType(dart.void, [protobuf.Extension]),
    getExtension: dart.fnType(protobuf.Extension, [core.String, core.int])
  }));
  dart.setGetterSignature(protobuf._EmptyExtensionRegistry, () => ({
    __proto__: dart.getGetters(protobuf._EmptyExtensionRegistry.__proto__),
    [_extensions]: core.Map$(core.String, core.Map$(core.int, protobuf.Extension))
  }));
  protobuf._getFieldError = function(fieldType, value) {
    switch (protobuf.PbFieldType._baseType(fieldType)) {
      case protobuf.PbFieldType._BOOL_BIT:
      {
        if (!(typeof value == 'boolean')) return "not type bool";
        return null;
      }
      case protobuf.PbFieldType._BYTES_BIT:
      {
        if (!core.List.is(value)) return "not List";
        return null;
      }
      case protobuf.PbFieldType._STRING_BIT:
      {
        if (!(typeof value == 'string')) return "not type String";
        return null;
      }
      case protobuf.PbFieldType._FLOAT_BIT:
      {
        if (!(typeof value == 'number')) return "not type double";
        if (!dart.test(protobuf._isFloat32(core.double._check(value)))) return "out of range for float";
        return null;
      }
      case protobuf.PbFieldType._DOUBLE_BIT:
      {
        if (!(typeof value == 'number')) return "not type double";
        return null;
      }
      case protobuf.PbFieldType._ENUM_BIT:
      {
        if (!protobuf.ProtobufEnum.is(value)) return "not type ProtobufEnum";
        return null;
      }
      case protobuf.PbFieldType._INT32_BIT:
      case protobuf.PbFieldType._SINT32_BIT:
      case protobuf.PbFieldType._SFIXED32_BIT:
      {
        if (!core.int.is(value)) return "not type int";
        if (!dart.test(protobuf._isSigned32(core.int._check(value)))) return "out of range for signed 32-bit int";
        return null;
      }
      case protobuf.PbFieldType._UINT32_BIT:
      case protobuf.PbFieldType._FIXED32_BIT:
      {
        if (!core.int.is(value)) return "not type int";
        if (!dart.test(protobuf._isUnsigned32(core.int._check(value)))) return "out of range for unsigned 32-bit int";
        return null;
      }
      case protobuf.PbFieldType._INT64_BIT:
      case protobuf.PbFieldType._SINT64_BIT:
      case protobuf.PbFieldType._UINT64_BIT:
      case protobuf.PbFieldType._FIXED64_BIT:
      case protobuf.PbFieldType._SFIXED64_BIT:
      {
        if (!fixnum$.Int64.is(value)) return "not Int64";
        return null;
      }
      case protobuf.PbFieldType._GROUP_BIT:
      case protobuf.PbFieldType._MESSAGE_BIT:
      {
        if (!protobuf.GeneratedMessage.is(value)) return "not a GeneratedMessage";
        return null;
      }
      default:
      {
        return "field has unknown type " + dart.str(fieldType);
      }
    }
  };
  protobuf.checkItemFailed = function(val, className) {
    dart.throw(new core.ArgumentError.new("Value (" + dart.str(val) + ") is not an instance of " + dart.str(className)));
  };
  protobuf.getCheckFunction = function(fieldType) {
    switch ((dart.notNull(fieldType) & ~7) >>> 0) {
      case protobuf.PbFieldType._BOOL_BIT:
      {
        return dart.fn(protobuf._checkBool, ObjectTovoid());
      }
      case protobuf.PbFieldType._BYTES_BIT:
      {
        return dart.fn(protobuf._checkBytes, ObjectTovoid());
      }
      case protobuf.PbFieldType._STRING_BIT:
      {
        return dart.fn(protobuf._checkString, ObjectTovoid());
      }
      case protobuf.PbFieldType._FLOAT_BIT:
      {
        return dart.fn(protobuf._checkFloat, ObjectTovoid());
      }
      case protobuf.PbFieldType._DOUBLE_BIT:
      {
        return dart.fn(protobuf._checkDouble, ObjectTovoid());
      }
      case protobuf.PbFieldType._INT32_BIT:
      case protobuf.PbFieldType._SINT32_BIT:
      case protobuf.PbFieldType._SFIXED32_BIT:
      {
        return dart.fn(protobuf._checkSigned32, ObjectTovoid());
      }
      case protobuf.PbFieldType._UINT32_BIT:
      case protobuf.PbFieldType._FIXED32_BIT:
      {
        return dart.fn(protobuf._checkUnsigned32, ObjectTovoid());
      }
      case protobuf.PbFieldType._INT64_BIT:
      case protobuf.PbFieldType._SINT64_BIT:
      case protobuf.PbFieldType._SFIXED64_BIT:
      case protobuf.PbFieldType._UINT64_BIT:
      case protobuf.PbFieldType._FIXED64_BIT:
      {
        return dart.fn(protobuf._checkAnyInt64, ObjectTovoid());
      }
      case protobuf.PbFieldType._ENUM_BIT:
      {
        return dart.fn(protobuf._checkAnyEnum, ObjectTovoid());
      }
      case protobuf.PbFieldType._GROUP_BIT:
      case protobuf.PbFieldType._MESSAGE_BIT:
      {
        return dart.fn(protobuf._checkAnyMessage, ObjectTovoid());
      }
    }
    dart.throw(new core.ArgumentError.new("check function not implemented: " + dart.str(fieldType)));
  };
  protobuf._checkNotNull = function(val) {
    if (val == null) {
      dart.throw(new core.ArgumentError.new("Can't add a null to a repeated field"));
    }
  };
  protobuf._checkBool = function(val) {
    if (!(typeof val == 'boolean')) dart.throw(protobuf._createFieldTypeError(val, "a bool"));
  };
  protobuf._checkBytes = function(val) {
    if (!ListOfint().is(val)) dart.throw(protobuf._createFieldTypeError(val, "a List<int>"));
  };
  protobuf._checkString = function(val) {
    if (!(typeof val == 'string')) dart.throw(protobuf._createFieldTypeError(val, "a String"));
  };
  protobuf._checkFloat = function(val) {
    protobuf._checkDouble(val);
    if (!dart.test(protobuf._isFloat32(core.double._check(val)))) dart.throw(protobuf._createFieldRangeError(val, "a float"));
  };
  protobuf._checkDouble = function(val) {
    if (!(typeof val == 'number')) dart.throw(protobuf._createFieldTypeError(val, "a double"));
  };
  protobuf._checkInt = function(val) {
    if (!core.int.is(val)) dart.throw(protobuf._createFieldTypeError(val, "an int"));
  };
  protobuf._checkSigned32 = function(val) {
    protobuf._checkInt(val);
    if (!dart.test(protobuf._isSigned32(core.int._check(val)))) dart.throw(protobuf._createFieldRangeError(val, "a signed int32"));
  };
  protobuf._checkUnsigned32 = function(val) {
    protobuf._checkInt(val);
    if (!dart.test(protobuf._isUnsigned32(core.int._check(val)))) {
      dart.throw(protobuf._createFieldRangeError(val, "an unsigned int32"));
    }
  };
  protobuf._checkAnyInt64 = function(val) {
    if (!fixnum$.Int64.is(val)) dart.throw(protobuf._createFieldTypeError(val, "an Int64"));
  };
  protobuf._checkAnyEnum = function(val) {
    if (!protobuf.ProtobufEnum.is(val)) dart.throw(protobuf._createFieldTypeError(val, "a ProtobufEnum"));
  };
  protobuf._checkAnyMessage = function(val) {
    if (!protobuf.GeneratedMessage.is(val)) {
      dart.throw(protobuf._createFieldTypeError(val, "a GeneratedMessage"));
    }
  };
  protobuf._createFieldTypeError = function(val, wantedType) {
    return new core.ArgumentError.new("Value (" + dart.str(val) + ") is not " + dart.str(wantedType));
  };
  protobuf._createFieldRangeError = function(val, wantedType) {
    return new core.RangeError.new("Value (" + dart.str(val) + ") is not " + dart.str(wantedType));
  };
  protobuf._isSigned32 = function(value) {
    return -2147483648 <= dart.notNull(value) && dart.notNull(value) <= 2147483647;
  };
  protobuf._isUnsigned32 = function(value) {
    return 0 <= dart.notNull(value) && dart.notNull(value) <= 4294967295;
  };
  protobuf._isFloat32 = function(value) {
    return value[$isNaN] || value[$isInfinite] || -3.4028234663852886e+38 <= dart.notNull(value) && dart.notNull(value) <= 3.4028234663852886e+38;
  };
  protobuf.FrozenMessageErrorHandler = dart.typedef('FrozenMessageErrorHandler', () => dart.fnType(dart.void, [core.String], [core.String]));
  protobuf.defaultFrozenMessageModificationHandler = function(messageName, methodName) {
    if (methodName === void 0) methodName = null;
    if (methodName != null) {
      dart.throw(new core.UnsupportedError.new("Attempted to call " + dart.str(methodName) + " on a read-only message (" + dart.str(messageName) + ")"));
    }
    dart.throw(new core.UnsupportedError.new("Attempted to change a read-only message (" + dart.str(messageName) + ")"));
  };
  dart.defineLazy(protobuf, {
    /*protobuf.frozenMessageModificationHandler*/get frozenMessageModificationHandler() {
      return dart.fn(protobuf.defaultFrozenMessageModificationHandler, String__Tovoid());
    },
    set frozenMessageModificationHandler(_) {}
  });
  const _ensureExtensions = Symbol('_ensureExtensions');
  const _nonExtensionInfoByIndex = Symbol('_nonExtensionInfoByIndex');
  const _getFieldInfoOrNull = Symbol('_getFieldInfoOrNull');
  const _ensureInfo = Symbol('_ensureInfo');
  const _markReadOnly = Symbol('_markReadOnly');
  const _ensureWritable = Symbol('_ensureWritable');
  const _getDefault = Symbol('_getDefault');
  const _getField = Symbol('_getField');
  const _setNonExtensionFieldUnchecked = Symbol('_setNonExtensionFieldUnchecked');
  let const$1;
  const _getDefaultList = Symbol('_getDefaultList');
  const _getFieldOrNullByTag = Symbol('_getFieldOrNullByTag');
  const _$has = Symbol('_$has');
  const _$get = Symbol('_$get');
  const _$getN = Symbol('_$getN');
  const _$getList = Symbol('_$getList');
  const _$getS = Symbol('_$getS');
  const _$getI64 = Symbol('_$getI64');
  const _$check = Symbol('_$check');
  const _$set = Symbol('_$set');
  const _clear = Symbol('_clear');
  const _equalFieldValues = Symbol('_equalFieldValues');
  const _equals = Symbol('_equals');
  const _hashCode = Symbol('_hashCode');
  const _mergeField = Symbol('_mergeField');
  const _mergeFromMessage = Symbol('_mergeFromMessage');
  const _hasRequiredExtensionValues = Symbol('_hasRequiredExtensionValues');
  protobuf._FieldSet = class _FieldSet extends core.Object {
    static _makeValueList(length) {
      if (length === 0) return protobuf._FieldSet._zeroList;
      return core.List.new(length);
    }
    get [_messageName]() {
      return this[_meta].qualifiedMessageName;
    }
    get [_hasRequiredFields]() {
      return this[_meta].hasRequiredFields;
    }
    get [_infos]() {
      return this[_meta].fieldInfo[$values];
    }
    get [_infosSortedByTag]() {
      return this[_meta].sortedByTag;
    }
    get [_hasObservers]() {
      return this[_eventPlugin] != null && dart.test(this[_eventPlugin].hasObservers);
    }
    get [_hasExtensions]() {
      return this[_extensions] != null;
    }
    get hasUnknownFields() {
      return this[_unknownFields] != null;
    }
    [_ensureExtensions]() {
      if (!!dart.test(this[_isReadOnly])) dart.assertFailed();
      if (!dart.test(this[_hasExtensions])) this[_extensions] = new protobuf._ExtensionFieldSet.new(this);
      return this[_extensions];
    }
    [_ensureUnknownFields]() {
      if (dart.test(this[_isReadOnly])) return protobuf._ReadonlyUnknownFieldSet._empty;
      if (this[_unknownFields] == null) this[_unknownFields] = new protobuf.UnknownFieldSet.new();
      return this[_unknownFields];
    }
    [_nonExtensionInfo](tagNumber) {
      return this[_meta].fieldInfo[$_get](tagNumber);
    }
    [_nonExtensionInfoByIndex](index) {
      return this[_meta].byIndex[$_get](index);
    }
    [_ensureInfo](tagNumber) {
      let fi = this[_getFieldInfoOrNull](tagNumber);
      if (fi != null) return fi;
      dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + dart.str(this[_messageName])));
    }
    [_getFieldInfoOrNull](tagNumber) {
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi != null) return fi;
      if (!dart.test(this[_hasExtensions])) return null;
      return this[_extensions][_getInfoOrNull](tagNumber);
    }
    [_markReadOnly]() {
      if (dart.test(this[_isReadOnly])) return;
      this[_isReadOnly] = true;
      for (let field of this[_meta].sortedByTag) {
        if (dart.test(field.isRepeated)) {
          let entries = this[_values][$_get](field.index);
          if (entries == null) continue;
          if (dart.test(field.isGroupOrMessage)) {
            for (let subMessage of ListOfGeneratedMessage().as(entries)) {
              subMessage.freeze();
            }
          }
          this[_values][$_set](field.index, dart.dsend(entries, 'toFrozenPbList', []));
        } else if (dart.test(field.isGroupOrMessage)) {
          let entry = this[_values][$_get](field.index);
          if (entry != null) {
            protobuf.GeneratedMessage.as(entry).freeze();
          }
        }
      }
    }
    [_ensureWritable]() {
      if (dart.test(this[_isReadOnly])) protobuf.frozenMessageModificationHandler(this[_messageName]);
    }
    [_getField](tagNumber) {
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi != null) {
        let value = this[_values][$_get](fi.index);
        if (value != null) return value;
        return this[_getDefault](fi);
      }
      if (dart.test(this[_hasExtensions])) {
        let fi = this[_extensions][_getInfoOrNull](tagNumber);
        if (fi != null) {
          return this[_extensions][_getFieldOrDefault](fi);
        }
      }
      dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + dart.str(this[_messageName])));
    }
    [_getDefault](fi) {
      if (!dart.test(fi.isRepeated)) return fi.makeDefault();
      if (dart.test(this[_isReadOnly])) return fi.readonlyDefault;
      let value = fi[_createRepeatedField](this[_message]);
      this[_setNonExtensionFieldUnchecked](fi, value);
      return value;
    }
    [_getDefaultList](T, fi) {
      if (!dart.test(fi.isRepeated)) dart.assertFailed();
      if (dart.test(this[_isReadOnly])) return core.List$(T).unmodifiable(const$1 || (const$1 = dart.constList([], dart.dynamic)));
      let value = fi[_createRepeatedFieldWithType](T, this[_message]);
      this[_setNonExtensionFieldUnchecked](fi, value);
      return value;
    }
    [_getFieldOrNullByTag](tagNumber) {
      let fi = this[_getFieldInfoOrNull](tagNumber);
      if (fi == null) return null;
      return this[_getFieldOrNull](fi);
    }
    [_getFieldOrNull](fi) {
      if (fi.index != null) return this[_values][$_get](fi.index);
      if (!dart.test(this[_hasExtensions])) return null;
      return this[_extensions][_getFieldOrNull](protobuf.Extension._check(fi));
    }
    [_hasField](tagNumber) {
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi != null) return this[_$has](fi.index);
      if (!dart.test(this[_hasExtensions])) return false;
      return this[_extensions][_hasField](tagNumber);
    }
    [_clearField](tagNumber) {
      this[_ensureWritable]();
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi != null) {
        if (dart.test(this[_hasObservers])) this[_eventPlugin].beforeClearField(fi);
        this[_values][$_set](fi.index, null);
        return;
      }
      if (dart.test(this[_hasExtensions])) {
        let fi = this[_extensions][_getInfoOrNull](tagNumber);
        if (fi != null) {
          this[_extensions][_clearField](fi);
          return;
        }
      }
    }
    [_setField](tagNumber, value) {
      if (value == null) dart.throw(new core.ArgumentError.new("value is null"));
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi == null) {
        if (!dart.test(this[_hasExtensions])) {
          dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + dart.str(this[_messageName])));
        }
        this[_extensions][_setField](tagNumber, value);
        return;
      }
      if (dart.test(fi.isRepeated)) {
        dart.throw(new core.ArgumentError.new(this[_setFieldFailedMessage](fi, value, "repeating field (use get + .add())")));
      }
      this[_validateField](fi, value);
      this[_setNonExtensionFieldUnchecked](fi, value);
    }
    [_setFieldUnchecked](fi, value) {
      if (!(fi != null)) dart.assertFailed();
      if (!!dart.test(fi.isRepeated)) dart.assertFailed();
      if (fi.index == null) {
        let _ = this[_ensureExtensions]();
        _[_addInfoUnchecked](protobuf.Extension._check(fi));
        _[_setFieldUnchecked](protobuf.Extension._check(fi), value);
      } else {
        this[_setNonExtensionFieldUnchecked](fi, value);
      }
    }
    [_ensureRepeatedField](T, fi) {
      if (!!dart.test(this[_isReadOnly])) dart.assertFailed();
      if (!dart.test(fi.isRepeated)) dart.assertFailed();
      if (fi.index == null) {
        return this[_ensureExtensions]()[_ensureRepeatedField](T, protobuf.Extension$(T)._check(fi));
      }
      let value = this[_getFieldOrNull](fi);
      if (value != null) return core.List$(T).as(value);
      let newValue = fi[_createRepeatedField](this[_message]);
      this[_setNonExtensionFieldUnchecked](fi, newValue);
      return newValue;
    }
    [_setNonExtensionFieldUnchecked](fi, value) {
      if (dart.test(this[_hasObservers])) {
        this[_eventPlugin].beforeSetField(fi, value);
      }
      this[_values][$_set](fi.index, value);
    }
    [_$get](T, index, defaultValue) {
      let value = this[_values][$_get](index);
      if (value != null) return T.as(value);
      if (defaultValue != null) return defaultValue;
      return T.as(this[_getDefault](this[_nonExtensionInfoByIndex](index)));
    }
    [_$getN](T, index) {
      let value = this[_values][$_get](index);
      if (value != null) return T.as(value);
      return T.as(this[_getDefault](this[_nonExtensionInfoByIndex](index)));
    }
    [_$getList](T, index) {
      let value = this[_values][$_get](index);
      if (value != null) return core.List$(T).as(value);
      return this[_getDefaultList](T, protobuf.FieldInfo$(T)._check(this[_nonExtensionInfoByIndex](index)));
    }
    [_$getS](index, defaultValue) {
      let value = this[_values][$_get](index);
      if (value == null) {
        if (defaultValue != null) return defaultValue;
        value = this[_getDefault](this[_nonExtensionInfoByIndex](index));
      }
      let result = core.String._check(value);
      return result;
    }
    [_$getI64](index) {
      let value = this[_values][$_get](index);
      if (value == null) {
        value = this[_getDefault](this[_nonExtensionInfoByIndex](index));
      }
      let result = fixnum$.Int64._check(value);
      return result;
    }
    [_$has](index) {
      let value = this[_values][$_get](index);
      if (value == null) return false;
      if (core.List.is(value)) return value[$isNotEmpty];
      return true;
    }
    [_$set](index, value) {
      if (!!dart.test(this[_nonExtensionInfoByIndex](index).isRepeated)) dart.assertFailed();
      if (!dart.test(this[_$check](index, value))) dart.assertFailed();
      this[_ensureWritable]();
      if (value == null) {
        this[_$check](index, value);
      }
      if (dart.test(this[_hasObservers])) {
        this[_eventPlugin].beforeSetField(this[_nonExtensionInfoByIndex](index), value);
      }
      this[_values][$_set](index, value);
    }
    [_$check](index, newValue) {
      this[_validateField](this[_nonExtensionInfoByIndex](index), newValue);
      return true;
    }
    [_clear]() {
      this[_ensureWritable]();
      if (this[_unknownFields] != null) {
        this[_unknownFields].clear();
      }
      if (dart.test(this[_hasObservers])) {
        for (let fi of this[_infos]) {
          if (this[_values][$_get](fi.index) != null) {
            this[_eventPlugin].beforeClearField(fi);
          }
        }
        if (dart.test(this[_hasExtensions])) {
          for (let key of this[_extensions][_tagNumbers]) {
            let fi = this[_extensions][_getInfoOrNull](key);
            this[_eventPlugin].beforeClearField(fi);
          }
        }
      }
      if (dart.test(this[_values][$isNotEmpty])) this[_values][$fillRange](0, this[_values][$length], null);
      if (dart.test(this[_hasExtensions])) this[_extensions][_clearValues]();
    }
    [_equals](o) {
      if (!dart.equals(this[_meta], o[_meta])) return false;
      for (let i = 0; i < dart.notNull(this[_values][$length]); i++) {
        if (!dart.test(this[_equalFieldValues](this[_values][$_get](i), o[_values][$_get](i)))) return false;
      }
      if (!dart.test(this[_hasExtensions]) || !dart.dtest(this[_extensions][_hasValues])) {
        if (dart.test(o[_hasExtensions]) && dart.dtest(o[_extensions][_hasValues])) {
          return false;
        }
      } else {
        if (!dart.test(this[_extensions][_equalValues](o[_extensions]))) return false;
      }
      if (this[_unknownFields] == null || dart.test(this[_unknownFields].isEmpty)) {
        if (o[_unknownFields] != null && dart.test(o[_unknownFields].isNotEmpty)) return false;
      } else {
        if (!dart.equals(this[_unknownFields], o[_unknownFields])) return false;
      }
      return true;
    }
    [_equalFieldValues](left, right) {
      if (left != null && right != null) return protobuf._deepEquals(left, right);
      let val = left != null ? left : right;
      if (val == null) return true;
      if (core.List.is(val) && dart.test(val[$isEmpty])) return true;
      return false;
    }
    get [_hashCode]() {
      let hash = null;
      function hashEnumList(enums) {
        for (let enm of enums) {
          protobuf.ProtobufEnum._check(enm);
          hash = 536870911 & 31 * dart.notNull(hash) + dart.notNull(enm.value);
        }
      }
      dart.fn(hashEnumList, PbListBaseTovoid());
      function hashField(fi, value) {
        if (core.List.is(value) && dart.test(value[$isEmpty])) {
          return;
        }
        hash = 536870911 & 37 * dart.notNull(hash) + dart.notNull(fi.tagNumber);
        if (!dart.test(protobuf._isEnum(fi.type))) {
          hash = 536870911 & 53 * dart.notNull(hash) + dart.notNull(dart.hashCode(value));
        } else if (dart.test(fi.isRepeated)) {
          hashEnumList(protobuf.PbListBase._check(value));
        } else {
          let enm = protobuf.ProtobufEnum._check(value);
          hash = 536870911 & 53 * dart.notNull(hash) + dart.notNull(enm.value);
        }
      }
      dart.fn(hashField, FieldInfoAnddynamicTovoid());
      const hashEachField = (function() {
        for (let fi of this[_infosSortedByTag]) {
          let v = this[_values][$_get](fi.index);
          if (v != null) hashField(fi, v);
        }
        if (!dart.test(this[_hasExtensions])) return;
        for (let tagNumber of protobuf.sorted(core.int, this[_extensions][_tagNumbers])) {
          let fi = this[_extensions][_getInfoOrNull](tagNumber);
          hashField(fi, this[_extensions][_getFieldOrNull](fi));
        }
      }).bind(this);
      dart.fn(hashEachField, VoidTovoid());
      hash = 41;
      hash = 536870911 & 19 * dart.notNull(hash) + dart.notNull(dart.hashCode(this[_meta]));
      hashEachField();
      if (dart.test(this.hasUnknownFields)) {
        hash = 536870911 & 29 * dart.notNull(hash) + dart.notNull(dart.hashCode(this[_unknownFields]));
      }
      return hash;
    }
    writeString(out, indent) {
      function renderValue(key, value) {
        if (protobuf.GeneratedMessage.is(value)) {
          out.write(dart.str(indent) + dart.str(key) + ": {\n");
          value[_fieldSet].writeString(out, dart.str(indent) + "  ");
          out.write(dart.str(indent) + "}\n");
        } else {
          out.write(dart.str(indent) + dart.str(key) + ": " + dart.str(value) + "\n");
        }
      }
      dart.fn(renderValue, dynamicAnddynamicTovoid());
      for (let fi of this[_infosSortedByTag]) {
        let fieldValue = this[_values][$_get](fi.index);
        if (fieldValue == null) continue;
        if (typed_data.ByteData.is(fieldValue)) {
          let value = fieldValue[$getUint64](0, typed_data.Endian.little);
          renderValue(fi.name, value);
        } else if (core.List.is(fieldValue)) {
          for (let value of fieldValue) {
            renderValue(fi.name, value);
          }
        } else {
          renderValue(fi.name, fieldValue);
        }
      }
      if (dart.test(this.hasUnknownFields)) {
        out.write(dart.toString(this[_unknownFields]));
      } else {
        out.write(new protobuf.UnknownFieldSet.new().toString());
      }
    }
    [_mergeFromMessage](other) {
      for (let fi of other[_infosSortedByTag]) {
        let value = other[_values][$_get](fi.index);
        if (value != null) this[_mergeField](fi, value);
      }
      if (dart.test(other[_hasExtensions])) {
        let others = other[_extensions];
        for (let tagNumber of others[_tagNumbers]) {
          let extension = others[_getInfoOrNull](tagNumber);
          let value = others[_getFieldOrNull](extension);
          this[_mergeField](extension, value);
        }
      }
      if (dart.test(other.hasUnknownFields)) {
        this[_ensureUnknownFields]().mergeFromUnknownFieldSet(other[_unknownFields]);
      }
    }
    [_mergeField](otherFi, fieldValue) {
      let tagNumber = otherFi.tagNumber;
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi == null && protobuf.Extension.is(otherFi)) {
        fi = otherFi;
      }
      let mustClone = protobuf._isGroupOrMessage(otherFi.type);
      if (dart.test(fi.isRepeated)) {
        if (dart.test(mustClone)) {
          let pbList = PbListBaseOfGeneratedMessage()._check(fieldValue);
          let repeatedFields = fi[_ensureRepeatedField](this);
          for (let i = 0; i < dart.notNull(pbList.length); ++i) {
            repeatedFields[$add](protobuf._FieldSet._cloneMessage(pbList._get(i)));
          }
        } else {
          let pbList = protobuf.PbListBase._check(fieldValue);
          fi[_ensureRepeatedField](this)[$addAll](pbList);
        }
        return;
      }
      if (dart.test(mustClone)) {
        fieldValue = protobuf._FieldSet._cloneMessage(protobuf.GeneratedMessage._check(fieldValue));
      }
      if (fi.index == null) {
        this[_ensureExtensions]()[_setFieldAndInfo](protobuf.Extension._check(fi), fieldValue);
      } else {
        this[_validateField](fi, fieldValue);
        this[_setNonExtensionFieldUnchecked](fi, fieldValue);
      }
    }
    static _cloneMessage(message) {
      return message.clone();
    }
    [_validateField](fi, newValue) {
      this[_ensureWritable]();
      let message = protobuf._getFieldError(fi.type, newValue);
      if (message != null) {
        dart.throw(new core.ArgumentError.new(this[_setFieldFailedMessage](fi, newValue, message)));
      }
    }
    [_setFieldFailedMessage](fi, value, detail) {
      return "Illegal to set field " + dart.str(fi.name) + " (" + dart.str(fi.tagNumber) + ") of " + dart.str(this[_messageName]) + (" to value (" + dart.str(value) + "): " + dart.str(detail));
    }
    [_hasRequiredValues]() {
      if (!dart.test(this[_hasRequiredFields])) return true;
      for (let fi of this[_infos]) {
        let value = this[_values][$_get](fi.index);
        if (!dart.test(fi[_hasRequiredValues](value))) return false;
      }
      return this[_hasRequiredExtensionValues]();
    }
    [_hasRequiredExtensionValues]() {
      if (!dart.test(this[_hasExtensions])) return true;
      for (let fi of this[_extensions][_infos]) {
        let value = this[_extensions][_getFieldOrNull](fi);
        if (!dart.test(fi[_hasRequiredValues](value))) return false;
      }
      return true;
    }
    [_appendInvalidFields](problems, prefix) {
      if (!dart.test(this[_hasRequiredFields])) return;
      for (let fi of this[_infos]) {
        let value = this[_values][$_get](fi.index);
        fi[_appendInvalidFields](problems, value, prefix);
      }
    }
  };
  (protobuf._FieldSet.new = function(message, meta, eventPlugin) {
    this[_isReadOnly] = false;
    this[_extensions] = null;
    this[_unknownFields] = null;
    this[_message] = message;
    this[_eventPlugin] = eventPlugin;
    this[_meta] = meta;
    this[_values] = core.List._check(protobuf._FieldSet._makeValueList(meta.byIndex[$length]));
  }).prototype = protobuf._FieldSet.prototype;
  dart.addTypeTests(protobuf._FieldSet);
  dart.setMethodSignature(protobuf._FieldSet, () => ({
    __proto__: dart.getMethods(protobuf._FieldSet.__proto__),
    [_ensureExtensions]: dart.fnType(protobuf._ExtensionFieldSet, []),
    [_ensureUnknownFields]: dart.fnType(protobuf.UnknownFieldSet, []),
    [_nonExtensionInfo]: dart.fnType(protobuf.FieldInfo, [core.int]),
    [_nonExtensionInfoByIndex]: dart.fnType(protobuf.FieldInfo, [core.int]),
    [_ensureInfo]: dart.fnType(protobuf.FieldInfo, [core.int]),
    [_getFieldInfoOrNull]: dart.fnType(protobuf.FieldInfo, [core.int]),
    [_markReadOnly]: dart.fnType(dart.void, []),
    [_ensureWritable]: dart.fnType(dart.void, []),
    [_getField]: dart.fnType(dart.dynamic, [core.int]),
    [_getDefault]: dart.fnType(dart.dynamic, [protobuf.FieldInfo]),
    [_getDefaultList]: dart.gFnType(T => [core.List$(T), [protobuf.FieldInfo$(T)]]),
    [_getFieldOrNullByTag]: dart.fnType(dart.dynamic, [core.int]),
    [_getFieldOrNull]: dart.fnType(dart.dynamic, [protobuf.FieldInfo]),
    [_hasField]: dart.fnType(core.bool, [core.int]),
    [_clearField]: dart.fnType(dart.void, [core.int]),
    [_setField]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_setFieldUnchecked]: dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic]),
    [_ensureRepeatedField]: dart.gFnType(T => [core.List$(T), [protobuf.FieldInfo$(T)]]),
    [_setNonExtensionFieldUnchecked]: dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic]),
    [_$get]: dart.gFnType(T => [T, [core.int, T]]),
    [_$getN]: dart.gFnType(T => [T, [core.int]]),
    [_$getList]: dart.gFnType(T => [core.List$(T), [core.int]]),
    [_$getS]: dart.fnType(core.String, [core.int, core.String]),
    [_$getI64]: dart.fnType(fixnum$.Int64, [core.int]),
    [_$has]: dart.fnType(core.bool, [core.int]),
    [_$set]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_$check]: dart.fnType(core.bool, [core.int, dart.dynamic]),
    [_clear]: dart.fnType(dart.void, []),
    [_equals]: dart.fnType(core.bool, [protobuf._FieldSet]),
    [_equalFieldValues]: dart.fnType(core.bool, [dart.dynamic, dart.dynamic]),
    writeString: dart.fnType(dart.void, [core.StringBuffer, core.String]),
    [_mergeFromMessage]: dart.fnType(dart.void, [protobuf._FieldSet]),
    [_mergeField]: dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic]),
    [_validateField]: dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic]),
    [_setFieldFailedMessage]: dart.fnType(core.String, [protobuf.FieldInfo, dart.dynamic, core.String]),
    [_hasRequiredValues]: dart.fnType(core.bool, []),
    [_hasRequiredExtensionValues]: dart.fnType(core.bool, []),
    [_appendInvalidFields]: dart.fnType(dart.void, [core.List$(core.String), core.String])
  }));
  dart.setGetterSignature(protobuf._FieldSet, () => ({
    __proto__: dart.getGetters(protobuf._FieldSet.__proto__),
    [_messageName]: core.String,
    [_hasRequiredFields]: core.bool,
    [_infos]: core.Iterable$(protobuf.FieldInfo),
    [_infosSortedByTag]: core.Iterable$(protobuf.FieldInfo),
    [_hasObservers]: core.bool,
    [_hasExtensions]: core.bool,
    hasUnknownFields: core.bool,
    [_hashCode]: core.int
  }));
  dart.setFieldSignature(protobuf._FieldSet, () => ({
    __proto__: dart.getFields(protobuf._FieldSet.__proto__),
    [_message]: dart.finalFieldType(protobuf.GeneratedMessage),
    [_meta]: dart.finalFieldType(protobuf.BuilderInfo),
    [_eventPlugin]: dart.finalFieldType(protobuf.EventPlugin),
    [_isReadOnly]: dart.fieldType(core.bool),
    [_values]: dart.finalFieldType(core.List),
    [_extensions]: dart.fieldType(protobuf._ExtensionFieldSet),
    [_unknownFields]: dart.fieldType(protobuf.UnknownFieldSet)
  }));
  dart.defineLazy(protobuf._FieldSet, {
    /*protobuf._FieldSet._zeroList*/get _zeroList() {
      return core.List.new(0);
    },
    set _zeroList(_) {}
  });
  protobuf._isRepeated = function(fieldType) {
    return (dart.notNull(fieldType) & protobuf.PbFieldType._REPEATED_BIT) !== 0;
  };
  protobuf._isRequired = function(fieldType) {
    return (dart.notNull(fieldType) & protobuf.PbFieldType._REQUIRED_BIT) !== 0;
  };
  protobuf._isEnum = function(fieldType) {
    return protobuf.PbFieldType._baseType(fieldType) === protobuf.PbFieldType._ENUM_BIT;
  };
  protobuf._isGroupOrMessage = function(fieldType) {
    return (dart.notNull(fieldType) & (protobuf.PbFieldType._GROUP_BIT | protobuf.PbFieldType._MESSAGE_BIT)) !== 0;
  };
  protobuf.PbFieldType = class PbFieldType extends core.Object {
    static _baseType(fieldType) {
      return (dart.notNull(fieldType) & ~(1 | 2 | 4)) >>> 0;
    }
    static _defaultForType(type) {
      switch (type) {
        case 16:
        case 17:
        {
          return dart.fn(protobuf.PbFieldType._BOOL_FALSE, VoidTobool());
        }
        case 32:
        case 33:
        {
          return dart.fn(protobuf.PbFieldType._BYTES_EMPTY, VoidToListOfint());
        }
        case 64:
        case 65:
        {
          return dart.fn(protobuf.PbFieldType._STRING_EMPTY, VoidToString());
        }
        case 256:
        case 257:
        case 128:
        case 129:
        {
          return dart.fn(protobuf.PbFieldType._DOUBLE_ZERO, VoidTodouble());
        }
        case 2048:
        case 2049:
        case 4096:
        case 4097:
        case 8192:
        case 8193:
        case 16384:
        case 16385:
        case 32768:
        case 32769:
        case 65536:
        case 65537:
        case 131072:
        case 131073:
        case 262144:
        case 262145:
        case 524288:
        case 524289:
        case 1048576:
        case 1048577:
        {
          return dart.fn(protobuf.PbFieldType._INT_ZERO, VoidToint());
        }
        default:
        {
          return null;
        }
      }
    }
    static _STRING_EMPTY() {
      return "";
    }
    static _BYTES_EMPTY() {
      return new (PbListOfint()).new({check: dart.fn(protobuf._checkInt, ObjectTovoid())});
    }
    static _BOOL_FALSE() {
      return false;
    }
    static _INT_ZERO() {
      return 0;
    }
    static _DOUBLE_ZERO() {
      return 0.0;
    }
  };
  (protobuf.PbFieldType.new = function() {
  }).prototype = protobuf.PbFieldType.prototype;
  dart.addTypeTests(protobuf.PbFieldType);
  dart.defineLazy(protobuf.PbFieldType, {
    /*protobuf.PbFieldType._REQUIRED_BIT*/get _REQUIRED_BIT() {
      return 1;
    },
    /*protobuf.PbFieldType._REPEATED_BIT*/get _REPEATED_BIT() {
      return 2;
    },
    /*protobuf.PbFieldType._PACKED_BIT*/get _PACKED_BIT() {
      return 4;
    },
    /*protobuf.PbFieldType._BOOL_BIT*/get _BOOL_BIT() {
      return 16;
    },
    /*protobuf.PbFieldType._BYTES_BIT*/get _BYTES_BIT() {
      return 32;
    },
    /*protobuf.PbFieldType._STRING_BIT*/get _STRING_BIT() {
      return 64;
    },
    /*protobuf.PbFieldType._DOUBLE_BIT*/get _DOUBLE_BIT() {
      return 128;
    },
    /*protobuf.PbFieldType._FLOAT_BIT*/get _FLOAT_BIT() {
      return 256;
    },
    /*protobuf.PbFieldType._ENUM_BIT*/get _ENUM_BIT() {
      return 512;
    },
    /*protobuf.PbFieldType._GROUP_BIT*/get _GROUP_BIT() {
      return 1024;
    },
    /*protobuf.PbFieldType._INT32_BIT*/get _INT32_BIT() {
      return 2048;
    },
    /*protobuf.PbFieldType._INT64_BIT*/get _INT64_BIT() {
      return 4096;
    },
    /*protobuf.PbFieldType._SINT32_BIT*/get _SINT32_BIT() {
      return 8192;
    },
    /*protobuf.PbFieldType._SINT64_BIT*/get _SINT64_BIT() {
      return 16384;
    },
    /*protobuf.PbFieldType._UINT32_BIT*/get _UINT32_BIT() {
      return 32768;
    },
    /*protobuf.PbFieldType._UINT64_BIT*/get _UINT64_BIT() {
      return 65536;
    },
    /*protobuf.PbFieldType._FIXED32_BIT*/get _FIXED32_BIT() {
      return 131072;
    },
    /*protobuf.PbFieldType._FIXED64_BIT*/get _FIXED64_BIT() {
      return 262144;
    },
    /*protobuf.PbFieldType._SFIXED32_BIT*/get _SFIXED32_BIT() {
      return 524288;
    },
    /*protobuf.PbFieldType._SFIXED64_BIT*/get _SFIXED64_BIT() {
      return 1048576;
    },
    /*protobuf.PbFieldType._MESSAGE_BIT*/get _MESSAGE_BIT() {
      return 2097152;
    },
    /*protobuf.PbFieldType._OPTIONAL_BOOL*/get _OPTIONAL_BOOL() {
      return 16;
    },
    /*protobuf.PbFieldType._OPTIONAL_BYTES*/get _OPTIONAL_BYTES() {
      return 32;
    },
    /*protobuf.PbFieldType._OPTIONAL_STRING*/get _OPTIONAL_STRING() {
      return 64;
    },
    /*protobuf.PbFieldType._OPTIONAL_FLOAT*/get _OPTIONAL_FLOAT() {
      return 256;
    },
    /*protobuf.PbFieldType._OPTIONAL_DOUBLE*/get _OPTIONAL_DOUBLE() {
      return 128;
    },
    /*protobuf.PbFieldType._OPTIONAL_ENUM*/get _OPTIONAL_ENUM() {
      return 512;
    },
    /*protobuf.PbFieldType._OPTIONAL_GROUP*/get _OPTIONAL_GROUP() {
      return 1024;
    },
    /*protobuf.PbFieldType._OPTIONAL_INT32*/get _OPTIONAL_INT32() {
      return 2048;
    },
    /*protobuf.PbFieldType._OPTIONAL_INT64*/get _OPTIONAL_INT64() {
      return 4096;
    },
    /*protobuf.PbFieldType._OPTIONAL_SINT32*/get _OPTIONAL_SINT32() {
      return 8192;
    },
    /*protobuf.PbFieldType._OPTIONAL_SINT64*/get _OPTIONAL_SINT64() {
      return 16384;
    },
    /*protobuf.PbFieldType._OPTIONAL_UINT32*/get _OPTIONAL_UINT32() {
      return 32768;
    },
    /*protobuf.PbFieldType._OPTIONAL_UINT64*/get _OPTIONAL_UINT64() {
      return 65536;
    },
    /*protobuf.PbFieldType._OPTIONAL_FIXED32*/get _OPTIONAL_FIXED32() {
      return 131072;
    },
    /*protobuf.PbFieldType._OPTIONAL_FIXED64*/get _OPTIONAL_FIXED64() {
      return 262144;
    },
    /*protobuf.PbFieldType._OPTIONAL_SFIXED32*/get _OPTIONAL_SFIXED32() {
      return 524288;
    },
    /*protobuf.PbFieldType._OPTIONAL_SFIXED64*/get _OPTIONAL_SFIXED64() {
      return 1048576;
    },
    /*protobuf.PbFieldType._OPTIONAL_MESSAGE*/get _OPTIONAL_MESSAGE() {
      return 2097152;
    },
    /*protobuf.PbFieldType._REQUIRED_BOOL*/get _REQUIRED_BOOL() {
      return 1 | 16;
    },
    /*protobuf.PbFieldType._REQUIRED_BYTES*/get _REQUIRED_BYTES() {
      return 1 | 32;
    },
    /*protobuf.PbFieldType._REQUIRED_STRING*/get _REQUIRED_STRING() {
      return 1 | 64;
    },
    /*protobuf.PbFieldType._REQUIRED_FLOAT*/get _REQUIRED_FLOAT() {
      return 1 | 256;
    },
    /*protobuf.PbFieldType._REQUIRED_DOUBLE*/get _REQUIRED_DOUBLE() {
      return 1 | 128;
    },
    /*protobuf.PbFieldType._REQUIRED_ENUM*/get _REQUIRED_ENUM() {
      return 1 | 512;
    },
    /*protobuf.PbFieldType._REQUIRED_GROUP*/get _REQUIRED_GROUP() {
      return 1 | 1024;
    },
    /*protobuf.PbFieldType._REQUIRED_INT32*/get _REQUIRED_INT32() {
      return 1 | 2048;
    },
    /*protobuf.PbFieldType._REQUIRED_INT64*/get _REQUIRED_INT64() {
      return 1 | 4096;
    },
    /*protobuf.PbFieldType._REQUIRED_SINT32*/get _REQUIRED_SINT32() {
      return 1 | 8192;
    },
    /*protobuf.PbFieldType._REQUIRED_SINT64*/get _REQUIRED_SINT64() {
      return 1 | 16384;
    },
    /*protobuf.PbFieldType._REQUIRED_UINT32*/get _REQUIRED_UINT32() {
      return 1 | 32768;
    },
    /*protobuf.PbFieldType._REQUIRED_UINT64*/get _REQUIRED_UINT64() {
      return 1 | 65536;
    },
    /*protobuf.PbFieldType._REQUIRED_FIXED32*/get _REQUIRED_FIXED32() {
      return 1 | 131072;
    },
    /*protobuf.PbFieldType._REQUIRED_FIXED64*/get _REQUIRED_FIXED64() {
      return 1 | 262144;
    },
    /*protobuf.PbFieldType._REQUIRED_SFIXED32*/get _REQUIRED_SFIXED32() {
      return 1 | 524288;
    },
    /*protobuf.PbFieldType._REQUIRED_SFIXED64*/get _REQUIRED_SFIXED64() {
      return 1 | 1048576;
    },
    /*protobuf.PbFieldType._REQUIRED_MESSAGE*/get _REQUIRED_MESSAGE() {
      return 1 | 2097152;
    },
    /*protobuf.PbFieldType._REPEATED_BOOL*/get _REPEATED_BOOL() {
      return 2 | 16;
    },
    /*protobuf.PbFieldType._REPEATED_BYTES*/get _REPEATED_BYTES() {
      return 2 | 32;
    },
    /*protobuf.PbFieldType._REPEATED_STRING*/get _REPEATED_STRING() {
      return 2 | 64;
    },
    /*protobuf.PbFieldType._REPEATED_FLOAT*/get _REPEATED_FLOAT() {
      return 2 | 256;
    },
    /*protobuf.PbFieldType._REPEATED_DOUBLE*/get _REPEATED_DOUBLE() {
      return 2 | 128;
    },
    /*protobuf.PbFieldType._REPEATED_ENUM*/get _REPEATED_ENUM() {
      return 2 | 512;
    },
    /*protobuf.PbFieldType._REPEATED_GROUP*/get _REPEATED_GROUP() {
      return 2 | 1024;
    },
    /*protobuf.PbFieldType._REPEATED_INT32*/get _REPEATED_INT32() {
      return 2 | 2048;
    },
    /*protobuf.PbFieldType._REPEATED_INT64*/get _REPEATED_INT64() {
      return 2 | 4096;
    },
    /*protobuf.PbFieldType._REPEATED_SINT32*/get _REPEATED_SINT32() {
      return 2 | 8192;
    },
    /*protobuf.PbFieldType._REPEATED_SINT64*/get _REPEATED_SINT64() {
      return 2 | 16384;
    },
    /*protobuf.PbFieldType._REPEATED_UINT32*/get _REPEATED_UINT32() {
      return 2 | 32768;
    },
    /*protobuf.PbFieldType._REPEATED_UINT64*/get _REPEATED_UINT64() {
      return 2 | 65536;
    },
    /*protobuf.PbFieldType._REPEATED_FIXED32*/get _REPEATED_FIXED32() {
      return 2 | 131072;
    },
    /*protobuf.PbFieldType._REPEATED_FIXED64*/get _REPEATED_FIXED64() {
      return 2 | 262144;
    },
    /*protobuf.PbFieldType._REPEATED_SFIXED32*/get _REPEATED_SFIXED32() {
      return 2 | 524288;
    },
    /*protobuf.PbFieldType._REPEATED_SFIXED64*/get _REPEATED_SFIXED64() {
      return 2 | 1048576;
    },
    /*protobuf.PbFieldType._REPEATED_MESSAGE*/get _REPEATED_MESSAGE() {
      return 2 | 2097152;
    },
    /*protobuf.PbFieldType._PACKED_BOOL*/get _PACKED_BOOL() {
      return 2 | 4 | 16;
    },
    /*protobuf.PbFieldType._PACKED_FLOAT*/get _PACKED_FLOAT() {
      return 2 | 4 | 256;
    },
    /*protobuf.PbFieldType._PACKED_DOUBLE*/get _PACKED_DOUBLE() {
      return 2 | 4 | 128;
    },
    /*protobuf.PbFieldType._PACKED_ENUM*/get _PACKED_ENUM() {
      return 2 | 4 | 512;
    },
    /*protobuf.PbFieldType._PACKED_INT32*/get _PACKED_INT32() {
      return 2 | 4 | 2048;
    },
    /*protobuf.PbFieldType._PACKED_INT64*/get _PACKED_INT64() {
      return 2 | 4 | 4096;
    },
    /*protobuf.PbFieldType._PACKED_SINT32*/get _PACKED_SINT32() {
      return 2 | 4 | 8192;
    },
    /*protobuf.PbFieldType._PACKED_SINT64*/get _PACKED_SINT64() {
      return 2 | 4 | 16384;
    },
    /*protobuf.PbFieldType._PACKED_UINT32*/get _PACKED_UINT32() {
      return 2 | 4 | 32768;
    },
    /*protobuf.PbFieldType._PACKED_UINT64*/get _PACKED_UINT64() {
      return 2 | 4 | 65536;
    },
    /*protobuf.PbFieldType._PACKED_FIXED32*/get _PACKED_FIXED32() {
      return 2 | 4 | 131072;
    },
    /*protobuf.PbFieldType._PACKED_FIXED64*/get _PACKED_FIXED64() {
      return 2 | 4 | 262144;
    },
    /*protobuf.PbFieldType._PACKED_SFIXED32*/get _PACKED_SFIXED32() {
      return 2 | 4 | 524288;
    },
    /*protobuf.PbFieldType._PACKED_SFIXED64*/get _PACKED_SFIXED64() {
      return 2 | 4 | 1048576;
    },
    /*protobuf.PbFieldType.OB*/get OB() {
      return 16;
    },
    /*protobuf.PbFieldType.OY*/get OY() {
      return 32;
    },
    /*protobuf.PbFieldType.OS*/get OS() {
      return 64;
    },
    /*protobuf.PbFieldType.OF*/get OF() {
      return 256;
    },
    /*protobuf.PbFieldType.OD*/get OD() {
      return 128;
    },
    /*protobuf.PbFieldType.OE*/get OE() {
      return 512;
    },
    /*protobuf.PbFieldType.OG*/get OG() {
      return 1024;
    },
    /*protobuf.PbFieldType.O3*/get O3() {
      return 2048;
    },
    /*protobuf.PbFieldType.O6*/get O6() {
      return 4096;
    },
    /*protobuf.PbFieldType.OS3*/get OS3() {
      return 8192;
    },
    /*protobuf.PbFieldType.OS6*/get OS6() {
      return 16384;
    },
    /*protobuf.PbFieldType.OU3*/get OU3() {
      return 32768;
    },
    /*protobuf.PbFieldType.OU6*/get OU6() {
      return 65536;
    },
    /*protobuf.PbFieldType.OF3*/get OF3() {
      return 131072;
    },
    /*protobuf.PbFieldType.OF6*/get OF6() {
      return 262144;
    },
    /*protobuf.PbFieldType.OSF3*/get OSF3() {
      return 524288;
    },
    /*protobuf.PbFieldType.OSF6*/get OSF6() {
      return 1048576;
    },
    /*protobuf.PbFieldType.OM*/get OM() {
      return 2097152;
    },
    /*protobuf.PbFieldType.QB*/get QB() {
      return 17;
    },
    /*protobuf.PbFieldType.QY*/get QY() {
      return 33;
    },
    /*protobuf.PbFieldType.QS*/get QS() {
      return 65;
    },
    /*protobuf.PbFieldType.QF*/get QF() {
      return 257;
    },
    /*protobuf.PbFieldType.QD*/get QD() {
      return 129;
    },
    /*protobuf.PbFieldType.QE*/get QE() {
      return 513;
    },
    /*protobuf.PbFieldType.QG*/get QG() {
      return 1025;
    },
    /*protobuf.PbFieldType.Q3*/get Q3() {
      return 2049;
    },
    /*protobuf.PbFieldType.Q6*/get Q6() {
      return 4097;
    },
    /*protobuf.PbFieldType.QS3*/get QS3() {
      return 8193;
    },
    /*protobuf.PbFieldType.QS6*/get QS6() {
      return 16385;
    },
    /*protobuf.PbFieldType.QU3*/get QU3() {
      return 32769;
    },
    /*protobuf.PbFieldType.QU6*/get QU6() {
      return 65537;
    },
    /*protobuf.PbFieldType.QF3*/get QF3() {
      return 131073;
    },
    /*protobuf.PbFieldType.QF6*/get QF6() {
      return 262145;
    },
    /*protobuf.PbFieldType.QSF3*/get QSF3() {
      return 524289;
    },
    /*protobuf.PbFieldType.QSF6*/get QSF6() {
      return 1048577;
    },
    /*protobuf.PbFieldType.QM*/get QM() {
      return 2097153;
    },
    /*protobuf.PbFieldType.PB*/get PB() {
      return 18;
    },
    /*protobuf.PbFieldType.PY*/get PY() {
      return 34;
    },
    /*protobuf.PbFieldType.PS*/get PS() {
      return 66;
    },
    /*protobuf.PbFieldType.PF*/get PF() {
      return 258;
    },
    /*protobuf.PbFieldType.PD*/get PD() {
      return 130;
    },
    /*protobuf.PbFieldType.PE*/get PE() {
      return 514;
    },
    /*protobuf.PbFieldType.PG*/get PG() {
      return 1026;
    },
    /*protobuf.PbFieldType.P3*/get P3() {
      return 2050;
    },
    /*protobuf.PbFieldType.P6*/get P6() {
      return 4098;
    },
    /*protobuf.PbFieldType.PS3*/get PS3() {
      return 8194;
    },
    /*protobuf.PbFieldType.PS6*/get PS6() {
      return 16386;
    },
    /*protobuf.PbFieldType.PU3*/get PU3() {
      return 32770;
    },
    /*protobuf.PbFieldType.PU6*/get PU6() {
      return 65538;
    },
    /*protobuf.PbFieldType.PF3*/get PF3() {
      return 131074;
    },
    /*protobuf.PbFieldType.PF6*/get PF6() {
      return 262146;
    },
    /*protobuf.PbFieldType.PSF3*/get PSF3() {
      return 524290;
    },
    /*protobuf.PbFieldType.PSF6*/get PSF6() {
      return 1048578;
    },
    /*protobuf.PbFieldType.PM*/get PM() {
      return 2097154;
    },
    /*protobuf.PbFieldType.KB*/get KB() {
      return 22;
    },
    /*protobuf.PbFieldType.KE*/get KE() {
      return 518;
    },
    /*protobuf.PbFieldType.KF*/get KF() {
      return 262;
    },
    /*protobuf.PbFieldType.KD*/get KD() {
      return 134;
    },
    /*protobuf.PbFieldType.K3*/get K3() {
      return 2054;
    },
    /*protobuf.PbFieldType.K6*/get K6() {
      return 4102;
    },
    /*protobuf.PbFieldType.KS3*/get KS3() {
      return 8198;
    },
    /*protobuf.PbFieldType.KS6*/get KS6() {
      return 16390;
    },
    /*protobuf.PbFieldType.KU3*/get KU3() {
      return 32774;
    },
    /*protobuf.PbFieldType.KU6*/get KU6() {
      return 65542;
    },
    /*protobuf.PbFieldType.KF3*/get KF3() {
      return 131078;
    },
    /*protobuf.PbFieldType.KF6*/get KF6() {
      return 262150;
    },
    /*protobuf.PbFieldType.KSF3*/get KSF3() {
      return 524294;
    },
    /*protobuf.PbFieldType.KSF6*/get KSF6() {
      return 1048582;
    }
  });
  protobuf.CreateBuilderFunc = dart.typedef('CreateBuilderFunc', () => dart.fnType(protobuf.GeneratedMessage, []));
  protobuf.MakeDefaultFunc = dart.typedef('MakeDefaultFunc', () => dart.fnType(dart.dynamic, []));
  protobuf.ValueOfFunc = dart.typedef('ValueOfFunc', () => dart.fnType(protobuf.ProtobufEnum, [core.int]));
  protobuf.GeneratedMessage = class GeneratedMessage extends core.Object {
    get eventPlugin() {
      return null;
    }
    get unknownFields() {
      return this[_fieldSet][_ensureUnknownFields]();
    }
    freeze() {
      this[_fieldSet][_markReadOnly]();
      return this;
    }
    toBuilder() {
      return this.clone();
    }
    copyWith(updates) {
      let builder = this.toBuilder();
      updates(builder);
      return builder.freeze();
    }
    hasRequiredFields() {
      return this.info_.hasRequiredFields;
    }
    isInitialized() {
      return this[_fieldSet][_hasRequiredValues]();
    }
    clear() {
      return this[_fieldSet][_clear]();
    }
    getTagNumber(fieldName) {
      return this.info_.tagNumber(fieldName);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return protobuf.GeneratedMessage.is(other) ? this[_fieldSet][_equals](other[_fieldSet]) : false;
    }
    get hashCode() {
      return this[_fieldSet][_hashCode];
    }
    toString() {
      return this.toDebugString();
    }
    toDebugString() {
      let out = new core.StringBuffer.new();
      this[_fieldSet].writeString(out, "");
      return out.toString();
    }
    check() {
      if (!dart.test(this.isInitialized())) {
        let invalidFields = JSArrayOfString().of([]);
        this[_fieldSet][_appendInvalidFields](invalidFields, "");
        let missingFields = (() => {
          invalidFields[$sort]();
          return invalidFields;
        })()[$join](", ");
        dart.throw(new core.StateError.new("Message missing required fields: " + dart.str(missingFields)));
      }
    }
    writeToBuffer() {
      let out = new protobuf.CodedBufferWriter.new();
      this.writeToCodedBufferWriter(out);
      return out.toBuffer();
    }
    writeToCodedBufferWriter(output) {
      return protobuf._writeToCodedBufferWriter(this[_fieldSet], output);
    }
    mergeFromCodedBufferReader(input, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = protobuf.ExtensionRegistry.EMPTY;
      return protobuf._mergeFromCodedBufferReader(this[_fieldSet], input, extensionRegistry);
    }
    mergeFromBuffer(input, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = protobuf.ExtensionRegistry.EMPTY;
      let codedInput = new protobuf.CodedBufferReader.new(input);
      protobuf._mergeFromCodedBufferReader(this[_fieldSet], codedInput, extensionRegistry);
      codedInput.checkLastTagWas(0);
    }
    writeToJsonMap() {
      return protobuf._writeToJsonMap(this[_fieldSet]);
    }
    writeToJson() {
      return convert.jsonEncode(this.writeToJsonMap());
    }
    mergeFromJson(data, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = protobuf.ExtensionRegistry.EMPTY;
      let jsonMap = MapOfString$dynamic().as(convert.jsonDecode(data, {reviver: dart.fn(protobuf.GeneratedMessage._emptyReviver, dynamicAnddynamicTodynamic())}));
      protobuf._mergeFromJsonMap(this[_fieldSet], jsonMap, extensionRegistry);
    }
    static _emptyReviver(k, v) {
      return v;
    }
    mergeFromJsonMap(json, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = protobuf.ExtensionRegistry.EMPTY;
      protobuf._mergeFromJsonMap(this[_fieldSet], json, extensionRegistry);
    }
    addExtension(extension, value) {
      if (!dart.test(extension.isRepeated)) {
        dart.throw(new core.ArgumentError.new("Cannot add to a non-repeated field (use setExtension())"));
      }
      this[_fieldSet][_ensureExtensions]()[_ensureRepeatedField](dart.dynamic, extension)[$add](value);
    }
    clearExtension(extension) {
      if (dart.test(this[_fieldSet][_hasExtensions])) {
        this[_fieldSet][_extensions][_clearFieldAndInfo](extension);
      }
    }
    clearField(tagNumber) {
      return this[_fieldSet][_clearField](tagNumber);
    }
    extensionsAreInitialized() {
      return this[_fieldSet][_hasRequiredExtensionValues]();
    }
    getExtension(extension) {
      if (dart.test(this[_fieldSet][_isReadOnly])) return extension.readonlyDefault;
      return this[_fieldSet][_ensureExtensions]()[_getFieldOrDefault](extension);
    }
    getField(tagNumber) {
      return this[_fieldSet][_getField](tagNumber);
    }
    createRepeatedField(T, tagNumber, fi) {
      return new (protobuf.PbList$(T)).new({check: dart.fnType(dart.void, [T])._check(fi.check)});
    }
    getFieldOrNull(tagNumber) {
      return this[_fieldSet][_getFieldOrNullByTag](tagNumber);
    }
    getDefaultForField(tagNumber) {
      return this[_fieldSet][_ensureInfo](tagNumber).readonlyDefault;
    }
    hasExtension(extension) {
      return dart.test(this[_fieldSet][_hasExtensions]) && this[_fieldSet][_extensions][_getFieldOrNull](extension) != null;
    }
    hasField(tagNumber) {
      return this[_fieldSet][_hasField](tagNumber);
    }
    mergeFromMessage(other) {
      return this[_fieldSet][_mergeFromMessage](other[_fieldSet]);
    }
    mergeUnknownFields(unknownFieldSet) {
      return this[_fieldSet][_ensureUnknownFields]().mergeFromUnknownFieldSet(unknownFieldSet);
    }
    setExtension(extension, value) {
      if (value == null) dart.throw(new core.ArgumentError.new("value is null"));
      if (dart.test(protobuf._isRepeated(extension.type))) {
        dart.throw(new core.ArgumentError.new(this[_fieldSet][_setFieldFailedMessage](extension, value, "repeating field (use get + .add())")));
      }
      this[_fieldSet][_ensureExtensions]()[_setFieldAndInfo](extension, value);
    }
    setField(tagNumber, value) {
      this[_fieldSet][_setField](tagNumber, value);
      return;
      return;
    }
    $_get(T, index, defaultValue) {
      return this[_fieldSet][_$get](T, index, defaultValue);
    }
    $_getN(T, index) {
      if (this[_fieldSet] == null) {
        dart.throw(new core.StateError.new("Unable to access " + dart.str(index) + " in the proto message"));
      }
      return this[_fieldSet][_$getN](T, index);
    }
    $_getList(T, index) {
      return this[_fieldSet][_$getList](T, index);
    }
    $_getS(index, defaultValue) {
      return this[_fieldSet][_$getS](index, defaultValue);
    }
    $_getI64(index) {
      return this[_fieldSet][_$getI64](index);
    }
    $_has(index) {
      return this[_fieldSet][_$has](index);
    }
    $_setBool(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setBytes(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setString(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setFloat(index, value) {
      if (value == null || !dart.test(protobuf._isFloat32(value))) {
        this[_fieldSet][_$check](index, value);
      }
      this[_fieldSet][_$set](index, value);
    }
    $_setDouble(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setSignedInt32(index, value) {
      if (value == null || !dart.test(protobuf._isSigned32(value))) {
        this[_fieldSet][_$check](index, value);
      }
      this[_fieldSet][_$set](index, value);
    }
    $_setUnsignedInt32(index, value) {
      if (value == null || !dart.test(protobuf._isUnsigned32(value))) {
        this[_fieldSet][_$check](index, value);
      }
      this[_fieldSet][_$set](index, value);
    }
    $_setInt64(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
  };
  (protobuf.GeneratedMessage.new = function() {
    this[_fieldSet] = null;
    this[_fieldSet] = new protobuf._FieldSet.new(this, this.info_, this.eventPlugin);
    if (this.eventPlugin != null) this.eventPlugin.attach(this);
  }).prototype = protobuf.GeneratedMessage.prototype;
  (protobuf.GeneratedMessage.fromBuffer = function(input, extensionRegistry) {
    this[_fieldSet] = null;
    this[_fieldSet] = new protobuf._FieldSet.new(this, this.info_, this.eventPlugin);
    if (this.eventPlugin != null) this.eventPlugin.attach(this);
    this.mergeFromBuffer(input, extensionRegistry);
  }).prototype = protobuf.GeneratedMessage.prototype;
  (protobuf.GeneratedMessage.fromJson = function(input, extensionRegistry) {
    this[_fieldSet] = null;
    this[_fieldSet] = new protobuf._FieldSet.new(this, this.info_, this.eventPlugin);
    if (this.eventPlugin != null) this.eventPlugin.attach(this);
    this.mergeFromJson(input, extensionRegistry);
  }).prototype = protobuf.GeneratedMessage.prototype;
  dart.addTypeTests(protobuf.GeneratedMessage);
  dart.setMethodSignature(protobuf.GeneratedMessage, () => ({
    __proto__: dart.getMethods(protobuf.GeneratedMessage.__proto__),
    freeze: dart.fnType(protobuf.GeneratedMessage, []),
    toBuilder: dart.fnType(protobuf.GeneratedMessage, []),
    copyWith: dart.fnType(protobuf.GeneratedMessage, [dart.fnType(dart.void, [protobuf.GeneratedMessage])]),
    hasRequiredFields: dart.fnType(core.bool, []),
    isInitialized: dart.fnType(core.bool, []),
    clear: dart.fnType(dart.void, []),
    getTagNumber: dart.fnType(core.int, [core.String]),
    toDebugString: dart.fnType(core.String, []),
    check: dart.fnType(dart.void, []),
    writeToBuffer: dart.fnType(typed_data.Uint8List, []),
    writeToCodedBufferWriter: dart.fnType(dart.void, [protobuf.CodedBufferWriter]),
    mergeFromCodedBufferReader: dart.fnType(dart.void, [protobuf.CodedBufferReader], [protobuf.ExtensionRegistry]),
    mergeFromBuffer: dart.fnType(dart.void, [core.List$(core.int)], [protobuf.ExtensionRegistry]),
    writeToJsonMap: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    writeToJson: dart.fnType(core.String, []),
    mergeFromJson: dart.fnType(dart.void, [core.String], [protobuf.ExtensionRegistry]),
    mergeFromJsonMap: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)], [protobuf.ExtensionRegistry]),
    addExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    clearExtension: dart.fnType(dart.void, [protobuf.Extension]),
    clearField: dart.fnType(dart.void, [core.int]),
    extensionsAreInitialized: dart.fnType(core.bool, []),
    getExtension: dart.fnType(dart.dynamic, [protobuf.Extension]),
    getField: dart.fnType(dart.dynamic, [core.int]),
    createRepeatedField: dart.gFnType(T => [core.List$(T), [core.int, protobuf.FieldInfo$(T)]]),
    getFieldOrNull: dart.fnType(dart.dynamic, [core.int]),
    getDefaultForField: dart.fnType(dart.dynamic, [core.int]),
    hasExtension: dart.fnType(core.bool, [protobuf.Extension]),
    hasField: dart.fnType(core.bool, [core.int]),
    mergeFromMessage: dart.fnType(dart.void, [protobuf.GeneratedMessage]),
    mergeUnknownFields: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    setExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    setField: dart.fnType(dart.void, [core.int, dart.dynamic]),
    $_get: dart.gFnType(T => [T, [core.int, T]]),
    $_getN: dart.gFnType(T => [T, [core.int]]),
    $_getList: dart.gFnType(T => [core.List$(T), [core.int]]),
    $_getS: dart.fnType(core.String, [core.int, core.String]),
    $_getI64: dart.fnType(fixnum$.Int64, [core.int]),
    $_has: dart.fnType(core.bool, [core.int]),
    $_setBool: dart.fnType(dart.void, [core.int, core.bool]),
    $_setBytes: dart.fnType(dart.void, [core.int, core.List$(core.int)]),
    $_setString: dart.fnType(dart.void, [core.int, core.String]),
    $_setFloat: dart.fnType(dart.void, [core.int, core.double]),
    $_setDouble: dart.fnType(dart.void, [core.int, core.double]),
    $_setSignedInt32: dart.fnType(dart.void, [core.int, core.int]),
    $_setUnsignedInt32: dart.fnType(dart.void, [core.int, core.int]),
    $_setInt64: dart.fnType(dart.void, [core.int, fixnum$.Int64])
  }));
  dart.setGetterSignature(protobuf.GeneratedMessage, () => ({
    __proto__: dart.getGetters(protobuf.GeneratedMessage.__proto__),
    eventPlugin: protobuf.EventPlugin,
    unknownFields: protobuf.UnknownFieldSet
  }));
  dart.setFieldSignature(protobuf.GeneratedMessage, () => ({
    __proto__: dart.getFields(protobuf.GeneratedMessage.__proto__),
    [_fieldSet]: dart.fieldType(protobuf._FieldSet)
  }));
  dart.defineExtensionMethods(protobuf.GeneratedMessage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(protobuf.GeneratedMessage, ['hashCode']);
  protobuf.PackageName = class PackageName extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get prefix() {
      return this.name === "" ? "" : dart.str(this.name) + ".";
    }
  };
  (protobuf.PackageName.new = function(name) {
    this[name$] = name;
  }).prototype = protobuf.PackageName.prototype;
  dart.addTypeTests(protobuf.PackageName);
  const name$ = Symbol("PackageName.name");
  dart.setGetterSignature(protobuf.PackageName, () => ({
    __proto__: dart.getGetters(protobuf.PackageName.__proto__),
    prefix: core.String
  }));
  dart.setFieldSignature(protobuf.PackageName, () => ({
    __proto__: dart.getFields(protobuf.PackageName.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  protobuf.ServerContext = class ServerContext extends core.Object {};
  (protobuf.ServerContext.new = function() {
  }).prototype = protobuf.ServerContext.prototype;
  dart.addTypeTests(protobuf.ServerContext);
  protobuf.GeneratedService = class GeneratedService extends core.Object {};
  (protobuf.GeneratedService.new = function() {
  }).prototype = protobuf.GeneratedService.prototype;
  dart.addTypeTests(protobuf.GeneratedService);
  protobuf._writeToJsonMap = function(fs) {
    function convertToMap(fieldValue, fieldType) {
      let baseType = protobuf.PbFieldType._baseType(fieldType);
      if (dart.test(protobuf._isRepeated(fieldType))) {
        return core.List.from(core.Iterable._check(dart.dsend(fieldValue, 'map', [dart.fn(e => convertToMap(e, baseType), dynamicTodynamic())])));
      }
      switch (baseType) {
        case protobuf.PbFieldType._BOOL_BIT:
        case protobuf.PbFieldType._STRING_BIT:
        case protobuf.PbFieldType._FLOAT_BIT:
        case protobuf.PbFieldType._DOUBLE_BIT:
        case protobuf.PbFieldType._INT32_BIT:
        case protobuf.PbFieldType._SINT32_BIT:
        case protobuf.PbFieldType._UINT32_BIT:
        case protobuf.PbFieldType._FIXED32_BIT:
        case protobuf.PbFieldType._SFIXED32_BIT:
        {
          return fieldValue;
        }
        case protobuf.PbFieldType._BYTES_BIT:
        {
          return convert.base64Encode(ListOfint().as(fieldValue));
        }
        case protobuf.PbFieldType._ENUM_BIT:
        {
          return dart.dload(fieldValue, 'value');
        }
        case protobuf.PbFieldType._INT64_BIT:
        case protobuf.PbFieldType._SINT64_BIT:
        case protobuf.PbFieldType._UINT64_BIT:
        case protobuf.PbFieldType._FIXED64_BIT:
        case protobuf.PbFieldType._SFIXED64_BIT:
        {
          return dart.toString(fieldValue);
        }
        case protobuf.PbFieldType._GROUP_BIT:
        case protobuf.PbFieldType._MESSAGE_BIT:
        {
          return dart.dsend(fieldValue, 'writeToJsonMap', []);
        }
        default:
        {
          dart.throw("Unknown type " + dart.str(fieldType));
        }
      }
    }
    dart.fn(convertToMap, dynamicAndintTodynamic());
    let result = new (IdentityMapOfString$dynamic()).new();
    for (let fi of fs[_infosSortedByTag]) {
      let value = fs[_values][$_get](fi.index);
      if (value == null || core.List.is(value) && dart.test(value[$isEmpty])) {
        continue;
      }
      result[$_set](dart.str(fi.tagNumber), convertToMap(value, fi.type));
    }
    if (dart.test(fs[_hasExtensions])) {
      for (let tagNumber of protobuf.sorted(core.int, fs[_extensions][_tagNumbers])) {
        let value = fs[_extensions][_values][$_get](tagNumber);
        if (core.List.is(value) && dart.test(value[$isEmpty])) {
          continue;
        }
        let fi = fs[_extensions][_getInfoOrNull](tagNumber);
        result[$_set](dart.str(tagNumber), convertToMap(value, fi.type));
      }
    }
    return result;
  };
  protobuf._mergeFromJsonMap = function(fs, json, registry) {
    let keys = json[$keys];
    let meta = fs[_meta];
    for (let key of keys) {
      let fi = meta.byTagAsString[$_get](key);
      if (fi == null) {
        if (registry == null) continue;
        fi = registry.getExtension(fs[_messageName], core.int.parse(key));
        if (fi == null) continue;
      }
      if (dart.test(fi.isRepeated)) {
        protobuf._appendJsonList(fs, core.List._check(json[$_get](key)), fi, registry);
      } else {
        protobuf._setJsonField(fs, json[$_get](key), fi, registry);
      }
    }
  };
  protobuf._appendJsonList = function(fs, jsonList, fi, registry) {
    let repeated = fi[_ensureRepeatedField](fs);
    for (let i = 0, len = jsonList[$length]; i < dart.notNull(len); i++) {
      let value = jsonList[$_get](i);
      let convertedValue = protobuf._convertJsonValue(fs, value, fi.tagNumber, fi.type, registry);
      if (convertedValue != null) {
        repeated[$add](convertedValue);
      }
    }
  };
  protobuf._setJsonField = function(fs, json, fi, registry) {
    let value = protobuf._convertJsonValue(fs, json, fi.tagNumber, fi.type, registry);
    if (value == null) return;
    if (!dart.test(dart.fn(() => {
      fs[_validateField](fi, value);
      return true;
    }, VoidTobool())())) dart.assertFailed();
    fs[_setFieldUnchecked](fi, value);
  };
  protobuf._convertJsonValue = function(fs, value, tagNumber, fieldType, registry) {
    let expectedType = null;
    switch (protobuf.PbFieldType._baseType(fieldType)) {
      case protobuf.PbFieldType._BOOL_BIT:
      {
        if (typeof value == 'boolean') {
          return value;
        } else if (typeof value == 'string') {
          if (value === "true") {
            return true;
          } else if (value === "false") {
            return false;
          }
        } else if (typeof value == 'number') {
          if (value === 1) {
            return true;
          } else if (value === 0) {
            return false;
          }
        }
        expectedType = "bool (true, false, \"true\", \"false\", 1, 0)";
        break;
      }
      case protobuf.PbFieldType._BYTES_BIT:
      {
        if (typeof value == 'string') {
          return convert.base64Decode(value);
        }
        expectedType = "Base64 String";
        break;
      }
      case protobuf.PbFieldType._STRING_BIT:
      {
        if (typeof value == 'string') {
          return value;
        }
        expectedType = "String";
        break;
      }
      case protobuf.PbFieldType._FLOAT_BIT:
      case protobuf.PbFieldType._DOUBLE_BIT:
      {
        if (typeof value == 'number') {
          return value;
        } else if (typeof value == 'number') {
          return value[$toDouble]();
        } else if (typeof value == 'string') {
          return core.double.parse(value);
        }
        expectedType = "num or stringified num";
        break;
      }
      case protobuf.PbFieldType._ENUM_BIT:
      {
        if (typeof value == 'string') {
          value = core.int.parse(core.String._check(value));
        }
        if (core.int.is(value)) {
          return fs[_meta][_decodeEnum](tagNumber, registry, value);
        }
        expectedType = "int or stringified int";
        break;
      }
      case protobuf.PbFieldType._INT32_BIT:
      case protobuf.PbFieldType._SINT32_BIT:
      case protobuf.PbFieldType._UINT32_BIT:
      case protobuf.PbFieldType._FIXED32_BIT:
      case protobuf.PbFieldType._SFIXED32_BIT:
      {
        if (core.int.is(value)) return value;
        if (typeof value == 'string') return core.int.parse(value);
        expectedType = "int or stringified int";
        break;
      }
      case protobuf.PbFieldType._INT64_BIT:
      case protobuf.PbFieldType._SINT64_BIT:
      case protobuf.PbFieldType._UINT64_BIT:
      case protobuf.PbFieldType._FIXED64_BIT:
      case protobuf.PbFieldType._SFIXED64_BIT:
      {
        if (core.int.is(value)) return fixnum$.Int64.new(value);
        if (typeof value == 'string') return fixnum$.Int64.parseInt(value);
        expectedType = "int or stringified int";
        break;
      }
      case protobuf.PbFieldType._GROUP_BIT:
      case protobuf.PbFieldType._MESSAGE_BIT:
      {
        if (core.Map.is(value)) {
          let messageValue = MapOfString$dynamic()._check(value);
          let subMessage = fs[_meta][_makeEmptyMessage](tagNumber, registry);
          protobuf._mergeFromJsonMap(subMessage[_fieldSet], messageValue, registry);
          return subMessage;
        }
        expectedType = "nested message or group";
        break;
      }
      default:
      {
        dart.throw(new core.ArgumentError.new("Unknown type " + dart.str(fieldType)));
      }
    }
    dart.throw(new core.ArgumentError.new("Expected type " + dart.str(expectedType) + ", got " + dart.str(value)));
  };
  protobuf.CheckFunc$ = dart.generic(E => {
    const CheckFunc = dart.typedef('CheckFunc', () => dart.fnType(dart.void, [E]));
    return CheckFunc;
  });
  protobuf.CheckFunc = protobuf.CheckFunc$();
  const _wrappedList = Symbol('_wrappedList');
  const _unsupported = Symbol('_unsupported');
  const _validate = Symbol('_validate');
  const _is_PbListBase_default = Symbol('_is_PbListBase_default');
  protobuf.PbListBase$ = dart.generic(E => {
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let ETovoid = () => (ETovoid = dart.constFn(dart.fnType(dart.void, [E])))();
    class PbListBase extends collection.ListBase$(E) {
      get check() {
        return this[check$];
      }
      set check(value) {
        super.check = value;
      }
      _equals(other) {
        if (other == null) return false;
        return protobuf.PbListBase.is(other) && dart.test(protobuf._areListsEqual(other, this));
      }
      get hashCode() {
        let hash = 0;
        for (let value of this[_wrappedList]) {
          hash = 536870911 & hash + dart.notNull(dart.hashCode(value));
          hash = 536870911 & hash + ((524287 & hash) << 10);
          hash = (hash ^ hash[$rightShift](6)) >>> 0;
        }
        hash = 536870911 & hash + ((67108863 & hash) << 3);
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        return 536870911 & hash + ((16383 & hash) << 15);
      }
      get iterator() {
        return this[_wrappedList][$iterator];
      }
      map(T, f) {
        return this[_wrappedList][$map](T, f);
      }
      where(test) {
        return this[_wrappedList][$where](test);
      }
      expand(T, f) {
        return this[_wrappedList][$expand](T, f);
      }
      contains(element) {
        return this[_wrappedList][$contains](element);
      }
      forEach(f) {
        this[_wrappedList][$forEach](f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_wrappedList][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_wrappedList][$fold](T, initialValue, combine);
      }
      every(test) {
        return this[_wrappedList][$every](test);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_wrappedList][$join](separator);
      }
      any(test) {
        return this[_wrappedList][$any](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_wrappedList][$toList]({growable: growable});
      }
      toSet() {
        return this[_wrappedList][$toSet]();
      }
      get isEmpty() {
        return this[_wrappedList][$isEmpty];
      }
      get isNotEmpty() {
        return this[_wrappedList][$isNotEmpty];
      }
      take(count) {
        return this[_wrappedList][$take](count);
      }
      takeWhile(test) {
        return this[_wrappedList][$takeWhile](test);
      }
      skip(count) {
        return this[_wrappedList][$skip](count);
      }
      skipWhile(test) {
        return this[_wrappedList][$skipWhile](test);
      }
      get first() {
        return this[_wrappedList][$first];
      }
      set first(value) {
        super.first = value;
      }
      get last() {
        return this[_wrappedList][$last];
      }
      set last(value) {
        super.last = value;
      }
      get single() {
        return this[_wrappedList][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_wrappedList][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_wrappedList][$lastWhere](test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_wrappedList][$elementAt](index);
      }
      toString() {
        return dart.toString(this[_wrappedList]);
      }
      _get(index) {
        return this[_wrappedList][$_get](index);
      }
      get length() {
        return this[_wrappedList][$length];
      }
      indexOf(element, start) {
        if (start === void 0) start = 0;
        return this[_wrappedList][$indexOf](E._check(element), start);
      }
      lastIndexOf(element, start) {
        if (start === void 0) start = null;
        return this[_wrappedList][$lastIndexOf](E._check(element), start);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return this[_wrappedList][$sublist](start, end);
      }
      getRange(start, end) {
        return this[_wrappedList][$getRange](start, end);
      }
      asMap() {
        return this[_wrappedList][$asMap]();
      }
      _set(index, value) {
        E._check(value);
        this[_validate](value);
        this[_wrappedList][$_set](index, value);
        return value;
      }
      set length(newLength) {
        if (dart.notNull(newLength) > dart.notNull(this.length)) {
          dart.throw(new core.UnsupportedError.new("Extending protobuf lists is not supported"));
        }
        this[_wrappedList][$length] = newLength;
      }
      [_validate](val) {
        E._check(val);
        this.check(val);
        if (!E.is(val)) {
          dart.throw(new core.ArgumentError.new("Value (" + dart.str(val) + ") is not of the correct type"));
        }
      }
    }
    (PbListBase.__ = function(wrappedList, opts) {
      let check = opts && 'check' in opts ? opts.check : dart.fn(protobuf._checkNotNull, ObjectTovoid());
      this[_wrappedList] = wrappedList;
      this[check$] = check;
    }).prototype = PbListBase.prototype;
    (PbListBase._noList = function(opts) {
      let check = opts && 'check' in opts ? opts.check : dart.fn(protobuf._checkNotNull, ObjectTovoid());
      this[check$] = check;
      this[_wrappedList] = JSArrayOfE().of([]);
      if (!(this.check != null)) dart.assertFailed();
    }).prototype = PbListBase.prototype;
    (PbListBase._from = function(from) {
      this[_wrappedList] = ListOfE().from(from);
      this[check$] = dart.fn(protobuf._checkNotNull, ObjectTovoid());
    }).prototype = PbListBase.prototype;
    dart.addTypeTests(PbListBase);
    PbListBase.prototype[_is_PbListBase_default] = true;
    const check$ = Symbol("PbListBase.check");
    dart.setMethodSignature(PbListBase, () => ({
      __proto__: dart.getMethods(PbListBase.__proto__),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic]),
      reduce: dart.fnType(E, [core.Object]),
      [$reduce]: dart.fnType(E, [core.Object]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      [_validate]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(PbListBase, () => ({
      __proto__: dart.getGetters(PbListBase.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int,
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(PbListBase, () => ({
      __proto__: dart.getSetters(PbListBase.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setFieldSignature(PbListBase, () => ({
      __proto__: dart.getFields(PbListBase.__proto__),
      [_wrappedList]: dart.finalFieldType(ListOfE()),
      check: dart.finalFieldType(ETovoid())
    }));
    dart.defineExtensionMethods(PbListBase, [
      '_equals',
      'map',
      'where',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'every',
      'join',
      'any',
      'toList',
      'toSet',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'elementAt',
      'toString',
      '_get',
      'indexOf',
      'lastIndexOf',
      'sublist',
      'getRange',
      'asMap',
      '_set'
    ]);
    dart.defineExtensionAccessors(PbListBase, [
      'hashCode',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single',
      'length'
    ]);
    return PbListBase;
  });
  protobuf.PbListBase = protobuf.PbListBase$();
  dart.addTypeTests(protobuf.PbListBase, _is_PbListBase_default);
  const _is_FrozenPbList_default = Symbol('_is_FrozenPbList_default');
  protobuf.FrozenPbList$ = dart.generic(E => {
    let FrozenPbListOfE = () => (FrozenPbListOfE = dart.constFn(protobuf.FrozenPbList$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class FrozenPbList extends protobuf.PbListBase$(E) {
      static from(other) {
        return new (FrozenPbListOfE()).__(other[_wrappedList]);
      }
      [_unsupported](method) {
        return new core.UnsupportedError.new("Cannot call " + dart.str(method) + " on an unmodifiable list");
      }
      _set(index, value) {
        E._check(value);
        return dart.throw(this[_unsupported]("set"));
      }
      set length(newLength) {
        return dart.throw(this[_unsupported]("set length"));
      }
      get length() {
        return super.length;
      }
      setAll(at, iterable) {
        IterableOfE()._check(iterable);
        return dart.throw(this[_unsupported]("setAll"));
      }
      add(value) {
        E._check(value);
        return dart.throw(this[_unsupported]("add"));
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        return dart.throw(this[_unsupported]("addAll"));
      }
      insert(index, element) {
        E._check(element);
        return dart.throw(this[_unsupported]("insert"));
      }
      insertAll(at, iterable) {
        IterableOfE()._check(iterable);
        return dart.throw(this[_unsupported]("insertAll"));
      }
      remove(element) {
        return dart.throw(this[_unsupported]("remove"));
      }
      removeWhere(test) {
        return dart.throw(this[_unsupported]("removeWhere"));
      }
      retainWhere(test) {
        return dart.throw(this[_unsupported]("retainWhere"));
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        return dart.throw(this[_unsupported]("sort"));
      }
      shuffle(random) {
        if (random === void 0) random = null;
        return dart.throw(this[_unsupported]("shuffle"));
      }
      clear() {
        return dart.throw(this[_unsupported]("clear"));
      }
      removeAt(index) {
        return dart.throw(this[_unsupported]("removeAt"));
      }
      removeLast() {
        return dart.throw(this[_unsupported]("removeLast"));
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        return dart.throw(this[_unsupported]("setRange"));
      }
      removeRange(start, end) {
        return dart.throw(this[_unsupported]("removeRange"));
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        return dart.throw(this[_unsupported]("replaceRange"));
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        return dart.throw(this[_unsupported]("fillRange"));
      }
    }
    (FrozenPbList.__ = function(wrappedList) {
      FrozenPbList.__proto__.__.call(this, wrappedList);
    }).prototype = FrozenPbList.prototype;
    dart.addTypeTests(FrozenPbList);
    FrozenPbList.prototype[_is_FrozenPbList_default] = true;
    dart.setMethodSignature(FrozenPbList, () => ({
      __proto__: dart.getMethods(FrozenPbList.__proto__),
      [_unsupported]: dart.fnType(core.UnsupportedError, [core.String]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [core.Object])
    }));
    dart.defineExtensionMethods(FrozenPbList, [
      '_set',
      'setAll',
      'add',
      'addAll',
      'insert',
      'insertAll',
      'remove',
      'removeWhere',
      'retainWhere',
      'sort',
      'shuffle',
      'clear',
      'removeAt',
      'removeLast',
      'setRange',
      'removeRange',
      'replaceRange',
      'fillRange'
    ]);
    dart.defineExtensionAccessors(FrozenPbList, ['length']);
    return FrozenPbList;
  });
  protobuf.FrozenPbList = protobuf.FrozenPbList$();
  dart.addTypeTests(protobuf.FrozenPbList, _is_FrozenPbList_default);
  const _is_PbList_default = Symbol('_is_PbList_default');
  protobuf.PbList$ = dart.generic(E => {
    let ETovoid = () => (ETovoid = dart.constFn(dart.fnType(dart.void, [E])))();
    let FrozenPbListOfE = () => (FrozenPbListOfE = dart.constFn(protobuf.FrozenPbList$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class PbList extends protobuf.PbListBase$(E) {
      toFrozenPbList() {
        return FrozenPbListOfE().from(this);
      }
      add(value) {
        E._check(value);
        this[_validate](value);
        this[_wrappedList][$add](value);
      }
      addAll(collection) {
        IterableOfE()._check(collection);
        collection[$forEach](dart.bind(this, _validate));
        this[_wrappedList][$addAll](collection);
      }
      get reversed() {
        return this[_wrappedList][$reversed];
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        return this[_wrappedList][$sort](compare);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        return this[_wrappedList][$shuffle](random);
      }
      clear() {
        return this[_wrappedList][$clear]();
      }
      insert(index, element) {
        E._check(element);
        this[_validate](element);
        this[_wrappedList][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        iterable[$forEach](dart.bind(this, _validate));
        this[_wrappedList][$insertAll](index, iterable);
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        iterable[$forEach](dart.bind(this, _validate));
        this[_wrappedList][$setAll](index, iterable);
      }
      remove(value) {
        return this[_wrappedList][$remove](value);
      }
      removeAt(index) {
        return this[_wrappedList][$removeAt](index);
      }
      removeLast() {
        return this[_wrappedList][$removeLast]();
      }
      removeWhere(test) {
        return this[_wrappedList][$removeWhere](test);
      }
      retainWhere(test) {
        return this[_wrappedList][$retainWhere](test);
      }
      setRange(start, end, from, skipCount) {
        IterableOfE()._check(from);
        if (skipCount === void 0) skipCount = 0;
        from[$skip](skipCount)[$take](dart.notNull(end) - dart.notNull(start))[$forEach](dart.bind(this, _validate));
        this[_wrappedList][$setRange](start, end, from, skipCount);
      }
      removeRange(start, end) {
        return this[_wrappedList][$removeRange](start, end);
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        this[_validate](fillValue);
        this[_wrappedList][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, replacement) {
        IterableOfE()._check(replacement);
        let values = replacement[$toList]();
        replacement[$forEach](dart.bind(this, _validate));
        this[_wrappedList][$replaceRange](start, end, values);
      }
    }
    (PbList.new = function(opts) {
      let check = opts && 'check' in opts ? opts.check : dart.fn(protobuf._checkNotNull, ObjectTovoid());
      PbList.__proto__._noList.call(this, {check: ETovoid()._check(check)});
    }).prototype = PbList.prototype;
    (PbList.__ = function(wrappedList) {
      PbList.__proto__.__.call(this, wrappedList);
    }).prototype = PbList.prototype;
    (PbList.from = function(from) {
      PbList.__proto__._from.call(this, from);
    }).prototype = PbList.prototype;
    (PbList.forFieldType = function(fieldType) {
      PbList.__proto__._noList.call(this, {check: protobuf.getCheckFunction(fieldType)});
    }).prototype = PbList.prototype;
    dart.addTypeTests(PbList);
    PbList.prototype[_is_PbList_default] = true;
    dart.setMethodSignature(PbList, () => ({
      __proto__: dart.getMethods(PbList.__proto__),
      toFrozenPbList: dart.fnType(protobuf.FrozenPbList$(E), []),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object])
    }));
    dart.defineExtensionMethods(PbList, [
      'add',
      'addAll',
      'sort',
      'shuffle',
      'clear',
      'insert',
      'insertAll',
      'setAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'setRange',
      'removeRange',
      'fillRange',
      'replaceRange'
    ]);
    dart.defineExtensionAccessors(PbList, ['reversed']);
    return PbList;
  });
  protobuf.PbList = protobuf.PbList$();
  dart.addTypeTests(protobuf.PbList, _is_PbList_default);
  protobuf.ProtobufEnum = class ProtobufEnum extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    static initByValue(T, byIndex) {
      let byValue = new (_js_helper.IdentityMap$(core.int, T)).new();
      for (let v of byIndex) {
        byValue[$_set](v.value, v);
      }
      return byValue;
    }
    get hashCode() {
      return this.value;
    }
    toString() {
      return this.name;
    }
  };
  (protobuf.ProtobufEnum.new = function(value, name) {
    this[value$] = value;
    this[name$0] = name;
  }).prototype = protobuf.ProtobufEnum.prototype;
  dart.addTypeTests(protobuf.ProtobufEnum);
  const value$ = Symbol("ProtobufEnum.value");
  const name$0 = Symbol("ProtobufEnum.name");
  dart.setFieldSignature(protobuf.ProtobufEnum, () => ({
    __proto__: dart.getFields(protobuf.ProtobufEnum.__proto__),
    value: dart.finalFieldType(core.int),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(protobuf.ProtobufEnum, ['toString']);
  dart.defineExtensionAccessors(protobuf.ProtobufEnum, ['hashCode']);
  const _readonly = Symbol('_readonly');
  protobuf.ReadonlyMessageMixin = class ReadonlyMessageMixin extends core.Object {
    get [_isReadOnly]() {
      return true;
    }
    addExtension(extension, value) {
      return this[_readonly]("addExtension");
    }
    clear() {
      return this[_readonly]("clear");
    }
    clearExtension(extension) {
      return this[_readonly]("clearExtension");
    }
    clearField(tagNumber) {
      return this[_readonly]("clearField");
    }
    createRepeatedField(T, tagNumber, fi) {
      this[_readonly]("createRepeatedField");
      return null;
    }
    mergeFromBuffer(input, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = protobuf.ExtensionRegistry.EMPTY;
      return this[_readonly]("mergeFromBuffer");
    }
    mergeFromCodedBufferReader(input, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = protobuf.ExtensionRegistry.EMPTY;
      return this[_readonly]("mergeFromCodedBufferReader");
    }
    mergeFromJson(data, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = protobuf.ExtensionRegistry.EMPTY;
      return this[_readonly]("mergeFromJson");
    }
    mergeFromJsonMap(json, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = protobuf.ExtensionRegistry.EMPTY;
      return this[_readonly]("mergeFromJsonMap");
    }
    mergeFromMessage(other) {
      return this[_readonly]("mergeFromMessage");
    }
    mergeUnknownFields(unknownFieldSet) {
      return this[_readonly]("mergeUnknownFields");
    }
    setExtension(extension, value) {
      return this[_readonly]("setExtension");
    }
    setField(tagNumber, value, fieldType) {
      if (fieldType === void 0) fieldType = null;
      return this[_readonly]("setField");
    }
    [_readonly](methodName) {
      let messageType = this.info_.qualifiedMessageName;
      protobuf.frozenMessageModificationHandler(messageType, methodName);
    }
  };
  (protobuf.ReadonlyMessageMixin.new = function() {
  }).prototype = protobuf.ReadonlyMessageMixin.prototype;
  dart.addTypeTests(protobuf.ReadonlyMessageMixin);
  dart.setMethodSignature(protobuf.ReadonlyMessageMixin, () => ({
    __proto__: dart.getMethods(protobuf.ReadonlyMessageMixin.__proto__),
    addExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    clear: dart.fnType(dart.void, []),
    clearExtension: dart.fnType(dart.void, [protobuf.Extension]),
    clearField: dart.fnType(dart.void, [core.int]),
    createRepeatedField: dart.gFnType(T => [core.List$(T), [core.int, protobuf.FieldInfo$(T)]]),
    mergeFromBuffer: dart.fnType(dart.void, [core.List$(core.int)], [protobuf.ExtensionRegistry]),
    mergeFromCodedBufferReader: dart.fnType(dart.void, [protobuf.CodedBufferReader], [protobuf.ExtensionRegistry]),
    mergeFromJson: dart.fnType(dart.void, [core.String], [protobuf.ExtensionRegistry]),
    mergeFromJsonMap: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)], [protobuf.ExtensionRegistry]),
    mergeFromMessage: dart.fnType(dart.void, [protobuf.GeneratedMessage]),
    mergeUnknownFields: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    setExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    setField: dart.fnType(dart.void, [core.int, dart.dynamic], [core.int]),
    [_readonly]: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(protobuf.ReadonlyMessageMixin, () => ({
    __proto__: dart.getGetters(protobuf.ReadonlyMessageMixin.__proto__),
    [_isReadOnly]: core.bool
  }));
  const _fields = Symbol('_fields');
  const _checkFieldNumber = Symbol('_checkFieldNumber');
  const _toString = Symbol('_toString');
  protobuf.UnknownFieldSet = class UnknownFieldSet extends core.Object {
    clone() {
      return new protobuf.UnknownFieldSet._clone(this);
    }
    get isEmpty() {
      return this[_fields][$isEmpty];
    }
    get isNotEmpty() {
      return this[_fields][$isNotEmpty];
    }
    asMap() {
      return MapOfint$UnknownFieldSetField().from(this[_fields]);
    }
    clear() {
      this[_fields][$clear]();
    }
    getField(tagNumber) {
      return this[_fields][$_get](tagNumber);
    }
    hasField(tagNumber) {
      return this[_fields][$containsKey](tagNumber);
    }
    addField(number, field) {
      this[_checkFieldNumber](number);
      this[_fields][$_set](number, field);
    }
    mergeField(number, field) {
      let _ = this[_getField](number);
      _.varints[$addAll](field.varints);
      _.fixed32s[$addAll](field.fixed32s);
      _.fixed64s[$addAll](field.fixed64s);
      _.lengthDelimited[$addAll](field.lengthDelimited);
      _.groups[$addAll](field.groups);
    }
    mergeFieldFromBuffer(tag, input) {
      let number = protobuf.getTagFieldNumber(tag);
      switch (protobuf.getTagWireType(tag)) {
        case 0:
        {
          this.mergeVarintField(number, input.readInt64());
          return true;
        }
        case 1:
        {
          this.mergeFixed64Field(number, input.readFixed64());
          return true;
        }
        case 2:
        {
          this.mergeLengthDelimitedField(number, input.readBytes());
          return true;
        }
        case 3:
        {
          let subGroup = input.readUnknownFieldSetGroup(number);
          this.mergeGroupField(number, subGroup);
          return true;
        }
        case 4:
        {
          return false;
        }
        case 5:
        {
          this.mergeFixed32Field(number, input.readFixed32());
          return true;
        }
        default:
        {
          dart.throw(new protobuf.InvalidProtocolBufferException.invalidWireType());
        }
      }
    }
    mergeFromCodedBufferReader(input) {
      while (true) {
        let tag = input.readTag();
        if (tag === 0 || !dart.test(this.mergeFieldFromBuffer(tag, input))) {
          break;
        }
      }
    }
    mergeFromUnknownFieldSet(other) {
      for (let key of other[_fields][$keys]) {
        this.mergeField(key, other[_fields][$_get](key));
      }
    }
    [_checkFieldNumber](number) {
      if (number === 0) {
        dart.throw(new core.ArgumentError.new("Zero is not a valid field number."));
      }
    }
    mergeFixed32Field(number, value) {
      this[_getField](number).addFixed32(value);
    }
    mergeFixed64Field(number, value) {
      this[_getField](number).addFixed64(value);
    }
    mergeGroupField(number, value) {
      this[_getField](number).addGroup(value);
    }
    mergeLengthDelimitedField(number, value) {
      this[_getField](number).addLengthDelimited(value);
    }
    mergeVarintField(number, value) {
      this[_getField](number).addVarint(value);
    }
    [_getField](number) {
      this[_checkFieldNumber](number);
      return this[_fields][$putIfAbsent](number, dart.fn(() => new protobuf.UnknownFieldSetField.new(), VoidToUnknownFieldSetField()));
    }
    _equals(other) {
      if (other == null) return false;
      if (!protobuf.UnknownFieldSet.is(other)) return false;
      let o = protobuf.UnknownFieldSet._check(other);
      return protobuf._areMapsEqual(o[_fields], this[_fields]);
    }
    get hashCode() {
      let hash = 0;
      this[_fields][$forEach](dart.fn((number, value) => {
        hash = 536870911 & 37 * hash + dart.notNull(number);
        hash = 536870911 & 53 * hash + dart.notNull(dart.hashCode(value));
      }, intAndObjectToNull()));
      return hash;
    }
    toString() {
      return this[_toString]("");
    }
    [_toString](indent) {
      let stringBuffer = new core.StringBuffer.new();
      for (let tag of protobuf.sorted(core.int, this[_fields][$keys])) {
        let field = this[_fields][$_get](tag);
        for (let value of field.values) {
          if (protobuf.UnknownFieldSet.is(value)) {
            stringBuffer.write(dart.str(indent) + dart.str(tag) + ": {\n");
            stringBuffer.write(value[_toString](dart.str(indent) + "  "));
            stringBuffer.write(dart.str(indent) + "}\n");
          } else {
            if (typed_data.ByteData.is(value)) {
              value = dart.dsend(value, 'getUint64', [0, typed_data.Endian.little]);
            }
            stringBuffer.write(dart.str(indent) + dart.str(tag) + ": " + dart.str(value) + "\n");
          }
        }
      }
      return stringBuffer.toString();
    }
    writeToCodedBufferWriter(output) {
      for (let key of this[_fields][$keys]) {
        this[_fields][$_get](key).writeTo(key, output);
      }
    }
  };
  (protobuf.UnknownFieldSet.new = function() {
    this[_fields] = new (IdentityMapOfint$UnknownFieldSetField()).new();
  }).prototype = protobuf.UnknownFieldSet.prototype;
  (protobuf.UnknownFieldSet._clone = function(unknownFieldSet) {
    this[_fields] = new (IdentityMapOfint$UnknownFieldSetField()).new();
    this.mergeFromUnknownFieldSet(unknownFieldSet);
  }).prototype = protobuf.UnknownFieldSet.prototype;
  dart.addTypeTests(protobuf.UnknownFieldSet);
  dart.setMethodSignature(protobuf.UnknownFieldSet, () => ({
    __proto__: dart.getMethods(protobuf.UnknownFieldSet.__proto__),
    clone: dart.fnType(protobuf.UnknownFieldSet, []),
    asMap: dart.fnType(core.Map$(core.int, protobuf.UnknownFieldSetField), []),
    clear: dart.fnType(dart.void, []),
    getField: dart.fnType(protobuf.UnknownFieldSetField, [core.int]),
    hasField: dart.fnType(core.bool, [core.int]),
    addField: dart.fnType(dart.void, [core.int, protobuf.UnknownFieldSetField]),
    mergeField: dart.fnType(dart.void, [core.int, protobuf.UnknownFieldSetField]),
    mergeFieldFromBuffer: dart.fnType(core.bool, [core.int, protobuf.CodedBufferReader]),
    mergeFromCodedBufferReader: dart.fnType(dart.void, [protobuf.CodedBufferReader]),
    mergeFromUnknownFieldSet: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    [_checkFieldNumber]: dart.fnType(dart.dynamic, [core.int]),
    mergeFixed32Field: dart.fnType(dart.void, [core.int, core.int]),
    mergeFixed64Field: dart.fnType(dart.void, [core.int, fixnum$.Int64]),
    mergeGroupField: dart.fnType(dart.void, [core.int, protobuf.UnknownFieldSet]),
    mergeLengthDelimitedField: dart.fnType(dart.void, [core.int, core.List$(core.int)]),
    mergeVarintField: dart.fnType(dart.void, [core.int, fixnum$.Int64]),
    [_getField]: dart.fnType(protobuf.UnknownFieldSetField, [core.int]),
    [_toString]: dart.fnType(core.String, [core.String]),
    writeToCodedBufferWriter: dart.fnType(dart.void, [protobuf.CodedBufferWriter])
  }));
  dart.setGetterSignature(protobuf.UnknownFieldSet, () => ({
    __proto__: dart.getGetters(protobuf.UnknownFieldSet.__proto__),
    isEmpty: core.bool,
    isNotEmpty: core.bool
  }));
  dart.setFieldSignature(protobuf.UnknownFieldSet, () => ({
    __proto__: dart.getFields(protobuf.UnknownFieldSet.__proto__),
    [_fields]: dart.finalFieldType(MapOfint$UnknownFieldSetField())
  }));
  dart.defineExtensionMethods(protobuf.UnknownFieldSet, ['_equals', 'toString']);
  dart.defineExtensionAccessors(protobuf.UnknownFieldSet, ['hashCode']);
  protobuf._ReadonlyUnknownFieldSet = class _ReadonlyUnknownFieldSet extends protobuf.UnknownFieldSet {
    clear() {
      return this[_readonly]("clear");
    }
    addField(number, field) {
      return this[_readonly]("addField");
    }
    mergeField(number, field) {
      return this[_readonly]("mergeField");
    }
    mergeFieldFromBuffer(tag, input) {
      this[_readonly]("mergeFieldFromBuffer");
      return false;
    }
    mergeFromCodedBufferReader(input) {
      return this[_readonly]("mergeFromCodedBufferReader");
    }
    mergeFromUnknownFieldSet(other) {
      return this[_readonly]("mergeFromUnknownFieldSet");
    }
    [_getField](number) {
      this[_readonly]("a merge method");
      return null;
    }
    [_readonly](methodName) {
      protobuf.frozenMessageModificationHandler("UnknownFieldSet", methodName);
    }
  };
  (protobuf._ReadonlyUnknownFieldSet.new = function() {
    protobuf._ReadonlyUnknownFieldSet.__proto__.new.call(this);
  }).prototype = protobuf._ReadonlyUnknownFieldSet.prototype;
  dart.addTypeTests(protobuf._ReadonlyUnknownFieldSet);
  dart.setMethodSignature(protobuf._ReadonlyUnknownFieldSet, () => ({
    __proto__: dart.getMethods(protobuf._ReadonlyUnknownFieldSet.__proto__),
    [_readonly]: dart.fnType(dart.void, [core.String])
  }));
  dart.defineLazy(protobuf._ReadonlyUnknownFieldSet, {
    /*protobuf._ReadonlyUnknownFieldSet._empty*/get _empty() {
      return new protobuf._ReadonlyUnknownFieldSet.new();
    }
  });
  protobuf.ClientContext = class ClientContext extends core.Object {};
  (protobuf.ClientContext.new = function() {
  }).prototype = protobuf.ClientContext.prototype;
  dart.addTypeTests(protobuf.ClientContext);
  protobuf.RpcClient = class RpcClient extends core.Object {};
  (protobuf.RpcClient.new = function() {
  }).prototype = protobuf.RpcClient.prototype;
  dart.addTypeTests(protobuf.RpcClient);
  protobuf.UnknownFieldSetField = class UnknownFieldSetField extends core.Object {
    get lengthDelimited() {
      return this[lengthDelimited];
    }
    set lengthDelimited(value) {
      super.lengthDelimited = value;
    }
    get varints() {
      return this[varints];
    }
    set varints(value) {
      super.varints = value;
    }
    get fixed32s() {
      return this[fixed32s];
    }
    set fixed32s(value) {
      super.fixed32s = value;
    }
    get fixed64s() {
      return this[fixed64s];
    }
    set fixed64s(value) {
      super.fixed64s = value;
    }
    get groups() {
      return this[groups];
    }
    set groups(value) {
      super.groups = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!protobuf.UnknownFieldSetField.is(other)) return false;
      let o = protobuf.UnknownFieldSetField._check(other);
      if (this.lengthDelimited[$length] != o.lengthDelimited[$length]) return false;
      for (let i = 0; i < dart.notNull(this.lengthDelimited[$length]); i++) {
        if (!dart.test(protobuf._areListsEqual(o.lengthDelimited[$_get](i), this.lengthDelimited[$_get](i)))) {
          return false;
        }
      }
      if (!dart.test(protobuf._areListsEqual(o.varints, this.varints))) return false;
      if (!dart.test(protobuf._areListsEqual(o.fixed32s, this.fixed32s))) return false;
      if (!dart.test(protobuf._areListsEqual(o.fixed64s, this.fixed64s))) return false;
      if (!dart.test(protobuf._areListsEqual(o.groups, this.groups))) return false;
      return true;
    }
    get hashCode() {
      let hash = 0;
      for (let value of this.lengthDelimited) {
        for (let i = 0; i < dart.notNull(value[$length]); i++) {
          hash = 536870911 & hash + dart.notNull(value[$_get](i));
          hash = 536870911 & hash + ((524287 & hash) << 10);
          hash = (hash ^ hash[$rightShift](6)) >>> 0;
        }
        hash = 536870911 & hash + ((67108863 & hash) << 3);
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = 536870911 & hash + ((16383 & hash) << 15);
      }
      for (let value of this.varints) {
        hash = 536870911 & hash + 7 * dart.notNull(dart.hashCode(value));
      }
      for (let value of this.fixed32s) {
        hash = 536870911 & hash + 37 * dart.hashCode(value);
      }
      for (let value of this.fixed64s) {
        hash = 536870911 & hash + 53 * dart.notNull(dart.hashCode(value));
      }
      for (let value of this.groups) {
        hash = 536870911 & hash + dart.notNull(dart.hashCode(value));
      }
      return hash;
    }
    get values() {
      let _ = [];
      _[$addAll](this.lengthDelimited);
      _[$addAll](this.varints);
      _[$addAll](this.fixed32s);
      _[$addAll](this.fixed64s);
      _[$addAll](this.groups);
      return _;
    }
    writeTo(fieldNumber, output) {
      function write(type, value) {
        output.writeField(fieldNumber, core.int._check(type), value);
      }
      dart.fn(write, dynamicAnddynamicToNull());
      write(protobuf.PbFieldType._REPEATED_UINT64, this.varints);
      write(protobuf.PbFieldType._REPEATED_FIXED32, this.fixed32s);
      write(protobuf.PbFieldType._REPEATED_FIXED64, this.fixed64s);
      write(protobuf.PbFieldType._REPEATED_BYTES, this.lengthDelimited);
      write(protobuf.PbFieldType._REPEATED_GROUP, this.groups);
    }
    addGroup(value) {
      this.groups[$add](value);
    }
    addLengthDelimited(value) {
      this.lengthDelimited[$add](value);
    }
    addFixed32(value) {
      this.fixed32s[$add](value);
    }
    addFixed64(value) {
      this.fixed64s[$add](value);
    }
    addVarint(value) {
      this.varints[$add](value);
    }
    hasRequiredFields() {
      return false;
    }
    isInitialized() {
      return true;
    }
    get length() {
      return this.values[$length];
    }
  };
  (protobuf.UnknownFieldSetField.new = function() {
    this[lengthDelimited] = JSArrayOfListOfint().of([]);
    this[varints] = JSArrayOfInt64().of([]);
    this[fixed32s] = JSArrayOfint().of([]);
    this[fixed64s] = JSArrayOfInt64().of([]);
    this[groups] = JSArrayOfUnknownFieldSet().of([]);
  }).prototype = protobuf.UnknownFieldSetField.prototype;
  dart.addTypeTests(protobuf.UnknownFieldSetField);
  const lengthDelimited = Symbol("UnknownFieldSetField.lengthDelimited");
  const varints = Symbol("UnknownFieldSetField.varints");
  const fixed32s = Symbol("UnknownFieldSetField.fixed32s");
  const fixed64s = Symbol("UnknownFieldSetField.fixed64s");
  const groups = Symbol("UnknownFieldSetField.groups");
  dart.setMethodSignature(protobuf.UnknownFieldSetField, () => ({
    __proto__: dart.getMethods(protobuf.UnknownFieldSetField.__proto__),
    writeTo: dart.fnType(dart.void, [core.int, protobuf.CodedBufferWriter]),
    addGroup: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    addLengthDelimited: dart.fnType(dart.void, [core.List$(core.int)]),
    addFixed32: dart.fnType(dart.void, [core.int]),
    addFixed64: dart.fnType(dart.void, [fixnum$.Int64]),
    addVarint: dart.fnType(dart.void, [fixnum$.Int64]),
    hasRequiredFields: dart.fnType(core.bool, []),
    isInitialized: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(protobuf.UnknownFieldSetField, () => ({
    __proto__: dart.getGetters(protobuf.UnknownFieldSetField.__proto__),
    values: core.List,
    length: core.int
  }));
  dart.setFieldSignature(protobuf.UnknownFieldSetField, () => ({
    __proto__: dart.getFields(protobuf.UnknownFieldSetField.__proto__),
    lengthDelimited: dart.finalFieldType(ListOfListOfint()),
    varints: dart.finalFieldType(ListOfInt64()),
    fixed32s: dart.finalFieldType(ListOfint()),
    fixed64s: dart.finalFieldType(ListOfInt64()),
    groups: dart.finalFieldType(ListOfUnknownFieldSet())
  }));
  dart.defineExtensionMethods(protobuf.UnknownFieldSetField, ['_equals']);
  dart.defineExtensionAccessors(protobuf.UnknownFieldSetField, ['hashCode']);
  protobuf._deepEquals = function(lhs, rhs) {
    if (protobuf.GeneratedMessage.is(lhs)) return dart.equals(lhs, rhs);
    if (protobuf.GeneratedMessage.is(rhs)) return false;
    if (core.List.is(lhs) && core.List.is(rhs)) return protobuf._areListsEqual(lhs, rhs);
    if (core.Map.is(lhs) && core.Map.is(rhs)) return protobuf._areMapsEqual(lhs, rhs);
    if (typed_data.ByteData.is(lhs) && typed_data.ByteData.is(rhs)) {
      return protobuf._areByteDataEqual(lhs, rhs);
    }
    return dart.equals(lhs, rhs);
  };
  protobuf._areListsEqual = function(lhs, rhs) {
    if (lhs[$length] != rhs[$length]) return false;
    for (let i = 0; i < dart.notNull(lhs[$length]); i++) {
      if (!dart.test(protobuf._deepEquals(lhs[$_get](i), rhs[$_get](i)))) return false;
    }
    return true;
  };
  protobuf._areMapsEqual = function(lhs, rhs) {
    if (lhs[$length] != rhs[$length]) return false;
    return lhs[$keys][$every](dart.fn(key => protobuf._deepEquals(lhs[$_get](key), rhs[$_get](key)), dynamicTobool()));
  };
  protobuf._areByteDataEqual = function(lhs, rhs) {
    function asBytes(d) {
      return typed_data.Uint8List.view(typed_data.ByteBuffer._check(dart.dload(d, 'buffer')), core.int._check(dart.dload(d, 'offsetInBytes')), core.int._check(dart.dload(d, 'lengthInBytes')));
    }
    dart.fn(asBytes, dynamicToUint8List());
    return protobuf._areListsEqual(asBytes(lhs), asBytes(rhs));
  };
  protobuf.sorted = function(T, list) {
    let _ = core.List$(T).from(list);
    _[$sort]();
    return _;
  };
  protobuf.unpackIntoHelper = function(T, value, instance, typeUrl, opts) {
    let extensionRegistry = opts && 'extensionRegistry' in opts ? opts.extensionRegistry : protobuf.ExtensionRegistry.EMPTY;
    if (!dart.test(protobuf.canUnpackIntoHelper(instance, typeUrl))) {
      let typeName = instance.info_.qualifiedMessageName;
      dart.throw(new protobuf.InvalidProtocolBufferException.wrongAnyMessage(protobuf._typeNameFromUrl(typeUrl), typeName));
    }
    instance.mergeFromBuffer(value, extensionRegistry);
  };
  protobuf.canUnpackIntoHelper = function(instance, typeUrl) {
    return instance.info_.qualifiedMessageName == protobuf._typeNameFromUrl(typeUrl);
  };
  protobuf._typeNameFromUrl = function(typeUrl) {
    let index = typeUrl[$lastIndexOf]("/");
    return index === -1 ? "" : typeUrl[$substring](index + 1);
  };
  dart.defineLazy(protobuf, {
    /*protobuf.TAG_TYPE_BITS*/get TAG_TYPE_BITS() {
      return 3;
    },
    /*protobuf.TAG_TYPE_MASK*/get TAG_TYPE_MASK() {
      return (1 << 3) - 1;
    },
    /*protobuf.WIRETYPE_VARINT*/get WIRETYPE_VARINT() {
      return 0;
    },
    /*protobuf.WIRETYPE_FIXED64*/get WIRETYPE_FIXED64() {
      return 1;
    },
    /*protobuf.WIRETYPE_LENGTH_DELIMITED*/get WIRETYPE_LENGTH_DELIMITED() {
      return 2;
    },
    /*protobuf.WIRETYPE_START_GROUP*/get WIRETYPE_START_GROUP() {
      return 3;
    },
    /*protobuf.WIRETYPE_END_GROUP*/get WIRETYPE_END_GROUP() {
      return 4;
    },
    /*protobuf.WIRETYPE_FIXED32*/get WIRETYPE_FIXED32() {
      return 5;
    }
  });
  protobuf.getTagFieldNumber = function(tag) {
    return (dart.notNull(tag) & 2147483647) >>> 3;
  };
  protobuf.getTagWireType = function(tag) {
    return dart.notNull(tag) & 7;
  };
  protobuf.makeTag = function(fieldNumber, tag) {
    return (dart.notNull(fieldNumber) << 3 | dart.notNull(tag)) >>> 0;
  };
  protobuf._wireTypeMatches = function(fieldType, wireType) {
    switch (protobuf.PbFieldType._baseType(fieldType)) {
      case protobuf.PbFieldType._BOOL_BIT:
      case protobuf.PbFieldType._ENUM_BIT:
      case protobuf.PbFieldType._INT32_BIT:
      case protobuf.PbFieldType._INT64_BIT:
      case protobuf.PbFieldType._SINT32_BIT:
      case protobuf.PbFieldType._SINT64_BIT:
      case protobuf.PbFieldType._UINT32_BIT:
      case protobuf.PbFieldType._UINT64_BIT:
      {
        return wireType === 0 || wireType === 2;
      }
      case protobuf.PbFieldType._FLOAT_BIT:
      case protobuf.PbFieldType._FIXED32_BIT:
      case protobuf.PbFieldType._SFIXED32_BIT:
      {
        return wireType === 5 || wireType === 2;
      }
      case protobuf.PbFieldType._DOUBLE_BIT:
      case protobuf.PbFieldType._FIXED64_BIT:
      case protobuf.PbFieldType._SFIXED64_BIT:
      {
        return wireType === 1 || wireType === 2;
      }
      case protobuf.PbFieldType._BYTES_BIT:
      case protobuf.PbFieldType._STRING_BIT:
      case protobuf.PbFieldType._MESSAGE_BIT:
      {
        return wireType === 2;
      }
      case protobuf.PbFieldType._GROUP_BIT:
      {
        return wireType === 3;
      }
      default:
      {
        return false;
      }
    }
  };
  dart.trackLibraries("packages/protobuf/protobuf.ddc", {
    "package:protobuf/protobuf.dart": protobuf
  }, '{"version":3,"sourceRoot":"","sources":["protobuf.dart","src/protobuf/coded_buffer.dart","src/protobuf/coded_buffer_reader.dart","src/protobuf/coded_buffer_writer.dart","src/protobuf/builder_info.dart","src/protobuf/event_plugin.dart","src/protobuf/exceptions.dart","src/protobuf/field_info.dart","src/protobuf/extension.dart","src/protobuf/extension_field_set.dart","src/protobuf/extension_registry.dart","src/protobuf/field_error.dart","src/protobuf/field_set.dart","src/protobuf/field_type.dart","src/protobuf/generated_message.dart","src/protobuf/generated_service.dart","src/protobuf/json.dart","src/protobuf/pb_list.dart","src/protobuf/protobuf_enum.dart","src/protobuf/readonly_message.dart","src/protobuf/unknown_field_set.dart","src/protobuf/rpc_client.dart","src/protobuf/utils.dart","src/protobuf/unpack.dart","src/protobuf/wire_format.dart"],"names":[],"mappings":"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","file":"protobuf.ddc.js"}');
  // Exports:
  return {
    protobuf: protobuf
  };
});

//# sourceMappingURL=protobuf.ddc.js.map
