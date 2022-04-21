import {Equal, Expect} from "@type-challenges/utils";

type Pop<T extends unknown[]> = T extends [...infer G, unknown] ? G : never;

type Decrease<T extends number, A extends any[] = []> = A['length'] extends T
    ? Pop<A>['length']
    : Decrease<T, [...A, 0]>


type cases = [
    Expect<Equal<Decrease<1>, 0>>,
]
