//参考 https://juejin.im/post/5bdfd3e151882516c6432c32
/** 执行上下文的创建
 * 
 *  1  创建阶段
 * 
 *          ExecutionContext = {  
                ThisBinding = 'this value',     // 确定this 
                LexicalEnvironment = { ... },   // 词法环境
                VariableEnvironment = { ... },  // 变量环境
            }
 * 
 *         1、this绑定
 *              1、全局执行上下文 
 *                  全局对象 (浏览器中指向 window  node 中指向文件的 module 对象)
 *              2、函数执行上下文
 *                  1、默认绑定
 *                  2、隐式绑定
 *                  3、显示绑定
 *                  4、new绑定
 *                  5、箭头函数
 *         2、词法环境 * LexicalEnvironment ( 全局环境和函数环境 )
 *              1、环境记录: 存储变量和函数声名的实际位置
 *              2、对外部环境的引用: 可以访问的外部词法环境 ???
 *         3、变量环境 * VariableEnvironment
 *              变量环境也是一个词法环境 具有词法环境的所有属性
 *              
 *  2  执行阶段
 */



let a = 20;  
const b = 30;  
var c;

function multiply(e, f) {  
    console.log(this)
    var g = 20;  
    return e * f * g;  
}

c = multiply(20, 30);

console.log(c)

//全局环境
GlobalExectionContext = {
    ThisBinding: 'Global Object',
  
    LexicalEnvironment: {   // 词法环境
        EnvironmentRecord: {  //环境记录
            Type: "Object",  
            // 标识符绑定在这里  
            a: ' uninitialized ',  
            b: ' uninitialized ',  
            multiply: ' func '  
        }, 
        outer: 'null'  // 对外部的引用
    },
  
    VariableEnvironment: {  // 变量环境
        EnvironmentRecord: {  
            Type: "Object",  
            // 标识符绑定在这里  
            c: undefined,  
        },
        outer: 'null'  
    }  
}

FunctionExectionContext = {   //函数环境
    ThisBinding: 'Global Object',

    LexicalEnvironment: {  
        EnvironmentRecord: {  
            Type: "Declarative",  
            // 标识符绑定在这里  
            Arguments: {0: 20, 1: 30, length: 2},  
        },  
        outer: 'GlobalLexicalEnvironment'  
    },

    VariableEnvironment: {  
        EnvironmentRecord: {  
            Type: "Declarative",  
            // 标识符绑定在这里  
            g: undefined  
        },  
        outer: 'GlobalLexicalEnvironment'  
    }  
}




function getName() { //函数声明
    console.log(2)
}
var getName = function(){console.log(1)} //函数表达式

getName()// 1

// 关于这个的解释啊
/**
 * 函数表达式会先提升
 * 后面提升的变量就会cover 掉函数声明
 */