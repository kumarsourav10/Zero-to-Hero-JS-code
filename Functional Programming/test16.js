// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem




// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.



//                                                                          Tests
// Waiting:squareList should be a function.
// Waiting:for, while, and forEach should not be used.
// Waiting:map, filter, or reduce should be used.
// Waiting:The function should return an array.
// Waiting:squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].
// Waiting:squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49].


// This is the code 

/*

const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

*/

// This is the code ans

const squareList = arr => {
  // Only change code below this line
  let result = [];

  let positiveIntegersSquared = arr.filter(function(num) {
    if (Number.isInteger(num) && num > 0) {
        return num;
      }
  }).map(function(num) {
    return num *num;
  });

  return positiveIntegersSquared;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);