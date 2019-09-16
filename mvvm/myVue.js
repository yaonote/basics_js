class Vue{
    constructor(options) {
        this.$options = options;
        this.$el = options.el;
        this.$data = options.data;
        if(this.$el){
            new Observer(this.$data);
            new Compiler(this.$el,this);
        }
    }
}


class Dep{
    constructor() {
        this.subs = [];
    }
    addSub(watcher) {
        this.subs.push(watcher)
    }
    notify() {
        this.subs.forEach(watcher=>watcher.update())
    }
}


class Watcher{
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        this.oldValue = this.get();
    }
    get() {
        Dep.target = this;
        let value = CompileUtil.getVal(this.vm, this.expr);
        Dep.target = null;
        return value;

    }
    update() {
        let newVal = CompileUtil.getVal(this.vm, this.expr);
        if(newVal !== this.oldValue){
            this.cb(newVal)
        }
    }

}


class Observer {
    constructor(data) {
        this.observer(data)
    }
    observer(data) {
        if(data && typeof data == 'object'){
            for(let key in data){
                this.defineReactive(data,key,data[key])
            }
        }
    }
    defineReactive(obj,key,value) {
        this.observer(value);
        let dep = new Dep();
        Object.defineProperty(obj,key,{
            get() {
                Dep.target && dep.addSub(Dep.target)
                return value;
            },
            set:(newVal) => {
                if(newVal == value) return ;
                this.observer(newVal);
                value = newVal;
                dep.notify();
            }
        })
    }
}




class Compiler{
    constructor(el,vm) {
        this.el = this.isElementNode(el)?el:document.querySelector(el);
        this.vm = vm;
        // 把节点都放到内存中 替换完数据之后再整体 放到 dom 中
        let fragment = this.node2fragment(this.el);
        // 替换
        this.compile(fragment);
        // 重新放回到 dom 中
        this.el.appendChild(fragment);
    }
    compile(node) {
        let childNodes = node.childNodes;
        Array.from(childNodes).forEach(node => {
            if(this.isElementNode(node)){
                this.compileElement(node)
                this.compile(node)
            }else{
                this.compileText(node)
            }
        })
    }
    compileText(node) {
        let content = node.textContent;
        if(/\{\{(.+?)\}\}/.test(content)){
            CompileUtil['text'](node,content,this.vm)
        }
    }
    isDirective(attrName) {
        return attrName.startsWith('v-');
    }
    compileElement(node) {
        let attributes = node.attributes;
        Array.from(attributes).forEach(attr => {
            let {name, value:expr} = attr;
            if(this.isDirective(name)){
                let [_,directive] = name.split('-');
                CompileUtil[directive](node,expr,this.vm)
            }
        })
    }
    // 节点移动到内存中
    node2fragment(node) {
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = node.firstChild) {
            fragment.appendChild(firstChild)
        }   
        return fragment;
    }
    isElementNode(node) {
        return node.nodeType === 1;
    }
}

const CompileUtil = {
    getVal(vm,expr) {
        console.log('yao-coding  expr=>',expr)
        return expr.split('.').reduce((data,key) => {
            return data[key]
        },vm.$data)
    },
    setValue(vm,expr,value) {
        expr.split('.').reduce((data,key,index,arr) => {
            if(arr.length-1 === index){
                return data[key] = value;
            }
            return data[key]
        },vm.$data)
    },
    model(node,expr,vm) {
        let fn = this.updater['modelUpdate'];
        let value = this.getVal(vm,expr);
        new Watcher(vm,expr,(newVal) => {
            fn.call(null,node,newVal)
        });
        fn.call(null,node,value)
    },
    getContentValue(vm,expr) {
        return expr.replace(/\{\{(.+?)\}\}/g,(...args) => {
            return this.getVal(vm,args[1]);
        })
    },
    text(node,expr,vm) {
        let fn = this.updater['textUpdate'];
        let content = expr.replace(/\{\{(.+?)\}\}/g,(...args) => {
            // 处理 多个{{}} {{}} 的情况
            new Watcher(vm,args[1],() => {
                fn.call(null,node,this.getContentValue(vm,expr));
            })
            return this.getVal(vm,args[1])
        })
        fn.call(null,node,content)
    },
    updater: {
        modelUpdate(node,value) {
            node.value = value;
        },
        textUpdate(node,value) {
            node.textContent = value;
        }
    }

}