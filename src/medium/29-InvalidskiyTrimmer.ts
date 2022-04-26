import {Equal, Expect} from "@type-challenges/utils";

type TrimmerLeft<T extends string> = T extends ` ${infer INVALID}` ? TrimmerLeft<INVALID> : T

type cases = [
    Expect<Equal<TrimmerLeft<"    Hello ">, "Hello ">>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md
 */
