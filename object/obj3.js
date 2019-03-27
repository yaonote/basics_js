/**
 * 当在函数内部重写obj时，这个 变量引用的就是一个局部对象了，
 * 而这个 局部对象会在函数执行完毕后立即销毁
 */
function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
}
var person = new Object();
setName(person);
console.log(person.name);