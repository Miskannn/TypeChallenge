import {Equal, Expect} from "@type-challenges/utils";

type Includes<T extends unknown[], U> = U extends T[number] ? true : false;

type cases = [
    Expect<Equal<Includes<[1,2,3], 1>, true>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md
 */
