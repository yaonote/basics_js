const ADD_TODO = 'ADD_TODO';
// action 的结构
// {
//     type: ADD_TODO, //* type字段是必须的
//     text: 'Build my first Redux app'
// }


// action 创建函数

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}
// 触发 dispatch 
dispatch(addTodo(test))

// or 
const boundAddTodo = text => dispatch(addTodo(text));

// 在react-redux 中 bindActionCreators() 会自动将多个 actions 绑定到 dispatch() 方法上 就像上面做的那样
