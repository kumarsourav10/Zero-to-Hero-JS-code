// Sum All Primes


// A  prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.



//                                                                               Tests



// Waiting:sumPrimes(10) should return a number.
// Waiting:sumPrimes(10) should return 17.
// Waiting:sumPrimes(977) should return 73156.

// This is the code 

/*

function sumPrimes(num) {
  return num;
}

sumPrimes(10);

*/


// This is the code ans

function sumPrimes(num) {
    function checkPrimes(number) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0)
          return false
      } return true
    }
    let answer = 0;
    for (let j = 2; j <= num; j++) {
      if (checkPrimes(j)) {
        answer += j;
      }
    }
    return answer;
  }
  
  console.log(sumPrimes(10));