// Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.


// You should use the && operator once
// Waiting:You should only have one if statement
// Waiting:testLogicalAnd(0) should return the string No
// Waiting:testLogicalAnd(24) should return the string No
// Waiting:testLogicalAnd(25) should return the string Yes
// Waiting:testLogicalAnd(30) should return the string Yes
// Waiting:testLogicalAnd(50) should return the string Yes
// Waiting:testLogicalAnd(51) should return the string No
// Waiting:testLogicalAnd(75) should return the string No
// Waiting:testLogicalAnd(80) should return the string No

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= '50' && val >= '25') {
        return "Yes";
      }
    return "No";
    }
  
    // Only change code above this line
  
  testLogicalAnd(10);