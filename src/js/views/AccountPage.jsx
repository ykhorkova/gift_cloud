import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
<<<<<<< HEAD:src/js/Home.jsx


import HeaderHome from './HeaderHome.jsx';
import HomeComponent from './HomeComponent.jsx';
import Footer from './Footer.jsx';


export default class Home extends React.Component{
   render(){
        return(
            <div className="container-fluid"> 
                <HeaderHome />
                <HomeComponent />
                <Footer />
            </div>
=======
// JavaScript File
import GiftCards from '../components/GiftCards.jsx';
import Footer from '../Footer.jsx';

export default class Home extends React.Component{
    render(){
        return(<div>
            <GiftCards />
            <Footer />
        </div>
>>>>>>> 29b0860d64d6ae477506d477a51e9cdf56f2d0cb:src/js/views/AccountPage.jsx
        );
    }
}