import React from "react";

const TodoItem = (props) => {
    const {
        text,
        onClick,
        onDelete,
        isComplete
    } = props
    return (
        <li
        onClick={onClick}
        style={{
            textDecoration: isComplete ? 'line-through' : 'none'
        }}
        >
            {text}
            <button onClick={onDelete}>
                delete
            </button>
        </li>
    )
}

export default TodoItem