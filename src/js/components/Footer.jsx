import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
// JavaScript File

export default class Footer extends React.Component{
    render(){
        return(<div className="footer">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="collapse navbar-collapse" id="main-page-footbar">
                    <ul className="navbar-nav">
                        <li className="nav-item" id="login-footer-button">
                            <a className="nav-link" href="#">Login </a>
                        </li>
                        <li className="nav-item" id="about-footer-button">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item" id="help-footer-button">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                        <li className="nav-item" id="plugins-footer-button">
                            <a className="nav-link" href="#">Browser Plugins</a>
                        </li>
                        <li className="nav-item" id="mobile-app-footer-button">
                            <a className="nav-link" href="#">Mobile App</a>
                        </li>
                    </ul>
                </div>
                <ul className="secondary-navbar-nav">
                    <li className="nav-item" id="copyrights-footer">
                        <span className="copyrights-footer">&copy; Gift Cloud</span>
                    </li>
                </ul>
            </nav>
        </div>    
);
    }
}