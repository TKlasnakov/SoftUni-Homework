/**
 * Created by todork on 1/15/2018.
 */

function solve(input) {
    let p = input[0];
    let i = input[1] / 100;
    let n = 12 / input[2];
    let t = input[3];
    let totalValue = p * Math.pow(1 + i / n, n * t );

    console.log(totalValue.toFixed(2))
}

solve([100000, 5, 12, 25]);
