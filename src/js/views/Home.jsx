import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
// JavaScript File
import HomeCollage from '../components/HomeCollage.jsx';
import Footer from '../components/Footer.jsx';
import HeaderHome from '../components/HeaderHome.jsx';


export default class Home extends React.Component{
    render(){
        return(<div>
            <HeaderHome />
            <HomeCollage />
            <Footer />
        </div>
        );
    }
}

