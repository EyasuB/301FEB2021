const prompt = require('prompt-sync')();
// //Question 1
// const  x = 5;
// console.log(x);
// if(x==5){
// 	let y = 2*x;
// 	console.log(y);

// 	console.log(x); 
// }

// console.log(x); 
// console.log(y); 

// //Question 2
// let x;
// if(!x) {
//     const y=5
// };
// console.log(y);

// let x;
// if(!x) {
//     const y=5
// };
// console.log(y);

/*
3.	Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
Leap year definition: Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400.
E.g., leap years: 2016, 2000
E.g., not leap years: 1700, 1800, 100

Input 	Process 	Output 
Year 	Condition for leap year 	Confirming if it is leap year or not
		

*/
let SomeYear = Number(prompt("Enter the year please: "));
if (SomeYear % 4 === 0 && SomeYear % 400 === 0) {
    if (SomeYear % 100 !==0) {
        console.log('This is a Leap Year');
    } else {
        console.log("Nop");
    }
} else {
    console.log("Not LY");
}