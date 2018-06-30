import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class SignUpForm extends React.Component{
    render(){
        return(<div className="SignUp">
            <div className="row align-items-center">
                <div className="col"></div>
                <div className="col log-container">
                    <h2 className="h5">Sign Up to Gift Cloud</h2>
                    <a href="#" className="fb btn">
                        <i className="fab fa-facebook-square fa-2x"></i> Sign Up with Facebook
                    </a>
                    <a href="#" className="google btn">
                        <i className="fab fa-google-plus-square fa-2x"></i> Sign Up  with Google+
                    </a>
                    <div className="social-auth__option social-auth__option--social-disclaimer">
                        <p>We will not post any information to your social accounts</p>
                    </div>
                    <hr />
                    <div className="sign-up-with-email-btn">
                        <Link to='signup/email' className="btn">Sign Up with your Email Address</Link>
                    </div>
                    <div className="center-align form-meta whitespace-top">
                        <a href="#">Forgot password?</a> 
                        <span className="content-divider">|</span> 
                        <Link to='login'>Login for Gift Cloud</Link>
                    </div>
                </div>
            </div>    
            <div className="col"></div>
        </div>
        );
    }
}