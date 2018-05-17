import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
//include images into your bundle
// import rigoImage from '../../img/rigo-baby.jpg';
// import ButtonComponent from '../components/ButtonComponent.jsx';
// JavaScript File

export default class Home extends React.Component{
    render(){
        return(<div>
            <body>
                <header>
                    <h1 className="head-name">Gift Cloud</h1>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">LOG IN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false">SIGN UP</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                        </div>
                        <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                        </div>
                    </div>   
                </header>
                <div className="container-fluid">
                    <ul>
                        <li>Test</li>
                    </ul>
                </div>
                <footer>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                                <li className="nav-item" id="extension-footer-button">
                                    <a className="nav-link" href="#">Extension</a>
                                </li>
                                <li className="nav-item" id="mobile-app-footer-button">
                                    <a className="nav-link" href="#">Mobile App</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </footer>
            </body>
        </div>);
    }
}