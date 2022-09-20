// Specify Exact Number of Matches

// Change the regex timRegex to match the word Timber only when it has four letter m's.

// Waiting:Your regex should use curly brackets.
// Waiting:Your regex should not match the string Timber
// Waiting:Your regex should not match the string Timmber
// Waiting:Your regex should not match the string Timmmber
// Waiting:Your regex should match the string Timmmmber
// Waiting:Your regex should not match the string Timber with 30 m's in it.

// this is the code 

/*
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
*/

// this is the ans code
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);