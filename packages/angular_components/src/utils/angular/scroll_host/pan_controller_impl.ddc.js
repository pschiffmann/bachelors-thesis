define(['dart_sdk', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/browser/feature_detector/feature_detector', 'packages/angular_components/utils/browser/events/events', 'packages/quiver/core', 'packages/angular_components/utils/angular/scroll_host/interface'], function(dart_sdk, scroll_host_interface, async_update_scheduler, ng_zone, dom_service, disposer, feature_detector, events, core, $interface) {
  'use strict';
  const core$ = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils__angular__scroll_host__scroll_host_interface = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const src__utils__async__zoned_async = async_update_scheduler.src__utils__async__zoned_async;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const utils__browser__feature_detector__feature_detector = feature_detector.utils__browser__feature_detector__feature_detector;
  const utils__browser__events__events = events.utils__browser__events__events;
  const core$0 = core.core;
  const src__utils__angular__scroll_host__gestures = $interface.src__utils__angular__scroll_host__gestures;
  const src__utils__angular__scroll_host__scroll_host_event_impl = $interface.src__utils__angular__scroll_host__scroll_host_event_impl;
  const _root = Object.create(null);
  const src__utils__angular__scroll_host__pan_controller_impl = Object.create(_root);
  const src__utils__angular__scroll_host__position_sticky_controller = Object.create(_root);
  const src__utils__angular__scroll_host__sticky_controller_impl = Object.create(_root);
  const src__utils__angular__scroll_host__scroll_host_base = Object.create(_root);
  const $scrollWidth = dartx.scrollWidth;
  const $scrollHeight = dartx.scrollHeight;
  const $deltaY = dartx.deltaY;
  const $scrollTop = dartx.scrollTop;
  const $deltaX = dartx.deltaX;
  const $scrollLeft = dartx.scrollLeft;
  const $onMouseWheel = dartx.onMouseWheel;
  const $onScroll = dartx.onScroll;
  const $contains = dartx.contains;
  const $removeWhere = dartx.removeWhere;
  const $add = dartx.add;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  const $requestAnimationFrame = dartx.requestAnimationFrame;
  const $position = dartx.position;
  const $zIndex = dartx.zIndex;
  const $setProperty = dartx.setProperty;
  const $classes = dartx.classes;
  const $top = dartx.top;
  const $bottom = dartx.bottom;
  const $width = dartx.width;
  const $height = dartx.height;
  const $append = dartx.append;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $map = dartx.map;
  const $_get = dartx._get;
  const $sort = dartx.sort;
  const $_set = dartx._set;
  const $_equals = dartx._equals;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $keys = dartx.keys;
  const $abs = dartx.abs;
  const $left = dartx.left;
  const $values = dartx.values;
  const $length = dartx.length;
  const $compareTo = dartx.compareTo;
  const $round = dartx.round;
  const $transform = dartx.transform;
  const $toString = dartx.toString;
  const $runtimeType = dartx.runtimeType;
  const $hashCode = dartx.hashCode;
  const $target = dartx.target;
  const $deltaMode = dartx.deltaMode;
  const $toInt = dartx.toInt;
  const $scrollY = dartx.scrollY;
  const $scrollX = dartx.scrollX;
  const $scrollTo = dartx.scrollTo;
  const $document = dartx.document;
  const $overflowY = dartx.overflowY;
  let StreamControllerOfPanEvent = () => (StreamControllerOfPanEvent = dart.constFn(async.StreamController$(src__utils__angular__scroll_host__scroll_host_interface.PanEvent)))();
  let ZonedStreamOfPanEvent = () => (ZonedStreamOfPanEvent = dart.constFn(src__utils__async__zoned_async.ZonedStream$(src__utils__angular__scroll_host__scroll_host_interface.PanEvent)))();
  let WheelEventToNull = () => (WheelEventToNull = dart.constFn(dart.fnType(core$.Null, [html.WheelEvent])))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core$.Null, [html.Event])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core$.Null, [])))();
  let StreamOfPanEvent = () => (StreamOfPanEvent = dart.constFn(async.Stream$(src__utils__angular__scroll_host__scroll_host_interface.PanEvent)))();
  let StreamSubscriptionOfWheelEvent = () => (StreamSubscriptionOfWheelEvent = dart.constFn(async.StreamSubscription$(html.WheelEvent)))();
  let StreamSubscriptionOfEvent = () => (StreamSubscriptionOfEvent = dart.constFn(async.StreamSubscription$(html.Event)))();
  let JSArrayOf_StickyElement = () => (JSArrayOf_StickyElement = dart.constFn(_interceptors.JSArray$(src__utils__angular__scroll_host__position_sticky_controller._StickyElement)))();
  let _StickyElementTobool = () => (_StickyElementTobool = dart.constFn(dart.fnType(core$.bool, [src__utils__angular__scroll_host__position_sticky_controller._StickyElement])))();
  let numToNull = () => (numToNull = dart.constFn(dart.fnType(core$.Null, [core$.num])))();
  let IntersectionObserverEntryToNull = () => (IntersectionObserverEntryToNull = dart.constFn(dart.fnType(core$.Null, [html.IntersectionObserverEntry])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core$.Object)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core$.List$(core$.Object)))();
  let _StickyElementToListOfObject = () => (_StickyElementToListOfObject = dart.constFn(dart.fnType(ListOfObject(), [src__utils__angular__scroll_host__position_sticky_controller._StickyElement])))();
  let ListOfObjectAndListOfObjectToint = () => (ListOfObjectAndListOfObjectToint = dart.constFn(dart.fnType(core$.int, [ListOfObject(), ListOfObject()])))();
  let IdentityMapOfString$num = () => (IdentityMapOfString$num = dart.constFn(_js_helper.IdentityMap$(core$.String, core$.num)))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core$.num)))();
  let ListOf_StickyElement = () => (ListOf_StickyElement = dart.constFn(core$.List$(src__utils__angular__scroll_host__position_sticky_controller._StickyElement)))();
  let StreamSubscriptionOfIntersectionObserverEntry = () => (StreamSubscriptionOfIntersectionObserverEntry = dart.constFn(async.StreamSubscription$(html.IntersectionObserverEntry)))();
  let LinkedMapOfElement$_StickyRow = () => (LinkedMapOfElement$_StickyRow = dart.constFn(_js_helper.LinkedMap$(html.Element, src__utils__angular__scroll_host__sticky_controller_impl._StickyRow)))();
  let _HashSetOfElement = () => (_HashSetOfElement = dart.constFn(collection._HashSet$(html.Element)))();
  let ListOfElement = () => (ListOfElement = dart.constFn(core$.List$(html.Element)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core$.Null, [dart.dynamic])))();
  let _StickyRowAnd_StickyRowToint = () => (_StickyRowAnd_StickyRowToint = dart.constFn(dart.fnType(core$.int, [src__utils__angular__scroll_host__sticky_controller_impl._StickyRow, src__utils__angular__scroll_host__sticky_controller_impl._StickyRow])))();
  let MapOfElement$_StickyRow = () => (MapOfElement$_StickyRow = dart.constFn(core$.Map$(html.Element, src__utils__angular__scroll_host__sticky_controller_impl._StickyRow)))();
  let SetOfElement = () => (SetOfElement = dart.constFn(core$.Set$(html.Element)))();
  let ListOf_StickyRow = () => (ListOf_StickyRow = dart.constFn(core$.List$(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow)))();
  let StickyContainerLayoutOf_StickyRow = () => (StickyContainerLayoutOf_StickyRow = dart.constFn(src__utils__angular__scroll_host__sticky_controller_impl.StickyContainerLayout$(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core$.String, core$.Object)))();
  let ListOfnum = () => (ListOfnum = dart.constFn(core$.List$(core$.num)))();
  let JSArrayOfnum = () => (JSArrayOfnum = dart.constFn(_interceptors.JSArray$(core$.num)))();
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core$.String, core$.int)))();
  let StreamControllerOfIntersectionObserverEntry = () => (StreamControllerOfIntersectionObserverEntry = dart.constFn(async.StreamController$(html.IntersectionObserverEntry)))();
  let LinkedMapOfElement$StreamControllerOfIntersectionObserverEntry = () => (LinkedMapOfElement$StreamControllerOfIntersectionObserverEntry = dart.constFn(_js_helper.LinkedMap$(html.Element, StreamControllerOfIntersectionObserverEntry())))();
  let ListAndIntersectionObserverTovoid = () => (ListAndIntersectionObserverTovoid = dart.constFn(dart.fnType(dart.void, [core$.List, html.IntersectionObserver])))();
  let StreamControllerOfScrollHostEvent = () => (StreamControllerOfScrollHostEvent = dart.constFn(async.StreamController$(src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent)))();
  let ZonedStreamOfScrollHostEvent = () => (ZonedStreamOfScrollHostEvent = dart.constFn(src__utils__async__zoned_async.ZonedStream$(src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent)))();
  let ScrollHostEventToNull = () => (ScrollHostEventToNull = dart.constFn(dart.fnType(core$.Null, [src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let MapOfElement$StreamControllerOfIntersectionObserverEntry = () => (MapOfElement$StreamControllerOfIntersectionObserverEntry = dart.constFn(core$.Map$(html.Element, StreamControllerOfIntersectionObserverEntry())))();
  let StreamOfScrollHostEvent = () => (StreamOfScrollHostEvent = dart.constFn(async.Stream$(src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent)))();
  let PanEventToNull = () => (PanEventToNull = dart.constFn(dart.fnType(core$.Null, [src__utils__angular__scroll_host__scroll_host_interface.PanEvent])))();
  const _controller = Symbol('_controller');
  const _stream = Symbol('_stream');
  const _onWheelSubscription = Symbol('_onWheelSubscription');
  const _onScrollSubscription = Symbol('_onScrollSubscription');
  const _panTop = Symbol('_panTop');
  const _panRight = Symbol('_panRight');
  const _panBottom = Symbol('_panBottom');
  const _panLeft = Symbol('_panLeft');
  const _wasPanning = Symbol('_wasPanning');
  const _wasScrolling = Symbol('_wasScrolling');
  const _endPan = Symbol('_endPan');
  const _lastEvent = Symbol('_lastEvent');
  const _eventCollectTimer = Symbol('_eventCollectTimer');
  const _notificationSender = Symbol('_notificationSender');
  const _scrollCooldownTimer = Symbol('_scrollCooldownTimer');
  const _deduplicationTimer = Symbol('_deduplicationTimer');
  const _onListen = Symbol('_onListen');
  const _onCancel = Symbol('_onCancel');
  const _scheduleNotification = Symbol('_scheduleNotification');
  const _scheduleScrollingCooldown = Symbol('_scheduleScrollingCooldown');
  const _hasPan = Symbol('_hasPan');
  const _hasNotification = Symbol('_hasNotification');
  const _resetPans = Symbol('_resetPans');
  const _scheduleDeduplication = Symbol('_scheduleDeduplication');
  const _cancelSubscriptions = Symbol('_cancelSubscriptions');
  const _cancelScrollingCooldown = Symbol('_cancelScrollingCooldown');
  const _cancelDeduplication = Symbol('_cancelDeduplication');
  src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController = class NonTouchPanController extends core$.Object {
    get ngZone() {
      return this[ngZone$];
    }
    set ngZone(value) {
      super.ngZone = value;
    }
    get domService() {
      return this[domService$];
    }
    set domService(value) {
      super.domService = value;
    }
    get host() {
      return this[host$];
    }
    set host(value) {
      super.host = value;
    }
    get onPan() {
      if (this[_controller] == null) {
        if (!(this[_stream] == null)) dart.assertFailed();
        this[_controller] = StreamControllerOfPanEvent().broadcast({sync: true, onListen: dart.bind(this, _onListen), onCancel: dart.bind(this, _onCancel)});
        this[_stream] = new (ZonedStreamOfPanEvent()).new(this[_controller].stream, dart.bind(this.ngZone, 'runOutsideAngular'));
      }
      return this[_stream];
    }
    get maxScrollX() {
      return dart.notNull(this.host[$scrollWidth]) - dart.notNull(this.host.clientWidth);
    }
    get maxScrollY() {
      return dart.notNull(this.host[$scrollHeight]) - dart.notNull(this.host.clientHeight);
    }
    [_onListen]() {
      if (!(this[_onWheelSubscription] == null)) dart.assertFailed();
      this.ngZone.runOutsideAngular(dart.fn(() => {
        this[_onWheelSubscription] = this.host[$onMouseWheel].listen(dart.fn(event => {
          if (dart.test(this[_wasScrolling])) return;
          this[_panTop] = dart.test(this[_panTop]) || dart.notNull(event[$deltaY]) < 0 && this.host[$scrollTop] === 0;
          this[_panRight] = dart.test(this[_panRight]) || dart.notNull(event[$deltaX]) > 0 && this.host[$scrollLeft] == this.maxScrollX;
          this[_panBottom] = dart.test(this[_panBottom]) || dart.notNull(event[$deltaY]) > 0 && this.host[$scrollTop] == this.maxScrollY;
          this[_panLeft] = dart.test(this[_panLeft]) || dart.notNull(event[$deltaX]) < 0 && this.host[$scrollLeft] === 0;
          this[_scheduleNotification]();
        }, WheelEventToNull()));
        this[_onScrollSubscription] = this.host[$onScroll].listen(dart.fn(event => {
          this[_wasScrolling] = true;
          this[_scheduleScrollingCooldown]();
          if (dart.test(this[_wasPanning])) {
            this[_endPan] = true;
            this[_scheduleNotification]();
          }
        }, EventToNull()));
      }, VoidToNull()));
    }
    get [_hasPan]() {
      return dart.test(this[_panTop]) || dart.test(this[_panRight]) || dart.test(this[_panBottom]) || dart.test(this[_panLeft]);
    }
    get [_hasNotification]() {
      return dart.test(this[_hasPan]) || dart.test(this[_endPan]);
    }
    [_resetPans]() {
      this[_panTop] = false;
      this[_panRight] = false;
      this[_panBottom] = false;
      this[_panLeft] = false;
    }
    [_scheduleNotification]() {
      if (this[_eventCollectTimer] != null) return;
      if (!dart.test(this[_hasNotification])) return;
      this[_eventCollectTimer] = async.Timer.new(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController._eventCollectDuration, dart.fn(() => {
        this[_eventCollectTimer] = null;
        if (this[_notificationSender] != null) {
          this[_scheduleNotification]();
          return;
        }
        if (dart.test(this[_endPan])) this[_resetPans]();
        let event = new src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl.new(this[_panTop], this[_panRight], this[_panBottom], this[_panLeft]);
        if (!event._equals(this[_lastEvent]) && dart.test(event.isValid) && !dart.test(event.isSubsetOf(this[_lastEvent]))) {
          this[_notificationSender] = this.domService.scheduleRead(dart.fn(() => {
            this[_notificationSender] = null;
            this[_controller].add(event);
          }, VoidToNull()));
          this[_lastEvent] = event;
          this[_scheduleDeduplication]();
        }
        this[_wasPanning] = (dart.test(this[_wasPanning]) || dart.test(this[_hasPan])) && !dart.test(this[_endPan]);
        this[_resetPans]();
        this[_endPan] = false;
      }, VoidToNull()));
    }
    [_onCancel]() {
      this[_cancelSubscriptions]();
    }
    [_cancelSubscriptions]() {
      if (this[_onWheelSubscription] != null) {
        this[_onWheelSubscription].cancel();
        this[_onWheelSubscription] = null;
      }
      if (this[_onScrollSubscription] != null) {
        this[_onScrollSubscription].cancel();
        this[_onScrollSubscription] = null;
      }
    }
    [_scheduleScrollingCooldown]() {
      this[_cancelScrollingCooldown]();
      this[_scrollCooldownTimer] = async.Timer.new(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController._scrollCooldownDuration, dart.fn(() => {
        this[_scrollCooldownTimer] = null;
        this[_wasScrolling] = false;
      }, VoidToNull()));
    }
    [_cancelScrollingCooldown]() {
      if (this[_scrollCooldownTimer] != null) {
        this[_scrollCooldownTimer].cancel();
        this[_scrollCooldownTimer] = null;
      }
    }
    [_scheduleDeduplication]() {
      this[_cancelDeduplication]();
      this[_deduplicationTimer] = async.Timer.new(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController._deduplicationDuration, dart.fn(() => {
        this[_deduplicationTimer] = null;
        this[_lastEvent] = null;
      }, VoidToNull()));
    }
    [_cancelDeduplication]() {
      if (this[_deduplicationTimer] != null) {
        this[_deduplicationTimer].cancel();
        this[_deduplicationTimer] = null;
      }
    }
    dispose() {
      if (this[_notificationSender] != null) {
        this[_notificationSender].dispose();
        this[_notificationSender] = null;
      }
      if (this[_controller] != null) {
        this[_controller].close();
      }
      this[_cancelSubscriptions]();
      if (this[_eventCollectTimer] != null) {
        this[_eventCollectTimer].cancel();
        this[_eventCollectTimer] = null;
      }
      this[_cancelScrollingCooldown]();
      this[_cancelDeduplication]();
    }
  };
  (src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController.new = function(ngZone, domService, host) {
    this[_controller] = null;
    this[_stream] = null;
    this[_onWheelSubscription] = null;
    this[_onScrollSubscription] = null;
    this[_panTop] = false;
    this[_panRight] = false;
    this[_panBottom] = false;
    this[_panLeft] = false;
    this[_wasPanning] = false;
    this[_wasScrolling] = false;
    this[_endPan] = false;
    this[_lastEvent] = null;
    this[_eventCollectTimer] = null;
    this[_notificationSender] = null;
    this[_scrollCooldownTimer] = null;
    this[_deduplicationTimer] = null;
    this[ngZone$] = ngZone;
    this[domService$] = domService;
    this[host$] = host;
  }).prototype = src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController);
  const ngZone$ = Symbol("NonTouchPanController.ngZone");
  const domService$ = Symbol("NonTouchPanController.domService");
  const host$ = Symbol("NonTouchPanController.host");
  src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController[dart.implements] = () => [src__utils__angular__scroll_host__scroll_host_interface.PanController];
  dart.setMethodSignature(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController.__proto__),
    [_onListen]: dart.fnType(dart.void, []),
    [_resetPans]: dart.fnType(dart.dynamic, []),
    [_scheduleNotification]: dart.fnType(dart.void, []),
    [_onCancel]: dart.fnType(dart.void, []),
    [_cancelSubscriptions]: dart.fnType(dart.void, []),
    [_scheduleScrollingCooldown]: dart.fnType(dart.void, []),
    [_cancelScrollingCooldown]: dart.fnType(dart.void, []),
    [_scheduleDeduplication]: dart.fnType(dart.dynamic, []),
    [_cancelDeduplication]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController, () => ({
    __proto__: dart.getGetters(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController.__proto__),
    onPan: async.Stream$(src__utils__angular__scroll_host__scroll_host_interface.PanEvent),
    maxScrollX: core$.int,
    maxScrollY: core$.int,
    [_hasPan]: core$.bool,
    [_hasNotification]: core$.bool
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController.__proto__),
    ngZone: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    domService: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    host: dart.finalFieldType(html.Element),
    [_controller]: dart.fieldType(StreamControllerOfPanEvent()),
    [_stream]: dart.fieldType(StreamOfPanEvent()),
    [_onWheelSubscription]: dart.fieldType(StreamSubscriptionOfWheelEvent()),
    [_onScrollSubscription]: dart.fieldType(StreamSubscriptionOfEvent()),
    [_panTop]: dart.fieldType(core$.bool),
    [_panRight]: dart.fieldType(core$.bool),
    [_panBottom]: dart.fieldType(core$.bool),
    [_panLeft]: dart.fieldType(core$.bool),
    [_wasPanning]: dart.fieldType(core$.bool),
    [_wasScrolling]: dart.fieldType(core$.bool),
    [_endPan]: dart.fieldType(core$.bool),
    [_lastEvent]: dart.fieldType(src__utils__angular__scroll_host__scroll_host_interface.PanEvent),
    [_eventCollectTimer]: dart.fieldType(async.Timer),
    [_notificationSender]: dart.fieldType(utils__disposer__disposer.Disposable),
    [_scrollCooldownTimer]: dart.fieldType(async.Timer),
    [_deduplicationTimer]: dart.fieldType(async.Timer)
  }));
  dart.defineLazy(src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController, {
    /*src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController._eventCollectDuration*/get _eventCollectDuration() {
      return new core$.Duration.new({milliseconds: 50});
    },
    /*src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController._scrollCooldownDuration*/get _scrollCooldownDuration() {
      return new core$.Duration.new({seconds: 1});
    },
    /*src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController._deduplicationDuration*/get _deduplicationDuration() {
      return new core$.Duration.new({seconds: 4});
    }
  });
  src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl = class PanEventImpl extends core$.Object {
    get isTop() {
      return this[isTop$];
    }
    set isTop(value) {
      super.isTop = value;
    }
    get isRight() {
      return this[isRight$];
    }
    set isRight(value) {
      super.isRight = value;
    }
    get isBottom() {
      return this[isBottom$];
    }
    set isBottom(value) {
      super.isBottom = value;
    }
    get isLeft() {
      return this[isLeft$];
    }
    set isLeft(value) {
      super.isLeft = value;
    }
    get isPanning() {
      return dart.test(this.isTop) || dart.test(this.isRight) || dart.test(this.isBottom) || dart.test(this.isLeft);
    }
    get deltaX() {
      return 0;
    }
    get deltaY() {
      return 0;
    }
    get hasConflicts() {
      return dart.test(this.isTop) && dart.test(this.isBottom) || dart.test(this.isLeft) && dart.test(this.isRight);
    }
    get isValid() {
      return !dart.test(this.hasConflicts);
    }
    isSubsetOf(other) {
      return src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl.is(other) && (!dart.test(this.isTop) || dart.test(other.isTop)) && (!dart.test(this.isRight) || dart.test(other.isRight)) && (!dart.test(this.isBottom) || dart.test(other.isBottom)) && (!dart.test(this.isLeft) || dart.test(other.isLeft)) && dart.test(this.isPanning);
    }
    _equals(other) {
      if (other == null) return false;
      return src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl.is(other) && this.isTop == other.isTop && this.isRight == other.isRight && this.isBottom == other.isBottom && this.isLeft == other.isLeft;
    }
    toString() {
      return dart.str(this.isPanning) + " " + (dart.test(this.isTop) ? "t" : "") + ((dart.test(this.isRight) ? "r" : "") + (dart.test(this.isBottom) ? "b" : "") + (dart.test(this.isLeft) ? "l" : ""));
    }
  };
  (src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl.new = function(isTop, isRight, isBottom, isLeft) {
    this[isTop$] = isTop;
    this[isRight$] = isRight;
    this[isBottom$] = isBottom;
    this[isLeft$] = isLeft;
  }).prototype = src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl);
  const isTop$ = Symbol("PanEventImpl.isTop");
  const isRight$ = Symbol("PanEventImpl.isRight");
  const isBottom$ = Symbol("PanEventImpl.isBottom");
  const isLeft$ = Symbol("PanEventImpl.isLeft");
  src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl[dart.implements] = () => [src__utils__angular__scroll_host__scroll_host_interface.PanEvent];
  dart.setMethodSignature(src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl.__proto__),
    isSubsetOf: dart.fnType(core$.bool, [dart.dynamic])
  }));
  dart.setGetterSignature(src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl, () => ({
    __proto__: dart.getGetters(src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl.__proto__),
    isPanning: core$.bool,
    deltaX: core$.int,
    deltaY: core$.int,
    hasConflicts: core$.bool,
    isValid: core$.bool
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl.__proto__),
    isTop: dart.finalFieldType(core$.bool),
    isRight: dart.finalFieldType(core$.bool),
    isBottom: dart.finalFieldType(core$.bool),
    isLeft: dart.finalFieldType(core$.bool)
  }));
  dart.defineExtensionMethods(src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl, ['_equals', 'toString']);
  const _scrollHost = Symbol('_scrollHost');
  const _stickyElements = Symbol('_stickyElements');
  const _isUpdateScheduled = Symbol('_isUpdateScheduled');
  const _scheduleUpdate = Symbol('_scheduleUpdate');
  const _removeStickyStyle = Symbol('_removeStickyStyle');
  const _update = Symbol('_update');
  const _startIntersectionSubscription = Symbol('_startIntersectionSubscription');
  const _addStickyStyle = Symbol('_addStickyStyle');
  const _stopIntersectionSubscription = Symbol('_stopIntersectionSubscription');
  const _updateLayout = Symbol('_updateLayout');
  src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController = class PositionStickyController extends core$.Object {
    get usePositionSticky() {
      return this[usePositionSticky];
    }
    set usePositionSticky(value) {
      super.usePositionSticky = value;
    }
    stick(element, position, range, opts) {
      let stickyClass = opts && 'stickyClass' in opts ? opts.stickyClass : null;
      let stickyKey = opts && 'stickyKey' in opts ? opts.stickyKey : null;
      let stickyElement = new src__utils__angular__scroll_host__position_sticky_controller._StickyElement.new(element, position, range, stickyClass, stickyKey);
      if (dart.test(this[_stickyElements][$contains](stickyElement))) return;
      this[_stickyElements][$removeWhere](dart.fn(stickyElement => dart.equals(element, stickyElement.element), _StickyElementTobool()));
      this[_stickyElements][$add](stickyElement);
      this[_scheduleUpdate]();
    }
    unstick(element) {
      let stickyElement = null;
      for (let e of this[_stickyElements]) {
        if (dart.equals(element, e.element)) {
          stickyElement = e;
          break;
        }
      }
      if (stickyElement == null) return;
      this[_stickyElements][$remove](stickyElement);
      this[_removeStickyStyle](stickyElement);
      this[_scheduleUpdate]();
    }
    syncOnScroll() {}
    trackFloating(element) {}
    untrackFloating(element) {}
    get enableSmoothPushing() {
      return false;
    }
    set enableSmoothPushing(_) {}
    dispose() {
      for (let stickyElement of this[_stickyElements]) {
        this[_removeStickyStyle](stickyElement);
      }
      this[_stickyElements][$clear]();
    }
    [_scheduleUpdate]() {
      if (dart.test(this[_isUpdateScheduled])) return;
      this[_isUpdateScheduled] = true;
      html.window[$requestAnimationFrame](dart.fn(_ => {
        this[_isUpdateScheduled] = false;
        this[_update]();
      }, numToNull()));
    }
    [_addStickyStyle](stickyElement, positionProperty, zIndex, offset) {
      let _ = stickyElement.element.style;
      _[$position] = "sticky";
      _[$zIndex] = dart.str(zIndex);
      stickyElement.element.style[$setProperty](positionProperty, dart.str(offset) + "px");
      if (stickyElement.stickyClass != null) {
        if (dart.test(utils__browser__feature_detector__feature_detector.supportsIntersectionObserver)) {
          if (stickyElement.intersectionSubscription == null) {
            this[_startIntersectionSubscription](stickyElement);
          }
          stickyElement.intersectionElement.style[$setProperty](positionProperty, dart.str(-(dart.notNull(offset) + 2)) + "px");
        } else {
          stickyElement.element[$classes].add(stickyElement.stickyClass);
        }
      }
    }
    [_removeStickyStyle](stickyElement) {
      let _ = stickyElement.element.style;
      _[$position] = "";
      _[$zIndex] = "";
      _[$top] = "";
      _[$bottom] = "";
      if (stickyElement.stickyClass != null) {
        stickyElement.element[$classes].remove(stickyElement.stickyClass);
        if (stickyElement.intersectionSubscription != null) {
          this[_stopIntersectionSubscription](stickyElement);
        }
      }
    }
    [_startIntersectionSubscription](stickyElement) {
      if (!(stickyElement.intersectionElement == null)) dart.assertFailed();
      if (!(stickyElement.intersectionSubscription == null)) dart.assertFailed();
      stickyElement.intersectionElement = (() => {
        let _ = html.DivElement.new();
        _.style[$width] = "0px";
        _.style[$height] = "1px";
        _.style[$position] = "absolute";
        return _;
      })();
      stickyElement.element[$append](stickyElement.intersectionElement);
      stickyElement.intersectionSubscription = this[_scrollHost].onIntersection(stickyElement.intersectionElement).listen(dart.fn(e => {
        if (dart.notNull(e.intersectionRect[$height]) > 0) {
          stickyElement.element[$classes].remove(stickyElement.stickyClass);
        } else {
          stickyElement.element[$classes].add(stickyElement.stickyClass);
        }
      }, IntersectionObserverEntryToNull()));
    }
    [_stopIntersectionSubscription](stickyElement) {
      stickyElement.intersectionSubscription.cancel();
      stickyElement.intersectionElement[$remove]();
      stickyElement.intersectionSubscription = null;
      stickyElement.intersectionElement = null;
    }
    [_update]() {
      let topElements = this[_stickyElements][$where](dart.fn(e => e.position === src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.TOP, _StickyElementTobool()))[$toList]();
      let bottomElements = this[_stickyElements][$where](dart.fn(e => e.position === src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.BOTTOM, _StickyElementTobool()))[$toList]();
      let zIndex = this[_updateLayout](topElements, 1, "top", src__utils__angular__scroll_host__scroll_host_interface.stickyControllerZIndex);
      this[_updateLayout](bottomElements, -1, "bottom", zIndex);
    }
    [_updateLayout](elements, sortOrder, positionProperty, startZIndex) {
      let elementsAndRects = elements[$map](ListOfObject(), dart.fn(e => JSArrayOfObject().of([e, e.element.getBoundingClientRect()]), _StickyElementToListOfObject()))[$toList]();
      elementsAndRects[$sort](dart.fn((a, b) => {
        let elementA = src__utils__angular__scroll_host__position_sticky_controller._StickyElement._check(a[$_get](0));
        let elementB = src__utils__angular__scroll_host__position_sticky_controller._StickyElement._check(b[$_get](0));
        return dart.notNull(sortOrder) * dart.notNull(utils__browser__events__events.compareDocumentPosition(elementA.element, elementB.element));
      }, ListOfObjectAndListOfObjectToint()));
      let stickyKeyOffsets = new (IdentityMapOfString$num()).new();
      let offset = 0;
      let zIndex = startZIndex;
      for (let item of elementsAndRects) {
        let stickyElement = src__utils__angular__scroll_host__position_sticky_controller._StickyElement._check(item[$_get](0));
        let rect = RectangleOfnum()._check(item[$_get](1));
        if (stickyElement.stickyKey != null) {
          if (stickyKeyOffsets[$_get](stickyElement.stickyKey) == null) {
            stickyKeyOffsets[$_set](stickyElement.stickyKey, offset);
            offset = offset + dart.notNull(rect[$height]);
          }
          this[_addStickyStyle](stickyElement, positionProperty, zIndex, stickyKeyOffsets[$_get](stickyElement.stickyKey));
        } else {
          this[_addStickyStyle](stickyElement, positionProperty, zIndex, offset);
          offset = offset + dart.notNull(rect[$height]);
        }
        zIndex = dart.notNull(zIndex) + 1;
      }
      return dart.asInt(zIndex);
    }
  };
  (src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController.new = function(scrollHost) {
    this[_stickyElements] = JSArrayOf_StickyElement().of([]);
    this[usePositionSticky] = true;
    this[_isUpdateScheduled] = false;
    this[_scrollHost] = scrollHost;
  }).prototype = src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController);
  const usePositionSticky = Symbol("PositionStickyController.usePositionSticky");
  src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController[dart.implements] = () => [src__utils__angular__scroll_host__scroll_host_interface.StickyController];
  dart.setMethodSignature(src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController.__proto__),
    stick: dart.fnType(dart.void, [html.Element, src__utils__angular__scroll_host__scroll_host_interface.StickyPosition, html.Element], {stickyClass: core$.String, stickyKey: core$.String}),
    unstick: dart.fnType(dart.void, [html.Element]),
    syncOnScroll: dart.fnType(dart.void, []),
    trackFloating: dart.fnType(dart.void, [html.Element]),
    untrackFloating: dart.fnType(dart.void, [html.Element]),
    dispose: dart.fnType(dart.void, []),
    [_scheduleUpdate]: dart.fnType(dart.void, []),
    [_addStickyStyle]: dart.fnType(dart.void, [src__utils__angular__scroll_host__position_sticky_controller._StickyElement, core$.String, core$.num, core$.num]),
    [_removeStickyStyle]: dart.fnType(dart.void, [src__utils__angular__scroll_host__position_sticky_controller._StickyElement]),
    [_startIntersectionSubscription]: dart.fnType(dart.void, [src__utils__angular__scroll_host__position_sticky_controller._StickyElement]),
    [_stopIntersectionSubscription]: dart.fnType(dart.void, [src__utils__angular__scroll_host__position_sticky_controller._StickyElement]),
    [_update]: dart.fnType(dart.void, []),
    [_updateLayout]: dart.fnType(core$.int, [core$.List$(src__utils__angular__scroll_host__position_sticky_controller._StickyElement), core$.int, core$.String, core$.int])
  }));
  dart.setGetterSignature(src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController, () => ({
    __proto__: dart.getGetters(src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController.__proto__),
    enableSmoothPushing: core$.bool
  }));
  dart.setSetterSignature(src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController, () => ({
    __proto__: dart.getSetters(src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController.__proto__),
    enableSmoothPushing: core$.bool
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController.__proto__),
    [_scrollHost]: dart.finalFieldType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost),
    [_stickyElements]: dart.finalFieldType(ListOf_StickyElement()),
    usePositionSticky: dart.finalFieldType(core$.bool),
    [_isUpdateScheduled]: dart.fieldType(core$.bool)
  }));
  src__utils__angular__scroll_host__position_sticky_controller._StickyElement = class _StickyElement extends core$.Object {
    _equals(other) {
      if (other == null) return false;
      if (!src__utils__angular__scroll_host__position_sticky_controller._StickyElement.is(other)) return false;
      let o = src__utils__angular__scroll_host__position_sticky_controller._StickyElement._check(other);
      return dart.equals(this.element, o.element) && this.position == o.position && dart.equals(this.range, o.range) && this.stickyClass == o.stickyClass && this.stickyKey == o.stickyKey;
    }
    get hashCode() {
      return core$0.hashObjects([this.element, this.position, this.range, this.stickyClass, this.stickyKey]);
    }
  };
  (src__utils__angular__scroll_host__position_sticky_controller._StickyElement.new = function(element, position, range, stickyClass, stickyKey) {
    this.intersectionElement = null;
    this.intersectionSubscription = null;
    this.element = element;
    this.position = position;
    this.range = range;
    this.stickyClass = stickyClass;
    this.stickyKey = stickyKey;
  }).prototype = src__utils__angular__scroll_host__position_sticky_controller._StickyElement.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__position_sticky_controller._StickyElement);
  dart.setMethodSignature(src__utils__angular__scroll_host__position_sticky_controller._StickyElement, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__position_sticky_controller._StickyElement.__proto__),
    _equals: dart.fnType(core$.bool, [core$.Object]),
    [$_equals]: dart.fnType(core$.bool, [core$.Object])
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__position_sticky_controller._StickyElement, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__position_sticky_controller._StickyElement.__proto__),
    element: dart.finalFieldType(html.Element),
    position: dart.finalFieldType(src__utils__angular__scroll_host__scroll_host_interface.StickyPosition),
    range: dart.finalFieldType(html.Element),
    stickyClass: dart.finalFieldType(core$.String),
    stickyKey: dart.finalFieldType(core$.String),
    intersectionElement: dart.fieldType(html.Element),
    intersectionSubscription: dart.fieldType(StreamSubscriptionOfIntersectionObserverEntry())
  }));
  dart.defineExtensionMethods(src__utils__angular__scroll_host__position_sticky_controller._StickyElement, ['_equals']);
  dart.defineExtensionAccessors(src__utils__angular__scroll_host__position_sticky_controller._StickyElement, ['hashCode']);
  const _domService = Symbol('_domService');
  const _scrollHost$ = Symbol('_scrollHost');
  const _layoutSubscription = Symbol('_layoutSubscription');
  const _rowMap = Symbol('_rowMap');
  const _floatingElements = Symbol('_floatingElements');
  const _orderedRows = Symbol('_orderedRows');
  const _currentLayout = Symbol('_currentLayout');
  const _startEventListeners = Symbol('_startEventListeners');
  const _stopEventListeners = Symbol('_stopEventListeners');
  const _checkAndUpdateLayout = Symbol('_checkAndUpdateLayout');
  const _scheduleLayoutCheck = Symbol('_scheduleLayoutCheck');
  const _getAvailableArea = Symbol('_getAvailableArea');
  const _observeRowPositions = Symbol('_observeRowPositions');
  const _getLayout = Symbol('_getLayout');
  const _updateContainer = Symbol('_updateContainer');
  src__utils__angular__scroll_host__sticky_controller_impl.StickyControllerImpl = class StickyControllerImpl extends core$.Object {
    get usePositionSticky() {
      return this[usePositionSticky$];
    }
    set usePositionSticky(value) {
      super.usePositionSticky = value;
    }
    stick(element, position, range, opts) {
      let stickyClass = opts && 'stickyClass' in opts ? opts.stickyClass : null;
      let stickyKey = opts && 'stickyKey' in opts ? opts.stickyKey : null;
      let row = this[_rowMap][$_get](element);
      if (row != null && row.position == position && dart.equals(row.range, range) && row.stickyKey == stickyKey) {
        return;
      }
      this.unstick(element);
      this[_rowMap][$_set](element, new src__utils__angular__scroll_host__sticky_controller_impl._StickyRow.new(element, position, range, stickyClass, stickyKey));
      this[_startEventListeners]();
    }
    unstick(element) {
      this[_orderedRows] = null;
      let row = this[_rowMap][$remove](element);
      if (row == null) return;
      let t = this[_currentLayout];
      t == null ? null : t.remove(row);
      row.resetTop();
      if (dart.test(this[_rowMap][$isEmpty])) {
        this[_stopEventListeners]();
      }
    }
    syncOnScroll() {
      if (dart.test(this[_rowMap][$isNotEmpty])) this[_checkAndUpdateLayout]();
    }
    trackFloating(element) {
      this[_floatingElements].add(element);
      this[_scheduleLayoutCheck]();
    }
    untrackFloating(element) {
      this[_floatingElements].remove(element);
      this[_scheduleLayoutCheck]();
    }
    get enableSmoothPushing() {
      return this[enableSmoothPushing];
    }
    set enableSmoothPushing(value) {
      this[enableSmoothPushing] = value;
    }
    dispose() {
      if (dart.test(this[_rowMap][$isNotEmpty])) {
        let toRemove = ListOfElement().from(this[_rowMap][$keys]);
        for (let element of toRemove) {
          this.unstick(element);
        }
      }
    }
    [_scheduleLayoutCheck]() {
      this[_domService].scheduleWrite(dart.fn(() => {
      }, VoidToNull()));
    }
    [_startEventListeners]() {
      if (this[_layoutSubscription] != null) return;
      this[_layoutSubscription] = this[_domService].onLayoutChanged.listen(dart.fn(_ => {
        this[_checkAndUpdateLayout]();
      }, dynamicToNull()));
      this[_scrollHost$].startNativeScrollListener();
      this[_scheduleLayoutCheck]();
    }
    [_stopEventListeners]() {
      if (this[_layoutSubscription] != null) {
        this[_layoutSubscription].cancel();
        this[_layoutSubscription] = null;
      }
    }
    [_getAvailableArea]() {
      let hostRect = this[_scrollHost$].calcViewportRect();
      for (let element of this[_floatingElements]) {
        let rect = element.getBoundingClientRect();
        let rectMiddle = dart.notNull(rect[$top]) + dart.notNull(rect[$height]) / 2.0;
        let topDistance = (dart.notNull(hostRect[$top]) - rectMiddle)[$abs]();
        let bottomDistance = (dart.notNull(hostRect[$bottom]) - rectMiddle)[$abs]();
        if (topDistance < bottomDistance) {
          let newTop = math.max(core$.num, hostRect[$top], rect[$bottom]);
          let newHeight = dart.notNull(hostRect[$bottom]) - newTop;
          if (newTop !== hostRect[$top] && newHeight > 0) {
            hostRect = new (RectangleOfnum()).new(hostRect[$left], newTop, hostRect[$width], newHeight);
          }
        } else {
          let newBottom = math.min(core$.num, hostRect[$bottom], rect[$top]);
          let newHeight = newBottom - dart.notNull(hostRect[$top]);
          if (newBottom !== hostRect[$bottom] && newHeight > 0) {
            hostRect = new (RectangleOfnum()).new(hostRect[$left], hostRect[$top], hostRect[$width], newHeight);
          }
        }
      }
      return new (RectangleOfnum()).new(hostRect[$left], hostRect[$top], hostRect[$width], hostRect[$height]);
    }
    [_getLayout]() {
      this[_observeRowPositions]();
      let hostPosition = this[_getAvailableArea]();
      return src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils.calculateLayout(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow, hostPosition, this[_orderedRows], {enableSmoothPushing: this.enableSmoothPushing});
    }
    [_checkAndUpdateLayout]() {
      let layout = this[_getLayout]();
      if (!dart.equals(layout, this[_currentLayout]) && this[_orderedRows] != null) {
        this[_updateContainer](layout);
      }
    }
    [_observeRowPositions]() {
      if (this[_orderedRows] == null) {
        this[_orderedRows] = this[_rowMap][$values][$toList]();
      }
      for (let i = 0; i < dart.notNull(this[_orderedRows][$length]); i++) {
        this[_orderedRows][$_get](i).readRowPositions();
      }
      this[_orderedRows][$sort](dart.fn((a, b) => a.rowPosition[$top][$compareTo](b.rowPosition[$top]), _StickyRowAnd_StickyRowToint()));
    }
    [_updateContainer](layout) {
      if (layout.topRows != null) {
        let top = layout.hostPosition[$top];
        for (let i = 0; i < dart.notNull(layout.topRows[$length]); i++) {
          let data = layout.topRows[$_get](i);
          data.row.moveToTop(dart.notNull(top) + dart.notNull(data.offsetY));
          top = dart.notNull(top) + dart.notNull(data.row.rowPosition[$height]);
        }
      }
      if (layout.bottomRows != null) {
        let top = layout.hostPosition[$bottom];
        for (let i = dart.notNull(layout.bottomRows[$length]) - 1; i >= 0; i--) {
          let data = layout.bottomRows[$_get](i);
          top = dart.notNull(top) - dart.notNull(data.row.rowPosition[$height]);
          data.row.moveToTop(dart.notNull(top) + dart.notNull(data.offsetY));
        }
      }
      if (layout.hiddenRows != null) {
        for (let i = 0; i < dart.notNull(layout.hiddenRows[$length]); i++) {
          layout.hiddenRows[$_get](i).softResetTop();
        }
      }
      this[_currentLayout] = layout;
    }
  };
  (src__utils__angular__scroll_host__sticky_controller_impl.StickyControllerImpl.new = function(domService, scrollHost) {
    this[usePositionSticky$] = false;
    this[_layoutSubscription] = null;
    this[_rowMap] = new (LinkedMapOfElement$_StickyRow()).new();
    this[_floatingElements] = new (_HashSetOfElement()).new();
    this[_orderedRows] = null;
    this[_currentLayout] = null;
    this[enableSmoothPushing] = false;
    this[_domService] = domService;
    this[_scrollHost$] = scrollHost;
  }).prototype = src__utils__angular__scroll_host__sticky_controller_impl.StickyControllerImpl.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__sticky_controller_impl.StickyControllerImpl);
  const usePositionSticky$ = Symbol("StickyControllerImpl.usePositionSticky");
  const enableSmoothPushing = Symbol("StickyControllerImpl.enableSmoothPushing");
  src__utils__angular__scroll_host__sticky_controller_impl.StickyControllerImpl[dart.implements] = () => [src__utils__angular__scroll_host__scroll_host_interface.StickyController];
  dart.setMethodSignature(src__utils__angular__scroll_host__sticky_controller_impl.StickyControllerImpl, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__sticky_controller_impl.StickyControllerImpl.__proto__),
    stick: dart.fnType(dart.void, [html.Element, src__utils__angular__scroll_host__scroll_host_interface.StickyPosition, html.Element], {stickyClass: core$.String, stickyKey: core$.String}),
    unstick: dart.fnType(dart.void, [html.Element]),
    syncOnScroll: dart.fnType(dart.void, []),
    trackFloating: dart.fnType(dart.void, [html.Element]),
    untrackFloating: dart.fnType(dart.void, [html.Element]),
    dispose: dart.fnType(dart.void, []),
    [_scheduleLayoutCheck]: dart.fnType(dart.void, []),
    [_startEventListeners]: dart.fnType(dart.void, []),
    [_stopEventListeners]: dart.fnType(dart.void, []),
    [_getAvailableArea]: dart.fnType(math.Rectangle$(core$.num), []),
    [_getLayout]: dart.fnType(src__utils__angular__scroll_host__sticky_controller_impl.StickyContainerLayout$(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow), []),
    [_checkAndUpdateLayout]: dart.fnType(dart.void, []),
    [_observeRowPositions]: dart.fnType(dart.void, []),
    [_updateContainer]: dart.fnType(dart.void, [src__utils__angular__scroll_host__sticky_controller_impl.StickyContainerLayout$(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow)])
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__sticky_controller_impl.StickyControllerImpl, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__sticky_controller_impl.StickyControllerImpl.__proto__),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_scrollHost$]: dart.finalFieldType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost),
    usePositionSticky: dart.finalFieldType(core$.bool),
    [_layoutSubscription]: dart.fieldType(async.StreamSubscription),
    [_rowMap]: dart.finalFieldType(MapOfElement$_StickyRow()),
    [_floatingElements]: dart.fieldType(SetOfElement()),
    [_orderedRows]: dart.fieldType(ListOf_StickyRow()),
    [_currentLayout]: dart.fieldType(StickyContainerLayoutOf_StickyRow()),
    enableSmoothPushing: dart.fieldType(core$.bool)
  }));
  src__utils__angular__scroll_host__sticky_controller_impl.StickyRowPosition = class StickyRowPosition extends core$.Object {};
  (src__utils__angular__scroll_host__sticky_controller_impl.StickyRowPosition.new = function() {
  }).prototype = src__utils__angular__scroll_host__sticky_controller_impl.StickyRowPosition.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__sticky_controller_impl.StickyRowPosition);
  const _stickyKey = Symbol('_stickyKey');
  const _currentPosition = Symbol('_currentPosition');
  const _currentTransform = Symbol('_currentTransform');
  const _currentZIndex = Symbol('_currentZIndex');
  const _translateY = Symbol('_translateY');
  src__utils__angular__scroll_host__sticky_controller_impl._StickyRow = class _StickyRow extends core$.Object {
    set translateY(value) {
      this[_translateY] = value[$round]();
    }
    get translateY() {
      return this[_translateY];
    }
    get stickyKey() {
      return this[_stickyKey];
    }
    get isTop() {
      return this.position === src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.TOP;
    }
    get isBottom() {
      return this.position === src__utils__angular__scroll_host__scroll_host_interface.StickyPosition.BOTTOM;
    }
    readRowPositions() {
      this.rowPosition = this.element.getBoundingClientRect();
      if (this.translateY != null) {
        this.rowPosition = new (RectangleOfnum()).new(this.rowPosition[$left], dart.notNull(this.rowPosition[$top]) - dart.notNull(this.translateY), this.rowPosition[$width], this.rowPosition[$height]);
      }
      this.rangePosition = this.range == null ? null : this.range.getBoundingClientRect();
    }
    softResetTop() {
      if (this.translateY === 0) return;
      this.translateY = 0;
      if (this[_currentTransform] !== "" || this[_currentZIndex] !== "") {
        this.element.style[$transform] = "";
        this.element.style[$zIndex] = "";
      }
      this[_currentTransform] = "";
      this[_currentZIndex] = "";
      if (this.stickyClass != null) this.element[$classes].toggle(this.stickyClass, false);
    }
    resetTop() {
      this.softResetTop();
      if (this[_currentPosition] !== "") {
        this.element.style[$position] = "";
        this[_currentPosition] = "";
      }
    }
    moveToTop(top) {
      let newY = dart.notNull(top) - dart.notNull(this.rowPosition[$top]);
      if (this.translateY !== newY) {
        this.translateY = newY;
        let newTransform = "translate(0px, " + dart.str(this.translateY) + "px)";
        let newZIndex = dart.str(src__utils__angular__scroll_host__scroll_host_interface.stickyControllerZIndex);
        if (this[_currentPosition] !== "relative" || this[_currentTransform] !== newTransform || this[_currentZIndex] !== newZIndex) {
          this.element.style[$position] = "relative";
          this.element.style[$transform] = newTransform;
          this.element.style[$zIndex] = newZIndex;
          this[_currentPosition] = "relative";
          this[_currentTransform] = newTransform;
          this[_currentZIndex] = newZIndex;
        }
        if (this.stickyClass != null) this.element[$classes].toggle(this.stickyClass, true);
      }
    }
    toString() {
      return "_StickyRow " + dart.notNull(new (IdentityMapOfString$Object()).from(["isBottom", this.isBottom, "isTop", this.isTop, "rowPosition", this.rowPosition, "rangePosition", this.rangePosition, "translateY", this.translateY, "stickyClass", this.stickyClass])[$toString]());
    }
  };
  (src__utils__angular__scroll_host__sticky_controller_impl._StickyRow.new = function(element, position, range, stickyClass, stickyKey) {
    this.rowPosition = null;
    this.rangePosition = null;
    this[_currentPosition] = "";
    this[_currentTransform] = "";
    this[_currentZIndex] = "";
    this[_translateY] = 0;
    this.element = element;
    this.position = position;
    this.range = range;
    this.stickyClass = stickyClass;
    this[_stickyKey] = stickyKey;
    if (!(dart.test(this.isTop) || dart.test(this.isBottom))) dart.assertFailed();
  }).prototype = src__utils__angular__scroll_host__sticky_controller_impl._StickyRow.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow);
  src__utils__angular__scroll_host__sticky_controller_impl._StickyRow[dart.implements] = () => [src__utils__angular__scroll_host__sticky_controller_impl.StickyRowPosition];
  dart.setMethodSignature(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow.__proto__),
    readRowPositions: dart.fnType(dart.void, []),
    softResetTop: dart.fnType(dart.void, []),
    resetTop: dart.fnType(dart.void, []),
    moveToTop: dart.fnType(dart.void, [core$.num])
  }));
  dart.setGetterSignature(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow, () => ({
    __proto__: dart.getGetters(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow.__proto__),
    translateY: core$.num,
    stickyKey: core$.String,
    isTop: core$.bool,
    isBottom: core$.bool
  }));
  dart.setSetterSignature(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow, () => ({
    __proto__: dart.getSetters(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow.__proto__),
    translateY: core$.num
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow.__proto__),
    element: dart.finalFieldType(html.Element),
    position: dart.finalFieldType(src__utils__angular__scroll_host__scroll_host_interface.StickyPosition),
    range: dart.finalFieldType(html.Element),
    stickyClass: dart.finalFieldType(core$.String),
    [_stickyKey]: dart.finalFieldType(core$.String),
    rowPosition: dart.fieldType(RectangleOfnum()),
    rangePosition: dart.fieldType(RectangleOfnum()),
    [_currentPosition]: dart.fieldType(core$.String),
    [_currentTransform]: dart.fieldType(core$.String),
    [_currentZIndex]: dart.fieldType(core$.String),
    [_translateY]: dart.fieldType(core$.num)
  }));
  dart.defineExtensionMethods(src__utils__angular__scroll_host__sticky_controller_impl._StickyRow, ['toString']);
  const _is__RowData_default = Symbol('_is__RowData_default');
  src__utils__angular__scroll_host__sticky_controller_impl._RowData$ = dart.generic(T => {
    class _RowData extends core$.Object {
      _equals(other) {
        if (other == null) return false;
        return this === other || src__utils__angular__scroll_host__sticky_controller_impl._RowData.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.row, other.row) && this.offsetY == other.offsetY;
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.row)) ^ dart.hashCode(this.offsetY)) >>> 0;
      }
      toString() {
        return "_RowData{row: " + dart.str(this.row) + ", offsetY: " + dart.str(this.offsetY) + "}";
      }
    }
    (_RowData.new = function(row, opts) {
      let offsetY = opts && 'offsetY' in opts ? opts.offsetY : 0;
      this.row = row;
      this.offsetY = offsetY;
    }).prototype = _RowData.prototype;
    dart.addTypeTests(_RowData);
    _RowData.prototype[_is__RowData_default] = true;
    dart.setMethodSignature(_RowData, () => ({
      __proto__: dart.getMethods(_RowData.__proto__),
      _equals: dart.fnType(core$.bool, [core$.Object]),
      [$_equals]: dart.fnType(core$.bool, [core$.Object]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, [])
    }));
    dart.setGetterSignature(_RowData, () => ({
      __proto__: dart.getGetters(_RowData.__proto__),
      hashCode: core$.int,
      [$hashCode]: core$.int
    }));
    dart.setFieldSignature(_RowData, () => ({
      __proto__: dart.getFields(_RowData.__proto__),
      row: dart.fieldType(T),
      offsetY: dart.fieldType(core$.num)
    }));
    dart.defineExtensionMethods(_RowData, ['_equals', 'toString']);
    dart.defineExtensionAccessors(_RowData, ['hashCode']);
    return _RowData;
  });
  src__utils__angular__scroll_host__sticky_controller_impl._RowData = src__utils__angular__scroll_host__sticky_controller_impl._RowData$();
  dart.addTypeTests(src__utils__angular__scroll_host__sticky_controller_impl._RowData, _is__RowData_default);
  const _translateYs = Symbol('_translateYs');
  const _listEquals = Symbol('_listEquals');
  const _is_StickyContainerLayout_default = Symbol('_is_StickyContainerLayout_default');
  src__utils__angular__scroll_host__sticky_controller_impl.StickyContainerLayout$ = dart.generic(T => {
    let _RowDataOfT = () => (_RowDataOfT = dart.constFn(src__utils__angular__scroll_host__sticky_controller_impl._RowData$(T)))();
    let ListOf_RowDataOfT = () => (ListOf_RowDataOfT = dart.constFn(core$.List$(_RowDataOfT())))();
    let ListOfT = () => (ListOfT = dart.constFn(core$.List$(T)))();
    class StickyContainerLayout extends core$.Object {
      get hostPosition() {
        return this[hostPosition];
      }
      set hostPosition(value) {
        this[hostPosition] = value;
      }
      get topRows() {
        return this[topRows];
      }
      set topRows(value) {
        this[topRows] = ListOf_RowDataOfT()._check(value);
      }
      get bottomRows() {
        return this[bottomRows];
      }
      set bottomRows(value) {
        this[bottomRows] = ListOf_RowDataOfT()._check(value);
      }
      get hiddenRows() {
        return this[hiddenRows];
      }
      set hiddenRows(value) {
        this[hiddenRows] = ListOfT()._check(value);
      }
      _equals(other) {
        if (other == null) return false;
        return src__utils__angular__scroll_host__sticky_controller_impl.StickyContainerLayout.is(other) && dart.equals(this.hostPosition, other.hostPosition) && dart.test(this[_listEquals](this.topRows, other.topRows)) && dart.test(this[_listEquals](this.bottomRows, other.bottomRows)) && dart.test(this[_listEquals](this.hiddenRows, other.hiddenRows)) && dart.test(this[_listEquals](this[_translateYs], other[_translateYs]));
      }
      [_listEquals](aList, bList) {
        if (aList == null && bList == null) return true;
        if (aList == null || bList == null) return false;
        if (aList[$length] != bList[$length]) return false;
        for (let i = 0; i < dart.notNull(aList[$length]); i++) {
          if (!dart.equals(aList[$_get](i), bList[$_get](i))) {
            if (typeof aList[$_get](i) == 'number' && typeof bList[$_get](i) == 'number') {
              if (!dart.equals(dart.dsend(aList[$_get](i), 'floor', []), dart.dsend(bList[$_get](i), 'floor', []))) {
                return false;
              }
            } else {
              return false;
            }
          }
        }
        return true;
      }
      remove(row) {
        T._check(row);
        let t = this.topRows;
        t == null ? null : t[$remove](row);
        let t$ = this.bottomRows;
        t$ == null ? null : t$[$remove](row);
        let t$0 = this.hiddenRows;
        t$0 == null ? null : t$0[$remove](row);
      }
      toString() {
        return "StickyContainerLayout " + dart.notNull(new (IdentityMapOfString$Object()).from(["hostPosition", this.hostPosition, "topRows", this.topRows, "bottomRows", this.bottomRows, "hiddenRows", this.hiddenRows, "_translateYs", this[_translateYs]])[$toString]());
      }
    }
    (StickyContainerLayout.new = function() {
      this[hostPosition] = null;
      this[topRows] = null;
      this[bottomRows] = null;
      this[hiddenRows] = null;
      this[_translateYs] = null;
    }).prototype = StickyContainerLayout.prototype;
    dart.addTypeTests(StickyContainerLayout);
    StickyContainerLayout.prototype[_is_StickyContainerLayout_default] = true;
    const hostPosition = Symbol("StickyContainerLayout.hostPosition");
    const topRows = Symbol("StickyContainerLayout.topRows");
    const bottomRows = Symbol("StickyContainerLayout.bottomRows");
    const hiddenRows = Symbol("StickyContainerLayout.hiddenRows");
    dart.setMethodSignature(StickyContainerLayout, () => ({
      __proto__: dart.getMethods(StickyContainerLayout.__proto__),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      [_listEquals]: dart.fnType(core$.bool, [core$.List, core$.List]),
      remove: dart.fnType(dart.void, [core$.Object]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, [])
    }));
    dart.setFieldSignature(StickyContainerLayout, () => ({
      __proto__: dart.getFields(StickyContainerLayout.__proto__),
      hostPosition: dart.fieldType(RectangleOfnum()),
      topRows: dart.fieldType(ListOf_RowDataOfT()),
      bottomRows: dart.fieldType(ListOf_RowDataOfT()),
      hiddenRows: dart.fieldType(ListOfT()),
      [_translateYs]: dart.fieldType(ListOfnum())
    }));
    dart.defineExtensionMethods(StickyContainerLayout, ['_equals', 'toString']);
    return StickyContainerLayout;
  });
  src__utils__angular__scroll_host__sticky_controller_impl.StickyContainerLayout = src__utils__angular__scroll_host__sticky_controller_impl.StickyContainerLayout$();
  dart.addTypeTests(src__utils__angular__scroll_host__sticky_controller_impl.StickyContainerLayout, _is_StickyContainerLayout_default);
  src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils = class StickyRowUtils extends core$.Object {
    static shouldStick(isTop, hostTop, hostBottom, rowPosition, rangePosition) {
      if (dart.test(isTop)) {
        let rangeVisible = rangePosition == null || dart.notNull(rangePosition[$top]) > dart.notNull(hostTop) + dart.notNull(rowPosition[$height]);
        return dart.notNull(rowPosition[$top]) < dart.notNull(hostTop) && rangeVisible && dart.notNull(hostBottom) - dart.notNull(hostTop) - dart.notNull(rowPosition[$height]) > dart.notNull(src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils.MIN_CONTENT_HEIGHT_PX);
      } else {
        let rangeVisible = rangePosition == null || dart.notNull(rangePosition[$bottom]) < dart.notNull(hostBottom) - dart.notNull(rowPosition[$height]);
        return dart.notNull(rowPosition[$bottom]) > dart.notNull(hostBottom) && rangeVisible && dart.notNull(hostBottom) - dart.notNull(hostTop) - dart.notNull(rowPosition[$height]) > dart.notNull(src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils.MIN_CONTENT_HEIGHT_PX);
      }
    }
    static calculateLayout(T, hostPosition, rows, opts) {
      let enableSmoothPushing = opts && 'enableSmoothPushing' in opts ? opts.enableSmoothPushing : false;
      let hostTop = hostPosition[$top];
      let hostBottom = hostPosition[$bottom];
      let layout = new (src__utils__angular__scroll_host__sticky_controller_impl.StickyContainerLayout$(T)).new();
      layout.hostPosition = hostPosition;
      layout[_translateYs] = JSArrayOfnum().of([]);
      let stickyKeyToRowIndex = null;
      for (let i = 0; i < dart.notNull(rows[$length]); i++) {
        let row = rows[$_get](i);
        let shouldStick = src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils.shouldStick(row.isTop, hostTop, hostBottom, row.rowPosition, row.rangePosition);
        let hasStuckDuplicate = dart.test(shouldStick) && row.stickyKey != null && dart.equals(stickyKeyToRowIndex == null ? null : dart.dsend(stickyKeyToRowIndex, 'containsKey', [row.stickyKey]), true);
        if (hasStuckDuplicate && dart.test(row.isTop)) {
          let duplicateRow = layout.topRows[$_get](core$.int._check(dart.dindex(stickyKeyToRowIndex, row.stickyKey)));
          shouldStick = src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils.shouldStick(row.isTop, dart.notNull(hostTop) - dart.notNull(duplicateRow.row.rowPosition[$height]), hostBottom, row.rowPosition, row.rangePosition);
        }
        if (dart.test(shouldStick) && !hasStuckDuplicate) {
          if (dart.test(row.isTop)) {
            if (layout.topRows == null) {
              layout.topRows = _interceptors.JSArray$(src__utils__angular__scroll_host__sticky_controller_impl._RowData$(T)).of([]);
            }
            layout.topRows[$add](new (src__utils__angular__scroll_host__sticky_controller_impl._RowData$(T)).new(row, {offsetY: 0}));
            layout[_translateYs][$add](dart.notNull(hostTop) - dart.notNull(row.rowPosition[$top]));
            hostTop = dart.notNull(hostTop) + dart.notNull(row.rowPosition[$height]);
            if (row.stickyKey != null) {
              let t = stickyKeyToRowIndex;
              t == null ? stickyKeyToRowIndex = new (IdentityMapOfString$int()).new() : t;
              dart.dsetindex(stickyKeyToRowIndex, row.stickyKey, dart.notNull(layout.topRows[$length]) - 1);
            }
          } else {
            if (!dart.test(row.isBottom)) dart.assertFailed();
            if (layout.bottomRows == null) {
              layout.bottomRows = _interceptors.JSArray$(src__utils__angular__scroll_host__sticky_controller_impl._RowData$(T)).of([]);
            }
            layout.bottomRows[$add](new (src__utils__angular__scroll_host__sticky_controller_impl._RowData$(T)).new(row, {offsetY: 0}));
            layout[_translateYs][$add](dart.notNull(hostBottom) - dart.notNull(row.rowPosition[$bottom]));
            hostBottom = dart.notNull(hostBottom) - dart.notNull(row.rowPosition[$height]);
            if (row.stickyKey != null) {
              let t$ = stickyKeyToRowIndex;
              t$ == null ? stickyKeyToRowIndex = new (IdentityMapOfString$int()).new() : t$;
              dart.dsetindex(stickyKeyToRowIndex, row.stickyKey, dart.notNull(layout.bottomRows[$length]) - 1);
            }
          }
        } else {
          if (layout.hiddenRows == null) {
            layout.hiddenRows = _interceptors.JSArray$(T).of([]);
          }
          let shouldReplace = dart.test(shouldStick) && hasStuckDuplicate && dart.test(row.isTop);
          if (shouldReplace) {
            let duplicateRow = layout.topRows[$_get](core$.int._check(dart.dindex(stickyKeyToRowIndex, row.stickyKey))).row;
            layout.hiddenRows[$add](duplicateRow);
            layout.topRows[$_set](core$.int._check(dart.dindex(stickyKeyToRowIndex, row.stickyKey)), new (src__utils__angular__scroll_host__sticky_controller_impl._RowData$(T)).new(row, {offsetY: 0}));
            hostTop = dart.notNull(hostTop) + (dart.notNull(row.rowPosition[$height]) - dart.notNull(duplicateRow.rowPosition[$height]));
          } else {
            layout.hiddenRows[$add](row);
          }
        }
        if (dart.test(enableSmoothPushing) && !dart.test(shouldStick) && hasStuckDuplicate && dart.test(row.isTop)) {
          let duplicateRowIdx = dart.dindex(stickyKeyToRowIndex, row.stickyKey);
          let duplicateRow = layout.topRows[$_get](core$.int._check(duplicateRowIdx));
          if (dart.notNull(row.rowPosition[$top]) < dart.notNull(hostTop)) {
            duplicateRow.offsetY = dart.notNull(row.rowPosition[$top]) - dart.notNull(hostTop);
          }
        }
      }
      return layout;
    }
  };
  (src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils.new = function() {
  }).prototype = src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils);
  dart.defineLazy(src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils, {
    /*src__utils__angular__scroll_host__sticky_controller_impl.StickyRowUtils.MIN_CONTENT_HEIGHT_PX*/get MIN_CONTENT_HEIGHT_PX() {
      return 100;
    }
  });
  const _domService$ = Symbol('_domService');
  const _ngZone = Symbol('_ngZone');
  const _panController = Symbol('_panController');
  const _stickyController = Symbol('_stickyController');
  const _gestureListener = Symbol('_gestureListener');
  const _intersectionStreams = Symbol('_intersectionStreams');
  const _intersectionObserver = Symbol('_intersectionObserver');
  const _nativeOnScrollController = Symbol('_nativeOnScrollController');
  const _elementListenersDisposer = Symbol('_elementListenersDisposer');
  const _nativeOnScrollSubscription = Symbol('_nativeOnScrollSubscription');
  const _onScrollController = Symbol('_onScrollController');
  const _onScrollStream = Symbol('_onScrollStream');
  const _scrollInProgress = Symbol('_scrollInProgress');
  const _scrollFrameScheduled = Symbol('_scrollFrameScheduled');
  const _scrollFrameDelta = Symbol('_scrollFrameDelta');
  const _isDirectionScrollable = Symbol('_isDirectionScrollable');
  const _onIntersection = Symbol('_onIntersection');
  const _stopNativeScrollListener = Symbol('_stopNativeScrollListener');
  const _onNativeScroll = Symbol('_onNativeScroll');
  const _startElementListeners = Symbol('_startElementListeners');
  const _stopElementListeners = Symbol('_stopElementListeners');
  src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase = class ScrollHostBase extends core$.Object {
    get throttleScrollEvents() {
      return true;
    }
    get usePositionSticky() {
      return this[usePositionSticky$0];
    }
    set usePositionSticky(value) {
      super.usePositionSticky = value;
    }
    get panController() {
      return this[_panController];
    }
    get stickyController() {
      return this[_stickyController];
    }
    get onScroll() {
      if (this[_onScrollStream] == null) {
        this[_onScrollController] = StreamControllerOfScrollHostEvent().broadcast({onListen: dart.bind(this, 'startNativeScrollListener'), sync: true});
        this[_onScrollStream] = new (ZonedStreamOfScrollHostEvent()).new(this[_onScrollController].stream, dart.bind(this[_ngZone], 'runOutsideAngular'));
      }
      return this[_onScrollStream];
    }
    get scrollLength() {
      return math.max(core$.int, 0, 1 + dart.notNull(this.scrollHeight) - dart.notNull(this.clientHeight));
    }
    calcViewportRect() {
      return new (RectangleOfnum()).new(this.offsetX, this.offsetY, this.clientWidth, this.clientHeight);
    }
    scrollWithDelta(delta) {
      this.scrollToPosition(dart.notNull(this.scrollPosition) + dart.notNull(delta));
    }
    dispose() {
      this[_panController].dispose();
      this[_stickyController].dispose();
      let t = this[_onScrollController];
      t == null ? null : t.close();
      if (this[_intersectionObserver] != null) {
        this[_intersectionObserver].disconnect();
        for (let controller of this[_intersectionStreams][$values]) {
          controller.close();
        }
      }
      this[_stopNativeScrollListener]();
    }
    startNativeScrollListener() {
      let t = this[_nativeOnScrollSubscription];
      t == null ? this[_nativeOnScrollSubscription] = this.nativeOnScroll.listen(dart.bind(this, _onNativeScroll)) : t;
    }
    get nativeOnScroll() {
      if (this[_nativeOnScrollController] == null) {
        this[_nativeOnScrollController] = StreamControllerOfScrollHostEvent().broadcast({onListen: dart.bind(this, _startElementListeners), onCancel: dart.bind(this, _stopElementListeners)});
      }
      return this[_nativeOnScrollController].stream;
    }
    [_isDirectionScrollable](d) {
      switch (d) {
        case src__utils__angular__scroll_host__gestures.GestureDirection.up:
        {
          return true;
        }
        case src__utils__angular__scroll_host__gestures.GestureDirection.down:
        {
          return true;
        }
        default:
        {
          return false;
        }
      }
    }
    [_startElementListeners]() {
      if (this[_elementListenersDisposer] != null) return;
      this[_elementListenersDisposer] = new utils__disposer__disposer.Disposer.oneShot();
      if (this[_gestureListener] != null) {
        this[_elementListenersDisposer].addStreamSubscription(src__utils__angular__scroll_host__gestures.GestureEvent, this[_gestureListener].scrollStream.listen(dart.fn(event => {
          this[_nativeOnScrollController].add(event);
        }, ScrollHostEventToNull())));
      }
      if (!dart.test(this.usePositionSticky)) {
        this[_elementListenersDisposer].addStreamSubscription(html.WheelEvent, this.anchorElement[$onMouseWheel].listen(dart.fn(event => {
          if ((() => {
            let l = event == null ? null : event.ctrlKey;
            return l != null ? l : false;
          })() || (() => {
            let l = event == null ? null : event.shiftKey;
            return l != null ? l : false;
          })()) return;
          let d = src__utils__angular__scroll_host__gestures.scrollDirection(event[$deltaX], -dart.notNull(event[$deltaY]));
          if (event[$deltaY] === 0 || !dart.test(this[_isDirectionScrollable](d))) return;
          if (dart.test(src__utils__angular__scroll_host__gestures.innerScrollableDirections(this.anchorElement, event[$target])[$_get](d))) return;
          event.preventDefault();
          event.stopPropagation();
          let pixelsPerDeltaUnit = event[$deltaMode] === 0 ? 1 : 16;
          let deltaYPixels = event[$deltaY][$toInt]() * pixelsPerDeltaUnit;
          this[_nativeOnScrollController].add(new src__utils__angular__scroll_host__scroll_host_event_impl.ScrollHostEventImpl.new(0, deltaYPixels));
        }, WheelEventToNull())));
      }
      this[_elementListenersDisposer].addStreamSubscription(html.Event, this.scrollbarHost[$onScroll].listen(dart.fn(event => {
        if (dart.test(this[_scrollInProgress])) {
          this[_scrollInProgress] = false;
          return;
        }
        this[_nativeOnScrollController].add(new src__utils__angular__scroll_host__scroll_host_event_impl.ScrollHostEventImpl.new(0, 0));
      }, EventToNull())));
    }
    [_stopElementListeners]() {
      if (dart.test(this[_nativeOnScrollController].hasListener)) return;
      this[_elementListenersDisposer].dispose();
      this[_elementListenersDisposer] = null;
    }
    [_onNativeScroll](event) {
      this[_scrollFrameDelta] = dart.notNull(this[_scrollFrameDelta]) + (() => {
        let l = event.deltaY;
        return l != null ? l : 0;
      })();
      if (dart.test(this[_scrollFrameScheduled]) && dart.test(this.throttleScrollEvents)) return;
      this[_scrollFrameScheduled] = true;
      html.window[$requestAnimationFrame](dart.fn(_ => {
        if (this[_scrollFrameDelta] !== 0) {
          this[_scrollInProgress] = true;
          this.scrollWithDelta(this[_scrollFrameDelta]);
        }
        this.stickyController.syncOnScroll();
        let t = this[_onScrollController];
        t == null ? null : t.add(event);
        this[_scrollFrameScheduled] = false;
        this[_scrollFrameDelta] = 0;
      }, numToNull()));
    }
    [_stopNativeScrollListener]() {
      if (this[_nativeOnScrollSubscription] != null) {
        this[_nativeOnScrollSubscription].cancel();
        this[_nativeOnScrollSubscription] = null;
      }
    }
    [_onIntersection](entries, _observer) {
      for (let entry of entries) {
        html.IntersectionObserverEntry._check(entry);
        let t = this[_intersectionStreams][$_get](entry.target);
        t == null ? null : t.add(entry);
      }
    }
    onIntersection(element) {
      if (!dart.test(utils__browser__feature_detector__feature_detector.supportsIntersectionObserver)) dart.assertFailed();
      let t = this[_intersectionStreams][$_get](element);
      t == null ? this[_intersectionStreams][$_set](element, StreamControllerOfIntersectionObserverEntry().broadcast({onListen: dart.fn(() => this[_intersectionObserver].observe(element), VoidTovoid()), onCancel: dart.fn(() => this[_intersectionObserver].unobserve(element), VoidTovoid()), sync: true})) : t;
      return this[_intersectionStreams][$_get](element).stream;
    }
  };
  (src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase.new = function(domService, ngZone, gestureListenerFactory, opts) {
    let usePositionSticky = opts && 'usePositionSticky' in opts ? opts.usePositionSticky : false;
    this[_panController] = null;
    this[_stickyController] = null;
    this[_gestureListener] = null;
    this[_intersectionStreams] = new (LinkedMapOfElement$StreamControllerOfIntersectionObserverEntry()).new();
    this[_intersectionObserver] = null;
    this[_nativeOnScrollController] = null;
    this[_elementListenersDisposer] = null;
    this[_nativeOnScrollSubscription] = null;
    this[_onScrollController] = null;
    this[_onScrollStream] = null;
    this[_scrollInProgress] = false;
    this[_scrollFrameScheduled] = false;
    this[_scrollFrameDelta] = 0;
    this[_domService$] = domService;
    this[_ngZone] = ngZone;
    this[usePositionSticky$0] = usePositionSticky;
    this[_panController] = new src__utils__angular__scroll_host__pan_controller_impl.NonTouchPanController.new(this[_ngZone], this[_domService$], this.anchorElement);
    this[_stickyController] = dart.test(this.usePositionSticky) ? new src__utils__angular__scroll_host__position_sticky_controller.PositionStickyController.new(this) : new src__utils__angular__scroll_host__sticky_controller_impl.StickyControllerImpl.new(this[_domService$], this);
    if (dart.test(utils__browser__feature_detector__feature_detector.isTouchInterface)) {
      this[_gestureListener] = gestureListenerFactory.create(this.anchorElement, dart.bind(this, _isDirectionScrollable));
    }
    if (dart.test(utils__browser__feature_detector__feature_detector.supportsIntersectionObserver)) {
      let root = html.Element.is(this.scrollbarHost) ? this.scrollbarHost : null;
      this[_intersectionObserver] = html.IntersectionObserver.new(js.allowInterop(ListAndIntersectionObserverTovoid(), dart.bind(this, _onIntersection)), new _js_helper.LinkedMap.from(["root", root]));
    }
  }).prototype = src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase);
  const usePositionSticky$0 = Symbol("ScrollHostBase.usePositionSticky");
  src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase[dart.implements] = () => [src__utils__angular__scroll_host__scroll_host_interface.ScrollHost];
  dart.setMethodSignature(src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase.__proto__),
    calcViewportRect: dart.fnType(math.Rectangle$(core$.num), []),
    scrollWithDelta: dart.fnType(dart.void, [core$.int]),
    dispose: dart.fnType(dart.void, []),
    startNativeScrollListener: dart.fnType(dart.void, []),
    [_isDirectionScrollable]: dart.fnType(core$.bool, [src__utils__angular__scroll_host__gestures.GestureDirection]),
    [_startElementListeners]: dart.fnType(dart.void, []),
    [_stopElementListeners]: dart.fnType(dart.void, []),
    [_onNativeScroll]: dart.fnType(dart.void, [src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent]),
    [_stopNativeScrollListener]: dart.fnType(dart.void, []),
    [_onIntersection]: dart.fnType(dart.void, [core$.Iterable, html.IntersectionObserver]),
    onIntersection: dart.fnType(async.Stream$(html.IntersectionObserverEntry), [html.Element])
  }));
  dart.setGetterSignature(src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase, () => ({
    __proto__: dart.getGetters(src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase.__proto__),
    throttleScrollEvents: core$.bool,
    panController: src__utils__angular__scroll_host__scroll_host_interface.PanController,
    stickyController: src__utils__angular__scroll_host__scroll_host_interface.StickyController,
    onScroll: async.Stream$(src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent),
    scrollLength: core$.int,
    nativeOnScroll: async.Stream$(src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent)
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase.__proto__),
    [_domService$]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_panController]: dart.fieldType(src__utils__angular__scroll_host__scroll_host_interface.PanController),
    [_stickyController]: dart.fieldType(src__utils__angular__scroll_host__scroll_host_interface.StickyController),
    [_gestureListener]: dart.fieldType(src__utils__angular__scroll_host__gestures.GestureListener),
    [_intersectionStreams]: dart.finalFieldType(MapOfElement$StreamControllerOfIntersectionObserverEntry()),
    [_intersectionObserver]: dart.fieldType(html.IntersectionObserver),
    [_nativeOnScrollController]: dart.fieldType(StreamControllerOfScrollHostEvent()),
    [_elementListenersDisposer]: dart.fieldType(utils__disposer__disposer.Disposer),
    [_nativeOnScrollSubscription]: dart.fieldType(async.StreamSubscription),
    [_onScrollController]: dart.fieldType(StreamControllerOfScrollHostEvent()),
    [_onScrollStream]: dart.fieldType(StreamOfScrollHostEvent()),
    usePositionSticky: dart.finalFieldType(core$.bool),
    [_scrollInProgress]: dart.fieldType(core$.bool),
    [_scrollFrameScheduled]: dart.fieldType(core$.bool),
    [_scrollFrameDelta]: dart.fieldType(core$.int)
  }));
  const _window = Symbol('_window');
  src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase = class WindowScrollHostBase extends src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase {
    get scrollbarHost() {
      return this[_window];
    }
    get scrollPosition() {
      return this[_window][$scrollY];
    }
    scrollToPosition(newPosition) {
      this[_window][$scrollTo](this[_window][$scrollX], newPosition);
    }
    get scrollHeight() {
      let bodyScrollHeight = 0;
      if (html.HtmlDocument.is(this[_window][$document])) {
        let htmlDoc = html.HtmlDocument.as(this[_window][$document]);
        bodyScrollHeight = htmlDoc.body[$scrollHeight];
      }
      return math.max(core$.int, bodyScrollHeight, this[_window][$document].documentElement[$scrollHeight]);
    }
    get clientHeight() {
      return this[_window][$document].documentElement.clientHeight;
    }
    get clientWidth() {
      return this[_window][$document].documentElement.clientWidth;
    }
    get offsetX() {
      return this[offsetX];
    }
    set offsetX(value) {
      super.offsetX = value;
    }
    get offsetY() {
      return this[offsetY];
    }
    set offsetY(value) {
      super.offsetY = value;
    }
    get anchorElement() {
      return this[_window][$document].documentElement;
    }
  };
  (src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase.new = function(domService, managedZone, gestureListenerFactory, window) {
    this[offsetX] = 0;
    this[offsetY] = 0;
    this[_window] = window;
    src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase.__proto__.new.call(this, domService, managedZone, gestureListenerFactory);
  }).prototype = src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase);
  const offsetX = Symbol("WindowScrollHostBase.offsetX");
  const offsetY = Symbol("WindowScrollHostBase.offsetY");
  dart.setMethodSignature(src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase.__proto__),
    scrollToPosition: dart.fnType(dart.void, [core$.int])
  }));
  dart.setGetterSignature(src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase, () => ({
    __proto__: dart.getGetters(src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase.__proto__),
    scrollbarHost: html.GlobalEventHandlers,
    scrollPosition: core$.int,
    scrollHeight: core$.int,
    clientHeight: core$.int,
    clientWidth: core$.int,
    anchorElement: html.Element
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__scroll_host_base.WindowScrollHostBase.__proto__),
    [_window]: dart.finalFieldType(html.Window),
    offsetX: dart.finalFieldType(core$.num),
    offsetY: dart.finalFieldType(core$.num)
  }));
  src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase = class ElementScrollHostBase extends src__utils__angular__scroll_host__scroll_host_base.ScrollHostBase {
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    get scrollbarHost() {
      return this.element;
    }
    get scrollPosition() {
      return this.element[$scrollTop];
    }
    scrollToPosition(newPosition) {
      this.element[$scrollTop] = newPosition;
    }
    get scrollHeight() {
      return this.element[$scrollHeight];
    }
    get clientHeight() {
      return this.element.clientHeight;
    }
    get clientWidth() {
      return this.element.clientWidth;
    }
    get offsetX() {
      return this.element.getBoundingClientRect()[$left];
    }
    get offsetY() {
      return this.element.getBoundingClientRect()[$top];
    }
    get anchorElement() {
      return this.element;
    }
    [_isDirectionScrollable](d) {
      switch (d) {
        case src__utils__angular__scroll_host__gestures.GestureDirection.up:
        {
          return dart.notNull(this.scrollPosition) > 0;
        }
        case src__utils__angular__scroll_host__gestures.GestureDirection.down:
        {
          return dart.notNull(this.scrollHeight) > dart.notNull(this.scrollPosition) + dart.notNull(this.clientHeight);
        }
        default:
        {
          return false;
        }
      }
    }
  };
  (src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase.new = function(domService, managedZone, gestureListenerFactory, element, opts) {
    let usePositionSticky = opts && 'usePositionSticky' in opts ? opts.usePositionSticky : false;
    this[element$] = element;
    src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase.__proto__.new.call(this, domService, managedZone, gestureListenerFactory, {usePositionSticky: usePositionSticky});
    this.element.style[$overflowY] = "auto";
    if (dart.test(usePositionSticky)) {
      this.element.style[$transform] = "translateZ(0)";
    }
  }).prototype = src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase);
  const element$ = Symbol("ElementScrollHostBase.element");
  dart.setMethodSignature(src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase.__proto__),
    scrollToPosition: dart.fnType(dart.void, [core$.int])
  }));
  dart.setGetterSignature(src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase, () => ({
    __proto__: dart.getGetters(src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase.__proto__),
    scrollbarHost: html.GlobalEventHandlers,
    scrollPosition: core$.int,
    scrollHeight: core$.int,
    clientHeight: core$.int,
    clientWidth: core$.int,
    offsetX: core$.num,
    offsetY: core$.num,
    anchorElement: html.Element
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__scroll_host_base.ElementScrollHostBase.__proto__),
    element: dart.finalFieldType(html.Element)
  }));
  const _scrollHost$0 = Symbol('_scrollHost');
  const _element = Symbol('_element');
  const _lastEvent$ = Symbol('_lastEvent');
  const _className = Symbol('_className');
  const _subscription = Symbol('_subscription');
  const _updateClass = Symbol('_updateClass');
  src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective = class BasePanClassDirective extends core$.Object {
    set className(value) {
      if (!(this[_className] == null || this[_className] == value)) dart.assertFailed();
      this[_className] = value;
    }
    startPanListener() {
      if (this[_subscription] != null) return;
      this[_subscription] = this[_scrollHost$0].panController.onPan.listen(dart.fn(event => {
        this[_updateClass](this[_lastEvent$].isTop, event.isTop, "-top");
        this[_updateClass](this[_lastEvent$].isRight, event.isRight, "-right");
        this[_updateClass](this[_lastEvent$].isBottom, event.isBottom, "-bottom");
        this[_updateClass](this[_lastEvent$].isLeft, event.isLeft, "-left");
        this[_lastEvent$] = event;
      }, PanEventToNull()));
    }
    stopPanListener() {
      if (this[_subscription] != null) {
        this[_subscription].cancel();
        this[_subscription] = null;
      }
    }
    [_updateClass](prevValue, newValue, suffix) {
      if (prevValue == newValue) return;
      if (dart.test(prevValue)) {
        this[_domService$].scheduleWrite(dart.fn(() => {
          this[_element][$classes].remove(dart.notNull(this[_className]) + dart.notNull(suffix));
        }, VoidToNull()));
      } else if (dart.test(newValue)) {
        this[_domService$].scheduleWrite(dart.fn(() => {
          this[_element][$classes].add(dart.notNull(this[_className]) + dart.notNull(suffix));
        }, VoidToNull()));
      }
    }
  };
  (src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective.new = function(domService, scrollHost, element) {
    this[_lastEvent$] = new src__utils__angular__scroll_host__pan_controller_impl.PanEventImpl.new(false, false, false, false);
    this[_className] = null;
    this[_subscription] = null;
    this[_domService$] = domService;
    this[_scrollHost$0] = scrollHost;
    this[_element] = element;
  }).prototype = src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective);
  dart.setMethodSignature(src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective.__proto__),
    startPanListener: dart.fnType(dart.void, []),
    stopPanListener: dart.fnType(dart.void, []),
    [_updateClass]: dart.fnType(dart.dynamic, [core$.bool, core$.bool, core$.String])
  }));
  dart.setSetterSignature(src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective, () => ({
    __proto__: dart.getSetters(src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective.__proto__),
    className: core$.String
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__scroll_host_base.BasePanClassDirective.__proto__),
    [_domService$]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_scrollHost$0]: dart.finalFieldType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost),
    [_element]: dart.finalFieldType(html.Element),
    [_lastEvent$]: dart.fieldType(src__utils__angular__scroll_host__scroll_host_interface.PanEvent),
    [_className]: dart.fieldType(core$.String),
    [_subscription]: dart.fieldType(async.StreamSubscription)
  }));
  dart.trackLibraries("packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl.ddc", {
    "package:angular_components/src/utils/angular/scroll_host/pan_controller_impl.dart": src__utils__angular__scroll_host__pan_controller_impl,
    "package:angular_components/src/utils/angular/scroll_host/position_sticky_controller.dart": src__utils__angular__scroll_host__position_sticky_controller,
    "package:angular_components/src/utils/angular/scroll_host/sticky_controller_impl.dart": src__utils__angular__scroll_host__sticky_controller_impl,
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_base.dart": src__utils__angular__scroll_host__scroll_host_base
  }, '{"version":3,"sourceRoot":"","sources":["pan_controller_impl.dart","position_sticky_controller.dart","sticky_controller_impl.dart","scroll_host_base.dart"],"names":[],"mappings":"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","file":"pan_controller_impl.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__pan_controller_impl: src__utils__angular__scroll_host__pan_controller_impl,
    src__utils__angular__scroll_host__position_sticky_controller: src__utils__angular__scroll_host__position_sticky_controller,
    src__utils__angular__scroll_host__sticky_controller_impl: src__utils__angular__scroll_host__sticky_controller_impl,
    src__utils__angular__scroll_host__scroll_host_base: src__utils__angular__scroll_host__scroll_host_base
  };
});

//# sourceMappingURL=pan_controller_impl.ddc.js.map
