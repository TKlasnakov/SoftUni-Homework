/**
 * Created by TKlas on 13.1.2018 г..
 */

function solve(n) {
    let numberIs = n % 2 === 0 ? 'even' : n % 1 === 0 ? 'odd' : 'invalid';
    console.log(numberIs)
}

solve(1.5);
