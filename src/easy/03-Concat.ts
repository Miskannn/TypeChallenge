import {Equal, Expect} from "@type-challenges/utils";

type Concat<T extends unknown[],R extends unknown[]> = [...T,...R];


type cases = [
    Expect<Equal<Concat<[], []>, []>>,
    Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md
 */
