



var test;

(function(bar) {
    var test = '123';
    setTimeout(() => {
        console.log(test)
    },200)
})(true)

console.log(test)