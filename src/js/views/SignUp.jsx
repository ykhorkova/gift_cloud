import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import HeaderHome from "../components/HeaderHome.jsx";
import Footer from "../components/Footer.jsx";
import SignUpForm from "../components/SignUpForm.jsx";


export default class SignUp extends React.Component{
    render(){
        return(<div>
            <HeaderHome />
            <SignUpForm /> 
            <Footer />
        </div>
            );
   }
}