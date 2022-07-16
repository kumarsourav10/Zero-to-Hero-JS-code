// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.


// Waiting:arr should be [3,4,5,6,7,8,9,10]
// Waiting:source should be [1,2,3,4,5,6,7,8,9,10]
// Waiting:Array.slice() should not be used.
// Waiting:Destructuring on list should be used.


// this is the code
/*
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
*/


// this is the ans. code
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change ode below this line
 "use strict";
  // change code below this line
  const [a, b, ...arr] = list;

  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);