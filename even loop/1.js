setTimeout(function() {
    console.log('timeout1');
},1000)

new Promise(function(resolve) {
    console.log('promise1');
    for(var i = 0; i < 1000;i++) {
        i == 999 && resolve();
    }
    console.log('promise2');
}).then(function() {
    console.log('then1');
})

console.log('global1');


/**
 * setTimeout 会将参数的匿名函数
 * 放到 宏任务的 setTimeout 的任务队列中去
 * 
 * new Promise 立即执行
 * 第一个参数的匿名函数会在函数调用栈中执行
 * 
 * then 放入了微任务的 promise 队列中
 * 
 * ‘global1 执行’
 *  
 * 执行微任务中的 任务队列中的任务
 * 
 * 执行宏任务中的 事件 任务队列
 * 
 */