// Pig Latin



// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.





//                                                                                    Tests


// Waiting:translatePigLatin("california") should return the string aliforniacay.
// Waiting:translatePigLatin("paragraphs") should return the string aragraphspay.
// Waiting:translatePigLatin("glove") should return the string oveglay.
// Waiting:translatePigLatin("algorithm") should return the string algorithmway.
// Waiting:translatePigLatin("eight") should return the string eightway.
// Waiting:Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
// Waiting:Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.

// This is the code 

/*

function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");

*/


// This is the code Ans

function translatePigLatin(str) {
    let vowels = "aeiou".split("");
    
     for (let i = 0; i < str.length; i += 1) {
       let individualLetter = str[i];
         if (vowels.indexOf(individualLetter) != -1 && i === 0) {
       return str + "way";
       }
    
       if(vowels.indexOf(individualLetter) != -1) {
         return str.slice(i) + str.slice(0, i) + "ay";
       }
     }
     return str + "ay";
    }
    
    let result = translatePigLatin("rhythm")
    console.log(result);