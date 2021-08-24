//  Copyright 2021 IntegerEleven. All rights reserved. MIT license.

import type {
  ISuiteHookMeta,
  ISuiteHooksCollection,
  ITestCaseHookMeta,
  ITestHookMeta,
  ITestIterationHookMeta,
} from "./interfaces.ts";

/**
 * The signature for a `TestSuite` hook.
 */
export type SuiteHook = (meta: ISuiteHookMeta) => void;
/**
 * The signature for a `Test` hook.
 */
export type TestHook = (meta: ITestHookMeta) => void;
/**
 * The signature for a `TestCase` hook.
 */
export type TestCaseHook = (meta: ITestCaseHookMeta) => void;
/**
 * The signature for a `TestIteration` hook.
 */
export type TestIterationHook = (meta: ITestIterationHookMeta) => void;
/**
 * The signature for a `TestFailure` hook.
 */
export type TestFailureHook = (
  error: Error,
  meta: ITestIterationHookMeta,
) => boolean;

export type TestMethod<T extends unknown[] = []> = (
  args: T,
  meta: ITestIterationHookMeta,
) => void;

export type TUnionIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void ? I
  : never;

export type ITestHooksCollection = Pick<
  ISuiteHooksCollection,
  "test" | "testCase" | "testIteration"
>;
