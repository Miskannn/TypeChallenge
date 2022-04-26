import {Equal, Expect} from "@type-challenges/utils";

type MyOmit<T, U extends keyof T> = {[O in keyof T as O extends U ? never : O]: T[O]}



type cases = [
    Expect<Equal<MyOmit<{id: string, name: string}, "name">, Omit<{id: string, name: string}, "name">>>
]


/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
 */
