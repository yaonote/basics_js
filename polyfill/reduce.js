Array.prototype.llyReduce = function(fn,init) {
    const len = this.length;
    let pre = init;
    let i = 0;
    if(init == undefined){
        pre = this[0]
        i = 1;
    }
    for(i; i < len ; i++) {
        pre = fn(pre,this[i],i)
    }
    return pre
}
var arr = [1,2,5,50,3];
var add = arr.llyReduce(function(preTotal, ele, index){
    return preTotal + ele;
},100)
console.log(add);