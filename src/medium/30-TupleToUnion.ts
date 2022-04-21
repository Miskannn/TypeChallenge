import {Equal, Expect} from "@type-challenges/utils";

type TupleToUnion<T extends unknown[]> = T[number]


type cases = [
    Expect<Equal<TupleToUnion<[1,2,3]>, 1 | 2 | 3>>
]
