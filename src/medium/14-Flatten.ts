import {Equal, Expect} from "@type-challenges/utils";

type Flatten<T> = T extends []
    ? []
    : T extends [infer F, ...infer T]
        ? [...Flatten<F>, ...Flatten<T>]
        : [T];


type cases = [
    Expect<Equal<Flatten<[1,[2],[3,[4]]]>,[1,2,3,4]>>,
    Expect<Equal<Flatten<[]>,[]>>
]
