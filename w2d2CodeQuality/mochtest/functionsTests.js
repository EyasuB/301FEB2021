"use strict";

const fun = require("./functions.js");
const assert = require("assert");

/* 1a.	Write a function named checkPrime that accepts a parameter and returns true if the argument is a prime number otherwise returns false. */
describe("checkPrime", function () {

    it("37 is prime", function () {
        assert.strictEqual(fun.checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(fun.checkPrime(77), false);
    });
});

describe("areaOfCircle", function () {

    it("area of unit circle is Pi", function () {
        assert.strictEqual(fun.areaOfCircle(1), Math.PI * 1);
    });

});
describe("volume of a Cylinder", () => {
    
    it("unit volume of a cylinder is", () => {
        assert.strictEqual(fun.volumeOfaCylinder(1, 1), Math.PI * Math.pow(1, 2) * 1);
    });
});


describe("Calculates greatest common divisor of two nums", () => {
    it("the greatest common divisor of 6 & 8 is", () => {
        assert.strictEqual(fun.greatestCommonDivisor(6, 8), 2);
    });
});


describe('Calculate the least common multiple of two numbers', () => {
    it('The least common multiplier of 6 & 8 is', () => {
        assert.strictEqual(fun.leastCommonMultiple(6, 8), 24)
    });
});