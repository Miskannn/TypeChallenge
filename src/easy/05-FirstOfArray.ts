import {Equal, Expect} from "@type-challenges/utils";

type First<T extends unknown[]> = T extends [] ? never : T[0];


type cases = [
    Expect<Equal<First<[1,2,3]>, 1>>,
    Expect<Equal<First<[]>, never>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
 */
