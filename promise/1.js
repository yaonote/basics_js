
let test = () => new Promise((resolve,reject) => {resolve(1)})

class MyPromise {
    constructor(executor) {
        this.state = 'pending';   // pending fulfilled rejected
        this.value = undefined;
        this.reason = undefined;
        let resolve = (value) => {
            if(this.state === 'pending'){
                this.state = 'fulfilled';
                this.value = value;
            }
        }   
        let reject = (reason) => {
            if(this.state === 'pending'){
                this.state = 'rejected';
                this.reason = reason;
            }
        }
        try{
            executor(resolve,reject)
        }catch(err) {
            reject(err)
        }
    }   

    then(onFulfilled,onRejected) {
        if(this.state === 'fulfilled'){
            onFulfilled(this.value)
        }
        if(this.state === 'rejected'){
            onRejected && onRejected(this.reason)
        }
    }

    catch(onRejected) {
        if(this.state === 'rejected'){
            onRejected(this.reason)
        }
    }
}

let test1 = function(bar) {
    return new MyPromise(function(resolve, reject) {
        if(bar === 1){
            setTimeout(() => {
                resolve(1)
            },2000)
        }else{
            reject(2)
        }
    })
}
test1(1).then((value) => {
    setTimeout(() => {
        console.log(`then after 2000 => ${value}`)
    },2000)
})