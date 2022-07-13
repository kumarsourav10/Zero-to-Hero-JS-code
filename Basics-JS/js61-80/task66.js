// Add the less than operator to the indicated lines so that the return statements make sense.

// testLessThan(0) should return the string Under 25
// Passed:testLessThan(24) should return the string Under 25
// Failed:testLessThan(25) should return the string Under 55
// Failed:testLessThan(54) should return the string Under 55
// Failed:testLessThan(55) should return the string 55 or Over
// Failed:testLessThan(99) should return the string 55 or Over
// Failed:You should use the < operator at least twice

function testLessThan(val) {
    if (val < '25') {  // Change this line
      return "Under 25";
    }
  
    if (val < '55') {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);