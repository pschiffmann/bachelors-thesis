define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/reorder_list/reorder_events', 'packages/angular_components/utils/keyboard/keyboard', 'packages/quiver/iterables', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, disposer, reorder_events, keyboard, iterables, change_detection, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const reorder_list__reorder_events = reorder_events.reorder_list__reorder_events;
  const utils__keyboard__keyboard = keyboard.utils__keyboard__keyboard;
  const iterables$ = iterables.iterables;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const reorder_list__reorder_list = Object.create(_root);
  const $toSet = dartx.toSet;
  const $keys = dartx.keys;
  const $clear = dartx.clear;
  const $length = dartx.length;
  const $first = dartx.first;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $transition = dartx.transition;
  const $transform = dartx.transform;
  const $height = dartx.height;
  const $borderEdge = dartx.borderEdge;
  const $width = dartx.width;
  const $top = dartx.top;
  const $left = dartx.left;
  const $offset = dartx.offset;
  const $right = dartx.right;
  const $sign = dartx.sign;
  const $dataTransfer = dartx.dataTransfer;
  const $onDragStart = dartx.onDragStart;
  const $add = dartx.add;
  const $onDragEnd = dartx.onDragEnd;
  const $onKeyDown = dartx.onKeyDown;
  const $onDragOver = dartx.onDragOver;
  const $onClick = dartx.onClick;
  const $remove = dartx.remove;
  const $toList = dartx.toList;
  const $values = dartx.values;
  const $currentTarget = dartx.currentTarget;
  const $contains = dartx.contains;
  const $classes = dartx.classes;
  const $indexOf = dartx.indexOf;
  const $getComputedStyle = dartx.getComputedStyle;
  const $marginBottom = dartx.marginBottom;
  const $marginTop = dartx.marginTop;
  const $marginLeft = dartx.marginLeft;
  const $marginRight = dartx.marginRight;
  const $replaceAll = dartx.replaceAll;
  const $target = dartx.target;
  const $isNotEmpty = dartx.isNotEmpty;
  const $sort = dartx.sort;
  let StreamControllerOfReorderEvent = () => (StreamControllerOfReorderEvent = dart.constFn(async.StreamController$(reorder_list__reorder_events.ReorderEvent)))();
  let StreamControllerOfint = () => (StreamControllerOfint = dart.constFn(async.StreamController$(core.int)))();
  let StreamControllerOfItemSelectionEvent = () => (StreamControllerOfItemSelectionEvent = dart.constFn(async.StreamController$(reorder_list__reorder_events.ItemSelectionEvent)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let LinkedMapOfHtmlElement$ListOfStreamSubscription = () => (LinkedMapOfHtmlElement$ListOfStreamSubscription = dart.constFn(_js_helper.LinkedMap$(html.HtmlElement, ListOfStreamSubscription())))();
  let LinkedMapOfHtmlElement$StreamSubscription = () => (LinkedMapOfHtmlElement$StreamSubscription = dart.constFn(_js_helper.LinkedMap$(html.HtmlElement, async.StreamSubscription)))();
  let dynamicToHtmlElement = () => (dynamicToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [dart.dynamic])))();
  let MapOfHtmlElement$HtmlElement = () => (MapOfHtmlElement$HtmlElement = dart.constFn(core.Map$(html.HtmlElement, html.HtmlElement)))();
  let SetOfHtmlElement = () => (SetOfHtmlElement = dart.constFn(core.Set$(html.HtmlElement)))();
  let ListOfHtmlElement = () => (ListOfHtmlElement = dart.constFn(core.List$(html.HtmlElement)))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let KeyboardEventTovoid = () => (KeyboardEventTovoid = dart.constFn(dart.fnType(dart.void, [html.KeyboardEvent])))();
  let MouseEventTovoid = () => (MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let MapOfHtmlElement$ListOfStreamSubscription = () => (MapOfHtmlElement$ListOfStreamSubscription = dart.constFn(core.Map$(html.HtmlElement, ListOfStreamSubscription())))();
  let MapOfHtmlElement$StreamSubscription = () => (MapOfHtmlElement$StreamSubscription = dart.constFn(core.Map$(html.HtmlElement, async.StreamSubscription)))();
  const _ngZone = Symbol('_ngZone');
  const _disposer = Symbol('_disposer');
  const _reorder = Symbol('_reorder');
  const _reorderAttempt = Symbol('_reorderAttempt');
  const _delete = Symbol('_delete');
  const _itemSelectionChanged = Symbol('_itemSelectionChanged');
  const _items = Symbol('_items');
  const _subscriptions = Symbol('_subscriptions');
  const _dragSubscriptions = Symbol('_dragSubscriptions');
  const _curTransformY = Symbol('_curTransformY');
  const _itemSizes = Symbol('_itemSizes');
  const _reorderActive = Symbol('_reorderActive');
  const _moveSourceIndex = Symbol('_moveSourceIndex');
  const _currentMoveIndex = Symbol('_currentMoveIndex');
  const _dragSourceElement = Symbol('_dragSourceElement');
  const _selectedElementIndexes = Symbol('_selectedElementIndexes');
  const _pivotItemIndex = Symbol('_pivotItemIndex');
  const _refreshItems = Symbol('_refreshItems');
  const _handleElements = Symbol('_handleElements');
  const _unTrackAll = Symbol('_unTrackAll');
  const _reorderElements = Symbol('_reorderElements');
  const _horizontalTransformHandler = Symbol('_horizontalTransformHandler');
  const _createReorderEvent = Symbol('_createReorderEvent');
  const _moveItem = Symbol('_moveItem');
  const _subscriptionsForElement = Symbol('_subscriptionsForElement');
  const _onDragStart = Symbol('_onDragStart');
  const _onDragEnd = Symbol('_onDragEnd');
  const _onKeyDown = Symbol('_onKeyDown');
  const _onDragOver = Symbol('_onDragOver');
  const _onClick = Symbol('_onClick');
  const _getIndex = Symbol('_getIndex');
  const _clearSelection = Symbol('_clearSelection');
  const _notifySelectionChange = Symbol('_notifySelectionChange');
  const _computeItemSize = Symbol('_computeItemSize');
  const _parsePx = Symbol('_parsePx');
  const _resetChildren = Symbol('_resetChildren');
  const _getNewIndex = Symbol('_getNewIndex');
  const _handleShift = Symbol('_handleShift');
  const _handleCtrl = Symbol('_handleCtrl');
  reorder_list__reorder_list.ReorderListComponent = class ReorderListComponent extends core.Object {
    get reorder() {
      return this[_reorder].stream;
    }
    get reorderAttempt() {
      return this[_reorderAttempt].stream;
    }
    get delete() {
      return this[_delete].stream;
    }
    get itemSelectionChanged() {
      return this[_itemSelectionChanged].stream;
    }
    get verticalItems() {
      return this[verticalItems];
    }
    set verticalItems(value) {
      this[verticalItems] = value;
    }
    get multiSelect() {
      return this[multiSelect];
    }
    set multiSelect(value) {
      this[multiSelect] = value;
    }
    get placeholder() {
      return this[placeholder];
    }
    set placeholder(value) {
      this[placeholder] = value;
    }
    set items(value) {
      this[_items] = MapOfHtmlElement$HtmlElement().fromIterable(value, {key: dart.fn(e => html.HtmlElement._check(dart.dload(e, 'handleElement')), dynamicToHtmlElement()), value: dart.fn(e => html.HtmlElement._check(dart.dload(e, 'element')), dynamicToHtmlElement())});
      this[_refreshItems]();
    }
    [_refreshItems]() {
      let newElements = this[_handleElements][$toSet]();
      let currentlyTracked = SetOfHtmlElement().from(this[_subscriptions][$keys]);
      for (let tracked of currentlyTracked) {
        if (!dart.test(newElements.contains(tracked))) {
          this.unTrack(tracked);
        }
      }
      for (let newElement of newElements) {
        if (!dart.test(currentlyTracked.contains(newElement))) {
          this.track(newElement);
        }
      }
      if (dart.test(this.multiSelect)) this[_selectedElementIndexes][$clear]();
    }
    ngOnDestroy() {
      this[_unTrackAll]();
      this[_disposer].dispose();
    }
    [_unTrackAll]() {
      let keys = ListOfHtmlElement().from(this[_subscriptions][$keys]);
      for (let element of keys) {
        this.unTrack(element);
      }
    }
    [_moveItem](fromIndex, toIndex) {
      let contents = this[_reorderElements];
      let leftSide = 0;
      let rightSide = 0;
      let childCount = contents[$length];
      if (dart.notNull(childCount) > 0) {
        leftSide = core.int._check(dart.dload(dart.dload(dart.dload(contents[$first], 'parent'), 'offset'), 'left'));
        rightSide = core.int._check(dart.dload(dart.dload(dart.dload(contents[$first], 'parent'), 'offset'), 'right'));
      }
      let nextOffset = null;
      let upperStackSize = 0;
      let moveRight = true;
      for (let i = 0; i < dart.notNull(childCount); i++) {
        let offset = 0;
        let e = html.HtmlElement._check(contents[$_get](i));
        if (i === this[_moveSourceIndex]) {
          offset = -8000;
        } else if (dart.notNull(this[_moveSourceIndex]) < i && i <= dart.notNull(toIndex)) {
          offset = offset - dart.notNull(this[_itemSizes][$_get](this[_moveSourceIndex]));
        } else if (dart.notNull(toIndex) <= i && i < dart.notNull(this[_moveSourceIndex])) {
          offset = offset + dart.notNull(this[_itemSizes][$_get](this[_moveSourceIndex]));
        }
        if (i !== this[_moveSourceIndex] && i < dart.notNull(toIndex) || i === toIndex && dart.notNull(toIndex) > dart.notNull(this[_moveSourceIndex])) {
          upperStackSize = upperStackSize + dart.notNull(this[_itemSizes][$_get](i));
        }
        if (offset !== this[_curTransformY][$_get](i)) {
          this[_curTransformY][$_set](i, offset);
          if (e.style[$transition] !== "transform:all 0.2s ease-out") {
            e.style[$transition] = "all 0.2s ease-out";
          }
          if (!dart.test(this.verticalItems) && offset !== -8000) {
            nextOffset = this[_horizontalTransformHandler](e, html.Element._check(i === 0 ? null : contents[$_get](i - 1)), offset, nextOffset, leftSide, rightSide);
            if (i === toIndex) {
              moveRight = offset > 0;
            }
          } else {
            e.style[$transform] = offset === 0 ? "" : "translate(0," + dart.str(offset) + "px)";
          }
        }
      }
      let draggedElement = this[_items][$_get](this[_dragSourceElement]);
      if (dart.test(this.verticalItems)) {
        this.placeholder.style[$height] = dart.str(draggedElement[$borderEdge].height) + "px";
        this.placeholder.style[$width] = dart.str(draggedElement[$borderEdge].width) + "px";
        this.placeholder.style[$top] = dart.str(upperStackSize) + "px";
      } else {
        let e = html.HtmlElement._check(contents[$_get](toIndex));
        let left = moveRight ? e[$offset][$left] : dart.notNull(e[$offset][$right]) - dart.notNull(draggedElement[$borderEdge].width);
        this.placeholder.style[$height] = dart.str(draggedElement[$borderEdge].height) + "px";
        this.placeholder.style[$width] = dart.str(draggedElement[$borderEdge].width) + "px";
        this.placeholder.style[$top] = dart.str(e[$offset][$top]) + "px";
        this.placeholder.style[$left] = dart.str(left) + "px";
      }
      this[_reorderAttempt].add(this[_createReorderEvent](this[_moveSourceIndex], toIndex));
    }
    [_horizontalTransformHandler](e, prev, offset, nextOffset, leftSide, rightSide) {
      if (nextOffset != null) {
        if (offset[$sign] === nextOffset[$sign]) {
          offset = nextOffset;
        } else {
          offset = dart.notNull(offset) + dart.notNull(nextOffset);
        }
      }
      if (dart.notNull(e[$offset][$right]) + dart.notNull(offset) > dart.notNull(rightSide)) {
        nextOffset = dart.asInt(e[$offset][$width]);
        e.style[$transform] = "translate(" + dart.str(-dart.notNull(e[$offset][$left]) + dart.notNull(leftSide)) + "px," + (dart.str(e[$offset][$height]) + "px)");
      } else if (dart.notNull(e[$offset][$left]) + dart.notNull(offset) < dart.notNull(leftSide)) {
        if (dart.notNull(e[$offset][$width]) < dart.notNull(prev[$offset][$right])) {
          nextOffset = dart.asInt(-dart.notNull(e[$offset][$width]));
          e.style[$transform] = "translate(" + (dart.str(dart.notNull(prev[$offset][$right]) - dart.notNull(leftSide) + dart.notNull(offset)) + "px,") + (dart.str(-dart.notNull(e[$offset][$height])) + "px)");
        } else {
          nextOffset = 0;
        }
      } else {
        e.style[$transform] = "translate(" + dart.str(offset) + "px,0px)";
      }
      return nextOffset;
    }
    track(element) {
      element.draggable = true;
      let subs = this[_subscriptionsForElement](element);
      subs[$add](element[$onDragStart].listen(dart.fn(e => {
        e[$dataTransfer].setData("Text", element.id);
        e[$dataTransfer].effectAllowed = "copyMove";
        this[_onDragStart](e);
      }, MouseEventToNull())));
      subs[$add](element[$onDragEnd].listen(dart.bind(this, _onDragEnd)));
      subs[$add](element[$onKeyDown].listen(dart.fn(e => this[_onKeyDown](e, element), KeyboardEventTovoid())));
      this[_dragSubscriptions][$_set](element, element[$onDragOver].listen(dart.fn(e => this[_onDragOver](e, element), MouseEventTovoid())));
      if (dart.test(this.multiSelect)) {
        subs[$add](element[$onClick].listen(dart.fn(e => this[_onClick](e, element), MouseEventTovoid())));
      }
    }
    unTrack(element) {
      let subs = this[_subscriptionsForElement](element);
      for (let s of subs) {
        s.cancel();
      }
      this[_subscriptions][$remove](element);
      if (this[_dragSubscriptions][$_get](element) != null) {
        this[_dragSubscriptions][$_get](element).cancel();
      }
      this[_dragSubscriptions][$remove](element);
    }
    get [_handleElements]() {
      return this[_items][$keys][$toList]();
    }
    get [_reorderElements]() {
      return this[_items][$values][$toList]();
    }
    [_onDragStart](e) {
      if (dart.test(this.multiSelect)) {
        let index = this[_getIndex](html.HtmlElement._check(e[$currentTarget]));
        if (!dart.test(this[_selectedElementIndexes][$contains](index))) {
          this[_clearSelection]();
          this[_selectedElementIndexes][$add](index);
          this[_notifySelectionChange]();
        }
      }
      this[_dragSourceElement] = html.HtmlElement._check(e[$currentTarget]);
      this[_dragSourceElement][$classes].add("reorder-list-dragging-active");
      let contents = this[_reorderElements];
      let childCount = contents[$length];
      this[_moveSourceIndex] = this[_handleElements][$indexOf](this[_dragSourceElement]);
      this[_curTransformY] = ListOfint().filled(childCount, 0);
      this[_itemSizes] = ListOfint().new(childCount);
      for (let i = 0; i < dart.notNull(childCount); i++) {
        this[_itemSizes][$_set](i, this[_computeItemSize](contents[$_get](i)));
      }
      this[_reorderActive] = true;
      this[_currentMoveIndex] = this[_moveSourceIndex];
      this[_moveItem](this[_currentMoveIndex], this[_currentMoveIndex]);
    }
    [_computeItemSize](elem) {
      let cssStyle = elem[$getComputedStyle]();
      if (dart.test(this.verticalItems)) {
        return dart.asInt(dart.notNull(elem[$offset][$height]) + dart.notNull(this[_parsePx](cssStyle[$marginBottom])) + dart.notNull(this[_parsePx](cssStyle[$marginTop])));
      } else {
        return dart.asInt(dart.notNull(elem[$offset][$width]) + dart.notNull(this[_parsePx](cssStyle[$marginLeft])) + dart.notNull(this[_parsePx](cssStyle[$marginRight])));
      }
    }
    [_parsePx](style) {
      return core.int.parse(style[$replaceAll]("px", ""));
    }
    [_onDragEnd](e) {
      e.stopPropagation();
      this[_reorderActive] = false;
      this[_dragSourceElement][$classes].remove("reorder-list-dragging-active");
      this[_reorderActive] = false;
      this[_resetChildren]();
      this[_reorder].add(this[_createReorderEvent](this[_moveSourceIndex], this[_currentMoveIndex]));
      if (dart.test(this.multiSelect)) {
        this[_clearSelection]();
        this[_notifySelectionChange]();
      }
    }
    [_onKeyDown](e, element) {
      if ((e.keyCode === html.KeyCode.UP || e.keyCode === html.KeyCode.DOWN) && dart.test(utils__keyboard__keyboard.modifiersKeysFor(e))) {
        let index = this[_getIndex](element);
        if (index === -1) {
          return;
        }
        let newIndex = this[_getNewIndex](e.keyCode, index);
        this[_reorderElements][$_get](newIndex).focus();
        e.preventDefault();
        e.stopPropagation();
      } else if ((e.keyCode === html.KeyCode.UP || e.keyCode === html.KeyCode.DOWN) && dart.test(utils__keyboard__keyboard.modifiersKeysFor(e, {shiftKey: true}))) {
        let index = this[_getIndex](element);
        if (index === -1) {
          return;
        }
        let newIndex = this[_getNewIndex](e.keyCode, index);
        if (newIndex != index) {
          this[_reorder].add(this[_createReorderEvent](index, newIndex));
          this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
            let element = this[_reorderElements][$_get](newIndex);
            if (dart.test(this.multiSelect)) {
              this[_clearSelection]();
              element[$classes].add(reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass);
              this[_selectedElementIndexes][$add](newIndex);
              this[_notifySelectionChange]();
            }
            element.focus();
          }, voidToNull()));
        }
        e.preventDefault();
        e.stopPropagation();
      } else if ((e.keyCode === html.KeyCode.DELETE || e.keyCode === html.KeyCode.NUM_DELETE || e.keyCode === html.KeyCode.BACKSPACE) && dart.test(utils__keyboard__keyboard.modifiersKeysFor(e))) {
        if (!dart.equals(html.HtmlElement.as(e[$target]), element)) return;
        let index = this[_getIndex](element);
        if (index === -1) {
          return;
        }
        this.removeAt(index);
        e.stopPropagation();
        e.preventDefault();
      }
    }
    [_onClick](e, element) {
      let index = this[_getIndex](element);
      if (index === -1) {
        return;
      }
      if (dart.test(e.shiftKey)) {
        this[_handleShift](index);
      } else if (dart.test(e.ctrlKey) || dart.test(e.metaKey)) {
        this[_handleCtrl](index, element);
      } else {
        if (!dart.test(this[_selectedElementIndexes][$contains](index))) {
          this[_clearSelection]();
          this[_selectedElementIndexes][$add](index);
        }
        this[_pivotItemIndex] = index;
      }
      this[_notifySelectionChange]();
    }
    removeAt(index) {
      this[_delete].add(index);
      this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
        if (dart.notNull(index) < dart.notNull(this[_reorderElements][$length])) {
          this[_reorderElements][$_get](index).focus();
        } else if (dart.test(this[_reorderElements][$isNotEmpty])) {
          this[_reorderElements][$_get](dart.notNull(this[_reorderElements][$length]) - 1).focus();
        }
      }, voidToNull()));
    }
    [_notifySelectionChange]() {
      let sources = ListOfint().from(this[_selectedElementIndexes]);
      sources[$sort]();
      this[_itemSelectionChanged].add(new reorder_list__reorder_events.ItemSelectionEvent.new(sources));
    }
    [_handleCtrl](index, element) {
      this[_pivotItemIndex] = index;
      if (dart.test(element[$classes].contains(reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass))) {
        element[$classes].remove(reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass);
        this[_selectedElementIndexes][$remove](index);
      } else {
        element[$classes].add(reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass);
        this[_selectedElementIndexes][$add](index);
      }
    }
    [_handleShift](index) {
      if (this[_pivotItemIndex] == null) {
        this[_pivotItemIndex] = index;
      }
      let indexes = ListOfint().from(iterables$.range(math.min(core.num, this[_pivotItemIndex], index), math.max(core.num, this[_pivotItemIndex], index)));
      indexes[$add](math.max(core.int, this[_pivotItemIndex], index));
      this[_clearSelection]();
      let allElements = this[_reorderElements];
      for (let index of indexes) {
        allElements[$_get](index)[$classes].add(reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass);
        this[_selectedElementIndexes][$add](index);
      }
    }
    [_clearSelection]() {
      let allElements = this[_reorderElements];
      for (let index of this[_selectedElementIndexes]) {
        allElements[$_get](index)[$classes].remove(reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass);
      }
      this[_selectedElementIndexes][$clear]();
    }
    [_getNewIndex](keyCode, index) {
      if (keyCode === html.KeyCode.UP && dart.notNull(index) > 0) {
        return dart.notNull(index) - 1;
      } else if (keyCode === html.KeyCode.DOWN && dart.notNull(index) < dart.notNull(this[_reorderElements][$length]) - 1) {
        return dart.notNull(index) + 1;
      } else {
        return index;
      }
    }
    [_onDragOver](event, element) {
      if (dart.equals(this[_dragSourceElement], element)) {
        return;
      }
      let elementIndex = this[_getIndex](element);
      let moveTargetIndex = elementIndex;
      if (dart.notNull(this[_currentMoveIndex]) < dart.notNull(this[_moveSourceIndex]) && dart.notNull(elementIndex) >= dart.notNull(this[_currentMoveIndex]) && dart.notNull(elementIndex) < dart.notNull(this[_moveSourceIndex])) {
        moveTargetIndex = dart.notNull(moveTargetIndex) + 1;
      }
      if (dart.notNull(this[_currentMoveIndex]) > dart.notNull(this[_moveSourceIndex]) && dart.notNull(elementIndex) <= dart.notNull(this[_currentMoveIndex]) && dart.notNull(elementIndex) > dart.notNull(this[_moveSourceIndex])) {
        moveTargetIndex = dart.notNull(moveTargetIndex) - 1;
      }
      if (this[_currentMoveIndex] != moveTargetIndex && dart.test(this[_reorderActive]) && moveTargetIndex !== -1) {
        this[_moveItem](this[_currentMoveIndex], moveTargetIndex);
        this[_currentMoveIndex] = moveTargetIndex;
        this[_dragSubscriptions][$_get](element).cancel();
        this[_dragSubscriptions][$_get](element) == null;
        FutureOfNull().delayed(new core.Duration.new({milliseconds: 250}), dart.fn(() => {
          if (this[_subscriptions][$_get](element) != null) {
            this[_dragSubscriptions][$_set](element, element[$onDragOver].listen(dart.fn(e => this[_onDragOver](e, element), MouseEventTovoid())));
          }
        }, VoidToNull()));
      }
    }
    [_getIndex](element) {
      let contents = this[_handleElements];
      let childCount = contents[$length];
      for (let i = 0; i < dart.notNull(childCount); i++) {
        if (dart.equals(element, contents[$_get](i))) {
          return i;
        }
      }
      return -1;
    }
    [_createReorderEvent](sourceIndex, destIndex) {
      if (dart.test(this.multiSelect)) {
        let sources = ListOfint().from(this[_selectedElementIndexes]);
        sources[$sort]();
        return new reorder_list__reorder_events.MultiReorderEvent.new(sources, destIndex);
      } else {
        return new reorder_list__reorder_events.ReorderEvent.new(sourceIndex, destIndex);
      }
    }
    [_resetChildren]() {
      if (this[_currentMoveIndex] !== -1) {
        let contents = this[_reorderElements];
        let childCount = contents[$length];
        for (let i = 0; i < dart.notNull(childCount); i++) {
          let e = html.HtmlElement._check(contents[$_get](i));
          e.style[$transition] = "";
          if (this[_curTransformY][$_get](i) !== 0) {
            e.style[$transform] = "";
          }
        }
      }
    }
    [_subscriptionsForElement](elm) {
      let l = this[_subscriptions][$_get](elm);
      if (l == null) {
        l = JSArrayOfStreamSubscription().of([]);
        this[_subscriptions][$_set](elm, l);
      }
      return l;
    }
    get showPlaceholder() {
      return this[_reorderActive];
    }
  };
  (reorder_list__reorder_list.ReorderListComponent.new = function(ngZone) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_reorder] = StreamControllerOfReorderEvent().broadcast({sync: true});
    this[_reorderAttempt] = StreamControllerOfReorderEvent().broadcast({sync: true});
    this[_delete] = StreamControllerOfint().broadcast({sync: true});
    this[_itemSelectionChanged] = StreamControllerOfItemSelectionEvent().broadcast({sync: true});
    this[verticalItems] = true;
    this[multiSelect] = false;
    this[_items] = null;
    this[_subscriptions] = null;
    this[_dragSubscriptions] = null;
    this[_curTransformY] = null;
    this[_itemSizes] = null;
    this[_reorderActive] = false;
    this[_moveSourceIndex] = -1;
    this[_currentMoveIndex] = -1;
    this[_dragSourceElement] = null;
    this[_selectedElementIndexes] = JSArrayOfint().of([]);
    this[_pivotItemIndex] = null;
    this[placeholder] = null;
    this[_ngZone] = ngZone;
    this[_subscriptions] = new (LinkedMapOfHtmlElement$ListOfStreamSubscription()).new();
    this[_dragSubscriptions] = new (LinkedMapOfHtmlElement$StreamSubscription()).new();
  }).prototype = reorder_list__reorder_list.ReorderListComponent.prototype;
  dart.addTypeTests(reorder_list__reorder_list.ReorderListComponent);
  const verticalItems = Symbol("ReorderListComponent.verticalItems");
  const multiSelect = Symbol("ReorderListComponent.multiSelect");
  const placeholder = Symbol("ReorderListComponent.placeholder");
  reorder_list__reorder_list.ReorderListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(reorder_list__reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getMethods(reorder_list__reorder_list.ReorderListComponent.__proto__),
    [_refreshItems]: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_unTrackAll]: dart.fnType(dart.void, []),
    [_moveItem]: dart.fnType(dart.void, [core.int, core.int]),
    [_horizontalTransformHandler]: dart.fnType(core.int, [html.HtmlElement, html.Element, core.int, core.int, core.int, core.int]),
    track: dart.fnType(dart.void, [html.HtmlElement]),
    unTrack: dart.fnType(dart.void, [html.HtmlElement]),
    [_onDragStart]: dart.fnType(dart.void, [html.MouseEvent]),
    [_computeItemSize]: dart.fnType(core.int, [html.Element]),
    [_parsePx]: dart.fnType(core.int, [core.String]),
    [_onDragEnd]: dart.fnType(dart.void, [html.MouseEvent]),
    [_onKeyDown]: dart.fnType(dart.void, [html.KeyboardEvent, html.HtmlElement]),
    [_onClick]: dart.fnType(dart.void, [html.MouseEvent, html.HtmlElement]),
    removeAt: dart.fnType(dart.void, [core.int]),
    [_notifySelectionChange]: dart.fnType(dart.void, []),
    [_handleCtrl]: dart.fnType(dart.void, [core.int, html.HtmlElement]),
    [_handleShift]: dart.fnType(dart.void, [core.int]),
    [_clearSelection]: dart.fnType(dart.void, []),
    [_getNewIndex]: dart.fnType(core.int, [core.int, core.int]),
    [_onDragOver]: dart.fnType(dart.void, [html.MouseEvent, html.HtmlElement]),
    [_getIndex]: dart.fnType(core.int, [html.HtmlElement]),
    [_createReorderEvent]: dart.fnType(reorder_list__reorder_events.ReorderEvent, [core.int, core.int]),
    [_resetChildren]: dart.fnType(dart.void, []),
    [_subscriptionsForElement]: dart.fnType(core.List$(async.StreamSubscription), [html.HtmlElement])
  }));
  dart.setGetterSignature(reorder_list__reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getGetters(reorder_list__reorder_list.ReorderListComponent.__proto__),
    reorder: async.Stream$(reorder_list__reorder_events.ReorderEvent),
    reorderAttempt: async.Stream$(reorder_list__reorder_events.ReorderEvent),
    delete: async.Stream$(core.int),
    itemSelectionChanged: async.Stream$(reorder_list__reorder_events.ItemSelectionEvent),
    [_handleElements]: core.List$(html.HtmlElement),
    [_reorderElements]: core.List$(html.HtmlElement),
    showPlaceholder: core.bool
  }));
  dart.setSetterSignature(reorder_list__reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getSetters(reorder_list__reorder_list.ReorderListComponent.__proto__),
    items: core.List$(reorder_list__reorder_list.ReorderItemDirective)
  }));
  dart.setFieldSignature(reorder_list__reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list.ReorderListComponent.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_reorder]: dart.finalFieldType(StreamControllerOfReorderEvent()),
    [_reorderAttempt]: dart.finalFieldType(StreamControllerOfReorderEvent()),
    [_delete]: dart.finalFieldType(StreamControllerOfint()),
    [_itemSelectionChanged]: dart.finalFieldType(StreamControllerOfItemSelectionEvent()),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    verticalItems: dart.fieldType(core.bool),
    multiSelect: dart.fieldType(core.bool),
    [_items]: dart.fieldType(MapOfHtmlElement$HtmlElement()),
    [_subscriptions]: dart.fieldType(MapOfHtmlElement$ListOfStreamSubscription()),
    [_dragSubscriptions]: dart.fieldType(MapOfHtmlElement$StreamSubscription()),
    [_curTransformY]: dart.fieldType(ListOfint()),
    [_itemSizes]: dart.fieldType(ListOfint()),
    [_reorderActive]: dart.fieldType(core.bool),
    [_moveSourceIndex]: dart.fieldType(core.int),
    [_currentMoveIndex]: dart.fieldType(core.int),
    [_dragSourceElement]: dart.fieldType(html.HtmlElement),
    [_selectedElementIndexes]: dart.fieldType(ListOfint()),
    [_pivotItemIndex]: dart.fieldType(core.int),
    placeholder: dart.fieldType(html.HtmlElement)
  }));
  dart.defineLazy(reorder_list__reorder_list.ReorderListComponent, {
    /*reorder_list__reorder_list.ReorderListComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*reorder_list__reorder_list.ReorderListComponent.hostRole*/get hostRole() {
      return "list";
    },
    /*reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass*/get itemSelectedCssClass() {
      return "item-selected";
    }
  });
  reorder_list__reorder_list.ReorderListHandler = dart.typedef('ReorderListHandler', () => dart.fnType(dart.void, [core.int, core.int]));
  const _handleProvider = Symbol('_handleProvider');
  const _handleElement = Symbol('_handleElement');
  const _reorderHandle = Symbol('_reorderHandle');
  reorder_list__reorder_list.ReorderItemDirective = class ReorderItemDirective extends core.Object {
    get hostDraggable() {
      return this[_reorderHandle] == null ? "true" : null;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    get [_reorderHandle]() {
      let l = this[_handleElement];
      return l != null ? l : (() => {
        let t = this[_handleProvider] == null ? null : this[_handleProvider].reorderHandle;
        return t == null ? null : t.element;
      })();
    }
    set reorderHandle(element) {
      this[_handleElement] = element;
    }
    get handleElement() {
      let l = this[_reorderHandle];
      return l != null ? l : this.element;
    }
  };
  (reorder_list__reorder_list.ReorderItemDirective.new = function(element, handleProvider) {
    this[_handleElement] = null;
    this[element$] = element;
    this[_handleProvider] = handleProvider;
  }).prototype = reorder_list__reorder_list.ReorderItemDirective.prototype;
  dart.addTypeTests(reorder_list__reorder_list.ReorderItemDirective);
  const element$ = Symbol("ReorderItemDirective.element");
  dart.setGetterSignature(reorder_list__reorder_list.ReorderItemDirective, () => ({
    __proto__: dart.getGetters(reorder_list__reorder_list.ReorderItemDirective.__proto__),
    hostDraggable: core.String,
    [_reorderHandle]: html.HtmlElement,
    handleElement: html.HtmlElement
  }));
  dart.setSetterSignature(reorder_list__reorder_list.ReorderItemDirective, () => ({
    __proto__: dart.getSetters(reorder_list__reorder_list.ReorderItemDirective.__proto__),
    reorderHandle: html.HtmlElement
  }));
  dart.setFieldSignature(reorder_list__reorder_list.ReorderItemDirective, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list.ReorderItemDirective.__proto__),
    element: dart.finalFieldType(html.HtmlElement),
    [_handleProvider]: dart.finalFieldType(reorder_list__reorder_list.ReorderHandleProvider),
    [_handleElement]: dart.fieldType(html.HtmlElement)
  }));
  dart.defineLazy(reorder_list__reorder_list.ReorderItemDirective, {
    /*reorder_list__reorder_list.ReorderItemDirective.hostRole*/get hostRole() {
      return "listitem";
    },
    /*reorder_list__reorder_list.ReorderItemDirective.hostTabIndex*/get hostTabIndex() {
      return 0;
    }
  });
  reorder_list__reorder_list.ReorderHandleProvider = class ReorderHandleProvider extends core.Object {};
  (reorder_list__reorder_list.ReorderHandleProvider.new = function() {
  }).prototype = reorder_list__reorder_list.ReorderHandleProvider.prototype;
  dart.addTypeTests(reorder_list__reorder_list.ReorderHandleProvider);
  reorder_list__reorder_list.ReorderHandleDirective = class ReorderHandleDirective extends core.Object {
    get element() {
      return this[element$0];
    }
    set element(value) {
      super.element = value;
    }
  };
  (reorder_list__reorder_list.ReorderHandleDirective.new = function(element) {
    this[element$0] = element;
  }).prototype = reorder_list__reorder_list.ReorderHandleDirective.prototype;
  dart.addTypeTests(reorder_list__reorder_list.ReorderHandleDirective);
  const element$0 = Symbol("ReorderHandleDirective.element");
  dart.setFieldSignature(reorder_list__reorder_list.ReorderHandleDirective, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list.ReorderHandleDirective.__proto__),
    element: dart.finalFieldType(html.HtmlElement)
  }));
  dart.defineLazy(reorder_list__reorder_list.ReorderHandleDirective, {
    /*reorder_list__reorder_list.ReorderHandleDirective.hostDraggable*/get hostDraggable() {
      return "true";
    }
  });
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_list.ddc", {
    "package:angular_components/reorder_list/reorder_list.dart": reorder_list__reorder_list
  }, '{"version":3,"sourceRoot":"","sources":["reorder_list.dart"],"names":[],"mappings":"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","file":"reorder_list.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_list: reorder_list__reorder_list
  };
});

//# sourceMappingURL=reorder_list.ddc.js.map
