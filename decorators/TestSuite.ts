//  Copyright 2021 IntegerEleven. All rights reserved. MIT license.

import { getTestSuite } from "../_common.ts";
import type { TTestCtor } from "../interfaces.ts";

export function TestSuite(name?: string) {
  return (target: TTestCtor) => {
    const runner = getTestSuite(target);

    if (name) {
      runner.displayName = name;
    }
  };
}
