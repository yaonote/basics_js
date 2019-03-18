

/**
 * 异步的状态 
 *  当resolve 是在异步的流程中的时候
 *  .then 调用的时候 this.state 还是 pending 并没改变 为 fulfilled || rejected
 *  这样的话 then 内的逻辑就执行不了了 
 *  数组是解决的文章最后的情况 不是链式调用的 
 *  就是存储 同一个 promise 实例的 多个then 方法
 *  卧槽卧槽卧槽
 *  本来就是 一个实例里面执行一次 resolve 方法
 *  所以就是在 数组里面循环执行
 */

class Promise3 {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        // 成功存放的数组
        this.onResolvedCallbacks = [];
        // 失败存放法数组
        this.onRejectedCallbacks = [];
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                // 一旦resolve执行，调用成功数组的函数
                console.log('this.onResolvedCallbacks =>',this.onResolvedCallbacks);

                // 这样的话 只要有一个 then 执行 resolve， 剩下也要 执行成功的回调吗 ？？？？？ 

                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };
        let reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                // 一旦reject执行，调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        };
        if (this.state === 'rejected') {
            console.log('here ???')
            onRejected(this.reason);
        };
        // 当状态state为pending时
        if (this.state === 'pending') {
            // onFulfilled传入到成功数组
            console.log('暂存 resolve 函数')
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value);
            })
            // onRejected传入到失败数组
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            })
        }
    }
}

// const test = () => new Promise((resolve, reject) => {
//     return setTimeout(() => {
//         resolve('return setTimeout')
//     })
// })

// test().then(function(res){
//     console.log('then1 res => ',res)
// })
// test().then(function(res){
//     console.log('then2 res => ',res)
// })

var flag = true;
let test = new Promise3(function(resolve, reject) {
        if(flag){
            console.log('always true ???')
            setTimeout(() => {
                resolve('success'); // 就只有这一次 调用啊 哈哈哈哈哈哈
                flag = false;
            },500)
            
        }else{
            console.log('err')
            setTimeout(() => {
                reject('error');
            },1500)
            
        }
})

test.then(function() {console.log('then 1')},function(err) {
    console.log('err ==>>',err)
})
test.then(function() {console.log('then 2222')},function(err) {
    console.log('err ==>>',err)
})


/**
 *  暂存 resolve 函数
    暂存 resolve 函数
    this.onResolvedCallbacks => [ [Function], [Function] ]
    then 1
    then 2
 */