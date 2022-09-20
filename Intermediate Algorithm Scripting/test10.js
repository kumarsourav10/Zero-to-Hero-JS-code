// Sorted Union



// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.


//                                                                          Tests


// Waiting:uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// Waiting:uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// Waiting:uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
// Waiting:uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
// Waiting:uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].


// This is the code 

/*

function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

*/

// this is the code ans

function uniteUnique(...arr) {
    let answer = [];
    for (let arrays of arr) {
        for (let element of arrays) {
          if(!answer.includes(element)){
            answer.push(element);
          }
        }
      }
      return answer
    }
  
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));