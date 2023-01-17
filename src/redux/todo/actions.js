import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from "./types";

const addTodoActionCreator = (text) => ({
    type: ADD_TODO,
    payload: {
        text,
        isComplete: false,
        id: Date.now()
    }
})

const toggleTodoActionCreator = (id) => ({
    type: TOGGLE_TODO,
    payload: id
})

const deleteTodoActionCreator = (id) => ({
    type: DELETE_TODO,
    payload: id
})

const clearTodoActionCreator = (id) => ({
    type:CLEAR_TODO,
    payload: id
})

export {
    addTodoActionCreator,
    toggleTodoActionCreator,
    deleteTodoActionCreator,
    clearTodoActionCreator
}
