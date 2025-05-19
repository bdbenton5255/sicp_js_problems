function CubeRoot(num) {

    function improve(num, guess) {
        return (num / (guess * guess) + (guess * 2)) / 3;
    }

    function goodEnough(num, guess) {
        return Math.abs(num - Math.pow(guess, 3)) < 0.0001;
    }

    function cuberootIter(num, guess) {
        console.log(guess);
        if (goodEnough(num, guess)) {
            return Math.round(guess * 10000) / 10000;
        } else {
            return cuberootIter(num, improve(num, guess));
        }
    }

    return cuberootIter(num, 1)

}

console.log(CubeRoot(27));