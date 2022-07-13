// Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

// testEqual(10) should return the string Not Equal
// Waiting:testEqual(12) should return the string Equal
// Waiting:testEqual("12") should return the string Equal
// Waiting:You should use the == operator

// Setup
function testEqual(val) {
    if (val ==12 ) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);