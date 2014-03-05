// import challenge 7
var LastPrime = require("../challenge_7").LastPrime;

// describe the class PrimeFinder
describe("The last prime number", function () {

// write your tests here

    it("for the first 10 natural numbers is XXX", function () {
        var primeLast = new LastPrime(10);
        expect( primeLast.lastPrimeNumber() ).toEqual(7);
    });

    it("for the first 10,001 natural numbers is XXX", function () {
        var primeLast = new LastPrime(10001);
        expect( primeLast.lastPrimeNumber() ).toEqual(-1);
    });

});