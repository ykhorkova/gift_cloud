// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import HeaderHome from "../components/HeaderHome.jsx";
import Footer from "../components/Footer.jsx";
import EmailSignUp from "../components/EmailSignUp.jsx";


export default class SignUpWithEmail extends React.Component{
    render(){
        return(<div>
            <HeaderHome />
            <EmailSignUp /> 
            <Footer />
        </div>
        );
   }
}