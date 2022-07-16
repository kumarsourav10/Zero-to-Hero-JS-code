// Use the Spread Operator to Evaluate Arrays In-Place

// Copy all contents of arr1 into another array arr2 using the spread operator.


// Waiting:arr2 should be correct copy of arr1.
// Waiting:... spread operator should be used to duplicate arr1.
// Waiting:arr2 should remain unchanged when arr1 is changed.

// this is the code

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);

//  this is the ans. code 

const arr5 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr6;

arr2 = [...arr1];  // Change this line

console.log(arr2);