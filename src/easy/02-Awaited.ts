import {Equal, Expect} from "@type-challenges/utils";

type Await<T> = T extends Promise<infer R> ? R : T;



type cases = [
    Expect<Equal<Await<Promise<string>>, string>>,
    Expect<Equal<Await<Promise<number>>, number>>,
    Expect<Equal<Await<Promise<never>>, never>>
]
