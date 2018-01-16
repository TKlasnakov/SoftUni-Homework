/**
 * Created by todork on 1/16/2018.
 */

function solve(movie, day) {
    let dayOfTheMovie = day.toLowerCase();
    let movieContainer = {
        "The Godfather": {
            monday: 12,
            tuesday: 10,
            wednesday: 15,
            thursday: 12.5,
            friday: 15,
            saturday:25,
            sunday: 25
        },
        "Schindler&'s List": {
            monday: 8.5,
            tuesday: 8.5,
            wednesday: 8.5,
            thursday: 8.5,
            friday: 8.5,
            saturday:15,
            sunday: 15
        },
        "Casablanca": {
            monday: 8,
            tuesday: 8,
            wednesday: 8,
            thursday: 8,
            friday: 8,
            saturday:10,
            sunday: 10
        },
        "The Wizard of Oz": {
            monday: 10,
            tuesday: 10,
            wednesday: 10,
            thursday: 10,
            friday: 10,
            saturday:15,
            sunday: 15
        },
    };

    if (movieContainer &&  movieContainer[movie] && movieContainer[movie][dayOfTheMovie]) {
        console.log(movieContainer[movie][dayOfTheMovie])
    } else {
        console.log('error');
    }
}

solve('SoftUni', 'Nineday');
