interface First {
    name: string;
    age: number;
    email: string;
    password: string;
}

type Second = Pick<First, 'name' | 'email'>;

type SecondOptional = Partial<Second>;

const obj: SecondOptional = {
    name: "John"
}

console.log(typeof obj);