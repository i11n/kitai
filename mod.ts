//  Copyright 2021 IntegerEleven. All rights reserved. MIT license.

import { getTestSuite, setNamingFunc } from "./_common.ts";

import type { ITestOptions, TTestCtor } from "./interfaces.ts";
import _decorators from "./decorators/mod.ts";

export * from "./types.ts";
export * from "./interfaces.ts";
export const decorators = _decorators;

function KitaiRunner(testSuite: TTestCtor, options: ITestOptions = {}) {
  executeTest(testSuite, options);
}

KitaiRunner.decorators = decorators;
KitaiRunner.setTestNamingFunction = setNamingFunc;

export default KitaiRunner;

export const executeTest = (
  testSuite: TTestCtor,
  options: ITestOptions = {},
) => {
  const runner = getTestSuite(testSuite as TTestCtor);
  runner.execute(options);
};
