// Override Inherited Methods

// Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

//                                                                                 Tests
// Waiting:penguin.fly() should return the string Alas, this is a flightless bird.
// Waiting:The bird.fly() method should return the string I am flying!


// This is the code

/*


function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());


*/

// This is the code ans


function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function ()
{
  return "Alas, this is a flightless bird."
}


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
