// Use the Rest Parameter with Function Parameters

// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.


// The result of sum(0,1,2) should be 3
// Waiting:The result of sum(1,2,3,4) should be 10
// Waiting:The result of sum(5) should be 5
// Waiting:The result of sum() should be 0
// Waiting:sum should be an arrow function which uses the rest parameter syntax (...) on the args parameter.


// this is the code 
const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }

//   this is the solved code

const sum1 = (...args) => {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1,2,3));
  
  
  
  