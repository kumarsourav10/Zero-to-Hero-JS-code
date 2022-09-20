// Match Non-Whitespace Characters

// Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

// Waiting:Your regex should use the global flag.
// Waiting:Your regex should use the shorthand character \S to match all non-whitespace characters.
// Waiting:Your regex should find 35 non-spaces in the string Men are from Mars and women are from Venus.
// Waiting:Your regex should find 23 non-spaces in the string Space: the final frontier.
// Waiting:Your regex should find 21 non-spaces in the string MindYourPersonalSpace

// this is the code

/**
 let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
 */

// this is the code ans
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);