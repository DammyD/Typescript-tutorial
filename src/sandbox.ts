// Functions
// let greet = () => {
//     console.log('hello, again');
// }

// greet = 'hello'

let greet: Function;

greet = () => {
    console.log('Hello, again');
}
// With the ? the value becomes optional but when a value is passed the ? is not needed
const add = (a: number, b: number, c: number | string = 10) => {
console.log(a + b);
console.log(c);
}
add(5, 10, '20');

const minus = (a: number, b: number) => {
return a + b;
}

let result = minus(10, 7);