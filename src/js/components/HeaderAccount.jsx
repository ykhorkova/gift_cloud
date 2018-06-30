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
                        <li>
                            <img className="notification-icon" src="https://cdn4.iconfinder.com/data/icons/web-pack/64/bell-512.png"></img>
                        </li>
                        <li className="nav-item" id="add-gift-header-button">
                            <Link className="nav-link active addGift" to="/AddGift">Add a Gift</Link>
                        </li>
                        <li className="nav-item" id="find-friends-header-button">
                            <Link className="nav-link active findFriends" to="/FindFriends">Find Friends</Link>
                        </li>
                        <li className="dropdown-icon">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="checkbox" id="toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="header-widescreen__member--icon">
                                        <img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/nerd-face.png"></img>
                                    </span>
                                </button>
                                <div className="dropdown-menu md" aria-labelledby="dropdownMenu2">
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

