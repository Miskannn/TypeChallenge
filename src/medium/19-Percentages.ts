import {Equal, Expect} from "@type-challenges/utils";

type ParseSymbol<T extends string>= T extends `${infer S}${any}`
    ? S extends "+" | "-"
        ? S
        : ""
    : "";

type ParseProcent<T extends string>= T extends `${infer S}${any}%`
    ? "%"
    : ""

type ParseNumber<T extends string> = T extends `${ParseSymbol<T>}${infer N}${ParseProcent<T>}`
   ? N
   : ""

type Construct<T extends string>=[
    ParseSymbol<T>,
    ParseNumber<T>,
    ParseProcent<T>
]


type cases = [
    Expect<Equal<Construct<"+85%">, ["+", "85", "%"]>>,
    Expect<Equal<Construct<"-85">, ["-", "85", ""]>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/01978-medium-percentage-parser/README.md
 */
