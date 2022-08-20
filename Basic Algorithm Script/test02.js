// Reverse a String


// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.


// Tests
// Waiting:reverseString("hello") should return a string.
// Waiting:reverseString("hello") should return the string olleh.
// Waiting:reverseString("Howdy") should return the string ydwoH.
// Waiting:reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.

// This is the code 

/*

function reverseString(str) {
  return str;
}

reverseString("hello");

*/

// This is the code ans
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >=0 ; i-- ) {
       reversedStr += str[i];
    }
    return reversedStr;
  }
  
  reverseString("hello");