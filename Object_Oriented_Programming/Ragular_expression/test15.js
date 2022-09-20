// Find One or More Criminals in a Hunt

// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

// Waiting:Your regex should match one criminal (C) in the string C
// Waiting:Your regex should match two criminals (CC) in the string CC
// Waiting:Your regex should match three criminals (CCC) in the string P1P5P4CCCcP2P6P3.
// Waiting:Your regex should match five criminals (CCCCC) in the string P6P2P7P4P5CCCCCP3P1
// Waiting:Your regex should not match any criminals in the empty string ""
// Waiting:Your regex should not match any criminals in the string P1P2P3
// Waiting:Your regex should match fifty criminals (CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC) in the string P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3.

// this is the code 
/*
let reCriminals = /./; // Change this line
 */

// this is the code answer
let reCriminals = /C+/; // Change this line
