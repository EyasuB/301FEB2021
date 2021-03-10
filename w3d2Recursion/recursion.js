exports.power = power;
exports.countDigits = countDigits;
exports.reverse = reverse;
/*
Write your own recursive logic for above problems.Do not use existing methods like reverse or length
property.
*/
/*
• calculate the power of any base
*/
function power(number, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return number;
    }
    else if (exponent < 0) {
        return 1 / (number * power(number, -exponent ));
    }
    else return number * power(number, exponent - 1);
}
console.log(power(6, -5));

/*
• count the digits of a given number

*/
/*This is the iterative and 
function countDigits(number) {
    let digitCounter = 0;

    while (number > 0) {
        number = (number - number % 10) / 10
        digitCounter++;
    }
    return digitCounter;

}

//console.log(numDigits(23489))
*/
function countDigits(number,i) {
    if (number / 10 != 0)
        return i + countDigits(number / 10, i);
    else if (number >= 0) return 1;
    else return 0;
}
countDigits();
/* reverse a given string.
This function is the iteration method of the function 
function reverse(str){
  let temp ='';
  for(let i=str.length-1;i>=0;i--){
    temp+=str[i];


  }
   return temp;

}
console.log(reverse('cbad'));

*/
function reverse(str) {
    //It's obvious that an empty string "" is itself "" when it returns so
    if (str === "") {
        return "";
    }
    else 
        // Let's access the firts index of the string using substring and that character 
       // str.charAt(0);
        //str.substr(1);
        return reverse((str.substr(1))) + str.charAt(0);
        // this will recursively call the reverse by taking each first element and returnig 
        // the last IN first OUT procedure of the stack

    
}
console.log(reverse('abcd'));



