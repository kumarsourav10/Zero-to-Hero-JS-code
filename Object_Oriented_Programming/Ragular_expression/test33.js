// Remove Whitespace from Start and End

// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

// Failed:result should be equal to the string Hello, World!
// Passed:Your solution should not use the String.prototype.trim() method.
// Passed:The result variable should not directly be set to a string
// Failed:The value of the hello variable should not be changed.

// This is the code
/*
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
*/

// this is the code ans

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
