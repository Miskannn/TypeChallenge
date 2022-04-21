import {Equal, Expect} from "@type-challenges/utils";

type DropChar<S extends string, C extends string> = S extends `${infer T}${C}${infer R}` ? `${T}${DropChar<R,C>}` : S


type cases = [
    Expect<Equal<DropChar<"butterfly", "t">, "buerfly">>,
    Expect<Equal<DropChar<"MiGht", "t">, "MiGh">>
]
