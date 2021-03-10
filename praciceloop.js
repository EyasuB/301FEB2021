const prompt = require('prompt-sync')();
// print all the even number between 1 and 20
let num = 1;
while (num <= 20) {
    num++;
    if (num % 2 === 0) {
        console.log(num);
    }
}
for (let i = 0; i <= 20; i++){
    console.log(i);
}
/*Write a loop that keeps on prompting for age until you enter age
older than 18
• Write both while and do while versions.
*/
let age=0
do {
    age = prompt("Enter the age");
    console.log("the age you entered is " + age);
    age++
}
while (age < 18);

let requiredage = 0
while (requiredage < 18) {
    requiredage = prompt("Enter Valid age ")
    console.log(`The age is ${requiredage}`);
    requiredage++;
}
/*
Make a defining table and program to print out the balance of a
savings account that compounds interest monthly. Prompt the user
for the
• initial amount
• annual interest rate
• number of years to compound

*/

//console.log(`The amount of balance ${balanceowed = (Math.pow((1 + rateofInterest/12), timeowed))}`);

/*
input : initialAmount, AnnualInterest, numYears 
outPut:final balance, and monthly balance 
Process: 
-Divide annual rate to multiply rate 
- multiply years by 12 to get months 
-calculate interest for each month in a looop and add to current balance


*/
const initialAmount= Number(prompt("Enter the amount that is depoisted; "));
const AnnualInterest = +prompt('Enter the rating: ');
const numYears = +prompt("Enter the time: ");
let monthlyRate = AnnualInterest/12;
monthlyRate = monthlyRate/100;
const months= numYears*12;
let balanceowed = initialAmount;
for(let i=0; i<months; i++){
balanceowed = balanceowed + monthlyRate* balanceowed;
}
console.log(balanceowed);