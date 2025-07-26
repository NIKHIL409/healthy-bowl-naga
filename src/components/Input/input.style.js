import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex; 
    flex-direction: column;
    margin-bottom: 15px;    
    width: 100%;
`;


export const InputLabel = styled.label`
    font-size: 0.8rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 5px;
    display: block;
    `;

export const InputField = styled.input`
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 4px;
    font-size: 1rem;   
    width: 100%;
    box-sizing: border-box;
    outline: none;

    &[type="number"]::-webkit-inner-spin-button, 
    &[type="number"]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        margin: 0;
    }
    &[type="number"] {
        -moz-appearance: textfield;
    }

    &:focus {
        border-color: #4CAF50;
        outline: none;
    }
`;