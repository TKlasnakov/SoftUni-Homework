/**
 * Created by todork on 1/25/2018.
 */

function createMonthlyCalendar(input) {

    const totalDaysInAWeek = 7;
    const totalCalendarDays = 35;

    let day = input[0];
    let month = input[1];
    let year = input[2];
    // let date = new Date(year, month - 1, day);
    let lastMonthLastDay = new Date(year, month - 1, 0).getDate();
    let lastMonthLastDayOfTheWeek = new Date(year, month - 1, 0).getDay();
    let lastMonthLastSunday = new Date(year, month - 1, 0 - lastMonthLastDayOfTheWeek).getDate();
    let lastDayOfCurrentMonth = new Date(year, month, 0).getDate();
    let daysInTheLastWeek = lastMonthLastDay - lastMonthLastSunday + 1;
    let daysInTheWeekCounter = 0;
    let totalDaysCounter = 0;


    let calendar = `<table>\n<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n`;

    if (lastMonthLastDayOfTheWeek !== 6) {
        addDaysFromLastMonth()
    }

    function addDaysFromLastMonth() {
        calendar += `<tr>`;
        for (let i = 0; i < daysInTheLastWeek; i++) {
            calendar += `<td class="prev-month">${lastMonthLastSunday + i}</td>`;
            daysInTheWeekCounter ++;
        }
    }

    for (let i = 0; i < lastDayOfCurrentMonth; i++) {

    }


    console.log(daysInTheWeekCounter)
}

createMonthlyCalendar([24, 1, 2018]);