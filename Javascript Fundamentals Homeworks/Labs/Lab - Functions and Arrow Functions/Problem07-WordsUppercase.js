/**
 * Created by todork on 1/18/2018.
 */

function solve(str) {
    let matcher = /\w+/g;
    let words = str.match(matcher).join(', ').toUpperCase();

    console.log(words)
}

solve('Hi, how are you I am fine E?');
