// Add the greater than operator to the indicated lines so that the return statements make sense.

// testGreaterThan(0) should return the string 10 or Under
// testGreaterThan(10) should return the string 10 or Under
// testGreaterThan(11) should return the string Over 10
// testGreaterThan(99) should return the string Over 10
// testGreaterThan(100) should return the string Over 10
// testGreaterThan(101) should return the string Over 100
// testGreaterThan(150) should return the string Over 100
// You should use the > operator at least twice

function testGreaterOrEqual(val) {
    if (val >= '20') {  // Change this line
      return "20 or Over";
    }
  
    if (val >='10') {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);