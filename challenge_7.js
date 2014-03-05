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
    var counter = 1;
    var number = 3;
    var isPrime = false;
    
    for (var i = 3; i < 1000000000; i++) {
        if (counter === this.n) {
            break;
        }
        console.log("i"+i);
        for (var j = 2; j < i; j++) {
            if (i%j !== 0){
                //console.log("i"+i);
                //console.log("j"+j);
                isPrime = true;
            } else {
                isPrime = false;
                break;
            }
            //console.log("isPrime: "+isPrime);

        }
        console.log("isPrime: "+isPrime);
        if (isPrime) {
            prime = i;
            counter++;
        }
        console.log("prime: "+prime);
        console.log("counter: "+counter);

    }
        return prime;
  }



}

