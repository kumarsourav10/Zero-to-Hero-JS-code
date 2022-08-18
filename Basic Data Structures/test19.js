// Generate an Array of All Object Keys with Object.keys()


// Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

// Waiting:The users object should only contain the keys Alan, Jeff, Sarah, and Ryan
// Waiting:The getArrayOfUsers function should return an array which contains all the keys in the users object

// This is the code 

/*

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(getArrayOfUsers(users));

*/

// This is the code ans

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
  return Object.keys(obj)
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));