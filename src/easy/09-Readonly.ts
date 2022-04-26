import {Equal, Expect} from "@type-challenges/utils";

type MyReadonly<T> = { readonly [K in keyof T]: T[K] };


type cases = [
    Expect<Equal<MyReadonly<{id: number}>, {readonly id: number}>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
 */
