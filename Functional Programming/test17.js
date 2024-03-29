// Sort an Array Alphabetically using the sort Method


// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.


//                                                                           Tests
// Waiting:Your code should use the sort method.
// Waiting:alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].
// Waiting:alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].
// Waiting:alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].


// This is the code

/*

function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


*/

// This is the code ans

function alphabeticalOrder(arr) {
    // Only change code below this line
  return arr.sort(function(a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    });
  
  
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

  