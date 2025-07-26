import React from "react";
import { InputContainer, InputField, InputLabel } from "./input.style";

const Input = ({ type, placeholder, value, onChange, name, label }) => {
    return (
        <InputContainer>
            <InputLabel className="input-label" >{label}</InputLabel>
            <InputField
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                className="input-field"
            />
        </InputContainer>
    );
}
export default Input;