// Remove Elements from an Array Using slice Instead of splice


// Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

// Do not mutate the original array provided to the function.


//                                                                            Tests
// Waiting:Your code should use the slice method.
// Waiting:Your code should not use the splice method.
// Waiting:The inputCities array should not change.
// Waiting:nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) should return ["Chicago", "Delhi", "Islamabad"].


// This is the code

/*

function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

*/

// This is the code ans

function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0, 3);
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);33
  
  console.log(inputCities)