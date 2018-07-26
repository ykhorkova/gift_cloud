import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";


import Footer from '../components/Footer.jsx';
import HeaderAccount from '../components/HeaderAccount.jsx';
import ProfileBody from '../components/ProfileBody.jsx';



export default class Profile extends React.Component{
   render(){
        return(<div>
            <HeaderAccount />
            <ProfileBody />
            <Footer />
        </div>
        );
    }
}