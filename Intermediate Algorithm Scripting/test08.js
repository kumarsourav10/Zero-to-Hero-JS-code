// DNA Pairing


// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


//                                                                                Tests



// Waiting:pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// Waiting:pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// Waiting:pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].


// This is the code 

/*

function pairElement(str) {
  return str;
}

pairElement("GCG");

*/

// This is the code ans

function pairElement(initialStrand) {

    function calculatePair(initial) {
      if(initial === "A") {
        return "T";
      } else if (initial === "T") {
        return "A";
      } else if (initial === "G") {
        return "C"
      } else if (initial === "C") {
        return "G";
      }
    }
    
      return initialStrand.split("").map(initialPair => {
        let pair = [initialPair, calculatePair(initialPair)];
        return pair;
      });
    }
    
    let result = pairElement("GCG");
    console.log(result)