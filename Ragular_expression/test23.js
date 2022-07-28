// Match Whitespace

// Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

// Your regex should use the global flag.
// Waiting:Your regex should use the shorthand character \s to match all whitespace characters.
// Waiting:Your regex should find eight spaces in the string Men are from Mars and women are from Venus.
// Waiting:Your regex should find three spaces in the string Space: the final frontier.
// Waiting:Your regex should find no spaces in the string MindYourPersonalSpace

// this is the code 
/*
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
*/

// this is the code ans
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);