// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class ProfileBody extends React.Component{
    render(){
        return(<div className="profile-body">
            <section className="profile-header">
                <div className="first-profile-header">
                    <div className="profile-image">    
                        <img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/nerd-face.png"></img>
                    </div>
                    <h1 className="display-name">Awesome User</h1>
                    <h2 className="username">@gift-cloud-3718640</h2>
                </div>
                <div className="second-profile-header">
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary" data-toggle="dropdown">
                            <i className="fas fa-cog"></i> Profile Options
                        </button>
                        <div className="dropdown-menu">
                            <div className="popover__options">
                                <button className="popover__option strip-btn">
                                    <span className="label"><i className="fas fa-pencil-alt"></i>Edit Profile</span>
                                </button>
                                <hr className="popover__option--divider"></hr>
                                <button className="popover__option strip-btn">
                                    <span className="label"><i className="fas fa-share-square"></i>Share Gifts</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        </div>
            );
    }
}