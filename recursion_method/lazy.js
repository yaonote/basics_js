
// var a = lazy('yh').eat('apple')
// console.log(2);
// a = a.eat('1111').eat('222');
// console.log(3);
// a = a.delay(1000).eat('aaa').delay(2000)
// console.log(4);
// a.eat('bbb').eat('ccc').delay(1000).eat('ddd');
// console.log(1);


// yh eat apple
// 2
// yh eat 1111
// yh eat 222
// 3
// 4
// 1
// yh eat aaa
// yh eat bbb
// yh eat ccc
// yh eat ddd

function Lazy(name) {
    this.promise = null ;
    this.name = name;
}

Lazy.prototype.eat = function(something) {
    if(this.promise){
        this.promise = this.promise.then(res => {
            console.log(`${this.name} eat ${something}`)
        })
    }else{
        console.log(`${this.name} eat ${something}`)
    }
    return this
}
Lazy.prototype.delay = function(time) {
    if(!this.promise){
        this.promise = new Promise(resolve => setTimeout(() => {
            console.log(`休息了 ${time}`)
            resolve()
        }, time))
    }else{
        this.promise = this.promise.then(res => {
            return new Promise(resolve => setTimeout(() => {
                console.log(`休息了 ${time}`)
                resolve()
            }, time))
        })
    }
    return this
}

const lazy = (name) => new Lazy(name)

var a = lazy('lly').eat('app1').delay(3000)
console.log(2)
a = a.eat('app2').delay(2000)
console.log(3)
a = a.eat('app4').delay(1000).eat('app5')


