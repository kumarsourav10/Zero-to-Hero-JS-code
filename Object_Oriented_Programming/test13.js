// Change the Prototype to a New Object


// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.



//                                                              Tests
// Waiting:Dog.prototype should be set to a new object.
// Waiting:Dog.prototype should have the property numLegs.
// Waiting:Dog.prototype should have the method eat().
// Waiting:Dog.prototype should have the method describe().

// This is the code 

/*

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};

*/

// This is the code ans

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
     numLegs : 4 , 
     eat : function () {
       console.log("chew","chew")
     },
     describe: function () {
       console.log ("my name is " + this.name)
     }
  };