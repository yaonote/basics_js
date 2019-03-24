function quickSort(arr) {
    if(arr.length <= 1) return arr;
    var left = [],
        right = [],
        current = arr.splice(0,1)
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < current){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(current, quickSort(right))
}


console.log(quickSort([2,3,4,5,6,0,22]))