/**
 * Created by todork on 1/16/2018.
 */

function solve(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);
    if (xMin <= x && yMin <= y && xMax >= x && yMax >= y) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

solve([12.5, -1, 2, 12, -3, 3]);