//  Copyright 2021 IntegerEleven. All rights reserved. MIT license.

import { getTestSuite } from "../_common.ts";
import type { TestCaseHook } from "../types.ts";
import type { IAnonymousObject, TTestCtor } from "../interfaces.ts";

export function TestCaseEnd(hook: TestCaseHook) {
  return (
    target: TTestCtor | IAnonymousObject,
    propertyKey?: string | symbol,
  ) => {
    if (typeof target === "function") {
      const runner = getTestSuite(target as TTestCtor);

      runner.addTestCaseHook("end", hook);
    } else {
      const runner = getTestSuite(target.constructor as TTestCtor);
      const test = runner.test(String(propertyKey));
      test.addTestCaseHook("end", hook);
    }
  };
}
