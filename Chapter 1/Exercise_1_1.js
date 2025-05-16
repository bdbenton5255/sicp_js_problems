//Below is a sequence of statements. What is the result printed by the interpreter in response to each statement? Assume that the sequence is to be evaluated in the order in which it is presented.

10;
//10

5 + 3 + 4;
//12

9 - 1;
//8

6 / 2;
//3

2 * 4 + (4 - 6);
//6

const a = 3;
//3

const b = a + 1;
//4

a + b + a * b;
//20

a === b;
//false

b > a && b < a * b ? b : a;
//3

if ((b > a) && (b < a * b)) {
    return b;
} else {
    return a;
}
//4

if (a === 4) {
    return 6;
} else if (b === 4) {
    6 + 7 + a;
} else {
    return 25;
}
//16