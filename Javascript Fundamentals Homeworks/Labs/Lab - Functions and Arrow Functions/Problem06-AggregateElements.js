/**
 * Created by todork on 1/18/2018.
 */

function solve(input) {
    let sum = 0;
    let inverseValueSum = 0;
    let concat = '';
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        sum += input[i];
        inverseValueSum += 1 / input[i];
        concat += input[i]
    }

    console.log(sum);
    console.log(inverseValueSum);
    console.log(concat);
}

solve([2, 4, 8, 16]);