// Combine Two Arrays Using the concat Method


// Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.


//                                                                Tests
// Passed:Your code should use the concat method.
// Passed:The first array should not change.
// Passed:The second array should not change.
// Passed:nonMutatingConcat([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].


// This is the code

/*

function nonMutatingConcat(original, attach) {
  // Only change code below this line

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

*/

// This is the code ans

function nonMutatingConcat(original, attach) {
    // Only change code below this line
  return original.concat(attach);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);
