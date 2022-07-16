// Use Destructuring Assignment to Assign Variables from Nested Objects


// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

// You should remove the ES5 assignment syntax.
// Waiting:You should use destructuring to create the lowToday variable.
// Waiting:You should use destructuring to create the highToday variable.
// Waiting:lowToday should be equal to 64 and highToday should be equal to 77.


// this is the code 

/*
  const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line

*/


//  this is the code ans. 
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const { today: { low:lowToday, high: highToday } } = LOCAL_FORECAST; 
   
  // Only change code above this line
  
