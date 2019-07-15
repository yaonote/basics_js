require('babel-register')({
    presets: ['env']
})

import { createStore } from 'redux';
import todoApp from './reducer';
let store = createStore(todoApp);

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from "./actions";

console.log(store.getState())