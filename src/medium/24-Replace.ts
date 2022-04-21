import {Equal, Expect} from "@type-challenges/utils";

type Replace<String extends string, From extends string, To extends string> =
    From extends ""
        ? String
        : String extends `${infer X}${From}${infer Y}`
            ? `${X}${To}${Y}`
            : String


type cases = [
    Expect<Equal<Replace<"types are fun", "fun", "funny">, "types are funny">>
]
