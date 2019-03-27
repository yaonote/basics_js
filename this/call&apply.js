/**
 * 该方法的作用和 apply() 方法类似，只有一个区别，就是call()方法接受的是若干个参数的列表，
 * 而apply()方法接受的是一个包含多个参数的数组。
 */

/**
 * fun.call(thisArg, arg1, arg2, ...)
 * 
 * func.apply(thisArg, [argsArray])
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price); //this 为 Food 调用执行 Product构造函数为 Food函数添加属性
    this.category = 'food';
}

function Toy(name, price) {
    Product.apply(this, [name, price]);
    this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log(cheese)
console.log(fun)

/**
 * 如果没有传递第一个参数，this的值将会被绑定为全局对象。
 * 注意：在严格模式下 this 的值将会是 undefined。
 */
var sData = 'Wisen';

function display() {
    console.log('sData value is %s ', this.sData);
}

display.call(); // sData value is Wisen

/**
 * concat确实具有我们想要的行为，但它实际上并不附加到现有数组，而是创建并返回一个新数组。 
 * 但是我们想要附加到我们现有的阵列......那么现在呢？ 写一个循环？
 */
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array);