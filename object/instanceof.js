/**
 * result = variable instanceof constructor
 */

let person = {
     name:"lujx",
     age:26
 }
let colors = ['black','yellow'];
let pattern = new RegExp();
let name = 'lujx';
console.log(name instanceof Object);
console.log(person instanceof Object); 
console.log(colors instanceof Array);
console.log(pattern instanceof RegExp);
console.log(colors instanceof Object);
console.log(person instanceof Array);


console.log(Object.prototype.toString.call(['1','2']));
console.log(Object.prototype.toString.call({name:"test"}));