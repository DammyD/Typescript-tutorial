// The main fundamental between ts and js is that ts uses strict types and js does not.
// if you define a variable like this
var character = 'mairo';
// it will aways be a string and it's type cannot change later and same is true for any type other type like number, boolean e.t.c
// Variables a declared the same exactly as js
// For decimal numbers there are no two seperate types like in other programming languages instead we have a number type which cover for both float and numbers types. In ts they are all numbers
// This number cannot be assigned another type
var age = 30;
var isBlackBelt = false;
// character = 20;
character = 'luigi';
// This means in ts you can change the vallue but not the types which is applicable to other types.
// Strings can be specified using single or double quotes like in Js
// age ='Blessing';
age = 45;
// isBlackBelt = 'yes';
isBlackBelt = true;
// We don't have to specifically say the type for the character is a string because
// ts uses what's known as inference. It infers the type based of the value assigned
// We can explicitly define what type of variable will be.
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// console.log(circ('hello'));
// This logs out NAN. To avoid this we need to define the type we want the output to be
// TS allows us to type check during deployment which leads to cleaner code and less errors in the browser
