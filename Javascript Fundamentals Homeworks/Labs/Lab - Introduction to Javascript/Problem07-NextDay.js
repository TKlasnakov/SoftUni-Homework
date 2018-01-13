/**
 * Created by TKlas on 12.1.2018 г..
 */

function solve(year, month, day) {
    let dateString = `${year}-${month}-${day + 1}`;
    let date = new Date(dateString);
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDay = date.getDate();
    if(year === 1 && day === 1) {
        currentYear = 1901;
        currentDay = 2;
    }
    let output = `${currentYear}-${currentMonth}-${currentDay}`;
    console.log(output)
}

solve(2016, 9, 30);
