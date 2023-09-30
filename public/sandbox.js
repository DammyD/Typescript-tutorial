"use strict";
// Functions
// let greet = () => {
//     console.log('hello, again');
// }
// greet = 'hello'
let greet;
greet = () => {
    console.log('Hello, again');
};
// With the ? the value becomes optional but when a value is passed the ? is not needed
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
