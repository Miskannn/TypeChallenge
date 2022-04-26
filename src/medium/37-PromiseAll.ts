import {Equal} from "@type-challenges/utils";

declare function PromiseAll<T extends unknown[]>(values: readonly [...T])
    :Promise<{[P in keyof T] : (T[P] extends Promise<infer R> ? R : T[P]) }>

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);

type testType = Promise<[number, 42, string]>

type test = Equal<typeof p, testType>

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md
 */

