// Match All Letters and Numbers

// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

// Waiting:Your regex should use the global flag.
// Waiting:Your regex should use the shorthand character \w to match all characters which are alphanumeric.
// Waiting:Your regex should find 31 alphanumeric characters in the string The five boxing wizards jump quickly.
// Waiting:Your regex should find 32 alphanumeric characters in the string Pack my box with five dozen liquor jugs.
// Waiting:Your regex should find 30 alphanumeric characters in the string How vexingly quick daft zebras jump!
// // Waiting:Your regex should find 36 alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.

// this is the code 
/*
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
 */

// this is the code ans 
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;