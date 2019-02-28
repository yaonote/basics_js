function createCurry(func,args) {
    var arity = func.length;
    var args = args || [];
    return function() {
        var _args = Array.prototype.slice.call(arguments);
        [].push.apply(_args, args) // _args = [...args,...args]
        if(_args.length < arity) {
            return createCurry.call(this, func, _args)
        }
        return func.apply(this, _args)
    }
}

function check(targetString, reg) {
    return reg.test(targetString);
}

var _check = createCurry(check)

var checkPhone = _check(/^1[34578]\d{9}/)

console.log(checkPhone('183888888'));


function add() {
    var _args = [].slice.apply(arguments);
    var adder = function() {
        var _adder = function() {
            _args.push(...arguments);
            return _adder;
        }

        _adder.valueOf = function() {
            return _args.reduce(function(a,b) {
                console.log(`item => ${b}`)
                return a + b;
            })
        }

        return _adder;
    }

    return adder(..._args);
}

const a = add(1,2)(1)(1)(2)

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


function add2() {
    const _args = [...arguments];
    const _add = function() {
        _args.push(...arguments);
        return _add
    }
    _add.toString = function() {
        return _args.reduce((acc,curr) => acc+curr)
    }
    return _add
}

const a = add2(1,2)(1)(1)(2)



/**
 * 是函数的隐式转换。当我们直接将函数参与其他的计算时，
 * //函数会默认调用toString方法，直接将函数体转换为字符串参与计算。
 */

