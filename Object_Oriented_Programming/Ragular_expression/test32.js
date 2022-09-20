// Use Capture Groups to Search and Replace

// Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.

// Waiting:You should use .replace() to search and replace.
// Waiting:Your regex should change the string one two three to the string three two one
// Waiting:You should not change the last line.
// Waiting:fixRegex should use at least three capture groups.
// Waiting:replaceText should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).

// this is the code
/*
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
*/

// This is the code ans 
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, "three two one");

