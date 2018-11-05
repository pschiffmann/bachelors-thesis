// Copyright (c) 2018, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'operating_system.dart';
import 'runtime.dart';

/// The platform on which a test suite is loaded.
class SuitePlatform {
  /// The runtime that hosts the suite.
  final Runtime runtime;

  /// The operating system on which the suite is running.
  ///
  /// This will always be [OperatingSystem.none] if `runtime.isBrowser` is
  /// true.
  final OperatingSystem os;

  /// Whether we're running on Google-internal infrastructure.
  final bool inGoogle;

  /// Creates a new platform with the given [runtime] and [os], which defaults
  /// to [OperatingSystem.none].
  ///
  /// Throws an [ArgumentError] if [runtime] is a browser and [os] is not
  /// `null` or [OperatingSystem.none].
  SuitePlatform(this.runtime, {OperatingSystem os, this.inGoogle = false})
      : os = os ?? OperatingSystem.none {
    if (runtime.isBrowser && this.os != OperatingSystem.none) {
      throw ArgumentError('No OS should be passed for runtime "$runtime".');
    }
  }

  /// Converts a JSON-safe representation generated by [serialize] back into a
  /// [SuitePlatform].
  factory SuitePlatform.deserialize(Object serialized) {
    var map = serialized as Map;
    return SuitePlatform(Runtime.deserialize(map['runtime']),
        os: OperatingSystem.find(map['os'] as String),
        inGoogle: map['inGoogle'] as bool);
  }

  /// Converts [this] into a JSON-safe object that can be converted back to a
  /// [SuitePlatform] using [new SuitePlatform.deserialize].
  Object serialize() => {
        'runtime': runtime.serialize(),
        'os': os.identifier,
        'inGoogle': inGoogle
      };
}
