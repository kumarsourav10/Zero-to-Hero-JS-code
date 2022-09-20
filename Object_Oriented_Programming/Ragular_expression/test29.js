// Positive and Negative Lookahead

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

// Waiting:Your regex should use two positive lookaheads.
// Waiting:Your regex should not match the string astronaut
// Waiting:Your regex should not match the string banan1
// Waiting:Your regex should match the string bana12
// Waiting:Your regex should match the string abc123
// Waiting:Your regex should not match the string 12345
// Waiting:Your regex should match the string 8pass99
// Waiting:Your regex should not match the string 1a2bcde
// Waiting:Your regex should match the string astr1on11aut

// this is the code 
/*
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
*/

// this is the ans code
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);