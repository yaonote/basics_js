/**
 * arrayObject.splice(index,howmany,item1,.....,itemX)
 * index:必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
 * howmany:必需。要删除的项目数量。如果设置为 0，则不会删除项目。
 */

let arr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
let res = arr.splice(0,3,'lujx','test');   
console.log(res);
console.log(arr)