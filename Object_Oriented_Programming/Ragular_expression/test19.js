// Match Everything But Letters and Numbers

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

// Your regex should use the global flag.
// Waiting:Your regex should find 6 non-alphanumeric characters in the string The five boxing wizards jump quickly..
// Waiting:Your regex should use the shorthand character to match characters which are non-alphanumeric.
// Waiting:Your regex should find 8 non-alphanumeric characters in the string Pack my box with five dozen liquor jugs.
// Waiting:Your regex should find 6 non-alphanumeric characters in the string How vexingly quick daft zebras jump!
// Waiting:Your regex should find 12 non-alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.

// this it the code 
/*
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
*/

// this is the code ans. 

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;