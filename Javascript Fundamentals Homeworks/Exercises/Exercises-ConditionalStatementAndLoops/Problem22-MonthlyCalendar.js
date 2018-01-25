/**
 * Created by todork on 1/25/2018.
 */

function createMonthlyCalendar(input) {
    const totalDaysInAWeek = 7;

    let day = input[0];
    let month = input[1];
    let year = input[2];
    let today = new Date(year, month - 1, day).getDate();
    let lastMonthLastDay = new Date(year, month - 1, 0).getDate();
    let lastMonthLastDayOfTheWeek = new Date(year, month - 1, 0).getDay();
    let lastMonthLastSunday = new Date(year, month - 1, 0 - lastMonthLastDayOfTheWeek).getDate();
    let lastDayOfCurrentMonth = new Date(year, month, 0).getDate();
    let daysInTheLastWeek = lastMonthLastDay - lastMonthLastSunday + 1;
    let currentMonthCounter = 0;
    let daysInTheWeekCounter = 0;
    let totalDaysCounter = 0;

    let calendar = `<table>\n<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n`;

    function activate() {
        if (lastMonthLastDayOfTheWeek !== 6) {
            addDaysFromLastMonth();
            addDaysForTheFirstWeek();
        }
        addDaysForTheCurrentMonth();
        addDaysForTheNexMonth()
    }

    activate();


    function addDaysFromLastMonth() {
        calendar += `  <tr>`;
        for (let i = 0; i < daysInTheLastWeek; i++) {
            calendar += `<td class="prev-month">${lastMonthLastSunday + i}</td>`;
            daysInTheWeekCounter ++;
            totalDaysCounter++;
        }
    }

    function addDaysForTheFirstWeek() {
        let currentMonthFirstWeekDays = totalDaysInAWeek - daysInTheWeekCounter;
        for (let i = 0; i < currentMonthFirstWeekDays; i++) {
            if (today - 1 === i) {
                calendar += `<td class="today">${i + 1}</td>`;
                daysInTheWeekCounter ++;
                totalDaysCounter++;
                currentMonthCounter ++;
            } else {
                calendar += `<td>${i + 1}</td>`;
                daysInTheWeekCounter ++;
                totalDaysCounter++;
                currentMonthCounter ++;
            }
        }
        daysInTheWeekCounter = 0;
        calendar += `</tr>\n`;
    }

    function addDaysForTheCurrentMonth() {
        calendar += `  <tr>`;
        for (let i = currentMonthCounter; i < lastDayOfCurrentMonth; i++) {
            if (daysInTheWeekCounter === 6 && i !== lastDayOfCurrentMonth - 1) {
                if (today - 1 === i) {
                    calendar += `<td class="today">${currentMonthCounter + 1}</td></tr>\n  <tr>`;
                    daysInTheWeekCounter = 0;
                    totalDaysCounter ++;
                    currentMonthCounter ++;
                } else {
                    calendar += `<td>${currentMonthCounter + 1}</td></tr>\n  <tr>`;
                    daysInTheWeekCounter = 0;
                    totalDaysCounter ++;
                    currentMonthCounter ++;
                }
            } else {
                if (today - 1 === i) {
                    calendar += `<td class="today">${currentMonthCounter + 1}</td>`;
                    daysInTheWeekCounter ++;
                    totalDaysCounter ++;
                    currentMonthCounter ++;
                } else {
                    calendar += `<td>${currentMonthCounter + 1}</td>`;
                    daysInTheWeekCounter ++;
                    totalDaysCounter ++;
                    currentMonthCounter ++;
                }
            }
        }
    }

    function addDaysForTheNexMonth() {
        let daysFromNextMonth = totalDaysInAWeek - daysInTheWeekCounter;
        if (daysFromNextMonth !== 7) {
            for (let i = 0; i < daysFromNextMonth; i++) {
                calendar += `<td class="next-month">${i + 1}</td>`
            }
            calendar += `</tr>`
        }
    }

    calendar += `\n</table>`;

    return calendar;
}

createMonthlyCalendar([12, 7, 1986]);
