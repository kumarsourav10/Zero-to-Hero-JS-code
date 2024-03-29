// Remember to Set the Constructor Property when Changing the Prototype


// Define the constructor property on the Dog prototype.

                                                      
//                                                         Tests

// Waiting:Dog.prototype should set the constructor property.

// This is the code 

/*

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

*/

// This is the code ans

function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
  constructor: Dog,
  
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };      