function power(x, n) {

    if (n == 1) {

        return x;



    } else if (n >= 0) {

        return x * power(x, n - 1);



    } else {

        return 1 / power(x, -n);

    }
}
console.log(power(2, -2));