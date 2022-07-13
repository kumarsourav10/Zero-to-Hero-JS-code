// Add ["Paul", 35] to the beginning of the myArray variable using unshift().

// myArray should now have [["Paul", 35], ["dog", 3]].

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
// myArray.shift([]);
myArray.unshift(["Paul", 35])
console.log(myArray);

// you don't need to remove first and than add second one directly you can add the value by unsihft 