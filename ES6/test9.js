// Use Destructuring Assignment to Extract Values from Objects

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

// You should remove the ES5 assignment syntax.
// Waiting:You should use destructuring to create the today variable.
// Waiting:You should use destructuring to create the tomorrow variable.
// Waiting:today should be equal to 77 and tomorrow should be equal to 80.

// this is the code
// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
  // Only change code below this line
  
//   const today = HIGH_TEMPERATURES.today;
//   const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line

//   this is code ans.
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {yesterday, tomorrow} = HIGH_TEMPERATURES;
  const {today} = HIGH_TEMPERATURES;
  // Only change code above this line