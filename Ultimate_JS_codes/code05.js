// Q1 Create a variable of type string and try to add a number into it . 
let a = "AddTwoNumbers";
console.log(a)

let b = 60 + 60;
console.log(b)

let c = 60 + 60;
console.log(a + b + c)

// Q2Use typeof operator to find the datatype of the string in last question
const hold = 899;
console.log(typeof hold);

// let createProgram = dictionary;
//  dictionary = run;
//  dictionary = Go;

// Q3 Create a const object in 
// Js can you change it to hold a number later?
const a1 = {
  name: "Sunny",
  class: 12,
  Blood: "B+"
}
// no you can not hold a number into it
// a1 = 65

// Q4Try to add a new key to the const object in problem 3 were you able to do it ? 


// here is the ans
a1["friend"] = "Amit"
a1["name"] = "Sumit"

console.log(a1)

// Q5 Write Js program to create a word-meanign dictionary of 5 words?

const dict = {
  Fan: "used with electric",
  mobile: "Foe persnol use",
  laptop: "For Office use",
  tv: "For Entertainment Purpose",
  ac: "For luxury feel"
}

console.log(dict.tv)
