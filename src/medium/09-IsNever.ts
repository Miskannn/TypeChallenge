import {Equal, Expect} from "@type-challenges/utils";

type isNever<T> = [T] extends [never] ? true : false;


type cases = [
    Expect<Equal<isNever<never>, true>>,
    Expect<Equal<isNever<[]>, false>>,
    Expect<Equal<isNever<{}>, false>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md
 */
