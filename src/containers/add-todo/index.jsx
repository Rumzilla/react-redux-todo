import React, { useState } from "react";
import Input from "../../components/input"
import Button from "../../components/button"
import { useDispatch } from "react-redux";
import {addTodoActionCreator} from "../../redux/todo/actions"

const AddTodoContainer = () => {

    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
        dispatch(addTodoActionCreator(inputValue))
        setInputValue('')
        } 
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            if (inputValue.trim() !== '') {
                dispatch(addTodoActionCreator(inputValue))
                setInputValue('')
                } 
        }
    }

    return (
        <div>
            <Input
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            />
            <Button onClick={handleAddTodo}>Add todo</Button>
        </div>
    )
}

export default AddTodoContainer