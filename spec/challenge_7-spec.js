// import challenge 7
var PrimeFinder = require("../challenge_7").PrimeFinder;

// describe the class PrimeFinder
describe("The last prime number", function () {

// write your tests here

    it("for the first 10 natural numbers is XXX", function () {
        var lastPrime = new PrimeFinder(10);
        expect( lastPrime.getPrimeNumber() ).toEqual(7);
    });

    it("for the first 10,001 natural numbers is XXX", function () {
        var lastPrime = new PrimeFinder(10001);
        expect( lastPrime.getPrimeNumber() ).toEqual(9973);
    });

});