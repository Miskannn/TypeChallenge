import {Equal, Expect} from "@type-challenges/utils";

type MyExclude<T,U> = T extends U ? never : T;


type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>
]
