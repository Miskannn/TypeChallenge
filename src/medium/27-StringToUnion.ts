import {Equal, Expect} from "@type-challenges/utils";

type StringToUnion<T extends string, U extends unknown[] = []> =  T extends `${infer F}${infer R}`
    ? StringToUnion<R, [F, ...U]>
    : U[number]


type cases = [
    Expect<Equal<StringToUnion<"abc">, "a" | "b" | "c">>
];

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md
 */
