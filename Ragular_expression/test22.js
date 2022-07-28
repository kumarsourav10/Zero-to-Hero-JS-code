// Restrict Possible Usernames

// Change the regex userCheck to fit the constraints listed above.

// Your regex should match the string JACK
// Passed:Your regex should not match the string J
// Failed:Your regex should match the string Jo
// Failed:Your regex should match the string Oceans11
// Failed:Your regex should match the string RegexGuru
// Passed:Your regex should not match the string 007
// Passed:Your regex should not match the string 9
// Passed:Your regex should not match the string A1
// Passed:Your regex should not match the string BadUs3rnam3
// Failed:Your regex should match the string Z97
// Passed:Your regex should not match the string c57bT3
// Failed:Your regex should match the string AB1
// Passed:Your regex should not match the string J%4

// this is the code 
/*
 let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
 */

// this is the code ans
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);

