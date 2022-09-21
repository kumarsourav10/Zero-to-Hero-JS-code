// Steamroller


// Flatten a nested array. You must account for varying levels of nesting.





//                                                                          Tests



// Waiting:steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// Waiting:steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// Waiting:steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// Waiting:steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// Waiting:Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.


// this is the code 

/*

function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);


*/

// This is the code ans

function steamrollArray(arr) {
    let answer = [].concat(...arr)
    console.log(answer)
    return answer.some(Array.isArray) ?
    steamrollArray(answer) : answer;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);