//  Copyright 2021 IntegerEleven. All rights reserved. MIT license.

import { getTestSuite } from "../_common.ts";
import type { TestFailureHook } from "../types.ts";
import type { TTestCtor } from "../interfaces.ts";

export function TestSuiteFail(hook: TestFailureHook) {
  return (target: TTestCtor) => {
    const runner = getTestSuite(target);

    runner.addTestFailHook(hook);
  };
}
