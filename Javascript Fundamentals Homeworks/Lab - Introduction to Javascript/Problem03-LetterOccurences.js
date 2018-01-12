/**
 * Created by TKlas on 12.1.2018 г..
 */

function solve(str, letter) {

    let counter = 0;

    for (let char of str) {
        if (char === letter) {
            counter ++
        }
    }

    console.log(counter)
}

solve('panther', 'n');
