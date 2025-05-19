function square(x) {
    return x * x;
}

function abs(x) {
    return x >= 0 ? x : - x;
}

function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
}

//First version

/*
function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
        ? guess
        : sqrt_iter(improve(guess, x), x);
}
*/

//Second Version

function sqrt_iter(guess, x) {
    return conditional(is_good_enough(guess, x),
        guess,
        sqrt_iter(improve(guess, x),
        x));
}

console.log(sqrt_iter(2));

//Infinite loop, maximum call stack size exceeded.
//Stack overflow as sqrt_iter(improve(guess, x) is evaluated infinitely.