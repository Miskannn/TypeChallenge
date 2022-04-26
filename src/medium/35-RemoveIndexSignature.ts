import {Equal, Expect} from "@type-challenges/utils";


type RemoveIndexSignature<T> = {[A in keyof T as A extends `${infer R}` ? A : never]: T[A]}
    
    
type testType = {
    [key: string]: any,
    someMethod(): void
}


type cases = [
    Expect<Equal<RemoveIndexSignature<{
        [key: string]: any,
        someMethod(): void
    }>, {someMethod(): void}>>
]

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md
 */
