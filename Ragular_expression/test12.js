// Match Characters that Occur One or More Times

// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

// Your regex myRegex should use the + sign to match one or more s characters.
// Waiting:Your regex myRegex should match 2 items.
// Waiting:The result variable should be an array with two matches of ss

// this is the code 
/* 

let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);

*/


// this is the code ans . 
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);