define(['dart_sdk', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/utils/disposer/disposer', 'packages/quiver/time'], function(dart_sdk, scroll_host_interface, disposer, time) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils__angular__scroll_host__scroll_host_interface = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const time$ = time.time;
  const _root = Object.create(null);
  const src__utils__angular__scroll_host__scroll_observer = Object.create(_root);
  const src__utils__angular__scroll_host__scroll_host_event_impl = Object.create(_root);
  const src__utils__angular__scroll_host__gestures = Object.create(_root);
  const utils__angular__scroll_host__interface = Object.create(_root);
  const $abs = dartx.abs;
  const $getComputedStyle = dartx.getComputedStyle;
  const $getPropertyValue = dartx.getPropertyValue;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $scrollLeft = dartx.scrollLeft;
  const $scrollWidth = dartx.scrollWidth;
  const $scrollTop = dartx.scrollTop;
  const $scrollHeight = dartx.scrollHeight;
  const $parent = dartx.parent;
  const $onTouchStart = dartx.onTouchStart;
  const $onTouchMove = dartx.onTouchMove;
  const $onTouchEnd = dartx.onTouchEnd;
  const $length = dartx.length;
  const $target = dartx.target;
  const $screen = dartx.screen;
  const $single = dartx.single;
  const $first = dartx.first;
  const $toDouble = dartx.toDouble;
  const $round = dartx.round;
  const $sign = dartx.sign;
  let ScrollHostEventToNull = () => (ScrollHostEventToNull = dart.constFn(dart.fnType(core.Null, [src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent])))();
  let StreamSubscriptionOfScrollHostEvent = () => (StreamSubscriptionOfScrollHostEvent = dart.constFn(async.StreamSubscription$(src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent)))();
  let boolTovoid = () => (boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))();
  let LinkedMapOfGestureDirection$bool = () => (LinkedMapOfGestureDirection$bool = dart.constFn(_js_helper.LinkedMap$(src__utils__angular__scroll_host__gestures.GestureDirection, core.bool)))();
  let StreamControllerOfGestureEvent = () => (StreamControllerOfGestureEvent = dart.constFn(async.StreamController$(src__utils__angular__scroll_host__gestures.GestureEvent)))();
  let GestureDirectionTobool = () => (GestureDirectionTobool = dart.constFn(dart.fnType(core.bool, [src__utils__angular__scroll_host__gestures.GestureDirection])))();
  let MapOfGestureDirection$bool = () => (MapOfGestureDirection$bool = dart.constFn(core.Map$(src__utils__angular__scroll_host__gestures.GestureDirection, core.bool)))();
  let PointOfnum = () => (PointOfnum = dart.constFn(math.Point$(core.num)))();
  const _scrollHost = Symbol('_scrollHost');
  const _idleCheckDurationMs = Symbol('_idleCheckDurationMs');
  const _idleCheckDuration = Symbol('_idleCheckDuration');
  const _scrollSub = Symbol('_scrollSub');
  const _scrollTimestamp = Symbol('_scrollTimestamp');
  const _isScrolling = Symbol('_isScrolling');
  const _timer = Symbol('_timer');
  const _subscribe = Symbol('_subscribe');
  const _now = Symbol('_now');
  const _raiseIdleEvent = Symbol('_raiseIdleEvent');
  const _checkIdle = Symbol('_checkIdle');
  src__utils__angular__scroll_host__scroll_observer.ScrollObserver = class ScrollObserver extends core.Object {
    get scrollStatusCallback() {
      return this[scrollStatusCallback];
    }
    set scrollStatusCallback(value) {
      this[scrollStatusCallback] = value;
    }
    [_subscribe]() {
      this[_scrollSub] = this[_scrollHost].onScroll.listen(dart.fn(_ => {
        this[_scrollTimestamp] = this[_now];
        if (!dart.test(this[_isScrolling])) {
          this[_isScrolling] = true;
          this[_raiseIdleEvent](false);
          if (this[_timer] == null) {
            this[_timer] = async.Timer.periodic(this[_idleCheckDuration], dart.bind(this, _checkIdle));
          }
        }
      }, ScrollHostEventToNull()));
    }
    get [_now]() {
      return new core.DateTime.now().millisecondsSinceEpoch;
    }
    [_checkIdle](_) {
      let elapsedTimeSinceLastScroll = dart.notNull(this[_now]) - dart.notNull(this[_scrollTimestamp]);
      if (elapsedTimeSinceLastScroll > dart.notNull(this[_idleCheckDurationMs])) {
        this[_isScrolling] = false;
        this[_raiseIdleEvent](true);
        let t = this[_timer];
        t == null ? null : t.cancel();
        this[_timer] = null;
      }
    }
    [_raiseIdleEvent](idle) {
      if (this.scrollStatusCallback != null) {
        this.scrollStatusCallback(idle);
      }
    }
    dispose() {
      let t = this[_timer];
      t == null ? null : t.cancel();
      this[_timer] = null;
      this[_scrollSub].cancel();
      this[_scrollSub] = null;
    }
  };
  (src__utils__angular__scroll_host__scroll_observer.ScrollObserver.new = function(scrollHost) {
    src__utils__angular__scroll_host__scroll_observer.ScrollObserver.withDurationMs.call(this, scrollHost, 150);
  }).prototype = src__utils__angular__scroll_host__scroll_observer.ScrollObserver.prototype;
  (src__utils__angular__scroll_host__scroll_observer.ScrollObserver.withDurationMs = function(scrollHost, idleCheckDurationMs) {
    this[_scrollSub] = null;
    this[_scrollTimestamp] = 0;
    this[_isScrolling] = false;
    this[_timer] = null;
    this[scrollStatusCallback] = null;
    this[_scrollHost] = scrollHost;
    this[_idleCheckDurationMs] = idleCheckDurationMs;
    this[_idleCheckDuration] = new core.Duration.new({milliseconds: idleCheckDurationMs});
    this[_subscribe]();
  }).prototype = src__utils__angular__scroll_host__scroll_observer.ScrollObserver.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_observer.ScrollObserver);
  const scrollStatusCallback = Symbol("ScrollObserver.scrollStatusCallback");
  src__utils__angular__scroll_host__scroll_observer.ScrollObserver[dart.implements] = () => [utils__disposer__disposer.Disposable];
  dart.setMethodSignature(src__utils__angular__scroll_host__scroll_observer.ScrollObserver, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__scroll_observer.ScrollObserver.__proto__),
    [_subscribe]: dart.fnType(dart.void, []),
    [_checkIdle]: dart.fnType(dart.void, [async.Timer]),
    [_raiseIdleEvent]: dart.fnType(dart.void, [core.bool]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__utils__angular__scroll_host__scroll_observer.ScrollObserver, () => ({
    __proto__: dart.getGetters(src__utils__angular__scroll_host__scroll_observer.ScrollObserver.__proto__),
    [_now]: core.int
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__scroll_observer.ScrollObserver, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__scroll_observer.ScrollObserver.__proto__),
    [_idleCheckDurationMs]: dart.finalFieldType(core.int),
    [_idleCheckDuration]: dart.finalFieldType(core.Duration),
    [_scrollHost]: dart.fieldType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost),
    [_scrollSub]: dart.fieldType(StreamSubscriptionOfScrollHostEvent()),
    [_scrollTimestamp]: dart.fieldType(core.int),
    [_isScrolling]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(async.Timer),
    scrollStatusCallback: dart.fieldType(boolTovoid())
  }));
  dart.defineLazy(src__utils__angular__scroll_host__scroll_observer.ScrollObserver, {
    /*src__utils__angular__scroll_host__scroll_observer.ScrollObserver.defaultIdleCheckDurationMs*/get defaultIdleCheckDurationMs() {
      return 150;
    }
  });
  src__utils__angular__scroll_host__scroll_observer.ScrollObserverIdleCallback = dart.typedef('ScrollObserverIdleCallback', () => dart.fnType(dart.void, [core.bool]));
  src__utils__angular__scroll_host__scroll_host_event_impl.ScrollHostEventImpl = class ScrollHostEventImpl extends core.Object {
    get deltaX() {
      return this[deltaX$];
    }
    set deltaX(value) {
      super.deltaX = value;
    }
    get deltaY() {
      return this[deltaY$];
    }
    set deltaY(value) {
      super.deltaY = value;
    }
  };
  (src__utils__angular__scroll_host__scroll_host_event_impl.ScrollHostEventImpl.new = function(deltaX, deltaY) {
    this[deltaX$] = deltaX;
    this[deltaY$] = deltaY;
  }).prototype = src__utils__angular__scroll_host__scroll_host_event_impl.ScrollHostEventImpl.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__scroll_host_event_impl.ScrollHostEventImpl);
  const deltaX$ = Symbol("ScrollHostEventImpl.deltaX");
  const deltaY$ = Symbol("ScrollHostEventImpl.deltaY");
  src__utils__angular__scroll_host__scroll_host_event_impl.ScrollHostEventImpl[dart.implements] = () => [src__utils__angular__scroll_host__scroll_host_interface.ScrollHostEvent];
  dart.setFieldSignature(src__utils__angular__scroll_host__scroll_host_event_impl.ScrollHostEventImpl, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__scroll_host_event_impl.ScrollHostEventImpl.__proto__),
    deltaX: dart.finalFieldType(core.int),
    deltaY: dart.finalFieldType(core.int)
  }));
  src__utils__angular__scroll_host__gestures.GestureDirection = class GestureDirection extends core.Object {
    toString() {
      return {
        0: "GestureDirection.up",
        1: "GestureDirection.down",
        2: "GestureDirection.left",
        3: "GestureDirection.right"
      }[this.index];
    }
  };
  (src__utils__angular__scroll_host__gestures.GestureDirection.new = function(x) {
    this.index = x;
  }).prototype = src__utils__angular__scroll_host__gestures.GestureDirection.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__gestures.GestureDirection);
  dart.setFieldSignature(src__utils__angular__scroll_host__gestures.GestureDirection, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__gestures.GestureDirection.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__utils__angular__scroll_host__gestures.GestureDirection, ['toString']);
  src__utils__angular__scroll_host__gestures.GestureDirection.up = dart.const(new src__utils__angular__scroll_host__gestures.GestureDirection.new(0));
  src__utils__angular__scroll_host__gestures.GestureDirection.down = dart.const(new src__utils__angular__scroll_host__gestures.GestureDirection.new(1));
  src__utils__angular__scroll_host__gestures.GestureDirection.left = dart.const(new src__utils__angular__scroll_host__gestures.GestureDirection.new(2));
  src__utils__angular__scroll_host__gestures.GestureDirection.right = dart.const(new src__utils__angular__scroll_host__gestures.GestureDirection.new(3));
  src__utils__angular__scroll_host__gestures.GestureDirection.values = dart.constList([src__utils__angular__scroll_host__gestures.GestureDirection.up, src__utils__angular__scroll_host__gestures.GestureDirection.down, src__utils__angular__scroll_host__gestures.GestureDirection.left, src__utils__angular__scroll_host__gestures.GestureDirection.right], src__utils__angular__scroll_host__gestures.GestureDirection);
  src__utils__angular__scroll_host__gestures.scrollDirection = function(deltaX, deltaY) {
    let deltaXAbs = deltaX[$abs]();
    let deltaYAbs = deltaY[$abs]();
    if (dart.notNull(deltaY) >= deltaXAbs) {
      return src__utils__angular__scroll_host__gestures.GestureDirection.up;
    } else if (dart.notNull(deltaY) <= -deltaXAbs) {
      return src__utils__angular__scroll_host__gestures.GestureDirection.down;
    } else if (dart.notNull(deltaX) > deltaYAbs) {
      return src__utils__angular__scroll_host__gestures.GestureDirection.right;
    } else if (dart.notNull(deltaX) < -deltaYAbs) {
      return src__utils__angular__scroll_host__gestures.GestureDirection.left;
    }
    return null;
  };
  src__utils__angular__scroll_host__gestures.DirectionCheck = dart.typedef('DirectionCheck', () => dart.fnType(core.bool, [src__utils__angular__scroll_host__gestures.GestureDirection]));
  const _clock = Symbol('_clock');
  src__utils__angular__scroll_host__gestures.GestureListenerFactory = class GestureListenerFactory extends core.Object {
    create(element, isDirectionScrollable) {
      return new src__utils__angular__scroll_host__gestures.GestureListener.new(element, isDirectionScrollable, this[_clock]);
    }
  };
  (src__utils__angular__scroll_host__gestures.GestureListenerFactory.new = function(clock) {
    this[_clock] = clock;
  }).prototype = src__utils__angular__scroll_host__gestures.GestureListenerFactory.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__gestures.GestureListenerFactory);
  dart.setMethodSignature(src__utils__angular__scroll_host__gestures.GestureListenerFactory, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__gestures.GestureListenerFactory.__proto__),
    create: dart.fnType(src__utils__angular__scroll_host__gestures.GestureListener, [html.Element, dart.fnType(core.bool, [src__utils__angular__scroll_host__gestures.GestureDirection])])
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__gestures.GestureListenerFactory, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__gestures.GestureListenerFactory.__proto__),
    [_clock]: dart.finalFieldType(time$.Clock)
  }));
  src__utils__angular__scroll_host__gestures.innerScrollableDirections = function(host, target) {
    let directions = new (LinkedMapOfGestureDirection$bool()).from([src__utils__angular__scroll_host__gestures.GestureDirection.up, false, src__utils__angular__scroll_host__gestures.GestureDirection.down, false, src__utils__angular__scroll_host__gestures.GestureDirection.left, false, src__utils__angular__scroll_host__gestures.GestureDirection.right, false]);
    let element = html.Element._check(target);
    while (!dart.equals(element, host) && element != null) {
      let style = element[$getComputedStyle]();
      let overflowX = style[$getPropertyValue]("overflow-x");
      if (overflowX === "auto" || overflowX === "scroll") {
        directions[$_set](src__utils__angular__scroll_host__gestures.GestureDirection.left, dart.test(directions[$_get](src__utils__angular__scroll_host__gestures.GestureDirection.left)) || dart.notNull(element[$scrollLeft]) > 0);
        directions[$_set](src__utils__angular__scroll_host__gestures.GestureDirection.right, dart.test(directions[$_get](src__utils__angular__scroll_host__gestures.GestureDirection.right)) || dart.notNull(element[$scrollLeft]) + dart.notNull(element.clientWidth) < dart.notNull(element[$scrollWidth]));
      }
      let overflowY = style[$getPropertyValue]("overflow-y");
      if (overflowY === "auto" || overflowY === "scroll") {
        directions[$_set](src__utils__angular__scroll_host__gestures.GestureDirection.up, dart.test(directions[$_get](src__utils__angular__scroll_host__gestures.GestureDirection.up)) || dart.notNull(element[$scrollTop]) > 0);
        directions[$_set](src__utils__angular__scroll_host__gestures.GestureDirection.down, dart.test(directions[$_get](src__utils__angular__scroll_host__gestures.GestureDirection.down)) || dart.notNull(element[$scrollTop]) + dart.notNull(element.clientHeight) < dart.notNull(element[$scrollHeight]));
      }
      element = element[$parent];
    }
    return directions;
  };
  src__utils__angular__scroll_host__gestures.GestureEvent = class GestureEvent extends src__utils__angular__scroll_host__scroll_host_event_impl.ScrollHostEventImpl {
    get startingTarget() {
      return this[startingTarget$];
    }
    set startingTarget(value) {
      super.startingTarget = value;
    }
  };
  (src__utils__angular__scroll_host__gestures.GestureEvent.new = function(deltaX, deltaY, startingTarget) {
    this[startingTarget$] = startingTarget;
    src__utils__angular__scroll_host__gestures.GestureEvent.__proto__.new.call(this, deltaX, deltaY);
  }).prototype = src__utils__angular__scroll_host__gestures.GestureEvent.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__gestures.GestureEvent);
  const startingTarget$ = Symbol("GestureEvent.startingTarget");
  dart.setFieldSignature(src__utils__angular__scroll_host__gestures.GestureEvent, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__gestures.GestureEvent.__proto__),
    startingTarget: dart.finalFieldType(html.EventTarget)
  }));
  const _element = Symbol('_element');
  const _isDirectionScrollable = Symbol('_isDirectionScrollable');
  const _scrollInterval = Symbol('_scrollInterval');
  const _scrollController = Symbol('_scrollController');
  const _disposer = Symbol('_disposer');
  const _gesture = Symbol('_gesture');
  const _directions = Symbol('_directions');
  const _startPoint = Symbol('_startPoint');
  const _capturing = Symbol('_capturing');
  const _startListeners = Symbol('_startListeners');
  const _onCancel = Symbol('_onCancel');
  const _onTouchStart = Symbol('_onTouchStart');
  const _onTouchMove = Symbol('_onTouchMove');
  const _onTouchEnd = Symbol('_onTouchEnd');
  const _scrollTimer = Symbol('_scrollTimer');
  src__utils__angular__scroll_host__gestures.GestureListener = class GestureListener extends core.Object {
    get scrollStream() {
      if (this[_scrollController] == null) {
        this[_scrollController] = StreamControllerOfGestureEvent().broadcast({onListen: dart.bind(this, _startListeners), onCancel: dart.bind(this, _onCancel)});
      }
      return this[_scrollController].stream;
    }
    [_startListeners]() {
      if (this[_disposer] != null) return;
      this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
      this[_disposer].addStreamSubscription(html.TouchEvent, this[_element][$onTouchStart].listen(dart.bind(this, _onTouchStart)));
      this[_disposer].addStreamSubscription(html.TouchEvent, this[_element][$onTouchMove].listen(dart.bind(this, _onTouchMove)));
      this[_disposer].addStreamSubscription(html.TouchEvent, this[_element][$onTouchEnd].listen(dart.bind(this, _onTouchEnd)));
    }
    [_onCancel]() {
      if (dart.test(this[_scrollController].hasListener)) return;
      this[_disposer].dispose();
      this[_disposer] = null;
    }
    get isGestureInProgress() {
      if ((() => {
        let t = this[_gesture];
        return t == null ? null : t[_scrollTimer];
      })() == null) return false;
      return this[_gesture][_scrollTimer].isActive;
    }
    [_onTouchStart](touchStart) {
      if (dart.notNull(touchStart.touches[$length]) > 1) return;
      this[_directions] = src__utils__angular__scroll_host__gestures.innerScrollableDirections(this[_element], touchStart[$target]);
      this[_startPoint] = touchStart.touches[$single][$screen];
      this[_capturing] = false;
      let t = this[_gesture];
      t == null ? null : t.cancel();
      this[_gesture] = new src__utils__angular__scroll_host__gestures._Gesture.new(this[_scrollController], this[_clock], this[_scrollInterval]);
      this[_gesture].start(touchStart);
    }
    [_onTouchMove](touchMove) {
      if (this[_gesture] == null) return null;
      if (dart.test(this[_gesture].finished)) return this[_onTouchStart](touchMove);
      if (!dart.test(this[_capturing])) {
        let delta = touchMove.touches[$first][$screen]['-'](this[_startPoint]);
        if (dart.notNull(delta.y) > 0 && dart.test(this[_directions][$_get](src__utils__angular__scroll_host__gestures.GestureDirection.up)) || dart.notNull(delta.y) < 0 && dart.test(this[_directions][$_get](src__utils__angular__scroll_host__gestures.GestureDirection.down)) || dart.notNull(delta.x) > 0 && dart.test(this[_directions][$_get](src__utils__angular__scroll_host__gestures.GestureDirection.left)) || dart.notNull(delta.x) < 0 && dart.test(this[_directions][$_get](src__utils__angular__scroll_host__gestures.GestureDirection.right))) {
          this[_gesture] = null;
          return null;
        }
        if (!dart.test(this[_isDirectionScrollable](src__utils__angular__scroll_host__gestures.scrollDirection(delta.x, delta.y)))) {
          this[_gesture] = null;
          return null;
        }
        this[_capturing] = true;
      }
      touchMove.stopPropagation();
      touchMove.preventDefault();
      this[_gesture].update(touchMove);
    }
    [_onTouchEnd](touchEnd) {
      if (this[_gesture] == null) return null;
      touchEnd.stopPropagation();
      this[_gesture].finish();
    }
    dispose() {
      let t = this[_gesture];
      t == null ? null : t.cancel();
      this[_gesture] = null;
      let t$ = this[_scrollController];
      t$ == null ? null : t$.close();
      this[_scrollController] = null;
      let t$0 = this[_disposer];
      t$0 == null ? null : t$0.dispose();
      this[_disposer] = null;
    }
  };
  (src__utils__angular__scroll_host__gestures.GestureListener.new = function(element, isDirectionScrollable, clock, opts) {
    let scrollInterval = opts && 'scrollInterval' in opts ? opts.scrollInterval : src__utils__angular__scroll_host__gestures.GestureListener._defaultScrollInterval;
    this[_scrollController] = null;
    this[_disposer] = null;
    this[_gesture] = null;
    this[_directions] = null;
    this[_startPoint] = null;
    this[_capturing] = false;
    this[_element] = element;
    this[_isDirectionScrollable] = isDirectionScrollable;
    this[_clock] = clock;
    this[_scrollInterval] = scrollInterval;
  }).prototype = src__utils__angular__scroll_host__gestures.GestureListener.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__gestures.GestureListener);
  src__utils__angular__scroll_host__gestures.GestureListener[dart.implements] = () => [utils__disposer__disposer.Disposable];
  dart.setMethodSignature(src__utils__angular__scroll_host__gestures.GestureListener, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__gestures.GestureListener.__proto__),
    [_startListeners]: dart.fnType(dart.void, []),
    [_onCancel]: dart.fnType(dart.void, []),
    [_onTouchStart]: dart.fnType(dart.void, [html.TouchEvent]),
    [_onTouchMove]: dart.fnType(dart.void, [html.TouchEvent]),
    [_onTouchEnd]: dart.fnType(dart.void, [html.TouchEvent]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__utils__angular__scroll_host__gestures.GestureListener, () => ({
    __proto__: dart.getGetters(src__utils__angular__scroll_host__gestures.GestureListener.__proto__),
    scrollStream: async.Stream$(src__utils__angular__scroll_host__gestures.GestureEvent),
    isGestureInProgress: core.bool
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__gestures.GestureListener, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__gestures.GestureListener.__proto__),
    [_element]: dart.finalFieldType(html.Element),
    [_isDirectionScrollable]: dart.finalFieldType(GestureDirectionTobool()),
    [_clock]: dart.finalFieldType(time$.Clock),
    [_scrollInterval]: dart.finalFieldType(core.Duration),
    [_scrollController]: dart.fieldType(StreamControllerOfGestureEvent()),
    [_disposer]: dart.fieldType(utils__disposer__disposer.Disposer),
    [_gesture]: dart.fieldType(src__utils__angular__scroll_host__gestures._Gesture),
    [_directions]: dart.fieldType(MapOfGestureDirection$bool()),
    [_startPoint]: dart.fieldType(PointOfnum()),
    [_capturing]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__utils__angular__scroll_host__gestures.GestureListener, {
    /*src__utils__angular__scroll_host__gestures.GestureListener._defaultScrollInterval*/get _defaultScrollInterval() {
      return dart.const(new core.Duration.new({milliseconds: 17}));
    }
  });
  const _startTime = Symbol('_startTime');
  const _lastTime = Symbol('_lastTime');
  const _lastTouchPoint = Symbol('_lastTouchPoint');
  const _lastSyncPoint = Symbol('_lastSyncPoint');
  const _finished = Symbol('_finished');
  const _startingTarget = Symbol('_startingTarget');
  const _velocityX = Symbol('_velocityX');
  const _velocityY = Symbol('_velocityY');
  const _velocity = Symbol('_velocity');
  const _addDragEvent = Symbol('_addDragEvent');
  const _addFlingEvent = Symbol('_addFlingEvent');
  const _syncToLastTouchPoint = Symbol('_syncToLastTouchPoint');
  src__utils__angular__scroll_host__gestures._Gesture = class _Gesture extends core.Object {
    get finished() {
      return this[_finished];
    }
    get [_velocityX]() {
      let deltaX = dart.asInt(dart.notNull(this[_startPoint].x) - dart.notNull(this[_lastTouchPoint].x));
      let deltaT = this[_lastTime].difference(this[_startTime]).inMilliseconds;
      return deltaT === 0 ? 0.0 : deltaX[$toDouble]() / dart.notNull(deltaT);
    }
    get [_velocityY]() {
      let deltaY = dart.asInt(dart.notNull(this[_startPoint].y) - dart.notNull(this[_lastTouchPoint].y));
      let deltaT = this[_lastTime].difference(this[_startTime]).inMilliseconds;
      return deltaT === 0 ? 0.0 : deltaY[$toDouble]() / dart.notNull(deltaT);
    }
    get [_velocity]() {
      let x = this[_velocityX];
      let y = this[_velocityY];
      return math.sqrt(dart.notNull(x) * dart.notNull(x) + dart.notNull(y) * dart.notNull(y));
    }
    start(touchStart) {
      if (!(this[_scrollTimer] == null)) dart.assertFailed();
      this[_scrollTimer] = async.Timer.periodic(this[_scrollInterval], dart.bind(this, _addDragEvent));
      this[_startTime] = this[_clock].now();
      this[_lastTime] = this[_startTime];
      this[_startPoint] = touchStart.touches[$single][$screen];
      this[_lastTouchPoint] = this[_startPoint];
      this[_lastSyncPoint] = this[_startPoint];
      this[_startingTarget] = touchStart[$target];
    }
    update(touchMove) {
      if (!!dart.test(this[_finished])) dart.assertFailed();
      this[_lastTime] = this[_clock].now();
      this[_lastTouchPoint] = touchMove.touches[$first][$screen];
    }
    finish() {
      if (dart.test(this[_finished])) return;
      this[_finished] = true;
      this[_scrollTimer].cancel();
      if (this[_velocity][$abs]() >= 2.0) {
        this[_scrollTimer] = async.Timer.periodic(this[_scrollInterval], dart.bind(this, _addFlingEvent));
      } else {
        this[_syncToLastTouchPoint]();
      }
    }
    cancel() {
      this[_finished] = true;
      this[_scrollTimer].cancel();
    }
    [_syncToLastTouchPoint]() {
      let delta = this[_lastSyncPoint]['-'](this[_lastTouchPoint]);
      if (delta.x !== 0 || delta.y !== 0) {
        this[_scrollController].add(new src__utils__angular__scroll_host__gestures.GestureEvent.new(dart.asInt(delta.x), dart.asInt(delta.y), this[_startingTarget]));
        this[_lastSyncPoint] = this[_lastTouchPoint];
      }
    }
    [_addDragEvent](_) {
      if (dart.test(this[_lastTime].add(src__utils__angular__scroll_host__gestures._Gesture._touchMoveTimeout).isBefore(this[_clock].now()))) {
        return this.cancel();
      }
      this[_syncToLastTouchPoint]();
    }
    [_addFlingEvent](_) {
      let deltaT = this[_clock].now().difference(this[_lastTime]).inMilliseconds;
      let speed = this[_velocity][$abs]() - 0.005 * dart.notNull(deltaT);
      let deltaX = (speed * this[_velocityX][$sign] * dart.notNull(this[_scrollInterval].inMilliseconds))[$round]();
      let deltaY = (speed * this[_velocityY][$sign] * dart.notNull(this[_scrollInterval].inMilliseconds))[$round]();
      if (speed > 0 && (deltaX !== 0 || deltaY !== 0)) {
        this[_scrollController].add(new src__utils__angular__scroll_host__gestures.GestureEvent.new(deltaX, deltaY, this[_startingTarget]));
      } else {
        this.cancel();
      }
    }
  };
  (src__utils__angular__scroll_host__gestures._Gesture.new = function(scrollController, clock, scrollInterval) {
    this[_scrollTimer] = null;
    this[_startTime] = null;
    this[_lastTime] = null;
    this[_startPoint] = null;
    this[_lastTouchPoint] = null;
    this[_lastSyncPoint] = null;
    this[_finished] = false;
    this[_startingTarget] = null;
    this[_scrollController] = scrollController;
    this[_clock] = clock;
    this[_scrollInterval] = scrollInterval;
  }).prototype = src__utils__angular__scroll_host__gestures._Gesture.prototype;
  dart.addTypeTests(src__utils__angular__scroll_host__gestures._Gesture);
  dart.setMethodSignature(src__utils__angular__scroll_host__gestures._Gesture, () => ({
    __proto__: dart.getMethods(src__utils__angular__scroll_host__gestures._Gesture.__proto__),
    start: dart.fnType(dart.void, [html.TouchEvent]),
    update: dart.fnType(dart.void, [html.TouchEvent]),
    finish: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_syncToLastTouchPoint]: dart.fnType(dart.void, []),
    [_addDragEvent]: dart.fnType(dart.void, [async.Timer]),
    [_addFlingEvent]: dart.fnType(dart.void, [async.Timer])
  }));
  dart.setGetterSignature(src__utils__angular__scroll_host__gestures._Gesture, () => ({
    __proto__: dart.getGetters(src__utils__angular__scroll_host__gestures._Gesture.__proto__),
    finished: core.bool,
    [_velocityX]: core.double,
    [_velocityY]: core.double,
    [_velocity]: core.double
  }));
  dart.setFieldSignature(src__utils__angular__scroll_host__gestures._Gesture, () => ({
    __proto__: dart.getFields(src__utils__angular__scroll_host__gestures._Gesture.__proto__),
    [_scrollController]: dart.finalFieldType(StreamControllerOfGestureEvent()),
    [_clock]: dart.finalFieldType(time$.Clock),
    [_scrollInterval]: dart.finalFieldType(core.Duration),
    [_scrollTimer]: dart.fieldType(async.Timer),
    [_startTime]: dart.fieldType(core.DateTime),
    [_lastTime]: dart.fieldType(core.DateTime),
    [_startPoint]: dart.fieldType(PointOfnum()),
    [_lastTouchPoint]: dart.fieldType(PointOfnum()),
    [_lastSyncPoint]: dart.fieldType(PointOfnum()),
    [_finished]: dart.fieldType(core.bool),
    [_startingTarget]: dart.fieldType(html.EventTarget)
  }));
  dart.defineLazy(src__utils__angular__scroll_host__gestures._Gesture, {
    /*src__utils__angular__scroll_host__gestures._Gesture._touchMoveTimeout*/get _touchMoveTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 500}));
    },
    /*src__utils__angular__scroll_host__gestures._Gesture._flingSpeedThreshold*/get _flingSpeedThreshold() {
      return 2.0;
    },
    /*src__utils__angular__scroll_host__gestures._Gesture._frictionCoefficient*/get _frictionCoefficient() {
      return 0.005;
    }
  });
  dart.trackLibraries("packages/angular_components/utils/angular/scroll_host/interface.ddc", {
    "package:angular_components/src/utils/angular/scroll_host/scroll_observer.dart": src__utils__angular__scroll_host__scroll_observer,
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_event_impl.dart": src__utils__angular__scroll_host__scroll_host_event_impl,
    "package:angular_components/src/utils/angular/scroll_host/gestures.dart": src__utils__angular__scroll_host__gestures,
    "package:angular_components/utils/angular/scroll_host/interface.dart": utils__angular__scroll_host__interface
  }, '{"version":3,"sourceRoot":"","sources":["../../../src/utils/angular/scroll_host/scroll_observer.dart","../../../src/utils/angular/scroll_host/scroll_host_event_impl.dart","../../../src/utils/angular/scroll_host/gestures.dart"],"names":[],"mappings":"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","file":"interface.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__scroll_observer: src__utils__angular__scroll_host__scroll_observer,
    src__utils__angular__scroll_host__scroll_host_event_impl: src__utils__angular__scroll_host__scroll_host_event_impl,
    src__utils__angular__scroll_host__gestures: src__utils__angular__scroll_host__gestures,
    utils__angular__scroll_host__interface: utils__angular__scroll_host__interface
  };
});

//# sourceMappingURL=interface.ddc.js.map
