import {Equal, Expect} from "@type-challenges/utils";

interface CapitalizedAlphabet {
    h: "H",
    i: "I"
}

type Capitalizer<L> = L extends `${infer C}${infer T}`
    ? `${C extends keyof CapitalizedAlphabet ? CapitalizedAlphabet[C] : C}${T}`
    : L;

type cases = [
    Expect<Equal<Capitalizer<"hello world">, "Hello world">>,
    Expect<Equal<Capitalizer<"i like">, "I like">>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md
 */
