// Use a Mixin to Add Common Behavior Between Unrelated Objects


// Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.


//                                                                             Tests
// Waiting:Your code should declare a glideMixin variable that is a function.
// Waiting:Your code should use the glideMixin on the bird object to give it the glide method.
// Waiting:Your code should use the glideMixin on the boat object to give it the glide method.


// This is the code 

/*


let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

*/

// This is the code ans

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  
  let glideMixin = function (obj) {
    obj.glide = function () {
      console.log("Gliding!");
    }
  }
  
  glideMixin(bird);
  glideMixin(boat);