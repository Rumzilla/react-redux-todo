import React from "react";

const Button = (props) => {
    const {
        onClick,
        children,
        keyPress
    } = props
    return (
        <div>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button
