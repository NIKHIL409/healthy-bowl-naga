import React from "react";
import { InputContainer, InputField, InputLabel } from "./input.style";

const Input = ({ type, placeholder, value, onChange, name, label, max, min }) => {
    return (
        <InputContainer>
            <InputLabel className="input-label" >{label}</InputLabel>
            <InputField
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                max={max}
                min={min}
                className="input-field"
            />
        </InputContainer>
    );
}
export default Input;