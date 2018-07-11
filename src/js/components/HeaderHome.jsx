import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import logo2 from '../../img/logo2.png';

export default class HeaderHome extends React.Component{
   render(){
        return(<div className="header-home">
            <nav className="navbar navbar-expand-md"> 
                <div className="collapse navbar-collapse" id="main-page-header">
                    <Link className="logo-home-page" to="/home"><img src={logo2} alt="Gift Cloud Logo"></img></Link>
                    <span className="gift-cloud-name"> Gift Cloud </span>
                    <ul className="navbar-nav ml-auto" id="header-buttons">
                        <li className="nav-item" id="about-header-button">
                            <Link className="nav-link about" to="/about">ABOUT</Link>
                        </li>
                        <li className="nav-item" id="login-header-button">
                            <Link className="nav-link" to="/login">LOG IN</Link>
                        </li>
                        <li className="nav-item" id="signup-header-button">
                            <Link className="nav-link" to='/signup'>SING UP</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            
    );
       
   }
    
    
}
