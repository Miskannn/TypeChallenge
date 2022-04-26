import {Equal, Expect} from "@type-challenges/utils";

type LengthOfString<S extends string, A extends any[] = []> = S extends `${infer D}${infer R}`
    ? LengthOfString<R, [...A, D]>
    : A['length']


type cases = [
    Expect<Equal<LengthOfString<"any">, 3>>,
    Expect<Equal<LengthOfString<"">, 0>>
]


/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md
 */
