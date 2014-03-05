/*  PrimeFinder(n)
 *
 *  @param n        the nth prime number to find
 *
 *  @returns the nth prime number
 */

// do work here

exports.PrimeFinder = PrimeFinder;

function PrimeFinder(n){
  this.n = n;

  this.getPrimeNumber = function() {
    var prime = 0;
    var isPrime = false;
    console.log(isPrime);
    for (var i = 2; i < this.n; i++) {
        for (var j = 2; j < i; j++) {
            if (i%j !== 0){
                isPrime = true;
            } else {
                isPrime = false;
                break;
            }

        }
        if (isPrime) {
            prime = i;
        }

    }
        return prime;
  }



}

