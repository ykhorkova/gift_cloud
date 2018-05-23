import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
// JavaScript File
import HomeComponent from './HomeComponent.jsx';
import Footer from './Footer.jsx';
import GiftComponents from './GiftComponents.jsx';


export default class Home extends React.Component{
    render(){
        return(<div>
            <HomeComponent />
            <Footer />
        </div>
        );
    }
}

