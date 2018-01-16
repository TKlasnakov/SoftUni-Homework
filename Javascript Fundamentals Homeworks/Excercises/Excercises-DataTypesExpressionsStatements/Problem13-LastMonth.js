/**
 * Created by todork on 1/16/2018.
 */

function solve(input) {
    let givenDate = new Date(input[2], input[1] - 1, 0);

    console.log(givenDate.getDate());
}

solve([13, 12, 2004]);
