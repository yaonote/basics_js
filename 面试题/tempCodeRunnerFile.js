function composeFunctions (...funcs) {
    if(funcs.length === 0){
        return arg => arg
    }
    if(funcs.length === 1){
        return funcs[0]
    }
    return funcs.reduce((acc,curr) => (...args) => curr(acc(...args)))
}

const add = x => x + 1;
const multiply = (x, y) => x * y;
const xx = x => x + 10;
const multiplyAdd = composeFunctions(multiply, add, xx);
// multiplyAdd(3, 4) // 返回 13

console.log(multiplyAdd(3, 4))