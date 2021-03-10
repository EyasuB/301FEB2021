"use strict";
exports.addends = addends; 
exports.getMiddle = getMiddle;
exports.rotateRight = rotateRight;
exports.rotateLeft = rotateLeft;
exports.fmrString = fmrString;
exports.rotateNRight = rotateNRight;
exports.matrixAddition = matrixAddition;
exports.filterRange = filterRange;
exports.filterPalindromes = filterPalindromes;
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
 * @returns {Array} array2 this is a new array shifted n steps to the right 
 */
function rotateNRight(array, stepsToShift) {

    for (let i = 0; i < stepsToShift; i++) {
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
 * @param {String} str 
 * @returns {Array} arr3
* @returns {Number } filtered is a number 
 */

function fmrString(str) {

    let myString = "32, 105,  -22";

let newArray = myString.split(',').map(Number); // one of the coolest mewthods that I learned 
console.log(newArray);
let filtered = newArray.filter(function (value, index, arr) {
    return value >= 0
});
    console.log(filtered.map(Number).reduce(function (a, b) {
        return a + b;
    }, 0));
// let reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(filtered.reduce(reducer));

}







// Levi's solutions and Please look to it to solve using memory saving method. 
/* 7.	Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array. 



*/
function filterRange(arr, a, b) {
    let filteredarr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= a)
            if (arr[i] <= b) {
                filteredarr.push(arr[i]);
            }
    }
    return filteredarr; 
}

/* 8.	Write a function that takes an array of strings and returns array of palindrome strings only. 
Input: An array 
Output: palindrome string 
Process: What is palindrome string? A string that reads the same both forward and backward Eg. 'dad',' aibohphobia' 


*/
/**
 * 
 * @param {Array} arrayPro 
 * @returns {Array} arr2 Returns an array of palindrome strings only 
 */
function filterPalindromes(arrayPro) {
    //let arrayPro = ['dad', 'bad', 'sas', 'money', 'lol', 'saas',];
    let arr2 = [];
    for (let i = 0; i < arrayPro.length; i++) {
        if (arrayPro[i] === arrayPro[i].split("").reverse().join("")) {
            arr2.push(arrayPro[i]);
        }
    }
    return arr2;
}


/*
9.  /* Do matrix addition and print result on matrix format for following:
[[0,1,2],[9,8,7]] and [[6,5,4], [3,4,5]]  should be [ [ 6, 6, 6 ], [ 12, 12, 12 ] ]
*/

/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Array}
 */
function matrixAddition(arr1, arr2) {
    let arrNew = []
    for (let i = 0; i < arr1.length; i++) {
        let arrSmallNew = [];

        for (let j = 0; j < arr1[i].length; j++) {
            let sum = 0;
            console.log(arr1[i][j], arr2[i][j]);
            sum = arr1[i][j] + arr2[i][j];
            arrSmallNew.push(sum);
        }
        arrNew.push(arrSmallNew)

    }
    return arrNew;
}
