// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import logo2 from '../../img/logo2.png';

export default class HeaderAccount extends React.Component{
       render(){
        return(<div className="header-account">
            <nav className="navbar navbar-expand-md"> 
                <div className="collapse navbar-collapse" id="main-page-header">
                    <Link className="logo-home-page" to="/home"><img src={logo2} alt="Gift Cloud Logo"></img></Link>
                    <span className="gift-cloud-name"> Gift Cloud </span>
                    <ul className="navbar-nav ml-auto" id="header-buttons">
                        <li className="nav-item" id="about-header-button">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item" id="add-gift-header-button">
                            <Link className="nav-link addGift" to="/AddGift">Add a Gift</Link>
                        </li>
                        <li className="nav-item" id="find-friends-header-button">
                            <Link className="nav-link findFriends" to="/FindFriends">Find Friends</Link>
                        </li>
                        <li className="dropdown-icon">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="checkbox" id="toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="header-widescreen__member--icon">
                                        <img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/nerd-face.png"></img>
                                    </span>
                                </button>
                                <div className="dropdown-menu right md" aria-labelledby="dropdownMenu2">
                                    <a className="dropdown-item" href="#"><i className="far fa-user"></i>My Profile</a>
                                    <div className="dropdown-divider">
                                    </div>
                                    <Link className="dropdown-item" to="/login"><i className="fas fa-cog"></i>Settings</Link>
                                    <a className="dropdown-item" href="#"><i className="fas fa-power-off"></i>Log Out</a>
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

