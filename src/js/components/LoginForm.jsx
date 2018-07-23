import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import MyActions from "../actions/MyActions.jsx";
import MyStore from "../stores/MyStore.jsx";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";


export default class LoginForm extends Flux.Component{
    constructor(){
        super();
        
        this.state = {
            email: "",
            password: ""
        };
        
        this.bindStore(MyStore, () => {
            console.log('the bind works!');
            this.setState({
                accountLogin: MyStore.getLoginAccount()
            });
        });
    }
    
    render(){
        //  if(this.state.buttonClicked === true){
        //     return (<Redirect to="/account" />);
        // }
        
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
                <input type="text" name="username" placeholder="you@example.com" onChange={(e) => this.setState({ email: e.target.value})} value={this.state.email}/>
                <input type="password" name="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value})} value={this.state.password}/>
                <input onClick={() => {
                                console.log(this.state.birthdate);
                                let loginAccount = {
                                    email: this.state.email,
                                    password: this.state.password
                                };
                            this.setState({ buttonClicked: true});
                                MyActions.loginAccount(loginAccount);
                            }
                                }    
                type="submit" className ="login" value="Login" />
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