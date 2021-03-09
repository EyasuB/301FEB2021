"use strict";
const assert = require("assert");
const rev = require("./arraysReview.js");

/*
2.	Write a function findMin that takes an array as a parameter and returns the minimum value. 
Use a for .. of loop.  
*/
describe("find minimum", function () {
    const arr = [7, 10, 3, 88, 4];
    it("find 3", function () {
        assert.deepStrictEqual(rev.findMin(arr), 3);
    });
});

/*
3.	Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum of values on the odd indices.  
*/
describe("find the summ of elements with odd indices of the arrays", function () {
    const arr = [1, 3, 4, 6, 4, 7, 2];
    it(" Expect 16", function () {
        assert.strictEqual(rev.sumOddIndicesValues(arr), 16);
    });
});

/*
4.	Write a function sumArrays, that takes two arrays as parameters (you can assume of same length) then returns a 
new array by adding two array values at the corresponding indices. 
*/
describe("This returns the sum of elements of two arrays", () => {
    it("should return the sum", () => {
        //set up
        const expected1 = [1, 2, 3];
        const expected2 = [3, 2, 1];

        //Excercise 
        const result = [4, 4, 4];
        //Verify 
        assert.strictEqual(rev.sumArrays(expected1, expected2), result);
    });
})