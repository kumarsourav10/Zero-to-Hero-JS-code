// Match Numbers and Letters of the Alphabet

// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

// Your regex myRegex should match 17 items.
// Waiting:Your regex myRegex should use the global flag.
// Waiting:Your regex myRegex should use the case insensitive flag.

// this is the code
/*
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

*/

// this is the code ans
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line