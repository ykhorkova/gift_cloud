import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
//include images into your bundle
// import rigoImage from '../../img/rigo-baby.jpg';
// import ButtonComponent from '../components/ButtonComponent.jsx';
// JavaScript File
import HomeComponent from './HomeComponent.jsx';
import Footer from './Footer.jsx';
// export default class Home extends React.Component{
//     render(){
//         return();
//     }
// }

export default class Home extends React.Component{
    render(){
        return(<div>
            <HomeComponent />
            <Footer />
        </div>
        );
    }
    
    
}

