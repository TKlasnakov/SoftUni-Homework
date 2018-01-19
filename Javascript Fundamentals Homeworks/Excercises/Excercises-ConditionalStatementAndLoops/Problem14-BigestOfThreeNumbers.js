/**
 * Created by todork on 1/16/2018.
 */
function solve(input) {
    if (input[0] > input[1]&& input[0] > input[2]) {
        console.log(input[0]);
    } else if (input[1] > input[2]) {
        console.log(input[1]);
    } else {
        console.log(input[2]);
    }
}

solve([-10, -20, -30]);