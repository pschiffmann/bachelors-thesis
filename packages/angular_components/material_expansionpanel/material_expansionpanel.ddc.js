define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/model/action/async_action', 'packages/intl/intl', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/focus'], function(dart_sdk, disposer, async_action, intl, deferred_content_aware, has_disabled, change_detection, button_decorator, ng_zone, dom_service, focus) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const src__model__action__async_action_controller = async_action.src__model__action__async_action_controller;
  const intl$ = intl.intl;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__focus = focus.focus__focus;
  const _root = Object.create(null);
  const material_expansionpanel__material_expansionpanel = Object.create(_root);
  const $height = dartx.height;
  const $onTransitionEnd = dartx.onTransitionEnd;
  const $scrollHeight = dartx.scrollHeight;
  const $getComputedStyle = dartx.getComputedStyle;
  const $contains = dartx.contains;
  const $transition = dartx.transition;
  const $marginTop = dartx.marginTop;
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let AsyncActionOfbool = () => (AsyncActionOfbool = dart.constFn(src__model__action__async_action.AsyncAction$(core.bool)))();
  let StreamControllerOfAsyncActionOfbool = () => (StreamControllerOfAsyncActionOfbool = dart.constFn(async.StreamController$(AsyncActionOfbool())))();
  let TransitionEventToNull = () => (TransitionEventToNull = dart.constFn(dart.fnType(core.Null, [html.TransitionEvent])))();
  let __ToNull = () => (__ToNull = dart.constFn(dart.fnType(core.Null, [], [dart.void])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let AsyncActionControllerOfbool = () => (AsyncActionControllerOfbool = dart.constFn(src__model__action__async_action_controller.AsyncActionController$(core.bool)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let numToString = () => (numToString = dart.constFn(dart.fnType(core.String, [core.num])))();
  let CompleterOfString = () => (CompleterOfString = dart.constFn(async.Completer$(core.String)))();
  const _ngZone = Symbol('_ngZone');
  const _changeDetector = Symbol('_changeDetector');
  const _domService = Symbol('_domService');
  const _disposer = Symbol('_disposer');
  const _defaultExpandIcon = Symbol('_defaultExpandIcon');
  const _mainPanel = Symbol('_mainPanel');
  const _mainContent = Symbol('_mainContent');
  const _contentWrapper = Symbol('_contentWrapper');
  const _isExpanded = Symbol('_isExpanded');
  const _isExpandedChange = Symbol('_isExpandedChange');
  const _isExpandedChangeByUserAction = Symbol('_isExpandedChangeByUserAction');
  const _anotherExpanded = Symbol('_anotherExpanded');
  const _disabled = Symbol('_disabled');
  const _activeSaveCancelAction = Symbol('_activeSaveCancelAction');
  const _expandIcon = Symbol('_expandIcon');
  const _openController = Symbol('_openController');
  const _closeController = Symbol('_closeController');
  const _saveController = Symbol('_saveController');
  const _cancelController = Symbol('_cancelController');
  const _expandCollapseButton = Symbol('_expandCollapseButton');
  const _closeNamedPanelMsg = Symbol('_closeNamedPanelMsg');
  const _openNamedPanelMsg = Symbol('_openNamedPanelMsg');
  let const$;
  let const$0;
  const _transitionHeightChange = Symbol('_transitionHeightChange');
  const _readExpandedPanelHeight = Symbol('_readExpandedPanelHeight');
  material_expansionpanel__material_expansionpanel.MaterialExpansionPanel = class MaterialExpansionPanel extends core.Object {
    get shouldExpandOnLeft() {
      return this[shouldExpandOnLeft];
    }
    set shouldExpandOnLeft(value) {
      super.shouldExpandOnLeft = value;
    }
    get initialized() {
      return this[initialized];
    }
    set initialized(value) {
      this[initialized] = value;
    }
    get autoFocusChild() {
      return this[autoFocusChild];
    }
    set autoFocusChild(value) {
      this[autoFocusChild] = value;
    }
    set mainPanel(mainPanel) {
      this[_mainPanel] = mainPanel;
      this[_disposer].addStreamSubscription(html.TransitionEvent, this[_mainPanel][$onTransitionEnd].listen(dart.fn(_ => {
        this[_mainPanel].style[$height] = "";
      }, TransitionEventToNull())));
    }
    set mainContent(mainContent) {
      return this[_mainContent] = mainContent;
    }
    set contentWrapper(contentWrapper) {
      this[_contentWrapper] = contentWrapper;
    }
    get closeOnSave() {
      return this[closeOnSave];
    }
    set closeOnSave(value) {
      this[closeOnSave] = value;
    }
    get isExpanded() {
      return this[_isExpanded];
    }
    set isExpanded(value) {
      if (value == this[_isExpanded]) return;
      if (dart.test(value)) {
        this.expand({byUserAction: false});
      } else {
        this.collapse({byUserAction: false});
      }
    }
    get isExpandedChange() {
      return this[_isExpandedChange].stream;
    }
    get isExpandedChangeByUserAction() {
      return this[_isExpandedChangeByUserAction].stream;
    }
    get contentVisible() {
      return this.isExpandedChange;
    }
    get anotherExpanded() {
      return this[_anotherExpanded];
    }
    set anotherExpanded(anotherExpanded) {
      this[_anotherExpanded] = anotherExpanded;
      this[_changeDetector].markForCheck();
    }
    get disabled() {
      return this[_disabled];
    }
    set disabled(value) {
      this[_disabled] = value;
      this[_changeDetector].markForCheck();
    }
    get saveDisabled() {
      return this[saveDisabled];
    }
    set saveDisabled(value) {
      this[saveDisabled] = value;
    }
    get activeSaveCancelAction() {
      return this[_activeSaveCancelAction];
    }
    get hideExpandedHeader() {
      return this[hideExpandedHeader];
    }
    set hideExpandedHeader(value) {
      this[hideExpandedHeader] = value;
    }
    get disableHeaderExpansion() {
      return this[disableHeaderExpansion];
    }
    set disableHeaderExpansion(value) {
      this[disableHeaderExpansion] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get secondaryText() {
      return this[secondaryText];
    }
    set secondaryText(value) {
      this[secondaryText] = value;
    }
    set expandIcon(expandIcon) {
      return this[_expandIcon] = expandIcon;
    }
    get expandIcon() {
      let l = this[_expandIcon];
      return l != null ? l : this[_defaultExpandIcon];
    }
    get alwaysShowExpandIcon() {
      return this[alwaysShowExpandIcon];
    }
    set alwaysShowExpandIcon(value) {
      this[alwaysShowExpandIcon] = value;
    }
    get alwaysHideExpandIcon() {
      return this[alwaysHideExpandIcon];
    }
    set alwaysHideExpandIcon(value) {
      this[alwaysHideExpandIcon] = value;
    }
    get hasCustomExpandIcon() {
      return this.expandIcon != this[_defaultExpandIcon];
    }
    get shouldShowExpandIcon() {
      if (dart.test(this.alwaysHideExpandIcon)) return false;
      return dart.test(this.hasCustomExpandIcon) && dart.test(this.isExpanded) ? this.alwaysShowExpandIcon : !dart.test(this.disabled);
    }
    get shouldFlipExpandIcon() {
      return dart.test(this.hasCustomExpandIcon) ? false : !dart.test(this.isExpanded);
    }
    get shouldShowHiddenHeaderExpandIcon() {
      return dart.test(this.hasCustomExpandIcon) || dart.test(this.alwaysHideExpandIcon) ? false : dart.test(this.hideExpandedHeader) && !dart.test(this.disabled);
    }
    get showSaveCancel() {
      return this[showSaveCancel];
    }
    set showSaveCancel(value) {
      this[showSaveCancel] = value;
    }
    get cancelDisplayed() {
      return this[cancelDisplayed];
    }
    set cancelDisplayed(value) {
      this[cancelDisplayed] = value;
    }
    get enterAccepts() {
      return this[enterAccepts];
    }
    set enterAccepts(value) {
      this[enterAccepts] = value;
    }
    get saveText() {
      return this[saveText];
    }
    set saveText(value) {
      this[saveText] = value;
    }
    get cancelText() {
      return this[cancelText];
    }
    set cancelText(value) {
      this[cancelText] = value;
    }
    get closePanelMsg() {
      return this.name == null ? material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._closePanelMsg : this[_closeNamedPanelMsg](this.name);
    }
    get openPanelMsg() {
      return this.name == null ? material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._openPanelMsg : this[_openNamedPanelMsg](this.name);
    }
    get headerMsg() {
      if (dart.test(this.disabled)) {
        return this.name;
      } else {
        return dart.test(this[_isExpanded]) ? this.closePanelMsg : this.openPanelMsg;
      }
    }
    [_closeNamedPanelMsg](panelName) {
      return intl$.Intl.message("Close " + dart.str(panelName) + " panel", {name: "_closeNamedPanelMsg", args: [panelName], desc: "ARIA label for a button that closes the panel.", examples: const$ || (const$ = dart.constMap(core.String, dart.dynamic, ["panelName", "Conversions"]))});
    }
    [_openNamedPanelMsg](panelName) {
      return intl$.Intl.message("Open " + dart.str(panelName) + " panel", {name: "_openNamedPanelMsg", args: [panelName], desc: "ARIA label for a button that opens the panel.", examples: const$0 || (const$0 = dart.constMap(core.String, dart.dynamic, ["panelName", "Conversions"]))});
    }
    get close() {
      return this[_closeController].stream;
    }
    get open() {
      return this[_openController].stream;
    }
    get save() {
      return this[_saveController].stream;
    }
    get cancel() {
      return this[_cancelController].stream;
    }
    handleHeaderClick() {
      if (!dart.test(this.disableHeaderExpansion)) dart.test(this.isExpanded) ? this.collapse() : this.expand();
    }
    handleExpandIconClick() {
      if (dart.test(this.disableHeaderExpansion)) dart.test(this.isExpanded) ? this.collapse() : this.expand();
    }
    ngOnInit() {
      this[_disposer].addStreamSubscription(core.bool, this.isExpandedChangeByUserAction.listen(dart.fn(_ => {
        this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
          if (_ === void 0) _ = null;
          let t = this[_expandCollapseButton];
          t == null ? null : t.focus();
        }, __ToNull()));
      }, boolToNull())));
      this.initialized = true;
    }
    set expandCollapse(button) {
      this[_expandCollapseButton] = button;
    }
    expand(opts) {
      let byUserAction = opts && 'byUserAction' in opts ? opts.byUserAction : true;
      if (dart.test(this.disabled) && dart.test(byUserAction)) return FutureOfbool().value(false);
      return this.changeState(true, byUserAction, this[_openController]);
    }
    collapse(opts) {
      let byUserAction = opts && 'byUserAction' in opts ? opts.byUserAction : true;
      if (dart.test(this.disabled) && dart.test(byUserAction)) return FutureOfbool().value(false);
      return this.changeState(false, byUserAction, this[_closeController]);
    }
    doSave() {
      let actionCtrl = new (AsyncActionControllerOfbool()).new();
      this[_saveController].add(actionCtrl.action);
      this[_activeSaveCancelAction] = true;
      this[_changeDetector].markForCheck();
      let stateWasInitialized = this.initialized;
      actionCtrl.execute(dart.fn(() => {
        if (dart.test(this.closeOnSave)) {
          this[_isExpanded] = false;
          this[_isExpandedChange].add(false);
          this[_isExpandedChangeByUserAction].add(false);
          this[_changeDetector].markForCheck();
          if (dart.test(stateWasInitialized)) this[_transitionHeightChange](false);
        }
        return true;
      }, VoidTobool()), {valueOnCancel: false});
      return actionCtrl.action.onDone.then(core.bool, dart.fn(result => {
        this[_activeSaveCancelAction] = false;
        this[_changeDetector].markForCheck();
        return result;
      }, boolTobool()));
    }
    doCancel() {
      let actionCtrl = new (AsyncActionControllerOfbool()).new();
      this[_cancelController].add(actionCtrl.action);
      this[_activeSaveCancelAction] = true;
      this[_changeDetector].markForCheck();
      let stateWasInitialized = this.initialized;
      actionCtrl.execute(dart.fn(() => {
        this[_isExpanded] = false;
        this[_isExpandedChange].add(false);
        this[_isExpandedChangeByUserAction].add(false);
        this[_changeDetector].markForCheck();
        if (dart.test(stateWasInitialized)) this[_transitionHeightChange](false);
        return true;
      }, VoidTobool()), {valueOnCancel: false});
      return actionCtrl.action.onDone.then(core.bool, dart.fn(result => {
        this[_activeSaveCancelAction] = false;
        this[_changeDetector].markForCheck();
        return result;
      }, boolTobool()));
    }
    changeState(expand, byUserAction, stream) {
      if (this[_isExpanded] == expand) {
        return FutureOfbool().value(true);
      }
      let actionCtrl = new (AsyncActionControllerOfbool()).new();
      stream.add(actionCtrl.action);
      let stateWasInitialized = this.initialized;
      actionCtrl.execute(dart.fn(() => {
        this[_isExpanded] = expand;
        this[_isExpandedChange].add(expand);
        if (dart.test(byUserAction)) this[_isExpandedChangeByUserAction].add(expand);
        this[_changeDetector].markForCheck();
        if (dart.test(expand) && this.autoFocusChild != null) {
          this[_domService].scheduleWrite(dart.fn(() => {
            this.autoFocusChild.focus();
          }, VoidToNull()));
        }
        if (dart.test(stateWasInitialized)) this[_transitionHeightChange](expand);
        return true;
      }, VoidTobool()), {valueOnCancel: false});
      return actionCtrl.action.onDone;
    }
    [_transitionHeightChange](expand) {
      this[_mainPanel].style[$height] = dart.str(this[_mainPanel][$scrollHeight]) + "px";
      if (dart.test(expand)) {
        this[_readExpandedPanelHeight]().then(core.Null, dart.fn(expandedPanelHeight => {
          this[_mainPanel].style[$height] = expandedPanelHeight;
        }, StringToNull()));
      } else {
        this[_domService].nextFrame.then(core.String, dart.fn(_ => this[_mainPanel].style[$height] = "", numToString()));
      }
    }
    [_readExpandedPanelHeight]() {
      let completeExpandedHeight = CompleterOfString().new();
      this[_domService].scheduleRead(dart.fn(() => {
        let contentHeight = this[_mainContent][$scrollHeight];
        let expandedPanelHeight = "";
        let mainPanelStyle = this[_mainPanel][$getComputedStyle]();
        let hasHeightTransition = dart.notNull(contentHeight) > 0 && mainPanelStyle[$transition][$contains]("height");
        if (hasHeightTransition) {
          let topMargin = this[_contentWrapper][$getComputedStyle]()[$marginTop];
          expandedPanelHeight = "calc(" + dart.str(contentHeight) + "px + " + dart.str(topMargin) + ")";
        }
        completeExpandedHeight.complete(expandedPanelHeight);
      }, VoidToNull()));
      return completeExpandedHeight.future;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new = function(ngZone, changeDetector, domService, expandOnLeft) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_defaultExpandIcon] = "expand_less";
    this[initialized] = false;
    this[autoFocusChild] = null;
    this[_mainPanel] = null;
    this[_mainContent] = null;
    this[_contentWrapper] = null;
    this[closeOnSave] = true;
    this[_isExpanded] = false;
    this[_isExpandedChange] = StreamControllerOfbool().broadcast({sync: true});
    this[_isExpandedChangeByUserAction] = StreamControllerOfbool().broadcast({sync: true});
    this[_anotherExpanded] = false;
    this[_disabled] = false;
    this[saveDisabled] = false;
    this[_activeSaveCancelAction] = false;
    this[hideExpandedHeader] = false;
    this[disableHeaderExpansion] = false;
    this[name] = null;
    this[secondaryText] = null;
    this[_expandIcon] = null;
    this[alwaysShowExpandIcon] = false;
    this[alwaysHideExpandIcon] = false;
    this[showSaveCancel] = true;
    this[cancelDisplayed] = true;
    this[enterAccepts] = false;
    this[saveText] = material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._msgSave;
    this[cancelText] = material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._msgCancel;
    this[_openController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[_closeController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[_saveController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[_cancelController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[_expandCollapseButton] = null;
    this[_ngZone] = ngZone;
    this[_changeDetector] = changeDetector;
    this[_domService] = domService;
    this[shouldExpandOnLeft] = expandOnLeft != null;
  }).prototype = material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel);
  const shouldExpandOnLeft = Symbol("MaterialExpansionPanel.shouldExpandOnLeft");
  const initialized = Symbol("MaterialExpansionPanel.initialized");
  const autoFocusChild = Symbol("MaterialExpansionPanel.autoFocusChild");
  const closeOnSave = Symbol("MaterialExpansionPanel.closeOnSave");
  const saveDisabled = Symbol("MaterialExpansionPanel.saveDisabled");
  const hideExpandedHeader = Symbol("MaterialExpansionPanel.hideExpandedHeader");
  const disableHeaderExpansion = Symbol("MaterialExpansionPanel.disableHeaderExpansion");
  const name = Symbol("MaterialExpansionPanel.name");
  const secondaryText = Symbol("MaterialExpansionPanel.secondaryText");
  const alwaysShowExpandIcon = Symbol("MaterialExpansionPanel.alwaysShowExpandIcon");
  const alwaysHideExpandIcon = Symbol("MaterialExpansionPanel.alwaysHideExpandIcon");
  const showSaveCancel = Symbol("MaterialExpansionPanel.showSaveCancel");
  const cancelDisplayed = Symbol("MaterialExpansionPanel.cancelDisplayed");
  const enterAccepts = Symbol("MaterialExpansionPanel.enterAccepts");
  const saveText = Symbol("MaterialExpansionPanel.saveText");
  const cancelText = Symbol("MaterialExpansionPanel.cancelText");
  material_expansionpanel__material_expansionpanel.MaterialExpansionPanel[dart.implements] = () => [content__deferred_content_aware.DeferredContentAware, interfaces__has_disabled.HasDisabled, src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.__proto__),
    [_closeNamedPanelMsg]: dart.fnType(core.String, [core.String]),
    [_openNamedPanelMsg]: dart.fnType(core.String, [core.String]),
    handleHeaderClick: dart.fnType(dart.void, []),
    handleExpandIconClick: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, []),
    expand: dart.fnType(async.Future$(core.bool), [], {byUserAction: core.bool}),
    collapse: dart.fnType(async.Future$(core.bool), [], {byUserAction: core.bool}),
    doSave: dart.fnType(async.Future$(core.bool), []),
    doCancel: dart.fnType(async.Future$(core.bool), []),
    changeState: dart.fnType(async.Future$(core.bool), [core.bool, core.bool, async.StreamController]),
    [_transitionHeightChange]: dart.fnType(dart.void, [core.bool]),
    [_readExpandedPanelHeight]: dart.fnType(async.Future$(core.String), []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getGetters(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.__proto__),
    isExpanded: core.bool,
    isExpandedChange: async.Stream$(core.bool),
    isExpandedChangeByUserAction: async.Stream$(core.bool),
    contentVisible: async.Stream$(core.bool),
    anotherExpanded: core.bool,
    disabled: core.bool,
    activeSaveCancelAction: core.bool,
    expandIcon: core.String,
    hasCustomExpandIcon: core.bool,
    shouldShowExpandIcon: core.bool,
    shouldFlipExpandIcon: core.bool,
    shouldShowHiddenHeaderExpandIcon: core.bool,
    closePanelMsg: core.String,
    openPanelMsg: core.String,
    headerMsg: core.String,
    close: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool)),
    open: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool)),
    save: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool)),
    cancel: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool))
  }));
  dart.setSetterSignature(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getSetters(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.__proto__),
    mainPanel: html.HtmlElement,
    mainContent: html.HtmlElement,
    contentWrapper: html.HtmlElement,
    isExpanded: core.bool,
    anotherExpanded: core.bool,
    disabled: core.bool,
    expandIcon: core.String,
    expandCollapse: button_decorator__button_decorator.ButtonDirective
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.__proto__),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_defaultExpandIcon]: dart.finalFieldType(core.String),
    shouldExpandOnLeft: dart.finalFieldType(core.bool),
    initialized: dart.fieldType(core.bool),
    autoFocusChild: dart.fieldType(focus__focus.AutoFocusDirective),
    [_mainPanel]: dart.fieldType(html.HtmlElement),
    [_mainContent]: dart.fieldType(html.HtmlElement),
    [_contentWrapper]: dart.fieldType(html.HtmlElement),
    closeOnSave: dart.fieldType(core.bool),
    [_isExpanded]: dart.fieldType(core.bool),
    [_isExpandedChange]: dart.finalFieldType(StreamControllerOfbool()),
    [_isExpandedChangeByUserAction]: dart.finalFieldType(StreamControllerOfbool()),
    [_anotherExpanded]: dart.fieldType(core.bool),
    [_disabled]: dart.fieldType(core.bool),
    saveDisabled: dart.fieldType(core.bool),
    [_activeSaveCancelAction]: dart.fieldType(core.bool),
    hideExpandedHeader: dart.fieldType(core.bool),
    disableHeaderExpansion: dart.fieldType(core.bool),
    name: dart.fieldType(core.String),
    secondaryText: dart.fieldType(core.String),
    [_expandIcon]: dart.fieldType(core.String),
    alwaysShowExpandIcon: dart.fieldType(core.bool),
    alwaysHideExpandIcon: dart.fieldType(core.bool),
    showSaveCancel: dart.fieldType(core.bool),
    cancelDisplayed: dart.fieldType(core.bool),
    enterAccepts: dart.fieldType(core.bool),
    saveText: dart.fieldType(core.String),
    cancelText: dart.fieldType(core.String),
    [_openController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    [_closeController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    [_saveController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    [_cancelController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    [_expandCollapseButton]: dart.fieldType(button_decorator__button_decorator.ButtonDirective)
  }));
  dart.defineLazy(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, {
    /*material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._closePanelMsg*/get _closePanelMsg() {
      return intl$.Intl.message("Close panel", {name: "_closePanelMsg", desc: "ARIA label for a button that closes the panel."});
    },
    /*material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._openPanelMsg*/get _openPanelMsg() {
      return intl$.Intl.message("Open panel", {name: "_openPanelMsg", desc: "ARIA label for a button that opens the panel."});
    },
    /*material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._msgSave*/get _msgSave() {
      return intl$.Intl.message("Save", {name: "_msgSave", desc: "Text on save button.", meaning: "Text on save button."});
    },
    /*material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._msgCancel*/get _msgCancel() {
      return intl$.Intl.message("Cancel", {name: "_msgCancel", desc: "Text on cancel button.", meaning: "Text on cancel button."});
    }
  });
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel.ddc", {
    "package:angular_components/material_expansionpanel/material_expansionpanel.dart": material_expansionpanel__material_expansionpanel
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel.dart"],"names":[],"mappings":"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","file":"material_expansionpanel.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel: material_expansionpanel__material_expansionpanel
  };
});

//# sourceMappingURL=material_expansionpanel.ddc.js.map
