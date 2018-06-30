import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
// JavaScript File

export default class Account extends React.Component{
    render(){
            return(<div className="Account">
                <div className="sidenav">
                    <a href="#">Account Info</a>
                    <a href="#">My Logins</a>
                    <a href="#">Password</a>
                    <a href="#">Email Notifications</a>
                </div>
                <div className="main">
                    
                </div>                                                                      
            </div>    
            );
    }
}