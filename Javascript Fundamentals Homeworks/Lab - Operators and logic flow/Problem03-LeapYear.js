/**
 * Created by TKlas on 13.1.2018 г..
 */

function solve(year) {
    let output = `no`;

    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        output = `yes`
    }

    console.log(output)
}

solve(1900);