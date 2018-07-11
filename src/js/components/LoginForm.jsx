import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component{
    render(){
        return(<div className="login-form container">
            <div className="container">
                <div className="header">
                    <p>Log in to Gift Cloud</p>
                </div>
                <div className="social-medias">
                    <a href="#" className="fb btn">
                        <i className="fab fa-facebook-square fa-2x clearfix"></i> Login with Facebook
                    </a>
                    <a href="#" className="google btn">
                        <i className="fab fa-google-plus-square fa-2x"></i> Login with Google
                    </a>
                </div>    
                <div className="social-disclaimer">
                    <p>We will not post any information to your social accounts</p>
                </div>
                <hr />
                <input type="text" name="username" placeholder="you@example.com" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" className ="login" value="Login" />
                <div className="center-align">
                    <Link to="/recoverpassword" className="forgot-password">Forgot password?</Link> 
                    <span className="content-divider">|</span> 
                    <Link to="/signup" className="sign-up-link">Sign up for Gift Cloud</Link>
                </div>
            </div>
        </div>    
        );
   }
}