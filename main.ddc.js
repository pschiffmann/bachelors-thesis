define(['dart_sdk', 'packages/fvm/components/app_component.template', 'packages/fvm/components/app_component', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, app_component, app_component$, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const components__app_component$46template = app_component.components__app_component$46template;
  const components__app_component = app_component$.components__app_component;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const _root = Object.create(null);
  const main = Object.create(_root);
  main.main = function() {
    src__bootstrap__run.runApp(components__app_component.AppComponent, components__app_component$46template.AppComponentNgFactory);
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;AAIE,8BAAM,yCAAI,0DAAqB;EACjC","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
