// Make Code More Reusable with the this Keyword


// The last challenge introduced a method to the duck object. It used duck.name dot notation to access the value for the name property within the return statement:



//                                                             Tests
// Waiting:dog.sayLegs() should return the given string.
// Waiting:Your code should use the this keyword to access the numLegs property of dog.



// This is the code

/*

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

*/

// This is the code ans

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

//   Simpoly change the name to {This } 