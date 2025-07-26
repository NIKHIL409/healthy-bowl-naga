import React from "react";
import {
    ForgorPasswordContainer,
    ForgorPasswordTitle,
    ForgorPasswordForm,
    ForgorPasswordButton,
    ForgorPasswordPara,
    BackToLoginLink
} from "./forgotPassword-styles.js";
import Input from "../../components/Input/input";
export const ForgorPassword = () => {

    const handleChange = (event) => {
        console.log(event.target.value);
    }

    const handleResetPassword = (event) => {
        event.preventDefault();
        const mobileNumber = event.target.elements[0].value;
        if (mobileNumber) {
            console.log("Reset password request for mobile:", mobileNumber);
        } else {
            console.log("Please enter a valid mobile number");
        }
    }

    return (
        <ForgorPasswordContainer>
            <ForgorPasswordTitle>Forgot Password</ForgorPasswordTitle>
            <ForgorPasswordPara>Please enter your registered mobile number to reset your password.</ForgorPasswordPara>
            <ForgorPasswordForm onSubmit={handleResetPassword}>
                <Input type="number" placeholder=" Mobile Number" required onChange={handleChange} />
                <ForgorPasswordButton type="submit">Reset Password</ForgorPasswordButton>
                <BackToLoginLink>
                    <a href="/login">Back to Login</a>
                </BackToLoginLink>
            </ForgorPasswordForm>
        </ForgorPasswordContainer>
    );
}

export default ForgorPassword;