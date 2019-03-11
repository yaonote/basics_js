function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [].slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var adder = function () {
        var _adder = function() {
            // [].push.apply(_args, [].slice.call(arguments));
            _args.push(...arguments);
            return _adder;
        };

        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    // return adder.apply(null, _args);
    return adder(..._args);
}

var a = add(1);   // f 10

// var b = a + 10;

console.log(a)


function add() {
    var _args = [...arguments]
    var _add = function () {
        _args.push(...arguments)
        return _add
    }
    _add.toString=function () { 
        return _args.reduce(function (a,b) {
            return a+b
        })
    }
    return _add
}

console.log(add(1))




function sort(arr) {
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr.length - 1 - i ; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}


