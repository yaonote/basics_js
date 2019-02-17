
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