import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import HeaderHome from "../components/HeaderHome.jsx";
import Footer from "../components/Footer.jsx";

export default class Login extends React.Component{
    render(){
        return(
            <div className="login">
                <HeaderHome />
                <div className="row align-items-center">
                    <div className="col"></div>
                    <div className="col log-conteiner">
                        <h2 className="h5">Log In to Gift Cloud</h2>
                        <a href="#" className="fb btn">
                            <i className="fab fa-facebook-square fa-2x clearfix"></i> Login with Facebook
                        </a>
                        <a href="#" className="google btn">
                            <i className="fab fa-google-plus-square fa-2x clearfix"></i> Login with Google+
                        </a>
                        <div className="social-auth__option social-auth__option--social-disclaimer">
                            <p>We will not post any information to your social accounts</p>
                        </div>
                        <hr />
                        <input type="text" name="username" placeholder="you@example.com" />
                        <input type="password" name="password" placeholder="Password" />
                        <input type="submit" value="Login" />
                        <div className="center-align form-meta whitespace-top">
                            <a href="#">Forgot password?</a> 
                            <span className="content-divider">|</span> 
                            <a href="#">Sign up for Gift Cloud</a>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                <Footer />
            </div>
         );
   }
}