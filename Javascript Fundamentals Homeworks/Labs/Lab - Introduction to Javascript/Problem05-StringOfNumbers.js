/**
 * Created by TKlas on 12.1.2018 г..
 */

function solve(input) {

    let num = parseInt(input);
    let output = '';

    for (let i = 0; i < num; i++) {
        output += i+1;
    }
    console.log(output)
}

solve('11');
