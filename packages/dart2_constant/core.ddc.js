define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const core$ = Object.create(_root);
  core$.DateTime = class DateTime extends core.Object {};
  (core$.DateTime.new = function() {
  }).prototype = core$.DateTime.prototype;
  dart.addTypeTests(core$.DateTime);
  dart.defineLazy(core$.DateTime, {
    /*core$.DateTime.monday*/get monday() {
      return core.DateTime.monday;
    },
    /*core$.DateTime.tuesday*/get tuesday() {
      return core.DateTime.tuesday;
    },
    /*core$.DateTime.wednesday*/get wednesday() {
      return core.DateTime.wednesday;
    },
    /*core$.DateTime.thursday*/get thursday() {
      return core.DateTime.thursday;
    },
    /*core$.DateTime.friday*/get friday() {
      return core.DateTime.friday;
    },
    /*core$.DateTime.saturday*/get saturday() {
      return core.DateTime.saturday;
    },
    /*core$.DateTime.sunday*/get sunday() {
      return core.DateTime.sunday;
    },
    /*core$.DateTime.daysPerWeek*/get daysPerWeek() {
      return core.DateTime.daysPerWeek;
    },
    /*core$.DateTime.january*/get january() {
      return core.DateTime.january;
    },
    /*core$.DateTime.february*/get february() {
      return core.DateTime.february;
    },
    /*core$.DateTime.march*/get march() {
      return core.DateTime.march;
    },
    /*core$.DateTime.april*/get april() {
      return core.DateTime.april;
    },
    /*core$.DateTime.may*/get may() {
      return core.DateTime.may;
    },
    /*core$.DateTime.june*/get june() {
      return core.DateTime.june;
    },
    /*core$.DateTime.july*/get july() {
      return core.DateTime.july;
    },
    /*core$.DateTime.august*/get august() {
      return core.DateTime.august;
    },
    /*core$.DateTime.september*/get september() {
      return core.DateTime.september;
    },
    /*core$.DateTime.october*/get october() {
      return core.DateTime.october;
    },
    /*core$.DateTime.november*/get november() {
      return core.DateTime.november;
    },
    /*core$.DateTime.december*/get december() {
      return core.DateTime.december;
    },
    /*core$.DateTime.monthsPerYear*/get monthsPerYear() {
      return core.DateTime.monthsPerYear;
    }
  });
  core$.double = class double extends core.Object {};
  (core$.double.new = function() {
  }).prototype = core$.double.prototype;
  dart.addTypeTests(core$.double);
  dart.defineLazy(core$.double, {
    /*core$.double.nan*/get nan() {
      return core.double.nan;
    },
    /*core$.double.infinity*/get infinity() {
      return core.double.infinity;
    },
    /*core$.double.negativeInfinity*/get negativeInfinity() {
      return core.double.negativeInfinity;
    },
    /*core$.double.minPositive*/get minPositive() {
      return core.double.minPositive;
    },
    /*core$.double.maxFinite*/get maxFinite() {
      return core.double.maxFinite;
    }
  });
  core$.Duration = class Duration extends core.Object {};
  (core$.Duration.new = function() {
  }).prototype = core$.Duration.prototype;
  dart.addTypeTests(core$.Duration);
  dart.defineLazy(core$.Duration, {
    /*core$.Duration.microsecondsPerMillisecond*/get microsecondsPerMillisecond() {
      return core.Duration.microsecondsPerMillisecond;
    },
    /*core$.Duration.millisecondsPerSecond*/get millisecondsPerSecond() {
      return core.Duration.millisecondsPerSecond;
    },
    /*core$.Duration.secondsPerMinute*/get secondsPerMinute() {
      return core.Duration.secondsPerMinute;
    },
    /*core$.Duration.minutesPerHour*/get minutesPerHour() {
      return core.Duration.minutesPerHour;
    },
    /*core$.Duration.hoursPerDay*/get hoursPerDay() {
      return core.Duration.hoursPerDay;
    },
    /*core$.Duration.microsecondsPerSecond*/get microsecondsPerSecond() {
      return core.Duration.microsecondsPerSecond;
    },
    /*core$.Duration.microsecondsPerMinute*/get microsecondsPerMinute() {
      return core.Duration.microsecondsPerMinute;
    },
    /*core$.Duration.microsecondsPerHour*/get microsecondsPerHour() {
      return core.Duration.microsecondsPerHour;
    },
    /*core$.Duration.microsecondsPerDay*/get microsecondsPerDay() {
      return core.Duration.microsecondsPerDay;
    },
    /*core$.Duration.millisecondsPerMinute*/get millisecondsPerMinute() {
      return core.Duration.millisecondsPerMinute;
    },
    /*core$.Duration.millisecondsPerHour*/get millisecondsPerHour() {
      return core.Duration.millisecondsPerHour;
    },
    /*core$.Duration.millisecondsPerDay*/get millisecondsPerDay() {
      return core.Duration.millisecondsPerDay;
    },
    /*core$.Duration.secondsPerHour*/get secondsPerHour() {
      return core.Duration.secondsPerHour;
    },
    /*core$.Duration.secondsPerDay*/get secondsPerDay() {
      return core.Duration.secondsPerDay;
    },
    /*core$.Duration.minutesPerDay*/get minutesPerDay() {
      return core.Duration.minutesPerDay;
    },
    /*core$.Duration.zero*/get zero() {
      return core.Duration.zero;
    }
  });
  dart.trackLibraries("packages/dart2_constant/core.ddc", {
    "package:dart2_constant/core.dart": core$
  }, '{"version":3,"sourceRoot":"","sources":["core.dart"],"names":[],"mappings":";;;;;;;;;EA4BA;;;MArBe,qBAAM;YAAG,cAAa,OAAO;;MAC7B,sBAAO;YAAG,cAAa,QAAQ;;MAC/B,wBAAS;YAAG,cAAa,UAAU;;MACnC,uBAAQ;YAAG,cAAa,SAAS;;MACjC,qBAAM;YAAG,cAAa,OAAO;;MAC7B,uBAAQ;YAAG,cAAa,SAAS;;MACjC,qBAAM;YAAG,cAAa,OAAO;;MAC7B,0BAAW;YAAG,cAAa,YAAY;;MACvC,sBAAO;YAAG,cAAa,QAAQ;;MAC/B,uBAAQ;YAAG,cAAa,SAAS;;MACjC,oBAAK;YAAG,cAAa,MAAM;;MAC3B,oBAAK;YAAG,cAAa,MAAM;;MAC3B,kBAAG;YAAG,cAAa,IAAI;;MACvB,mBAAI;YAAG,cAAa,KAAK;;MACzB,mBAAI;YAAG,cAAa,KAAK;;MACzB,qBAAM;YAAG,cAAa,OAAO;;MAC7B,wBAAS;YAAG,cAAa,UAAU;;MACnC,sBAAO;YAAG,cAAa,QAAQ;;MAC/B,uBAAQ;YAAG,cAAa,SAAS;;MACjC,uBAAQ;YAAG,cAAa,SAAS;;MACjC,4BAAa;YAAG,cAAa,cAAc;;;;;EAS1D;;;MALe,gBAAG;YAAG,YAAW,IAAI;;MACrB,qBAAQ;YAAG,YAAW,SAAS;;MAC/B,6BAAgB;YAAG,YAAW,iBAAiB;;MAC/C,wBAAW;YAAG,YAAW,YAAY;;MACrC,sBAAS;YAAG,YAAW,UAAU;;;;;EAqBhD;;;MAjBe,yCAA0B;YACnC,cAAa,2BAA2B;;MAC/B,oCAAqB;YAAG,cAAa,sBAAsB;;MAC3D,+BAAgB;YAAG,cAAa,iBAAiB;;MACjD,6BAAc;YAAG,cAAa,eAAe;;MAC7C,0BAAW;YAAG,cAAa,YAAY;;MACvC,oCAAqB;YAAG,cAAa,sBAAsB;;MAC3D,oCAAqB;YAAG,cAAa,sBAAsB;;MAC3D,kCAAmB;YAAG,cAAa,oBAAoB;;MACvD,iCAAkB;YAAG,cAAa,mBAAmB;;MACrD,oCAAqB;YAAG,cAAa,sBAAsB;;MAC3D,kCAAmB;YAAG,cAAa,oBAAoB;;MACvD,iCAAkB;YAAG,cAAa,mBAAmB;;MACrD,6BAAc;YAAG,cAAa,eAAe;;MAC7C,4BAAa;YAAG,cAAa,cAAc;;MAC3C,4BAAa;YAAG,cAAa,cAAc;;MAC3C,mBAAI;YAAG,cAAa,KAAK","file":"core.ddc.js"}');
  // Exports:
  return {
    core: core$
  };
});

//# sourceMappingURL=core.ddc.js.map
