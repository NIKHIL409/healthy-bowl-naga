import React from "react";

import react from "react";
import {
    SignUpContainer,
    SignupTitle,
    SignupForm,
    FormGroup,
    SignUpButton,
    AlreadyHaveAccount,
    LoginUpLink
} from "./signup-styles.js";
import Input from "../../components/Input/input.jsx";

const SignUp = () => {
    const [formData, setFormData] = react.useState({
        name: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        setFormData(((prevData) => ({
            ...prevData, [event?.target?.name]: event?.target?.value
        })));
    }


    const handleSignUp = (event) => {
        event.preventDefault();
        const { name, mobile, password, confirmPassword } = formData;
        if (name && mobile && password && confirmPassword) {
            console.log("Sign successful with mobile:", mobile, "and password:", password);
        }
        else {
            console.log("Please fill in all fields");
        }
    };
    return (
        <SignUpContainer>
            <SignupTitle>HEALTHY BOWL</SignupTitle>
            <SignupForm onSubmit={handleSignUp}>
                <FormGroup>
                    <Input type="text" label="Name" name="name" required />
                </FormGroup>
                <FormGroup>
                    <Input
                        style={{
                            // Hide number input spinners for Chrome, Safari, Edge, Opera
                            MozAppearance: 'textfield',
                            appearance: 'textfield',
                        }}
                        inputProps={{
                            style: {
                                MozAppearance: 'textfield',
                                appearance: 'textfield',
                            },
                            // For Firefox
                            onWheel: (e) => e.target.blur(),
                        }}
                        type="number" label="Mobile" name="mobile" required />
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="Password" name="password" label="Password" required />
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="confirmPassword" name="confirmPassword" label="Confirm Password" required />
                </FormGroup>
                <SignUpButton type="submit" className="SignUpButton">Sign Up</SignUpButton>
            </SignupForm>
            <AlreadyHaveAccount>
                <span>Already have an account?</span>
            </AlreadyHaveAccount>
            <LoginUpLink>
                <a href="/login">Login</a>
            </LoginUpLink>
        </SignUpContainer>
    );

}

export default SignUp;