// Copy Array Items Using slice()

// We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.


// forecast should return ["warm", "sunny"]
// Waiting:The forecast function should utilize the slice() method

// This is the code
/*
function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
*/

// This is the code ans
function forecast(arr) {
    // Only change code below this line
  // let newData = arr.slice(3, 4)
    return arr.slice(2, 4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  // console.log(newData)