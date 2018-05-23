import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";


import Footer from '../components/Footer.jsx';
import GiftCards from '../components/GiftCards.jsx';



export default class Home extends React.Component{
   render(){
        return(<div>
            <GiftCards />
            <Footer />
        </div>
        );
    }
}