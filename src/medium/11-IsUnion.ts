import {Equal, Expect} from "@type-challenges/utils";

type IsUnion<F,S = F> = F extends S ? [S] extends [F] ? false : true : never;


type cases = [
    Expect<Equal<IsUnion<string | number>, true>>,
    Expect<Equal<IsUnion<string>, false>>,
    Expect<Equal<IsUnion<[string | number]>, false>>
]
