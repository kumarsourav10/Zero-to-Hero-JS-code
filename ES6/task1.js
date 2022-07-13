// Compare Scopes of the var and let Keywords



// Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

// This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.


//  this  is the tasks
/*
Waiting:var should not exist in code.
Waiting:The variable i declared in the if statement should equal the string block scope.
Waiting:checkScope() should return the string function scope
*/
  

// sample code


/*
function checkScope() {
    var i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  */



// this is the answer
  function checkScope() {
    var i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }