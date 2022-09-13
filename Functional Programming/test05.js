// Pass Arguments to Avoid External Dependence in a Function


// Let's update the incrementer function to clearly declare its dependencies.

// Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.



//                                                                         Tests
// Waiting:Your function incrementer should not change the value of fixedValue (which is 4).
// Waiting:Your incrementer function should take an argument.
// Waiting:Your incrementer function should return a value that is one larger than the fixedValue value.


// This is the code

/* 


// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}


*/

// This is the code ans

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(incrementValue) {
return incrementValue + 1;

  // Only change code above this line
}

console.log(fixedValue)