// Find the Longest Word in a String


// Return the length of the longest word in the provided sentence.

// Your response should be a number.



// Tests
// Waiting:findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// Waiting:findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// Waiting:findLongestWordLength("May the force be with you") should return 5.
// Waiting:findLongestWordLength("Google do a barrel roll") should return 6.
// Waiting:findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
// Waiting:findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.

// This is the code 
/*

function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

*/

// This is the code ans

function findLongestWordLength(str) {

    // split the string into individual words
     const words = str.split(" ");
   
     // words only has 1 element left that is the longest element
     if (words.length == 1) {
       return words[0].length;
     }
   
     // if words has multiple elements, remove the first element
     // and recursively call the function
     return Math.max(
       words[0].length,
       findLongestWordLength(words.slice(1).join(" "))
     );
   }
   
   findLongestWordLength("The quick brown fox jumped over the lazy dog");