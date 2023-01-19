import todoReducer from './todo/reducers'
import {combineReducers, createStore, applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import filterReducer from './filter/reducers'
import postsReducer from './post/reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    todos: todoReducer,
    activeTodoFilter: filterReducer,
    posts: postsReducer
})



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
