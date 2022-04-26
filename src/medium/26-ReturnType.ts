import {Equal, Expect} from "@type-challenges/utils";

type CustomReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

const testFn = (v: boolean) => {
    if (v)
        return "1"
    else
        return "2"
}


type cases = [
    Expect<Equal<CustomReturnType<typeof testFn>, "1" | "2">>
]


/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md
 */
