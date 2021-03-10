"use strict";

exports.checkPrime = checkPrime;
exports.areaOfCircle = areaOfCircle;
exports.volumeOfaCylinder = volumeOfaCylinder;
exports.greatestCommonDivisor = greatestCommonDivisor;
exports.leastCommonMultiple = leastCommonMultiple;

/**
 * 
 * @param {number} num is an integer
 * @returns {boolean} true if number is prime, else false
 * Prime numbers are numbers that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are 2, 3, 5, 7, and 11.
 */
function checkPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;

}

/**
 * 
 * @param {number} r is an a number
 * @returns {number} area is a number 
 * The area of a circle is PI*Math.pow(r,2);
 */
function areaOfCircle(r,area) {
    area = Math.PI * Math.pow(r,2);

    return area;
        
}   

/**
 * @param {number} h is a number 
 * @param {number} r is a number 
 * @returns {number} volume is a number 
 * The volume of a cylinder is a number and volume equals Math.PI*Math.pow(r,2)*h
 */
function volumeOfaCylinder(r, h, volume) {
    
    volume = Math.PI * Math.pow(r, 2) * h;
    
    return volume; 
}        


// now the triangle area 


/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number} 
 */

function greatestCommonDivisor(number1, number2) {
    if (number2 === 0) {
        return number1;
    }
    else {
        return greatestCommonDivisor(number2, number1 % number2);
    }
}
//greatestCommonDivisor(6, 24);
/**
 * 
 *@param {number} number 1 is expected to be an integer 
 *@param {number} number2 is also an integer
 *@returns {number} This returns the least common multiple of two numbers 

 */

function leastCommonMultiple(number1, number2) {
    let min = Math.min(number1, number2)
    while (min >= 2) {
        if (number1 % min === 0 && number2 % min === 0) {
            return (number1 * number2) / min;

        };
        min--;
    };
    return (number1 * number2)
}