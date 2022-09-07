// Add Methods After Inheritance


// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.


//                                                                  Tests
// Waiting:Animal should not respond to the bark() method.
// Waiting:Dog should inherit the eat() method from Animal.
// Waiting:The Dog prototype should have a bark() method.
// Waiting:beagle should be an instanceof Animal.
// Waiting:The constructor for beagle should be set to Dog.
// Waiting:beagle.eat() should log the string nom nom nom
// Waiting:beagle.bark() should log the string Woof!

// This is the code

/*


function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();

*/

// This is the code ans

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};


// Only change code above this line

let beagle = new Dog();
beagle.eat();
beagle.bark();