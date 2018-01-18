/**
 * Created by todork on 1/18/2018.
 */

function solve(day) {
    let dayToLower = day.toLowerCase();
    let obj = {
        monday : 1,
        tuesday : 2,
        wednesday : 3,
        thursday : 4,
        friday : 5,
        saturday : 6,
        sunday : 7
    };

    if(obj[dayToLower]) {
        console.log(obj[dayToLower])
    } else {
        console.log('error')
    }
}

solve('Frabjoyousday');