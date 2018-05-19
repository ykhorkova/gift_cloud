import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
//include images into your bundle
// import rigoImage from '../../img/rigo-baby.jpg';
// import ButtonComponent from '../components/ButtonComponent.jsx';
// JavaScript File

export default class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid"> 
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Gift Cloud</span>
                    <div className="">
                        <button type="button" className="btn btn-primary">LOG IN</button>
                        <button type="button" className="btn btn-link">SIGN UP</button>
                    </div>
                </nav>  
            </div>
        );
    }
    
    
}