import {Equal, Expect} from "@type-challenges/utils";

type TupleLength<T extends unknown[]> = T["length"]


type cases = [
    Expect<Equal<TupleLength<[1,2,3,4,5]>, 5>>,
    Expect<Equal<TupleLength<[]>, 0>>
];
