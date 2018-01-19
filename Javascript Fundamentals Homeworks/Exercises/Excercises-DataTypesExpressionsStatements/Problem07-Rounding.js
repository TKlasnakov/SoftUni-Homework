/**
 * Created by todork on 1/15/2018.
 */

function solve(input) {
    let toFixed = input[1] > 15 ? 15 : input[1];
    let output = parseFloat(input[0].toFixed(toFixed));
    console.log(output);
}
solve([10.5, 3]);