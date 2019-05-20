/**
 * 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
    输出: [5, 6, 7, 1, 2, 3, 4]
    解释:
    向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
    向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
    向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
 */

// 输入: [-1, -100, 3, 99] 和 k = 2
// 输出: [3, 99, -1, -100]
// 解释: 
// 向右旋转 1 步: [99, -1, -100, 3]
// 向右旋转 2 步: [3, 99, -1, -100]


const changeArr = (arr,k) => {
    const len = arr.length;
    return arr.reduce((acc,curr,idx,origin) => {
        const temp = idx+k <= len-1 ? idx+k : idx+k-len;
        acc[temp] = curr;
        return acc
    },[])
}
const test = [-1, -100, 3, 99];
const res = changeArr(test,0)

console.log(res)



const moveArr = (arr,key) => {
    return [...arr.splice(-key%arr.length).concat(arr)]
}