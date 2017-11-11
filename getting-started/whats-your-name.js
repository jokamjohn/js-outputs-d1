/**
 * This Js program runs in a console and I prompts a user to enter their name
 * and then prints out the the number of characters that make up their name.
 */

//A user is prompted to enter their name.
let name = prompt("Please enter your name");

console.log(`You name is ${name}`);

//Finding out how long the name is.
const characters = name.length;

//Constructing the final output to the console.
const output = `Your name has ${characters} characters`;

console.log(output);

