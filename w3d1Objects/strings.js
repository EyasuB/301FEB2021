"use strict";
exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.suffix = suffix;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;
exports.titleCase = titleCase;


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

    let sbsrt = ""
    //let counter = str1.lastIndexOf(str1.length - 1, i);
    for (let i = str1.length - 1; i >= 0; i--) {

        for (let j = str2.length - 1; j >= 0; j--) {
            if (str1.slice(i) === str2.slice(j)) {

                sbsrt = sbsrt + str1[i];

                break;
            }

        }
    }



    return sbsrt.split("").reverse().join("");

}
//console.log(suffix('Jackson', 'Crimson'));

// 6.	Write a function named titleCase with one parameter named s. This function 
// returns a copy of s but with the first letter of each word capitalized.

function titleCase(s) {
    
    // Let's first get the first letter of the string s
//then change it to upper case 
    s.charAt(0).toUpperCase();
    //then the rest of the string after slicing of the first character 
    s.slice(1);
    // Then let's concat them 
    s = s.charAt(0).toUpperCase() + s.slice(1);

return s; 
}

/*
7.	Write the function getAverageAge(users) that gets an array of objects with two properties name and age and returns the average age.
Use for .. of
*/
function getAverageAge(users) {
    let average = 0;
    let sum = 0;
    for (let key of users) {
        sum += key.age;
        console.log(sum);
    }
    average = sum / users.length;
    return average;
}
//getAverageAge();

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
return sum;


}