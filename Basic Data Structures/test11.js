// Iterate Through All an Array's Items Using For Loops


// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

// filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]
// Waiting:filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]
// Waiting:filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [["amy", "beth", "sam"]]
// Waiting:filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []
// Waiting:The filteredArray function should utilize a for loop

// This is the code 

/*
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
*/

// This is the code ans 

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
    
        //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]);   //Inserts the element of the array in the new filtered array
    }
  }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));