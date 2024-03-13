import { useFormik } from 'formik';
import * as Yup from 'yup';

import {LoginValue} from './types';

import SubmitButton from '../SubmitButton/SubmitButton';
import InputLoginField from '../InputLoginField/InputLoginField';
import InputPasswordField from '../InputPasswordField/InputPasswordField';
import './styles.css';



function LoginForm() {

    const formik = useFormik(
       {initialValues: {
            // key -> value
            // key - react component name
            // value - defolt value
            email:"",
            password:""
       } ,  onSubmit: () => {console.log("submit")} },
    );

       console.log(formik);

   
    const schema = Yup.object().shape

    return (
        <div className="form" id='form'>
            <div className="login">
                <div className="logo">
                    <h3>Login</h3>
                </div>
                <form onSubmit={()=>{}}>
                    <InputLoginField inputType="email" placeholder="Enter your email" id="email" name="email" />
                    <InputPasswordField inputType="password" placeholder="Enter your password" id="password" name="password" />
                    <SubmitButton value="Login Now" />
                </form>
            </div>
        </div>
    );
}


export default LoginForm;