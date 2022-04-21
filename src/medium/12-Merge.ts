import {Equal, Expect} from "@type-challenges/utils";

type Merge<F, S> = {
    [P in keyof F | keyof S]: P extends keyof S
        ? S[P]
        : P extends keyof F
            ? F[P]
            : never;
};


type test1 = {
    id: number;
    age: string;
}
type test2 = {
    age: number;
    bool: true
}

type cases = [
    Expect<Equal<Merge<test1, test2>, {id: number, age: number,bool: true}>>
]
