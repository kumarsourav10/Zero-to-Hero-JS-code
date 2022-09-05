// Inherit Behaviors from a Supertype

// Use Object.create to make two instances of Animal named duck and beagle.



//                                                                        Tests
// Waiting:The duck variable should be defined.
// Waiting:The beagle variable should be defined.
// Waiting:The duck variable should be initialised with Object.create.
// Waiting:The beagle variable should be initialised with Object.create.
// Waiting:duck should have a prototype of Animal.
// Waiting:beagle should have a prototype of Animal.

// this is the code 

/*

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line

*/

// This is the code ans

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
