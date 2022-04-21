type Chainable<O = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>;
    get(): O;
};

declare const config: Chainable;

interface Result {
    foo: number;
    name: string;
    bar: {
        value: string;
    };
}

const result: Result = config
    .option("foo", 123)
    .option("name", "type-challenges")
    .option("bar", { value: "Hello World" })
    .get();
