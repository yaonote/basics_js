
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

console.log(a.toString())