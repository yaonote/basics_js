/**
 * 从第一个开始循环 逐个比较 找到最小的放到第一个
 * 依此类推 
 */

const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];


function selectSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len -1 ; i++){
        for(let j = i+1; j < len; j++){
            if(arr[j] < arr[i]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr
}

console.log(selectSort(arr))