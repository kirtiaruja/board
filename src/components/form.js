import React from "react";
import '../css/form.css';
import google from "../assests/google-icon.webp";
import apple from "../assests/Apple-logo.png"
const SignIn = () => {
    return (
        <>
            <div className="wrapper">
                <div className="title">
                    <label>Sign In</label><br />
                    <span>Sign in to your account</span>
                </div>
                <div className="direct_login">
                    <div className="google">
                        <button><img src={google} /><label>Sign in with Google</label></button>
                    </div>
                    <div className="apple">
                        <button><img src={apple} /><label>Sign in with Apple</label></button>
                    </div>
                </div>
                <div className="form_wrapper">
                    <div className="email_input">
                        <label>Email address</label><br />
                        <input type="email" name="email" />
                    </div>
                    <div className="password_input">
                        <label>Password</label><br />
                        <input type="password" name="password" />
                    </div>
                    <div className="forgotPassword"><a href="#">Forgot Password ?</a></div>
                    <div className="sign_in_button">
                        <button>Sign In</button>
                    </div>

                </div>
            </div>
            <div className="register_here">
                <label>Don't have an account? <a href="#">Register here</a> </label>
            </div>
        </>
    );

}
export default SignIn;