// Convert Celsius to Fahrenheit


// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

// Tests
// Waiting:convertCtoF(0) should return a number
// Waiting:convertCtoF(-30) should return a value of -22
// Waiting:convertCtoF(-10) should return a value of 14
// Waiting:convertCtoF(0) should return a value of 32
// Waiting:convertCtoF(20) should return a value of 68
// Waiting:convertCtoF(30) should return a value of 86

// This is the code

/*

function convertCtoF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertCtoF(30);

*/

// This is the code ans
function convertCtoF(celsius) {
    let fahrenheit = celsius * 9/5 +32;
    return fahrenheit;
  }
  
  console.log(convertCtoF(30));
  
// This is the answer type one   