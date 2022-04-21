import {Equal, Expect} from "@type-challenges/utils";

type Push<T extends unknown[], U> = [...T, U]


type cases = [
    Expect<Equal<Push<[1,2,3,4], 5>, [1,2,3,4,5]>>
]
