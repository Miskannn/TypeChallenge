import {Equal, Expect} from "@type-challenges/utils";

type HelloWorld = string;


type test = Expect<Equal<HelloWorld, string>>
