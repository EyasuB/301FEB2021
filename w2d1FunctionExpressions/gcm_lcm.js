/*
1 Write a function expression and assign it to the variable
greatestCommonDivisor, which will compute GCD (Greatest Common Divisor) of two
numbers. GCD is the largest number that divides both. For example GCD of 20 and 28 is 4 and
GCD of 98 and 56 is 14.
*/

//input two numbers 
//output the greatest common multiplier of two the two numbers 
// process: Using Eculidean algorithm for gcm which states 
//"The greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number"
 // this algorithm helps us to reduce the bigger number until the numbers become equal and their remainder 0
const greatestCommonDivisor = function (number1, number2) {
    if (number2 === 0) {
        return number1;
    }
    else {
        return greatestCommonDivisor(number2, number1 % number2);
    }
}
greatestCommonDivisor(6,24);


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



const lcm = function (number1,number2) {
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
/*
 Write a function compute, that takes three parameters. First parameter is a call back
function that does the actual operation, second and third are the operands.

*/

const compute=(add, a, b)=>{
    return add(a, b);
}

let add = (a,b) => {
   return a + b;
}
console.log(compute(add,2,2));