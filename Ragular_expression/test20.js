// Match All Numbers

// Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

// Your regex should use the shortcut character to match digit characters
// Waiting:Your regex should use the global flag.
// Waiting:Your regex should find 1 digit in the string 9.
// Waiting:Your regex should find 2 digits in the string Catch 22.
// Waiting:Your regex should find 3 digits in the string 101 Dalmatians.
// Waiting:Your regex should find no digits in the string One, Two, Three.
// Waiting:Your regex should find 2 digits in the string 21 Jump Street.
// Waiting:Your regex should find 4 digits in the string 2001: A Space Odyssey.

// this is the code  
/*
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
*/

// this is the code ans
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
