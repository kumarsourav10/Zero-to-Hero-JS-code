
// Use an IIFE to Create a Module



// Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

//                                                              Tests
// Waiting:funModule should be defined and return an object.
// Waiting:funModule.isCuteMixin should access a function.
// Waiting:funModule.singMixin should access a function.


// This is the code 

/*

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

*/

// This is the code ans


let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    };
  })();