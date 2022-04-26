import {Equal, Expect} from "@type-challenges/utils";

type IsUnion<F,S = F> = F extends S ? [S] extends [F] ? false : true : never;


type cases = [
    Expect<Equal<IsUnion<string | number>, true>>,
    Expect<Equal<IsUnion<string>, false>>,
    Expect<Equal<IsUnion<[string | number]>, false>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md
 */
