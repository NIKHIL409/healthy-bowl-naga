import styled from "styled-components";

export const ForgorPasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    height: 100vh;
`;

export const ForgorPasswordTitle = styled.h4`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
`;

export const ForgorPasswordForm = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ForgorPasswordPara = styled.p`
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
    text-align: center;
    width: 80%;
    line-height: 1.5;   
    @media (max-width: 600px) {
        width: 90%;
    }
`;

export const ForgorPasswordButton = styled.button`
    background-color: #4CAF50;                      
    color: white;
    padding: 10px 15px;
    border: none;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;
    
    &:hover {
        background-color: #45a049;
    }
`;

export const BackToLoginLink = styled.div`
    margin-top: 15px;
    a {
        color: #4CAF50;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
    }
    
    a:hover {
        text-decoration: underline;
    }
`;