'use strict';
exports.findMin = findMin;
exports.sumOddIndicesValues = sumOddIndicesValues;
exports.sumArrays = sumArrays;
//2. Write a function findMin that takes an array as a parameter and returns the minimum value.
//Use a for ..of loop.


function findMin(arr) {
    let min = 1;
    for (let element of arr) {
        if (element < min) {
            min = element;
        }
    }
    return min;
}
//console.log(findMin([1, 0, 4, -2]));
//Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum
//of values on the odd indices.
function sumOddIndicesValues(arr) {
    let sum = 0;
    for (let i = 1; i <= arr.length - 1; i += 2) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOddIndicesValues([1, 2, 3, 4, 5]));

//Write a function sumArrays, that takes two arrays as parameters (you can assume of same
//length) then returns a new array by adding two array values at the corresponding indices.

function sumArrays(arr1, arr2) {
    arr1.length === arr2.length;
    //let sum = 0;
    let sumArr = []
    for (let i = 0; i < arr1.length; i++) {
        sumArr[i] = arr1[i] + arr2[i];

    }
    return sumArr;
}
//sumArrays([1, 2, 3], [1, 2, 3]);