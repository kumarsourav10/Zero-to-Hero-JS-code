// Combine Arrays with the Spread Operator

// We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

// Waiting:spreadOut should return ["learning", "to", "code", "is", "fun"]
// Waiting:The spreadOut function should utilize spread syntax

// This is the code
/*
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
*/

// This is the code ans
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment,'is','fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());