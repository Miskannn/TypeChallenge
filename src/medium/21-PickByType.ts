import {Equal, Expect} from "@type-challenges/utils";

type PickByType<T, U> = {[P in keyof T as T[P] extends U ? P : never]: T[P]}


type cases = [
    Expect<Equal<PickByType<{id: string, name: string, age: number}, number>, {age: number}>>
]
