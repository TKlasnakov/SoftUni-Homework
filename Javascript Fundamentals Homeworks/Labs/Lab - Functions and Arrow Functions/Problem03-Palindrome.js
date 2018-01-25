/**
 * Created by todork on 1/18/2018.
 */

function solve(str) {
    let isPalindrome = str === reverseString(str);

    function reverseString(str) {
        return str.split("").reverse().join("")
    }

    console.log(isPalindrome);
}

solve('asddsa');
