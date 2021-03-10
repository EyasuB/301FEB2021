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




