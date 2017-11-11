/*
 * This simple program prompts a user to enter their year of birth
 * and it calculates their age.
 */

let yearOfBirth = prompt("Kindly enter your year of birth");

let currentYear = new Date().getFullYear();

const age = currentYear - yearOfBirth;

console.log(`You are ${age} old`);