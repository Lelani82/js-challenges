/*

Working individually or in pairs write out different tests which will
count the number of even numbers in an array. 

Try to have at least three different tests which test different values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes. 

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

const countEvens = (arr) => {
    // Your code here
    odd = 0;
    even = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
    console.log(even);
    console.log(odd);

}

// Your tests here
countEvens([1, 2, 3, 4]);
