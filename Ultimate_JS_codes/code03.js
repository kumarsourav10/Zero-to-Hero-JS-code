console.log("JavaScript Tutorial 3: var, let and const")

var a = 45;
let b = "Sourav";
var c = null;
var d = undefined
{
  let b = 'this'
  console.log(b)
}
console.log(b)

//  This will print my this both of the time but when you change var into let inside the curly brackets this will print my name sourav

// var is global scoped 
// and let and const these are block scopped variables

// that's why people are quiting the use of var becuase it will create a bug inside your code.


// const z = Zebra;
// let z = Yak


// you can not overright the const value because const means constent once you set the value to the constent you can not update this