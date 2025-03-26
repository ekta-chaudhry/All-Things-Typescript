interface User {
    name: string;
    age: number;
    address?: {
        city: string;
        street: string;
    }
}

const user: User = {
    name: 'John',
    age: 30
}

function isLegal(user: User): boolean {
    return user.age >= 18;
}

isLegal(user);