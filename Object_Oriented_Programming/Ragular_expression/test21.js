// Match All Non-Numbers

// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

// Waiting:Your regex should use the shortcut character to match non-digit characters
// Waiting:Your regex should use the global flag.
// Waiting:Your regex should find no non-digits in the string 9.
// Waiting:Your regex should find 6 non-digits in the string Catch 22.
// Waiting:Your regex should find 11 non-digits in the string 101 Dalmatians.
// Waiting:Your regex should find 15 non-digits in the string One, Two, Three.
// Waiting:Your regex should find 12 non-digits in the string 21 Jump Street.
// Waiting:Your regex should find 17 non-digits in the string 2001: A Space Odyssey.


// this is the code
/**
 let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
 */

// This is the code ans
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g // Change this line
let result = movieName.match(noNumRegex).length;

