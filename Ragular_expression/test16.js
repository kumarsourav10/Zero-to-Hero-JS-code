// Match Beginning String Patterns

// Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.

// Waiting:Your regex should search for the string Cal with a capital letter.
// Waiting:Your regex should not use any flags.
// Waiting:Your regex should match the string Cal at the beginning of the string.
// Waiting:Your regex should not match the string Cal in the middle of a string.

// this is the code  

/*
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
*/ 

//  this is the code ans .

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);