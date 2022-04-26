import {Equal, Expect, NotEqual} from "@type-challenges/utils";


type UnionReadonly<T, K extends keyof T = keyof T> = { readonly [P in K] :T[P]} & {[P in keyof T as P extends K ? never:P]:T[P]}


interface Todo {
    title: string
    description: string
    completed: boolean
}

const todo: UnionReadonly<Todo, "title" | "description"> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

// todo.title = "foo" //error
// todo.description = "bar" //error
// todo.completed = false


type cases = [
    Expect<NotEqual<UnionReadonly<Todo, "title" | "description">, Readonly<Todo>>>,
    Expect<Equal<UnionReadonly<Todo, "title" | "description">['title'], Readonly<Todo['title']> >>,
    Expect<Equal<UnionReadonly<Todo, "title" | "description">['description'], Readonly<Todo['description']> >>,
]


/**
 * Link to challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md
 */
