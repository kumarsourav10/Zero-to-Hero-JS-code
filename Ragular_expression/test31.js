// Reuse Patterns Using Capture Groups

// Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

// Waiting:Your regex should use the shorthand character class for digits.
// Waiting:Your regex should reuse a capture group twice.
// Waiting:Your regex should match the string 42 42 42.
// Waiting:Your regex should match the string 100 100 100.
// Waiting:Your regex should not match the string 42 42 42 42.
// Waiting:Your regex should not match the string 42 42.
// Waiting:Your regex should not match the string 101 102 103.
// Waiting:Your regex should not match the string 1 2 3.
// Waiting:Your regex should match the string 10 10 10.

// This is the code 
/*
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);

*/

// This is the code ans.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

