/**
 * Created by todork on 1/18/2018.
 */

function solve(str) {
    let isPalindrome = str === reverseString(str);
    
    console.log(isPalindrome)
}

function reverseString(str) {
    return str.split("").reverse().join("")
}

solve('asddsa');
