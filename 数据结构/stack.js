/**
 * 栈 数据结构 先进后出  [3,2,1]
 *  push 进栈
 *  pop 移除栈顶元素并返回
 *  peek 返回栈顶元素
 *  length 返回栈的长度
*/

function Stack() {
    this.count = 0;
    this.store = {}

    this.push = function(value) {
        this.store[this.count] = value;
        this.count++;
    }

    this.pop = function() {
        if(!this.count) return undefined;
        this.count--;
        const res = this.store[this.count];
        delete this.store[this.count];
        return res
    }

    this.peek = function() {
        if(!this.count) return undefined;
        return 
    }

    this.length = function() {
        return this.count;
    }
}
const stack1 = new Stack();
stack1.push();

