// Set the Child's Prototype to an Instance of the Parent


// Modify the code so that instances of Dog inherit from Animal.



//                                                       Tests
// Waiting:Dog.prototype should be an instance of Animal.

// this is the code

/*

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line


let beagle = new Dog();

*/

//  This is the code ans

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();
beagle.eat();

