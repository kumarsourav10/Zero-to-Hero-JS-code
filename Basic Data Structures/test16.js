// Use the delete Keyword to Remove Object Properties


// Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.

// Waiting:The foods object should only have three keys: apples, grapes, and bananas.
// Waiting:The oranges, plums, and strawberries keys should be removed using delete.


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

// Only change code below this line

// Only change code above this line

console.log(foods);

*/

// Ṭhis is the code ans

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges
  delete foods.plums
  delete foods.strawberries
  
  // Only change code above this line
  
  console.log(foods);