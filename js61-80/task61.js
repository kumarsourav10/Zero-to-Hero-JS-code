
// Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.


// Waiting:testStrict(10) should return the string Not Equal
// Waiting:testStrict(7) should return the string Equal
// Waiting:testStrict("7") should return the string Not Equal
// Waiting:You should use the === operator


// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(7);