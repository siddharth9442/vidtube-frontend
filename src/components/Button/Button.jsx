import React from "react";

const Button = ({
    children,
    type = "button",
    className = "",
    ...props
}) => {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-md bg-blue-600 text-white ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export {
    Button
};