import {Equal, Expect} from "@type-challenges/utils";

type Push<T extends unknown[], U> = [...T, U]


type cases = [
    Expect<Equal<Push<[1,2,3,4], 5>, [1,2,3,4,5]>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md
 */
