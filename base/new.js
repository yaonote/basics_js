// 先一本正经的创建一个构造函数，其实该函数与普通函数并无区别
var Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        return this.name;
    };
}

// 将构造函数以参数形式传入
function New(func) {

    // 声明一个中间对象，该对象为最终返回的实例
    var res = {};
    if (func.prototype !== null) {

        // 将实例的原型指向构造函数的原型
        res.__proto__ = func.prototype;
    }

    // ret为构造函数执行的结果，这里通过apply，将构造函数内部的this指向修改为指向res，即为实例对象
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));//执行了一下构造函数，判断构造函数是否有返回结果  arguments 为 func的参数

    // 当我们在构造函数中明确指定了返回对象时，那么new的执行结果就是该返回对象
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }

    // 如果没有明确指定返回对象，则默认返回res，这个res就是实例对象
    return res;
}

// 通过new声明创建实例，这里的p1，实际接收的正是new中返回的res
var p1 = New(Person, 'tom', 20);
console.log(p1.getName());

// 当然，这里也可以判断出实例的类型了
console.log(p1 instanceof Person); // true



// JavaScript内部再通过其他的一些特殊处理，
// 将var p1 = New(Person, 'tom', 20); 
// 等效于var p1 = new Person('tom', 20);。
// 就是我们认识的new关键字了。具体怎么处理的，我也不知道，别刨根问底了，一直回答下去太难 - -！


// new 的过程

// 声明一个中间对象；
// 将该中间对象的原型指向构造函数的原型；
// 将构造函数的this，指向该中间对象；
// 返回该中间对象，即返回实例对象。


