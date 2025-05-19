//Large numbers will lead to answers that do not satisfy the accuracy test and iterate too many times despite being relatively close.

//Small numbers will not calculate accurately as they may be less than the tolerance. A way to fix this is when the new value is a small fraction of the guess.


function newSquareRoot(num) {

    function average(num1, num2) {
        return (num1 + num2) / 2;
    }

    function goodEnough(guess1, guess2) {
        return (guess1 / guess2) >= 0.999 && (guess1/guess2) <= 1.001;
    }
    
    function improve(guess) {
        return average(guess, num/guess);
    }

    function squareRootIter(guess) {
        console.log(guess);
        if (goodEnough(guess, improve(guess))) {
            return Math.round(improve(guess) * 1000) / 1000;
        } else {
            return squareRootIter(improve(guess));
        }
    }
    
    return squareRootIter(1);

}

console.log(newSquareRoot(100));