


class YPromise{
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;


        this.onResolveCallbacks = [];

        this.onRejectedCallbacks = [];



        let resolve = (value) => {
            if(this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;

                this.onResolveCallbacks.forEach(fn => fn());
            }
        };

        let reject = (reason) => {
            if(this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;

                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }
        try{
            executor(resolve,reject)
        }catch(err) {
            reject(err)
        }
    }

    then(onFulfilled, onRejected) {

        let promise2 = new YPromise((resolve, reject) => {
            if(this.state === 'fulfilled') {
                let x = onFulfilled(this.value);
                resolvePromise(promise2, x, resolve, reject)
            }
    
            if(this.state === 'rejected') {
                let x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject)
            }

            if(this.state === 'pending') {
                this.onResolveCallbacks.push(() => {
                    let x = onFulfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject)
                })

                this.onRejectedCallbacks.push(() => {
                    let x = onRejected(this.reason);
                    resolvePromise(promise2, x, resolve, reject)
                })
            }
        })
        return promise2;
       
    }


}