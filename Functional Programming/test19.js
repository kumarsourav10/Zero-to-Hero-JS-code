// Split a String into an Array Using the split Method



// Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.






//                                                                           Tests
// Waiting:Your code should use the split method.
// Waiting:splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
// Waiting:splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].
// Waiting:splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].

// This is the code 

/*


function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}

splitify("Hello World,I-am code");


*/


// This is the code ans

function splitify(str) {
  // Only change code below this line
return str.split(/\W/);
  // Only change code above this line
}

splitify("Hello World,I-am code");
