// Find More Than the First Match


// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

// Note
// You can have multiple flags on your regex like /search/gi

// Waiting:Your regex starRegex should use the global flag g
// Waiting:Your regex starRegex should use the case insensitive flag i
// Waiting:Your match should match both occurrences of the word Twinkle
// Waiting:Your match result should have two elements in it.

//  this is the code
/*
    let twinkleStar = "Twinkle, twinkle, little star";
    let starRegex = /change/; // Change this line
    let result = twinkleStar; // Change this line
*/

// this is the code ans

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line