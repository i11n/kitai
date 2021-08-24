//  Copyright 2021 IntegerEleven. All rights reserved. MIT license.

import { getTestSuite } from "../_common.ts";
import type { IAnonymousObject, TTestCtor } from "../interfaces.ts";

export function TestIterations(count: number) {
  return (
    target: IAnonymousObject,
    propertyKey?: string | symbol,
  ) => {
    const runner = getTestSuite(target.constructor as TTestCtor);
    const test = runner.test(String(propertyKey));
    test.setIteration(count);
  };
}
