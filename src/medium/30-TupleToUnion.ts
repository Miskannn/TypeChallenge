import {Equal, Expect} from "@type-challenges/utils";

type TupleToUnion<T extends unknown[]> = T[number]


type cases = [
    Expect<Equal<TupleToUnion<[1,2,3]>, 1 | 2 | 3>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md
 */
