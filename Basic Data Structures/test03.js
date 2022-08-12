// Add Items to an Array with push() and unshift()


// We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

// mixedNumbers(["IV", 5, "six"]) should now return ["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]
// Waiting:The mixedNumbers function should utilize the push() method
// Waiting:The mixedNumbers function should utilize the unshift() method

// This is the code 

/*
function mixedNumbers(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
*/


// This is the code ans
function mixedNumbers(arr) {
    // Only change code below this line
   arr.push(7, 'VIII', 9) 
   arr.unshift('I', 2, 'three') 
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));