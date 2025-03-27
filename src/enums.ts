//Numeric enums
enum Test {
    A, //auto-incremented values, starting from 0
    B,
    C
}

console.log(Test.A); //0

enum Test2 {
    A = 10, //auto-incremented values, starting from 10
    B,
    C
}

console.log(Test2.B); //11

//String enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Direction.Up); //UP
