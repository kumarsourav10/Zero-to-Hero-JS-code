// Understand Where an Object’s Prototype Comes From


// Use isPrototypeOf to check the prototype of beagle.




//                                                        Tests
// Waiting:You should show that Dog.prototype is the prototype of beagle


// This is the code 

/*

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line

*/

// This is the code ans

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line4
  Dog.prototype.isPrototypeOf(beagle)