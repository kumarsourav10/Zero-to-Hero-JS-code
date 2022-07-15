// Set Default Parameters for Your Functions

// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.


// The result of increment(5, 2) should be 7.
// Waiting:The result of increment(5) should be 6.
// Waiting:A default parameter value of 1 should be used for value.


// Only change code below this line
const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
// Only change code above this line