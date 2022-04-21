import {Equal, Expect} from "@type-challenges/utils";

type Trim<T extends string> =
    T extends ` ${infer U}`
        ? Trim<U>
        : T extends `${infer G} `
          ? Trim<G>
          : T

type cases = [
    Expect<Equal<Trim<"   hello   ">, "hello">>,
    Expect<Equal<Trim<"hello   ">, "hello">>,
    Expect<Equal<Trim<"   hello">, "hello">>
]
