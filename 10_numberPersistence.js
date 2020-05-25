/*
Write a function, "persistence", that takes in a positive parameter "num"
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

Examples:
persistence(39) === 3 
Because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

persistence(999) === 4 
Because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and 1*2 = 2
*/

function persistence(num) {
    // Continue to split numbers while num <= 9 (until single digit)
    let total = 1;
    let count = 0;
    while (num >= 9) {
        // split number into array of numbers
        let arr = Array.from(num.toString()).map(Number);
        // iterate through array & multiply numbers together & count how many times this happens
        for (let i=0; i <arr.length; i++) {
            total *= arr[i];
        }
        // update count
        count += 1;
        // set num to total
        num = total;
        // reset total to 1
        total = 1;
    }
    console.log(count);
    return count;
}

persistence(39);
module.exports = {
    persistence
}