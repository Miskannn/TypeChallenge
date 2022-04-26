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

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.md
 */
