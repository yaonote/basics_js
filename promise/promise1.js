class Promise1 {
    constructor(executor) {
        // 初始化state为等待态
        this.state = 'pending';
        // 成功的值
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;
        let resolve = value => {
            console.log('resolve => value',value)
            // state改变,resolve调用就会失败
            if (this.state === 'pending') {
                // resolve调用后，state转化为成功态
                this.state = 'fulfilled';
                // 储存成功的值
                this.value = value;
            }
        };
        let reject = reason => {
            // state改变,reject调用就会失败
            if (this.state === 'pending') {
                // reject调用后，state转化为失败态
                this.state = 'rejected';
                // 储存失败的原因
                this.reason = reason;
            }
        };
        // 如果executor执行报错，直接执行reject
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
}



const test = () => new Promise1(function(resolve, reject) {
    console.log(1)
    resolve('resolve =>')
})

test()