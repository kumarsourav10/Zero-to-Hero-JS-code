// Create a Method on an Object


// Objects can have a special type of property, called a method.

// Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:


//                                                             Tests
// Waiting:dog.sayLegs() should be a function.
// Waiting:dog.sayLegs() should return the given string - note that punctuation and spacing matter.

// this is the code 

/*

let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();

*/

// This is the code ans

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() 
    {
      return "This dog has"  +  dog.numLegs + " legs"+"."
    }
  };
  
  console.log(dog.sayLegs());

  Note : 8