//  Copyright 2021 IntegerEleven. All rights reserved. MIT license.

import { getTestSuite } from "../_common.ts";
import type { IAnonymousObject, TTestCtor } from "../interfaces.ts";
import type { TestIterationHook } from "../types.ts";

export function TestIterationStart(hook: TestIterationHook) {
  return (
    target: TTestCtor | IAnonymousObject,
    propertyKey?: string | symbol,
  ) => {
    if (typeof target === "function") {
      const runner = getTestSuite(target as TTestCtor);

      runner.addTestIterationHook("start", hook);
    } else {
      const runner = getTestSuite(target.constructor as TTestCtor);
      const test = runner.test(String(propertyKey));
      test.addTestIterationHook("start", hook);
    }
  };
}
