
//**  一座孤岛上，有n个人，围成一圈，指定一个整数m，
//**   第一个人从1开始，每个人数一个数，数到m时把这个人杀死，
//**   然后继续下一个人，从1开始数，再到m再把这个人杀死，
//**   设计一个算法，我坐到哪，才能活到最后

const account = Array(9).fill(0).map((_,i) => i+1);
// let killArr = [];
const lastKill = (arr,m) => {
    let len = arr.length;
    if(len === 1) return `kill last ${arr[0]}`;
    const killNum = m%len === 0 ? len : Math.abs(m%len);   
    let account_arr = [...arr.slice(killNum),...arr.slice(0,killNum-1)];
    console.log(`
        原始数据: ${arr},
        被杀掉的那个人: ${killNum},
        新数组： ${account_arr}
    `)
    return lastKill(account_arr,m)
}
console.log(lastKill(account,3))

/** 
 * 没记住的API
 * Math.abs 取绝对值
 *  slice(start,end) 
 *     start: 开始的index end: 从start开始要删除的个数
 *  slice(params)   只有一个参数的时候 
 *          正数是从params 到数组最后的位置
 *          负数是最后往前数         
 */



