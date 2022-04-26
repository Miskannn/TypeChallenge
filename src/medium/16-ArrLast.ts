import {Equal, Expect} from "@type-challenges/utils";

type Last<L extends unknown[]>=L extends [...infer O, infer H] ? H : never;


type cases = [
    Expect<Equal<Last<[1,2,3,4]>, 4>>,
    Expect<Equal<Last<[]>, never>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md
 */
