// Specify Upper and Lower Number of Matches


// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

// Waiting:Your regex should use curly brackets.
// Waiting:Your regex should not match the string Ohh no
// Waiting:Your regex should match the string Ohhh no
// Waiting:Your regex should match the string Ohhhh no
// Waiting:Your regex should match the string Ohhhhh no
// Waiting:Your regex should match the string Ohhhhhh no
// Waiting:Your regex should not match the string Ohhhhhhh no

// this is the code 
/*
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
*/

// this is the code ans. 
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
