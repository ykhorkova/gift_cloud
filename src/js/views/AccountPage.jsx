import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";


import Footer from '../components/Footer.jsx';
import AccountGiftPage from '../components/AccountGiftPage.jsx';
import HeaderAccount from '../components/HeaderAccount.jsx';



export default class Home extends React.Component{
   render(){
        return(<div>
            <HeaderAccount />
            <AccountGiftPage />
            <Footer />
        </div>
        );
    }
}