/**
 * Created by todork on 1/15/2018.
 */

function solve(gradian) {
    let degree = gradian * 0.9 % 360;
    if (gradian < 0) {
        degree = 360 + gradian * 0.9 % 360;
    }
    console.log(degree)
}

solve(0);