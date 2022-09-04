// Understand the Constructor Property


// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.




//                                                                  Tests
// Waiting:joinDogFraternity should be defined as a function.
// Waiting:joinDogFraternity should return true if candidate is an instance of Dog.
// Waiting:joinDogFraternity should use the constructor property.

// This is the code 

/*

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}

*/

// This  is the code ans

function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }