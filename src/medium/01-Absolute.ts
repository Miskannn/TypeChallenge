import {Equal, Expect} from "@type-challenges/utils";

type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer N}` ? N : `${T}`


type cases = [
    Expect<Equal<Absolute<-1000>, "1000">>,
    Expect<Equal<Absolute<"100">, "100">>,
    Expect<Equal<Absolute<"-100">, "100">>,
]
