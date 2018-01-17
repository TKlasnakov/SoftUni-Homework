/**
 * Created by todork on 1/17/2018.
 */
function solve(n) {
    if (n % 2 === 0) {
        let rowsNumber = n - 1;
        for (let i = 0; i < rowsNumber; i++) {
            let row = '';
            if (i === 0 || i + 1 === rowsNumber || i + 1 === n / 2) {
                for (let i = 1; i <= n * 2 - 1; i++) {
                    if (i === 1 || i === n || i === n * 2 - 1) {
                        row += '+'
                    } else {
                        row += '-'
                    }
                }
            } else  {
                for (let i = 1; i <= n * 2 - 1; i++) {
                    if (i === 1 || i === n || i === n * 2 - 1) {
                        row += '|'
                    } else {
                        row+= ' '
                    }
                }
            }
            console.log(row);
        }

    } else {
        let rowsNumber = n;
        for (let i = 0; i < rowsNumber; i++) {
            let row = '';
            if (i === 0 || i + 1 === rowsNumber || i + 1 === (n + 1) / 2) {
                for (let i = 1; i <= n * 2 - 1; i++) {
                    if (i === 1 || i === n || i === n * 2 - 1) {
                        row += '+'
                    } else {
                        row += '-'
                    }
                }
            } else  {
                for (let i = 1; i <= n * 2 - 1; i++) {
                    if (i === 1 || i === n || i === n * 2 - 1) {
                        row += '|'
                    } else {
                        row+= ' '
                    }
                }
            }
            console.log(row);
        }
    }
}

solve(7);