// Check for All or None

// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

// Your regex should use the optional symbol, ?.
// Waiting:Your regex should match the string favorite
// Waiting:Your regex should match the string favourite
// Waiting:Your regex should not match the string fav

// this is the code 
/*
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
*/

// This is the ans code
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);