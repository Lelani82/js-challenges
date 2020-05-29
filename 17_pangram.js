/*

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once.

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not.

If the given string has any uppercase or numbers, it should return false

*/

function isPangram(string) {
    // split string into array of letters
    let stringArray = string.split("");
    // define the alphabet
    let lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
    //iterate to see if it includes all letters from alphabet (lowercase only)
    let result = stringArray.filter(function(item) {
      return lettersArray.includes(item);
    })
    // if (stringArray == lettersArray) {
    //   return true; 
    //   } else {
    //     return false; 
    //   }
    
}

isPangram("the quick Brown fox jumps over the lazy dog");
// module.exports = {
//     isPangram
// };