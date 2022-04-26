import {Equal, Expect} from "@type-challenges/utils";

type ReplaceAll<String extends string, From extends string, To extends string> =
    From extends ""
        ? String
        : String extends `${infer X}${From}${infer Y}`
            ? `${X}${To}${ReplaceAll<Y, From, To>}`
            : String


type cases = [
    Expect<Equal<ReplaceAll<"types are fun fun fun", "fun", "funny">, "types are funny funny funny">>
]


/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md
 */
