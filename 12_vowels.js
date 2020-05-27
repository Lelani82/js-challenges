/*
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
vowels("The quick brown fox") should return ["e","u","i","o","o"]
vowels("Hello WOrld") should return ["e","o","O"]

Check your solution by running the tests:
npm test
*/

function vowels(string) {
    // Split string into array of letters
    let arr = string.split('');
    // create new empty array to store vowels in
    let vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; 
    // filter arr with vowelArray
    let result = arr.filter(function(item) {
        return vowelArray.includes(item);
    });
}

vowels("The quick brown fox")
// module.exports = {
//     vowels
// }