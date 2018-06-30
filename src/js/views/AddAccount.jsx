import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import HeaderAccount from '../components/HeaderAccount.jsx';
import Account from '../components/Account.jsx';
import Footer from '../components/Footer.jsx';

export default class Home extends React.Component{
   render(){
        return(<div>
            <HeaderAccount />
            <Account />
            <Footer />
        </div>
        );
    }
}