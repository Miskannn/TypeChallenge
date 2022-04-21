import {Equal, Expect} from "@type-challenges/utils";

type Includes<T extends unknown[], U> = U extends T[number] ? true : false;

type cases = [
    Expect<Equal<Includes<[1,2,3], 1>, true>>
]
