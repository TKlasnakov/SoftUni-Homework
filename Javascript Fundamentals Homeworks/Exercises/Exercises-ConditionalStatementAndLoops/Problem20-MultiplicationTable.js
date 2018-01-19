/**
 * Created by todork on 1/17/2018.
 */
function solve(input) {
    console.log('<table border="1">');
    for (let row = 0; row <= input; row++) {
        let rowStr = '<tr>';
        for (let col = 0; col <= input; col++) {
            if (row === 0 && col === 0) {
                rowStr += `<th>x</th>`
            } else if (col === 0){
                rowStr += `<th>${row}</th>`
            } else if (row === 0) {
                rowStr += `<th>${col}</th>`
            } else {
                rowStr += `<td>${col * row}</td>`
            }
        }
        console.log(rowStr);
        console.log('</tr>');
    }

    console.log('</table>');
}

solve(5);
