import SubmitButton from '../SubmitButton/SubmitButton';
import InputLoginField from '../InputLoginField/InputLoginField';
import InputPasswordField from '../InputPasswordField/InputPasswordField';
import './styles.css';

function LoginForm() {
    return (
        <div className="form" id='form'>
            <div className="login">
                <div className="logo">
                    <h3>Login</h3>
                </div>
                <form>
                    <InputLoginField inputType="email" placeholder="Enter your email" id="email" name="email" />
                    <InputPasswordField inputType="password" placeholder="Enter your password" id="password" name="password" />
                    <SubmitButton value="Login Now" />
                </form>
            </div>
        </div>
    );
}


export default LoginForm;