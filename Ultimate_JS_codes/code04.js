// There are 7 types of PRIMITIVE DATA TYPES

// Primitive in Js

// N = Null
// N = Number
// S = Symbol
// S = String
// B = Boolean
// B = BigInt
// U = Undefined


// NON PRIMITIVE DATA TYPES 
// IS ONLY IS 
// {OBJECT}

let a = null;
let b = 65 ; 
let c = true; //can also be false
let d = BigInt("646") + BigInt("4");
let e = "Sourav";
let f = Symbol("I am a Nice symbol");
let g = undefined;

console.log(a,b,c,d,e,f,g)

console.log(typeof a)

// Objects in Js

const item = {
  "Sourav": false,
  "Lovish": true,
  "Rohan" : 65,
  "Rinki" : undefined
}

console.log(item["Sourav"])