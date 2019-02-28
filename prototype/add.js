Number.prototype.add = function(num) {
    return this+num
}
Number.prototype.sub = function(num) {
    return this-num
}

console.log((10).add(10).sub(8).add(8))