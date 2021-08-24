//  Copyright 2021 IntegerEleven. All rights reserved. MIT license.

import { getTestSuite } from "../_common.ts";
import type { TestFailureHook } from "../types.ts";
import type { IAnonymousObject, TTestCtor } from "../interfaces.ts";

export function TestFail(hook: TestFailureHook) {
  return (
    target: TTestCtor | IAnonymousObject,
    propertyKey?: string | symbol,
  ) => {
    const runner = getTestSuite(
      (target as IAnonymousObject).constructor as TTestCtor,
    );
    const test = runner.test(String(propertyKey));

    test.addTestFailHook(hook);
  };
}
