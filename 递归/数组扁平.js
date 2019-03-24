Array.prototype.flat = function() {
    var arr = [];
    this.forEach((item,index) => {
        if(Array.isArray(item)){
            arr = arr.concat(item.flat())
        }else{
            arr.push(item)
        }
    })
    return arr
}