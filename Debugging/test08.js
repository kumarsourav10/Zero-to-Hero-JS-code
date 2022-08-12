// Catch Missing Open and Closing Parenthesis After a Function Call

// Fix the code so the variable result is set to the value returned from calling the function getNine.


// Your code should fix the variable result so it is set to the number that the function getNine returns.
// Waiting:Your code should call the getNine function.

// This is the code
/*
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
*/

// This is the code ans. 

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);