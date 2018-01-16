/**
 * Created by TKlas on 12.1.2018 г..
 */

function solve(minAge, firstName, firstAge, secondName, secondAge) {

    let firstPerson = {
        name: firstName,
        age: firstAge
    };
    let secondPerson = {
        name: secondName,
        age: secondAge
    };
    if (minAge <= firstPerson.age) {
        console.log(firstPerson);
    }
    if (minAge <= secondPerson.age) {
        console.log(secondPerson);
    }
}

solve(19, 'Pesho', 119, 'Gosho', 20);