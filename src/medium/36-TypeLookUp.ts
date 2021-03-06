import {Equal, Expect} from "@type-challenges/utils";

type LookUp<U, T> = U extends { type: T } ? U : never;


interface Cat {
    type: "cat";
    breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
    type: "dog";
    breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
    color: "brown" | "white" | "black";
}


type cases = [
    Expect<Equal<LookUp<Cat | Dog, "dog">, Dog>>,
    Expect<Equal<LookUp<Cat, "cat">, Cat>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md
 */
