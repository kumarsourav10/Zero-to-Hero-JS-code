// Change the chained if/else if statements into a switch statement.

// You should not use any else statements anywhere in the editor
// Waiting:You should not use any if statements anywhere in the editor
// Waiting:You should have at least four break statements
// Waiting:chainToSwitch("bob") should be the string Marley
// Waiting:chainToSwitch(42) should be the string The Answer
// Waiting:chainToSwitch(1) should be the string There is no #1
// Waiting:chainToSwitch(99) should be the string Missed me by this much!
// Waiting:chainToSwitch(7) should be the string Ate Nine
// Waiting:chainToSwitch("John") should be "" (empty string)
// Waiting:chainToSwitch(156) should be "" (empty string)

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch (val) {
    case "bob":
      answer = "Marley";
      return ;
      case "42" :
      answer = "The Answer"
      return ;
      case "1" :
      answer = 'There is no #1'
      return ;
      case "99" :
      answer = "Missed me by this much!"
      return ;
      case "7":
      answer = "Ate Nine"
      return ;
  }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);