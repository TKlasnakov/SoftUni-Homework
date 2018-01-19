/**
 * Created by todork on 1/17/2018.
 */
function solve(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4*a*c;
    if (discriminant > 0) {
        let x1 = ((-1 * b) + Math.sqrt(discriminant)) / (2 * a);
        let x2 = ((-1 * b) - Math.sqrt(discriminant)) / (2 * a);
        if (x1 > x2) {
            console.log(x2);
            console.log(x1) ;
        } else {
            console.log(x1);
            console.log(x2);
        }
    } else if (discriminant === 0) {
        let x = -1 * b / (2*a);

        console.log(x)
    } else {
        console.log('No');
    }
}

solve(6, 11, -35);