// import challenge 7
var PrimeFinder = require("../challenge_7").PrimeFinder;

// describe the class PrimeFinder
describe("The nth prime number", function () {

// write your tests here

    it("at n=10 is 31", function () {
        var lastPrime = new PrimeFinder(10);
        expect( lastPrime.getPrimeNumber() ).toEqual(29);
    });

    it("for the first 10,001 natural numbers is XXX", function () {
        var lastPrime = new PrimeFinder(10001);
        expect( lastPrime.getPrimeNumber() ).toEqual(104743);
    });

});