import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";


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
                                
                            </form>
                        </div>   
                    </div>
                </div>                                                                      
            </div>    
            );
    }
}