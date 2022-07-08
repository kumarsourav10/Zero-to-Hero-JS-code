// //
// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Example Outputs: -3 Hold or 5 Bet

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.




// Waiting:Cards Sequence 2, 3, 4, 5, 6 should return the string 5 Bet
// Waiting:Cards Sequence 7, 8, 9 should return the string 0 Hold
// Waiting:Cards Sequence 10, J, Q, K, A should return the string -5 Hold
// Waiting:Cards Sequence 3, 7, Q, 8, A should return the string -1 Hold
// Waiting:Cards Sequence 2, J, 9, 2, 7 should return the string 1 Bet
// Waiting:Cards Sequence 2, 2, 10 should return the string 1 Bet
// Waiting:Cards Sequence 3, 2, A, 10, K should return the string -1 Hold


let count = 0;

function cc(card) {
  // Only change code below this line
 switch (card) {
   case 2 :
   case 3 :
   case 4 :
   case 5 :
   case 6 :
    count += 1 ;
   break ;
   case  7 :
   case  8 :
   case  9 :
    count += 0 ;
     break ;
     case 10 :
     case "J" :
     case "Q" :
     case "K" :
     case "A" :
     count -= 1 ;
     break ;
 }
   var action = "" ;

    if (count > 0 ) {
      action = "Bet" 
      } else {
        action = "Hold"
                
    }
  return `${count} ${action}`;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');