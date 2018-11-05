define(['dart_sdk', 'packages/fvm/virtual_machine'], function(dart_sdk, virtual_machine) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const virtual_machine$ = virtual_machine.virtual_machine;
  const _root = Object.create(null);
  const components__tagged_object_components = Object.create(_root);
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let ListOfNull = () => (ListOfNull = dart.constFn(core.List$(core.Null)))();
  const _object = Symbol('_object');
  const _is_TaggedObjectComponent_default = Symbol('_is_TaggedObjectComponent_default');
  components__tagged_object_components.TaggedObjectComponent$ = dart.generic(T => {
    class TaggedObjectComponent extends core.Object {
      set object(object) {
        T._check(object);
        this[_object] = object;
        this.padding = ListOfNull().generate(object.padding, dart.fn(_ => null, intToNull()));
      }
      get object() {
        return this[_object];
      }
      get padding() {
        return this[padding];
      }
      set padding(value) {
        this[padding] = value;
      }
    }
    (TaggedObjectComponent.new = function() {
      this[_object] = null;
      this[padding] = null;
    }).prototype = TaggedObjectComponent.prototype;
    dart.addTypeTests(TaggedObjectComponent);
    TaggedObjectComponent.prototype[_is_TaggedObjectComponent_default] = true;
    const padding = Symbol("TaggedObjectComponent.padding");
    dart.setGetterSignature(TaggedObjectComponent, () => ({
      __proto__: dart.getGetters(TaggedObjectComponent.__proto__),
      object: T
    }));
    dart.setSetterSignature(TaggedObjectComponent, () => ({
      __proto__: dart.getSetters(TaggedObjectComponent.__proto__),
      object: T
    }));
    dart.setFieldSignature(TaggedObjectComponent, () => ({
      __proto__: dart.getFields(TaggedObjectComponent.__proto__),
      [_object]: dart.fieldType(T),
      padding: dart.fieldType(ListOfNull())
    }));
    return TaggedObjectComponent;
  });
  components__tagged_object_components.TaggedObjectComponent = components__tagged_object_components.TaggedObjectComponent$();
  dart.addTypeTests(components__tagged_object_components.TaggedObjectComponent, _is_TaggedObjectComponent_default);
  components__tagged_object_components.TaggedClosureComponent = class TaggedClosureComponent extends components__tagged_object_components.TaggedObjectComponent$(virtual_machine$.TaggedClosure) {};
  (components__tagged_object_components.TaggedClosureComponent.new = function() {
    components__tagged_object_components.TaggedClosureComponent.__proto__.new.call(this);
  }).prototype = components__tagged_object_components.TaggedClosureComponent.prototype;
  dart.addTypeTests(components__tagged_object_components.TaggedClosureComponent);
  components__tagged_object_components.TaggedFunctionComponent = class TaggedFunctionComponent extends components__tagged_object_components.TaggedObjectComponent$(virtual_machine$.TaggedFunction) {};
  (components__tagged_object_components.TaggedFunctionComponent.new = function() {
    components__tagged_object_components.TaggedFunctionComponent.__proto__.new.call(this);
  }).prototype = components__tagged_object_components.TaggedFunctionComponent.prototype;
  dart.addTypeTests(components__tagged_object_components.TaggedFunctionComponent);
  components__tagged_object_components.TaggedIntComponent = class TaggedIntComponent extends components__tagged_object_components.TaggedObjectComponent$(virtual_machine$.TaggedInt) {};
  (components__tagged_object_components.TaggedIntComponent.new = function() {
    components__tagged_object_components.TaggedIntComponent.__proto__.new.call(this);
  }).prototype = components__tagged_object_components.TaggedIntComponent.prototype;
  dart.addTypeTests(components__tagged_object_components.TaggedIntComponent);
  components__tagged_object_components.TaggedListComponent = class TaggedListComponent extends components__tagged_object_components.TaggedObjectComponent$(virtual_machine$.TaggedList) {};
  (components__tagged_object_components.TaggedListComponent.new = function() {
    components__tagged_object_components.TaggedListComponent.__proto__.new.call(this);
  }).prototype = components__tagged_object_components.TaggedListComponent.prototype;
  dart.addTypeTests(components__tagged_object_components.TaggedListComponent);
  dart.trackLibraries("packages/fvm/components/tagged_object_components.ddc", {
    "package:fvm/components/tagged_object_components.dart": components__tagged_object_components
  }, '{"version":3,"sourceRoot":"","sources":["tagged_object_components.dart"],"names":[],"mappings":";;;;;;;;;;;;;;iBAKa,MAAQ;iBAAN;AACX,qBAAO,GAAG,MAAM;AAChB,oBAAO,GAAG,qBAAa,CAAC,MAAM,QAAQ,EAAE,QAAC,CAAC,IAAK;MACjD;;cAEgB,cAAO;;MAGZ;;;;;;;;MAFT,aAAO;MAEE,aAAO;IACpB;;;;;;;;;;;;;;;;;;;;;;;;EAa2E;;;;;EAcE;;;;;EAYV;;;;;EAgBE","file":"tagged_object_components.ddc.js"}');
  // Exports:
  return {
    components__tagged_object_components: components__tagged_object_components
  };
});

//# sourceMappingURL=tagged_object_components.ddc.js.map
