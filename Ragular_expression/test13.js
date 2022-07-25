// Match Characters that Occur Zero or More Times

// For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.


// Waiting:Your regex chewieRegex should use the * character to match zero or more a characters.
// Waiting:Your regex should match the string A in chewieQuote.
// Waiting:Your regex should match the string Aaaaaaaaaaaaaaaa in chewieQuote.
// Waiting:Your regex chewieRegex should match 16 characters in chewieQuote.
// Waiting:Your regex should not match any characters in the string He made a fair move. Screaming about it can't help you.
// Waiting:Your regex should not match any characters in the string Let him have it. It's not wise to upset a Wookiee.

// this is the code 
 /*
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
*/

// this is the answer code
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);