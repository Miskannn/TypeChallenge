import {Equal, Expect} from "@type-challenges/utils";

type PickByType<T, U> = {[P in keyof T as T[P] extends U ? P : never]: T[P]}


type cases = [
    Expect<Equal<PickByType<{id: string, name: string, age: number}, number>, {age: number}>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.md
 */
