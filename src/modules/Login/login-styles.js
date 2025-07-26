import styled from "styled-components";


export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    height: 100vh;
    `;

export const LoginTitle = styled.h4`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
`;

export const FormLogin = styled.form`
    
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;  
`;

export const LoginButton = styled.button`
    background-color: #4CAF50;                      
    color: white;
    padding: 10px 15px;
    border: none;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    `;

export const SignUpLink = styled.div`
    margin-top: 10px;
    a {
        color: #4CAF50;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
    }   
`;
export const DoYouHaveAccount = styled.div`
    margin-top: 25px;
    font-size: 14px;
    color: #333;
    font-weight: 500;
`;
export const ForgotPasswordLink = styled.div`
    margin-top: 10px;
    a {
        color: #333;
        text-decoration: none;
        font-size: 14px;
         font-weight: 500;
    }
`;
