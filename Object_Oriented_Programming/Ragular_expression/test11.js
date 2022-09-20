// Match Single Characters Not Specified

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

// Waiting:Your regex myRegex should match 9 items.
// Waiting:Your regex myRegex should use the global flag.
// Waiting:Your regex myRegex should use the case insensitive flag.

// this is the code
/*
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
*/

// this is the code ans
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line