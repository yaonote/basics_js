function bubbleSort(arr) {
    const len = arr.length;
    for(let i = 0; i< len; i++){
        for(let j = 0; j < len - 1 - i ; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]] // 还有这种操作
            }
        }
    }
    return arr
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

console.log(bubbleSort(arr));

//整体的思路 两两做比较 谁大排后面 每一轮循环都会找到一个当前的最大值
