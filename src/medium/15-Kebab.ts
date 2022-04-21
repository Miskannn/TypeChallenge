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
