interface Person {
    name: string;
    age: number;
    email: string;
    password: string;
}

type Id = Pick<Person, "name" | "email">;

const userId: Id = {
    name: 'John',
    email: "johndances@gmail.com"
}

console.log(typeof userId);