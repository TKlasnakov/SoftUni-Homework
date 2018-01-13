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

    if (firstPerson.age >= minAge && secondPerson.age >= minAge) {
        if (firstPerson.age < secondPerson.age) {
            console.log(secondPerson);
        } else {
            console.log(firstPerson);
        }
    } else if (firstPerson.age >= minAge) {
        console.log(firstPerson);
    } else if (secondPerson.age >= minAge) {
        console.log(secondPerson);
    }
}

solve(19, 'Pesho', 119, 'Gosho', 20);