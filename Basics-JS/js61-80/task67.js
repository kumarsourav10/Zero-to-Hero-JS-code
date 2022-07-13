// Add the less than or equal to operator to the indicated lines so that the return statements make sense.


// testLessOrEqual(0) should return the string Smaller Than or Equal to 12
// Waiting:testLessOrEqual(11) should return the string Smaller Than or Equal to 12
// Waiting:testLessOrEqual(12) should return the string Smaller Than or Equal to 12
// Waiting:testLessOrEqual(23) should return the string Smaller Than or Equal to 24
// Waiting:testLessOrEqual(24) should return the string Smaller Than or Equal to 24
// Waiting:testLessOrEqual(25) should return the string More Than 24
// Waiting:testLessOrEqual(55) should return the string More Than 24
// Waiting:You should use the <= operator at least twice


function testLessOrEqual(val) {
    if (val <= '12') {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= '24') {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);