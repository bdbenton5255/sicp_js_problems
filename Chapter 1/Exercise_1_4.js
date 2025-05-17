function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
}

//First, basic functions for adding and subtracting two integers are defined
//Next, a function is defined that adds a and b if b is greater than or equal to 0
//If b is less than or equal to 0, then b is subtracted, so a is added to the absolute value of b