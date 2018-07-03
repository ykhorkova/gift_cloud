import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
// JavaScript File

export default class EditAccount extends React.Component{
    render(){
            return(<div className="EditAccount">
                <div className="container">
                    <div className="sidenav">
                        <a href="#">Account Info</a>
                        <a href="#">My Logins</a>
                        <a href="#">Password</a>
                        <a href="#">Email Notifications</a>
                    </div>
                    <div className="sign-up-with-email">
                        <div className="main">
                            <form>
                                <input type="text" name="first-name" id="first-name" placeholder="First Name" />
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                                <input type="password" name="password" id="password" placeholder="Password" />
                                <div className="help-block">By creating an account you agree to our <a href="#">Terms/Privacy</a></div>
                                <input type="submit" value="Save Account" />
                            </form>
                        </div>   
                    </div>
                </div>                                                                      
            </div>    
            );
    }
}