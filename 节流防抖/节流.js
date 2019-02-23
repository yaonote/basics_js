// 时间戳版本

function throttle(fun, delay = 500) {
    let previous = 0;
    return function(args) {
        let now = Date.now(),
            that = this,
            _args = args;

        if(now - previous > delay){
            fun.apply(that, _args);
            previous = now;
        }
    }
}

// 定时器版本

function throttle2(fun, delay = 500) {
    let timer;
    return function(args) {
        let that = this;
        let _args = args;
        if(!timer){
            timer = setTimeout(function() {
                timer = null;
                fun.apply(that,_args)
            })
        }
    }
}

// 时间戳+定时器
// 第一次触发可以立即响应, 结束触发后也能有响应
function throttle3(fun, delay = 500) {
    let timer = null;
    let previous = 0;
    return function(args) {
        let now = Date().now();
        let remianing = delay - (now - previous);

        let that = this;
        let _args = args;

        clearTimeout(timer)

        if(remianing <= 0) {
            fun.apply(that, _args);
            previous = Date.now();
        }else{
            // 上面会清除定时器,实际上这个定时器只有最后一次才会执行
            timer = setTimeout(fun, remianing)
        }
    }
}