'use strict'

// Write a JavaScript program that ask a user for a volume in quarts then converts that value in liters.
const prompt = require('prompt-sync')();
const volumeInQuarts = prompt("Enter the amount in Quarts>> ");
const volumeInliters = volumeInQuarts/1.05669;
console.log(`The amount you entered is ${volumeInQuarts} quarts. It will be ${volumeInliters} liters`);

//Write a JavaScript program that asks a user for a distance in kilometers and then convert that value in miles.
const distanceInKm = prompt("Enter the distance in km >> ");
const distanceInMiles = distanceInKm * 1.6;
console.log(`The distance you entered is ${distanceInKm} kms which is equal to ${distanceInMiles} miles`);

/*An employee at a grocery store must frequently place boxes of cans in stacks. Write a program
that allows him to enter the total number of boxes and the number of boxes he will place in
each stack. Your program must output the number of stacks he will have to make. All the stacks
except the last one must have the exact number of boxes that the employee specifies. The last
stack must have the exact number or fewer boxes. For example, if the employee enters 74 total
boxes and 6 boxes in each stack your program must output 13.
*/
const numberofBoxes = prompt("Enter the number of boxes: ");
const numberofBoxesInStack = prompt('Enter the number of boxes in a stack ');
const numberofStacks = Math.ceil(numberofBoxes / numberofBoxesInStack); 
console.log(`The Total nnumber of Stacks is ${numberofStacks}`);

/* Write JavaScript program to compute the mileage of a vehicle. Your program should allow the
user to enter the beginning and ending odometer readings and the number of gallons of gas
used and should output the mileage in miles per gallon.    */

let beginningOddoMeter = prompt('Enter the beginningReading: ');
let endOddoMeter = prompt("Enter the endingOddReading: ");
let numberofGallons = prompt("Please Enter the amount of gas used: ");
const milagePerGallon = (endOddoMeter - beginningOddoMeter) / numberofGallons;
console.log(`The exact amount of the car's mileage per gallon is ${parseFloat(milagePerGallon)}`);
/*When you exercise to strengthen your heart, you should maintain your heart rate within a
range. To find that range, subtract your age from 220. This difference is your maximum heart
rate per minute. Your heart simply will not beat faster than this maximum (220 − age). When
exercising to strengthen your heart, you should keep your heart rate between 65% and 85% of
your heart’s maximum. Write a JavaScript program that asks for a person’s age and computes
and outputs the slowest and fastest rates necessary to strengthen his heart.   */
const age = prompt("Please enter your age: ");
const maxHeartBeat = 220 - age;
const maxHeartrateInRange = .85 * maxHeartBeat;
const minHeartrateInRange = .65 * maxHeartBeat;
console.log(`Welcome to our fitness center. The maximum heart rate you should attain is ${Math.floor(maxHeartrateInRange)} and the minimum heart rate you should attain is
${Math.floor(minHeartrateInRange)} to strengthen your heart`);
