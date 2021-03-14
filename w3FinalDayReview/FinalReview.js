/*
Write a JavaScript function isSumOfPrimesEven that takes an array of positive integers
as an argument and returns true if the sum of all the prime elements in the given array is
even otherwise returns false. If the array is empty or if the array does not contain any
prime element it should return false
*/
function isSumOfPrimesEven(arr) {
    let sum = 0;
     for (let i = arr.length - 1; i >= 2; i--) {
         if (arr[i] % i !== 0 && arr[i]>=2) {
if (i !== 0 && i !== 1) {
                sum += arr[i];
             }
}
    }
    if (sum % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isSumOfPrimesEven([1, 2, 3, 4, 5, 6, 7, 12]));
/*
An array is called a perfectly odd array if every element at the odd indices of the array is
also odd. Write a function named isPerfectlyOdd that takes an array of integers as a
parameter and checks whether it is perfectly odd. Return false if the array is an empty array.

*/

function isPerfectlyOdd(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i += 2) {
        sum += arr[i];

    }
    if (sum % 2 !== 0) {
        return true;
    }
    return false;

}
console.log(isPerfectlyOdd([2, 3, 4, 5, 7, 3]));

/*
Write a function that given an array of integers returns the sum of elements at the prime
indices. For e.g. for an array [1,5,6,7,8,3] result would be a sum of 6+7+3=16 which are values
at the prime indices of the array.

*/
function sumOfPrimeIndeces(arr) {
    let sum = 0;
    let i = 2;

    for (; i <= arr.length - 1; i++) {
        if (iPrime(i)) {
            sum += arr[i];
        }
        else continue;
    }
    return sum;
}
console.log(sumOfPrimeIndeces([1, 5, 6, 7, 8, 3]));


function iPrime(i) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0 && i > 2) {
            return false;

        }

    }
    return true;

}
console.log(iPrime(13));


/*
Write a function that takes a string parameter and returns the middle character of the
string. If string is of even length then function should return the middle two characters
*/
function getMiddle(str) {
    //let val = 0;
    let arr = str.split('');
    let newArr = [];
    //console.log(arr);
    for (let i = 0; i <= arr.length; i++) {
        if (arr.length % 2 === 0) {
            newArr.push(arr[arr.length / 2] + arr[(arr.length / 2) - 1]);
            break;

        }
        if (arr.length % 2 !== 0) {
            newArr.push(arr[Math.floor(arr.length / 2)]);
            break

        }
    }
    return newArr.toString();
}
console.log(getMiddle('abcdefg'));


/*
Write a function isSumEqual that takes two array parameters and returns true if the
sum of elements in both arrays are equal.
*/
function isSumEqual(arr1, arr2) {
    sum1 = 0;
    sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
    }
    if (sum1 === sum2) {
        return true;
    }
    return true;
}
console.log(isSumEqual([1, 2, 3], [1, 2, 3]));

//6. output =10;
//7.output 5;