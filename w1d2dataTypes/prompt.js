"use strict";
const prompt = require('prompt-sync')();
/*

let tempInCelsius = prompt("Enter value in celsius ");
let tempInFahrenheit = parseFloat(tempInCelsius * 9 / 5 + 32);
console.log(`The converted ${tempInCelsius} is ${tempInFahrenheit}`);
// Thisis the reverse convversion from Cel to F
let tempInFahrenheit2 = prompt("Enter Value in Fahrenheit ");
let tempInCelsius2 = parseFloat(5/9  * (tempInFahrenheit2 - 32));

console.log(`The converted ${tempInFahrenheit2} is ${tempInCelsius2}`);

let radius = prompt('Enter the Radius: ');
let height = prompt('Enter the height please: ');
let volume = height * Math.pow(radius,2)*Math.PI;
console.log(`${parseInt(volume)}`);
*/
// Distance between two points 
const xPoint1 = prompt("Enter x1 coordinates: ");
const xPoint2 = prompt("Enter x2 coordinates: ");
const yPoint1 = prompt("Enter y1 coordinates: ")
const yPoint2 = prompt("Enter y2 coordinates: ");

const xdis = Math.abs(xPoint1 - xPoint2);
const ydis = Math.abs(yPoint1 - yPoint2);
const sumSquares = Math.pow(xdis,2)+ Math.pow(ydis,2);
const distance = Math.sqrt(sumSquares);
console.log(`The distance between points is ${distance}`);