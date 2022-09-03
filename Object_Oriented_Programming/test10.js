// Use Prototype Properties to Reduce Duplicate Code


// Add a numLegs property to the prototype of Dog



//                                                     Tests
// Waiting:beagle should have a numLegs property.
// Waiting:beagle.numLegs should be a number.
// Waiting:numLegs should be a prototype property not an own property.


// This is the code 

/*

function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");

*/

// This is the code ans

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");