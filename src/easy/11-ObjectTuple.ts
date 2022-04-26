import {Equal, Expect} from "@type-challenges/utils";

type ObjectTuple<T extends readonly any[]> = {[K in T[number]]: K}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type test = Expect<Equal<ObjectTuple<typeof tuple>, { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}>>

/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
 */
