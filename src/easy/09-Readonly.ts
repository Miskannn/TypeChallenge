import {Equal, Expect} from "@type-challenges/utils";

type MyReadonly<T> = { readonly [K in keyof T]: T[K] };


type cases = [
    Expect<Equal<MyReadonly<{id: number}>, {readonly id: number}>>
]
