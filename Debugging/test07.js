// Catch Use of Assignment Operator Instead of Equality Operator


// Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.

// Your code should fix the condition so it checks for equality, instead of using assignment.
// Waiting:The condition should use either == or === to test for equality.

// This is the code 
/*
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
*/

// This is the code ans
let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);