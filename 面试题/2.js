// 特定语法匹配替换
// 说明：匹配字符串中形如 =g文字文字= 的语法，并将相应部分转化为对应的标签文字文字
// 示例：
transform('=g1.18 进入开发=');  // <g>1.18 进入开发</g>
transform('=p1.23 联调(-1)=，=p1.25 发布(+1)=')//  <g>1.23 联调(-1)</g>，<g>1.25 发布(+1)</g>
transform('1.25 发布') // 1.25 发布

const transform = (str) => str.replace(/=g|=/g,(s) => {
    return {
        '=g': '<g>',
        '=': '</g>'
    }[s]
})

const transform = (str) => {
    return str.replace(/=([A-z])([a-z])/g,'$1<g>$2').replace(/=/g,'</g>')
}
console.log(transform('=Hs1.23 联调(-1)=，=g1.25 发布(+1)='));
















// 合并数组中相邻且重复的元素
// 说明：请实现一个函数 merge，传入一个数组，合并数组中【相邻且重复】的元素。
// 示例：
merge([3,2,2,4,5,5,6,2,1]); // 输出[3,2,4,5,6,2,1]
merge([3,2,3]); // 输出[3,2,3]
merge([2,2,3]); // 输出[2,3]


// 函数组合运行
// 说明：实现一个方法，可将多个函数方法按从左到右的方式组合运行。
// 如composeFunctions(fn1,fn2,fn3,fn4)等价于fn4(fn3(fn2(fn1))。 示例：
const add = x => x + 1;
const multiply = (x, y) => x * y;
const multiplyAdd = composeFunctions(multiply, add);
multiplyAdd(3, 4) // 返回 13


// 第二个问题是Promise的用法以及实现原理。
// 第三个问题是前端存储方式，以及它们之间的优缺点。
// 第四个问题是移动端页面适配解决方案，我的回答是淘宝的flexible.js来做屏幕适配，然后面试官询问了它的实现原理，以及浏览器中几种长度单位（rem、em、px）的特点和区别，很可惜这块我答得不是很好，没有完全理清物理像素和逻辑像素的区别，面试官小哥哥也告诉我了解一个框架的实现原理比用一个框架更有意思，不是么？
// 第五个问题是React、Vue之间的区别和实现原理，另外问了下React中Fibber是什么？我只知道Fibber是调度，可以提升react渲染的效率，然鹅不太清楚具体的实现原理。
// 第六个问题是JS的Event Loop。
// 第七个问题是三次握手和四次挥手。