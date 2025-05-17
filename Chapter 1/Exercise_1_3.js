function sum_of_larger_squares(n1,n2,n3) {
    if (n1 < n2 && n1 < n3) {
        return (n2*n2) + (n3*n3);
    } else if (n2 < n1 && n2 < n3) {
        return (n1*n1) + (n3*n3);
    } else if (n3 < n1 && n3 < n2) {
        return (n1*n1) + (n2*n2);
    }
}

console.log(sum_of_larger_squares(10,2,6));