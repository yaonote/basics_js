'use strict'

var a = 20;


function fn() {
    return function foo() {
        console.log(this.a);
    }
}
fn();


var a = 20;
var obj = {
    a: 10,
    c: this.a + 20,
    fn: function () {
        return this.a;
    }
}

console.log(obj.c); // 30
console.log(obj.fn()); // 10
