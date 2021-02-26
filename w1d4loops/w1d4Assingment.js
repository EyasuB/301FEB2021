'use strict'
const prompt = require('prompt-sync')();
/*
A prime number (or a prime) is a natural number greater than 1 that is not a product of two
smaller natural numbers. In other words, it is a number that is only perfectly divisible by number
1 and itself. Write a JavaScript program to test weather user input is a prime number or not.
a. Your logic should be based on factor count. i.e., prime number will have 0 factors (not
counting 1 and itself), while composite will have 1 or more factors.
b. This time think of a logic to use break statement so that you can break early from the
loop, right when you know number is not prime. For example, you know number 8 is not
prime right on the first loop because it is perfectly divisible by 2 itself, that's why further
testing is not required. If the number is prime loop will proceed until the end.
*/
//Solution 
//input -Any number 
//process= check if the number is divisible only by one and itself 
//output- True or False and the number of factors if the number is not prime 
let number = prompt("Enter the number: ");
let numbfactor = 0;
for (let i = 2; i < number; i++){
    if (number % i == 0) {
    numbfactor++;
    }
    
}
let isPrime = numbfactor === 0;
console.log(isPrime, "number of Factor: ", numbfactor);
//uing while Loop with break
let number2 = prompt("Enter the number please: ");
let isPrime2 = false;
let i = 2;
while (isPrime2 ===true) {
    if (number % i === 0) {
        isPrime2 === false;
        break;

    }
    i++;
}
console.log(isPrime2);
/*
. Write a JavaScript program to calculate the factorial value of a given number. E.g., factorial 4 =
4*3*2*1 = 24
*/
let Numb = prompt("Enter the number please");
let factorial;
if (Numb === 0 || Numb === 1) {
    console.log(1)
} else{
    for (let j = Numb-1 ; j >= 1; j--) {
        Numb *= j;
      factorial = Numb;
    }
console.log(factorial);
}
/*
Write a JavaScript program that gives the user three tries to guess the correct pin of the
account. You set the pin as a constant. When correct display “Correct, welcome back.” When
incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
locked out.
*/
//Solution
/*
input= constant PIN
OutPut- A welcome message if correct PIN or prompts is incorrect PIN  
Process: 1. Prompts a PIN
2. If Correct is given === "Correct Welcome back"
3. If not correct prompts for three times wih a message "Incorrect, try again"
4. When run out of trials "sorry but you have been locked out"


*/
let trialCodes = Number(prompt("Enter PIN code: "));
const correctPIN = 1234

let trialcount = 0;
while (trialcount < 4) {
    if (trialCodes === correctPIN) {
        console.log("Correct Welcome back");
        break;
    } else if (trialCodes !== correctPIN){
        console.log("Incorrect, try again");
        break;
    } 
    trialcount++;
}
trialcount++;
console.log("sorry but you have been locked out");
/*
Write a defining table and JavaScript program to Display Fibonacci series up to N terms. N
being positive integer from user input.
The Fibonacci series is a sequence such that each number is the sum of the two preceding ones,
starting from 0 and 1. That is, fib(0) = 0, fib(1) = 1, fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
*/
let numb = prompt("Enter the number");
let num1 = 1;
let num2 = 0;
let temporaryStorage;
while (numb >= 0) {
    temporaryStorage = num1;
    num1 = num1 + num2;
    num2 = temporaryStorage;
    num--;
}
console.log(num2);
/*
Write a JavaScript program to compute sum of all the digits in a given integer number.
input      output 
123         6
102        3
8           8
*/
let givenNum = prompt("Enter the number: ");




for (let i = 1; i < 5; i++){
    for (let j = 1; j <= i; j++){
        console.log(j);
    }
}