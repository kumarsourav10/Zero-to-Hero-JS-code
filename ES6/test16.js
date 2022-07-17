// Write Concise Object Literal Declarations Using Object Property Shorthand


// Use object property shorthand with object literals to create and return an object with name, age and gender properties.


// createPerson("Zodiac Hasbro", 56, "male") should return {name: "Zodiac Hasbro", age: 56, gender: "male"}.
// Waiting:Your code should not use key:value.

//  this is the code 
/*
  const createPerson = (name, age, gender) => {
   // Only change code below this line
   return {
     name: name,
    age: age,
     gender: gender
   };
    // Only change code above this line
   };
*/

// this is the code ans.
const createPerson = (name, age, gender) => {
    // Only change code below this line
    "use strict";
    return {
       name,
      age,
      gender
    };
    
    // Only change code above this line
  };