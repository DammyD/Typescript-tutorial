// Object and Arrays
// Arrays
let names = ['blessing', 'lola', 'yoshi'];
names.push('mairo');
// names.push(3);
// names[0] = 3; 
// when we declare new array the type we declared initially cannot be changed later on
// In this case if I am to add a number to this array of names it won't work

let numbers = [10, 20, 30, 40];
numbers.push(50);
// numbers.push('lola');
// numbers[1] = 'lola';

// To have a mixed array we then have to initialize it first
// With this you can change position and add multiple types initially declared
let mixed = ['lola', 2, 4, 'dami'];
mixed.push('rita');
mixed.push(6);
mixed[2] = 'sarah';

// objects
let dev = {
    name: 'blessing',
    belt: 'black',
    age: 25
}

dev = {
    name: 'lola',
    belt: 'white',
    age: 18,
    // skills: []
    // The skills added here will give an error because skills wasn't intitialized in the structure
    // The values can chnage for the objecct but the keys remains the same
}