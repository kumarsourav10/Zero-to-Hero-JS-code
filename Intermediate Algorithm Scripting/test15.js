// Arguments Optional



// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.



//                                                             Tests


// Waiting:addTogether(2, 3) should return 5.
// Waiting:addTogether(23, 30) should return 53.
// Waiting:addTogether(5)(7) should return 12.
// Waiting:addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
// Waiting:addTogether(2, "3") should return undefined.
// Waiting:addTogether(2)([3]) should return undefined.
// Waiting:addTogether("2", 3) should return undefined.
// Waiting:addTogether(5, undefined) should return undefined.

// This is the code

/*

function addTogether() {
  return false;
}

addTogether(2,3);

*/

// This is the code ans

function addTogather() {
    let array = [...arguments]
    console.log(array)
    if(array.some(element => typeof element !== 'number')) {
      return undefined
    } else if (array.length == 1){
      return function addNum2(num2){
       return addTogather(array[0], num2)
      }
    } else {
      return array[0] + array[1]
    }
  }
  
  console.log(addTogather(2)(3))