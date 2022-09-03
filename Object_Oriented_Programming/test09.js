// Understand Own Properties


// Add the own properties of canary to the array ownProps.


//                                                         Tests
// Waiting:ownProps should include the values numLegs and name.
// Waiting:You should solve this challenge without using the built in method Object.keys().
// Waiting:You should solve this challenge without hardcoding the ownProps array.


// This is the code

/*

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

*/

// This is the code ans

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for(let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
