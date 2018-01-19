/**
 * Created by TKlas on 13.1.2018 г..
 */

function solve(input) {
    let calculatedCoordinates = Math.pow(input[3] - input[0], 2) + Math.pow(input[4] - input[1], 2) + Math.pow(input[5] - input[2], 2);
    let distance = Math.sqrt(calculatedCoordinates);
    console.log(distance);
}

solve([3.5, 0, 1, 0, 2, -1]);
