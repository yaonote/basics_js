import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};
// const todoApp = (state = initialState,action) => {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER: 
//             return {...state,visibilityFilter: action.filter};
//         case ADD_TODO: 
//             return {...state,todos:todos(state.todos,action)};
//         case TOGGLE_TODO: 
//             return {
//                 ...state,
//                 todos: todos(state.todos,action)
//             };
//         default: 
//             return state
//     }
// }

const todos = (state = [],action) => {
    switch(action.type) {
        case ADD_TODO: 
            return [...state,{text: action.text, completed: false}];
        case TOGGLE_TODO: 
            return state.map((todo,index) => {
                return index === action.index
                    ? {...todo, completed: !todo.completed}
                    : todo
            })
        default: 
            return state
    }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER: 
            return action.filter;
        default: 
            return state;
    }
}

const todoApp = (state = initialState, action) => {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter,action),
        todos: todos(state.todos,action)
    }
}