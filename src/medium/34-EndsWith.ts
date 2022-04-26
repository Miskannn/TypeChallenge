import {Equal, Expect} from "@type-challenges/utils";

type EndsWith<T extends string, U extends string> =
    T extends `${infer H}${U}`
        ? true
        : false

type cases = [
    Expect<Equal<EndsWith<"hello", 'o'>,true>>,
    Expect<Equal<EndsWith<"hello", 'llo'>,true>>,
    Expect<Equal<EndsWith<"hello", 'a'>,false>>,
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md
 */
