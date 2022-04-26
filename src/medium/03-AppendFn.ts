import {Equal, Expect} from "@type-challenges/utils";

type Fn = (a: number, b: string) => number


type AppendFunction<T, A> = T extends (...args: infer C) => infer B ? (...args: [...C, A]) => B : never;


type cases = [
    Expect<
        Equal<
            AppendFunction<Fn, boolean>,
            (a: number, b: string, x: boolean) => number
        >>
];

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md
 */
