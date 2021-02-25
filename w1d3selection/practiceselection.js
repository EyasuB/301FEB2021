"use strict"
const prompt = require('prompt-sync')();

/*
const weather = prompt("please enter the weather today: ");
if (weather === 'rainy') {
    console.log("Get an umbrella");

} else {
    console.log('Enjoy a nice day');
}
*/
// Write a program that takes a nummber between 1 and 10. If the user chooses 7 then print "Bingo";
/*
const userChoice = +prompt("Please enter your choice: "); // means Number(prompt("Please eneter your choice: "));
// userChoice = Number(userChoice);
if (userChoice === 7) {
    console.log("Bingo");
} else {
    console.log("Try again")
}
*/
/*
Write a program that accepts user age as input and output following
based on the input
• If age <= 0
• print "please enter valid age"
• if age is between 0 and 14
• print "You can't drive yet."
• if age is between 15 and 18
• print "You can drive under supervision."
• if age is 19 or higher
• print "You can drive."
*/
const age = Number(prompt("Please enter your age: "));
if (age <= 0) {
    console.log("Please enter a valid age.");

} else if (age <=14) {
    console.log("You can't drive yet.");
} else if (age < 18) {
    console.log("You can drive under supervision");
} else {
    console.log("You can drive");
}
//Write a program that asks a user to enter number between 1 and 5 and prints out how it is spelled 

const num = Number(prompt("Enter Num "));
switch (num) {
    case 1:
        console.log("one")
        break;
    case 2:
        console.log("two")
        break;
    case 3:
        console.log("Three");
        break;
    default:
        console.log('Try again');
}
/*
Write a program to compute sales commission based on following
rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (exclusive)
• 2% for sales above $500
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (exclusive)
• 3% for sales above $500
*/
const sales = +prompt("Enter the sales : ");
let salaried = prompt("Is this salaried? Yes or No")
if (salaried==="Yes") {
    if (sales < 300) {
        console.log(`No commision`);
    } else if (sales < 500) {
        console.log(`1 percent commission: ${sales * .01}`);
    } else {
        console.log(`2 percent commision: ${sales * .02}`);
        
    }
        }
