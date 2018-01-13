/**
 * Created by TKlas on 13.1.2018 г..
 */

function solve(a, b, c) {
    let semiPerimeter = (a + b + c) / 2;
    let area = Math.sqrt(semiPerimeter*(semiPerimeter - a)*(semiPerimeter - b)*(semiPerimeter - c));
    console.log(area)
}

solve(2, 3.5, 4);
