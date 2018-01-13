/**
 * Created by TKlas on 13.1.2018 г..
 */

function solve(n) {
    let isPrime = true;
    if (n < 2) {
        isPrime = false;
    }
    if (n === 2) {
        isPrime = true;
    } else if (n % 2 === 0) {
        isPrime = false;
    }

    for (let i = 3; i*i <= n; i += 2) {
        isPrime = n % i !== 0
    }
    console.log(isPrime)
}

solve(81);