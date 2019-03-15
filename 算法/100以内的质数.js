
/**
 * 质数定义：只能被1或者自身整除的自然数（不包括1），称为质数。
 */


// 第一种定义
// const canZc = (fenMu,fenZi) => !(fenMu % fenZi);
// const getNumArr = (num) => Array(num).fill(0).map((_,i)=> i+1);
// function circleGetPrimeNum(num) {
//     if(num === 0 || num === 1 ) return false
//     const arr = getNumArr(num)
//     const res = arr.reduce((acc,curr) => {
//         return (curr === 1 || curr === num) ? acc : [...acc,canZc(num,curr)]
//     },[])
//     return !res.find(item => item)
// }
// function getAll(num) {
//     return getNumArr(num).filter(circleGetPrimeNum)
// }
// console.log(getAll(100))


var prime = function (len) {
    var i, j;
    var arr = [];
    for (i = 1; i < len; i++) {
        for (j = 2; j < i; j++) {
            console.log(` inner ====>>>   i => ${i} *** j => ${j}`)
            if (i % j === 0) {
                break;
            }
        }
        // console.log(`i => ${i} *** j => ${j}`)
        // console.log(`i => ${i}`)
        if (i <= j && i != 1) {
            arr.push(i);
        }
    }
    return arr;
};
console.log(prime(10));


// for(let i = 0; i < 5; i++ ) {
//     for(let j = 2; j< i; j++ ){
//         if(i === 3){
//             break
//         };
//         console.log(`j => ${j}`)
//     }
//     // console.log(`i => ${i}`)
// }