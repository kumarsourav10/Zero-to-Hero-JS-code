// Check if an Object has a Property



// Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

// The users object should not be accessed directly
// Waiting:The users object should only contain the keys Alan, Jeff, Sarah, and Ryan
// Waiting:The function isEveryoneHere should return true if Alan, Jeff, Sarah, and Ryan are properties on the object passed to it.
// Waiting:The function isEveryoneHere should return false if Alan is not a property on the object passed to it.
// Waiting:The function isEveryoneHere should return false if Jeff is not a property on the object passed to it.
// Waiting:The function isEveryoneHere should return false if Sarah is not a property on the object passed to it.
// Waiting:The function isEveryoneHere should return false if Ryan is not a property on the object passed to it.

//This is the code 

/*

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  
  // Only change code above this line
}

console.log(isEveryoneHere(users));

*/

// This is the code ans

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if (
      userObj.hasOwnProperty('Alan') &&
      userObj.hasOwnProperty('Jeff') &&
      userObj.hasOwnProperty('Sarah') &&
      userObj.hasOwnProperty('Ryan') 
    ) {
      return true
    }
    return false
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));