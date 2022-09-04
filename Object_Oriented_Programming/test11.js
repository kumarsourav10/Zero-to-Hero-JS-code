// Iterate Over All Properties


// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.


//                                                                Tests
// Waiting:The ownProps array should only contain name.
// Waiting:The prototypeProps array should only contain numLegs.
// Waiting:You should solve this challenge without using the built in method Object.keys().

// This is the code 

/*

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

*/

// This is the code ans

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  for ( let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }