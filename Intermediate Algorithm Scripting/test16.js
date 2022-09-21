// Smallest Common Multiple



// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.



//                                                                        Tests


// Waiting:smallestCommons([1, 5]) should return a number.
// Waiting:smallestCommons([1, 5]) should return 60.
// Waiting:smallestCommons([5, 1]) should return 60.
// Waiting:smallestCommons([2, 10]) should return 2520.
// Waiting:smallestCommons([1, 13]) should return 360360.
// Waiting:smallestCommons([23, 18]) should return 6056820.



// This is the code 

/*

function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);

*/

// This is the code ans

function findSCM(num1, num2) {
    let lowNum = Math.min(num1, num2)
    let highNum = Math.max(num1, num2)
  
    for (let i = highNum; i <= highNum * lowNum; i += highNum) {
      if (i % lowNum === 0) {
        return i
      }
    }
  }
  function smallestCommons(arr) {
  
    let lowNum = Math.min(...arr)
    let highNum = Math.max(...arr)
    let SCM = findSCM(...arr)
    for (let j = lowNum; j <= highNum; j++){
      if (SCM % j !== 0){
          SCM = findSCM(SCM, j)
      }
    }
    return SCM;
  }
  
  console.log(smallestCommons([2, 10]));