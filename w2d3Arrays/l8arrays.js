"use strict";
exports.addends = addends; 
exports.getMiddle = getMiddle;
exports.rotateRight = rotateRight;
exports.rotateLeft = rotateLeft;
//exports.fmrString = fmrString;
exports.rotateNRight = rotateNRight;
/*
Write a function addend(arr) that accepts an array of numbers as parameters and returns the
sum of firs and last elements of the array.

*/
/**
 * 
 * @param {array } arr
 * @returns {number} this returns the sum of the first and last  
 */
function addends(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++)
        
    sum = arr[0] + arr[arr.length - 1];
    return sum; 

}

/*
Write a function named getMiddle that returns the value of the middle element in an array. If
the array has an even number of elements, then this function must return the average of the
two middle elements.
*/
/**
 * 
 * @param {Array} arr The function accepts an array 
 * @param {returns} number The return value is a number based on the condition 
 */
function getMiddle(arr) {
    let val = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr.length % 2 === 0) {
            val = (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;

        }
        if (arr.length % 2 !== 0) {
            val = arr[Math.floor(arr.length / 2)];

        }
    }
    return val;
}
console.log(getMiddle([1, 2, 3, 4, 5]));

//Write a function to rotate the elements in an array to the left by 1.
/**
 * 
 * @param {Array } arr  is a given array
 * @returns {Array} is array that is shifted to the left 
 */
function rotateLeft(arr) {

    let arr2 = [];

    for (let i = arr.length - 1; i >= 0; i--) {

        if (arr.length - i === arr.length) {
            arr2.push(arr[0]);
    
        } else {

            arr2.push(arr[(arr.length) - i]);
        }

    }

    return arr2 ;
}
/**
 * 
 * @param {Array} arr is a given array
 * @returns {Array} arr2 which is shifted to the right  
 */

function rotateRight(arr) {

    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            arr2.push(arr[arr.length - 1]);

        } else {
           arr2.push(arr[i - 1]);
        }
    }
    return arr2
}
/*

Modify rotate functions to rotate array by n times where, n is the second parameter passed in
the function (optional).
*/
/**
 * 
 * @param {Array} array 
 * @param {Number} stepsToShift 
 * @returns {Array} this is a new array shifted n steps to the right 
 */
function rotateNRight(array, stepsToShift) {

    for (var i = 0; i < stepsToShift; i++) {
        array.unshift(array.pop());
    }

    return array;
}



/* 6.    Write a JavaScript function that takes a string of  numbers as comma separated values, e.g, “32, 105,  -22”,  and stores it into an array, e.g., [32, 105, -22] and do following operations
a.    Filters out negative values
b.    Maps the filtered elements to sum of its digits--i.e., 32 becomes 5 and 105 becomes 6
c.    Reduce to get sum of all the elements and returns this value--i.e, add the 5 and 6 to get 11
*/
//let str = '1,2,4';
/**
 * 
 * @param {String} str 
 * @returns {Array} arr3
 */
/*
function fmrString(str) {
    
    let arr3 = [];
    str = str.split(',');
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        if (parseFloat(str[i]) >= 0) {
            arr3.push(parseFloat(str[i]));
        }
    }
    
    return console.log(arr3);  
    
}
fmrString();
*/