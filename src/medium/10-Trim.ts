import {Equal, Expect} from "@type-challenges/utils";

type Space = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${Space}${infer R}` | `${infer R}${Space}` ? Trim<R> : S;

type cases = [
    Expect<Equal<Trim<'  any  '>, 'any'>>
]
