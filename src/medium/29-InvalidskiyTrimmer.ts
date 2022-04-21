import {Equal, Expect} from "@type-challenges/utils";

type TrimmerLeft<T extends string> = T extends ` ${infer INVALID}` ? TrimmerLeft<INVALID> : T

type cases = [
    Expect<Equal<TrimmerLeft<"    Hello ">, "Hello ">>
]
