/**
 * Created by TKlas on 13.1.2018 г..
 */

function solve(bottles, capacity) {
    let boxesNeeded = 0;
    for (let i = 1; i <= bottles; i+= capacity) {
        boxesNeeded ++;
    }

    console.log(boxesNeeded)
}

solve(5, 10);
