// Avoid Mutations and Side Effects Using Functional Programming


// Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.


//                                                                                   Tests
// Waiting:Your function incrementer should not change the value of fixedValue (which is 4).
// Waiting:Your incrementer function should return a value that is one larger than the fixedValue value.
// Waiting:Your incrementer function should return a value based on the global fixedValue variable value.


// This is the code 

/*

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}

*/

// This is the code ans
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
return fixedValue + 1 ;
  // Only change code above this line
}
let newValue = incrementer();
console.log(newValue);
console.log(fixedValue)
