import {Equal, Expect} from "@type-challenges/utils";


type CamelCase<S> = S extends `${infer H}-${infer T}`
    ? T extends Capitalize<T>
        ? `${H}-${CamelCase<T>}`
        : `${H}${CamelCase<Capitalize<T>>}`
    : S;


type cases = [
    Expect<Equal<CamelCase<"foo-bar-baz">, "fooBarBaz">>
]


/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00114-hard-camelcase/README.md
 */
