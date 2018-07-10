import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";


import Footer from '../components/Footer.jsx';
import AccountGiftBody from '../components/AccountGiftBody.jsx';
import HeaderAccount from '../components/HeaderAccount.jsx';
import Events from '../components/Events.jsx';


export default class Home extends React.Component{
   render(){
        return(<div>
            <HeaderAccount />
            <AccountGiftBody />
            <Footer />
        </div>
        );
    }
}