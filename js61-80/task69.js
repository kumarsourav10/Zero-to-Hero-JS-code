// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

// You should use the || operator once
// Waiting:You should only have one if statement
// Waiting:testLogicalOr(0) should return the string Outside
// Waiting:testLogicalOr(9) should return the string Outside
// Waiting:testLogicalOr(10) should return the string Inside
// Waiting:testLogicalOr(15) should return the string Inside
// Waiting:testLogicalOr(19) should return the string Inside
// Waiting:testLogicalOr(20) should return the string Inside
// Waiting:testLogicalOr(21) should return the string Outside
// Waiting:testLogicalOr(25) should return the string Outside

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < '10' || val > '20') {
      return "Outside";
    }
  
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);