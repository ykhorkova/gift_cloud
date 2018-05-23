import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import HeaderHome from './HeaderHome.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';



export default class Home extends React.Component{
   render(){
        return(
            <div className="container-fluid"> 
                <HeaderHome />
                <Login />
                <Footer />
            </div>
        );
    }
    
    
}

