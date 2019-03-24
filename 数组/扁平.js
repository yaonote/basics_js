


function flatten(arr) {
    while(arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
// console.log(flatten([1,[2,3]]))
flatten([1,[2,3,[4,[23,[1222,'2332'],'12'],5]]])

