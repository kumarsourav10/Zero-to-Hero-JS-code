// Catch Mixed Usage of Single and Double Quotes

// Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.

// Passed:Your code should fix the quotes around the href value #Home by either changing or escaping them.
// Passed:Your code should keep the double quotes around the entire string.

// This is the code 
/*
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
*/

// This is the code ans
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);