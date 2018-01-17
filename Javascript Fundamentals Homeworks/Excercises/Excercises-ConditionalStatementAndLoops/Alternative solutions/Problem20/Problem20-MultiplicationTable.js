/**
 * Created by todork on 1/17/2018.
 */
function multiplication() {
    let input = window.document.getElementById('multiplication-number').value;
    let elemToAppend = window.document.getElementById('multiplication-number-wrapper');
    let rowStr = '<table>';
    for (let row = 0; row <= input; row++) {
        rowStr += '<tr>';
        for (let col = 0; col <= input; col++) {
            if (row === 0 && col === 0) {
                rowStr += `<th class="empty"></th>`
            } else if (col === 0){
                rowStr += `<th class="first-rows">${row}</th>`
            } else if (row === 0) {
                rowStr += `<th class="first-cols">${col}</th>`
            } else {
                rowStr += `<td class="results">${col * row}</td>`
            }
        }
        rowStr += '</tr>';
    }
    rowStr +='</table>';

    elemToAppend.innerHTML = rowStr;
}