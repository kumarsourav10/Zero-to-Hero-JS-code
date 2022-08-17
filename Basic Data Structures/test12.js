// Create complex multi-dimensional arrays


// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.


// myNestedArray should contain only numbers, booleans, and strings as data elements
// Waiting:myNestedArray should have exactly 5 levels of depth
// Waiting:myNestedArray should contain exactly one occurrence of the string deep on an array nested 3 levels deep
// Waiting:myNestedArray should contain exactly one occurrence of the string deeper on an array nested 4 levels deep
// Waiting:myNestedArray should contain exactly one occurrence of the string deepest on an array nested 5 levels deep

// This  is the code 
/*

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];

*/

// This is the code ans 

let myNestedArray = [
    // Only change code below this line
    // change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
    // Only change code above this line
  ];