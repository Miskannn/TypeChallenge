import {Equal, Expect} from "@type-challenges/utils";

type Chainable<O = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>;
    get(): O;
};

declare const config: Chainable;

const result = config
    .option("foo", 123)
    .option("name", "type-challenges")
    .option("bar", { value: "Hello World" })
    .get();

type testType = {foo: number} & {name: string} & {bar: {value: string}}

type test = Expect<Equal<typeof result, testType>>


/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.md
 */
