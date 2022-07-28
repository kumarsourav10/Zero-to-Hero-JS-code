// Find Characters with Lazy Matching

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

// Waiting:The result variable should be an array with <h1> in it
// Waiting:myRegex should use lazy matching
// Waiting:myRegex should not include the string h1.

// this is the code 

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/; // Change this line
// let result = text.match(myRegex);


// This is the code ans . 

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);