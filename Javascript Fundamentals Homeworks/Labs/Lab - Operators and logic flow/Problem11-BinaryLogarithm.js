/**
 * Created by TKlas on 13.1.2018 г..
 */

function solve(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(Math.log2(array[i]))
    }
}

solve([1024,
    1048576,
    256,
    1,
    2,
    50,
    100]);
