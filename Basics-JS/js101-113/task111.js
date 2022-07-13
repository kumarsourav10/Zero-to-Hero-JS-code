// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.


// checkSign should use multiple conditional operators
// Waiting:checkSign(10) should return the string positive. Note that capitalization matters
// Waiting:checkSign(-12) should return the string negative. Note that capitalization matters
// Waiting:checkSign(0) should return the string zero. Note that capitalization matters

function checkSign(num) {
    return(num === 0) ? "zero" : (num > 0) ? "positive" : "negative"
  }
  
  checkSign(10);