"use strict";

exports.checkPrime = checkPrime;
exports.areaOfCircle = areaOfCircle;
exports.volumeOfaCylinder = volumeOfaCylinder;

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