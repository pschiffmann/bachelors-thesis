define(['dart_sdk', 'packages/fvm/assembly_parser', 'packages/fvm/virtual_machine', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, assembly_parser, virtual_machine, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assembly_parser$ = assembly_parser.assembly_parser;
  const virtual_machine$ = virtual_machine.virtual_machine;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const components__app_component = Object.create(_root);
  const $add = dartx.add;
  const $clear = dartx.clear;
  const $isEmpty = dartx.isEmpty;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringAndintTovoid = () => (StringAndintTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.int])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  dart.defineLazy(components__app_component, {
    /*components__app_component.defaultMaxAddress*/get defaultMaxAddress() {
      return 255;
    },
    /*components__app_component.exampleProgram*/get exampleProgram() {
      return "dummy 2,\nmkV 0, mkF ADD, jump B, ADD: testArg 2, pushL 0, getB, pushL -1, getB, add, mkB, return 2, B:\nrewrite 2,\npushL 1, mkV 1, mkF ADD2, jump C,\nADD2: testArg 1, mark D, loadc 2, mkB, pushL 0, setSP0, pushG 0, apply, D: return 1,\nC: rewrite 1,\nmark RET, loadc 3, mkB, setSP0, pushL 2, apply, RET:\nslide 2 1,\nhalt\n";
    }
  });
  components__app_component.AppComponent = class AppComponent extends core.Object {
    get mode() {
      return this[mode];
    }
    set mode(value) {
      this[mode] = value;
    }
    get vm() {
      return this[vm];
    }
    set vm(value) {
      this[vm] = value;
    }
    get maxAddress() {
      return this[maxAddress];
    }
    set maxAddress(value) {
      this[maxAddress] = value;
    }
    get editorInput() {
      return this[editorInput];
    }
    set editorInput(value) {
      this[editorInput] = value;
    }
    get parseErrors() {
      return this[parseErrors];
    }
    set parseErrors(value) {
      super.parseErrors = value;
    }
    ngOnInit() {
      return async.async(core.Null, (function* ngOnInit() {
        return this.initializeVM();
      }).bind(this));
    }
    initializeVM() {
      let parseResult = assembly_parser$.parse(this.editorInput, dart.fn((message, offset) => this.parseErrors[$add]("at offset " + dart.str(offset) + ": " + dart.str(message)), StringAndintTovoid()));
      if (parseResult != null) {
        this.vm = new virtual_machine$.InspectableVM.new(parseResult.key, parseResult.value, {maxAddress: this.maxAddress});
      }
    }
    executeSingleInstruction() {
      try {
        this.vm.executeCurrentInstruction();
      } catch (e) {
        if (virtual_machine$.VmRuntimeException.is(e)) {
          html.window.alert(e.message);
        } else
          throw e;
      }
    }
    activateEditingMode() {
      this.mode = components__app_component.AppComponent.editingMode;
    }
    activateExecutionMode() {
      this.parseErrors[$clear]();
      this.initializeVM();
      if (dart.test(this.parseErrors[$isEmpty])) {
        this.mode = components__app_component.AppComponent.executionMode;
      }
    }
  };
  (components__app_component.AppComponent.new = function() {
    this[mode] = components__app_component.AppComponent.executionMode;
    this[vm] = null;
    this[maxAddress] = 255;
    this[editorInput] = "dummy 2,\nmkV 0, mkF ADD, jump B, ADD: testArg 2, pushL 0, getB, pushL -1, getB, add, mkB, return 2, B:\nrewrite 2,\npushL 1, mkV 1, mkF ADD2, jump C,\nADD2: testArg 1, mark D, loadc 2, mkB, pushL 0, setSP0, pushG 0, apply, D: return 1,\nC: rewrite 1,\nmark RET, loadc 3, mkB, setSP0, pushL 2, apply, RET:\nslide 2 1,\nhalt\n";
    this[parseErrors] = JSArrayOfString().of([]);
  }).prototype = components__app_component.AppComponent.prototype;
  dart.addTypeTests(components__app_component.AppComponent);
  const mode = Symbol("AppComponent.mode");
  const vm = Symbol("AppComponent.vm");
  const maxAddress = Symbol("AppComponent.maxAddress");
  const editorInput = Symbol("AppComponent.editorInput");
  const parseErrors = Symbol("AppComponent.parseErrors");
  components__app_component.AppComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(components__app_component.AppComponent, () => ({
    __proto__: dart.getMethods(components__app_component.AppComponent.__proto__),
    ngOnInit: dart.fnType(async.Future$(core.Null), []),
    initializeVM: dart.fnType(dart.void, []),
    executeSingleInstruction: dart.fnType(dart.void, []),
    activateEditingMode: dart.fnType(dart.void, []),
    activateExecutionMode: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(components__app_component.AppComponent, () => ({
    __proto__: dart.getFields(components__app_component.AppComponent.__proto__),
    mode: dart.fieldType(core.Symbol),
    vm: dart.fieldType(virtual_machine$.InspectableVM),
    maxAddress: dart.fieldType(core.int),
    editorInput: dart.fieldType(core.String),
    parseErrors: dart.finalFieldType(ListOfString())
  }));
  dart.defineLazy(components__app_component.AppComponent, {
    /*components__app_component.AppComponent.executionMode*/get executionMode() {
      return dart.const(core.Symbol.new('executionMode'));
    },
    /*components__app_component.AppComponent.editingMode*/get editingMode() {
      return dart.const(core.Symbol.new('editingMode'));
    }
  });
  dart.trackLibraries("packages/fvm/components/app_component.ddc", {
    "package:fvm/components/app_component.dart": components__app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAWM,2CAAiB;YAAG;;MAEpB,wCAAc;YAAG;;;;IAwCd;;;;;;IAEO;;;;;;IAEV;;;;;;IAEG;;;;;;IACY;;;;;;;AAGK;cAAS,kBAAY;MAAE;;;AAG7C,UAAM,cAAc,sBAAK,CAAC,gBAAW,EACjC,SAAC,OAAO,EAAE,MAAM,KAAK,gBAAW,MAAI,CAAC,wBAAY,MAAM,oBAAG,OAAO;AACrE,UAAI,WAAW,IAAI,MAAM;AACvB,eAAE,OAAG,kCAAa,CAAC,WAAW,IAAI,EAAE,WAAW,MAAM,eACrC,eAAU;;IAE9B;;AAGE,UAAI;AACF,eAAE,0BAA0B;eACC;AAA7B,uDAAgC;AAChC,qBAAM,MAAM,CAAC,CAAC,QAAQ;;;;IAE1B;;AAIE,eAAI,GAAG,kDAAW;IACpB;;AAIE,sBAAW,QAAM;AACjB,uBAAY;AACZ,oBAAI,gBAAW,UAAQ,GAAE;AACvB,iBAAI,GAAG,oDAAa;;IAExB;;;IAzCO,UAAI,GAAG,oDAAa;IAEb,QAAE;IAEZ,gBAAU,GAAG,GAAiB;IAE3B,iBAAW,GAAG,uUAAc;IAChB,iBAAW,GAAG;EAmCnC;;;;;;;;;;;;;;;;;;;;;;;;;MA9Ce,oDAAa;YAAG;;MAChB,kDAAW;YAAG","file":"app_component.ddc.js"}');
  // Exports:
  return {
    components__app_component: components__app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
