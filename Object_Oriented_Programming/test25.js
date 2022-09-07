// Understand the Immediately Invoked Function Expression (IIFE)


// Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).



//                                                                           Tests
// Waiting:The function should be anonymous.
// Waiting:Your function should have parentheses at the end of the expression to call it immediately.


// This is the code 
/*

function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

*/

// This is the code ans

(function () {
    console.log("A cozy nest is ready");
  })();
  
  
  