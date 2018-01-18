/**
 * Created by todork on 1/17/2018.
 */

// ES6
function solve(a) {
    let str = '';
    for (let i = 1; i <= a; i++) {
        str += `${'*'.repeat(i)}\n`
    }
    for (let i = a - 1; i >= 1; i--) {
        str += `${'*'.repeat(i)}\n`
    }

    console.log(str)
}

//ES5
/*function solve(a) {
    let str = '';
    for (let i = 1; i <= a; i++) {
        str += Array(i + 1).join('*') + '\n';
    }
    for (let i = a - 1; i >= 1; i--) {
        str += Array(i + 1).join('*') + '\n';
    }
    console.log(str)
}*/

solve(10);