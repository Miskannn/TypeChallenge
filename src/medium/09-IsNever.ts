import {Equal, Expect} from "@type-challenges/utils";

type isNever<T> = [T] extends [never] ? true : false;


type cases = [
    Expect<Equal<isNever<never>, true>>,
    Expect<Equal<isNever<[]>, false>>,
    Expect<Equal<isNever<{}>, false>>
]
