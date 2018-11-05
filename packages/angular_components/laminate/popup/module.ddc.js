define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/src/laminate/popup/dom_popup_source'], function(dart_sdk, alignment, change_detection, module, dom_popup_source) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__module = change_detection.src__di__module;
  const src__di__providers = change_detection.src__di__providers;
  const laminate__overlay__module = module.laminate__overlay__module;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const _root = Object.create(null);
  const laminate__popup__module = Object.create(_root);
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(laminate__popup__module, {
    /*laminate__popup__module.inlinePositions*/get inlinePositions() {
      return laminate__enums__alignment.RelativePosition.InlinePositions;
    },
    /*laminate__popup__module.defaultPopupPositions*/get defaultPopupPositions() {
      return dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"));
    },
    /*laminate__popup__module.popupModule*/get popupModule() {
      return dart.const(src__di__module.Module.new({include: dart.constList([laminate__overlay__module.overlayModule], src__di__module.Module), provide: laminate__popup__module._popupProviders}));
    },
    /*laminate__popup__module._popupProviders*/get _popupProviders() {
      return dart.constList([dart.const(src__di__providers.ValueProvider.forToken(laminate__popup__module.defaultPopupPositions, laminate__popup__module.inlinePositions)), dart.const(src__di__providers.ClassProvider.new(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory)))], src__di__providers.Provider);
    },
    /*laminate__popup__module.popupBindings*/get popupBindings() {
      return dart.constList([laminate__overlay__module.overlayBindings, laminate__popup__module._popupProviders], ListOfObject());
    },
    /*laminate__popup__module.popupDebugModule*/get popupDebugModule() {
      return dart.const(src__di__module.Module.new({include: dart.constList([laminate__overlay__module.overlayDebugModule], src__di__module.Module), provide: laminate__popup__module._popupProviders}));
    },
    /*laminate__popup__module.popupDebugBindings*/get popupDebugBindings() {
      return dart.constList([laminate__overlay__module.overlayDebugBindings, laminate__popup__module._popupProviders], ListOfObject());
    }
  });
  dart.trackLibraries("packages/angular_components/laminate/popup/module.ddc", {
    "package:angular_components/laminate/popup/module.dart": laminate__popup__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MASM,uCAAe;YAAG,4CAAgB,gBAAgB;;MAKlD,6CAAqB;4BAAG,2CAAmC,CAC/D;;MAMI,mCAAW;wBAAG,0BAAM,WACf,gBACP,uCAAa,qCAEN,uCAAe;;MAGpB,uCAAe;YAAG,4BACtB,yCAAsB,CAAC,6CAAqB,EAAE,uCAAe,eAC7D,oCAAa,CAAC,2EAAqB;;MAM/B,qCAAa;YAAG,iBACpB,yCAAe,EACf,uCAAe;;MAMX,wCAAgB;wBAAG,0BAAM,WACpB,gBACP,4CAAkB,qCAEX,uCAAe;;MAMpB,0CAAkB;YAAG,iBACzB,8CAAoB,EACpB,uCAAe","file":"module.ddc.js"}');
  // Exports:
  return {
    laminate__popup__module: laminate__popup__module
  };
});

//# sourceMappingURL=module.ddc.js.map
