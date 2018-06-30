import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class EmailSignUp extends React.Component{
    render(){
        return(<div className="sign-up-with-email">
            <div className="container">
                <div className="header">
                    <span className="login">Log In</span> or 
                    <span className="signup">Sign Up</span>
                </div>
                <hr />
                <form>
                    <input type="text" name="first-name" id="first-name" placeholder="First Name" />
                    <input type="text" name="last-name" id="last-name" placeholder="Last Name" />
                    <input type="date" name="bd" id="bd" placeholder="Your Birthdate" />
                    <input type="email" name="email" id="email" placeholder="Your Email" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <div className="help-block">By creating an account you agree to our <a href="#">Terms/Privacy</a></div>
                    <input type="submit" value="Create Account" />
                </form>
            </div>
        </div>
               );
   }
}