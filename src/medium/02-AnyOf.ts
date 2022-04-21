import {Equal, Expect} from "@type-challenges/utils";

type AnyOfFalse = 0 | '' | false | [] | { [key: string]: never };

type AnyOf<T extends unknown[]> = T[number] extends AnyOfFalse ? false : true;


type cases = [
    Expect<Equal<AnyOf<[0,'',false]>, false>>,
    Expect<Equal<AnyOf<[0,'j',false]>, true>>
]
