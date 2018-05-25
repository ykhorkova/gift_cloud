// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class HeaderAccount extends React.Component{
       render(){
        return(<div className="header-account">
            <nav className="navbar navbar-expand-md navbar-light bg-light"> 
                <div className="collapse navbar-collapse" id="main-page-header">
                    <h1  className="gift-cloud-name"> Gift Cloud</h1>
                    <ul className="navbar-nav ml-auto" id="header-buttons">
                        <li className="nav-item" id="login-header-button">
                            <Link className="nav-link active" to="/AddGift">Add a Gift</Link>
                        </li>
                        <li className="nav-item" id="signup-header-button">
                            <Link className="nav-link active" to="/FindFriends">Find Friends</Link>
                        </li>
                        <li className="notifiction-icon">
                            <i className="fa fa-bell-o" aria-hidden="true"></i>
                        </li>
                        <li className="dropdown-icon">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="checkbox" id="toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="header-widescreen__member--icon">
                                        <img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/nerd-face.png"></img>
                                    </span>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <a className="dropdown-item" href="#">Your Nickname</a>
                                    <div className="dropdown-divider">
                                    </div>
                                    <Link className="dropdown-item" to="/login">Account Settings</Link>
                                    <a className="dropdown-item" href="#">Log Out</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            
    );
       
    
    
   }
}

