// Convert the logic to use else if statements.


// Passed:You should have at least two else statements
// Passed:You should have at least two if statements
// Failed:You should have closing and opening curly braces for each if else code block.
// Passed:testElseIf(0) should return the string Smaller than 5
// Passed:testElseIf(5) should return the string Between 5 and 10
// Passed:testElseIf(7) should return the string Between 5 and 10
// Passed:testElseIf(10) should return the string Between 5 and 10
// Passed:testElseIf(12) should return the string Greater than 10

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }  else if (val < 5) {
       return "Smaller than 5";
    } else {
  
    return "Between 5 and 10";
    }
  }
  
  testElseIf(7);