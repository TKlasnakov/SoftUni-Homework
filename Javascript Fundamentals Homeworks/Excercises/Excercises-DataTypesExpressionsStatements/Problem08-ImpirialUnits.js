/**
 * Created by todork on 1/16/2018.
 */
function solve(input) {
    let feet = parseInt(input /12);
    let inches = input % 12;
    console.log(`${feet}'-${inches}''`)
}

solve(11);