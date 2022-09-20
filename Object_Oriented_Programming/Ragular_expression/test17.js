// Match Ending String Patterns

// Use the anchor character ($) to match the string caboose at the end of the string caboose.

// You should search for caboose with the dollar sign $ anchor in your regex.
// Passed:Your regex should not use any flags.
// Passed:You should match caboose at the end of the string The last car on a train is the caboose

// this is the code 
/*
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
*/

// this is the code ans 
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);