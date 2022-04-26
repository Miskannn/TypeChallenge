import {Equal, Expect} from "@type-challenges/utils";

type NotReadonly<T> = {-readonly [P in keyof T]: T[P]}


type cases = [
    Expect<Equal<NotReadonly<{readonly id: string, readonly name: string}>, {id: string, name: string}>>,
    Expect<Equal<NotReadonly<{id: string, name: string}>, {id: string, name: string}>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.md
 */
