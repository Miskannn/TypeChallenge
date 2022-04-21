import {Equal, Expect} from "@type-challenges/utils";

type AppendToObject<T, K extends string, V> = {
    [P in keyof T | K]: P extends keyof T ? T[P] : V;
}

type Test = { id: '1' }

type cases = [
    Expect<Equal<AppendToObject<Test, 'value', 4>, {id: '1', value: 4}>>,
    Expect<Equal<AppendToObject<Test, 'id', "1">, {id: '1'}>>
]
