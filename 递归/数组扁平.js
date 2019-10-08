Array.prototype.myFlat = function() {
    var result = [];
    this.forEach(item => {
        if(Array.isArray(item)){
            result = result.concat(item.myFlat())
        }else{
            result.push(item)
        }
    })
    return result;
}
