/*
 Write a function compute, that takes three parameters. First parameter is a call back
function that does the actual operation, second and third are the operands.

*/
//console.log(add());        We can't call the function before intiation in function expression 
//means if we use let add = (a,b)=>{
//return a + b; 
//};
//but if we change it to functions declaration, we can use it anywhere
console.log(add(100, 100));
const compute=(callback, a, b)=>{
    return add(a, b);
}

function add(a,b){
   return a + b;
}
console.log(compute(add, 2, 7));

