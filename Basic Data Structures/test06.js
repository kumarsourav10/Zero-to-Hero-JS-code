// Add Items Using splice()

// We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.


// htmlColorNames should return ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]
// Waiting:The htmlColorNames function should utilize the splice() method
// Waiting:You should not use shift() or unshift().
// Waiting:You should not use array bracket notation.

// This  is the code
/*
function htmlColorNames(arr) {
    // Only change code below this line
  
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
  */

//   This is the code ans
function htmlColorNames(arr) {
    // Only change code below this line
    const startIndex = 0;
    const amountToDelete = 2;
     arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));