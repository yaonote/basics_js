/**
 * every() 对数组中的每一项运行给定的函数，如果函数对每一项都返回true，则返回true
 * some() 对数组中的每一项运行给定函数，如果该函数对任一项返回true,则返回true
 */

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let currentIndex1 = null;
let currentIndex2 = null;
let everyResult = numbers.every(function(item, index, array) {
    currentIndex1 = index;
    return (item > 2);
});
console.log(currentIndex1);
console.log(everyResult);


let someResult = numbers.some(function(item, index, array) {
    currentIndex2 = index;
    return (item > 2);
});
console.log(currentIndex2);
console.log(someResult);