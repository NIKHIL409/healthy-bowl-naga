import react from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LoginContainer,
    LoginTitle,
    FormLogin,
    FormGroup,
    LoginButton,
    SignUpLink,
    ForgotPasswordLink,
    DoYouHaveAccount
} from './login-styles.js';
import Input from '../../components/Input/input.jsx';
const Login = () => {
    const navigate = useNavigate();
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
            navigate('/dashboard');
            console.log('Login successful with mobile:', mobile, 'and password:', password);
        }
        else {
            console.log('Please fill in all fields');
        }
    };
    return (
        <LoginContainer>
            <LoginTitle>HEALTHY BOWL</LoginTitle>
            <FormLogin onSubmit={handleLogin}>
                <FormGroup>
                    <Input type='text' label='Mobile' name='mobile' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type='password' id='Password' name='password' label='Password' required onChange={handleChange} />
                </FormGroup>
                <LoginButton type='submit' className='LoginButton'>Login</LoginButton>
            </FormLogin>
            <ForgotPasswordLink>
                <a href='/forgotpassword'>Forgot Password?</a>
            </ForgotPasswordLink>
            <DoYouHaveAccount>
                <span>Do you have an account?</span>
            </DoYouHaveAccount>
            <SignUpLink>
                <a href='/signup'>Sign Up</a>
            </SignUpLink>
        </LoginContainer >
    );

}

export default Login;