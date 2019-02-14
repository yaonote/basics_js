// 有权访问另外一个函数作用域中的变量的函数


var data = [];

for (let i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();
data[1]();
data[2]();


var data2 = [];

for (var i = 0; i<3; i++){
    data2[i] = (function(num){
        return function() {
            console.log(`num => ${num}`)
        }
    })(i)
}

data2[0]();
data2[1]();
data2[2]();




function foo() { // 运行
    console.log( this.a );
}

var a = 2;

(function() { // 严格模式下调用函数则不影响默认绑定
    "use strict";
    
    foo(); // 2
})();