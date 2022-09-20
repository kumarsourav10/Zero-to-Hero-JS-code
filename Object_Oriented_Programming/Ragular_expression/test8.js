// Match Single Character with Multiple Possibilities

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

// Note: Be sure to match both upper- and lowercase vowels.

// Waiting:You should find all 25 vowels.
// Waiting:Your regex vowelRegex should use a character class.
// Waiting:Your regex vowelRegex should use the global flag.
// Waiting:Your regex vowelRegex should use the case insensitive flag.
// Waiting:Your regex should not match any consonants.

// this is the code
/*
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
*/

// this is the code ans
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
