import {Equal, Expect} from "@type-challenges/utils";

type Last<L extends unknown[]>=L extends [...infer O, infer H] ? H : never;


type cases = [
    Expect<Equal<Last<[1,2,3,4]>, 4>>,
    Expect<Equal<Last<[]>, never>>
]
