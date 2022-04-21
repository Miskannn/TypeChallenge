import {Equal, Expect} from "@type-challenges/utils";

type DeepReadonly<Object> = {
    readonly [P in keyof Object]: Object[P] extends Record<string, unknown>
        ? DeepReadonly<Object[P]>
        : Object[P];
};

type cases = [
    Expect<Equal<DeepReadonly<{id: {noId: number }}>, {readonly id: {readonly noId: number}}>>
]
