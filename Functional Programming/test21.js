// Apply Functional Programming to Convert Strings to URL Slugs




// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

// The input is a string with spaces and title-cased words

// The output is a string with the spaces between words replaced by a hyphen (-)

// The output should be all lower-cased letters

// The output should not have any spaces



//                                                                             Tests
// Waiting:Your code should not use the replace method for this challenge.
// Waiting:urlSlug("Winter Is Coming") should return the string winter-is-coming.
// Waiting:urlSlug(" Winter Is  Coming") should return the string winter-is-coming.
// Waiting:urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.
// Waiting:urlSlug("Hold The Door") should return the string hold-the-door.


// This is the code 

/*

// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

*/

// This is the code ans

// Only change code below this line
function urlSlug(title) {
    return title
    .slice()
    .toLowerCase()
    .split(" ")
     .filter(function (word) {
       if (word != "") {
         return word;
       }
     }).join("-")
   }
   // Only change code above this line
   urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");