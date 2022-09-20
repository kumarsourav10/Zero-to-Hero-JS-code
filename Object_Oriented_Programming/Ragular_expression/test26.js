// Specify Only the Lower Number of Matches

// Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.

// Your regex should use curly brackets.
// Passed:Your regex should not match the string Hazzah
// Passed:Your regex should not match the string Hazzzah
// Failed:Your regex should match the string Hazzzzah
// Failed:Your regex should match the string Hazzzzzah
// Failed:Your regex should match the string Hazzzzzzah
// Failed:Your regex should match the string Hazzah with 30 z's in it.

// this is the code 
/*
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
*/

// this is the code ans 
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);