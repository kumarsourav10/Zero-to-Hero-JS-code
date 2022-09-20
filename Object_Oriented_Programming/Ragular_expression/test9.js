// Match Letters of the Alphabet

// Match all the letters in the string quoteSample.

// Note: Be sure to match both uppercase and lowercase letters.

// Waiting:Your regex alphabetRegex should match 35 items.
// Waiting:Your regex alphabetRegex should use the global flag.
// Waiting:Your regex alphabetRegex should use the case insensitive flag.

// this is the code

/*
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
*/

// this is the code ans
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi
; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line