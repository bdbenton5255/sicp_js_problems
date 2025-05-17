function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}

test(0, p());

//In applicative order, parameters in test(0, p()); are evaluated first and the program is caught in an endless loop.
//In normal order, test(0, p()); returns 0 as the conditional x === 0 is evaluated first and returns 0. 