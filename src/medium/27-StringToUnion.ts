import {Equal, Expect} from "@type-challenges/utils";

type StringToUnion<T extends string, U extends unknown[] = []> =  T extends `${infer F}${infer R}`
    ? StringToUnion<R, [F, ...U]>
    : U[number]


type cases = [
    Expect<Equal<StringToUnion<"abc">, "a" | "b" | "c">>
];
