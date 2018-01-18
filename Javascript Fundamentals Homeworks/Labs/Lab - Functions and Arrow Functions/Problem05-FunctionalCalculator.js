/**
 * Created by todork on 1/18/2018.
 */

function solve(n1, n2, operator) {
    let obj = {
        '+': sum(n1, n2),
        '*': multiply(n1, n2),
        '/': devide(n1, n2)
    };

    function sum(n1, n2) {
        return n1 + n2;
    }

    function multiply(n1, n2) {
        return n1 * n2;
    }

    function devide(n1, n2) {
        return n1 / n2;
    }

    console.log(obj[operator])
}

solve(18, -1, '*');


