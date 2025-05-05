import React from "react";


const CustomButton = ({ text, onClick, type = "button", className }) => {
    return (
        <button type={type} onClick={onClick} className={`custom-button ${className}`}>
            {text}
        </button>
    );
}


export default CustomButton;