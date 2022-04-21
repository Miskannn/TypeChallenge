import {Equal, Expect} from "@type-challenges/utils";

type Diff<A, B> = {
    [K in (Exclude<keyof A,keyof B> | Exclude<keyof B,keyof A>)]: (A & B)[K]
}

type obj1 = {
    id: number,
    name: string
}

type obj2 = {
    id: number,
    flag: boolean
}

type cases = [
    Expect<Equal<Diff<obj1, obj2>, {name: string, flag: boolean}>>
]
