// Implement the filter Method on a Prototype



// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

//                                                             Tests
// Waiting:new_s should equal [23, 65, 5].
// Waiting:Your code should not use the filter method.

// This is the code 

/*

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

*/

// This is the code ans

// The global variable
const s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  for (let i = 0 ; i < this.length; i += 1){
    if(callback(this[i])) {
    newArray.push(this[i])
    }
  }
  // Only change code above this line
  return newArray;
};
const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s)
