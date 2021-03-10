/*
Write a function expression to find LCM of any two numbers using the
greatestCommonDivisor function from previous question. Assign it to the variable
leastCommonMultiple. LCM of two numbers is the smallest number that can be
divided evenly by both numbers. Write it as a function expression.

*/
//Input : Two numbers 
// output: The lcm of the two numbers 
//process:1 We take the minimum of the two numbers 2) The minimum of the numbers will then be used to divide both numbers and if the remainder when it's devided 
//by each is zero we will retrun a*b/min
// else a*b 
//We loop it decrmenting 



function leastCommonMultiple(number1,number2) {
    let min = Math.min(number1, number2) 
    while (min >= 2) {
        if (number1 % min === 0 && number2 % min === 0) {
            return (number1 * number2) / min;
        
        };
        min--;
    };
    return (number1*number2)
}



/*
Now write a new version of leastCommonMultiple that uses the
greatestCommonDivisor function and the mathematical relationship between LCM
and GCD to find the LCM. Research the LCM and GCD relationship online.

*/

const leastCommonMultiple = function (a,b) {
    return (a * b) /greatestCommonDivisor(a,b);
}
console.log(greatestCommonDivisor(6, 31));
console.log(lcm(12,18));
console.log(leastCommonMultiple(12, 32));