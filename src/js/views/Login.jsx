import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import HeaderHome from "../components/HeaderHome.jsx";
import Footer from "../components/Footer.jsx";
import LoginForm from "../components/LoginForm.jsx";

export default class Login extends React.Component{
    render(){
        return(<div>
            <HeaderHome />
            <LoginForm />
            <Footer />
        </div>
         );
   }
}