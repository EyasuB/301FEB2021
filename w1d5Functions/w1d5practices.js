'use strict'
const prompt = require("prompt-sync")();
/*
@param { number } number is any integer 
@returns {boolean} true or false 
*/
function isPrime(num) {
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        } 
    }
  return true
}
console.log(isPrime(7));




let inputNum = prompt("Enter the number: ");
let sum = 0;
for (let i = 0; i <= inputNum; i++){
    if (inputNum % i === 0) {
        sum += i;

    }
    if (inputNum === sum) {
        true;
    }
    else false;
}

// Number Guesser 
// Input: The number the user enters 
// specific PINs
//output: Responses based on attempts and number of guesses 
// process 
//1. Prompt the Number of Guess 
//2. Then compare the guesses with the actual PIN
//3. IF the attempt is in the first tr

// let guessedNumber = +prompt("Enter your guess: ");
// let pinCode = 1234;
// let attempt = 10;
// for (let i = 1; i <= attempt; i++){
//     if (i === 1 && guessedNumber === pinCode) {
//         console.log("Lucky on first try");
//         break;
//     } else if (i === 2 && guessedNumber === pinCode) {
//         console.log('Got it on Second try');
//         break;
//     } else {
//         console.log("you got the correct after " + i + " attempts");
//     }

// }

// do {

//     
//      attempt++;
   
// } while (attempt <= 0);
//if (attempt === 1 && guessedNumber === pinCode) {
//         console.log("Lucky");
//         break;
//     } else if (attempt === 2 && guessedNumber === pinCode) {
//         console.log('Got it on Second try');
//         break;
//     } else {
//         console.log("you got the correct after " + attempt + " attempts");
//     }
let pinCode=1234;
let guess;
let userAttempt=0;
do{ 
guess= +prompt("Enter the guess: ");
userAttempt++;
} while(guess!==pinCode);

if (userAttempt === 1) {
    console.log("Awosome");
} else if (userAttempt === 2) {
    console.log("Great");
} else if (userAttempt === 3) {
    console.log("Not bad");
} else {
    console.log(`it looks you have attempted ${userAttempt} times`);
}

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
