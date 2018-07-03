import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import HeaderAccount from '../components/HeaderAccount.jsx';
import EditAccount from '../components/EditAccount.jsx';
import Footer from '../components/Footer.jsx';

export default class Home extends React.Component{
   render(){
        return(<div>
            <div className='HeaderAccount'>
                <HeaderAccount />
            </div>
            <div>
                <EditAccount />
            </div>
            <div className='footer-style'>
                <Footer />
            </div>
        </div>
        );
    }
}