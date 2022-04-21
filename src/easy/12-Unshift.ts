import {Equal, Expect} from "@type-challenges/utils";

type Unshift<T extends unknown[], U> = [U, ...T];


type cases = [
    Expect<Equal<Unshift<[1,2,3,4], 5>, [5,1,2,3,4]>>
]
