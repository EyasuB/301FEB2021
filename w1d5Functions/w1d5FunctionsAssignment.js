"use strict"
const prompt = require('prompt-sync')();
//1.  checkPrime
/*
a. Write a function named checkPrime that accepts a parameter and returns true if the
argument is a prime number otherwise returns false.*/
// Input: Any Number greater than 1 
//Output: True or False 
// Process; Create the function, Inside the function block, use a forloop that runs from 2 to Num, then check if the remainder of the number divided by i is 0
//If it is Zero, Is should return true Else It should inform user False 

function checkPrime(num) {
    //testedNum = 2;
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
checkPrime();
/*
b. Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not.
*/
//Let's attach the function to the prompt 
let testedNum = prompt("Enter a number please: ");
function checkPrime(testedNum) {
    //testedNum = 2;
    for (let i = 2; i < testedNum; i++){
        if (testedNum % i === 0) {
            return false + ` ${testedNum} is not prime number.`;
        }
    }
    return true + ` ${testedNum} is a prime number.`;
}
console.log(checkPrime(testedNum));

/*
volumeOfCylinder
a. Write a function, areaOfCircle, that computes and returns area of a circle based on the
value of input radius.
*/
//Input radius of a circle, PI
//Output: Area of a circle 

function areaOfCircle(radius = +prompt("Enter Radius: ")) {
    let area = 0;
    return area = Math.pow(radius,2) * Math.PI;
}
console.log(areaOfCircle());

/*
b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use
of the areaOfCircle function.
*/
let calculatedArea = areaOfCircle();
console.log(calculatedArea);
function volumeOfCylinder(h = +prompt("Enter the height of the cylnder: ")) {
    //let h = 0;
    let volume;
    return volume = h * calculatedArea; 
}
console.log(volumeOfCylinder());
/*
c. Write code to call and test your function.
*/
/*
Write a program that calculates the total volume of a house, including the volume of the roof
space. Your program must allow the user to enter width, depth, height and sweep as shown in
figure below. Write code to call and test your function.

*/
//Input: Height, width, depth and sweap,
//output: Volume of the house 
//process 1) First the Volume of the house is equla to volume of living plus volume of rooftop
//volume of living = w*h*d
//rooftopvolume = triangle Area* depth
//triangleArea = sqrt((s-b)(s-b)(s-c)
//s=(a+b+c)/2;
// let a = +prompt("enter a: ");
// let b = +prompt("enter b: ");
// let c= +prompt("enter c: ");
function triangleArea(a = +prompt("enter a: "), b = +prompt("enter b: "), c = +prompt("enter c: ")) {
    let s = (a + b + c) / 2;
   let areaRoof = 0;
    areaRoof = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return  areaRoof;

    
}


// now the triangle area 
let areaOfTrinagleCalculated = triangleArea();// to use it as an argument
let depth = +prompt("Enter the depth ")
function rooftopvolume() {
   
    return depth * areaOfTrinagleCalculated;
}

// Volume of living 
let width = +prompt("Enter the Width: ");
let height = +prompt("Enter the height: ");
function volumeOfLiving() {
    return width * height * depth;
}


/// Finally the volume of the house is 
let volumeOfRoof = rooftopvolume(depth,areaOfTrinagleCalculated);
let volumeOfLivingArea = volumeOfLiving(height, depth, width);

function volumeOfHouse() {
    return volumeOfLivingArea + volumeOfRoof;
}

console.log(`The traingle area is ${triangleArea()}`);
console.log(`The roofVolume is ${rooftopvolume(depth, areaOfTrinagleCalculated)}`);
console.log(`The living volume is ${volumeOfLiving(height, depth, width)}`);
console.log(`The total volume is ${volumeOfHouse(volumeOfLivingArea, volumeOfRoof)}`);

// This is a tested and sworking code 