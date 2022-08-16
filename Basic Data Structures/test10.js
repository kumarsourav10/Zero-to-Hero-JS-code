// Check For The Presence of an Element With indexOf()


// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.


// Waiting:The quickCheck function should return a boolean (true or false), not a string ("true" or "false")
// Waiting:quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false
// Waiting:quickCheck(["onions", "squash", "shallots"], "onions") should return true
// Waiting:quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
// Waiting:quickCheck([true, false, false], undefined) should return false
// Waiting:The quickCheck function should utilize the indexOf() method

// This is the code 
/*
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

// This is the code ans
function quickCheck(arr, elem) {
  // Only change code below this line
   if (arr.indexOf(elem) >=0) {
     return true
   }
   return false
  // Only change code above this line
  
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/*   
CODE EXPLANATION


A simple if-statement can be used to check whether or not the value returned by the indexOf() function is less than 0.
Once the value is discovered then you can return either true or false.
demonstrates how a simple if-statement can return the correct result.
*/