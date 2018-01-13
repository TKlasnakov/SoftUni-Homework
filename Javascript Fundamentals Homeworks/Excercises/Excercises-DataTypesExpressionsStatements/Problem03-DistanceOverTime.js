/**
 * Created by TKlas on 13.1.2018 г..
 */

function solve(input) {
    let s1 = input[0] * (input[2] / 3600);
    let s2 = input[1] * (input[2] / 3600);
    let distance = Math.abs(s1-s2) * 1000;
    console.log(distance)
}

solve([5, -5, 40]);