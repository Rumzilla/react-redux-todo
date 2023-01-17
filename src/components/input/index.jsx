import React from 'react'

const Input = (props) => {
    const {
        onKeyPress,
        value,
        onChange,
        type = 'text'
    } = props
    return (
        <div>
            <input 
            onKeyPress={onKeyPress}
            type={type}
            onChange={onChange}
            value={value}
            />
        </div>
    )
}

export default Input




