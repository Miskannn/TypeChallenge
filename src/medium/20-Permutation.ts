import {Equal, Expect} from "@type-challenges/utils";

type Permutation<T, S = T> = [T] extends [never]
    ? []
    : S extends infer U
        ? [U, ...Permutation<Exclude<T, U>>]
        : []

type cases =[
    Expect<Equal<Permutation<"a">, ["a"]>>,
    Expect<Equal<Permutation<"a" | "b">, ["a", "b"] | ["b", "a"]>>,
    Expect<Equal<Permutation<"A" | "B" | "C">, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md
 */
