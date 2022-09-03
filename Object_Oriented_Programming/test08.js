// Verify an Object's Constructor with instanceof


// Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.


//                                                         Tests

// Waiting:myHouse should have a numBedrooms attribute set to a number.
// Waiting:You should verify that myHouse is an instance of House using the instanceof operator.

// This is the code

/*

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

*/

// This is the code ans

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse = new House(5)
  
  myHouse instanceof House