// Use the some Method to Check that Any Elements in an Array Meet a Criteria


// Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.




//                                                                   Tests
// Waiting:Your code should use the some method.
// Waiting:checkPositive([1, 2, 3, -4, 5]) should return true.
// Waiting:checkPositive([1, 2, 3, 4, 5]) should return true.
// Waiting:checkPositive([-1, -2, -3, -4, -5]) should return false.


// This is the code 

/*


function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);


*/

// This is the code ans

function checkPositive(arr) {
    // Only change code below this line
  
    return arr.some( val => val > 0);
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);