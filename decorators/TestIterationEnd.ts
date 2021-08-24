//  Copyright 2021 IntegerEleven. All rights reserved. MIT license.

import { getTestSuite } from "../_common.ts";
import type { TestIterationHook } from "../types.ts";
import type { IAnonymousObject, TTestCtor } from "../interfaces.ts";

export function TestIterationEnd(hook: TestIterationHook) {
  return (
    target: TTestCtor | IAnonymousObject,
    propertyKey?: string | symbol,
  ) => {
    if (typeof target === "function") {
      const runner = getTestSuite(target as TTestCtor);

      runner.addTestIterationHook("end", hook);
    } else {
      const runner = getTestSuite(
        (target as IAnonymousObject).constructor as TTestCtor,
      );
      const test = runner.test(String(propertyKey));

      test.addTestIterationHook("end", hook);
    }
  };
}
