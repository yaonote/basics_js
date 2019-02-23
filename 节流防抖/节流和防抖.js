// 防抖非立即执行版本

function foo(bar) {
    console.log(`bar => ${bar}`)
}

function debounce(fun, delay = 500){
    return function (args){
        let that = this;
        let _args = args;
        clearTimeout(fun.timer)
        fun.timer = setTimeout(function() {
            fun.call(that, _args)
        },delay)
    }   
}
//  防抖 带立即执行版本
function debounceIm(fun, delay = 500, immediate = false) {
    let timer = null;

    return function(args) {
        let that = this, 
            _args = args;

        if(timer) clearTimeout(timer);

        if(immediate){
            if(!timer) fun.call(that, _args)
            timer = setTimeout(function() {
                timer = null;
            },delay)
        }else{
            timer = setTimeout(function(){
                fun.call(that, _args)
            },delay)
        }
    }
}

