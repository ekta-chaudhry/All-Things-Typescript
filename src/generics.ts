function identity<T>(value: T): T {
    return value;
}

let num = identity(42);        // Type: number
let str = identity("TS");      // Type: string
let arr = identity([1, 2, 3]); // Type: number[]

//Works with custom types too
type User = { id: number; name: string };
let user = identity<User>({ id: 1, name: "Alice" });

console.log(typeof num);  // 42
console.log(typeof str);  // "TS"
console.log(typeof arr);  // [1, 2, 3]
console.log(typeof user); // { id: 1, name: "Alice" }
