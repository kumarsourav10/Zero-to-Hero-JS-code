// Access Property Names with Bracket Notation


// We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.

// Waiting:checkInventory should be a function.
// Waiting:The foods object should have only the following key-value pairs: apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27.
// Waiting:checkInventory("apples") should return 25.
// Waiting:checkInventory("bananas") should return 13.
// Waiting:checkInventory("strawberries") should return 27.

// This is the code 

/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(checkInventory("apples"));
*/

// This is the code ans
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    {
    return foods[scannedItem];
  }
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));