import {Equal, Expect} from "@type-challenges/utils";

type LyuliaKebab<S> = S extends `${infer C}${infer T}`
    ? T extends Uncapitalize<T>
        ? `${Uncapitalize<C>}${LyuliaKebab<T>}`
        : `${Uncapitalize<C>}-${LyuliaKebab<T>}`
    : S;


type cases = [
    Expect<Equal<LyuliaKebab<"ChiLi">, "chi-li">>,
    Expect<Equal<LyuliaKebab<"">, "">>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md
 */
