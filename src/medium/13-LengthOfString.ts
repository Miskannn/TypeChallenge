import {Equal, Expect} from "@type-challenges/utils";

type LengthOfString<S extends string, A extends any[] = []> = S extends `${infer D}${infer R}`
    ? LengthOfString<R, [...A, D]>
    : A['length']


type cases = [
    Expect<Equal<LengthOfString<"any">, 3>>,
    Expect<Equal<LengthOfString<"">, 0>>
]
