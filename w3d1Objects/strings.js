"use strict";
exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.sumFirst = sumFirst;


/*
Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
It can assume that the only properties it needs to check are name and age.
*/
/**
 * 
 * @param {Object} obj1 
 * @param {Object} obj2 
 * @returns {Boolean} Return True or flase 
 */
function isPersonEqual(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true;
    }
    else return false 
}
//isPersonEqual();

//Write the function countProperties(obj) which returns number of properties of an object.
function countProperties(obj) {

    let counter= 0;

    for (const key in obj) {
        counter++;
    }

    return counter;
}
//countProperties();
/*
4.	Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize", otherwise return false.
*/
function checkSpam(str) {
    if (str.includes("lottery") || str.includes("prize")) {
        return true
    }
    else return false; 
}
console.log(checkSpam('lerym'));
/*
Write a function named suffix that returns the common suffix of two strings.For example, the common suffix of “swimming”
and “walking” is “ing”.This function takes two parameters and returns the common suffix.
*/
function suffix(str1, str2) {
    for (let i = str1.length - 1; i >= 0,i--) {
        for (let i = str2.lenth - 1; j >= 0;j--){
            if (lastIndexOf(sbstr, i) === (lastIndexOf(sbstr, j))) {
                return sbstr;
            } else {
                return sbstr;
            }
        }
    }
}
suffix();

// 6.	Write a function named titleCase with one parameter named s. This function 
// returns a copy of s but with the first letter of each word capitalized.

function titleCase() {
    let s = 'abc';
    //for (let i = 0; i < s.length; i++){
        //  s[0].toUpperCase();
    //}
    s.slice();
    console.log(s);

    return s; 
}
titleCase('abc');
/*
7.	Write the function getAverageAge(users) that gets an array of objects with two properties name and age and returns the average age.
Use for .. of
*/


/* 8.	Write a function, sumFirst, to return the sum of the first elements of the inner arrays for arrays with the following structure.
Use a for .. of loop.
arr = [[1, 2], [3, 4], [5, 6]]
*/
function sumFirst(arr) {
   // arr = [[1, 2], [3, 4], [5, 6]];
    let sum = 0;
    for (let key of arr) {
        sum += key[0];

    }
    console.log(sum);


}