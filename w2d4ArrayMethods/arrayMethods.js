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
 * @param {Array} arrayOne This is the first array to be compared 
 * @param {Array} arrayTwo This is the second array that is compared for equality against the fitst array 
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
 * @param {Array} arrayOne This is the original array that we want to check if it is palindrome 
 * @param {Array} reversedArray This is the reversed array of the first. 
 * @returns {Boolean} returns True if the array is palindrome and false otherwise 
 */
function isPalindrome(arrayOne) {
    let movedArray = arrayOne.slice();// to copy the original reveresed array. 
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
 * @param {Array} myArray This is the array that we want to transform
 * @returns {Array} This is the array that we transformed using the _. 
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
 * @param {Array} arr This is the array that contains elements 
 * @param {Object} val This is the value that the arrray contains. It could be a number, a string, an object or other data type 
 * @returns {Array} The returned an array with values boolean, the first index of the element if found and the last element of the array if found */
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
//console.log(enhancedIncludes([1, 2, 3, 4,5,6], 6));
/*
5. Write a function that returns reversed copy of a given array (original array should
remain intact). Do this without using reverse method, instead use splice and slice
methods.
*/
/**
 * 
 * @param {Array} originalarr This is the original array that we want to reverse with the methods 
 * @returns {Array} reveresed array is the reversed array with the methods of splics and slice. 
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
/**
 * 
 * @param {Array} arr1 The first unsorted array that we need to merge 
 * @param {Array} arr2 The second unsorted array that we need to merge
 * @returns {Array} Merged and sorted array 
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


