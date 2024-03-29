// Sum All Odd Fibonacci Numbers




// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.





//                                                                                  Tests



// Waiting:sumFibs(1) should return a number.
// Waiting:sumFibs(1000) should return 1785.
// Waiting:sumFibs(4000000) should return 4613732.
// Waiting:sumFibs(4) should return 5.
// Waiting:sumFibs(75024) should return 60696.
// Waiting:sumFibs(75025) should return 135721.

// This is the code 

/*

function sumFibs(num) {
  return num;
}

sumFibs(4);

*/

// This is the code ans

function sumFibs(num) {
    let fiboNums = [1, 1]
    let nextNum = fiboNums[fiboNums.length - 2] + fiboNums[fiboNums.length - 1]
    while (nextNum <= num) {
      fiboNums.push(nextNum);
      nextNum = fiboNums[fiboNums.length - 2] + fiboNums[fiboNums.length - 1]
    }
    return fiboNums.filter(element => element % 2 !== 0).reduce((a,b) => a+b)
  }
  
  console.log(sumFibs(75024));