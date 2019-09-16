/*
Given an array of numbers, determine whether the sum
of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

*/

function oddOrEven(array) {
    var total = 0;
    for (var i in array) {
        total += array[i];
    }

    if (total % 2 === 0)
        return "even";
    else
        return "odd";

}

module.exports = { oddOrEven };