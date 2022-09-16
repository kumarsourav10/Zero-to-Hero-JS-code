// Introduction to Currying and Partial Application


// Fill in the body of the add function so it uses currying to add parameters x, y, and z.



//                                                                         Tests
// Waiting:add(10)(20)(30) should return 60.
// Waiting:add(1)(2)(3) should return 6.
// Waiting:add(11)(22)(33) should return 66.
// Waiting:Your code should include a final statement that returns x + y + z.

// This is the code 

/*

function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30);

*/


// This is the code ans

function add(x) {
    // Only change code below this line
  
  
  return function (y) {
    return function(z) {
      return x + y + z ;
    }
  }
    // Only change code above this line
  }
  
  add(10)(20)(30);