'use strict';
exports.isArrayEqual = isArrayEqual;
exports.reverse2String = reverse2String;
exports.isPalindrome = isPalindrome;
exports.enhancedIncludes = enhancedIncludes;
exports.mergeTwo = mergeTwo;
exports.ssReverse = ssReverse; 

/*
W2D5 ArrayMethods
Write code for the following exercises. Make sure your code works with the Mocha test file,
arrayMethodTests.js, which is in the Resources > assignments > Mocha test files folder.
1. Write a function, isArrayEqual, that returns true if two arrays have === elements, else false;

*/
/**
 * 
 * @param {Array} arrayOne 
 * @param {Array} arrayTwo 
 * @returns {Boolean} Based on the comparison of the two arrays it returns true or false 
 */
function isArrayEqual(arrayOne,arrayTwo){
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }
    for (let i = 0; i < arrayOne.length; i++){
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;

    }
isArrayEqual([1, 2, 3], [1, 2, 3]);

/*
2. Write a function that checks if an array is palindrome by using push and pop array methods to
reverse the array and then isArrayEqual method you wrote for 1.
*/
/**
 * 
 * @param {Array} arrayOne 
 * @param {Array} reversedArray 
 * @returns {Boolean} returns with True or false 
 */
function isPalindrome(arrayOne) {
    let movedArray = arrayOne.slice();
    let arrayTwo = reversedArray(arrayOne);
    //console.log(arrayTwo, arrayOne, movedArray);
    if (movedArray.length !== arrayTwo.length) {
        return false;
    }
    for (let i = 0; i < movedArray.length; i++) {
        if (movedArray[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
}

//console.log(isPalindrome(["r", "o", "t", "a", "t", "o", "r"]));

function reversedArray(arrayOne) {

    const reversedArray = [];
    for (let i = arrayOne.length - 1; i >= 0; i--) {
        reversedArray.push(arrayOne.pop());

    }
    return reversedArray;
}

/*
3. Write a function that transforms a given array as following. Use appropriate array methods.
Input (Array)
Output (String)
['Quick', 'Brown', 'Fox']
"Fox_Brown_Quick"
*/
/**
 * 
 * @param {Array} myArray 
 * @returns {Array} 
 */

function reverse2String(myArray) {

    let newArray = [];

    newArray = myArray.reverse().join('_');

    return newArray;
}



/*
4. Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and a
value to search in the array and return an array result with three values.
a. First value is boolean representing if the search value exists in the array.
b. Second value is the first index of value found in the array or -1
c. Third value is the last index of value found in the array or -1.
*/
/**
 * 
 * @param {Array} arr 
 * @param {Object} val 
 * @returns {Boolean, Number, Number }
 */
function enhancedIncludes(arr, val) {
    let arr2 = [];
    let index1 = arr.indexOf(val);
    let lastindex = arr.lastIndexOf(val);
    
    if (index1 != -1 && lastindex != -1) {
        arr2.push(index1 != -1);
        arr2.push(index1);
        arr2.push(lastindex);
        
        //index1 = arr.indexOf(val, index1 + 1); 
        return arr2;
    }
   
    else {
        arr2.push(false);
        arr2.push(-1);
        arr2.push(-1);
        return console.log(arr2);
    }
   
}
console.log(enhancedIncludes([1, 2, 3, 4,5,6], 6));
/*
5. Write a function that returns reversed copy of a given array (original array should
remain intact). Do this without using reverse method, instead use splice and slice
methods.
*/
/**
 * 
 * @param {Array} originalarr
 * @returns {Array} reveresed array 
 */
function ssReverse(originalarr) {
    originalarr.slice();
    let temp = originalarr.length;
    for (let i = 0; i <= originalarr.length; i++){
        originalarr.splice(i, 0, originalarr[temp - 1]);
        originalarr.splice(temp, 1);
    }
    return originalarr;
}
console.log(ssReverse([1,2,3]));
/*
6. (EC) Write a function that merges two sorted arrays into one single sorted array. Make use of
shift and push array methods. Hint: Be careful about using a destructive operation such as shift
on an array that is being iterated over. The array and its indices will be changed between
iterations
*/
function mergeTwo(arr1, arr2) {
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    let arr3 = [];
    arr3 = arr3.concat(arr1, arr2);
    arr3.sort();
    return arr3;
}
//console.log(mergeTwo([0, 3, 1, 2], [4, 6, 8, 7]));


