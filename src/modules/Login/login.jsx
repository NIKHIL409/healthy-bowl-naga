import react from "react";
import {
    LoginContainer,
    LoginTitle,
    FormLogin,
    FormGroup,
    LoginButton,
    SignUpLink,
    ForgotPasswordLink,
    DoYouHaveAccount
} from "./login-styles.js";
import Input from "../../components/Input/input.jsx";

const Login = () => {
    const [formData, setFormData] = react.useState({
        mobile: '',
        password: ''
    });

    const handleChange = (event) => {
        setFormData(((prevData) => ({
            ...prevData, [event?.target?.name]: event?.target?.value
        })));
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const { mobile, password } = formData;
        if (mobile && password) {
            console.log("Login successful with mobile:", mobile, "and password:", password);
        }
        else {
            console.log("Please fill in all fields");
        }
    };
    return (
        <LoginContainer>
            <LoginTitle>HEALTHY BOWL</LoginTitle>
            <FormLogin onSubmit={handleLogin}>
                <FormGroup>
                    <Input type="text" label="Mobile" name="mobile" required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="Password" name="password" label="Password" required onChange={handleChange} />
                </FormGroup>
                <LoginButton type="submit" className="LoginButton">Login</LoginButton>
            </FormLogin>
            <ForgotPasswordLink>
                <a href="/forgot-password">Forgot Password?</a>
            </ForgotPasswordLink>
            <DoYouHaveAccount>
                <span>Do you have an account?</span>
            </DoYouHaveAccount>
            <SignUpLink>
                <a href="/Signup">Sign Up</a>
            </SignUpLink>
        </LoginContainer >
    );

}

export default Login;