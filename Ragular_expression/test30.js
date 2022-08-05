// Check For Mixed Grouping of Characters


// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

// Waiting:Your regex myRegex should return true for the string Franklin D. Roosevelt
// Waiting:Your regex myRegex should return true for the string Eleanor Roosevelt
// Waiting:Your regex myRegex should return false for the string Franklin Rosevelt
// Waiting:Your regex myRegex should return false for the string Frank Roosevelt
// Waiting:You should use .test() to test the regex.
// Waiting:Your result should return true.

// this is the code 


/*
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
*/

// this is the code ans.
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

