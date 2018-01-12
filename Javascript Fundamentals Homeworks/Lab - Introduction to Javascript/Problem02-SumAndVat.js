/**
 * Created by TKlas on 12.1.2018 г..
 */
function solve(input) {
    let sum = 0;

    for (let number of input) {
        sum += number;
    }

    let vat = sum * 0.2;
    let total = sum + vat;

    console.log(sum);
    console.log(vat);
    console.log(total);
}

solve([1.20, 2.60, 3.50]);