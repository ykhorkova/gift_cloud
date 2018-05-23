import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
// JavaScript File
import GiftCards from '../components/GiftCards.jsx';
import Footer from '../Footer.jsx';

export default class Home extends React.Component{
    render(){
        return(<div>
            <GiftCards />
            <Footer />
        </div>
        );
    }
}