// Return Part of an Array Using the slice Method



// Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.


//                                                            Tests
// Waiting:Your code should use the slice method.
// Waiting:The inputAnim variable should not change.
// Waiting:sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) should return ["Dog", "Tiger"].
// Waiting:sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) should return ["Cat"].
// Waiting:sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) should return ["Dog", "Tiger", "Zebra"].


// This is the code 

/*

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

*/

// This is the code ans

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  let slicedResult = anim.slice(beginSlice, endSlice);
  
  return slicedResult
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  let result = sliceArray(inputAnim, 1, 3);
  
  console.log(result)
  

  