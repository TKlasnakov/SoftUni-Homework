/**
 * Created by TKlas on 13.1.2018 г..
 */

function solve(n) {
    console.log('<div class="chessboard">');
    for (let i = 1; i <= n; i++) {
        console.log('<div>');
        for (let j = 1; j <= n; j++) {
            if ((i + j) % 2 === 0) {
                console.log('<span class="black"></span>')
            } else {
                console.log('<span class="white"></span>')
            }
        }
        console.log('</div>')
    }
    console.log('</div>')
}

solve(2);
