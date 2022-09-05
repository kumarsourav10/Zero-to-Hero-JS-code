// Reset an Inherited Constructor Property


// Fix the code so duck.constructor and beagle.constructor return their respective constructors.


//                                                          Tests
// Waiting:Bird.prototype should be an instance of Animal.
// Waiting:duck.constructor should return Bird.
// Waiting:Dog.prototype should be an instance of Animal.
// Waiting:beagle.constructor should return Dog.


// This is the code ans 

/*

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line



let duck = new Bird();
let beagle = new Dog();

*/

//This is the code ans

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
