// protectPhone('18512341234') => 185****1234

// const protectPhone1 = (phone) => {
//     let arr = phone.split('')
//     arr.splice(3,4,'****');
//     return arr.join('')
// }
// const protectPhone2 = (phone) => {
//     return phone.replace(/(\d{3})\d{4}(\d{4})/,'$1****$2')
// }

// console.log(protectPhone1('18512341234'))
// console.log(protectPhone2('18512341234'))


// intersection([1,2],[2,3]) => [2]

// const intersection = (arr1,arr2) => {
//     return arr1.reduce((acc,curr) => {
//         return arr2.includes(curr) ? [...acc,curr] : acc
//     },[])
// }

// console.log(intersection([1,2],[2,3]))



// 'abcdaaaabcd' => 'abcdabcd'

// const dedupe = (str) => {
//     return str.split('').reduce((acc,curr,index,origin) => {
//         return origin[index-1] === curr ? acc : [...acc,curr]
//     },[]).join('')
// }
// console.log(dedupe('abbcdaaaabcd'));


// 实现栈 Stack 的先进后出的功能

// reduce

// Array.prototype.llyReduce = function(fn,init) {
//     let len = this.length;
//     let i = 0;
//     let pre = init

//     if(init == undefined) {
//         pre = this[0];
//         i = 1;
//     }

//     for(i; i< len; i++){
//         pre = fn(pre,this[i],i)
//     }

//     return pre
// }

// bind


