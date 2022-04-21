type ObjectTuple<T extends readonly []> = {[K in T[number]]: K}

