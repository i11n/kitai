//  Copyright 2021 IntegerEleven. All rights reserved. MIT license.

import { getTestSuite } from "../_common.ts";
import type { SuiteHook } from "../types.ts";
import type { TTestCtor } from "../interfaces.ts";

export function TestSuiteStart(hook: SuiteHook) {
  return (target: TTestCtor) => {
    const runner = getTestSuite(target);

    runner.addTestSuiteHook("start", hook);
  };
}
