const obj = {
    name: 'test',
}
Object.defineProperty(obj,'name',{
    get(val) {
        console.log('get val =>',val);
        return 'name'
    },  
    set(val) {
        console.log('set val =>',val);
    }
})

console.log(obj.name);
obj.name = 'set name';