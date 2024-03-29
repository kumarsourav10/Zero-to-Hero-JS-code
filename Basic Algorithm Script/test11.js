// Title Case a Sentence


// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// Tests
// Waiting:titleCase("I'm a little tea pot") should return a string.
// Waiting:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
// Waiting:titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
// Waiting:titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.

// This is the code

/*

function titleCase(str) {
    return str;
  }
  
  titleCase("I'm a little tea pot");

  */

//   This is the code ans

function titleCase(str) {
    return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");

}

titleCase("I'm a little tea pot");