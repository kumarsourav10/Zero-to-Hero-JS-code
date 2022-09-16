// Combine an Array into a String Using the join Method


// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.



//                                                                    Tests
// Waiting:Your code should use the join method.
// Waiting:Your code should not use the replace method.
// Waiting:sentensify("May-the-force-be-with-you") should return a string.
// Waiting:sentensify("May-the-force-be-with-you") should return the string May the force be with you.
// Waiting:sentensify("The.force.is.strong.with.this.one") should return the string The force is strong with this one.
// Waiting:sentensify("There,has,been,an,awakening") should return the string There has been an awakening.


// This is the code

/*

function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");


*/


// This is the code ans

function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(" ");
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");