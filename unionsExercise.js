"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore;
highScore = 5;
highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
const stuff = ['y', 'h', 'h'];
// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors = [{ r: 5, g: 10, b: 15 }, { h: 5, s: 10, l: 15 }];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(names) {
    if (typeof names === "string") {
        console.log(`Hello ${names}`);
    }
    else {
        for (let name of names) {
            console.log(`Hello ${name}`);
        }
    }
}
