import React from "react";
import { ButtonContainer } from "./button.style";

const Button = ({ type, onClick, children, className }) => {
    return (
        <ButtonContainer
            type={type}
            onClick={onClick}
            className={`btn ${className}`}
        >
            {children}
        </ButtonContainer>
    );
}
export default Button;