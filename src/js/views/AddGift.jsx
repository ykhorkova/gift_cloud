import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
// JavaScript File
import Footer from '../components/Footer.jsx';
import HeaderHome from '../components/HeaderHome.jsx';
import AddGiftModal from '../components/AddGiftModal.jsx';

export default class AddGift extends React.Component{
    render(){
        return(<div>
            <HeaderHome />
            <AddGiftModal/>
            <Footer />
        </div>
         );
   }
}