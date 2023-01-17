import todoReducer from './todo/reducers'
import {combineReducers, createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import filterReducer from './filter/reducers'


const rootReducer = combineReducers({
    todos: todoReducer,
    activeTodoFilter: filterReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
