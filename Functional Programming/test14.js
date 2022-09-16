// Add Elements to the End of an Array Using concat Instead of push


// Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.



//                                                                   Tests
// Waiting:Your code should use the concat method.
// Waiting:Your code should not use the push method.
// Waiting:The first array should not change.
// Waiting:The second array should not change.
// Waiting:nonMutatingPush([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].

// This is the code 

/*
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

*/

// This is the code ans

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);