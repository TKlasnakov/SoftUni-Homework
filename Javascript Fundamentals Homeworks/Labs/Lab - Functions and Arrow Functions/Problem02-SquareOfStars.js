/**
 * Created by todork on 1/18/2018.
 */

function solve(n) {
    let str = '';
    let width = n || 5;
    for (let i = 1; i <= width; i++) {
        str += '*'.repeat(width) + '\n'
    }

    console.log(str)
}

solve();