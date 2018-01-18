/**
 * Created by todork on 1/18/2018.
 */

function solve(str) {
    let matcher = /[.,\/#!$%\^&\*;:{}=\-_`~()?\s]+/g;
    let splitString = str.split(matcher).join(' ').toUpperCase();

    console.log(splitString)
}

solve('Hi, how are you?');
