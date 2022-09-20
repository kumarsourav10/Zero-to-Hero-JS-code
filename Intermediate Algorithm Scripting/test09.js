// Missing letters


// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


//                                                                  Tests



// Waiting:fearNotLetter("abce") should return the string d.
// Waiting:fearNotLetter("abcdefghjklmno") should return the string i.
// Waiting:fearNotLetter("stvwx") should return the string u.
// Waiting:fearNotLetter("bcdf") should return the string e.
// Waiting:fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

// This is the code 

/*

function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");

*/


// This is the code ans

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
   let startingPosition  = alphabet.indexOf(str[0]);
   console.log(startingPosition);
   for (let i = startingPosition; i < startingPosition + str.length; i += 1) {
     if (alphabet[i] != str[i - startingPosition]) {
          return alphabet[i]
     };
   }
  }
  
  let result = fearNotLetter("abce");
  console.log(result);