/**
 * Created by todork on 1/17/2018.
 */
function solve(input) {
    let rowStr = '<table>';
    for (let row = 0; row <= input; row++) {
        rowStr += '<tr>';
        for (let col = 0; col <= input; col++) {
            if (row === 0 && col === 0) {
                rowStr += `<th>x</th>`
            } else if (col === 0){
                rowStr += `<th>${row}</th>`
            } else if (row === 0) {
                rowStr += `<th>${col}</th>`
            } else {
                rowStr += `<th>${col * row}</th>`
            }
        }
        rowStr += '</tr>';
    }
    rowStr +='</table>';

    console.log(rowStr)
}

solve(10);
