
// Implement map on a Prototype


// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.


//                                                                          Tests
// Waiting:new_s should equal [46, 130, 196, 10].
// Waiting:Your code should not use the map method.


// This is the code

/*

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

*/

// This is the code ans

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
for ( let i = 0; i < this.length; i+= 1) {
  console.log([i])
  newArray.push(callback(this[i]));
}
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});