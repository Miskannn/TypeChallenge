import {Equal, Expect} from "@type-challenges/utils";

type Pop<T extends unknown[]> = T extends [...infer G, unknown] ? G : never;


type cases = [
    Expect<Equal<Pop<[1,2,3,4]>, [1,2,3]>>,
    Expect<Equal<Pop<[]>, never>>
]
