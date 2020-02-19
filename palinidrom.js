/**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

// let palindrome = function (word) {
 
//     let len = word.length;

//     let start = word.substring(0, Math.floor(len/2)).toLowerCase();
//     let end = word.substring(len - Math.floor(len/2)).toLowerCase();
//     let flip = end.split('').reverse().join('');

//     return start === flip;

// }

// console.log(palindrome('radar')); //true
// console.log(palindrome('redder')); //true
// console.log(palindrome('window')); //false


let palindrome = function (word) {
    const reverse = word.split("").reverse().join("");
    return word === reverse;
};

console.log(palindrome('radar')); //true
console.log(palindrome('redder')); //true
console.log(palindrome('window')); //false
console.log(palindrome('redssder')); //true

