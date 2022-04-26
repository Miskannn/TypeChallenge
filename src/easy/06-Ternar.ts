import {Equal, Expect} from "@type-challenges/utils";

type Ternar<C extends boolean,T,F> = C extends true ? T : F;


type cases = [
    Expect<Equal<Ternar<true, "a", "b">, "a">>,
    Expect<Equal<Ternar<false, "a", "b">, "b">>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md
 */

